const fs = require("fs");
const path = require("path");

const SIZE = 9;
const BOX = 3;
const CELL_COUNT = SIZE * SIZE;
const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const VALID_MASK = 0b1111111110;
const COL_NAMES = "ABCDEFGHI";
const PERMS_3 = [
  [0, 1, 2],
  [0, 2, 1],
  [1, 0, 2],
  [1, 2, 0],
  [2, 0, 1],
  [2, 1, 0],
];

const OUTPUT_DIR = path.join(__dirname, "data");
const VISUALIZER_DATA_DIR = path.join(__dirname, "visualizer", "data");
const SUMMARY_JSON = path.join(OUTPUT_DIR, "raw-cell-swap-depth.latest.json");
const RAW_JSONL = path.join(OUTPUT_DIR, "raw-cell-swap-depth.latest.jsonl");
const VISUALIZER_JSON = path.join(VISUALIZER_DATA_DIR, "raw-cell-swap-depth.latest.json");
const VISUALIZER_DATA_JS = path.join(VISUALIZER_DATA_DIR, "raw-cell-swap-depth-data.js");
let exampleLimit = 100;

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

function readArg(name, fallback = null) {
  const prefix = `--${name}=`;
  const found = process.argv.find((arg) => arg.startsWith(prefix));
  return found ? found.slice(prefix.length) : fallback;
}

function flagEnabled(name, defaultValue = false) {
  if (process.argv.includes(`--${name}`)) return true;
  if (process.argv.includes(`--no-${name}`)) return false;
  return defaultValue;
}

function gridToBoardString(grid) {
  return grid.map((row) => row.join("")).join("");
}

function boardToGrid(board) {
  const grid = [];
  for (let row = 0; row < SIZE; row += 1) {
    grid.push([...board.slice(row * SIZE, row * SIZE + SIZE)].map(Number));
  }
  return grid;
}

function boardToArray(board) {
  return Uint8Array.from([...board].map(Number));
}

function arrayToBoard(values) {
  let out = "";
  for (const value of values) out += String(value);
  return out;
}

function coord(index) {
  const row = Math.floor(index / SIZE);
  const col = index % SIZE;
  return `${COL_NAMES[col]}${row + 1}`;
}

function swapNotation(first, second) {
  return `${coord(first)}<->${coord(second)}`;
}

function sequenceNotation(moves) {
  return `${moves.map(([first, second]) => swapNotation(first, second)).join(", ")}, end`;
}

function boxIndexForCell(index) {
  const row = Math.floor(index / SIZE);
  const col = index % SIZE;
  return Math.floor(row / BOX) * BOX + Math.floor(col / BOX);
}

function unitIndicesForCell(index) {
  const row = Math.floor(index / SIZE);
  const col = index % SIZE;
  return [row, SIZE + col, SIZE * 2 + boxIndexForCell(index)];
}

function allCellPairs() {
  const pairs = [];
  for (let first = 0; first < CELL_COUNT; first += 1) {
    for (let second = first + 1; second < CELL_COUNT; second += 1) pairs.push([first, second]);
  }
  return pairs;
}

const CELL_PAIRS = allCellPairs();
const CELL_UNITS = Array.from({ length: CELL_COUNT }, (_, index) => unitIndicesForCell(index));

function makeBandRespectingPermutation(bandOrder, rowOrdersByBand) {
  const out = [];
  for (const band of bandOrder) {
    for (const row of rowOrdersByBand[band]) out.push(band * BOX + row);
  }
  return out;
}

function allBandRespectingPermutations() {
  const out = [];
  for (const bandOrder of PERMS_3) {
    for (const first of PERMS_3) {
      for (const second of PERMS_3) {
        for (const third of PERMS_3) {
          out.push(makeBandRespectingPermutation(bandOrder, [first, second, third]));
        }
      }
    }
  }
  return out;
}

const BAND_RESPECTING_PERMS = allBandRespectingPermutations();

function transpose(grid) {
  return grid[0].map((_, col) => grid.map((row) => row[col]));
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

function rowPairParity(grid, first, second) {
  const positions = new Map(grid[first].map((value, index) => [value, index + 1]));
  return permutationParity(grid[second].map((value) => positions.get(value)));
}

function colPairParity(grid, first, second) {
  const colA = grid.map((row) => row[first]);
  const colB = grid.map((row) => row[second]);
  const positions = new Map(colA.map((value, index) => [value, index + 1]));
  return permutationParity(colB.map((value) => positions.get(value)));
}

function pairParityProfile(grid, axis) {
  const parityForPair = axis === "row" ? rowPairParity : colPairParity;
  const profile = { even: 0, odd: 0 };
  for (let first = 0; first < SIZE; first += 1) {
    for (let second = first + 1; second < SIZE; second += 1) {
      profile[parityForPair(grid, first, second)] += 1;
    }
  }
  return profile;
}

function profileKey(profile) {
  return `even:${profile.even},odd:${profile.odd}`;
}

function parityParts(grid) {
  return {
    rows: profileKey(pairParityProfile(grid, "row")),
    cols: profileKey(pairParityProfile(grid, "col")),
  };
}

function parityAllowsSymmetry(sourceGrid, targetGrid) {
  const sourceParity = parityParts(sourceGrid);
  const targetParity = parityParts(targetGrid);
  return (
    sourceParity.rows === targetParity.rows
    && sourceParity.cols === targetParity.cols
  ) || (
    sourceParity.rows === targetParity.cols
    && sourceParity.cols === targetParity.rows
  );
}

function findStandardSymmetry(sourceGrid, targetGrid) {
  for (const shouldTranspose of [false, true]) {
    const working = shouldTranspose ? transpose(sourceGrid) : sourceGrid;

    for (const rowPermutation of BAND_RESPECTING_PERMS) {
      for (const colPermutation of BAND_RESPECTING_PERMS) {
        const digitMap = new Map();
        const reverseDigitMap = new Map();
        let ok = true;

        for (let row = 0; row < SIZE && ok; row += 1) {
          for (let col = 0; col < SIZE; col += 1) {
            const from = working[rowPermutation[row]][colPermutation[col]];
            const to = targetGrid[row][col];

            if (digitMap.has(from) && digitMap.get(from) !== to) {
              ok = false;
              break;
            }
            if (reverseDigitMap.has(to) && reverseDigitMap.get(to) !== from) {
              ok = false;
              break;
            }

            digitMap.set(from, to);
            reverseDigitMap.set(to, from);
          }
        }

        if (ok) return { transpose: shouldTranspose };
      }
    }
  }
  return null;
}

function classifyEndpoint(sourceBoard, targetBoard, sourceGrid) {
  if (targetBoard === sourceBoard) return "identity";

  const targetGrid = boardToGrid(targetBoard);
  if (!parityAllowsSymmetry(sourceGrid, targetGrid)) return "genuine";
  return findStandardSymmetry(sourceGrid, targetGrid) ? "standard-symmetry" : "genuine";
}

class SwapState {
  constructor(board) {
    this.values = boardToArray(board);
    this.counts = Array.from({ length: SIZE * 3 }, () => Array(10).fill(0));
    this.unitValid = Array(SIZE * 3).fill(false);
    this.invalidUnitCount = 0;

    for (let index = 0; index < CELL_COUNT; index += 1) {
      const value = this.values[index];
      for (const unit of CELL_UNITS[index]) this.counts[unit][value] += 1;
    }

    for (let unit = 0; unit < SIZE * 3; unit += 1) {
      this.unitValid[unit] = this.isUnitValid(unit);
      if (!this.unitValid[unit]) this.invalidUnitCount += 1;
    }
  }

  isUnitValid(unit) {
    let mask = 0;
    for (const digit of DIGITS) {
      if (this.counts[unit][digit] !== 1) return false;
      mask |= 1 << digit;
    }
    return mask === VALID_MASK;
  }

  refreshUnits(units) {
    for (const unit of units) {
      const wasValid = this.unitValid[unit];
      const nowValid = this.isUnitValid(unit);
      if (wasValid !== nowValid) this.invalidUnitCount += nowValid ? -1 : 1;
      this.unitValid[unit] = nowValid;
    }
  }

  applySwap(first, second) {
    const firstValue = this.values[first];
    const secondValue = this.values[second];
    if (firstValue === secondValue) return false;

    const affected = [...new Set([...CELL_UNITS[first], ...CELL_UNITS[second]])];
    for (const unit of CELL_UNITS[first]) {
      this.counts[unit][firstValue] -= 1;
      this.counts[unit][secondValue] += 1;
    }
    for (const unit of CELL_UNITS[second]) {
      this.counts[unit][secondValue] -= 1;
      this.counts[unit][firstValue] += 1;
    }
    this.values[first] = secondValue;
    this.values[second] = firstValue;
    this.refreshUnits(affected);
    return true;
  }

  undoSwap(first, second) {
    this.applySwap(first, second);
  }

  valid() {
    return this.invalidUnitCount === 0;
  }

  boardString() {
    return arrayToBoard(this.values);
  }
}

function emptyDepthSummary(depth, strategy, exhaustive) {
  return {
    depth,
    strategy,
    exhaustive,
    cancellationPolicy: "same cell-pair cannot appear twice in one sequence",
    effectiveSequencesChecked: 0,
    cancellationSequencesSkipped: 0,
    validEndpointSequences: 0,
    uniqueValidEndpoints: 0,
    ignored: {
      identity: 0,
      "standard-symmetry": 0,
    },
    genuine: {
      uniqueTargets: 0,
      recordsWritten: 0,
      examples: [],
    },
  };
}

function appendRawRecord(stream, record) {
  stream.write(`${JSON.stringify(record)}\n`);
}

function rememberExample(summary, record) {
  if (summary.genuine.examples.length >= exampleLimit) return;
  summary.genuine.examples.push({
    notation: record.notation,
    board: record.endpointBoard,
  });
}

function processEndpoint({
  source,
  sourceBoard,
  sourceGrid,
  targetBoard,
  moves,
  depthSummary,
  seenByDepth,
  rawStream,
  strategy,
  exhaustive,
}) {
  depthSummary.validEndpointSequences += 1;
  if (seenByDepth.has(targetBoard)) return;
  seenByDepth.add(targetBoard);
  depthSummary.uniqueValidEndpoints += 1;

  const className = classifyEndpoint(sourceBoard, targetBoard, sourceGrid);
  if (className !== "genuine") {
    depthSummary.ignored[className] += 1;
    return;
  }

  depthSummary.genuine.uniqueTargets += 1;
  depthSummary.genuine.recordsWritten += 1;
  const record = {
    kind: "raw-cell-swap-depth-record",
    sourceId: source.id,
    sourceLabel: source.label,
    sourceBoard,
    depth: moves.length,
    strategy,
    exhaustive,
    cancellationPolicy: depthSummary.cancellationPolicy,
    moves: moves.map(([first, second]) => swapNotation(first, second)),
    notation: sequenceNotation(moves),
    endpointClass: "genuine",
    endpointBoard: targetBoard,
  };
  appendRawRecord(rawStream, record);
  rememberExample(depthSummary, record);
}

function scanExactDepthOne(source, sourceBoard, sourceGrid, rawStream) {
  const state = new SwapState(sourceBoard);
  const seenByDepth = new Set();
  const summary = emptyDepthSummary(1, "exact-cell-swap", true);

  for (const [first, second] of CELL_PAIRS) {
    if (!state.applySwap(first, second)) continue;
    summary.effectiveSequencesChecked += 1;
    if (state.valid()) {
      processEndpoint({
        source,
        sourceBoard,
        sourceGrid,
        targetBoard: state.boardString(),
        moves: [[first, second]],
        depthSummary: summary,
        seenByDepth,
        rawStream,
        strategy: summary.strategy,
        exhaustive: summary.exhaustive,
      });
    }
    state.undoSwap(first, second);
  }

  return summary;
}

function scanExactDepthTwo(source, sourceBoard, sourceGrid, rawStream) {
  const state = new SwapState(sourceBoard);
  const seenByDepth = new Set();
  const summary = emptyDepthSummary(2, "exact-cell-swap", true);

  for (const [firstA, firstB] of CELL_PAIRS) {
    if (!state.applySwap(firstA, firstB)) continue;

    for (const [secondA, secondB] of CELL_PAIRS) {
      if (firstA === secondA && firstB === secondB) {
        summary.cancellationSequencesSkipped += 1;
        continue;
      }
      if (!state.applySwap(secondA, secondB)) continue;
      summary.effectiveSequencesChecked += 1;
      if (state.valid()) {
        processEndpoint({
          source,
          sourceBoard,
          sourceGrid,
          targetBoard: state.boardString(),
          moves: [[firstA, firstB], [secondA, secondB]],
          depthSummary: summary,
          seenByDepth,
          rawStream,
          strategy: summary.strategy,
          exhaustive: summary.exhaustive,
        });
      }
      state.undoSwap(secondA, secondB);
    }

    state.undoSwap(firstA, firstB);
  }

  return summary;
}

function positionsForDigits(board, firstDigit, secondDigit) {
  const positions = [];
  for (let index = 0; index < CELL_COUNT; index += 1) {
    const value = Number(board[index]);
    if (value !== firstDigit && value !== secondDigit) continue;
    const row = Math.floor(index / SIZE);
    const col = index % SIZE;
    positions.push({
      index,
      row,
      col,
      box: Math.floor(row / BOX) * BOX + Math.floor(col / BOX),
      value,
      sign: value === firstDigit ? 1 : -1,
    });
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

function tradeMoves(positions, mask, firstDigit) {
  const firstDigitCells = [];
  const secondDigitCells = [];
  for (let bit = 0; bit < positions.length; bit += 1) {
    if ((mask & (1 << bit)) === 0) continue;
    const cell = positions[bit];
    if (cell.value === firstDigit) firstDigitCells.push(cell.index);
    else secondDigitCells.push(cell.index);
  }
  return firstDigitCells.map((cell, index) => [cell, secondDigitCells[index]]);
}

function applyMovesToBoard(sourceBoard, moves) {
  const state = new SwapState(sourceBoard);
  for (const [first, second] of moves) state.applySwap(first, second);
  return state.boardString();
}

function scanGuidedDepthThreeTrades(source, sourceBoard, sourceGrid, rawStream) {
  const seenByDepth = new Set();
  const summary = emptyDepthSummary(3, "two-symbol-balanced-trade", false);

  for (let firstDigit = 1; firstDigit <= SIZE; firstDigit += 1) {
    for (let secondDigit = firstDigit + 1; secondDigit <= SIZE; secondDigit += 1) {
      const positions = positionsForDigits(sourceBoard, firstDigit, secondDigit);
      const fullMask = (1 << positions.length) - 1;

      for (let mask = 1; mask < fullMask; mask += 1) {
        const selectedCellCount = bitCount(mask);
        if (selectedCellCount !== 6) continue;
        summary.effectiveSequencesChecked += 1;
        if (!isBalancedTrade(positions, mask)) continue;

        const moves = tradeMoves(positions, mask, firstDigit);
        if (moves.length !== 3) continue;
        const targetBoard = applyMovesToBoard(sourceBoard, moves);

        processEndpoint({
          source,
          sourceBoard,
          sourceGrid,
          targetBoard,
          moves,
          depthSummary: summary,
          seenByDepth,
          rawStream,
          strategy: summary.strategy,
          exhaustive: summary.exhaustive,
        });
      }
    }
  }

  return summary;
}

function buildSources(sourceArg) {
  const all = [
    { id: "cyclic-base", label: "cyclic base", board: gridToBoardString(BASE_GRID), grid: BASE_GRID },
    { id: "comparison", label: "comparison", board: gridToBoardString(COMPARISON_GRID), grid: COMPARISON_GRID },
  ];

  if (sourceArg === "all") return all;
  return all.filter((source) => source.id === sourceArg || source.label === sourceArg);
}

function summarizeSourceFrontier(depths) {
  const computedDepths = depths.map((depth) => depth.depth);
  const exactDepths = depths.filter((depth) => depth.exhaustive).map((depth) => depth.depth);
  const genuineDepths = depths
    .filter((depth) => depth.genuine.uniqueTargets > 0)
    .map((depth) => depth.depth);
  const exactGenuineDepths = depths
    .filter((depth) => depth.exhaustive && depth.genuine.uniqueTargets > 0)
    .map((depth) => depth.depth);

  return {
    question: "For this source, at which tested swap depths do genuine non-symmetry completed endpoints appear?",
    note: "Cancelling swap pairs are excluded. The maximum n is still a search frontier question; shortest genuine depth and deepest computed non-cancelling depth are the tracked quantities.",
    firstGenuineDepth: genuineDepths.length ? Math.min(...genuineDepths) : null,
    deepestGenuineDepth: genuineDepths.length ? Math.max(...genuineDepths) : null,
    deepestComputedDepth: computedDepths.length ? Math.max(...computedDepths) : null,
    deepestExactDepth: exactDepths.length ? Math.max(...exactDepths) : null,
    firstExactGenuineDepth: exactGenuineDepths.length ? Math.min(...exactGenuineDepths) : null,
    deepestExactGenuineDepth: exactGenuineDepths.length ? Math.max(...exactGenuineDepths) : null,
    computedDepths,
    exactDepths,
    guidedDepths: depths.filter((depth) => !depth.exhaustive).map((depth) => depth.depth),
  };
}

function writeSummary(summary) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(VISUALIZER_DATA_DIR, { recursive: true });
  fs.writeFileSync(SUMMARY_JSON, `${JSON.stringify(summary, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_JSON, `${JSON.stringify(summary, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_DATA_JS, `window.SUDOKU_RAW_CELL_SWAP_DEPTH = ${JSON.stringify(summary, null, 2)};\n`);
}

function main() {
  const maxDepth = Number(readArg("max-depth", "2"));
  const sourceArg = readArg("source", "cyclic-base");
  exampleLimit = Number(readArg("example-limit", "100"));
  const includeGuidedDepth3 = flagEnabled("guided-depth3", maxDepth >= 3);
  const sources = buildSources(sourceArg);

  if (sources.length === 0) {
    throw new Error(`unknown source '${sourceArg}'. Use cyclic-base, comparison, or all.`);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(RAW_JSONL, "");
  const rawStream = fs.createWriteStream(RAW_JSONL, { flags: "a" });

  const summary = {
    kind: "raw-cell-swap-depth",
    runStartedAt: new Date().toISOString(),
    updatedAt: null,
    config: {
      source: sourceArg,
      sourceCount: sources.length,
      maxDepth,
      exactDepths: [1, 2].filter((depth) => depth <= maxDepth),
      guidedDepth3: includeGuidedDepth3,
      exampleLimit,
      coordinateSystem: "A-I columns left-to-right, 1-9 rows top-to-bottom",
      endpointFilter: "write only genuine completed endpoints; identity and standard-symmetry endpoints are counted then ignored",
      cancellationPolicy: "same cell-pair cannot appear twice in one sequence",
      depthQuestion: "Find the first and deepest tested n where n cell swaps reach genuine non-symmetry completed endpoints.",
    },
    storage: {
      boardEncoding: "81-character row-major digit string",
      rawJsonl: RAW_JSONL,
      summaryJson: SUMMARY_JSON,
      visualizerJson: VISUALIZER_JSON,
      visualizerDataJs: VISUALIZER_DATA_JS,
    },
    sources: [],
  };

  console.log("9x9 raw cell-swap depth scan");
  console.log(`sources: ${sources.map((source) => source.label).join(", ")}`);
  console.log(`max depth: ${maxDepth}`);

  for (const source of sources) {
    console.log(`scanning ${source.label}`);
    const sourceSummary = {
      id: source.id,
      label: source.label,
      board: source.board,
      depths: [],
    };

    if (maxDepth >= 1) {
      console.log("  exact depth 1");
      sourceSummary.depths.push(scanExactDepthOne(source, source.board, source.grid, rawStream));
    }
    if (maxDepth >= 2) {
      console.log("  exact depth 2");
      sourceSummary.depths.push(scanExactDepthTwo(source, source.board, source.grid, rawStream));
    }
    if (includeGuidedDepth3) {
      console.log("  guided depth 3 two-symbol trades");
      sourceSummary.depths.push(scanGuidedDepthThreeTrades(source, source.board, source.grid, rawStream));
    }

    sourceSummary.frontier = summarizeSourceFrontier(sourceSummary.depths);

    summary.sources.push(sourceSummary);
    summary.updatedAt = new Date().toISOString();
    writeSummary(summary);
  }

  rawStream.end();
  summary.updatedAt = new Date().toISOString();
  writeSummary(summary);

  for (const source of summary.sources) {
    console.log(source.label);
    for (const depth of source.depths) {
      console.log(
        `  depth ${depth.depth} ${depth.strategy}: genuine=${depth.genuine.uniqueTargets}, `
        + `valid endpoints=${depth.uniqueValidEndpoints}, checked=${depth.effectiveSequencesChecked}`,
      );
    }
  }
}

main();
