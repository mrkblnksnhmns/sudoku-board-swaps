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

function permutations(values) {
  if (values.length === 0) return [[]];

  const out = [];
  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];
    const rest = values.slice(0, index).concat(values.slice(index + 1));
    for (const tail of permutations(rest)) out.push([value, ...tail]);
  }
  return out;
}

function permuteRows(grid, permutation) {
  return permutation.map((row) => grid[row]);
}

function permuteCols(grid, permutation) {
  return grid.map((row) => permutation.map((col) => row[col]));
}

function applyAxisPermutation(grid, axis, permutation) {
  return axis === "row" ? permuteRows(grid, permutation) : permuteCols(grid, permutation);
}

function swapPermutationEntries(permutation, a, b) {
  const next = [...permutation];
  [next[a], next[b]] = [next[b], next[a]];
  return next;
}

function permutationKey(permutation) {
  return permutation.join("");
}

function parsePermutationKey(key) {
  return [...key].map(Number);
}

function permutationLabel(permutation) {
  return permutation.map((value) => value + 1).join("");
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

function paritySignature(grid) {
  const rowProfile = pairParityProfile(grid, "row");
  const colProfile = pairParityProfile(grid, "col");
  return `rows even:${rowProfile.even},odd:${rowProfile.odd} | cols even:${colProfile.even},odd:${colProfile.odd}`;
}

function initialValidSingleSwaps(grid, axis) {
  const swaps = [];
  const identity = [...Array(SIZE).keys()];

  for (let a = 0; a < SIZE; a += 1) {
    for (let b = a + 1; b < SIZE; b += 1) {
      const permutation = swapPermutationEntries(identity, a, b);
      if (validateGrid(applyAxisPermutation(grid, axis, permutation))) swaps.push([a + 1, b + 1]);
    }
  }

  return swaps;
}

function validEndpointPermutations(grid, axis, allPermutations) {
  const out = new Set();
  const parityCounts = new Map();

  for (const permutation of allPermutations) {
    const next = applyAxisPermutation(grid, axis, permutation);
    if (!validateGrid(next)) continue;
    out.add(permutationKey(permutation));
    const parity = paritySignature(next);
    parityCounts.set(parity, (parityCounts.get(parity) ?? 0) + 1);
  }

  return { permutations: out, parityCounts };
}

function reachableStepwisePermutations(grid, axis) {
  const identity = [...Array(SIZE).keys()];
  const startKey = permutationKey(identity);
  const seen = new Set([startKey]);
  const queue = [{ permutation: identity, distance: 0 }];
  const distanceCounts = new Map([[0, 1]]);
  const parityCounts = new Map([[paritySignature(grid), 1]]);
  let maxDistance = 0;

  for (let index = 0; index < queue.length; index += 1) {
    const current = queue[index];

    for (let a = 0; a < SIZE; a += 1) {
      for (let b = a + 1; b < SIZE; b += 1) {
        const nextPermutation = swapPermutationEntries(current.permutation, a, b);
        const key = permutationKey(nextPermutation);
        if (seen.has(key)) continue;

        const nextGrid = applyAxisPermutation(grid, axis, nextPermutation);
        if (!validateGrid(nextGrid)) continue;

        const distance = current.distance + 1;
        seen.add(key);
        queue.push({ permutation: nextPermutation, distance });
        distanceCounts.set(distance, (distanceCounts.get(distance) ?? 0) + 1);
        maxDistance = Math.max(maxDistance, distance);

        const parity = paritySignature(nextGrid);
        parityCounts.set(parity, (parityCounts.get(parity) ?? 0) + 1);
      }
    }
  }

  return { permutations: seen, distanceCounts, parityCounts, maxDistance };
}

function formatSwapPairs(swaps) {
  return swaps.map(([a, b]) => `${a}<->${b}`).join(", ");
}

function printCountMap(label, map) {
  console.log(label);
  for (const [key, count] of [...map.entries()].sort((a, b) => {
    if (typeof a[0] === "number" && typeof b[0] === "number") return a[0] - b[0];
    return b[1] - a[1] || String(a[0]).localeCompare(String(b[0]));
  })) {
    console.log(`    ${key}: ${count}`);
  }
}

function printAxisProfile(name, grid, axis, allPermutations) {
  const initialSwaps = initialValidSingleSwaps(grid, axis);
  const endpoints = validEndpointPermutations(grid, axis, allPermutations);
  const reachable = reachableStepwisePermutations(grid, axis);
  const unreachableEndpointCount = [...endpoints.permutations]
    .filter((key) => !reachable.permutations.has(key))
    .length;
  const examples = [...reachable.permutations]
    .slice(0, 8)
    .map((key) => permutationLabel(parsePermutationKey(key)));

  console.log(`${name} ${axis} patterns`);
  console.log(`  valid single swaps from start: ${initialSwaps.length}`);
  console.log(`  swaps: ${formatSwapPairs(initialSwaps)}`);
  console.log(`  valid endpoint permutations: ${endpoints.permutations.size}`);
  console.log(`  stepwise-valid reachable permutations: ${reachable.permutations.size}`);
  console.log(`  valid endpoints not reached stepwise: ${unreachableEndpointCount}`);
  console.log(`  maximum stepwise swap distance from start: ${reachable.maxDistance}`);
  console.log(`  reachable examples: ${examples.join(", ")}`);
  printCountMap("  stepwise distance distribution", reachable.distanceCounts);
  printCountMap("  stepwise parity signatures", reachable.parityCounts);
  console.log("");
}

function printBoardProfile(name, grid, allPermutations) {
  console.log(`9x9 valid pattern profile: ${name}`);
  console.log(`  valid grid: ${validateGrid(grid)}`);
  console.log(`  starting parity: ${paritySignature(grid)}`);
  console.log("");
  printAxisProfile(name, grid, "row", allPermutations);
  printAxisProfile(name, grid, "col", allPermutations);
}

const allPermutations = permutations([...Array(SIZE).keys()]);

printBoardProfile("cyclic base", BASE_GRID, allPermutations);
printBoardProfile("comparison", COMPARISON_GRID, allPermutations);
