const SIZE = 9;
const BOX = 3;
const STAGE_SIZE = 760;
const BOARD_INSET = 92;
const BOARD_SIZE = STAGE_SIZE - BOARD_INSET * 2;
const CELL_SIZE = BOARD_SIZE / SIZE;

const boards = {
  base: {
    name: "Cyclic Base",
    grid: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [9, 1, 2, 3, 4, 5, 6, 7, 8],
    ],
    endpointCounts: {
      rows: 1296,
      columns: 46656,
    },
    stepwiseCounts: {
      rows: 216,
      columns: 46656,
    },
    worstCase: {
      rows: "6 single, 8 with block swaps",
      columns: "12 single, 10 with block swaps",
    },
  },
  comparison: {
    name: "Comparison",
    grid: [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ],
    endpointCounts: {
      rows: 1296,
      columns: 1296,
    },
    stepwiseCounts: {
      rows: 216,
      columns: 216,
    },
    worstCase: {
      rows: "6 single, 8 with block swaps",
      columns: "6 single, 8 with block swaps",
    },
  },
};

const tradeExamples = [
  {
    id: "base-1-4-top",
    board: "base",
    label: "Base trade 1<->4, top band",
    swaps: [
      [[0, 0], [0, 3]],
      [[1, 6], [1, 0]],
      [[2, 3], [2, 6]],
    ],
    middleSwapIndex: 0,
  },
  {
    id: "base-1-7-top",
    board: "base",
    label: "Base trade 1<->7, top band",
    swaps: [
      [[0, 0], [0, 6]],
      [[1, 6], [1, 3]],
      [[2, 3], [2, 0]],
    ],
    middleSwapIndex: 0,
  },
  {
    id: "base-2-5-middle",
    board: "base",
    label: "Base trade 2<->5, middle band",
    swaps: [
      [[3, 0], [3, 3]],
      [[4, 6], [4, 0]],
      [[5, 3], [5, 6]],
    ],
    middleSwapIndex: 0,
  },
];

const state = {
  view: "board",
  board: "base",
  layer: "columns",
  tradeStep: "start",
  tradeId: tradeExamples[0].id,
  showDefaultEdges: true,
  showExtraEdges: true,
  showInvalidUnits: true,
  batchData: window.SUDOKU_ROLE_GRAPH_BATCH,
  tradeBatchData: window.SUDOKU_TRADE_TARGET_BATCH,
  adjacencyBatchData: window.SUDOKU_TRADE_ADJACENCY,
  forbiddenBatchData: window.SUDOKU_FORBIDDEN_NEIGHBORHOOD,
  bridgeDepthData: window.SUDOKU_BRIDGE_DEPTH,
  batchPollStatus: window.location.protocol === "file:" ? "snapshot" : "waiting",
  tradeBatchPollStatus: window.location.protocol === "file:" ? "snapshot" : "waiting",
  adjacencyBatchPollStatus: window.location.protocol === "file:" ? "snapshot" : "waiting",
  forbiddenBatchPollStatus: window.location.protocol === "file:" ? "snapshot" : "waiting",
  bridgeDepthPollStatus: window.location.protocol === "file:" ? "snapshot" : "waiting",
};

const boardEl = document.querySelector("#board");
const edgeLayer = document.querySelector("#edgeLayer");
const metricsList = document.querySelector("#metricsList");
const summaryText = document.querySelector("#summaryText");
const viewTitle = document.querySelector("#viewTitle");
const viewSubtitle = document.querySelector("#viewSubtitle");
const tradeSelect = document.querySelector("#tradeSelect");
const boardStage = document.querySelector(".board-stage");
const dataPage = document.querySelector("#dataPage");

function sorted(values) {
  return [...values].sort((a, b) => a - b).join("");
}

function validateGrid(grid) {
  const expected = "123456789";
  for (let index = 0; index < SIZE; index += 1) {
    if (sorted(grid[index]) !== expected) return false;
    if (sorted(grid.map((row) => row[index])) !== expected) return false;
  }

  for (let row = 0; row < SIZE; row += BOX) {
    for (let col = 0; col < SIZE; col += BOX) {
      const values = [];
      for (let r = row; r < row + BOX; r += 1) {
        for (let c = col; c < col + BOX; c += 1) values.push(grid[r][c]);
      }
      if (sorted(values) !== expected) return false;
    }
  }

  return true;
}

function cloneGrid(grid) {
  return grid.map((row) => [...row]);
}

function swapRows(grid, a, b) {
  const next = cloneGrid(grid);
  [next[a], next[b]] = [next[b], next[a]];
  return next;
}

function swapCols(grid, a, b) {
  const next = cloneGrid(grid);
  for (const row of next) [row[a], row[b]] = [row[b], row[a]];
  return next;
}

function applyCellSwap(grid, first, second) {
  const next = cloneGrid(grid);
  const [r1, c1] = first;
  const [r2, c2] = second;
  [next[r1][c1], next[r2][c2]] = [next[r2][c2], next[r1][c1]];
  return next;
}

function applyTradeStep(grid, trade, step) {
  if (step === "start") return cloneGrid(grid);

  let next = cloneGrid(grid);
  const swapLimit = step === "middle" ? trade.middleSwapIndex + 1 : trade.swaps.length;
  for (let index = 0; index < swapLimit; index += 1) {
    next = applyCellSwap(next, trade.swaps[index][0], trade.swaps[index][1]);
  }
  return next;
}

function validSwapEdges(grid, axis) {
  const edges = [];
  for (let a = 0; a < SIZE; a += 1) {
    for (let b = a + 1; b < SIZE; b += 1) {
      const next = axis === "rows" ? swapRows(grid, a, b) : swapCols(grid, a, b);
      if (!validateGrid(next)) continue;
      edges.push({
        a,
        b,
        kind: defaultSymmetryEdge(a, b) ? "default" : "extra",
      });
    }
  }
  return edges;
}

function defaultSymmetryEdge(a, b) {
  return Math.floor(a / BOX) === Math.floor(b / BOX);
}

function currentTrade() {
  return tradeExamples.find((trade) => trade.id === state.tradeId) ?? tradeExamples[0];
}

function invalidUnits(grid) {
  const units = { rows: new Set(), cols: new Set(), boxes: new Set() };
  const expected = "123456789";

  for (let index = 0; index < SIZE; index += 1) {
    if (sorted(grid[index]) !== expected) units.rows.add(index);
    if (sorted(grid.map((row) => row[index])) !== expected) units.cols.add(index);
  }

  for (let row = 0; row < SIZE; row += BOX) {
    for (let col = 0; col < SIZE; col += BOX) {
      const values = [];
      for (let r = row; r < row + BOX; r += 1) {
        for (let c = col; c < col + BOX; c += 1) values.push(grid[r][c]);
      }
      if (sorted(values) !== expected) units.boxes.add(`${row / BOX},${col / BOX}`);
    }
  }

  return units;
}

function render() {
  if (state.view !== "board") {
    boardStage.classList.add("hidden");
    dataPage.classList.remove("hidden");
    edgeLayer.innerHTML = "";
    renderDataPage();
    syncControls();
    return;
  }

  boardStage.classList.remove("hidden");
  dataPage.classList.add("hidden");

  const boardInfo = boards[state.board];
  const trade = currentTrade();
  const boardKey = state.layer === "trade" ? trade.board : state.board;
  const baseGrid = boards[boardKey].grid;
  const grid = state.layer === "trade" ? applyTradeStep(baseGrid, trade, state.tradeStep) : baseGrid;
  const invalid = invalidUnits(grid);

  renderBoard(grid, invalid);
  renderEdges(grid, trade, invalid);
  renderText(boardInfo, trade, grid);
  syncControls();
}

function renderDataPage() {
  if (state.view === "role-batch") renderRoleBatchPage();
  if (state.view === "trade-batch") renderTradeBatchPage();
  if (state.view === "adjacency-batch") renderAdjacencyBatchPage();
  if (state.view === "forbidden-batch") renderForbiddenNeighborhoodPage();
  if (state.view === "bridge-depth") renderBridgeDepthPage();
  if (state.view === "test-plan") renderTestPlanPage();
}

function renderRoleBatchPage() {
  const batch = state.batchData;
  summaryText.textContent = "Role graph batch";
  viewTitle.textContent = "Role Batch";
  viewSubtitle.textContent = "Saved profiles for board-specific row and column role graphs.";

  if (!batch) {
    dataPage.innerHTML = emptyState("Role batch data has not been generated yet.");
    renderMetrics([...batchMetrics()]);
    return;
  }

  dataPage.innerHTML = `
    <div class="card-grid">
      ${statusCard("Processed", `${batch.processedCount}/${batch.collectedBoardCount}`, batch.complete)}
      ${statusCard("Signature Groups", String(batch.groups.length), batch.complete)}
      ${statusCard("Updated", shortDate(batch.updatedAt), batch.complete)}
    </div>
    ${progressBlock(batch.processedCount, batch.collectedBoardCount)}
    ${groupTable(batch.groups, "Role graph signature groups")}
  `;
  renderMetrics([...batchMetrics()]);
}

function renderTradeBatchPage() {
  const batch = state.tradeBatchData;
  summaryText.textContent = "Trade target batch";
  viewTitle.textContent = "Trade Targets";
  viewSubtitle.textContent = "Structured forbidden move endpoints generated from cyclic-base two-symbol trades.";

  if (!batch) {
    dataPage.innerHTML = emptyState("Trade target data has not been generated yet.");
    renderMetrics([...tradeBatchMetrics()]);
    return;
  }

  const current = batch.currentTarget
    ? `${batch.currentTarget.index}/${batch.currentTarget.count}: ${escapeHtml(batch.currentTarget.label)}`
    : "idle";

  dataPage.innerHTML = `
    <div class="card-grid">
      ${statusCard("Processed", `${batch.processedCount}/${batch.config.targetCount}`, batch.complete)}
      ${statusCard("Signature Groups", String(batch.groups.length), batch.complete)}
      ${statusCard("Current Target", current, batch.complete)}
    </div>
    ${progressBlock(batch.processedCount, batch.config.targetCount)}
    ${tradeProfileTable(batch.profiles ?? [])}
    ${groupTable(batch.groups, "Trade target signature groups")}
  `;
  renderMetrics([...batchMetrics()]);
}

function renderAdjacencyBatchPage() {
  const batch = state.adjacencyBatchData;
  summaryText.textContent = "Trade adjacency batch";
  viewTitle.textContent = "Adjacency Graph";
  viewSubtitle.textContent = "Structured trade-to-trade connectivity for cyclic-base trade targets.";

  if (!batch) {
    dataPage.innerHTML = emptyState("Trade adjacency data has not been generated yet.");
    renderMetrics([...adjacencyBatchMetrics()]);
    return;
  }

  const current = batch.currentSource
    ? `${batch.currentSource.index}/${batch.currentSource.count}: ${escapeHtml(batch.currentSource.label)}`
    : "idle";

  dataPage.innerHTML = `
    <div class="card-grid">
      ${statusCard("Processed", `${batch.processedCount}/${batch.config.sourceCount}`, batch.complete)}
      ${statusCard("Current Source", current, batch.complete)}
      ${statusCard("Summary", `${batch.summary.self} / ${batch.summary.base} / ${batch.summary.knownTradeTarget} / ${batch.summary.newBoard}`, batch.complete)}
    </div>
    ${progressBlock(batch.processedCount, batch.config.sourceCount)}
    ${adjacencySummaryTable(batch.sources ?? [])}
  `;
  renderMetrics([...adjacencyBatchMetrics()]);
}

function renderForbiddenNeighborhoodPage() {
  const batch = state.forbiddenBatchData;
  summaryText.textContent = "Forbidden neighborhood batch";
  viewTitle.textContent = "Forbidden Neighborhood";
  viewSubtitle.textContent = "Structured trade neighborhoods around seed boards and trade targets.";

  if (!batch) {
    dataPage.innerHTML = emptyState("Forbidden neighborhood data has not been generated yet.");
    renderMetrics([...forbiddenBatchMetrics()]);
    return;
  }

  const current = batch.currentSource
    ? `${batch.currentSource.index}/${batch.currentSource.count}: ${escapeHtml(batch.currentSource.label)}`
    : "idle";

  dataPage.innerHTML = `
    <div class="card-grid">
      ${statusCard("Processed", `${batch.processedCount}/${batch.config.sourceCount}`, batch.complete)}
      ${statusCard("Current Source", current, batch.complete)}
      ${statusCard("Total Trades", String(batch.summary?.totalTrades ?? 0), batch.complete)}
    </div>
    ${progressBlock(batch.processedCount, batch.config.sourceCount)}
    ${forbiddenNeighborhoodSummaryTable(batch.sources ?? [])}
    ${groupTable(batch.groups ?? [], "Forbidden neighborhood signature groups")}
  `;
  renderMetrics([...forbiddenBatchMetrics()]);
}

function renderBridgeDepthPage() {
  const batch = state.bridgeDepthData;
  summaryText.textContent = "Bridge depth batch";
  viewTitle.textContent = "Bridge Depth";
  viewSubtitle.textContent = "Depth-2 forbidden bridges across seed boards and a small trade frontier.";

  if (!batch) {
    dataPage.innerHTML = emptyState("Bridge depth data has not been generated yet.");
    renderMetrics([...bridgeDepthMetrics()]);
    return;
  }

  const current = batch.currentSource
    ? `${batch.currentSource.index}/${batch.currentSource.count}: ${escapeHtml(batch.currentSource.label)}`
    : "idle";

  dataPage.innerHTML = `
    <div class="card-grid">
      ${statusCard("Processed", `${batch.processedCount}/${batch.config.sourceCount}`, batch.complete)}
      ${statusCard("Current Source", current, batch.complete)}
      ${statusCard("Nontrivial Sources", String(batch.summary?.nontrivialSources ?? 0), batch.complete)}
    </div>
    ${progressBlock(batch.processedCount, batch.config.sourceCount)}
    ${bridgeDepthSummaryTable(batch.sources ?? [])}
    ${groupTable(batch.groups ?? [], "Bridge depth signature groups")}
  `;
  renderMetrics([...bridgeDepthMetrics()]);
}

function renderTestPlanPage() {
  summaryText.textContent = "Experiment queue";
  viewTitle.textContent = "Test Plan";
  viewSubtitle.textContent = "Commands and outputs for tests that can run independently of this chat.";

  dataPage.innerHTML = `
    <div class="card-grid">
      ${statusCard("Role Batch", state.batchData ? `${state.batchData.processedCount}/${state.batchData.collectedBoardCount}` : "not generated", state.batchData?.complete)}
      ${statusCard("Trade Targets", state.tradeBatchData ? `${state.tradeBatchData.processedCount}/${state.tradeBatchData.config.targetCount}` : "not generated", state.tradeBatchData?.complete)}
      ${statusCard("Adjacency", state.adjacencyBatchData ? `${state.adjacencyBatchData.processedCount}/${state.adjacencyBatchData.config.sourceCount}` : "not generated", state.adjacencyBatchData?.complete)}
      ${statusCard("Forbidden", state.forbiddenBatchData ? `${state.forbiddenBatchData.processedCount}/${state.forbiddenBatchData.config.sourceCount}` : "not generated", state.forbiddenBatchData?.complete)}
      ${statusCard("Bridge Depth", state.bridgeDepthData ? `${state.bridgeDepthData.processedCount}/${state.bridgeDepthData.config.sourceCount}` : "not generated", state.bridgeDepthData?.complete)}
    </div>
    <div class="data-card command-list">
      <h3>Runnable Tests</h3>
      ${commandItem("Visualizer server", "node serve-visualizer.js", "Serves the dashboard and polls saved JSON data.")}
      ${commandItem("Role graph batch", "node sudoku-9x9-role-graph-batch.js --limit=12 --progress=1", "Profiles selected completed boards and groups role graph signatures.")}
      ${commandItem("Trade target batch", "node sudoku-9x9-trade-target-batch.js", "Profiles all 54 cyclic-base two-symbol trade targets and resumes by stable target ID.")}
      ${commandItem("Trade adjacency", "node sudoku-9x9-trade-adjacency.js", "Tests whether trade targets connect to each other by additional structured trades.")}
      ${commandItem("Forbidden neighborhood", "node sudoku-9x9-forbidden-neighborhood.js --limit=4 --progress=1", "Profiles seed boards and a small trade-target frontier with checkpointed trade-neighborhood scans.")}
      ${commandItem("Bridge depth", "node sudoku-9x9-bridge-depth.js --limit=12", "Searches depth-2 forbidden bridges for seeds and a small trade frontier.")}
    </div>
  `;
  renderMetrics([...batchMetrics()]);
}

function statusCard(label, value, complete) {
  const statusClass = complete ? "" : " running";
  const statusText = complete ? "complete" : "running";
  return `
    <div class="data-card">
      <h3>${escapeHtml(label)}</h3>
      <div class="metric-large">${escapeHtml(value)}</div>
      <span class="status-pill${statusClass}">${statusText}</span>
    </div>
  `;
}

function progressBlock(done, total) {
  const percent = total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 0;
  return `
    <div class="data-card">
      <h3>Progress</h3>
      <div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div>
      <p>${done}/${total} (${percent}%)</p>
    </div>
  `;
}

function groupTable(groups = [], title) {
  const rows = groups.slice(0, 12).map((group, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${group.count}</td>
      <td>${escapeHtml((group.examples ?? []).join("; "))}</td>
    </tr>
  `).join("");

  return `
    <table class="data-table">
      <thead><tr><th colspan="3">${escapeHtml(title)}</th></tr></thead>
      <tbody>
        <tr><th>#</th><th>Boards</th><th>Examples</th></tr>
        ${rows || "<tr><td colspan=\"3\">No groups yet.</td></tr>"}
      </tbody>
    </table>
  `;
}

function tradeProfileTable(profiles = []) {
  const rows = profiles.slice(-8).reverse().map((profile) => `
    <tr>
      <td>${escapeHtml(profile.label)}</td>
      <td>${profile.trade.size}</td>
      <td>${escapeHtml(profile.paritySignature)}</td>
      <td>${profile.row.edgeCount}/${profile.col.edgeCount}</td>
    </tr>
  `).join("");

  return `
    <table class="data-table">
      <thead><tr><th colspan="4">Latest processed trade targets</th></tr></thead>
      <tbody>
        <tr><th>Target</th><th>Cells</th><th>Parity</th><th>Row/Col Edges</th></tr>
        ${rows || "<tr><td colspan=\"4\">No processed targets yet.</td></tr>"}
      </tbody>
    </table>
  `;
}

function adjacencySummaryTable(sources = []) {
  const rows = sources.slice(-10).reverse().map((source) => `
    <tr>
      <td>${escapeHtml(source.label)}</td>
      <td>${source.outgoingCount ?? 0}</td>
      <td>${escapeHtml(JSON.stringify(source.classCounts ?? {}))}</td>
    </tr>
  `).join("");

  return `
    <table class="data-table">
      <thead><tr><th colspan="3">Latest adjacency sources</th></tr></thead>
      <tbody>
        <tr><th>Source</th><th>Outgoing</th><th>Classes</th></tr>
        ${rows || "<tr><td colspan=\"3\">No adjacency data yet.</td></tr>"}
      </tbody>
    </table>
  `;
}

function forbiddenNeighborhoodSummaryTable(sources = []) {
  const rows = sources.slice(-10).reverse().map((source) => `
    <tr>
      <td>${escapeHtml(source.label)}</td>
      <td>${escapeHtml(source.sourceKind ?? "seed")}</td>
      <td>${source.totalTrades ?? 0}</td>
      <td>${source.uniqueTargetCount ?? 0}</td>
      <td>${source.minimumSize ?? 0}</td>
      <td>${source.minimumSwapDepth ?? 0}</td>
    </tr>
  `).join("");

  return `
    <table class="data-table">
      <thead><tr><th colspan="6">Latest forbidden-neighborhood sources</th></tr></thead>
      <tbody>
        <tr><th>Source</th><th>Kind</th><th>Trades</th><th>Unique Targets</th><th>Min Size</th><th>Min Depth</th></tr>
        ${rows || "<tr><td colspan=\"6\">No forbidden-neighborhood data yet.</td></tr>"}
      </tbody>
    </table>
  `;
}

function bridgeDepthSummaryTable(sources = []) {
  const rows = sources.slice(-10).reverse().map((source) => `
    <tr>
      <td>${escapeHtml(source.label)}</td>
      <td>${escapeHtml(source.sourceKind ?? "seed")}</td>
      <td>${source.bridgeCount ?? 0}</td>
      <td>${source.uniqueTargetCount ?? 0}</td>
      <td>${source.nontrivialTargetCount ?? 0}</td>
      <td>${source.hasNontrivialBridge ? "yes" : "no"}</td>
    </tr>
  `).join("");

  return `
    <table class="data-table">
      <thead><tr><th colspan="6">Latest bridge-depth sources</th></tr></thead>
      <tbody>
        <tr><th>Source</th><th>Kind</th><th>Bridges</th><th>Targets</th><th>Nontrivial</th><th>Has Bridge</th></tr>
        ${rows || "<tr><td colspan=\"6\">No bridge-depth data yet.</td></tr>"}
      </tbody>
    </table>
  `;
}

function commandItem(title, command, description) {
  return `
    <div class="command-item">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(description)}</p>
      <code>${escapeHtml(command)}</code>
    </div>
  `;
}

function emptyState(message) {
  return `<div class="data-card"><h3>No Data</h3><p>${escapeHtml(message)}</p></div>`;
}

function shortDate(value) {
  return value ? new Date(value).toLocaleTimeString() : "unknown";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderBoard(grid, invalid) {
  const trade = currentTrade();
  const tradeCells = new Set(trade.swaps.flat().map(([row, col]) => `${row},${col}`));

  boardEl.innerHTML = "";
  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = grid[row][col];

      if (state.layer !== "trade") {
        const linked = cellHasVisibleRoleEdge(row, col);
        if (linked === "extra") cell.classList.add("extra-linked");
        if (linked === "default") cell.classList.add("default-linked");
      }

      if (state.layer === "trade" && tradeCells.has(`${row},${col}`)) {
        cell.classList.add(state.tradeStep === "final" ? "final-cell" : "trade-cell");
      }

      if (
        state.layer === "trade"
        && state.showInvalidUnits
        && (invalid.rows.has(row) || invalid.cols.has(col) || invalid.boxes.has(`${Math.floor(row / BOX)},${Math.floor(col / BOX)}`))
      ) {
        cell.classList.add("invalid-unit");
      }

      boardEl.appendChild(cell);
    }
  }
}

function cellHasVisibleRoleEdge(row, col) {
  const axis = state.layer;
  if (axis !== "rows" && axis !== "columns") return null;

  const edges = validSwapEdges(boards[state.board].grid, axis);
  const index = axis === "rows" ? row : col;
  const matching = edges.filter((edge) => edge.a === index || edge.b === index);
  if (state.showExtraEdges && matching.some((edge) => edge.kind === "extra")) return "extra";
  if (state.showDefaultEdges && matching.some((edge) => edge.kind === "default")) return "default";
  return null;
}

function renderEdges(grid, trade, invalid) {
  edgeLayer.innerHTML = "";

  if (state.layer === "trade") {
    if (state.showInvalidUnits) renderInvalidUnitLines(invalid);
    renderTradeEdges(trade);
    renderAxisNodes();
    return;
  }

  const edges = validSwapEdges(grid, state.layer);
  for (const edge of edges) {
    if (edge.kind === "default" && !state.showDefaultEdges) continue;
    if (edge.kind === "extra" && !state.showExtraEdges) continue;
    drawRoleEdge(edge.a, edge.b, state.layer, edge.kind);
  }
  renderAxisNodes();
}

function renderAxisNodes() {
  for (let index = 0; index < SIZE; index += 1) {
    const top = boardToStage(index, -0.58);
    const left = boardToStage(-0.58, index);
    drawNode(top.x, top.y, `C${index + 1}`);
    drawNode(left.x, left.y, `R${index + 1}`);
  }
}

function renderInvalidUnitLines(invalid) {
  for (const row of invalid.rows) {
    const start = boardToStage(-0.1, row);
    const end = boardToStage(9.1, row);
    drawLine(start, end, "invalid-unit-line");
  }

  for (const col of invalid.cols) {
    const start = boardToStage(col, -0.1);
    const end = boardToStage(col, 9.1);
    drawLine(start, end, "invalid-unit-line");
  }
}

function renderTradeEdges(trade) {
  const visibleSwaps = state.tradeStep === "middle"
    ? trade.swaps.slice(0, trade.middleSwapIndex + 1)
    : trade.swaps;

  if (state.tradeStep === "start") return;

  for (const [first, second] of visibleSwaps) {
    const start = cellCenter(first[0], first[1]);
    const end = cellCenter(second[0], second[1]);
    drawCurve(start, end, "trade", 0.18);
  }
}

function drawRoleEdge(a, b, axis, kind) {
  const horizontalOffset = kind === "extra" ? 0.38 : 0.18;
  const verticalOffset = kind === "extra" ? 0.38 : 0.18;

  if (axis === "columns") {
    const start = boardToStage(a, -0.58);
    const end = boardToStage(b, -0.58);
    drawCurve(start, end, kind, -verticalOffset);
  } else {
    const start = boardToStage(-0.58, a);
    const end = boardToStage(-0.58, b);
    drawCurve(start, end, kind, horizontalOffset);
  }
}

function drawNode(x, y, label) {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  circle.setAttribute("class", "axis-node");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", 18);
  text.setAttribute("class", "axis-label");
  text.setAttribute("x", x);
  text.setAttribute("y", y + 1);
  text.textContent = label;
  group.append(circle, text);
  edgeLayer.appendChild(group);
}

function drawLine(start, end, kind) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("class", `edge ${kind}`);
  path.setAttribute("d", `M ${start.x} ${start.y} L ${end.x} ${end.y}`);
  edgeLayer.prepend(path);
}

function drawCurve(start, end, kind, lift) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const normal = Math.abs(dx) > Math.abs(dy)
    ? { x: 0, y: lift * distance }
    : { x: lift * distance, y: 0 };
  const cx = (start.x + end.x) / 2 + normal.x;
  const cy = (start.y + end.y) / 2 + normal.y;
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("class", `edge ${kind}`);
  path.setAttribute("d", `M ${start.x} ${start.y} Q ${cx} ${cy} ${end.x} ${end.y}`);
  edgeLayer.appendChild(path);
}

function cellCenter(row, col) {
  return boardToStage(col, row);
}

function boardToStage(col, row) {
  return {
    x: BOARD_INSET + CELL_SIZE * (col + 0.5),
    y: BOARD_INSET + CELL_SIZE * (row + 0.5),
  };
}

function renderText(boardInfo, trade, grid) {
  const activeBoard = state.layer === "trade" ? boards[trade.board] : boardInfo;
  const valid = validateGrid(grid);
  const layerLabel = state.layer === "columns" ? "Column Swaps" : state.layer === "rows" ? "Row Swaps" : "Two-Symbol Trade";

  summaryText.textContent = `${activeBoard.name} - ${valid ? "valid" : "invalid intermediate"}`;
  viewTitle.textContent = layerLabel;
  viewSubtitle.textContent = state.layer === "trade"
    ? `${trade.label}; step: ${state.tradeStep}`
    : "Edges show swaps that keep the displayed board valid.";

  if (state.layer === "trade") {
    renderMetrics([
      ["Board", activeBoard.name],
      ["Step valid", valid ? "yes" : "no"],
      ["Swap pairs", trade.swaps.length],
      ["Highlighted cells", new Set(trade.swaps.flat().map(([row, col]) => `${row},${col}`)).size],
      ...batchMetrics(),
    ]);
    return;
  }

  const edges = validSwapEdges(activeBoard.grid, state.layer);
  const defaultEdges = edges.filter((edge) => edge.kind === "default").length;
  const extraEdges = edges.filter((edge) => edge.kind === "extra").length;

  renderMetrics([
    ["Board", activeBoard.name],
    ["Valid swaps", edges.length],
    ["Default edges", defaultEdges],
    ["Extra edges", extraEdges],
    ["Valid endpoints", activeBoard.endpointCounts[state.layer]],
    ["Stepwise endpoints", activeBoard.stepwiseCounts[state.layer]],
    ["Worst case", activeBoard.worstCase[state.layer]],
    ...batchMetrics(),
  ]);
}

function batchMetrics() {
  const batch = state.batchData;
  if (!batch) return [["Batch data", "not generated"]];

  return [
    ["Batch processed", `${batch.processedCount}/${batch.collectedBoardCount}`],
    ["Batch complete", batch.complete ? "yes" : "no"],
    ["Signature groups", batch.groups.length],
    ["Data mode", state.batchPollStatus],
    ...tradeBatchMetrics(),
    ...adjacencyBatchMetrics(),
    ...forbiddenBatchMetrics(),
    ...bridgeDepthMetrics(),
  ];
}

function adjacencyBatchMetrics() {
  const batch = state.adjacencyBatchData;
  if (!batch) return [["Adjacency batch", "not generated"]];

  const current = batch.currentSource
    ? `${batch.currentSource.index}/${batch.currentSource.count}`
    : "idle";

  return [
    ["Adjacency processed", `${batch.processedCount}/${batch.config.sourceCount}`],
    ["Adjacency complete", batch.complete ? "yes" : "no"],
    ["Adjacency current", current],
    ["Adjacency mode", state.adjacencyBatchPollStatus],
  ];
}

function forbiddenBatchMetrics() {
  const batch = state.forbiddenBatchData;
  if (!batch) return [["Forbidden batch", "not generated"]];

  const current = batch.currentSource
    ? `${batch.currentSource.index}/${batch.currentSource.count}`
    : "idle";

  return [
    ["Forbidden processed", `${batch.processedCount}/${batch.config.sourceCount}`],
    ["Forbidden complete", batch.complete ? "yes" : "no"],
    ["Forbidden current", current],
    ["Forbidden mode", state.forbiddenBatchPollStatus],
  ];
}

function bridgeDepthMetrics() {
  const batch = state.bridgeDepthData;
  if (!batch) return [["Bridge batch", "not generated"]];

  const current = batch.currentSource
    ? `${batch.currentSource.index}/${batch.currentSource.count}`
    : "idle";

  return [
    ["Bridge processed", `${batch.processedCount}/${batch.config.sourceCount}`],
    ["Bridge complete", batch.complete ? "yes" : "no"],
    ["Bridge current", current],
    ["Bridge mode", state.bridgeDepthPollStatus],
  ];
}

function tradeBatchMetrics() {
  const batch = state.tradeBatchData;
  if (!batch) return [["Trade batch", "not generated"]];

  const current = batch.currentTarget
    ? `${batch.currentTarget.index}/${batch.currentTarget.count}`
    : "idle";

  return [
    ["Trade processed", `${batch.processedCount}/${batch.config.targetCount}`],
    ["Trade complete", batch.complete ? "yes" : "no"],
    ["Trade groups", batch.groups.length],
    ["Trade current", current],
    ["Trade mode", state.tradeBatchPollStatus],
  ];
}

function startBatchPolling() {
  if (window.location.protocol === "file:") return;

  async function pollJson(url) {
    const response = await fetch(`${url}?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }

  async function pollRoleBatch() {
    try {
      state.batchData = await pollJson("data/role-graph-batch.latest.json");
      state.batchPollStatus = state.batchData.complete ? "live complete" : "live updating";
      render();
    } catch {
      state.batchPollStatus = "waiting for JSON";
      render();
    }
  }

  async function pollTradeBatch() {
    try {
      state.tradeBatchData = await pollJson("data/trade-target-batch.latest.json");
      state.tradeBatchPollStatus = state.tradeBatchData.complete ? "live complete" : "live updating";
      render();
    } catch {
      state.tradeBatchPollStatus = "waiting for JSON";
      render();
    }
  }

  async function pollAdjacencyBatch() {
    try {
      state.adjacencyBatchData = await pollJson("data/trade-adjacency.latest.json");
      state.adjacencyBatchPollStatus = state.adjacencyBatchData.complete ? "live complete" : "live updating";
      render();
    } catch {
      state.adjacencyBatchPollStatus = "waiting for JSON";
      render();
    }
  }

  async function pollForbiddenBatch() {
    try {
      state.forbiddenBatchData = await pollJson("data/forbidden-neighborhood.latest.json");
      state.forbiddenBatchPollStatus = state.forbiddenBatchData.complete ? "live complete" : "live updating";
      render();
    } catch {
      state.forbiddenBatchPollStatus = "waiting for JSON";
      render();
    }
  }

  async function pollBridgeDepthBatch() {
    try {
      state.bridgeDepthData = await pollJson("data/bridge-depth.latest.json");
      state.bridgeDepthPollStatus = state.bridgeDepthData.complete ? "live complete" : "live updating";
      render();
    } catch {
      state.bridgeDepthPollStatus = "waiting for JSON";
      render();
    }
  }

  pollRoleBatch();
  pollTradeBatch();
  pollAdjacencyBatch();
  pollForbiddenBatch();
  pollBridgeDepthBatch();
  window.setInterval(pollRoleBatch, 3000);
  window.setInterval(pollTradeBatch, 3000);
  window.setInterval(pollAdjacencyBatch, 3000);
  window.setInterval(pollForbiddenBatch, 3000);
  window.setInterval(pollBridgeDepthBatch, 3000);
}

function renderMetrics(items) {
  metricsList.innerHTML = "";
  for (const [label, value] of items) {
    const row = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value;
    row.append(dt, dd);
    metricsList.appendChild(row);
  }
}

function syncControls() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });
  document.querySelectorAll("[data-board]").forEach((button) => {
    button.classList.toggle("active", button.dataset.board === state.board);
  });
  document.querySelectorAll("[data-layer]").forEach((button) => {
    button.classList.toggle("active", button.dataset.layer === state.layer);
  });
  document.querySelectorAll("[data-step]").forEach((button) => {
    button.classList.toggle("active", button.dataset.step === state.tradeStep);
  });
  document.querySelector("#showDefaultEdges").checked = state.showDefaultEdges;
  document.querySelector("#showExtraEdges").checked = state.showExtraEdges;
  document.querySelector("#showInvalidUnits").checked = state.showInvalidUnits;
  tradeSelect.value = state.tradeId;
}

function setupControls() {
  for (const trade of tradeExamples) {
    const option = document.createElement("option");
    option.value = trade.id;
    option.textContent = trade.label;
    tradeSelect.appendChild(option);
  }

  document.querySelectorAll("[data-board]").forEach((button) => {
    button.addEventListener("click", () => {
      state.board = button.dataset.board;
      render();
    });
  });

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      render();
    });
  });

  document.querySelectorAll("[data-layer]").forEach((button) => {
    button.addEventListener("click", () => {
      state.layer = button.dataset.layer;
      render();
    });
  });

  document.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tradeStep = button.dataset.step;
      render();
    });
  });

  tradeSelect.addEventListener("change", () => {
    state.tradeId = tradeSelect.value;
    state.layer = "trade";
    render();
  });

  document.querySelector("#showDefaultEdges").addEventListener("change", (event) => {
    state.showDefaultEdges = event.target.checked;
    render();
  });
  document.querySelector("#showExtraEdges").addEventListener("change", (event) => {
    state.showExtraEdges = event.target.checked;
    render();
  });
  document.querySelector("#showInvalidUnits").addEventListener("change", (event) => {
    state.showInvalidUnits = event.target.checked;
    render();
  });
}

setupControls();
render();
startBatchPolling();
