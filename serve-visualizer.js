const fs = require("fs");
const http = require("http");
const path = require("path");
const { spawn } = require("child_process");

const PORT = Number(process.env.PORT ?? process.argv[2] ?? 8080);
const ROOT = __dirname;
const JOB_STATUS_JSON = path.join(ROOT, "data", "job-status.latest.json");
const JOBS = {
  "board-sample": {
    label: "Build solved board sample",
    command: process.execPath,
    args: ["sudoku-9x9-board-sample.js", "--count=100", "--seed=phase-one-board-finding"],
  },
  "asymmetric-sequences": {
    label: "Asymmetric sequence scan",
    command: process.execPath,
    args: ["sudoku-9x9-asymmetric-sequences.js", "--source=sample"],
  },
};
const runningJobs = new Map();

const TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const resolved = path.join(ROOT, normalized);
  if (!resolved.startsWith(ROOT)) return null;
  return resolved;
}

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

function baseJobStatus() {
  const stored = readJson(JOB_STATUS_JSON, { jobs: {} });
  const jobs = {};
  for (const [id, config] of Object.entries(JOBS)) {
    const previous = stored.jobs?.[id] ?? {};
    const running = runningJobs.get(id);
    const previousState = previous.state === "running" && !running ? "interrupted" : previous.state;
    jobs[id] = {
      id,
      label: config.label,
      state: running ? "running" : previousState ?? "idle",
      pid: running?.pid ?? null,
      startedAt: running?.startedAt ?? previous.startedAt ?? null,
      stoppedAt: running ? null : previous.stoppedAt ?? null,
      exitCode: running ? null : previous.exitCode ?? null,
      signal: running ? null : previous.signal ?? null,
      logTail: previous.logTail ?? [],
    };
  }
  return { updatedAt: new Date().toISOString(), jobs };
}

function persistJobStatus() {
  const status = baseJobStatus();
  writeJson(JOB_STATUS_JSON, status);
  return status;
}

function sendJson(response, status, body) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(body, null, 2));
}

function appendJobLog(jobId, line) {
  const status = readJson(JOB_STATUS_JSON, { jobs: {} });
  const existing = status.jobs?.[jobId] ?? {};
  const logTail = [...(existing.logTail ?? []), line].slice(-20);
  status.jobs = {
    ...(status.jobs ?? {}),
    [jobId]: {
      ...existing,
      logTail,
    },
  };
  writeJson(JOB_STATUS_JSON, status);
}

function startJob(jobId) {
  const config = JOBS[jobId];
  if (!config) return { status: 404, body: { error: "unknown job" } };
  if (runningJobs.has(jobId)) return { status: 409, body: { error: "job already running", jobId } };
  if (runningJobs.size > 0) {
    return {
      status: 409,
      body: {
        error: "another job is already running",
        runningJobIds: [...runningJobs.keys()],
      },
    };
  }

  const child = spawn(config.command, config.args, {
    cwd: ROOT,
    stdio: ["ignore", "pipe", "pipe"],
  });
  const startedAt = new Date().toISOString();
  runningJobs.set(jobId, { child, pid: child.pid, startedAt });

  appendJobLog(jobId, `started ${startedAt}`);
  child.stdout.on("data", (chunk) => {
    for (const line of String(chunk).trim().split(/\r?\n/).filter(Boolean)) appendJobLog(jobId, line);
  });
  child.stderr.on("data", (chunk) => {
    for (const line of String(chunk).trim().split(/\r?\n/).filter(Boolean)) appendJobLog(jobId, `ERR ${line}`);
  });
  child.on("exit", (exitCode, signal) => {
    runningJobs.delete(jobId);
    const status = readJson(JOB_STATUS_JSON, { jobs: {} });
    const previous = status.jobs?.[jobId] ?? {};
    status.jobs = {
      ...(status.jobs ?? {}),
      [jobId]: {
        ...previous,
        id: jobId,
        label: config.label,
        state: signal ? "stopped" : exitCode === 0 ? "complete" : "failed",
        pid: null,
        startedAt,
        stoppedAt: new Date().toISOString(),
        exitCode,
        signal,
      },
    };
    status.updatedAt = new Date().toISOString();
    writeJson(JOB_STATUS_JSON, status);
    appendJobLog(jobId, `exited code=${exitCode} signal=${signal ?? "none"}`);
  });

  return { status: 200, body: persistJobStatus() };
}

function stopJob(jobId) {
  const running = runningJobs.get(jobId);
  if (!running) return { status: 200, body: persistJobStatus() };
  running.child.kill("SIGINT");
  appendJobLog(jobId, `stop requested ${new Date().toISOString()}`);
  return { status: 200, body: persistJobStatus() };
}

function handleApi(request, response) {
  const urlPath = request.url.split("?")[0];

  if (request.method === "GET" && urlPath === "/api/jobs") {
    sendJson(response, 200, persistJobStatus());
    return true;
  }

  const match = urlPath.match(/^\/api\/jobs\/([^/]+)\/(start|stop)$/);
  if (request.method === "POST" && match) {
    const [, jobId, action] = match;
    const result = action === "start" ? startJob(jobId) : stopJob(jobId);
    sendJson(response, result.status, result.body);
    return true;
  }

  if (urlPath.startsWith("/api/")) {
    sendJson(response, 404, { error: "not found" });
    return true;
  }

  return false;
}

const server = http.createServer((request, response) => {
  if (handleApi(request, response)) return;

  const requestedPath = request.url === "/" ? "/visualizer/" : request.url;
  let filePath = safePath(requestedPath);

  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": TYPES[path.extname(filePath)] ?? "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(data);
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Sudoku visualizer serving at http://localhost:${PORT}/visualizer/`);
});
