const SIZE = 9;
const BOX = 3;
const SYMBOLS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const EXACT_DIAMETER_LIMIT = 1500;

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

function permutationKey(permutation) {
  return permutation.join("");
}

function parsePermutationKey(key) {
  return [...key].map(Number);
}

function permutationLabel(key) {
  return parsePermutationKey(key).map((value) => value + 1).join("");
}

function swapPermutationEntries(permutation, a, b) {
  const next = [...permutation];
  [next[a], next[b]] = [next[b], next[a]];
  return next;
}

function swapPermutationBlocks(permutation, a, b) {
  const next = [...permutation];
  for (let offset = 0; offset < BOX; offset += 1) {
    const left = a * BOX + offset;
    const right = b * BOX + offset;
    [next[left], next[right]] = [next[right], next[left]];
  }
  return next;
}

function validEndpointSet(grid, axis, allPermutations) {
  const endpoints = new Set();
  for (const permutation of allPermutations) {
    if (validateGrid(applyAxisPermutation(grid, axis, permutation))) {
      endpoints.add(permutationKey(permutation));
    }
  }
  return endpoints;
}

function initialRoleGraph(grid, axis) {
  const identity = [...Array(SIZE).keys()];
  const edges = [];
  const adjacency = Array.from({ length: SIZE }, () => []);

  for (let a = 0; a < SIZE; a += 1) {
    for (let b = a + 1; b < SIZE; b += 1) {
      const next = swapPermutationEntries(identity, a, b);
      if (!validateGrid(applyAxisPermutation(grid, axis, next))) continue;
      edges.push([a, b]);
      adjacency[a].push(b);
      adjacency[b].push(a);
    }
  }

  return {
    edges,
    components: graphComponentsFromAdjacency(adjacency),
    degrees: adjacency.map((neighbors) => neighbors.length),
  };
}

function graphComponentsFromAdjacency(adjacency) {
  const unseen = new Set(adjacency.map((_, index) => index));
  const components = [];

  while (unseen.size > 0) {
    const start = unseen.values().next().value;
    const component = [];
    const queue = [start];
    unseen.delete(start);

    for (let index = 0; index < queue.length; index += 1) {
      const current = queue[index];
      component.push(current);
      for (const neighbor of adjacency[current]) {
        if (!unseen.has(neighbor)) continue;
        unseen.delete(neighbor);
        queue.push(neighbor);
      }
    }

    components.push(component.sort((a, b) => a - b));
  }

  return components.sort((a, b) => b.length - a.length || a[0] - b[0]);
}

function neighborKeys(key, endpoints, includeBlockSwaps) {
  const permutation = parsePermutationKey(key);
  const neighbors = [];

  for (let a = 0; a < SIZE; a += 1) {
    for (let b = a + 1; b < SIZE; b += 1) {
      const nextKey = permutationKey(swapPermutationEntries(permutation, a, b));
      if (endpoints.has(nextKey)) neighbors.push(nextKey);
    }
  }

  if (includeBlockSwaps) {
    for (let a = 0; a < BOX; a += 1) {
      for (let b = a + 1; b < BOX; b += 1) {
        const nextKey = permutationKey(swapPermutationBlocks(permutation, a, b));
        if (endpoints.has(nextKey)) neighbors.push(nextKey);
      }
    }
  }

  return neighbors;
}

function breadthFirstDistances(startKey, endpoints, includeBlockSwaps, allowedKeys = endpoints) {
  const distances = new Map([[startKey, 0]]);
  const queue = [startKey];

  for (let index = 0; index < queue.length; index += 1) {
    const current = queue[index];
    const currentDistance = distances.get(current);
    for (const neighbor of neighborKeys(current, endpoints, includeBlockSwaps)) {
      if (!allowedKeys.has(neighbor) || distances.has(neighbor)) continue;
      distances.set(neighbor, currentDistance + 1);
      queue.push(neighbor);
    }
  }

  return distances;
}

function componentProfile(endpoints, includeBlockSwaps) {
  const unseen = new Set(endpoints);
  const components = [];

  while (unseen.size > 0) {
    const start = unseen.values().next().value;
    const distances = breadthFirstDistances(start, endpoints, includeBlockSwaps, unseen);
    const members = [...distances.keys()];
    for (const member of members) unseen.delete(member);
    components.push(members);
  }

  components.sort((a, b) => b.length - a.length || a[0].localeCompare(b[0]));
  return components;
}

function exactDiameter(component, endpoints, includeBlockSwaps) {
  if (component.length > EXACT_DIAMETER_LIMIT) return null;

  const allowedKeys = new Set(component);
  let diameter = 0;
  let diameterPair = null;

  for (const start of component) {
    const distances = breadthFirstDistances(start, endpoints, includeBlockSwaps, allowedKeys);
    for (const [target, distance] of distances.entries()) {
      if (distance > diameter) {
        diameter = distance;
        diameterPair = [start, target];
      }
    }
  }

  return { diameter, diameterPair };
}

function distanceDistribution(distances) {
  const counts = new Map();
  for (const distance of distances.values()) {
    counts.set(distance, (counts.get(distance) ?? 0) + 1);
  }
  return counts;
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

function printCountMap(label, map) {
  console.log(label);
  for (const [key, count] of [...map.entries()].sort((a, b) => {
    if (typeof a[0] === "number" && typeof b[0] === "number") return a[0] - b[0];
    return String(a[0]).localeCompare(String(b[0]));
  })) {
    console.log(`    ${key}: ${count}`);
  }
}

function printRoleGraph(name, axis, roleGraph) {
  console.log(`${name} ${axis} role graph`);
  console.log(`  valid single swaps from start: ${roleGraph.edges.length}`);
  console.log(`  components: ${roleGraph.components.map(formatIndexComponent).join(" | ")}`);
  console.log(`  degrees: ${roleGraph.degrees.join(", ")}`);
}

function formatIndexComponent(component) {
  return `[${component.map((index) => index + 1).join(",")}]`;
}

function printOptimizationProfile(name, grid, axis, allPermutations) {
  const endpoints = validEndpointSet(grid, axis, allPermutations);
  const identityKey = permutationKey([...Array(SIZE).keys()]);
  const roleGraph = initialRoleGraph(grid, axis);

  printRoleGraph(name, axis, roleGraph);
  console.log(`  valid endpoint permutations: ${endpoints.size}`);

  for (const moveSet of [
    { name: "single valid swaps", includeBlockSwaps: false },
    { name: "single valid swaps + block swaps", includeBlockSwaps: true },
  ]) {
    const components = componentProfile(endpoints, moveSet.includeBlockSwaps);
    const identityDistances = breadthFirstDistances(identityKey, endpoints, moveSet.includeBlockSwaps);
    const largestComponent = components[0];
    const diameter = exactDiameter(largestComponent, endpoints, moveSet.includeBlockSwaps);
    const identityEccentricity = Math.max(...identityDistances.values());

    console.log(`  move set: ${moveSet.name}`);
    console.log(`    components: ${components.length}`);
    console.log(`    component sizes: ${summarizeComponentSizes(components)}`);
    console.log(`    identity reachable endpoints: ${identityDistances.size}`);
    console.log(`    identity worst-case steps: ${identityEccentricity}`);
    if (diameter) {
      console.log(`    largest-component exact diameter: ${diameter.diameter}`);
      console.log(`    example diameter endpoints: ${permutationLabel(diameter.diameterPair[0])} -> ${permutationLabel(diameter.diameterPair[1])}`);
    } else {
      console.log(`    largest-component exact diameter: skipped above ${EXACT_DIAMETER_LIMIT} nodes`);
    }
    printCountMap("    identity distance distribution", distanceDistribution(identityDistances));
  }

  console.log("");
}

function printBoardOptimization(name, grid, allPermutations) {
  console.log(`9x9 optimization profile: ${name}`);
  console.log(`  valid grid: ${validateGrid(grid)}`);
  printOptimizationProfile(name, grid, "row", allPermutations);
  printOptimizationProfile(name, grid, "col", allPermutations);
}

const allPermutations = permutations([...Array(SIZE).keys()]);

printBoardOptimization("cyclic base", BASE_GRID, allPermutations);
printBoardOptimization("comparison", COMPARISON_GRID, allPermutations);
