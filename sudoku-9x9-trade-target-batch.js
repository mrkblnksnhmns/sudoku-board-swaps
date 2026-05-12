const fs = require("fs");
const path = require("path");

const SIZE = 9;
const BOX = 3;
const SYMBOLS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const EXACT_DIAMETER_LIMIT = 1500;
const OUTPUT_DIR = path.join(__dirname, "data");
const VISUALIZER_DATA_DIR = path.join(__dirname, "visualizer", "data");
const OUTPUT_JSON = path.join(OUTPUT_DIR, "trade-target-batch.latest.json");
const VISUALIZER_JSON = path.join(VISUALIZER_DATA_DIR, "trade-target-batch.latest.json");
const VISUALIZER_DATA_JS = path.join(VISUALIZER_DATA_DIR, "trade-target-batch-data.js");

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

function readArg(name) {
  const prefix = `--${name}=`;
  const found = process.argv.find((arg) => arg.startsWith(prefix));
  return found ? found.slice(prefix.length) : null;
}

function flagEnabled(name, defaultValue = false) {
  if (process.argv.includes(`--${name}`)) return true;
  if (process.argv.includes(`--no-${name}`)) return false;
  return defaultValue;
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
        for (let col = boxCol; col < boxCol + BOX; col += 1) values.push(grid[row][col]);
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
  const positions = new Map(grid[a].map((value, index) => [value, index + 1]));
  return permutationParity(grid[b].map((value) => positions.get(value)));
}

function colPairParity(grid, a, b) {
  const colA = grid.map((row) => row[a]);
  const colB = grid.map((row) => row[b]);
  const positions = new Map(colA.map((value, index) => [value, index + 1]));
  return permutationParity(colB.map((value) => positions.get(value)));
}

function pairParityProfile(grid, axis) {
  const parityForPair = axis === "row" ? rowPairParity : colPairParity;
  const profile = { even: 0, odd: 0 };
  for (let a = 0; a < SIZE; a += 1) {
    for (let b = a + 1; b < SIZE; b += 1) profile[parityForPair(grid, a, b)] += 1;
  }
  return profile;
}

function paritySignature(grid) {
  const rows = pairParityProfile(grid, "row");
  const cols = pairParityProfile(grid, "col");
  return `rows even:${rows.even},odd:${rows.odd} | cols even:${cols.even},odd:${cols.odd}`;
}

function validEndpointSet(grid, axis, allPermutations) {
  const endpoints = new Set();
  for (const permutation of allPermutations) {
    if (validateGrid(applyAxisPermutation(grid, axis, permutation))) endpoints.add(permutationKey(permutation));
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
  const edgeKey = roleGraph.edges.map(([a, b]) => `${a + 1}-${b + 1}`).sort().join(",");
  const componentKey = roleGraph.components.map((component) => component.map((index) => index + 1).join("")).join("|");
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
  for (const component of components) counts.set(component.length, (counts.get(component.length) ?? 0) + 1);
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

function positionsForDigits(grid, firstDigit, secondDigit) {
  const positions = [];
  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      const value = grid[row][col];
      if (value !== firstDigit && value !== secondDigit) continue;
      positions.push({
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

function applyTwoSymbolTrade(grid, cells, firstDigit, secondDigit) {
  const next = cloneGrid(grid);
  for (const cell of cells) next[cell.row][cell.col] = cell.value === firstDigit ? secondDigit : firstDigit;
  return next;
}

function tradeShape(cells) {
  return {
    cellCount: cells.length,
    rowCount: new Set(cells.map((cell) => cell.row)).size,
    colCount: new Set(cells.map((cell) => cell.col)).size,
    boxCount: new Set(cells.map((cell) => cell.box)).size,
    rowBandCount: new Set(cells.map((cell) => Math.floor(cell.row / BOX))).size,
    colStackCount: new Set(cells.map((cell) => Math.floor(cell.col / BOX))).size,
  };
}

function generateTradeTargets() {
  const targets = [];
  const seenTargets = new Set();

  for (let firstDigit = 1; firstDigit <= SIZE; firstDigit += 1) {
    for (let secondDigit = firstDigit + 1; secondDigit <= SIZE; secondDigit += 1) {
      const positions = positionsForDigits(BASE_GRID, firstDigit, secondDigit);
      const fullMask = (1 << positions.length) - 1;

      for (let mask = 1; mask < fullMask; mask += 1) {
        const size = bitCount(mask);
        if (size < 4 || size % 2 !== 0) continue;
        if (!isBalancedTrade(positions, mask)) continue;

        const cells = selectedCellsFromMask(positions, mask);
        const grid = applyTwoSymbolTrade(BASE_GRID, cells, firstDigit, secondDigit);
        if (!validateGrid(grid)) throw new Error(`invalid target for ${firstDigit}<->${secondDigit} mask ${mask}`);
        if (seenTargets.has(gridKey(grid))) continue;
        seenTargets.add(gridKey(grid));

        targets.push({
          id: `digits-${firstDigit}-${secondDigit}-mask-${mask}`,
          label: `${firstDigit}<->${secondDigit} mask ${mask}`,
          firstDigit,
          secondDigit,
          mask,
          size,
          shape: tradeShape(cells),
          cells: cells.map((cell) => ({ row: cell.row + 1, col: cell.col + 1, value: cell.value })),
          grid,
        });
      }
    }
  }

  return targets.sort((a, b) => a.size - b.size || a.firstDigit - b.firstDigit || a.secondDigit - b.secondDigit || a.mask - b.mask);
}

function loadExistingState(targetCount) {
  if (!flagEnabled("resume", true) || !fs.existsSync(OUTPUT_JSON)) return [];
  try {
    const parsed = JSON.parse(fs.readFileSync(OUTPUT_JSON, "utf8"));
    return parsed?.config?.targetCount === targetCount ? parsed.profiles ?? [] : [];
  } catch {
    return [];
  }
}

function groupsForOutput(profiles) {
  const groups = new Map();
  for (const profile of profiles) {
    if (!groups.has(profile.signature)) {
      groups.set(profile.signature, {
        signature: profile.signature,
        count: 0,
        examples: [],
        sizes: new Map(),
        paritySignatures: new Map(),
      });
    }
    const group = groups.get(profile.signature);
    group.count += 1;
    if (group.examples.length < 6) group.examples.push(profile.label);
    group.sizes.set(profile.trade.size, (group.sizes.get(profile.trade.size) ?? 0) + 1);
    group.paritySignatures.set(profile.paritySignature, (group.paritySignatures.get(profile.paritySignature) ?? 0) + 1);
  }

  return [...groups.values()]
    .sort((a, b) => b.count - a.count)
    .map((group) => ({
      signature: group.signature,
      count: group.count,
      examples: group.examples,
      sizes: Object.fromEntries([...group.sizes.entries()].sort((a, b) => Number(a[0]) - Number(b[0]))),
      paritySignatures: Object.fromEntries(group.paritySignatures.entries()),
    }));
}

function writeState(state) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(VISUALIZER_DATA_DIR, { recursive: true });
  const output = { ...state, updatedAt: new Date().toISOString(), groups: groupsForOutput(state.profiles) };
  fs.writeFileSync(OUTPUT_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_DATA_JS, `window.SUDOKU_TRADE_TARGET_BATCH = ${JSON.stringify(output, null, 2)};\n`);
}

function profileTarget(target, allPermutations) {
  const row = axisProfile(target.grid, "row", allPermutations);
  const col = axisProfile(target.grid, "col", allPermutations);
  return {
    id: target.id,
    label: target.label,
    valid: validateGrid(target.grid),
    paritySignature: paritySignature(target.grid),
    signature: `row:${row.roleGraphKey} || col:${col.roleGraphKey}`,
    trade: {
      firstDigit: target.firstDigit,
      secondDigit: target.secondDigit,
      mask: target.mask,
      size: target.size,
      shape: target.shape,
      cells: target.cells,
    },
    row,
    col,
  };
}

function main() {
  const allPermutations = permutations([...Array(SIZE).keys()]);
  const allTargets = generateTradeTargets();
  const limitArg = readArg("limit");
  const targets = limitArg ? allTargets.slice(0, Number(limitArg)) : allTargets;
  const profiles = loadExistingState(targets.length);
  const processedIds = new Set(profiles.map((profile) => profile.id));
  const state = {
    kind: "cyclic-base-two-symbol-trade-targets",
    runStartedAt: new Date().toISOString(),
    config: {
      targetCount: targets.length,
      allGeneratedTargetCount: allTargets.length,
      exactDiameterLimit: EXACT_DIAMETER_LIMIT,
      resume: flagEnabled("resume", true),
    },
    processedCount: profiles.length,
    complete: false,
    currentTarget: null,
    profiles,
    outputJson: OUTPUT_JSON,
    visualizerJson: VISUALIZER_JSON,
    visualizerDataJs: VISUALIZER_DATA_JS,
  };

  console.log("9x9 cyclic-base trade target batch");
  console.log(`generated trade targets: ${allTargets.length}`);
  console.log(`target count this run: ${targets.length}`);
  console.log(`resume enabled: ${state.config.resume}`);
  console.log(`already processed: ${profiles.length}`);
  writeState(state);

  for (let index = 0; index < targets.length; index += 1) {
    const target = targets[index];
    if (processedIds.has(target.id)) continue;

    state.currentTarget = { index: index + 1, count: targets.length, id: target.id, label: target.label };
    writeState(state);

    const profile = profileTarget(target, allPermutations);
    state.profiles.push(profile);
    processedIds.add(target.id);
    state.processedCount = state.profiles.length;
    state.currentTarget = null;
    writeState(state);

    console.log(`processed ${state.processedCount}/${targets.length}: ${profile.label}`);
    console.log(`  parity: ${profile.paritySignature}`);
    console.log(`  row edges: ${profile.row.edgeCount}; endpoints: ${profile.row.endpointCount}; single worst: ${profile.row.singleIdentityWorstCase}; block worst: ${profile.row.blockIdentityWorstCase}`);
    console.log(`  col edges: ${profile.col.edgeCount}; endpoints: ${profile.col.endpointCount}; single worst: ${profile.col.singleIdentityWorstCase}; block worst: ${profile.col.blockIdentityWorstCase}`);
  }

  state.complete = state.processedCount >= targets.length;
  state.currentTarget = null;
  writeState(state);

  console.log("");
  console.log("trade target signature groups");
  for (const [index, group] of groupsForOutput(state.profiles).entries()) {
    console.log(`  group ${index + 1}: boards=${group.count}; sizes=${JSON.stringify(group.sizes)}`);
    console.log(`    examples: ${group.examples.join("; ")}`);
  }
  console.log("");
  console.log("saved outputs");
  console.log(`  json: ${OUTPUT_JSON}`);
  console.log(`  visualizer json: ${VISUALIZER_JSON}`);
  console.log(`  visualizer data: ${VISUALIZER_DATA_JS}`);
}

main();
