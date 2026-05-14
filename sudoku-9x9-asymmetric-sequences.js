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
const OUTPUT_JSON = path.join(OUTPUT_DIR, "asymmetric-sequences.latest.json");
const VISUALIZER_JSON = path.join(VISUALIZER_DATA_DIR, "asymmetric-sequences.latest.json");
const VISUALIZER_DATA_JS = path.join(VISUALIZER_DATA_DIR, "asymmetric-sequences-data.js");
const SOLVED_BOARD_SAMPLE_JSON = path.join(OUTPUT_DIR, "solved-board-sample.latest.json");

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

function parseCellName(name) {
  const col = COL_NAMES.indexOf(name[0].toUpperCase());
  const row = Number(name.slice(1)) - 1;
  if (col < 0 || row < 0 || row >= SIZE) throw new Error(`invalid cell '${name}'`);
  return row * SIZE + col;
}

function swapNotation(first, second) {
  return `${coord(first)}<->${coord(second)}`;
}

function pairFromNotation(move) {
  const [first, second] = move.split("<->").map(parseCellName);
  return normalizePair(first, second);
}

function normalizePair(first, second) {
  return first < second ? [first, second] : [second, first];
}

function normalizePairs(pairs) {
  return pairs
    .map(([first, second]) => normalizePair(first, second))
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}

function concreteKey(pairs) {
  return normalizePairs(pairs).map(([first, second]) => `${first.toString(36)}-${second.toString(36)}`).join(".");
}

function moveList(pairs) {
  return normalizePairs(pairs).map(([first, second]) => swapNotation(first, second));
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

function cellMask(index) {
  const mask = [0, 0, 0];
  mask[Math.floor(index / 32)] = 1 << (index % 32);
  return mask;
}

function pairMask(first, second) {
  const mask = [0, 0, 0];
  mask[Math.floor(first / 32)] |= 1 << (first % 32);
  mask[Math.floor(second / 32)] |= 1 << (second % 32);
  return mask;
}

function masksOverlap(first, second) {
  return Boolean((first[0] & second[0]) || (first[1] & second[1]) || (first[2] & second[2]));
}

const CELL_MASKS = Array.from({ length: CELL_COUNT }, (_, index) => cellMask(index));
const PAIR_MASKS = CELL_PAIRS.map(([first, second]) => pairMask(first, second));
const DISJOINT_AFTER_COUNTS = CELL_PAIRS.map((_, firstIndex) => {
  let count = 0;
  for (let secondIndex = firstIndex + 1; secondIndex < CELL_PAIRS.length; secondIndex += 1) {
    if (!masksOverlap(PAIR_MASKS[firstIndex], PAIR_MASKS[secondIndex])) count += 1;
  }
  return count;
});

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

function isBandRespectingPermutation(permutation) {
  const seen = new Set(permutation);
  if (seen.size !== SIZE || [...seen].some((value) => value < 0 || value >= SIZE)) return false;

  const bandMap = new Map();
  for (let index = 0; index < SIZE; index += 1) {
    const fromBand = Math.floor(index / BOX);
    const toBand = Math.floor(permutation[index] / BOX);
    if (bandMap.has(fromBand) && bandMap.get(fromBand) !== toBand) return false;
    bandMap.set(fromBand, toBand);
  }
  return new Set(bandMap.values()).size === BOX;
}

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

function equivalentUnderStandardSymmetry(sourceGrid, targetGrid) {
  if (!parityAllowsSymmetry(sourceGrid, targetGrid)) return false;
  return Boolean(findStandardSymmetry(sourceGrid, targetGrid));
}

function classifyEndpoint(sourceBoard, targetBoard, sourceGrid) {
  if (targetBoard === sourceBoard) return "identity";
  const targetGrid = boardToGrid(targetBoard);
  return equivalentUnderStandardSymmetry(sourceGrid, targetGrid) ? "standard-symmetry" : "genuine";
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

function validateBoardString(board) {
  const values = boardToArray(board);
  const rowMasks = Array(SIZE).fill(0);
  const colMasks = Array(SIZE).fill(0);
  const boxMasks = Array(SIZE).fill(0);

  for (let index = 0; index < CELL_COUNT; index += 1) {
    const value = values[index];
    const row = Math.floor(index / SIZE);
    const col = index % SIZE;
    const box = boxIndexForCell(index);
    const bit = 1 << value;
    rowMasks[row] |= bit;
    colMasks[col] |= bit;
    boxMasks[box] |= bit;
  }

  return rowMasks.every((mask) => mask === VALID_MASK)
    && colMasks.every((mask) => mask === VALID_MASK)
    && boxMasks.every((mask) => mask === VALID_MASK);
}

function cellSwapGeometry(first, second) {
  const firstRow = Math.floor(first / SIZE);
  const firstCol = first % SIZE;
  const secondRow = Math.floor(second / SIZE);
  const secondCol = second % SIZE;
  const sameRow = firstRow === secondRow;
  const sameCol = firstCol === secondCol;
  const sameBox = boxIndexForCell(first) === boxIndexForCell(second);

  if (sameRow && sameBox) return "same-row-inside-box";
  if (sameCol && sameBox) return "same-column-inside-box";
  if (sameRow) return "same-row-across-boxes";
  if (sameCol) return "same-column-across-boxes";
  if (sameBox) return "same-box-diagonal";
  return "different-row-column-box";
}

function countMap(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return Object.fromEntries([...counts.entries()].sort((a, b) => a[0].localeCompare(b[0])));
}

function touchedCounts(pairs, selector) {
  const counts = Array(SIZE).fill(0);
  for (const [first, second] of pairs) {
    counts[selector(first)] += 1;
    counts[selector(second)] += 1;
  }
  return counts;
}

function nonzeroSortedCounts(counts) {
  return counts.filter((count) => count > 0).sort((a, b) => a - b);
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a - b);
}

function digitPairKeyForCells(board, first, second) {
  const values = [Number(board[first]), Number(board[second])].sort((a, b) => a - b);
  return `${values[0]}<->${values[1]}`;
}

function locationShapeForPairs(board, pairs) {
  const normalized = normalizePairs(pairs);
  const geometries = countMap(normalized.map(([first, second]) => cellSwapGeometry(first, second)));
  const touchedCells = normalized.flat();
  const rows = uniqueSorted(touchedCells.map((cell) => Math.floor(cell / SIZE)));
  const cols = uniqueSorted(touchedCells.map((cell) => cell % SIZE));
  const boxes = uniqueSorted(touchedCells.map(boxIndexForCell));
  const bands = uniqueSorted(rows.map((row) => Math.floor(row / BOX)));
  const stacks = uniqueSorted(cols.map((col) => Math.floor(col / BOX)));
  const rowTouch = nonzeroSortedCounts(touchedCounts(normalized, (cell) => Math.floor(cell / SIZE)));
  const colTouch = nonzeroSortedCounts(touchedCounts(normalized, (cell) => cell % SIZE));
  const boxTouch = nonzeroSortedCounts(touchedCounts(normalized, boxIndexForCell));
  const bandTouch = nonzeroSortedCounts(touchedCounts(normalized, (cell) => Math.floor(Math.floor(cell / SIZE) / BOX)));
  const stackTouch = nonzeroSortedCounts(touchedCounts(normalized, (cell) => Math.floor((cell % SIZE) / BOX)));
  const digitPairs = normalized.map(([first, second]) => digitPairKeyForCells(board, first, second));
  const digitPairCounts = countMap(digitPairs);
  const uniqueDigitPairs = Object.keys(digitPairCounts);
  const repeatedDigitPair = uniqueDigitPairs.length === 1;

  return {
    digitPairs,
    digitPairCounts,
    uniqueDigitPairCount: uniqueDigitPairs.length,
    repeatedDigitPair,
    repeatedDigitPairKey: repeatedDigitPair ? uniqueDigitPairs[0] : null,
    locationShape: `${normalized.length} square-pairs / ${rows.length} rows / ${cols.length} cols / ${boxes.length} boxes / ${bands.length} bands / ${stacks.length} stacks`,
    geometryCounts: geometries,
    touched: {
      rows: rows.map((row) => row + 1),
      cols: cols.map((col) => col + 1),
      boxes: boxes.map((box) => box + 1),
      bands: bands.map((band) => band + 1),
      stacks: stacks.map((stack) => stack + 1),
    },
    touchCounts: {
      rows: rowTouch,
      cols: colTouch,
      boxes: boxTouch,
      bands: bandTouch,
      stacks: stackTouch,
    },
  };
}

function typeKeyForPairs(familyId, sourceBoard, pairs, extra = {}) {
  const shape = locationShapeForPairs(sourceBoard, pairs);

  return JSON.stringify({
    familyId,
    swapDepth: normalizePairs(pairs).length,
    digitPairCounts: shape.digitPairCounts,
    repeatedDigitPair: shape.repeatedDigitPair,
    locationShape: shape.locationShape,
    geometryCounts: shape.geometryCounts,
    touchCounts: shape.touchCounts,
    ...extra,
  });
}

function mapFromPairs(pairs) {
  const map = Array.from({ length: CELL_COUNT }, (_, index) => index);
  for (const [first, second] of normalizePairs(pairs)) {
    map[first] = second;
    map[second] = first;
  }
  return map;
}

function rowPermutationFromMap(map) {
  const permutation = Array(SIZE).fill(null);
  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      const target = map[row * SIZE + col];
      const targetRow = Math.floor(target / SIZE);
      const targetCol = target % SIZE;
      if (targetCol !== col) return null;
      if (permutation[row] === null) permutation[row] = targetRow;
      if (permutation[row] !== targetRow) return null;
    }
  }
  return isBandRespectingPermutation(permutation) ? permutation : null;
}

function colPermutationFromMap(map) {
  const permutation = Array(SIZE).fill(null);
  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      const target = map[row * SIZE + col];
      const targetRow = Math.floor(target / SIZE);
      const targetCol = target % SIZE;
      if (targetRow !== row) return null;
      if (permutation[col] === null) permutation[col] = targetCol;
      if (permutation[col] !== targetCol) return null;
    }
  }
  return isBandRespectingPermutation(permutation) ? permutation : null;
}

function isTransposeMap(map) {
  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      if (map[row * SIZE + col] !== col * SIZE + row) return false;
    }
  }
  return true;
}

function isKnownWholeBoardSymmetryAggregate(pairs) {
  if (pairs.length === 0) return true;
  const map = mapFromPairs(pairs);
  if (rowPermutationFromMap(map)) return true;
  if (colPermutationFromMap(map)) return true;
  if (isTransposeMap(map)) return true;
  return false;
}

function totalDisjointMatchings(depth) {
  if (depth === 1) return CELL_PAIRS.length;
  if (depth === 2) return (CELL_COUNT * (CELL_COUNT - 1) * (CELL_COUNT - 2) * (CELL_COUNT - 3)) / 8;
  return null;
}

function emptyFamilySummary({ id, label, depth, exhaustive, totalWork }) {
  return {
    id,
    label,
    depth,
    exhaustive,
    status: "pending",
    startedAt: null,
    completedAt: null,
    progress: {
      checked: 0,
      total: totalWork,
      percent: 0,
    },
    attemptedSequences: 0,
    validEndpointSequences: 0,
    uniqueValidEndpoints: 0,
    classCounts: {
      identity: 0,
      "standard-symmetry": 0,
      genuine: 0,
    },
    rejected: {
      noOpSwap: 0,
      repeatedCell: 0,
      standardAggregate: 0,
      invalidEndpoint: 0,
      duplicateEndpoint: 0,
    },
    genuineEndpointFamilies: 0,
    sequenceTypeCount: 0,
    sequenceTypes: [],
  };
}

function updateProgress(family, checked, total = family.progress.total) {
  family.progress.checked = checked;
  family.progress.total = total;
  family.progress.percent = total ? Number(((checked / total) * 100).toFixed(2)) : 0;
}

function rememberType(typeRecords, family, record, exampleLimit) {
  let type = typeRecords.get(record.typeKey);
  if (!type) {
    type = {
      typeKey: record.typeKey,
      label: record.label,
      swapDepth: record.swapDepth,
      shape: record.shape,
      count: 0,
      endpointCount: 0,
      classCounts: {
        identity: 0,
        "standard-symmetry": 0,
        genuine: 0,
      },
      examples: [],
    };
    typeRecords.set(record.typeKey, type);
  }

  type.count += 1;
  type.endpointCount += 1;
  type.classCounts[record.className] += 1;
  if (type.examples.length < exampleLimit) {
    type.examples.push({
      moves: record.moves,
      shape: record.shape,
      sourceBoard: record.sourceBoard,
      endpointBoard: record.endpointBoard,
      className: record.className,
      endpointKey: record.endpointKey,
    });
  }
  family.sequenceTypeCount = typeRecords.size;
}

function endpointFamilyKey(endpointBoard, endpointGrid, endpointFamilies) {
  for (const family of endpointFamilies) {
    if (equivalentUnderStandardSymmetry(family.grid, endpointGrid)) return family.key;
  }

  const key = `family-${endpointFamilies.length + 1}`;
  endpointFamilies.push({ key, board: endpointBoard, grid: endpointGrid });
  return key;
}

function processValidEndpoint({
  family,
  source,
  targetBoard,
  pairs,
  typeRecords,
  seenEndpoints,
  endpointFamilies,
  exampleLimit,
  extraTypeParts = {},
}) {
  family.validEndpointSequences += 1;
  if (seenEndpoints.has(targetBoard)) {
    family.rejected.duplicateEndpoint += 1;
    return;
  }

  seenEndpoints.add(targetBoard);
  family.uniqueValidEndpoints += 1;

  const className = classifyEndpoint(source.board, targetBoard, source.grid);
  family.classCounts[className] += 1;

  const endpointGrid = className === "genuine" ? boardToGrid(targetBoard) : null;
  const familyKey = className === "genuine"
    ? endpointFamilyKey(targetBoard, endpointGrid, endpointFamilies)
    : null;
  family.genuineEndpointFamilies = endpointFamilies.length;

  const normalizedPairs = normalizePairs(pairs);
  const shape = locationShapeForPairs(source.board, normalizedPairs);
  const typeKey = typeKeyForPairs(source.currentFamilyId, source.board, normalizedPairs, {
    className,
    ...extraTypeParts,
  });
  rememberType(typeRecords, family, {
    typeKey,
    label: `${source.currentFamilyLabel}; ${normalizedPairs.length} square-pairs`,
    swapDepth: normalizedPairs.length,
    shape,
    className,
    moves: moveList(normalizedPairs),
    sourceBoard: source.board,
    endpointBoard: targetBoard,
    endpointKey: familyKey ?? targetBoard,
  }, exampleLimit);
}

function completeFamily(family, typeRecords) {
  family.status = "complete";
  family.completedAt = new Date().toISOString();
  family.sequenceTypes = [...typeRecords.values()]
    .sort((a, b) => b.classCounts.genuine - a.classCounts.genuine || b.endpointCount - a.endpointCount)
    .slice(0, 80);
}

function scanExactDepth({ source, depth, output, family, writeOutput, checkpointEvery, exampleLimit }) {
  const state = new SwapState(source.board);
  const seenEndpoints = new Set();
  const endpointFamilies = [];
  const typeRecords = new Map();

  source.currentFamilyId = family.id;
  source.currentFamilyLabel = family.label;
  family.status = "running";
  family.startedAt = new Date().toISOString();
  writeOutput(output);

  if (depth === 1) {
    for (let firstIndex = 0; firstIndex < CELL_PAIRS.length; firstIndex += 1) {
      const [first, second] = CELL_PAIRS[firstIndex];
      family.attemptedSequences += 1;
      if (!state.applySwap(first, second)) {
        family.rejected.noOpSwap += 1;
      } else {
        const pairs = [[first, second]];
        if (!state.valid()) {
          family.rejected.invalidEndpoint += 1;
        } else if (isKnownWholeBoardSymmetryAggregate(pairs)) {
          family.rejected.standardAggregate += 1;
        } else {
          processValidEndpoint({
            family,
            source,
            targetBoard: state.boardString(),
            pairs,
            typeRecords,
            seenEndpoints,
            endpointFamilies,
            exampleLimit,
          });
        }
        state.undoSwap(first, second);
      }

      updateProgress(family, firstIndex + 1);
      if ((firstIndex + 1) % checkpointEvery === 0) writeOutput(output);
    }
  }

  if (depth === 2) {
    let checked = 0;
    for (let firstIndex = 0; firstIndex < CELL_PAIRS.length; firstIndex += 1) {
      const [firstA, firstB] = CELL_PAIRS[firstIndex];
      if (!state.applySwap(firstA, firstB)) {
        const skipped = DISJOINT_AFTER_COUNTS[firstIndex];
        checked += skipped;
        family.attemptedSequences += skipped;
        family.rejected.noOpSwap += skipped;
        updateProgress(family, checked);
        continue;
      }

      for (let secondIndex = firstIndex + 1; secondIndex < CELL_PAIRS.length; secondIndex += 1) {
        if (masksOverlap(PAIR_MASKS[firstIndex], PAIR_MASKS[secondIndex])) {
          family.rejected.repeatedCell += 1;
          continue;
        }

        checked += 1;
        const [secondA, secondB] = CELL_PAIRS[secondIndex];
        family.attemptedSequences += 1;
        if (!state.applySwap(secondA, secondB)) {
          family.rejected.noOpSwap += 1;
        } else {
          const pairs = [[firstA, firstB], [secondA, secondB]];
          if (!state.valid()) {
            family.rejected.invalidEndpoint += 1;
          } else if (isKnownWholeBoardSymmetryAggregate(pairs)) {
            family.rejected.standardAggregate += 1;
          } else {
            processValidEndpoint({
              family,
              source,
              targetBoard: state.boardString(),
              pairs,
              typeRecords,
              seenEndpoints,
              endpointFamilies,
              exampleLimit,
            });
          }
          state.undoSwap(secondA, secondB);
        }

        if (checked % checkpointEvery === 0) {
          updateProgress(family, checked);
          writeOutput(output);
        }
      }

      state.undoSwap(firstA, firstB);
      updateProgress(family, checked);
    }
  }

  updateProgress(family, family.progress.total ?? family.progress.checked);
  completeFamily(family, typeRecords);
  writeOutput(output);
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
      box: boxIndexForCell(index),
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

function tradePairs(positions, mask, firstDigit) {
  const firstDigitCells = [];
  const secondDigitCells = [];
  for (let bit = 0; bit < positions.length; bit += 1) {
    if ((mask & (1 << bit)) === 0) continue;
    const cell = positions[bit];
    if (cell.value === firstDigit) firstDigitCells.push(cell.index);
    else secondDigitCells.push(cell.index);
  }
  return firstDigitCells.map((cell, index) => normalizePair(cell, secondDigitCells[index]));
}

function applyPairsToBoard(sourceBoard, pairs) {
  const state = new SwapState(sourceBoard);
  for (const [first, second] of pairs) state.applySwap(first, second);
  return state.boardString();
}

function factorial(value) {
  let out = 1;
  for (let index = 2; index <= value; index += 1) out *= index;
  return out;
}

function totalTradeMasks() {
  const masksPerDigitPair = (1 << 18) - 1;
  return 36 * masksPerDigitPair;
}

function scanTwoSymbolTrades({ source, output, family, writeOutput, checkpointEvery, exampleLimit }) {
  const seenEndpoints = new Set();
  const endpointFamilies = [];
  const typeRecords = new Map();
  let checked = 0;

  source.currentFamilyId = family.id;
  source.currentFamilyLabel = family.label;
  family.status = "running";
  family.startedAt = new Date().toISOString();
  writeOutput(output);

  for (let firstDigit = 1; firstDigit <= SIZE; firstDigit += 1) {
    for (let secondDigit = firstDigit + 1; secondDigit <= SIZE; secondDigit += 1) {
      const positions = positionsForDigits(source.board, firstDigit, secondDigit);
      const fullMask = (1 << positions.length) - 1;

      for (let mask = 1; mask <= fullMask; mask += 1) {
        checked += 1;
        const selectedCellCount = bitCount(mask);
        if (selectedCellCount < 4 || selectedCellCount % 2 !== 0) {
          updateProgress(family, checked);
          continue;
        }

        family.attemptedSequences += 1;
        if (!isBalancedTrade(positions, mask)) {
          family.rejected.invalidEndpoint += 1;
          updateProgress(family, checked);
          continue;
        }

        const pairs = normalizePairs(tradePairs(positions, mask, firstDigit));
        if (isKnownWholeBoardSymmetryAggregate(pairs)) {
          family.rejected.standardAggregate += 1;
          updateProgress(family, checked);
          continue;
        }

        const targetBoard = applyPairsToBoard(source.board, pairs);
        if (!validateBoardString(targetBoard)) {
          family.rejected.invalidEndpoint += 1;
          updateProgress(family, checked);
          continue;
        }

        processValidEndpoint({
          family,
          source,
          targetBoard,
          pairs,
          typeRecords,
          seenEndpoints,
          endpointFamilies,
          exampleLimit,
          extraTypeParts: {
            digits: `${firstDigit}<->${secondDigit}`,
            cellCount: selectedCellCount,
          },
        });

        const pairings = factorial(pairs.length);
        if (pairings > 1) {
          const key = typeKeyForPairs(family.id, source.board, pairs, {
            className: classifyEndpoint(source.board, targetBoard, source.grid),
            digits: `${firstDigit}<->${secondDigit}`,
            cellCount: selectedCellCount,
          });
          const type = typeRecords.get(key);
          if (type) type.matchingMultiplicity = pairings;
        }

        updateProgress(family, checked);
        if (checked % checkpointEvery === 0) writeOutput(output);
      }

      writeOutput(output);
    }
  }

  updateProgress(family, checked, totalTradeMasks());
  completeFamily(family, typeRecords);
  writeOutput(output);
}

function builtInSources() {
  return [
    { id: "cyclic-base", label: "cyclic base", grid: BASE_GRID, board: gridToBoardString(BASE_GRID) },
    { id: "comparison", label: "comparison", grid: COMPARISON_GRID, board: gridToBoardString(COMPARISON_GRID) },
  ];
}

function loadSampleSources(sourceFile) {
  const parsed = JSON.parse(fs.readFileSync(sourceFile, "utf8"));
  return (parsed.boards ?? []).map((record) => {
    if (!record.board || !validateBoardString(record.board)) {
      throw new Error(`invalid board sample record '${record.id ?? "unknown"}'`);
    }
    return {
      id: record.id,
      label: record.label ?? record.id,
      grid: boardToGrid(record.board),
      board: record.board,
    };
  });
}

function buildSources(sourceArg, sourceFile, sourceLimit) {
  const sources = sourceArg === "sample" || sourceArg === "known" || sourceArg === "all"
    ? loadSampleSources(sourceFile)
    : [...loadSampleSources(sourceFile), ...builtInSources()];

  const selected = sourceArg === "sample" || sourceArg === "known" || sourceArg === "all"
    ? sources
    : sources.filter((source) => source.id === sourceArg || source.label === sourceArg);
  return sourceLimit ? selected.slice(0, sourceLimit) : selected;
}

function dedupeEquivalentSources(sources) {
  const accepted = [];
  const skipped = [];

  for (const source of sources) {
    const equivalent = accepted.find((candidate) => equivalentUnderStandardSymmetry(candidate.grid, source.grid));
    if (equivalent) {
      skipped.push({
        id: source.id,
        label: source.label,
        equivalentTo: equivalent.id,
        reason: "standard-symmetry-equivalent source skipped",
      });
      continue;
    }
    accepted.push(source);
  }

  return { accepted, skipped };
}

function summarizeSources(sources) {
  const summary = {
    sourceCount: sources.length,
    completeSources: 0,
    attemptedSequences: 0,
    validEndpointSequences: 0,
    uniqueValidEndpoints: 0,
    genuineEndpoints: 0,
    genuineEndpointFamilies: 0,
    sequenceTypeCount: 0,
  };

  for (const source of sources) {
    const families = source.operationFamilies ?? [];
    if (families.length > 0 && families.every((family) => family.status === "complete")) summary.completeSources += 1;
    for (const family of families) {
      summary.attemptedSequences += family.attemptedSequences ?? 0;
      summary.validEndpointSequences += family.validEndpointSequences ?? 0;
      summary.uniqueValidEndpoints += family.uniqueValidEndpoints ?? 0;
      summary.genuineEndpoints += family.classCounts?.genuine ?? 0;
      summary.genuineEndpointFamilies += family.genuineEndpointFamilies ?? 0;
      summary.sequenceTypeCount += family.sequenceTypeCount ?? 0;
    }
  }

  return summary;
}

function writeOutput(output) {
  output.updatedAt = new Date().toISOString();
  output.summary = summarizeSources(output.sources);
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(VISUALIZER_DATA_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_DATA_JS, `window.SUDOKU_ASYMMETRIC_SEQUENCES = ${JSON.stringify(output, null, 2)};\n`);
}

function sameSourceSet(existing, config) {
  return existing?.schema === "asymmetric-sequence-v1"
    && existing.config?.sourceFile === config.sourceFile
    && existing.config?.dedupeEquivalentSources === config.dedupeEquivalentSources;
}

function loadExistingOutput(config) {
  if (!flagEnabled("resume", true) || !fs.existsSync(OUTPUT_JSON)) return null;
  try {
    const parsed = JSON.parse(fs.readFileSync(OUTPUT_JSON, "utf8"));
    return sameSourceSet(parsed, config) ? parsed : null;
  } catch {
    return null;
  }
}

function familyDefinitions(config) {
  const families = [];
  for (let depth = config.minExactDepth; depth <= config.maxExactDepth; depth += 1) {
    families.push({
      id: `exact-disjoint-cell-swap-depth-${depth}`,
      label: depth === 1 ? "One-pair shuffle" : `${depth}-pair shuffle`,
      depth,
      exhaustive: true,
      totalWork: totalDisjointMatchings(depth),
      kind: "exact",
    });
  }
  if (config.includeTwoSymbolTrades) {
    families.push({
      id: "two-symbol-balanced-trade",
      label: "Repeated number-pair shuffle",
      depth: "variable",
      exhaustive: false,
      totalWork: totalTradeMasks(),
      kind: "two-symbol-trades",
    });
  }
  return families;
}

function sourceOutputFor(source, existingSource, familyDefs) {
  const existingFamilies = new Map((existingSource?.operationFamilies ?? []).map((family) => [family.id, family]));
  const requestedIds = new Set(familyDefs.map((definition) => definition.id));
  const preservedFamilies = (existingSource?.operationFamilies ?? [])
    .filter((family) => family.status === "complete" && !requestedIds.has(family.id));
  return {
    id: source.id,
    label: source.label,
    board: source.board,
    equivalentSourceSkipped: false,
    operationFamilies: [
      ...preservedFamilies,
      ...familyDefs.map((definition) => {
        const existing = existingFamilies.get(definition.id);
        return existing?.status === "complete"
          ? existing
          : emptyFamilySummary(definition);
      }),
    ],
  };
}

function preserveCompletedSourceOutput(source) {
  return {
    ...source,
    operationFamilies: (source.operationFamilies ?? []).filter((family) => family.status === "complete"),
  };
}

function runFamily({ source, outputSource, family, output, checkpointEvery, exampleLimit }) {
  if (family.status === "complete") return;

  const sourceForScan = {
    id: source.id,
    label: source.label,
    grid: source.grid,
    board: source.board,
    currentFamilyId: family.id,
    currentFamilyLabel: family.label,
  };

  output.current = {
    sourceId: source.id,
    sourceLabel: source.label,
    familyId: family.id,
    familyLabel: family.label,
  };
  writeOutput(output);

  if (family.id.startsWith("exact-disjoint-cell-swap-depth-")) {
    scanExactDepth({
      source: sourceForScan,
      depth: family.depth,
      output,
      family,
      writeOutput,
      checkpointEvery,
      exampleLimit,
    });
  } else if (family.id === "two-symbol-balanced-trade") {
    scanTwoSymbolTrades({
      source: sourceForScan,
      output,
      family,
      writeOutput,
      checkpointEvery,
      exampleLimit,
    });
  } else {
    throw new Error(`unknown family '${family.id}'`);
  }

  outputSource.summary = summarizeSources([outputSource]);
  output.current = null;
  writeOutput(output);
}

function main() {
  const config = {
    source: readArg("source", "sample"),
    sourceFile: readArg("source-file", SOLVED_BOARD_SAMPLE_JSON),
    sourceLimit: Number(readArg("source-limit", "0")),
    minExactDepth: Number(readArg("min-exact-depth", "1")),
    maxExactDepth: Number(readArg("max-exact-depth", "2")),
    includeTwoSymbolTrades: flagEnabled("two-symbol-trades", true),
    dedupeEquivalentSources: flagEnabled("dedupe-sources", false),
    cellReusePolicy: "each cell may appear in at most one swap",
    sequenceDirectionPolicy: "canonical sorted disjoint pairs collapse forward and backward descriptions",
    standardAggregatePolicy: "reject direct row/column/transpose layout aggregates before asymmetric type counting",
  };
  const checkpointEvery = Number(readArg("checkpoint-every", "100000"));
  const exampleLimit = Number(readArg("example-limit", "3"));
  if (!Number.isInteger(config.sourceLimit) || config.sourceLimit < 0) {
    throw new Error("--source-limit must be a non-negative integer");
  }
  if (!Number.isInteger(config.minExactDepth) || config.minExactDepth < 1 || config.minExactDepth > 2) {
    throw new Error("--min-exact-depth currently supports 1 or 2");
  }
  if (!Number.isInteger(config.maxExactDepth) || config.maxExactDepth < 0 || config.maxExactDepth > 2) {
    throw new Error("--max-exact-depth currently supports 0, 1, or 2");
  }
  if (config.maxExactDepth > 0 && config.minExactDepth > config.maxExactDepth) {
    throw new Error("--min-exact-depth cannot be greater than --max-exact-depth");
  }

  const requestedSources = buildSources(config.source, config.sourceFile, config.sourceLimit);
  if (requestedSources.length === 0) {
    throw new Error(`unknown source '${config.source}'. Use known, sample, cyclic-base, or comparison.`);
  }
  const { accepted: sources, skipped } = config.dedupeEquivalentSources
    ? dedupeEquivalentSources(requestedSources)
    : { accepted: requestedSources, skipped: [] };
  const familyDefs = familyDefinitions(config);
  const existing = loadExistingOutput(config);
  const existingBySource = new Map((existing?.sources ?? []).map((source) => [source.id, source]));
  const requestedSourceIds = new Set(sources.map((source) => source.id));
  const preservedSources = (existing?.sources ?? [])
    .filter((source) => !requestedSourceIds.has(source.id))
    .map(preserveCompletedSourceOutput)
    .filter((source) => source.operationFamilies.length > 0);

  const output = {
    kind: "asymmetric-sequences",
    schema: "asymmetric-sequence-v1",
    runStartedAt: existing?.runStartedAt ?? new Date().toISOString(),
    updatedAt: null,
    complete: false,
    config,
    storage: {
      outputJson: OUTPUT_JSON,
      visualizerJson: VISUALIZER_JSON,
      visualizerDataJs: VISUALIZER_DATA_JS,
    },
    rules: {
      sourceDeduplication: config.dedupeEquivalentSources
        ? "Standard-symmetry-equivalent source boards are skipped in this run."
        : "Source boards are scanned as supplied; exact and symmetry reduction can be run later.",
      disjointCells: "A candidate sequence is a matching over the 81 cells; one cell cannot be changed twice.",
      reverseSequence: "The canonical pair list represents both directions of the same sequence.",
      standardAggregates: "Pure row, column, stack/band, side-swap, and transpose aggregates are rejected as asymmetric types.",
    },
    skippedSources: skipped,
    current: null,
    sources: [
      ...sources.map((source) => sourceOutputFor(source, existingBySource.get(source.id), familyDefs)),
      ...preservedSources,
    ],
    summary: null,
  };
  writeOutput(output);

  console.log("9x9 asymmetric sequence offline scan");
  console.log(`sources: ${sources.map((source) => source.label).join(", ")}`);
  console.log(`families: ${familyDefs.map((family) => family.id).join(", ")}`);
  console.log(`resume: ${Boolean(existing)}`);

  for (let index = 0; index < sources.length; index += 1) {
    const source = sources[index];
    const outputSource = output.sources[index];
    console.log(`scanning source ${index + 1}/${sources.length}: ${source.label}`);

    for (const family of outputSource.operationFamilies) {
      if (family.status === "complete") {
        console.log(`  skipping complete family ${family.id}`);
        continue;
      }
      console.log(`  running family ${family.id}`);
      runFamily({ source, outputSource, family, output, checkpointEvery, exampleLimit });
      console.log(
        `    genuine endpoints=${family.classCounts.genuine}, `
        + `families=${family.genuineEndpointFamilies}, types=${family.sequenceTypeCount}`,
      );
    }
  }

  output.complete = output.sources.every((source) => (
    source.operationFamilies.every((family) => family.status === "complete")
  ));
  output.current = null;
  writeOutput(output);
  console.log(`complete: ${output.complete}`);
  console.log(`genuine endpoints: ${output.summary.genuineEndpoints}`);
  console.log(`asymmetric type records: ${output.summary.sequenceTypeCount}`);
}

main();
