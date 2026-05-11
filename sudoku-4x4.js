const SIZE = 4;
const BOX = 2;
const SYMBOLS = [1, 2, 3, 4];

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

function permutations(values) {
  if (values.length === 0) return [[]];

  const out = [];
  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];
    const rest = values.slice(0, index).concat(values.slice(index + 1));
    for (const tail of permutations(rest)) {
      out.push([value, ...tail]);
    }
  }
  return out;
}

function permuteRows(grid, permutation) {
  return permutation.map((row) => grid[row]);
}

function permuteCols(grid, permutation) {
  return grid.map((row) => permutation.map((col) => row[col]));
}

function renameDigits(grid, digitPermutation) {
  const map = new Map(SYMBOLS.map((symbol, index) => [symbol, digitPermutation[index]]));
  return grid.map((row) => row.map((value) => map.get(value)));
}

function transpose(grid) {
  return grid[0].map((_, col) => grid.map((row) => row[col]));
}

function bandRespectingPermutations() {
  const pairPerms = [
    [0, 1],
    [1, 0],
  ];
  const out = [];

  for (const bandOrder of pairPerms) {
    for (const firstBandRows of pairPerms) {
      for (const secondBandRows of pairPerms) {
        const rowsByBand = [firstBandRows, secondBandRows];
        const permutation = [];
        for (const band of bandOrder) {
          for (const row of rowsByBand[band]) {
            permutation.push(band * BOX + row);
          }
        }
        out.push(permutation);
      }
    }
  }

  return out;
}

function generateCompletedGrids() {
  const grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
  const out = [];

  function candidates(row, col) {
    return SYMBOLS.filter((symbol) => {
      for (let i = 0; i < SIZE; i += 1) {
        if (grid[row][i] === symbol) return false;
        if (grid[i][col] === symbol) return false;
      }

      const boxRow = Math.floor(row / BOX) * BOX;
      const boxCol = Math.floor(col / BOX) * BOX;
      for (let r = boxRow; r < boxRow + BOX; r += 1) {
        for (let c = boxCol; c < boxCol + BOX; c += 1) {
          if (grid[r][c] === symbol) return false;
        }
      }

      return true;
    });
  }

  function fill(cell = 0) {
    if (cell === SIZE * SIZE) {
      out.push(cloneGrid(grid));
      return;
    }

    const row = Math.floor(cell / SIZE);
    const col = cell % SIZE;
    for (const symbol of candidates(row, col)) {
      grid[row][col] = symbol;
      fill(cell + 1);
      grid[row][col] = 0;
    }
  }

  fill();
  return out;
}

function standardSymmetryFamily(grid) {
  const rowPermutations = bandRespectingPermutations();
  const colPermutations = rowPermutations;
  const digitPermutations = permutations(SYMBOLS);
  const family = new Set();

  for (const shouldTranspose of [false, true]) {
    const startingGrid = shouldTranspose ? transpose(grid) : grid;
    for (const rowPermutation of rowPermutations) {
      const rowGrid = permuteRows(startingGrid, rowPermutation);
      for (const colPermutation of colPermutations) {
        const colGrid = permuteCols(rowGrid, colPermutation);
        for (const digitPermutation of digitPermutations) {
          family.add(gridKey(renameDigits(colGrid, digitPermutation)));
        }
      }
    }
  }

  return family;
}

function atomicSwapCounts(grid) {
  let rowSwaps = 0;
  let colSwaps = 0;

  for (let a = 0; a < SIZE; a += 1) {
    for (let b = a + 1; b < SIZE; b += 1) {
      const rowGrid = cloneGrid(grid);
      [rowGrid[a], rowGrid[b]] = [rowGrid[b], rowGrid[a]];
      if (validateGrid(rowGrid)) rowSwaps += 1;

      const colGrid = cloneGrid(grid);
      for (const row of colGrid) {
        [row[a], row[b]] = [row[b], row[a]];
      }
      if (validateGrid(colGrid)) colSwaps += 1;
    }
  }

  return { rowSwaps, colSwaps };
}

function printGrid(grid) {
  for (let row = 0; row < SIZE; row += 1) {
    if (row === BOX) console.log("----+----");
    console.log(`${grid[row].slice(0, BOX).join(" ")} | ${grid[row].slice(BOX).join(" ")}`);
  }
}

const grids = generateCompletedGrids();
const unseen = new Set(grids.map(gridKey));
const families = [];

for (const grid of grids) {
  const key = gridKey(grid);
  if (!unseen.has(key)) continue;

  const family = standardSymmetryFamily(grid);
  families.push({ representative: grid, size: family.size, swaps: atomicSwapCounts(grid) });
  for (const member of family) unseen.delete(member);
}

console.log(`completed 4x4 grids: ${grids.length}`);
console.log(`standard symmetry families: ${families.length}`);
console.log("");

families.forEach((family, index) => {
  console.log(`family ${index + 1}`);
  console.log(`  family size: ${family.size}`);
  console.log(`  valid single row swaps: ${family.swaps.rowSwaps}`);
  console.log(`  valid single column swaps: ${family.swaps.colSwaps}`);
  printGrid(family.representative);
  console.log("");
});
