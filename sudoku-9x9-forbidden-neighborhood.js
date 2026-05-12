const fs = require("fs");
const path = require("path");

const SIZE = 9;
const BOX = 3;
const SYMBOLS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const DEFAULT_TRADE_TARGET_LIMIT = 4;
const EXACT_SCAN_LIMIT = 1500;

const OUTPUT_DIR = path.join(__dirname, "data");
const VISUALIZER_DATA_DIR = path.join(__dirname, "visualizer", "data");
const OUTPUT_JSON = path.join(OUTPUT_DIR, "forbidden-neighborhood.latest.json");
const VISUALIZER_JSON = path.join(VISUALIZER_DATA_DIR, "forbidden-neighborhood.latest.json");
const VISUALIZER_DATA_JS = path.join(VISUALIZER_DATA_DIR, "forbidden-neighborhood-data.js");
const TRADE_TARGET_BATCH_JSON = path.join(OUTPUT_DIR, "trade-target-batch.latest.json");

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

const COMPARISON_GRID = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
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

function permutationParity(values) {
  let inversions = 0;
  for (let i = 0; i < values.length; i += 1) {
    for (let j = i + 1; j < values.length; j += 1) {
      if (values[i] > values[j]) inversions += 1;
    }
  }
  return inversions % 2 === 0 ? "even" : "odd";
}

function rowPairParity(grid, a, b) {
  const positions = new Map(grid[a].map((value, index) => [value, index + 1]));
  return permutationParity(grid[b].map((value) => positions.get(value)));
}

function colPairParity(grid, a, b) {
  const colA = grid.map((row) => row[a]);
  const colB = grid.map((row) => row[b]);
  const positions = new Map(colA.map((value, index) => [value, index + 1]));
  return permutationParity(colB.map((value) => positions.get(value)));
}

function pairParityProfile(grid, axis) {
  const parityForPair = axis === "row" ? rowPairParity : colPairParity;
  const profile = { even: 0, odd: 0 };
  for (let a = 0; a < SIZE; a += 1) {
    for (let b = a + 1; b < SIZE; b += 1) profile[parityForPair(grid, a, b)] += 1;
  }
  return profile;
}

function paritySignature(grid) {
  const rows = pairParityProfile(grid, "row");
  const cols = pairParityProfile(grid, "col");
  return `rows even:${rows.even},odd:${rows.odd} | cols even:${cols.even},odd:${cols.odd}`;
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

function bitCount(mask) {
  let count = 0;
  let current = mask;
  while (current > 0) {
    current &= current - 1;
    count += 1;
  }
  return count;
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

function tradeShape(cells) {
  return {
    cellCount: cells.length,
    rowCount: new Set(cells.map((cell) => cell.row)).size,
    colCount: new Set(cells.map((cell) => cell.col)).size,
    boxCount: new Set(cells.map((cell) => cell.box)).size,
    rowBandCount: new Set(cells.map((cell) => Math.floor(cell.row / BOX))).size,
    colStackCount: new Set(cells.map((cell) => Math.floor(cell.col / BOX))).size,
  };
}

function applyTradeSpecToBase(spec) {
  const positions = positionsForDigits(BASE_GRID, spec.firstDigit, spec.secondDigit);
  const cells = selectedCellsFromMask(positions, spec.mask);
  return applyTwoSymbolTrade(BASE_GRID, cells, spec.firstDigit, spec.secondDigit);
}

function generateTradeTargets() {
  const targets = [];
  const seenTargets = new Set();

  for (let firstDigit = 1; firstDigit <= SIZE; firstDigit += 1) {
    for (let secondDigit = firstDigit + 1; secondDigit <= SIZE; secondDigit += 1) {
      const positions = positionsForDigits(BASE_GRID, firstDigit, secondDigit);
      const fullMask = (1 << positions.length) - 1;

      for (let mask = 1; mask < fullMask; mask += 1) {
        const size = bitCount(mask);
        if (size < 4 || size % 2 !== 0) continue;
        if (!isBalancedTrade(positions, mask)) continue;

        const cells = selectedCellsFromMask(positions, mask);
        const grid = applyTwoSymbolTrade(BASE_GRID, cells, firstDigit, secondDigit);
        if (!validateGrid(grid)) throw new Error(`invalid target for ${firstDigit}<->${secondDigit} mask ${mask}`);

        const key = gridKey(grid);
        if (seenTargets.has(key)) continue;
        seenTargets.add(key);

        targets.push({
          id: `digits-${firstDigit}-${secondDigit}-mask-${mask}`,
          label: `${firstDigit}<->${secondDigit} mask ${mask}`,
          firstDigit,
          secondDigit,
          mask,
          size,
          shape: tradeShape(cells),
          cells: cells.map((cell) => ({ row: cell.row + 1, col: cell.col + 1, value: cell.value })),
          grid,
        });
      }
    }
  }

  return targets.sort((a, b) => a.size - b.size || a.firstDigit - b.firstDigit || a.secondDigit - b.secondDigit || a.mask - b.mask);
}

function loadTradeTargetProfiles(limit) {
  if (!fs.existsSync(TRADE_TARGET_BATCH_JSON)) return [];
  try {
    const parsed = JSON.parse(fs.readFileSync(TRADE_TARGET_BATCH_JSON, "utf8"));
    const profiles = parsed?.profiles ?? [];
    if (profiles.length < limit) return [];
    return profiles.slice(0, limit);
  } catch {
    return [];
  }
}

function buildTradeTargetSource(profile, index) {
  const trade = profile.trade ?? {
    firstDigit: profile.firstDigit,
    secondDigit: profile.secondDigit,
    mask: profile.mask,
  };
  return {
    id: `trade-target-${index + 1}-${profile.id}`,
    label: profile.label ?? `${trade.firstDigit}<->${trade.secondDigit} mask ${trade.mask}`,
    sourceKind: "trade-target",
    trade,
    grid: applyTradeSpecToBase(trade),
  };
}

function buildSources(tradeTargetLimit) {
  const tradeTargets = loadTradeTargetProfiles(tradeTargetLimit);
  const tradeTargetSources = tradeTargets.length > 0
    ? tradeTargets.map((profile, index) => buildTradeTargetSource(profile, index))
    : generateTradeTargets().slice(0, tradeTargetLimit).map((profile, index) => buildTradeTargetSource(profile, index));

  return [
    { id: "seed-base", label: "cyclic base", sourceKind: "seed", grid: BASE_GRID },
    { id: "seed-comparison", label: "comparison", sourceKind: "seed", grid: COMPARISON_GRID },
    ...tradeTargetSources,
  ];
}

function countMapFromObject(object) {
  return Object.entries(object).sort((a, b) => {
    const numericA = Number(a[0]);
    const numericB = Number(b[0]);
    if (Number.isFinite(numericA) && Number.isFinite(numericB) && numericA !== numericB) return numericA - numericB;
    return b[1] - a[1] || String(a[0]).localeCompare(String(b[0]));
  });
}

function mapToSortedObject(map) {
  return Object.fromEntries(countMapFromObject(Object.fromEntries(map.entries())));
}

function topKeyFromCounts(counts) {
  const entries = Object.entries(counts);
  if (entries.length === 0) return "none";
  entries.sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])));
  return entries[0][0];
}

function scanTwoSymbolTrades(grid) {
  const tradeSizeCounts = new Map();
  const shapeCounts = new Map();
  const minimumShapeCounts = new Map();
  const minimumBandStackShapeCounts = new Map();
  const minimumDigitPairCounts = new Map();
  const parityCounts = new Map();
  const uniqueTargets = new Set();
  const examples = [];
  let minimumSize = Infinity;
  let totalTrades = 0;

  for (let firstDigit = 1; firstDigit <= SIZE; firstDigit += 1) {
    for (let secondDigit = firstDigit + 1; secondDigit <= SIZE; secondDigit += 1) {
      const positions = positionsForDigits(grid, firstDigit, secondDigit);
      const fullMask = (1 << positions.length) - 1;

      for (let mask = 1; mask < fullMask; mask += 1) {
        const size = bitCount(mask);
        if (size < 4 || size % 2 !== 0) continue;
        if (!isBalancedTrade(positions, mask)) continue;

        const cells = selectedCellsFromMask(positions, mask);
        const final = applyTwoSymbolTrade(grid, cells, firstDigit, secondDigit);
        if (!validateGrid(final)) {
          throw new Error(`invalid trade generated for ${firstDigit}<->${secondDigit}`);
        }

        totalTrades += 1;
        uniqueTargets.add(gridKey(final));
        tradeSizeCounts.set(size, (tradeSizeCounts.get(size) ?? 0) + 1);
        shapeCounts.set(JSON.stringify(tradeShape(cells)), (shapeCounts.get(JSON.stringify(tradeShape(cells))) ?? 0) + 1);
        parityCounts.set(paritySignature(final), (parityCounts.get(paritySignature(final)) ?? 0) + 1);

        if (size < minimumSize) {
          minimumSize = size;
          minimumShapeCounts.clear();
          minimumBandStackShapeCounts.clear();
          minimumDigitPairCounts.clear();
          examples.length = 0;
        }

        if (size === minimumSize) {
          const shapeKey = JSON.stringify(tradeShape(cells));
          const bandStackKey = `${tradeShape(cells).rowBandCount}-${tradeShape(cells).colStackCount}`;
          const digitPairKey = `${firstDigit}<->${secondDigit}`;
          minimumShapeCounts.set(shapeKey, (minimumShapeCounts.get(shapeKey) ?? 0) + 1);
          minimumBandStackShapeCounts.set(bandStackKey, (minimumBandStackShapeCounts.get(bandStackKey) ?? 0) + 1);
          minimumDigitPairCounts.set(digitPairKey, (minimumDigitPairCounts.get(digitPairKey) ?? 0) + 1);

          if (examples.length < 8) {
            examples.push({
              digits: `${firstDigit}<->${secondDigit}`,
              cells,
              parity: paritySignature(final),
            });
          }
        }
      }
    }
  }

  return {
    totalTrades,
    uniqueTargetCount: uniqueTargets.size,
    minimumSize,
    minimumSwapDepth: minimumSize / 2,
    tradeSizeCounts: mapToSortedObject(tradeSizeCounts),
    shapeCounts: mapToSortedObject(shapeCounts),
    minimumShapeCounts: mapToSortedObject(minimumShapeCounts),
    minimumBandStackShapeCounts: mapToSortedObject(minimumBandStackShapeCounts),
    minimumDigitPairCounts: mapToSortedObject(minimumDigitPairCounts),
    parityCounts: mapToSortedObject(parityCounts),
    examples,
  };
}

function summarizeProfiles(sources) {
  const totals = {
    totalTrades: 0,
    sourceKinds: {},
    minimumSizes: {},
    paritySignatures: {},
    primaryShapes: {},
  };

  for (const source of sources) {
    totals.totalTrades += source.totalTrades;
    totals.sourceKinds[source.sourceKind] = (totals.sourceKinds[source.sourceKind] ?? 0) + 1;
    totals.minimumSizes[source.minimumSize] = (totals.minimumSizes[source.minimumSize] ?? 0) + 1;
    totals.paritySignatures[source.paritySignature] = (totals.paritySignatures[source.paritySignature] ?? 0) + 1;
    totals.primaryShapes[source.primaryShape] = (totals.primaryShapes[source.primaryShape] ?? 0) + 1;
  }

  return totals;
}

function groupsForOutput(sources) {
  const groups = new Map();
  for (const source of sources) {
    if (!groups.has(source.signature)) {
      groups.set(source.signature, {
        signature: source.signature,
        count: 0,
        examples: [],
      });
    }
    const group = groups.get(source.signature);
    group.count += 1;
    if (group.examples.length < 6) group.examples.push(source.label);
  }

  return [...groups.values()].sort((a, b) => b.count - a.count || a.signature.localeCompare(b.signature));
}

function loadExistingState(sourceCount) {
  if (!flagEnabled("resume", true) || !fs.existsSync(OUTPUT_JSON)) return [];
  try {
    const parsed = JSON.parse(fs.readFileSync(OUTPUT_JSON, "utf8"));
    return parsed?.config?.sourceCount === sourceCount ? parsed.sources ?? [] : [];
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
    summary: summarizeProfiles(state.sources),
    groups: groupsForOutput(state.sources),
  };
  fs.writeFileSync(OUTPUT_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_DATA_JS, `window.SUDOKU_FORBIDDEN_NEIGHBORHOOD = ${JSON.stringify(output, null, 2)};\n`);
}

function profileSource(source) {
  const profile = scanTwoSymbolTrades(source.grid);
  const primaryShape = topKeyFromCounts(profile.minimumShapeCounts);
  const signature = `min:${profile.minimumSize};shape:${primaryShape};parity:${paritySignature(source.grid)};kind:${source.sourceKind}`;

  return {
    id: source.id,
    label: source.label,
    sourceKind: source.sourceKind,
    valid: validateGrid(source.grid),
    paritySignature: paritySignature(source.grid),
    signature,
    primaryShape,
    totalTrades: profile.totalTrades,
    uniqueTargetCount: profile.uniqueTargetCount,
    minimumSize: profile.minimumSize,
    minimumSwapDepth: profile.minimumSwapDepth,
    tradeSizeCounts: profile.tradeSizeCounts,
    shapeCounts: profile.shapeCounts,
    minimumShapeCounts: profile.minimumShapeCounts,
    minimumBandStackShapeCounts: profile.minimumBandStackShapeCounts,
    minimumDigitPairCounts: profile.minimumDigitPairCounts,
    parityCounts: profile.parityCounts,
    examples: profile.examples,
  };
}

function main() {
  const tradeTargetLimit = Number(readArg("limit") ?? DEFAULT_TRADE_TARGET_LIMIT);
  const progressEvery = Number(readArg("progress") ?? 1);
  const sources = buildSources(tradeTargetLimit);
  const existingSources = loadExistingState(sources.length);
  const processedIds = new Set(existingSources.map((source) => source.id));

  const state = {
    kind: "forbidden-neighborhood",
    runStartedAt: new Date().toISOString(),
    config: {
      sourceCount: sources.length,
      seedSourceCount: 2,
      tradeTargetLimit,
      exactScanLimit: EXACT_SCAN_LIMIT,
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

  console.log("9x9 forbidden neighborhood batch");
  console.log(`source count this run: ${sources.length}`);
  console.log(`trade target limit: ${tradeTargetLimit}`);
  console.log(`resume enabled: ${state.config.resume}`);
  console.log(`already processed: ${existingSources.length}`);
  writeState(state);

  for (let index = 0; index < sources.length; index += 1) {
    const source = sources[index];
    if (processedIds.has(source.id)) continue;

    state.currentSource = {
      index: index + 1,
      count: sources.length,
      id: source.id,
      label: source.label,
      kind: source.sourceKind,
    };
    writeState(state);

    const profiled = profileSource(source);
    state.sources.push(profiled);
    processedIds.add(source.id);
    state.processedCount = state.sources.length;
    state.currentSource = null;
    writeState(state);

    console.log(`processed ${state.processedCount}/${sources.length}: ${source.label}`);
    console.log(`  total trades: ${profiled.totalTrades}`);
    console.log(`  unique targets: ${profiled.uniqueTargetCount}`);
    console.log(`  minimum trade size: ${profiled.minimumSize}`);
    console.log(`  primary shape: ${profiled.primaryShape}`);
  }

  state.complete = state.processedCount >= sources.length;
  state.currentSource = null;
  writeState(state);

  console.log("");
  console.log(`complete: ${state.complete}`);
  console.log(`summary: ${JSON.stringify(state.summary ?? summarizeProfiles(state.sources))}`);
  console.log(`json: ${OUTPUT_JSON}`);
}

main();
