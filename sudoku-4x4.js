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

function swapRows(grid, a, b) {
  const next = cloneGrid(grid);
  [next[a], next[b]] = [next[b], next[a]];
  return next;
}

function swapCols(grid, a, b) {
  const next = cloneGrid(grid);
  for (const row of next) {
    [row[a], row[b]] = [row[b], row[a]];
  }
  return next;
}

function swapDigits(grid, a, b) {
  return grid.map((row) => row.map((value) => {
    if (value === a) return b;
    if (value === b) return a;
    return value;
  }));
}

function swapCells(grid, first, second) {
  const next = cloneGrid(grid);
  const firstRow = Math.floor(first / SIZE);
  const firstCol = first % SIZE;
  const secondRow = Math.floor(second / SIZE);
  const secondCol = second % SIZE;
  [next[firstRow][firstCol], next[secondRow][secondCol]] = [next[secondRow][secondCol], next[firstRow][firstCol]];
  return next;
}

function swapBands(grid) {
  return grid.slice(BOX).concat(grid.slice(0, BOX));
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
  const mapping = grid[b].map((value) => rowAPositions.get(value));
  return permutationParity(mapping);
}

function colPairParity(grid, a, b) {
  const colA = grid.map((row) => row[a]);
  const colB = grid.map((row) => row[b]);
  const colAPositions = new Map(colA.map((value, index) => [value, index + 1]));
  const mapping = colB.map((value) => colAPositions.get(value));
  return permutationParity(mapping);
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

function swapStacks(grid) {
  return grid.map((row) => row.slice(BOX).concat(row.slice(0, BOX)));
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

function standardAtomicNeighbors(grid) {
  return movesToNeighborMap(standardAtomicMoves(grid));
}

function standardAtomicMoves(grid) {
  const moves = [];
  const add = (move, next) => moves.push({ move, next });

  for (let a = 0; a < SIZE; a += 1) {
    for (let b = a + 1; b < SIZE; b += 1) {
      if (Math.floor(a / BOX) === Math.floor(b / BOX)) {
        add(`row ${a + 1}<->${b + 1}`, swapRows(grid, a, b));
        add(`col ${a + 1}<->${b + 1}`, swapCols(grid, a, b));
      }
    }
  }

  for (let a = 0; a < SYMBOLS.length; a += 1) {
    for (let b = a + 1; b < SYMBOLS.length; b += 1) {
      add(`digit ${SYMBOLS[a]}<->${SYMBOLS[b]}`, swapDigits(grid, SYMBOLS[a], SYMBOLS[b]));
    }
  }

  add("band 1<->2", swapBands(grid));
  add("stack 1<->2", swapStacks(grid));
  add("transpose", transpose(grid));

  return moves;
}

function validityPreservingSwapNeighbors(grid) {
  return movesToNeighborMap(validityPreservingSwapMoves(grid));
}

function validityPreservingSwapMoves(grid) {
  const moves = [];
  const addIfValid = (move, next) => {
    if (validateGrid(next)) moves.push({ move, next });
  };

  for (let a = 0; a < SIZE; a += 1) {
    for (let b = a + 1; b < SIZE; b += 1) {
      addIfValid(`valid row ${a + 1}<->${b + 1}`, swapRows(grid, a, b));
      addIfValid(`valid col ${a + 1}<->${b + 1}`, swapCols(grid, a, b));
    }
  }

  for (let a = 0; a < SYMBOLS.length; a += 1) {
    for (let b = a + 1; b < SYMBOLS.length; b += 1) {
      addIfValid(`digit ${SYMBOLS[a]}<->${SYMBOLS[b]}`, swapDigits(grid, SYMBOLS[a], SYMBOLS[b]));
    }
  }

  addIfValid("transpose", transpose(grid));

  return moves;
}

function validityPreservingCellSwapNeighbors(grid) {
  return movesToNeighborMap(validityPreservingCellSwapMoves(grid));
}

function validityPreservingCellSwapMoves(grid) {
  const moves = [];

  for (let a = 0; a < SIZE * SIZE; a += 1) {
    for (let b = a + 1; b < SIZE * SIZE; b += 1) {
      const next = swapCells(grid, a, b);
      if (!validateGrid(next)) continue;
      const first = `r${Math.floor(a / SIZE) + 1}c${(a % SIZE) + 1}`;
      const second = `r${Math.floor(b / SIZE) + 1}c${(b % SIZE) + 1}`;
      moves.push({ move: `cell ${first}<->${second}`, next });
    }
  }

  return moves;
}

function allCellSwapMoves(grid) {
  const moves = [];

  for (let a = 0; a < SIZE * SIZE; a += 1) {
    for (let b = a + 1; b < SIZE * SIZE; b += 1) {
      const first = `r${Math.floor(a / SIZE) + 1}c${(a % SIZE) + 1}`;
      const second = `r${Math.floor(b / SIZE) + 1}c${(b % SIZE) + 1}`;
      moves.push({ move: `cell ${first}<->${second}`, next: swapCells(grid, a, b) });
    }
  }

  return moves;
}

function movesToNeighborMap(moves) {
  const neighbors = new Map();
  for (const { move, next } of moves) {
    neighbors.set(gridKey(next), move);
  }
  return neighbors;
}

function buildGraph(grids, neighborFactory) {
  const validKeys = new Set(grids.map(gridKey));
  const graph = new Map();
  let edgeCount = 0;

  for (const grid of grids) {
    const key = gridKey(grid);
    const neighbors = [...neighborFactory(grid).entries()]
      .filter(([neighborKey]) => neighborKey !== key && validKeys.has(neighborKey));
    graph.set(key, neighbors);
    edgeCount += neighbors.length;
  }

  return { graph, edgeCount: edgeCount / 2 };
}

function breadthFirstDistances(graph, startKey) {
  const distances = new Map([[startKey, 0]]);
  const previous = new Map();
  const queue = [startKey];

  for (let index = 0; index < queue.length; index += 1) {
    const current = queue[index];
    const currentDistance = distances.get(current);
    for (const [neighbor, move] of graph.get(current)) {
      if (distances.has(neighbor)) continue;
      distances.set(neighbor, currentDistance + 1);
      previous.set(neighbor, { from: current, move });
      queue.push(neighbor);
    }
  }

  return { distances, previous };
}

function graphComponents(graph) {
  const unseen = new Set(graph.keys());
  const components = [];

  while (unseen.size > 0) {
    const start = unseen.values().next().value;
    const { distances } = breadthFirstDistances(graph, start);
    const members = [...distances.keys()];
    for (const key of members) unseen.delete(key);
    components.push(members);
  }

  return components.sort((a, b) => b.length - a.length);
}

function graphDistanceProfile(graph) {
  let diameter = 0;
  let diameterPair = null;
  let distanceSum = 0;
  let reachablePairs = 0;

  for (const start of graph.keys()) {
    const { distances } = breadthFirstDistances(graph, start);
    for (const [target, distance] of distances.entries()) {
      if (target <= start) continue;
      distanceSum += distance;
      reachablePairs += 1;
      if (distance > diameter) {
        diameter = distance;
        diameterPair = [start, target];
      }
    }
  }

  return {
    diameter,
    diameterPair,
    averageDistance: reachablePairs === 0 ? 0 : distanceSum / reachablePairs,
    reachablePairs,
  };
}

function shortestPath(graph, from, to) {
  const { distances, previous } = breadthFirstDistances(graph, from);
  if (!distances.has(to)) return null;

  const path = [];
  let current = to;
  while (current !== from) {
    const step = previous.get(current);
    path.push({ move: step.move, to: current });
    current = step.from;
  }
  return path.reverse();
}

function printGraphProfile(name, grids, neighborFactory, familyByKey) {
  const { graph, edgeCount } = buildGraph(grids, neighborFactory);
  const components = graphComponents(graph);
  const distanceProfile = graphDistanceProfile(graph);
  const familyEdges = new Map();

  for (const [key, neighbors] of graph.entries()) {
    for (const [neighborKey] of neighbors) {
      if (neighborKey < key) continue;
      const familyA = familyByKey.get(key);
      const familyB = familyByKey.get(neighborKey);
      const edgeKey = [familyA, familyB].sort((a, b) => a - b).join("<->");
      familyEdges.set(edgeKey, (familyEdges.get(edgeKey) ?? 0) + 1);
    }
  }

  console.log(`${name} graph`);
  console.log(`  nodes: ${grids.length}`);
  console.log(`  edges: ${edgeCount}`);
  console.log(`  connected components: ${components.length}`);
  console.log(`  component sizes: ${summarizeComponentSizes(components)}`);
  console.log(`  reachable pairs: ${distanceProfile.reachablePairs}`);
  console.log(`  average shortest swap distance: ${distanceProfile.averageDistance.toFixed(3)}`);
  console.log(`  diameter: ${distanceProfile.diameter}`);
  console.log(`  family edge counts: ${JSON.stringify(Object.fromEntries(familyEdges.entries()))}`);

  if (distanceProfile.diameterPair) {
    const path = shortestPath(graph, distanceProfile.diameterPair[0], distanceProfile.diameterPair[1]);
    console.log("  example diameter path:");
    path.forEach((step, index) => {
      console.log(`    ${index + 1}. ${step.move}`);
    });
  }

  console.log("");
}

function summarizeComponentSizes(components) {
  const counts = new Map();
  for (const component of components) {
    counts.set(component.length, (counts.get(component.length) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([size, count]) => (count === 1 ? `${size}` : `${size}x${count}`))
    .join(", ");
}

function printFamilyParityProfiles(families) {
  console.log("family parity profiles");
  families.forEach((family, index) => {
    const representative = family.representative;
    const rowProfile = pairParityProfile(representative, "row");
    const colProfile = pairParityProfile(representative, "col");
    const memberProfiles = new Map();

    for (const memberKey of family.members) {
      const grid = parseGridKey(memberKey);
      const key = paritySignature(grid);
      memberProfiles.set(key, (memberProfiles.get(key) ?? 0) + 1);
    }

    console.log(`  family ${index + 1}`);
    console.log(`    representative row-pair parity: ${profileKey(rowProfile)}`);
    console.log(`    representative col-pair parity: ${profileKey(colProfile)}`);
    console.log(`    profile distribution: ${JSON.stringify(Object.fromEntries(memberProfiles.entries()))}`);
  });
  console.log("");
}

function printMovePreservationReport(families) {
  const moveModels = [
    ["standard atomic moves", standardAtomicMoves],
    ["validity-preserving row/column swaps", validityPreservingSwapMoves],
    ["validity-preserving cell swaps", validityPreservingCellSwapMoves],
  ];

  console.log("move parity preservation");
  for (const [name, moveFactory] of moveModels) {
    const changes = new Map();
    let totalMoves = 0;

    for (const family of families) {
      for (const memberKey of family.members) {
        const grid = parseGridKey(memberKey);
        const before = paritySignature(grid);
        for (const { next } of moveFactory(grid)) {
          totalMoves += 1;
          const after = paritySignature(next);
          const key = `${before} -> ${after}`;
          changes.set(key, (changes.get(key) ?? 0) + 1);
        }
      }
    }

    console.log(`  ${name}`);
    console.log(`    total directed moves checked: ${totalMoves}`);
    for (const [change, count] of changes.entries()) {
      console.log(`    ${change}: ${count}`);
    }
  }
  console.log("");
}

function findForbiddenBridge(source, targetFamilyMembers, maxDepth) {
  const targetKeys = new Set(targetFamilyMembers);
  const startKey = gridKey(source);
  const queue = [{ grid: source, key: startKey, path: [] }];
  const seen = new Set([startKey]);

  for (let index = 0; index < queue.length; index += 1) {
    const current = queue[index];
    if (current.path.length >= maxDepth) continue;

    for (const { move, next } of allCellSwapMoves(current.grid)) {
      const nextKey = gridKey(next);
      if (seen.has(nextKey)) continue;

      const step = {
        move,
        validAfterMove: validateGrid(next),
        parityAfterMove: paritySignature(next),
        grid: next,
      };
      const path = [...current.path, step];

      if (targetKeys.has(nextKey)) return path;

      seen.add(nextKey);
      queue.push({ grid: next, key: nextKey, path });
    }
  }

  return null;
}

function printForbiddenBridgeReport(families) {
  const sourceFamily = families[0];
  const targetFamily = families[1];
  const source = sourceFamily.representative;
  const bridge = findForbiddenBridge(source, targetFamily.members, 4);

  console.log("forbidden bridge search");
  console.log("  move model: arbitrary single-cell swaps, invalid intermediate boards allowed");
  console.log("  source family: 1");
  console.log("  target family: 2");

  if (!bridge) {
    console.log("  no bridge found at depth <= 4");
    console.log("");
    return;
  }

  console.log(`  shortest bridge found: ${bridge.length} cell swap(s)`);
  bridge.forEach((step, index) => {
    console.log(`    ${index + 1}. ${step.move}`);
    console.log(`       valid after move: ${step.validAfterMove}`);
    console.log(`       parity after move: ${step.parityAfterMove}`);
  });
  console.log("  target grid:");
  printGrid(bridge[bridge.length - 1].grid);
  console.log("");
}

function parseGridKey(key) {
  return key.split("/").map((row) => [...row].map(Number));
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
const familyByKey = new Map();

for (const grid of grids) {
  const key = gridKey(grid);
  if (!unseen.has(key)) continue;

  const family = standardSymmetryFamily(grid);
  const familyIndex = families.length + 1;
  families.push({ representative: grid, size: family.size, swaps: atomicSwapCounts(grid), members: family });
  for (const member of family) {
    unseen.delete(member);
    familyByKey.set(member, familyIndex);
  }
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

printFamilyParityProfiles(families);
printMovePreservationReport(families);
printGraphProfile("standard atomic moves", grids, standardAtomicNeighbors, familyByKey);
printGraphProfile("validity-preserving row/column swaps", grids, validityPreservingSwapNeighbors, familyByKey);
printGraphProfile("validity-preserving cell swaps", grids, validityPreservingCellSwapNeighbors, familyByKey);
printForbiddenBridgeReport(families);
