const SIZE = 9;
const BOX = 3;
const SYMBOLS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        for (let col = boxCol; col < boxCol + BOX; col += 1) {
          values.push(grid[row][col]);
        }
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

function cellName(index) {
  return `r${Math.floor(index / SIZE) + 1}c${(index % SIZE) + 1}`;
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
  const rowAPositions = new Map(grid[a].map((value, index) => [value, index + 1]));
  return permutationParity(grid[b].map((value) => rowAPositions.get(value)));
}

function colPairParity(grid, a, b) {
  const colA = grid.map((row) => row[a]);
  const colB = grid.map((row) => row[b]);
  const colAPositions = new Map(colA.map((value, index) => [value, index + 1]));
  return permutationParity(colB.map((value) => colAPositions.get(value)));
}

function pairParityProfile(grid, axis) {
  const parityForPair = axis === "row" ? rowPairParity : colPairParity;
  const profile = { even: 0, odd: 0 };

  for (let a = 0; a < SIZE; a += 1) {
    for (let b = a + 1; b < SIZE; b += 1) {
      profile[parityForPair(grid, a, b)] += 1;
    }
  }

  return profile;
}

function profileKey(profile) {
  return `even:${profile.even},odd:${profile.odd}`;
}

function paritySignature(grid) {
  return [
    `rows ${profileKey(pairParityProfile(grid, "row"))}`,
    `cols ${profileKey(pairParityProfile(grid, "col"))}`,
  ].join(" | ");
}

function applyTwoSymbolTrade(grid, tradeCells, firstDigit, secondDigit) {
  const next = cloneGrid(grid);
  for (const cell of tradeCells) {
    const row = Math.floor(cell.index / SIZE);
    const col = cell.index % SIZE;
    next[row][col] = cell.value === firstDigit ? secondDigit : firstDigit;
  }
  return next;
}

function positionsForDigits(grid, firstDigit, secondDigit) {
  const positions = [];
  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      const value = grid[row][col];
      if (value !== firstDigit && value !== secondDigit) continue;
      positions.push({
        index: row * SIZE + col,
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

function tradeShapeKey(cells) {
  const rows = new Set(cells.map((cell) => cell.row));
  const cols = new Set(cells.map((cell) => cell.col));
  const boxes = new Set(cells.map((cell) => cell.box));
  return `cells:${cells.length},rows:${rows.size},cols:${cols.size},boxes:${boxes.size}`;
}

function bandStackShapeKey(cells) {
  const rowBands = new Set(cells.map((cell) => Math.floor(cell.row / BOX)));
  const colStacks = new Set(cells.map((cell) => Math.floor(cell.col / BOX)));
  return `rowBands:${rowBands.size},colStacks:${colStacks.size}`;
}

function tradeCellList(cells) {
  return cells
    .map((cell) => `${cellName(cell.index)}=${cell.value}`)
    .join(", ");
}

function tradeSwapPlan(cells, firstDigit) {
  const firstDigitCells = cells.filter((cell) => cell.value === firstDigit);
  const secondDigitCells = cells.filter((cell) => cell.value !== firstDigit);
  return firstDigitCells.map((cell, index) => `${cellName(cell.index)}<->${cellName(secondDigitCells[index].index)}`);
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

  for (let firstDigit = 1; firstDigit <= 9; firstDigit += 1) {
    for (let secondDigit = firstDigit + 1; secondDigit <= 9; secondDigit += 1) {
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
        shapeCounts.set(tradeShapeKey(cells), (shapeCounts.get(tradeShapeKey(cells)) ?? 0) + 1);
        parityCounts.set(paritySignature(final), (parityCounts.get(paritySignature(final)) ?? 0) + 1);

        if (size < minimumSize) {
          minimumSize = size;
          minimumShapeCounts.clear();
          examples.length = 0;
        }

        if (size === minimumSize) {
          minimumShapeCounts.set(tradeShapeKey(cells), (minimumShapeCounts.get(tradeShapeKey(cells)) ?? 0) + 1);
          minimumBandStackShapeCounts.set(
            bandStackShapeKey(cells),
            (minimumBandStackShapeCounts.get(bandStackShapeKey(cells)) ?? 0) + 1,
          );
          const digitPairKey = `${firstDigit}<->${secondDigit}`;
          minimumDigitPairCounts.set(digitPairKey, (minimumDigitPairCounts.get(digitPairKey) ?? 0) + 1);
          if (examples.length < 8) {
            examples.push({
              digits: `${firstDigit}<->${secondDigit}`,
              cells,
              parity: paritySignature(final),
              swapPlan: tradeSwapPlan(cells, firstDigit),
              final,
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
    tradeSizeCounts,
    shapeCounts,
    minimumShapeCounts,
    minimumBandStackShapeCounts,
    minimumDigitPairCounts,
    parityCounts,
    examples,
  };
}

function printCountMap(label, map) {
  console.log(label);
  for (const [key, count] of [...map.entries()].sort((a, b) => {
    const numericA = Number(String(a[0]).replace(/\D/g, ""));
    const numericB = Number(String(b[0]).replace(/\D/g, ""));
    if (Number.isFinite(numericA) && Number.isFinite(numericB) && numericA !== numericB) {
      return numericA - numericB;
    }
    return b[1] - a[1] || String(a[0]).localeCompare(String(b[0]));
  })) {
    console.log(`    ${key}: ${count}`);
  }
}

function printTradeScan(name, grid) {
  const profile = scanTwoSymbolTrades(grid);
  console.log(`9x9 two-symbol trade scan: ${name}`);
  console.log(`  valid grid: ${validateGrid(grid)}`);
  console.log(`  starting parity: ${paritySignature(grid)}`);
  console.log(`  total nontrivial trades: ${profile.totalTrades}`);
  console.log(`  unique valid target boards: ${profile.uniqueTargetCount}`);
  console.log(`  minimum trade size: ${profile.minimumSize} cells`);
  console.log(`  minimum forbidden cell-swap depth: ${profile.minimumSwapDepth}`);
  printCountMap("  trade size distribution", profile.tradeSizeCounts);
  printCountMap("  minimum trade shapes", profile.minimumShapeCounts);
  printCountMap("  minimum band/stack shapes", profile.minimumBandStackShapeCounts);
  printCountMap("  minimum digit-pair distribution", profile.minimumDigitPairCounts);
  printCountMap("  final parity signatures", profile.parityCounts);
  console.log("  minimum examples:");
  for (const example of profile.examples) {
    console.log(`    digits ${example.digits}`);
    console.log(`      cells: ${tradeCellList(example.cells)}`);
    console.log(`      swap plan: ${example.swapPlan.join("; ")}`);
    console.log(`      final parity: ${example.parity}`);
  }
}

printTradeScan("cyclic base", BASE_GRID);
