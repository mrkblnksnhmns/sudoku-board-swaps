const fs = require("fs");
const path = require("path");

const SIZE = 9;
const BOX = 3;
const CELL_COUNT = SIZE * SIZE;
const MAX_DISJOINT_SWAPS = Math.floor(CELL_COUNT / 2);
const COL_NAMES = "ABCDEFGHI";
const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
const OUTPUT_JSON = path.join(OUTPUT_DIR, "swap-pattern-catalog.latest.json");
const VISUALIZER_JSON = path.join(VISUALIZER_DATA_DIR, "swap-pattern-catalog.latest.json");
const VISUALIZER_DATA_JS = path.join(VISUALIZER_DATA_DIR, "swap-pattern-catalog-data.js");

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

function coord(index) {
  return `${COL_NAMES[index % SIZE]}${Math.floor(index / SIZE) + 1}`;
}

function pairKey(first, second) {
  return first < second ? `${first}-${second}` : `${second}-${first}`;
}

function swapNotation(first, second) {
  return `${coord(first)}<->${coord(second)}`;
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

function applyMoves(board, moves) {
  const values = [...board];
  for (const [first, second] of moves) {
    [values[first], values[second]] = [values[second], values[first]];
  }
  return values.join("");
}

function validateBoard(board) {
  const grid = boardToGrid(board);
  const expected = "123456789";
  const sorted = (values) => [...values].sort((a, b) => a - b).join("");

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

function transpose(grid) {
  return grid[0].map((_, col) => grid.map((row) => row[col]));
}

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
  const source = parityParts(sourceGrid);
  const target = parityParts(targetGrid);
  return (source.rows === target.rows && source.cols === target.cols)
    || (source.rows === target.cols && source.cols === target.rows);
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
        if (ok) return true;
      }
    }
  }
  return false;
}

function classifyEndpoint(sourceBoard, targetBoard, sourceGrid) {
  if (targetBoard === sourceBoard) return "identity";
  const targetGrid = boardToGrid(targetBoard);
  if (!parityAllowsSymmetry(sourceGrid, targetGrid)) return "genuine";
  return findStandardSymmetry(sourceGrid, targetGrid) ? "standard-symmetry" : "genuine";
}

function rowMajorOrder() {
  return Array.from({ length: CELL_COUNT }, (_, index) => index);
}

function colMajorOrder() {
  const out = [];
  for (let col = 0; col < SIZE; col += 1) {
    for (let row = 0; row < SIZE; row += 1) out.push(row * SIZE + col);
  }
  return out;
}

function boxMajorOrder(rowFirst = true) {
  const out = [];
  for (let boxRow = 0; boxRow < SIZE; boxRow += BOX) {
    for (let boxCol = 0; boxCol < SIZE; boxCol += BOX) {
      for (let a = 0; a < BOX; a += 1) {
        for (let b = 0; b < BOX; b += 1) {
          const row = boxRow + (rowFirst ? a : b);
          const col = boxCol + (rowFirst ? b : a);
          out.push(row * SIZE + col);
        }
      }
    }
  }
  return out;
}

function roleOrder(rowFirst = true) {
  return rowMajorOrder().sort((a, b) => {
    const ar = Math.floor(a / SIZE);
    const ac = a % SIZE;
    const br = Math.floor(b / SIZE);
    const bc = b % SIZE;
    const left = rowFirst
      ? [ar % BOX, ac % BOX, ar, ac]
      : [ac % BOX, ar % BOX, ac, ar];
    const right = rowFirst
      ? [br % BOX, bc % BOX, br, bc]
      : [bc % BOX, br % BOX, bc, br];
    for (let i = 0; i < left.length; i += 1) {
      if (left[i] !== right[i]) return left[i] - right[i];
    }
    return 0;
  });
}

function matchingFromOrder(order) {
  const moves = [];
  for (let index = 0; index + 1 < order.length; index += 2) {
    const first = Math.min(order[index], order[index + 1]);
    const second = Math.max(order[index], order[index + 1]);
    moves.push([first, second]);
  }
  return moves;
}

function reversePairs() {
  const moves = [];
  for (let index = 0; index < MAX_DISJOINT_SWAPS; index += 1) {
    moves.push([index, CELL_COUNT - 1 - index]);
  }
  return moves;
}

function transposeLikePairs() {
  const used = new Set();
  const moves = [];
  for (let row = 0; row < SIZE; row += 1) {
    for (let col = row + 1; col < SIZE; col += 1) {
      const first = row * SIZE + col;
      const second = col * SIZE + row;
      used.add(first);
      used.add(second);
      moves.push([Math.min(first, second), Math.max(first, second)]);
    }
  }
  const leftovers = rowMajorOrder().filter((index) => !used.has(index));
  for (let index = 0; index + 1 < leftovers.length; index += 2) {
    moves.push([leftovers[index], leftovers[index + 1]]);
  }
  return moves;
}

function assertDisjointTemplate(moves, id) {
  const usedCells = new Set();
  const usedPairs = new Set();
  for (const [first, second] of moves) {
    const key = pairKey(first, second);
    if (usedPairs.has(key)) throw new Error(`${id} repeats pair ${key}`);
    if (usedCells.has(first) || usedCells.has(second)) throw new Error(`${id} reuses a cell`);
    usedPairs.add(key);
    usedCells.add(first);
    usedCells.add(second);
  }
  if (moves.length !== MAX_DISJOINT_SWAPS) throw new Error(`${id} has ${moves.length} moves, not ${MAX_DISJOINT_SWAPS}`);
}

function templateFamilies() {
  const families = [
    { id: "row-major", label: "Row-major adjacent", moves: matchingFromOrder(rowMajorOrder()) },
    { id: "column-major", label: "Column-major adjacent", moves: matchingFromOrder(colMajorOrder()) },
    { id: "box-row-major", label: "Box row-major", moves: matchingFromOrder(boxMajorOrder(true)) },
    { id: "box-column-major", label: "Box column-major", moves: matchingFromOrder(boxMajorOrder(false)) },
    { id: "role-row", label: "Role row order", moves: matchingFromOrder(roleOrder(true)) },
    { id: "role-column", label: "Role column order", moves: matchingFromOrder(roleOrder(false)) },
    { id: "reverse", label: "Reverse board pairs", moves: reversePairs() },
    { id: "transpose-like", label: "Transpose-like pairs", moves: transposeLikePairs() },
  ];
  for (const family of families) assertDisjointTemplate(family.moves, family.id);
  return families.map((family) => ({
    ...family,
    maxDepth: family.moves.length,
    notation40: family.moves.map(([first, second]) => swapNotation(first, second)),
  }));
}

function emptyDepth(depth) {
  return {
    depth,
    patternsTested: 0,
    validEndpoints: 0,
    ignored: { identity: 0, "standard-symmetry": 0 },
    genuine: { count: 0, examples: [] },
  };
}

function rememberExample(bucket, patternId, moves, board) {
  if (bucket.genuine.examples.length >= 12) return;
  bucket.genuine.examples.push({
    patternId,
    notation: `${moves.map(([first, second]) => swapNotation(first, second)).join(", ")}, end`,
    board,
  });
}

function testPattern(source, moves, patternId, bucket) {
  bucket.patternsTested += 1;
  const targetBoard = applyMoves(source.board, moves);
  if (!validateBoard(targetBoard)) return;
  bucket.validEndpoints += 1;
  const className = classifyEndpoint(source.board, targetBoard, source.grid);
  if (className !== "genuine") {
    bucket.ignored[className] += 1;
    return;
  }
  bucket.genuine.count += 1;
  rememberExample(bucket, patternId, moves, targetBoard);
}

function testTemplateFamilies(source, families) {
  const byDepth = Array.from({ length: MAX_DISJOINT_SWAPS }, (_, index) => emptyDepth(index + 1));
  for (const family of families) {
    for (let depth = 1; depth <= MAX_DISJOINT_SWAPS; depth += 1) {
      testPattern(source, family.moves.slice(0, depth), family.id, byDepth[depth - 1]);
    }
  }
  return byDepth;
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
  return firstDigitCells.map((cell, index) => {
    const other = secondDigitCells[index];
    return [Math.min(cell, other), Math.max(cell, other)];
  });
}

function testTwoSymbolTradePatterns(source) {
  const byDepth = Array.from({ length: MAX_DISJOINT_SWAPS }, (_, index) => emptyDepth(index + 1));
  const seenByDepth = new Map();

  for (let firstDigit = 1; firstDigit <= SIZE; firstDigit += 1) {
    for (let secondDigit = firstDigit + 1; secondDigit <= SIZE; secondDigit += 1) {
      const positions = positionsForDigits(source.board, firstDigit, secondDigit);
      const fullMask = (1 << positions.length) - 1;
      for (let mask = 1; mask < fullMask; mask += 1) {
        const selectedCells = bitCount(mask);
        if (selectedCells < 2 || selectedCells % 2 !== 0) continue;
        const depth = selectedCells / 2;
        if (depth > MAX_DISJOINT_SWAPS) continue;
        const bucket = byDepth[depth - 1];
        bucket.patternsTested += 1;
        if (!isBalancedTrade(positions, mask)) continue;

        const moves = tradeMoves(positions, mask, firstDigit);
        const targetBoard = applyMoves(source.board, moves);
        if (!validateBoard(targetBoard)) continue;

        if (!seenByDepth.has(depth)) seenByDepth.set(depth, new Set());
        if (seenByDepth.get(depth).has(targetBoard)) continue;
        seenByDepth.get(depth).add(targetBoard);

        bucket.validEndpoints += 1;
        const className = classifyEndpoint(source.board, targetBoard, source.grid);
        if (className !== "genuine") {
          bucket.ignored[className] += 1;
          continue;
        }
        bucket.genuine.count += 1;
        rememberExample(bucket, `${firstDigit}<->${secondDigit} mask ${mask}`, moves, targetBoard);
      }
    }
  }
  return byDepth;
}

function buildSources(sourceArg) {
  const all = [
    { id: "cyclic-base", label: "cyclic base", board: gridToBoardString(BASE_GRID), grid: BASE_GRID },
    { id: "comparison", label: "comparison", board: gridToBoardString(COMPARISON_GRID), grid: COMPARISON_GRID },
  ];
  if (sourceArg === "all") return all;
  return all.filter((source) => source.id === sourceArg || source.label === sourceArg);
}

function summarizePatternResults(templateDepths, tradeDepths) {
  const byDepth = [];
  for (let depth = 1; depth <= MAX_DISJOINT_SWAPS; depth += 1) {
    const template = templateDepths[depth - 1];
    const trade = tradeDepths[depth - 1];
    byDepth.push({
      depth,
      templateGenuine: template.genuine.count,
      tradeGenuine: trade.genuine.count,
      totalGenuine: template.genuine.count + trade.genuine.count,
      templateValidEndpoints: template.validEndpoints,
      tradeValidEndpoints: trade.validEndpoints,
    });
  }
  const genuineDepths = byDepth.filter((row) => row.totalGenuine > 0).map((row) => row.depth);
  return {
    firstGenuineDepth: genuineDepths.length ? Math.min(...genuineDepths) : null,
    deepestGenuineDepth: genuineDepths.length ? Math.max(...genuineDepths) : null,
    totalGenuine: byDepth.reduce((sum, row) => sum + row.totalGenuine, 0),
    byDepth,
  };
}

function writeOutput(output) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(VISUALIZER_DATA_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_DATA_JS, `window.SUDOKU_SWAP_PATTERN_CATALOG = ${JSON.stringify(output, null, 2)};\n`);
}

function main() {
  const sourceArg = readArg("source", "all");
  const sources = buildSources(sourceArg);
  if (sources.length === 0) throw new Error(`unknown source '${sourceArg}'`);

  const families = templateFamilies();
  const output = {
    kind: "swap-pattern-catalog",
    runStartedAt: new Date().toISOString(),
    updatedAt: null,
    definition: {
      maxDisjointSwaps: MAX_DISJOINT_SWAPS,
      templateCatalog: "board-independent 40-swap disjoint templates; each depth is the first n pairs of a template",
      twoSymbolTrades: "board-derived disjoint swap patterns that exchange two symbols across balanced cell subsets",
      endpointFilter: "valid completed endpoints are classified as identity, standard-symmetry, or genuine",
    },
    files: {
      outputJson: OUTPUT_JSON,
      visualizerJson: VISUALIZER_JSON,
      visualizerDataJs: VISUALIZER_DATA_JS,
    },
    families: families.map((family) => ({
      id: family.id,
      label: family.label,
      maxDepth: family.maxDepth,
      notation40: family.notation40,
    })),
    sources: [],
  };

  console.log("9x9 swap pattern catalog");
  console.log(`sources: ${sources.map((source) => source.label).join(", ")}`);
  console.log(`template families: ${families.length}`);

  for (const source of sources) {
    console.log(`testing ${source.label}`);
    const templateDepths = testTemplateFamilies(source, families);
    const tradeDepths = testTwoSymbolTradePatterns(source);
    const summary = summarizePatternResults(templateDepths, tradeDepths);

    output.sources.push({
      id: source.id,
      label: source.label,
      board: source.board,
      summary,
      templateDepths,
      twoSymbolTradeDepths: tradeDepths,
    });
    output.updatedAt = new Date().toISOString();
    writeOutput(output);

    console.log(`  total genuine: ${summary.totalGenuine}`);
    console.log(`  first genuine depth: ${summary.firstGenuineDepth ?? "none"}`);
    console.log(`  deepest genuine depth: ${summary.deepestGenuineDepth ?? "none"}`);
  }

  output.updatedAt = new Date().toISOString();
  writeOutput(output);
}

main();
