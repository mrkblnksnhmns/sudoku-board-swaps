const fs = require("fs");
const path = require("path");

const SIZE = 9;
const BOX = 3;
const SYMBOLS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const OUTPUT_DIR = path.join(__dirname, "data");
const VISUALIZER_DATA_DIR = path.join(__dirname, "visualizer", "data");
const OUTPUT_JSON = path.join(OUTPUT_DIR, "trade-adjacency.latest.json");
const VISUALIZER_JSON = path.join(VISUALIZER_DATA_DIR, "trade-adjacency.latest.json");
const VISUALIZER_DATA_JS = path.join(VISUALIZER_DATA_DIR, "trade-adjacency-data.js");

const BASE_GRID = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [9, 1, 2, 3, 4, 5, 6, 7, 8],
];

function readArg(name) {
  const prefix = `--${name}=`;
  const found = process.argv.find((arg) => arg.startsWith(prefix));
  return found ? found.slice(prefix.length) : null;
}

function flagEnabled(name, defaultValue = false) {
  if (process.argv.includes(`--${name}`)) return true;
  if (process.argv.includes(`--no-${name}`)) return false;
  return defaultValue;
}

function validateGrid(grid) {
  const expected = SYMBOLS.join("");
  const sorted = (values) => [...values].sort((a, b) => a - b).join("");

  for (let i = 0; i < SIZE; i += 1) {
    if (sorted(grid[i]) !== expected) return false;
    if (sorted(grid.map((row) => row[i])) !== expected) return false;
  }

  for (let boxRow = 0; boxRow < SIZE; boxRow += BOX) {
    for (let boxCol = 0; boxCol < SIZE; boxCol += BOX) {
      const values = [];
      for (let row = boxRow; row < boxRow + BOX; row += 1) {
        for (let col = boxCol; col < boxCol + BOX; col += 1) values.push(grid[row][col]);
      }
      if (sorted(values) !== expected) return false;
    }
  }

  return true;
}

function cloneGrid(grid) {
  return grid.map((row) => [...row]);
}

function gridKey(grid) {
  return grid.map((row) => row.join("")).join("/");
}

function bitCount(mask) {
  let count = 0;
  let current = mask;
  while (current > 0) {
    current &= current - 1;
    count += 1;
  }
  return count;
}

function positionsForDigits(grid, firstDigit, secondDigit) {
  const positions = [];
  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      const value = grid[row][col];
      if (value !== firstDigit && value !== secondDigit) continue;
      positions.push({
        row,
        col,
        box: Math.floor(row / BOX) * BOX + Math.floor(col / BOX),
        value,
        sign: value === firstDigit ? 1 : -1,
      });
    }
  }
  return positions;
}

function selectedCellsFromMask(positions, mask) {
  const cells = [];
  for (let bit = 0; bit < positions.length; bit += 1) {
    if ((mask & (1 << bit)) !== 0) cells.push(positions[bit]);
  }
  return cells;
}

function isBalancedTrade(positions, mask) {
  const rowDeltas = Array(SIZE).fill(0);
  const colDeltas = Array(SIZE).fill(0);
  const boxDeltas = Array(SIZE).fill(0);

  for (let bit = 0; bit < positions.length; bit += 1) {
    if ((mask & (1 << bit)) === 0) continue;
    const cell = positions[bit];
    rowDeltas[cell.row] += cell.sign;
    colDeltas[cell.col] += cell.sign;
    boxDeltas[cell.box] += cell.sign;
  }

  return rowDeltas.every((delta) => delta === 0)
    && colDeltas.every((delta) => delta === 0)
    && boxDeltas.every((delta) => delta === 0);
}

function applyTwoSymbolTrade(grid, cells, firstDigit, secondDigit) {
  const next = cloneGrid(grid);
  for (const cell of cells) next[cell.row][cell.col] = cell.value === firstDigit ? secondDigit : firstDigit;
  return next;
}

function generateTradesFromGrid(grid) {
  const trades = [];
  const seenTargets = new Set();

  for (let firstDigit = 1; firstDigit <= SIZE; firstDigit += 1) {
    for (let secondDigit = firstDigit + 1; secondDigit <= SIZE; secondDigit += 1) {
      const positions = positionsForDigits(grid, firstDigit, secondDigit);
      const fullMask = (1 << positions.length) - 1;

      for (let mask = 1; mask < fullMask; mask += 1) {
        const size = bitCount(mask);
        if (size < 4 || size % 2 !== 0) continue;
        if (!isBalancedTrade(positions, mask)) continue;

        const cells = selectedCellsFromMask(positions, mask);
        const target = applyTwoSymbolTrade(grid, cells, firstDigit, secondDigit);
        if (!validateGrid(target)) throw new Error(`invalid trade for ${firstDigit}<->${secondDigit} mask ${mask}`);

        const key = gridKey(target);
        if (seenTargets.has(key)) continue;
        seenTargets.add(key);
        trades.push({
          key,
          firstDigit,
          secondDigit,
          mask,
          size,
        });
      }
    }
  }

  return trades.sort((a, b) => a.size - b.size || a.firstDigit - b.firstDigit || a.secondDigit - b.secondDigit || a.mask - b.mask);
}

function baseTradeTargets() {
  return generateTradesFromGrid(BASE_GRID).map((trade, index) => ({
    ...trade,
    id: `base-trade-${index + 1}-digits-${trade.firstDigit}-${trade.secondDigit}-mask-${trade.mask}`,
    label: `${trade.firstDigit}<->${trade.secondDigit} mask ${trade.mask}`,
  }));
}

function loadExistingState(targetCount) {
  if (!flagEnabled("resume", true) || !fs.existsSync(OUTPUT_JSON)) return [];
  try {
    const parsed = JSON.parse(fs.readFileSync(OUTPUT_JSON, "utf8"));
    return parsed?.config?.sourceCount === targetCount ? parsed.sources ?? [] : [];
  } catch {
    return [];
  }
}

function writeState(state) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(VISUALIZER_DATA_DIR, { recursive: true });
  const output = {
    ...state,
    updatedAt: new Date().toISOString(),
    summary: summarizeSources(state.sources),
  };
  fs.writeFileSync(OUTPUT_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_DATA_JS, `window.SUDOKU_TRADE_ADJACENCY = ${JSON.stringify(output, null, 2)};\n`);
}

function summarizeSources(sources) {
  const totals = {
    self: 0,
    base: 0,
    knownTradeTarget: 0,
    newBoard: 0,
  };
  for (const source of sources) {
    for (const [key, count] of Object.entries(source.classCounts)) totals[key] += count;
  }
  return totals;
}

function classifyTradeTarget(key, sourceKey, baseKey, knownTargetByKey) {
  if (key === sourceKey) return "self";
  if (key === baseKey) return "base";
  if (knownTargetByKey.has(key)) return "knownTradeTarget";
  return "newBoard";
}

function main() {
  const allSources = baseTradeTargets();
  const limitArg = readArg("limit");
  const sources = limitArg ? allSources.slice(0, Number(limitArg)) : allSources;
  const existingSources = loadExistingState(sources.length);
  const processedIds = new Set(existingSources.map((source) => source.id));
  const knownTargetByKey = new Map(allSources.map((source) => [source.key, source]));
  const baseKey = gridKey(BASE_GRID);
  const state = {
    kind: "trade-adjacency",
    runStartedAt: new Date().toISOString(),
    config: {
      sourceCount: sources.length,
      allGeneratedSourceCount: allSources.length,
      resume: flagEnabled("resume", true),
    },
    processedCount: existingSources.length,
    complete: false,
    currentSource: null,
    sources: existingSources,
    outputJson: OUTPUT_JSON,
    visualizerJson: VISUALIZER_JSON,
    visualizerDataJs: VISUALIZER_DATA_JS,
  };

  console.log("9x9 trade adjacency batch");
  console.log(`source count this run: ${sources.length}`);
  console.log(`resume enabled: ${state.config.resume}`);
  console.log(`already processed: ${existingSources.length}`);
  writeState(state);

  for (let index = 0; index < sources.length; index += 1) {
    const source = sources[index];
    if (processedIds.has(source.id)) continue;

    state.currentSource = { index: index + 1, count: sources.length, id: source.id, label: source.label };
    writeState(state);

    const sourceGrid = applyTradeSpecToBase(source);
    const outgoing = generateTradesFromGrid(sourceGrid);
    const classCounts = { self: 0, base: 0, knownTradeTarget: 0, newBoard: 0 };
    const examples = [];

    for (const edge of outgoing) {
      const classification = classifyTradeTarget(edge.key, source.key, baseKey, knownTargetByKey);
      classCounts[classification] += 1;
      if (examples.length < 8 && classification !== "self") {
        examples.push({
          classification,
          firstDigit: edge.firstDigit,
          secondDigit: edge.secondDigit,
          mask: edge.mask,
          size: edge.size,
          knownTarget: knownTargetByKey.get(edge.key)?.label ?? null,
        });
      }
    }

    state.sources.push({
      id: source.id,
      label: source.label,
      tradeSize: source.size,
      outgoingCount: outgoing.length,
      classCounts,
      examples,
    });
    processedIds.add(source.id);
    state.processedCount = state.sources.length;
    state.currentSource = null;
    writeState(state);

    console.log(`processed ${state.processedCount}/${sources.length}: ${source.label}`);
    console.log(`  outgoing trades: ${outgoing.length}`);
    console.log(`  classes: ${JSON.stringify(classCounts)}`);
  }

  state.complete = state.processedCount >= sources.length;
  state.currentSource = null;
  writeState(state);

  console.log("");
  console.log(`complete: ${state.complete}`);
  console.log(`summary: ${JSON.stringify(summarizeSources(state.sources))}`);
  console.log(`json: ${OUTPUT_JSON}`);
}

function applyTradeSpecToBase(spec) {
  const positions = positionsForDigits(BASE_GRID, spec.firstDigit, spec.secondDigit);
  const cells = selectedCellsFromMask(positions, spec.mask);
  return applyTwoSymbolTrade(BASE_GRID, cells, spec.firstDigit, spec.secondDigit);
}

main();
