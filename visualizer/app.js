const SIZE = 9;
const COL_NAMES = "ABCDEFGHI";
const MAX_DISJOINT_SWAPS = Math.floor((SIZE * SIZE) / 2);
const SHUFFLE_COLOR_COUNT = 8;
const PLAY_INTERVAL_MS = 900;

let sampleData = window.SUDOKU_SOLVED_BOARD_SAMPLE;
let asymmetricData = window.SUDOKU_ASYMMETRIC_SEQUENCES;
let jobStatus = null;
let discoveryPlaybackTimer = null;

const state = {
  sourceId: null,
  exampleIndex: 0,
  moveStep: 0,
  playing: false,
};

const sourceSelect = document.querySelector("#sourceSelect");
const boardSampleText = document.querySelector("#boardSampleText");
const patternFindingText = document.querySelector("#patternFindingText");
const recoveryText = document.querySelector("#recoveryText");
const boardTitle = document.querySelector("#boardTitle");
const boardMeta = document.querySelector("#boardMeta");
const board = document.querySelector("#board");
const summaryGrid = document.querySelector("#summaryGrid");
const frontierText = document.querySelector("#frontierText");
const resultList = document.querySelector("#resultList");
const depthList = document.querySelector("#depthList");
const progressTitle = document.querySelector("#progressTitle");
const progressHelp = document.querySelector("#progressHelp");
const runProgressText = document.querySelector("#runProgressText");
const runProgressBar = document.querySelector("#runProgressBar");
const interestingSwapList = document.querySelector("#interestingSwapList");
const jobStatusText = document.querySelector("#jobStatusText");
const startBoardJobButton = document.querySelector("#startBoardJobButton");
const startScanButton = document.querySelector("#startScanButton");
const stopScanButton = document.querySelector("#stopScanButton");
const discoveryDetails = document.querySelector("#discoveryDetails");
const discoveryList = document.querySelector("#discoveryList");
const replayMeta = document.querySelector("#replayMeta");
const playDiscoveriesButton = document.querySelector("#playDiscoveriesButton");
const prevMoveButton = document.querySelector("#prevMoveButton");
const nextMoveButton = document.querySelector("#nextMoveButton");
const resetMoveButton = document.querySelector("#resetMoveButton");
const moveStepText = document.querySelector("#moveStepText");
const moveList = document.querySelector("#moveList");

function isCyclicSource(source) {
  return source?.id === "cyclic-base" || source?.id === "seed-cyclic-base";
}

function visibleSources() {
  const sources = asymmetricData?.sources ?? [];
  const nonCyclic = sources.filter((source) => !isCyclicSource(source));
  return nonCyclic.length ? nonCyclic : sources;
}

function currentSource() {
  const sources = visibleSources();
  return sources.find((source) => source.id === state.sourceId) ?? sources[0] ?? null;
}

function setDefaultSource() {
  state.sourceId = currentSource()?.id ?? null;
}

function renderSourceOptions() {
  const sources = visibleSources();
  sourceSelect.innerHTML = sources.map((source) => (
    `<option value="${source.id}">${escapeHtml(displaySourceLabel(source))}</option>`
  )).join("");
  setDefaultSource();
  sourceSelect.value = state.sourceId ?? "";
}

function displaySourceLabel(source) {
  if (source?.id === "comparison" || source?.id === "seed-comparison") return "comparison board";
  return source?.label ?? "source board";
}

function sourceExplanation(source) {
  if (source?.id === "comparison" || source?.id === "seed-comparison") {
    return "A solved board used as the current visible pattern-finding example. The cyclic baseline is kept in the paper as background research.";
  }
  return "One solved source board from the local board-finding sample. The pattern scan tests shuffle rules starting from this board.";
}

function render() {
  const source = currentSource();
  renderWorkflowText();

  if (!source) {
    boardTitle.textContent = "No Pattern Output";
    boardMeta.textContent = "Build boards, then scan patterns.";
    summaryGrid.innerHTML = "";
    resultList.innerHTML = "";
    depthList.innerHTML = "";
    renderBoard("");
    renderReplay([]);
    updateRunProgress(null);
    return;
  }

  sourceSelect.value = source.id;
  boardTitle.textContent = displaySourceLabel(source);
  boardMeta.textContent = sourceExplanation(source);

  renderSummary(source);
  renderInterestingSwaps();
  renderResults(source);
  renderScanTypeProgress(source);
  renderReplay(examplesForSource(source));
}

function renderWorkflowText() {
  const sampleSummary = sampleData?.summary;
  boardSampleText.textContent = sampleSummary
    ? `${sampleSummary.boards} solved boards are stored locally. They are exact-deduped and tagged with ${sampleSummary.parityProfiles} parity-profile groups.`
    : "No solved-board sample is loaded yet. Build boards first, then scan patterns.";

  const visibleSummary = summarizeVisibleSources();
  const current = asymmetricData?.current;
  patternFindingText.textContent = current
    ? `Scanning ${current.sourceLabel}: ${scanTypeName(current)}. Current visible output has ${visibleSummary.genuineEndpoints} genuine endpoints.`
    : asymmetricData?.summary
      ? `${visibleSummary.sourceCount} visible source board(s) in the latest pattern output; ${visibleSummary.genuineEndpoints} genuine endpoints and ${visibleSummary.sequenceTypeCount} type records are shown.`
      : "No pattern scan is loaded yet.";

  const runningJob = runningJobRecord();
  recoveryText.textContent = runningJob
    ? `${runningJob.label} is running. Progress is written to JSON checkpoints while it runs.`
    : "If power is lost, rerun the same pattern scan. Completed source/type records are reused; an unfinished shuffle type restarts.";
}

function renderSummary(source) {
  const visibleSummary = summarizeVisibleSources();
  const rows = [
    ["Visible Boards", visibleSummary.sourceCount],
    ["Max Disjoint", MAX_DISJOINT_SWAPS],
    ["Genuine", visibleSummary.genuineEndpoints],
    ["Types", visibleSummary.sequenceTypeCount],
  ];

  summaryGrid.innerHTML = rows.map(([label, value]) => `
    <div>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");

  updateRunProgress(source);
}

function renderInterestingSwaps() {
  const tradeFamily = visibleSources()
    .flatMap((source) => source.operationFamilies ?? [])
    .find((family) => family.id === "two-symbol-balanced-trade");
  const tradeGenuine = tradeFamily?.classCounts?.genuine ?? 0;

  const rows = [
    {
      label: "Repeated number-pair shuffle",
      status: tradeGenuine > 0 ? `${tradeGenuine} genuine endpoints in visible output` : "tracked pattern",
      body: "A shuffle sequence can keep reusing one number pair. The interesting part is the shuffle location shape: rows, columns, boxes, bands, and stacks.",
    },
    {
      label: "Three-pair shuffle",
      status: "planned next scan",
      body: "Try exactly three disjoint square-pair trades. This is the next natural step after the two-pair shuffle, but it needs strong filters and checkpointing because the raw search grows quickly.",
    },
  ];

  interestingSwapList.innerHTML = rows.map((row) => `
    <article class="interesting-card">
      <div>
        <strong>${escapeHtml(row.label)}</strong>
        <span>${escapeHtml(row.status)}</span>
      </div>
      <p>${escapeHtml(row.body)}</p>
    </article>
  `).join("");
}

function summarizeVisibleSources() {
  const out = {
    sourceCount: visibleSources().length,
    completeSources: 0,
    attemptedSequences: 0,
    uniqueValidEndpoints: 0,
    genuineEndpoints: 0,
    genuineEndpointFamilies: 0,
    sequenceTypeCount: 0,
  };

  for (const source of visibleSources()) {
    const sourceTotals = summarizeSource(source);
    if ((source.operationFamilies ?? []).every((family) => family.status === "complete")) out.completeSources += 1;
    out.attemptedSequences += sourceTotals.attemptedSequences;
    out.uniqueValidEndpoints += sourceTotals.uniqueValidEndpoints;
    out.genuineEndpoints += sourceTotals.genuineEndpoints;
    out.genuineEndpointFamilies += sourceTotals.genuineEndpointFamilies;
    out.sequenceTypeCount += sourceTotals.sequenceTypeCount;
  }

  return out;
}

function summarizeSource(source) {
  const out = {
    attemptedSequences: 0,
    uniqueValidEndpoints: 0,
    genuineEndpoints: 0,
    genuineEndpointFamilies: 0,
    sequenceTypeCount: 0,
  };

  for (const family of source.operationFamilies ?? []) {
    out.attemptedSequences += family.attemptedSequences ?? 0;
    out.uniqueValidEndpoints += family.uniqueValidEndpoints ?? 0;
    out.genuineEndpoints += family.classCounts?.genuine ?? 0;
    out.genuineEndpointFamilies += family.genuineEndpointFamilies ?? 0;
    out.sequenceTypeCount += family.sequenceTypeCount ?? 0;
  }
  return out;
}

function updateRunProgress(source) {
  if (!source) {
    runProgressText.textContent = "No pattern source selected.";
    runProgressBar.style.width = "0%";
    return;
  }

  let runningFamily = source.operationFamilies?.find((family) => family.status === "running") ?? null;
  if (!runningFamily && asymmetricData?.current && source.id === asymmetricData.current.sourceId) {
    runningFamily = source.operationFamilies?.find((family) => family.id === asymmetricData.current.familyId) ?? null;
  }

  const percent = runningFamily?.progress?.percent ?? sourceCompletionPercent(source);
  runProgressText.textContent = runningFamily
    ? `${scanTypeName(runningFamily)}: ${percent}% complete`
    : `${sourceCompletionPercent(source)}% of shuffle types complete for this source board`;
  runProgressBar.style.width = `${Math.max(0, Math.min(100, Number(percent) || 0))}%`;
}

function sourceCompletionPercent(source) {
  const families = source.operationFamilies ?? [];
  if (families.length === 0) return 0;
  const complete = families.filter((family) => family.status === "complete").length;
  return Number(((complete / families.length) * 100).toFixed(2));
}

function renderResults(source) {
  const complete = Boolean(asymmetricData?.complete);
  const current = asymmetricData?.current;
  frontierText.textContent = current
    ? `Running ${scanTypeName(current)} on ${current.sourceLabel}`
    : complete
      ? "Shuffle scan complete"
      : "Shuffle scan output is resumable";

  const sourceTotals = summarizeSource(source);
  const rows = [
    ["Run state", complete ? "complete" : "in progress"],
    ["Updated", asymmetricData?.updatedAt ?? "none"],
    ["Attempted", sourceTotals.attemptedSequences],
    ["Unique endpoints", sourceTotals.uniqueValidEndpoints],
    ["Genuine endpoints", sourceTotals.genuineEndpoints],
    ["Genuine families", sourceTotals.genuineEndpointFamilies],
    ["Sequence types", sourceTotals.sequenceTypeCount],
    ["Job", jobStatus?.jobs?.["asymmetric-sequences"]?.state ?? "offline"],
  ];

  resultList.innerHTML = rows.map(([label, value]) => `
    <div>
      <dt>${escapeHtml(label)}</dt>
      <dd>${escapeHtml(value)}</dd>
    </div>
  `).join("");
}

function renderScanTypeProgress(source) {
  progressTitle.textContent = "Shuffle Type Progress";
  progressHelp.textContent = "A square-pair means two board squares trading values. A number-pair means the two digits being traded.";

  depthList.innerHTML = (source.operationFamilies ?? []).map((family) => {
    const status = family.status ?? "pending";
    return `
      <button class="depth-row ${statusClass(status)}" type="button">
        <span class="depth-number">${escapeHtml(statusLabel(status))}</span>
        <span class="depth-status">
          <strong>${escapeHtml(scanTypeName(family))}</strong>
          <small>${escapeHtml(scanTypeExplanation(family))} ${escapeHtml(family.progress?.percent ?? 0)}% complete.</small>
        </span>
        <strong>${escapeHtml(family.classCounts?.genuine ?? 0)} genuine</strong>
      </button>
    `;
  }).join("");
}

function statusLabel(status) {
  if (status === "complete") return "done";
  if (status === "running") return "running";
  return "waiting";
}

function statusClass(status) {
  if (status === "complete") return "exact";
  if (status === "running") return "guided";
  return "not-run";
}

function scanTypeName(family) {
  const id = family?.id ?? family?.familyId;
  if (id === "exact-disjoint-cell-swap-depth-1") return "One-pair shuffle";
  if (id === "exact-disjoint-cell-swap-depth-2") return "Two-pair shuffle";
  if (id === "two-symbol-balanced-trade") return "Repeated number-pair shuffle";
  return family?.label ?? family?.familyLabel ?? id ?? "shuffle type";
}

function scanTypeExplanation(family) {
  if (family.id === "exact-disjoint-cell-swap-depth-1") {
    return "One square-pair trade: two cells trade values.";
  }
  if (family.id === "exact-disjoint-cell-swap-depth-2") {
    return "Two square-pair trades: four cells touched, no cell reused.";
  }
  if (family.id === "two-symbol-balanced-trade") {
    return "Several square-pair trades reuse one number pair, placed so rows, columns, and boxes can end solved.";
  }
  return "Run one operation family against this source board.";
}

function examplesForSource(source) {
  const examples = [];
  for (const family of source.operationFamilies ?? []) {
    for (const type of family.sequenceTypes ?? []) {
      for (const example of type.examples ?? []) {
        const sourceBoard = example.sourceBoard ?? source.board;
        const shape = example.shape ?? locationShapeForMoves(sourceBoard, example.moves);
        examples.push({
          familyLabel: scanTypeName(family),
          sourceLabel: displaySourceLabel(source),
          moves: example.moves,
          shape,
          sourceBoard,
          endpointBoard: example.endpointBoard,
          className: example.className,
        });
      }
    }
  }
  return examples;
}

function renderReplay(examples) {
  if (state.exampleIndex >= examples.length) state.exampleIndex = 0;
  const example = examples[state.exampleIndex] ?? null;
  const moves = example?.moves ?? [];
  if (state.moveStep > moves.length) state.moveStep = moves.length;

  const replay = example
    ? replayBoard(example.sourceBoard, moves, state.moveStep)
    : { boardString: currentSource()?.board ?? "", highlights: new Map() };

  renderBoard(replay.boardString, replay.highlights);
  replayMeta.textContent = example
    ? `${example.className}; ${shuffleCountLabel(moves.length)}; step ${state.moveStep} keeps every applied shuffle location highlighted.`
    : "No discovered asymmetric example for this visible source board yet.";
  discoveryDetails.innerHTML = example ? discoveryDetailsHtml(example) : "<p>No selected discovery yet.</p>";
  renderDiscoveryList(examples);
  moveStepText.textContent = `${state.moveStep} / ${moves.length}`;
  playDiscoveriesButton.disabled = examples.length === 0;
  playDiscoveriesButton.textContent = state.playing ? "Pause" : "Play";
  prevMoveButton.disabled = !example || state.moveStep === 0;
  nextMoveButton.disabled = !example || state.moveStep >= moves.length;
  resetMoveButton.disabled = !example || state.moveStep === 0;

  moveList.innerHTML = moves.length
    ? moves.map((move, index) => `
      <button class="move-chip shuffle-color-${index % SHUFFLE_COLOR_COUNT} ${index < state.moveStep ? "applied" : ""}" type="button" data-step="${index + 1}">
        ${escapeHtml(move)}
      </button>
    `).join("")
    : "";
}

function renderDiscoveryList(examples) {
  discoveryList.innerHTML = examples.length
    ? examples.map((example, index) => `
      <button class="discovery-row ${index === state.exampleIndex ? "selected" : ""}" type="button" data-example="${index}">
        <strong>Discovery ${index + 1}</strong>
        <span>${escapeHtml(displayLocationShape(example.shape) ?? example.familyLabel)}</span>
        <em>${escapeHtml(example.shape?.repeatedDigitPairKey ?? "mixed number-pairs")}</em>
      </button>
    `).join("")
    : "<p>No discovered asymmetric examples for this board yet.</p>";
}

function discoveryDetailsHtml(example) {
  const rows = [
    ["Source board", example.sourceLabel],
    ["Shuffle type", example.familyLabel],
    ["Endpoint class", example.className],
    ["Square-pairs", shuffleCountLabel(example.moves.length)],
    ["Number-pairs", formatDigitPairCounts(example.shape)],
    ["Shuffle locations", displayLocationShape(example.shape)],
    ["Rows touched", formatTouched(example.shape, "rows")],
    ["Columns touched", formatTouched(example.shape, "cols")],
    ["Boxes touched", formatTouched(example.shape, "boxes")],
    ["Bands touched", formatTouched(example.shape, "bands")],
    ["Stacks touched", formatTouched(example.shape, "stacks")],
  ];

  return `
    <dl class="discovery-detail-grid">
      ${rows.map(([label, value]) => `
        <div>
          <dt>${escapeHtml(label)}</dt>
          <dd>${escapeHtml(value ?? "unknown")}</dd>
        </div>
      `).join("")}
    </dl>
    <p>The scanner applies these square-pair trades to the source board. The final board remains solved and is not a standard symmetry copy of the source.</p>
  `;
}

function shuffleCountLabel(count) {
  return `${count} ${count === 1 ? "square-pair" : "square-pairs"}`;
}

function displayLocationShape(shape) {
  if (!shape?.locationShape) return "unknown";
  return shape.locationShape
    .replaceAll(" swaps", " square-pairs")
    .replaceAll(" swap", " square-pair");
}

function formatDigitPairCounts(shape) {
  const entries = Object.entries(shape?.digitPairCounts ?? {});
  if (entries.length === 0) return "unknown";
  return entries.map(([pair, count]) => `${pair} x${count}`).join(", ");
}

function formatTouched(shape, key) {
  const values = shape?.touched?.[key] ?? [];
  return values.length ? values.join(", ") : "none";
}

function renderBoard(boardString, highlights = new Map()) {
  board.innerHTML = "";
  for (let index = 0; index < boardString.length; index += 1) {
    const highlight = highlights.get(index);
    const cell = document.createElement("div");
    const classes = ["cell"];
    if (highlight) {
      classes.push("shuffle-cell", `shuffle-color-${highlight.pairIndex % SHUFFLE_COLOR_COUNT}`);
      if (highlight.latest) classes.push("latest-shuffle");
      cell.dataset.shuffle = String(highlight.pairIndex + 1);
    }
    cell.className = classes.join(" ");
    cell.textContent = boardString[index];
    board.appendChild(cell);
  }
}

function replayBoard(startBoard, moves, step) {
  const values = [...startBoard].map(Number);
  const highlights = new Map();
  for (let index = 0; index < step; index += 1) {
    const [first, second] = pairFromNotation(moves[index]);
    [values[first], values[second]] = [values[second], values[first]];
    const highlight = { pairIndex: index, latest: index === step - 1 };
    highlights.set(first, highlight);
    highlights.set(second, highlight);
  }
  return {
    boardString: values.join(""),
    highlights,
  };
}

function parseCellName(name) {
  const col = COL_NAMES.indexOf(name[0].toUpperCase());
  const row = Number(name.slice(1)) - 1;
  if (col < 0 || row < 0 || row >= SIZE) return null;
  return row * SIZE + col;
}

function pairFromNotation(move) {
  const parts = move.split("<->").map(parseCellName);
  return parts.includes(null) ? [0, 0] : parts;
}

function boxIndexForCell(cell) {
  const row = Math.floor(cell / SIZE);
  const col = cell % SIZE;
  return Math.floor(row / 3) * 3 + Math.floor(col / 3);
}

function countMap(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return Object.fromEntries([...counts.entries()].sort((a, b) => a[0].localeCompare(b[0])));
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a - b);
}

function digitPairForMove(boardString, move) {
  const [first, second] = pairFromNotation(move);
  return [Number(boardString[first]), Number(boardString[second])]
    .sort((a, b) => a - b)
    .join("<->");
}

function locationShapeForMoves(boardString, moves) {
  const pairs = moves.map(pairFromNotation);
  const touchedCells = pairs.flat();
  const rows = uniqueSorted(touchedCells.map((cell) => Math.floor(cell / SIZE)));
  const cols = uniqueSorted(touchedCells.map((cell) => cell % SIZE));
  const boxes = uniqueSorted(touchedCells.map(boxIndexForCell));
  const bands = uniqueSorted(rows.map((row) => Math.floor(row / 3)));
  const stacks = uniqueSorted(cols.map((col) => Math.floor(col / 3)));
  const digitPairs = moves.map((move) => digitPairForMove(boardString, move));
  const digitPairCounts = countMap(digitPairs);
  const digitPairKeys = Object.keys(digitPairCounts);

  return {
    digitPairs,
    digitPairCounts,
    uniqueDigitPairCount: digitPairKeys.length,
    repeatedDigitPair: digitPairKeys.length === 1,
    repeatedDigitPairKey: digitPairKeys.length === 1 ? digitPairKeys[0] : null,
    locationShape: `${moves.length} square-pairs / ${rows.length} rows / ${cols.length} cols / ${boxes.length} boxes / ${bands.length} bands / ${stacks.length} stacks`,
    touched: {
      rows: rows.map((row) => row + 1),
      cols: cols.map((col) => col + 1),
      boxes: boxes.map((box) => box + 1),
      bands: bands.map((band) => band + 1),
      stacks: stacks.map((stack) => stack + 1),
    },
  };
}

function stopDiscoveryPlayback() {
  if (discoveryPlaybackTimer) clearInterval(discoveryPlaybackTimer);
  discoveryPlaybackTimer = null;
  state.playing = false;
}

function setDiscoveryPlayback(playing) {
  stopDiscoveryPlayback();
  if (playing) {
    state.playing = true;
    discoveryPlaybackTimer = setInterval(advanceDiscoveryPlayback, PLAY_INTERVAL_MS);
  }
  render();
}

function advanceDiscoveryPlayback() {
  const source = currentSource();
  const examples = source ? examplesForSource(source) : [];
  if (examples.length === 0) {
    setDiscoveryPlayback(false);
    return;
  }

  if (state.exampleIndex >= examples.length) state.exampleIndex = 0;
  const example = examples[state.exampleIndex];
  const moves = example?.moves ?? [];

  if (state.moveStep < moves.length) {
    state.moveStep += 1;
  } else {
    state.exampleIndex = (state.exampleIndex + 1) % examples.length;
    state.moveStep = 0;
  }
  render();
}

function runningJobRecord() {
  return Object.values(jobStatus?.jobs ?? {}).find((job) => job.state === "running") ?? null;
}

async function refreshAsymmetricData() {
  try {
    const response = await fetch(`data/asymmetric-sequences.latest.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return;
    asymmetricData = await response.json();
    if (!state.sourceId || !visibleSources().some((source) => source.id === state.sourceId)) setDefaultSource();
    renderSourceOptions();
    render();
  } catch {
    // Opening index.html directly can still use the generated data script.
  }
}

async function refreshSampleData() {
  try {
    const response = await fetch(`data/solved-board-sample.latest.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return;
    sampleData = await response.json();
    render();
  } catch {
    // Opening index.html directly can still use the generated data script.
  }
}

async function refreshJobs() {
  try {
    const response = await fetch("/api/jobs", { cache: "no-store" });
    if (!response.ok) return;
    jobStatus = await response.json();
    const running = runningJobRecord();
    const patternJob = jobStatus.jobs?.["asymmetric-sequences"];
    const boardJob = jobStatus.jobs?.["board-sample"];
    jobStatusText.textContent = running
      ? `${running.label}: running`
      : `boards ${boardJob?.state ?? "offline"}; patterns ${patternJob?.state ?? "offline"}`;
    render();
  } catch {
    jobStatusText.textContent = "offline";
  }
}

async function postJob(jobId, action) {
  try {
    await fetch(`/api/jobs/${jobId}/${action}`, { method: "POST" });
    await refreshJobs();
    await refreshSampleData();
    await refreshAsymmetricData();
  } catch {
    jobStatusText.textContent = "server unavailable";
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

sourceSelect.addEventListener("change", (event) => {
  stopDiscoveryPlayback();
  state.sourceId = event.target.value;
  state.exampleIndex = 0;
  state.moveStep = 0;
  render();
});

playDiscoveriesButton.addEventListener("click", () => {
  setDiscoveryPlayback(!state.playing);
});

prevMoveButton.addEventListener("click", () => {
  stopDiscoveryPlayback();
  state.moveStep = Math.max(0, state.moveStep - 1);
  render();
});

nextMoveButton.addEventListener("click", () => {
  stopDiscoveryPlayback();
  state.moveStep += 1;
  render();
});

resetMoveButton.addEventListener("click", () => {
  stopDiscoveryPlayback();
  state.moveStep = 0;
  render();
});

moveList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-step]");
  if (!button) return;
  stopDiscoveryPlayback();
  state.moveStep = Number(button.dataset.step);
  render();
});

discoveryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-example]");
  if (!button) return;
  stopDiscoveryPlayback();
  state.exampleIndex = Number(button.dataset.example) || 0;
  state.moveStep = 0;
  render();
});

startBoardJobButton.addEventListener("click", () => postJob("board-sample", "start"));
startScanButton.addEventListener("click", () => postJob("asymmetric-sequences", "start"));
stopScanButton.addEventListener("click", () => {
  const running = runningJobRecord();
  postJob(running?.id ?? "asymmetric-sequences", "stop");
});

renderSourceOptions();
render();
refreshJobs();
setInterval(refreshJobs, 3000);
setInterval(refreshSampleData, 6000);
setInterval(refreshAsymmetricData, 3000);
