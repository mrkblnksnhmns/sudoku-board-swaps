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
const recoveryText = document.querySelector("#recoveryText");
const boardTitle = document.querySelector("#boardTitle");
const boardMeta = document.querySelector("#boardMeta");
const board = document.querySelector("#board");
const summaryGrid = document.querySelector("#summaryGrid");
const nthShuffleList = document.querySelector("#nthShuffleList");
const interestingSwapList = document.querySelector("#interestingSwapList");
const largeShuffleList = document.querySelector("#largeShuffleList");
const backtrackingList = document.querySelector("#backtrackingList");
const jobStatusText = document.querySelector("#jobStatusText");
const stopScanButton = document.querySelector("#stopScanButton");
const startOnePairButton = document.querySelector("#startOnePairButton");
const stopOnePairButton = document.querySelector("#stopOnePairButton");
const startTwoPairButton = document.querySelector("#startTwoPairButton");
const stopTwoPairButton = document.querySelector("#stopTwoPairButton");
const startRepeatedPairButton = document.querySelector("#startRepeatedPairButton");
const stopRepeatedPairButton = document.querySelector("#stopRepeatedPairButton");
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
  return sortSources(nonCyclic.length ? nonCyclic : sources);
}

function sortSources(sources) {
  return [...sources].sort((first, second) => {
    const firstLabel = sourceSortLabel(first);
    const secondLabel = sourceSortLabel(second);
    const firstIsComparison = first?.id === "comparison" || first?.id === "seed-comparison";
    const secondIsComparison = second?.id === "comparison" || second?.id === "seed-comparison";
    if (firstIsComparison !== secondIsComparison) return firstIsComparison ? -1 : 1;
    return firstLabel.localeCompare(secondLabel, undefined, { numeric: true, sensitivity: "base" })
      || String(first?.id ?? "").localeCompare(String(second?.id ?? ""), undefined, { numeric: true, sensitivity: "base" });
  });
}

function sourceSortLabel(source) {
  if (source?.id === "comparison" || source?.id === "seed-comparison") return "comparison board";
  return source?.label ?? source?.id ?? "source board";
}

function currentSource() {
  const sources = visibleSources();
  return sources.find((source) => source.id === state.sourceId) ?? sources[0] ?? null;
}

function setDefaultSource() {
  const sources = visibleSources();
  if (state.sourceId && sources.some((source) => source.id === state.sourceId)) return;
  state.sourceId = sources[0]?.id ?? null;
}

function renderSourceOptions() {
  const sources = visibleSources();
  setDefaultSource();
  sourceSelect.innerHTML = sources.map((source) => (
    `<option value="${source.id}">${escapeHtml(displaySourceLabel(source))}</option>`
  )).join("");
  sourceSelect.value = state.sourceId ?? "";
}

function displaySourceLabel(source) {
  const index = visibleSources().findIndex((visibleSource) => visibleSource.id === source?.id);
  return index >= 0 ? String(index + 1) : "source board";
}

function sourceExplanation(source) {
  if (source?.id === "comparison" || source?.id === "seed-comparison") {
    return "A solved board used as the current visible pattern-finding example. The cyclic baseline is kept as background findings.";
  }
  return "One solved source board from the local board-finding sample. The pattern scan tests shuffle rules starting from this board.";
}

function render() {
  const source = currentSource();
  renderWorkflowText();

  if (!source) {
    boardTitle.textContent = "No Pattern Output";
    boardMeta.textContent = "Load a solved board, then scan it case by case.";
    summaryGrid.innerHTML = "";
    renderBoard("");
    renderReplay([]);
    return;
  }

  sourceSelect.value = source.id;
  boardTitle.textContent = displaySourceLabel(source);
  boardMeta.textContent = sourceExplanation(source);

  renderSummary(source);
  renderNthPairShuffles(source);
  renderInterestingSwaps(source);
  renderLargeStructuredShuffles();
  renderBacktrackingPrep();
  renderReplay(examplesForSource(source));
}

function renderWorkflowText() {
  const runningJob = runningJobRecord();
  recoveryText.textContent = runningJob
    ? `${runningJob.label} is running. Progress is written to JSON checkpoints while it runs.`
    : "If power is lost, rerun the same scan for that board. Completed board/type records are reused; an unfinished shuffle type restarts.";
}

function renderSummary(source) {
  const visibleSummary = summarizeVisibleSources();
  const rows = [
    ["Visible Boards", visibleSummary.sourceCount, "Solved source boards currently shown in this UI."],
    ["Max Disjoint", MAX_DISJOINT_SWAPS, "Largest possible square-pair shuffle if every cell is used at most once."],
    ["Genuine", visibleSummary.genuineEndpoints, "Solved endpoints that are not just standard symmetry copies."],
    ["Types", visibleSummary.sequenceTypeCount, "Distinct shuffle pattern records found in the scan output."],
  ];

  summaryGrid.innerHTML = rows.map(([label, value, help]) => `
    <div>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <p>${escapeHtml(help)}</p>
    </div>
  `).join("");
}

function renderInterestingSwaps(source = currentSource()) {
  const tradeFamily = source?.operationFamilies?.find((family) => family.id === "two-symbol-balanced-trade") ?? null;
  const tradeGenuine = tradeFamily?.classCounts?.genuine ?? 0;
  const tradeStats = statsForFamily(tradeFamily);
  const tradeStatus = familyStatusLabel(tradeFamily, "repeated-number-pair-shuffles");

  const rows = [
    {
      label: "Repeated number-pair shuffle",
      status: tradeFamily ? `${tradeGenuine} genuine; ${tradeStatus}` : "not run yet",
      stats: tradeStats,
      body: "This belongs here because it is not just a size count. Several square-pairs reuse the same two numbers, and the discovery is the location shape: rows, columns, boxes, bands, and stacks.",
    },
  ];

  interestingSwapList.innerHTML = rows.map((row) => `
    <article class="research-card">
      <div>
        <strong>${escapeHtml(row.label)}</strong>
        <span>${escapeHtml(row.status)}</span>
      </div>
      <p>${escapeHtml(row.body)}</p>
      ${row.stats ? cardStatsHtml(row.stats) : ""}
      ${progressBarHtml(tradeFamily?.progress?.percent ?? 0)}
    </article>
  `).join("");
}

function progressBarHtml(percent) {
  const safePercent = Math.max(0, Math.min(100, Number(percent) || 0));
  return `
    <div class="mini-progress" aria-label="${safePercent}% complete">
      <span style="width: ${safePercent}%"></span>
    </div>
  `;
}

function renderNthPairShuffles(source) {
  const familyById = new Map((source.operationFamilies ?? []).map((family) => [family.id, family]));
  const onePairStats = statsForFamily(familyById.get("exact-disjoint-cell-swap-depth-1"));
  const twoPairStats = statsForFamily(familyById.get("exact-disjoint-cell-swap-depth-2"));
  const rows = [
    {
      label: "One-pair shuffle",
      familyId: "exact-disjoint-cell-swap-depth-1",
      stats: onePairStats,
      body: "One square-pair trades values. It touches 2 cells and is the smallest possible real shuffle.",
    },
    {
      label: "Two-pair shuffle",
      familyId: "exact-disjoint-cell-swap-depth-2",
      stats: twoPairStats,
      body: "Two square-pairs trade values. It touches 4 cells, and no cell can be reused.",
    },
    {
      label: "Three-pair shuffle",
      familyId: "exact-disjoint-cell-swap-depth-3",
      status: "planned next scan",
      body: "Three square-pairs trade values. It touches 6 cells. Raw size is 4,868,103,240 candidates per board, about 975x the two-pair scan, so it needs balance filters.",
    },
  ];

  nthShuffleList.innerHTML = rows.map((row) => {
    const family = familyById.get(row.familyId);
    const status = row.status ?? (family ? `${family.classCounts?.genuine ?? 0} genuine; ${familyStatusLabel(family, jobIdForFamily(row.familyId))}` : "not run yet");
    const percent = family?.progress?.percent ?? 0;
    return `
      <article class="research-card">
        <div>
          <strong>${escapeHtml(row.label)}</strong>
          <span>${escapeHtml(status)}</span>
        </div>
        <p>${escapeHtml(row.body)}</p>
        ${row.stats ? cardStatsHtml(row.stats) : ""}
        ${progressBarHtml(percent)}
      </article>
    `;
  }).join("");
}

function jobIdForFamily(familyId) {
  if (familyId === "exact-disjoint-cell-swap-depth-1") return "one-pair-shuffles";
  if (familyId === "exact-disjoint-cell-swap-depth-2") return "two-pair-shuffles";
  if (familyId === "two-symbol-balanced-trade") return "repeated-number-pair-shuffles";
  return null;
}

function familyStatusLabel(family, jobId = null) {
  const status = family?.status ?? "pending";
  const jobState = jobId ? jobStatus?.jobs?.[jobId]?.state : null;
  if (status === "running" && jobStatus && jobState !== "running") {
    return jobState === "stopped" || jobState === "interrupted" ? jobState : "interrupted";
  }
  return status;
}

function statsForFamily(family) {
  if (!family) return null;
  return {
    candidatesChecked: family.progress?.checked ?? 0,
    uniqueValidEndpoints: family.uniqueValidEndpoints ?? 0,
    genuineEndpoints: family.classCounts?.genuine ?? 0,
    sequenceTypes: family.sequenceTypeCount ?? 0,
    runTimeMs: familyRunTimeMs(family),
  };
}

function cardStatsHtml(stats) {
  const rows = [
    ["Checked", formatNumber(stats.candidatesChecked)],
    ["Unique", formatNumber(stats.uniqueValidEndpoints)],
    ["Genuine", formatNumber(stats.genuineEndpoints)],
    ["Types", formatNumber(stats.sequenceTypes)],
    ["Time", formatDuration(stats.runTimeMs)],
  ];

  return `
    <dl class="card-stat-list">
      ${rows.map(([label, value]) => `
        <div>
          <dt>${escapeHtml(label)}</dt>
          <dd>${escapeHtml(value)}</dd>
        </div>
      `).join("")}
    </dl>
  `;
}

function familyRunTimeMs(family) {
  if (!family?.startedAt || !family?.completedAt) return 0;
  const started = Date.parse(family.startedAt);
  const completed = Date.parse(family.completedAt);
  return Number.isFinite(started) && Number.isFinite(completed) && completed >= started
    ? completed - started
    : 0;
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString();
}

function formatDuration(ms) {
  if (!ms) return "not available";
  const seconds = ms / 1000;
  if (seconds < 60) return `about ${Math.round(seconds)} seconds`;
  const minutes = seconds / 60;
  if (minutes < 60) return `about ${minutes.toFixed(1)} minutes`;
  return `about ${(minutes / 60).toFixed(1)} hours`;
}

function renderLargeStructuredShuffles() {
  const rows = [
    {
      label: "Balanced large-N shuffle",
      status: "planned lane",
      body: `Search near the ${MAX_DISJOINT_SWAPS} square-pair limit by choosing balanced location rules first, then testing endpoints.`,
    },
    {
      label: "Symmetry rejection",
      status: "required filter",
      body: "Reject row, column, band, stack, transpose, mirror, and digit-rename aggregates before calling a large shuffle genuine.",
    },
  ];

  largeShuffleList.innerHTML = rows.map((row) => `
    <article class="research-card">
      <div>
        <strong>${escapeHtml(row.label)}</strong>
        <span>${escapeHtml(row.status)}</span>
      </div>
      <p>${escapeHtml(row.body)}</p>
    </article>
  `).join("");
}

function renderBacktrackingPrep() {
  const rows = [
    {
      label: "One representative per family",
      status: "target reduction",
      body: "Start with one solved board from each standard-symmetry family, then later refine toward true shuffle-disjoint families.",
    },
    {
      label: "Pairwise movement search",
      status: "planned",
      body: "Choose two completed boards and backtrack possible square-pair trades that explain how one could move toward the other.",
    },
    {
      label: "40-down search",
      status: "structured only",
      body: "The 40 square-pair limit is useful for structured high-N hypotheses. Raw high-to-low brute force is too large, so this needs constraints before search.",
    },
    {
      label: "Inference filter",
      status: "required",
      body: "If the movement is just a standard symmetry, classify it separately; keep only genuine asymmetric explanations for discoveries.",
    },
  ];

  backtrackingList.innerHTML = rows.map((row) => `
    <article class="research-card">
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

function scanTypeName(family) {
  const id = family?.id ?? family?.familyId;
  if (id === "exact-disjoint-cell-swap-depth-1") return "One-pair shuffle";
  if (id === "exact-disjoint-cell-swap-depth-2") return "Two-pair shuffle";
  if (id === "two-symbol-balanced-trade") return "Repeated number-pair shuffle";
  return family?.label ?? family?.familyLabel ?? id ?? "shuffle type";
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
    jobStatusText.textContent = running
      ? `${running.label}: running`
      : "ready";
    updateJobButtons(running);
    render();
  } catch {
    jobStatusText.textContent = "offline";
    updateJobButtons(null);
  }
}

function updateJobButtons(running) {
  setJobButtonState(startOnePairButton, jobStatus?.jobs?.["one-pair-shuffles"]?.state ?? "offline");
  setJobButtonState(startTwoPairButton, jobStatus?.jobs?.["two-pair-shuffles"]?.state ?? "offline");
  setJobButtonState(startRepeatedPairButton, jobStatus?.jobs?.["repeated-number-pair-shuffles"]?.state ?? "offline");
  setJobButtonState(stopOnePairButton, running?.id === "one-pair-shuffles" ? "running" : "idle");
  setJobButtonState(stopTwoPairButton, running?.id === "two-pair-shuffles" ? "running" : "idle");
  setJobButtonState(stopRepeatedPairButton, running?.id === "repeated-number-pair-shuffles" ? "running" : "idle");
  setJobButtonState(stopScanButton, running ? "running" : "idle");
  stopScanButton.disabled = !running;
  stopOnePairButton.disabled = running?.id !== "one-pair-shuffles";
  stopTwoPairButton.disabled = running?.id !== "two-pair-shuffles";
  stopRepeatedPairButton.disabled = running?.id !== "repeated-number-pair-shuffles";
}

function setJobButtonState(button, stateName) {
  button.dataset.state = stateName;
  button.setAttribute("aria-label", `${button.textContent.trim()}: ${stateName}`);
}

async function postJob(jobId, action) {
  try {
    const sourceParam = action === "start" && state.sourceId ? `?source=${encodeURIComponent(state.sourceId)}` : "";
    await fetch(`/api/jobs/${jobId}/${action}${sourceParam}`, { method: "POST" });
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

startOnePairButton.addEventListener("click", () => postJob("one-pair-shuffles", "start"));
stopOnePairButton.addEventListener("click", () => postJob("one-pair-shuffles", "stop"));
startTwoPairButton.addEventListener("click", () => postJob("two-pair-shuffles", "start"));
stopTwoPairButton.addEventListener("click", () => postJob("two-pair-shuffles", "stop"));
startRepeatedPairButton.addEventListener("click", () => postJob("repeated-number-pair-shuffles", "start"));
stopRepeatedPairButton.addEventListener("click", () => postJob("repeated-number-pair-shuffles", "stop"));
stopScanButton.addEventListener("click", () => {
  const running = runningJobRecord();
  if (running?.id) postJob(running.id, "stop");
});

renderSourceOptions();
render();
refreshJobs();
setInterval(refreshJobs, 3000);
setInterval(refreshSampleData, 6000);
setInterval(refreshAsymmetricData, 3000);
