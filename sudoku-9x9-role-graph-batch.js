const fs = require("fs");
const path = require("path");

const SIZE = 9;
const BOX = 3;
const SYMBOLS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const TARGET_BOARD_COUNT = Number(readArg("limit") ?? 12);
const PROGRESS_EVERY = Number(readArg("progress") ?? 1);
const EXACT_DIAMETER_LIMIT = 1500;
const OUTPUT_DIR = path.join(__dirname, "data");
const VISUALIZER_DATA_DIR = path.join(__dirname, "visualizer", "data");
const OUTPUT_JSON = path.join(OUTPUT_DIR, "role-graph-batch.latest.json");
const VISUALIZER_JSON = path.join(VISUALIZER_DATA_DIR, "role-graph-batch.latest.json");
const VISUALIZER_DATA_JS = path.join(VISUALIZER_DATA_DIR, "role-graph-batch-data.js");

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

const TRADE_PLANS = [
  {
    label: "base trade 1<->4 top band",
    swaps: [
      [[0, 0], [0, 3]],
      [[1, 6], [1, 0]],
      [[2, 3], [2, 6]],
    ],
  },
  {
    label: "base trade 1<->7 top band",
    swaps: [
      [[0, 0], [0, 6]],
      [[1, 6], [1, 3]],
      [[2, 3], [2, 0]],
    ],
  },
  {
    label: "base trade 2<->5 middle band",
    swaps: [
      [[3, 0], [3, 3]],
      [[4, 6], [4, 0]],
      [[5, 3], [5, 6]],
    ],
  },
];

function readArg(name) {
  const prefix = `--${name}=`;
  const found = process.argv.find((arg) => arg.startsWith(prefix));
  return found ? found.slice(prefix.length) : null;
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

function transpose(grid) {
  return grid[0].map((_, col) => grid.map((row) => row[col]));
}

function applyAxisPermutation(grid, axis, permutation) {
  return axis === "row" ? permuteRows(grid, permutation) : permuteCols(grid, permutation);
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

function permutationKey(permutation) {
  return permutation.join("");
}

function parsePermutationKey(key) {
  return [...key].map(Number);
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

function roleGraphKey(roleGraph) {
  const edgeKey = roleGraph.edges
    .map(([a, b]) => `${a + 1}-${b + 1}`)
    .sort()
    .join(",");
  const componentKey = roleGraph.components
    .map((component) => component.map((index) => index + 1).join(""))
    .join("|");
  return `edges:${edgeKey};components:${componentKey};degrees:${roleGraph.degrees.join("")}`;
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

  for (const start of component) {
    const distances = breadthFirstDistances(start, endpoints, includeBlockSwaps, allowedKeys);
    for (const distance of distances.values()) diameter = Math.max(diameter, distance);
  }

  return diameter;
}

function summarizeComponentSizes(components) {
  const counts = new Map();
  for (const component of components) {
    counts.set(component.length, (counts.get(component.length) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([size, count]) => (count === 1 ? `${size}` : `${size}x${count}`))
    .join(",");
}

function axisProfile(grid, axis, allPermutations) {
  const endpoints = validEndpointSet(grid, axis, allPermutations);
  const identityKey = permutationKey([...Array(SIZE).keys()]);
  const roleGraph = initialRoleGraph(grid, axis);
  const singleComponents = componentProfile(endpoints, false);
  const blockComponents = componentProfile(endpoints, true);
  const singleDistances = breadthFirstDistances(identityKey, endpoints, false);
  const blockDistances = breadthFirstDistances(identityKey, endpoints, true);

  return {
    roleGraphKey: roleGraphKey(roleGraph),
    edgeCount: roleGraph.edges.length,
    componentShape: roleGraph.components.map((component) => component.length).join("+"),
    degreeSequence: [...roleGraph.degrees].sort((a, b) => b - a).join(","),
    endpointCount: endpoints.size,
    singleComponentCount: singleComponents.length,
    singleComponentSizes: summarizeComponentSizes(singleComponents),
    singleReachable: singleDistances.size,
    singleIdentityWorstCase: Math.max(...singleDistances.values()),
    singleLargestDiameter: exactDiameter(singleComponents[0], endpoints, false),
    blockComponentCount: blockComponents.length,
    blockComponentSizes: summarizeComponentSizes(blockComponents),
    blockReachable: blockDistances.size,
    blockIdentityWorstCase: Math.max(...blockDistances.values()),
    blockLargestDiameter: exactDiameter(blockComponents[0], endpoints, true),
  };
}

function boardProfile(label, grid, source, allPermutations) {
  return {
    label,
    source,
    valid: validateGrid(grid),
    row: axisProfile(grid, "row", allPermutations),
    col: axisProfile(grid, "col", allPermutations),
  };
}

function transformBaseBoards() {
  const rowPermutations = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [3, 4, 5, 6, 7, 8, 0, 1, 2],
    [6, 7, 8, 0, 1, 2, 3, 4, 5],
    [1, 2, 0, 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 4, 5, 3, 6, 7, 8],
  ];
  const colPermutations = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [3, 4, 5, 6, 7, 8, 0, 1, 2],
    [6, 7, 8, 0, 1, 2, 3, 4, 5],
    [1, 2, 0, 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 4, 5, 3, 6, 7, 8],
  ];

  const boards = [];
  for (const rowPermutation of rowPermutations) {
    for (const colPermutation of colPermutations) {
      boards.push({
        label: `base standard r${permutationKey(rowPermutation)} c${permutationKey(colPermutation)}`,
        source: "base-standard",
        grid: permuteCols(permuteRows(BASE_GRID, rowPermutation), colPermutation),
      });
    }
  }

  return boards;
}

function tradeBoards() {
  return TRADE_PLANS.map((plan) => {
    let grid = cloneGrid(BASE_GRID);
    for (const [first, second] of plan.swaps) grid = applyCellSwap(grid, first, second);
    return { label: plan.label, source: "base-trade", grid };
  });
}

function applyCellSwap(grid, first, second) {
  const next = cloneGrid(grid);
  const [r1, c1] = first;
  const [r2, c2] = second;
  [next[r1][c1], next[r2][c2]] = [next[r2][c2], next[r1][c1]];
  return next;
}

function collectBoards() {
  const seen = new Set();
  const out = [];
  const candidates = [
    { label: "cyclic base", source: "seed", grid: BASE_GRID },
    { label: "comparison", source: "seed", grid: COMPARISON_GRID },
    { label: "cyclic base transpose", source: "base-standard", grid: transpose(BASE_GRID) },
    ...transformBaseBoards(),
    ...tradeBoards(),
  ];

  for (const candidate of candidates) {
    const key = gridKey(candidate.grid);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(candidate);
    if (out.length >= TARGET_BOARD_COUNT) break;
  }

  return out;
}

function addToGroup(groups, signature, profile) {
  if (!groups.has(signature)) {
    groups.set(signature, {
      count: 0,
      labels: [],
      rowProfiles: new Set(),
      colProfiles: new Set(),
      sources: new Map(),
    });
  }

  const group = groups.get(signature);
  group.count += 1;
  if (group.labels.length < 5) group.labels.push(profile.label);
  group.rowProfiles.add(distanceProfileKey(profile.row));
  group.colProfiles.add(distanceProfileKey(profile.col));
  group.sources.set(profile.source, (group.sources.get(profile.source) ?? 0) + 1);
}

function distanceProfileKey(axisProfileData) {
  return [
    `endpoints:${axisProfileData.endpointCount}`,
    `single:${axisProfileData.singleComponentCount}/${axisProfileData.singleComponentSizes}/${axisProfileData.singleReachable}/${axisProfileData.singleIdentityWorstCase}/${axisProfileData.singleLargestDiameter}`,
    `block:${axisProfileData.blockComponentCount}/${axisProfileData.blockComponentSizes}/${axisProfileData.blockReachable}/${axisProfileData.blockIdentityWorstCase}/${axisProfileData.blockLargestDiameter}`,
  ].join(";");
}

function printGroupReport(groups) {
  console.log("");
  console.log("role graph signature groups");
  console.log(`  groups: ${groups.size}`);

  let index = 0;
  for (const [signature, group] of [...groups.entries()].sort((a, b) => b[1].count - a[1].count)) {
    index += 1;
    console.log(`  group ${index}`);
    console.log(`    boards: ${group.count}`);
    console.log(`    sources: ${JSON.stringify(Object.fromEntries(group.sources.entries()))}`);
    console.log(`    row distance profiles: ${group.rowProfiles.size}`);
    console.log(`    col distance profiles: ${group.colProfiles.size}`);
    console.log(`    examples: ${group.labels.join("; ")}`);
    console.log(`    signature: ${signature}`);
  }
}

function groupsForOutput(groups) {
  return [...groups.entries()]
    .sort((a, b) => b[1].count - a[1].count)
    .map(([signature, group]) => ({
      signature,
      count: group.count,
      examples: group.labels,
      sources: Object.fromEntries(group.sources.entries()),
      rowDistanceProfileCount: group.rowProfiles.size,
      colDistanceProfileCount: group.colProfiles.size,
      rowDistanceProfiles: [...group.rowProfiles],
      colDistanceProfiles: [...group.colProfiles],
    }));
}

function writeProgress(runState, groups) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(VISUALIZER_DATA_DIR, { recursive: true });

  const output = {
    ...runState,
    updatedAt: new Date().toISOString(),
    groups: groupsForOutput(groups),
  };

  fs.writeFileSync(OUTPUT_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(
    VISUALIZER_DATA_JS,
    `window.SUDOKU_ROLE_GRAPH_BATCH = ${JSON.stringify(output, null, 2)};\n`,
  );
}

function printProfile(profile, counter, total) {
  console.log(`processed ${counter}/${total}: ${profile.label}`);
  console.log(`  source: ${profile.source}`);
  console.log(`  row role edges: ${profile.row.edgeCount}; row components: ${profile.row.componentShape}; endpoints: ${profile.row.endpointCount}; single worst: ${profile.row.singleIdentityWorstCase}; block worst: ${profile.row.blockIdentityWorstCase}`);
  console.log(`  col role edges: ${profile.col.edgeCount}; col components: ${profile.col.componentShape}; endpoints: ${profile.col.endpointCount}; single worst: ${profile.col.singleIdentityWorstCase}; block worst: ${profile.col.blockIdentityWorstCase}`);
}

function main() {
  const allPermutations = permutations([...Array(SIZE).keys()]);
  const boards = collectBoards();
  const groups = new Map();
  let processedCount = 0;
  const runState = {
    runStartedAt: new Date().toISOString(),
    targetBoardCount: TARGET_BOARD_COUNT,
    collectedBoardCount: boards.length,
    progressEvery: PROGRESS_EVERY,
    processedCount: 0,
    complete: false,
    profiles: [],
    outputJson: OUTPUT_JSON,
    visualizerJson: VISUALIZER_JSON,
    visualizerDataJs: VISUALIZER_DATA_JS,
  };

  console.log("9x9 role graph batch test");
  console.log(`target boards: ${TARGET_BOARD_COUNT}`);
  console.log(`collected unique boards: ${boards.length}`);
  console.log(`progress interval: ${PROGRESS_EVERY}`);
  console.log("");

  for (const board of boards) {
    processedCount += 1;
    const profile = boardProfile(board.label, board.grid, board.source, allPermutations);
    const signature = `row:${profile.row.roleGraphKey} || col:${profile.col.roleGraphKey}`;
    addToGroup(groups, signature, profile);
    runState.processedCount = processedCount;
    runState.profiles.push({
      label: profile.label,
      source: profile.source,
      valid: profile.valid,
      signature,
      row: profile.row,
      col: profile.col,
    });
    writeProgress(runState, groups);

    if (processedCount <= 5 || processedCount % PROGRESS_EVERY === 0 || processedCount === boards.length) {
      printProfile(profile, processedCount, boards.length);
    }
  }

  runState.complete = true;
  writeProgress(runState, groups);
  printGroupReport(groups);
  console.log("");
  console.log("saved outputs");
  console.log(`  json: ${OUTPUT_JSON}`);
  console.log(`  visualizer json: ${VISUALIZER_JSON}`);
  console.log(`  visualizer data: ${VISUALIZER_DATA_JS}`);
}

main();
