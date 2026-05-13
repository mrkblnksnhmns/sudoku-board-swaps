const SIZE = 9;
const MAX_DISJOINT_SWAPS = Math.floor((SIZE * SIZE) / 2);
const rawData = window.SUDOKU_RAW_CELL_SWAP_DEPTH;

const state = {
  sourceId: rawData?.sources?.[0]?.id ?? null,
};

const sourceSelect = document.querySelector("#sourceSelect");
const boardTitle = document.querySelector("#boardTitle");
const boardMeta = document.querySelector("#boardMeta");
const board = document.querySelector("#board");
const frontierText = document.querySelector("#frontierText");
const resultList = document.querySelector("#resultList");
const depthList = document.querySelector("#depthList");

function currentSource() {
  return rawData?.sources?.find((source) => source.id === state.sourceId) ?? rawData?.sources?.[0] ?? null;
}

function boardValues(boardString) {
  return [...boardString].map(Number);
}

function depthByNumber(source) {
  const map = new Map();
  for (const depth of source?.depths ?? []) map.set(depth.depth, depth);
  return map;
}

function renderSourceOptions() {
  sourceSelect.innerHTML = (rawData?.sources ?? []).map((source) => (
    `<option value="${source.id}">${escapeHtml(source.label)}</option>`
  )).join("");
  sourceSelect.value = state.sourceId ?? "";
}

function render() {
  const source = currentSource();
  if (!source) {
    boardTitle.textContent = "No Data";
    boardMeta.textContent = "Run the raw cell-swap scan first.";
    return;
  }

  sourceSelect.value = source.id;
  boardTitle.textContent = source.label;
  boardMeta.textContent = "Source board currently being scanned";

  renderBoard(source.board);
  renderResults(source);
  renderDepthProgress(source);
}

function renderBoard(boardString) {
  board.innerHTML = "";
  for (const value of boardValues(boardString)) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = value;
    board.appendChild(cell);
  }
}

function renderResults(source) {
  const frontier = source.frontier ?? summarizeFrontier(source.depths ?? []);
  const exactDepths = (source.depths ?? []).filter((depth) => depth.exhaustive);
  const guidedDepths = (source.depths ?? []).filter((depth) => !depth.exhaustive);
  const exactGenuine = exactDepths.reduce((sum, depth) => sum + depth.genuine.uniqueTargets, 0);
  const guidedGenuine = guidedDepths.reduce((sum, depth) => sum + depth.genuine.uniqueTargets, 0);
  const allGenuine = (source.depths ?? []).reduce((sum, depth) => sum + depth.genuine.uniqueTargets, 0);

  frontierText.textContent = frontier.firstGenuineDepth
    ? `First tested genuine depth: ${frontier.firstGenuineDepth}`
    : "No genuine endpoint found in computed depths";

  const rows = [
    ["First genuine depth", frontier.firstGenuineDepth ?? "none yet"],
    ["Deepest computed depth", frontier.deepestComputedDepth ?? "none"],
    ["Deepest exact depth", frontier.deepestExactDepth ?? "none"],
    ["Computed rule", "non-repeated pairs"],
    ["Depth ladder max", "40 disjoint swaps"],
    ["Exact genuine results", exactGenuine],
    ["Guided genuine results", guidedGenuine],
    ["Total genuine records", allGenuine],
    ["Raw file records", rawDataRecordHint()],
  ];

  resultList.innerHTML = rows.map(([label, value]) => `
    <div>
      <dt>${escapeHtml(label)}</dt>
      <dd>${escapeHtml(value)}</dd>
    </div>
  `).join("");
}

function summarizeFrontier(depths) {
  const computedDepths = depths.map((depth) => depth.depth);
  const exactDepths = depths.filter((depth) => depth.exhaustive).map((depth) => depth.depth);
  const genuineDepths = depths
    .filter((depth) => depth.genuine.uniqueTargets > 0)
    .map((depth) => depth.depth);

  return {
    firstGenuineDepth: genuineDepths.length ? Math.min(...genuineDepths) : null,
    deepestComputedDepth: computedDepths.length ? Math.max(...computedDepths) : null,
    deepestExactDepth: exactDepths.length ? Math.max(...exactDepths) : null,
  };
}

function rawDataRecordHint() {
  const total = (rawData?.sources ?? []).reduce((sourceSum, source) => (
    sourceSum + (source.depths ?? []).reduce((depthSum, depth) => (
      depthSum + depth.genuine.recordsWritten
    ), 0)
  ), 0);
  return total;
}

function renderDepthProgress(source) {
  const depths = depthByNumber(source);
  const items = [];

  for (let depth = MAX_DISJOINT_SWAPS; depth >= 1; depth -= 1) {
    const data = depths.get(depth);
    const status = depthStatus(data);
    items.push(`
      <button class="depth-row ${status.className}" type="button" ${data ? "" : "disabled"}>
        <span class="depth-number">N=${depth}</span>
        <span class="depth-status">${escapeHtml(status.label)}</span>
        <strong>${data ? `${data.genuine.uniqueTargets} genuine` : "-"}</strong>
      </button>
    `);
  }

  depthList.innerHTML = items.join("");
}

function depthStatus(depth) {
  if (!depth) return { className: "not-run", label: "not run" };
  if (depth.exhaustive) return { className: "exact", label: `${depth.strategy}; exact` };
  return { className: "guided", label: `${depth.strategy}; guided` };
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
  state.sourceId = event.target.value;
  render();
});

renderSourceOptions();
render();
