const fs = require("fs");
const path = require("path");

const SIZE = 9;
const BOX = 3;
const CELL_COUNT = SIZE * SIZE;
const FULL_MASK = 0b1111111110;
const OUTPUT_DIR = path.join(__dirname, "data");
const VISUALIZER_DATA_DIR = path.join(__dirname, "visualizer", "data");
const OUTPUT_JSON = path.join(OUTPUT_DIR, "solved-board-sample.latest.json");
const VISUALIZER_JSON = path.join(VISUALIZER_DATA_DIR, "solved-board-sample.latest.json");
const VISUALIZER_DATA_JS = path.join(VISUALIZER_DATA_DIR, "solved-board-sample-data.js");

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

function makeRng(seedText) {
  let seed = 2166136261;
  for (const char of seedText) {
    seed ^= char.charCodeAt(0);
    seed = Math.imul(seed, 16777619);
  }

  return function rng() {
    seed += 0x6D2B79F5;
    let value = seed;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(values, rng) {
  const out = [...values];
  for (let index = out.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(rng() * (index + 1));
    [out[index], out[swapIndex]] = [out[swapIndex], out[index]];
  }
  return out;
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

function boxIndex(row, col) {
  return Math.floor(row / BOX) * BOX + Math.floor(col / BOX);
}

function validateBoard(board) {
  const rowMasks = Array(SIZE).fill(0);
  const colMasks = Array(SIZE).fill(0);
  const boxMasks = Array(SIZE).fill(0);

  for (let index = 0; index < CELL_COUNT; index += 1) {
    const value = Number(board[index]);
    const row = Math.floor(index / SIZE);
    const col = index % SIZE;
    const bit = 1 << value;
    rowMasks[row] |= bit;
    colMasks[col] |= bit;
    boxMasks[boxIndex(row, col)] |= bit;
  }

  return rowMasks.every((mask) => mask === FULL_MASK)
    && colMasks.every((mask) => mask === FULL_MASK)
    && boxMasks.every((mask) => mask === FULL_MASK);
}

function bitValues(mask) {
  const values = [];
  for (let digit = 1; digit <= SIZE; digit += 1) {
    if ((mask & (1 << digit)) !== 0) values.push(digit);
  }
  return values;
}

function generateSolvedBoard(rng) {
  const board = Array(CELL_COUNT).fill(0);
  const rowMasks = Array(SIZE).fill(0);
  const colMasks = Array(SIZE).fill(0);
  const boxMasks = Array(SIZE).fill(0);

  function place(index, digit) {
    const row = Math.floor(index / SIZE);
    const col = index % SIZE;
    const bit = 1 << digit;
    board[index] = digit;
    rowMasks[row] |= bit;
    colMasks[col] |= bit;
    boxMasks[boxIndex(row, col)] |= bit;
  }

  function unplace(index, digit) {
    const row = Math.floor(index / SIZE);
    const col = index % SIZE;
    const bit = ~(1 << digit);
    board[index] = 0;
    rowMasks[row] &= bit;
    colMasks[col] &= bit;
    boxMasks[boxIndex(row, col)] &= bit;
  }

  function candidatesFor(index) {
    const row = Math.floor(index / SIZE);
    const col = index % SIZE;
    const used = rowMasks[row] | colMasks[col] | boxMasks[boxIndex(row, col)];
    return FULL_MASK & ~used;
  }

  function solve() {
    let bestIndex = -1;
    let bestMask = 0;
    let bestCount = 10;

    for (let index = 0; index < CELL_COUNT; index += 1) {
      if (board[index] !== 0) continue;
      const mask = candidatesFor(index);
      const count = bitValues(mask).length;
      if (count === 0) return false;
      if (count < bestCount) {
        bestIndex = index;
        bestMask = mask;
        bestCount = count;
        if (count === 1) break;
      }
    }

    if (bestIndex === -1) return true;

    for (const digit of shuffle(bitValues(bestMask), rng)) {
      place(bestIndex, digit);
      if (solve()) return true;
      unplace(bestIndex, digit);
    }

    return false;
  }

  if (!solve()) throw new Error("failed to generate solved board");
  return board.join("");
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

function makeBoardRecord(id, label, board, origin) {
  if (!validateBoard(board)) throw new Error(`invalid generated board ${id}`);
  const grid = boardToGrid(board);
  const rowParity = pairParityProfile(grid, "row");
  const colParity = pairParityProfile(grid, "col");
  return {
    id,
    label,
    origin,
    board,
    valid: true,
    profiles: {
      rowPairParity: rowParity,
      colPairParity: colParity,
      parityKey: `r-even:${rowParity.even},r-odd:${rowParity.odd}|c-even:${colParity.even},c-odd:${colParity.odd}`,
    },
  };
}

function writeOutput(output) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(VISUALIZER_DATA_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_DATA_JS, `window.SUDOKU_SOLVED_BOARD_SAMPLE = ${JSON.stringify(output, null, 2)};\n`);
}

function main() {
  const count = Number(readArg("count", "100"));
  const seed = readArg("seed", "sudoku-board-swaps");
  const includeSeeds = flagEnabled("include-seeds", true);
  const rng = makeRng(seed);
  const seen = new Set();
  const boards = [];

  if (includeSeeds) {
    for (const record of [
      makeBoardRecord("seed-cyclic-base", "cyclic base", gridToBoardString(BASE_GRID), "seed"),
      makeBoardRecord("seed-comparison", "comparison", gridToBoardString(COMPARISON_GRID), "seed"),
    ]) {
      seen.add(record.board);
      boards.push(record);
    }
  }

  while (boards.length < count) {
    const board = generateSolvedBoard(rng);
    if (seen.has(board)) continue;
    seen.add(board);
    const id = `random-${String(boards.length + 1).padStart(3, "0")}`;
    boards.push(makeBoardRecord(id, `random solved ${boards.length + 1}`, board, "random-backtracking"));
  }

  boards.sort((a, b) => a.profiles.parityKey.localeCompare(b.profiles.parityKey) || a.board.localeCompare(b.board));

  const output = {
    kind: "solved-board-sample",
    schema: "solved-board-sample-v1",
    generatedAt: new Date().toISOString(),
    config: {
      count,
      seed,
      includeSeeds,
      generator: "randomized backtracking completed-grid generator",
      note: "This is a local source-board sample for the board-finding phase. It is not a complete catalog of all Sudoku grids.",
    },
    summary: {
      boards: boards.length,
      uniqueExactBoards: seen.size,
      parityProfiles: new Set(boards.map((board) => board.profiles.parityKey)).size,
    },
    boards,
  };

  writeOutput(output);
  console.log(`wrote ${boards.length} solved boards`);
  console.log(OUTPUT_JSON);
}

main();
