const fs = require("fs");
const path = require("path");

const SIZE = 9;
const BOX = 3;
const SYMBOLS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
const OUTPUT_JSON = path.join(OUTPUT_DIR, "arbitrary-transformations.latest.json");
const VISUALIZER_JSON = path.join(VISUALIZER_DATA_DIR, "arbitrary-transformations.latest.json");
const VISUALIZER_DATA_JS = path.join(VISUALIZER_DATA_DIR, "arbitrary-transformations-data.js");

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
    for (const a of PERMS_3) {
      for (const b of PERMS_3) {
        for (const c of PERMS_3) out.push(makeBandRespectingPermutation(bandOrder, [a, b, c]));
      }
    }
  }
  return out;
}

const BAND_RESPECTING_PERMS = allBandRespectingPermutations();

function validateGrid(grid) {
  const expected = SYMBOLS.join("");
  const sorted = (values) => [...values].sort((a, b) => a - b).join("");

  for (let index = 0; index < SIZE; index += 1) {
    if (sorted(grid[index]) !== expected) return false;
    if (sorted(grid.map((row) => row[index])) !== expected) return false;
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

function validateGridFast(grid) {
  const expected = 0b1111111110;
  const rowMasks = Array(SIZE).fill(0);
  const colMasks = Array(SIZE).fill(0);
  const boxMasks = Array(SIZE).fill(0);

  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      const bit = 1 << grid[row][col];
      const box = Math.floor(row / BOX) * BOX + Math.floor(col / BOX);
      rowMasks[row] |= bit;
      colMasks[col] |= bit;
      boxMasks[box] |= bit;
    }
  }

  return rowMasks.every((mask) => mask === expected)
    && colMasks.every((mask) => mask === expected)
    && boxMasks.every((mask) => mask === expected);
}

function cloneGrid(grid) {
  return grid.map((row) => [...row]);
}

function gridKey(grid) {
  return grid.map((row) => row.join("")).join("/");
}

function transpose(grid) {
  return grid[0].map((_, col) => grid.map((row) => row[col]));
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

function cellName(index) {
  return `r${Math.floor(index / SIZE) + 1}c${(index % SIZE) + 1}`;
}

function cellSwapMoveName(a, b) {
  return `${cellName(a)}<->${cellName(b)}`;
}

function cellSwapGeometry(a, b) {
  const first = { row: Math.floor(a / SIZE), col: a % SIZE };
  const second = { row: Math.floor(b / SIZE), col: b % SIZE };
  const sameRow = first.row === second.row;
  const sameCol = first.col === second.col;
  const sameBox = Math.floor(first.row / BOX) === Math.floor(second.row / BOX)
    && Math.floor(first.col / BOX) === Math.floor(second.col / BOX);

  if (sameRow && sameBox) return "same row inside box";
  if (sameCol && sameBox) return "same column inside box";
  if (sameRow) return "same row across boxes";
  if (sameCol) return "same column across boxes";
  if (sameBox) return "same box diagonal";
  return "different row/column/box";
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
    for (let b = a + 1; b < SIZE; b += 1) profile[parityForPair(grid, a, b)] += 1;
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

function parityAllowsSymmetry(source, target) {
  const sourceParity = parityParts(source);
  const targetParity = parityParts(target);
  const same = sourceParity.rows === targetParity.rows && sourceParity.cols === targetParity.cols;
  const transposed = sourceParity.rows === targetParity.cols && sourceParity.cols === targetParity.rows;
  return same || transposed;
}

function findStandardSymmetry(source, target) {
  for (const shouldTranspose of [false, true]) {
    const working = shouldTranspose ? transpose(source) : source;

    for (const rowPermutation of BAND_RESPECTING_PERMS) {
      for (const colPermutation of BAND_RESPECTING_PERMS) {
        const digitMap = new Map();
        const reverseDigitMap = new Map();
        let ok = true;

        for (let row = 0; row < SIZE && ok; row += 1) {
          for (let col = 0; col < SIZE; col += 1) {
            const from = working[rowPermutation[row]][colPermutation[col]];
            const to = target[row][col];

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

        if (ok) {
          return {
            transpose: shouldTranspose,
            rowPermutation: rowPermutation.map((row) => row + 1),
            colPermutation: colPermutation.map((col) => col + 1),
            digitMap: Object.fromEntries([...digitMap.entries()].sort((a, b) => a[0] - b[0])),
          };
        }
      }
    }
  }

  return null;
}

function classifyTarget(source, sourceKey, target) {
  const key = gridKey(target);
  if (key === sourceKey) return { className: "identity", symmetry: null };

  if (!parityAllowsSymmetry(source, target)) return { className: "genuine", symmetry: null };

  const symmetry = findStandardSymmetry(source, target);
  if (symmetry) return { className: "standard-symmetry", symmetry };
  return { className: "genuine", symmetry: null };
}

function countByClass(targets) {
  const counts = { identity: 0, "standard-symmetry": 0, genuine: 0 };
  for (const target of targets.values()) counts[target.className] += 1;
  return counts;
}

function collectOneSwapTargets(source) {
  const sourceKey = gridKey(source);
  const targets = new Map();

  for (let first = 0; first < SIZE * SIZE; first += 1) {
    for (let second = first + 1; second < SIZE * SIZE; second += 1) {
      const final = swapCells(source, first, second);
      if (!validateGridFast(final)) continue;

      const key = gridKey(final);
      if (!targets.has(key)) {
        const classification = classifyTarget(source, sourceKey, final);
        targets.set(key, {
          className: classification.className,
          exampleMoves: [cellSwapMoveName(first, second)],
          geometry: cellSwapGeometry(first, second),
          symmetry: classification.symmetry,
        });
      }
    }
  }

  return targets;
}

function collectTwoSwapTargets(source) {
  const sourceKey = gridKey(source);
  const targets = new Map();
  const geometryCounts = new Map();

  for (let firstA = 0; firstA < SIZE * SIZE; firstA += 1) {
    for (let firstB = firstA + 1; firstB < SIZE * SIZE; firstB += 1) {
      const middle = swapCells(source, firstA, firstB);

      for (let secondA = 0; secondA < SIZE * SIZE; secondA += 1) {
        for (let secondB = secondA + 1; secondB < SIZE * SIZE; secondB += 1) {
          const final = swapCells(middle, secondA, secondB);
          if (!validateGridFast(final)) continue;

          const key = gridKey(final);
          const geometry = `${cellSwapGeometry(firstA, firstB)} -> ${cellSwapGeometry(secondA, secondB)}`;
          geometryCounts.set(geometry, (geometryCounts.get(geometry) ?? 0) + 1);

          if (!targets.has(key)) {
            const classification = classifyTarget(source, sourceKey, final);
            targets.set(key, {
              className: classification.className,
              exampleMoves: [cellSwapMoveName(firstA, firstB), cellSwapMoveName(secondA, secondB)],
              geometry,
              symmetry: classification.symmetry,
            });
          }
        }
      }
    }
  }

  return { targets, geometryCounts };
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

function applyTwoSymbolTrade(grid, cells, firstDigit, secondDigit) {
  const next = cloneGrid(grid);
  for (const cell of cells) next[cell.row][cell.col] = cell.value === firstDigit ? secondDigit : firstDigit;
  return next;
}

function tradeSwapPlan(cells, firstDigit) {
  const firstDigitCells = cells.filter((cell) => cell.value === firstDigit);
  const secondDigitCells = cells.filter((cell) => cell.value !== firstDigit);
  return firstDigitCells.map((cell, index) => cellSwapMoveName(cell.index, secondDigitCells[index].index));
}

function scanTwoSymbolTrades(source) {
  const sourceKey = gridKey(source);
  const targets = new Map();

  for (let firstDigit = 1; firstDigit <= SIZE; firstDigit += 1) {
    for (let secondDigit = firstDigit + 1; secondDigit <= SIZE; secondDigit += 1) {
      const positions = positionsForDigits(source, firstDigit, secondDigit);
      const fullMask = (1 << positions.length) - 1;

      for (let mask = 1; mask < fullMask; mask += 1) {
        const size = bitCount(mask);
        if (size < 4 || size % 2 !== 0) continue;
        if (!isBalancedTrade(positions, mask)) continue;

        const cells = selectedCellsFromMask(positions, mask);
        const final = applyTwoSymbolTrade(source, cells, firstDigit, secondDigit);
        if (!validateGrid(final)) throw new Error(`invalid trade generated for ${firstDigit}<->${secondDigit}`);

        const key = gridKey(final);
        if (!targets.has(key)) {
          const classification = classifyTarget(source, sourceKey, final);
          targets.set(key, {
            className: classification.className,
            label: `${firstDigit}<->${secondDigit} mask ${mask}`,
            cellCount: size,
            swapDepth: size / 2,
            exampleMoves: tradeSwapPlan(cells, firstDigit),
            cells: cells.map((cell) => ({ row: cell.row + 1, col: cell.col + 1, value: cell.value })),
            grid: final,
            symmetry: classification.symmetry,
          });
        }
      }
    }
  }

  return targets;
}

function mapToSortedObject(map) {
  return Object.fromEntries([...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
}

function examplesForClass(targets, className, limit = 5) {
  return [...targets.values()]
    .filter((target) => target.className === className)
    .slice(0, limit)
    .map((target) => ({
      label: target.label ?? target.exampleMoves.join("; "),
      moves: target.exampleMoves,
      geometry: target.geometry,
      cellCount: target.cellCount,
      swapDepth: target.swapDepth,
      symmetry: target.symmetry,
      cells: target.cells,
    }));
}

function profileSource(source) {
  const sourceKey = gridKey(source.grid);
  const oneSwapTargets = collectOneSwapTargets(source.grid);
  const twoSwap = collectTwoSwapTargets(source.grid);
  const tradeTargets = source.includeTrades ? scanTwoSymbolTrades(source.grid) : new Map();

  return {
    id: source.id,
    label: source.label,
    valid: validateGrid(source.grid),
    oneSwap: {
      uniqueTargets: oneSwapTargets.size,
      classCounts: countByClass(oneSwapTargets),
      genuineExamples: examplesForClass(oneSwapTargets, "genuine"),
      symmetryExamples: examplesForClass(oneSwapTargets, "standard-symmetry"),
    },
    twoSwap: {
      uniqueTargets: twoSwap.targets.size,
      classCounts: countByClass(twoSwap.targets),
      geometryCounts: mapToSortedObject(twoSwap.geometryCounts),
      genuineExamples: examplesForClass(twoSwap.targets, "genuine"),
      symmetryExamples: examplesForClass(twoSwap.targets, "standard-symmetry"),
    },
    twoSymbolTrades: {
      scanned: source.includeTrades,
      uniqueTargets: tradeTargets.size,
      classCounts: countByClass(tradeTargets),
      minimumGenuineSwapDepth: Math.min(
        ...[...tradeTargets.values()]
          .filter((target) => target.className === "genuine")
          .map((target) => target.swapDepth),
      ),
      genuineExamples: examplesForClass(tradeTargets, "genuine"),
      symmetryExamples: examplesForClass(tradeTargets, "standard-symmetry"),
    },
    sourceKey,
  };
}

function buildSources(mode, limit) {
  const sources = [
    { id: "seed-base", label: "cyclic base", sourceKind: "seed", grid: BASE_GRID, includeTrades: true },
    { id: "seed-comparison", label: "comparison", sourceKind: "seed", grid: COMPARISON_GRID, includeTrades: false },
  ];

  if (mode !== "frontier") return sources;

  const tradeTargets = [...scanTwoSymbolTrades(BASE_GRID).values()]
    .filter((target) => target.className === "genuine")
    .sort((a, b) => a.swapDepth - b.swapDepth || a.label.localeCompare(b.label))
    .map((target, index) => ({
      id: `trade-target-${index + 1}-${target.label.replaceAll(/[^a-zA-Z0-9]+/g, "-")}`,
      label: `trade target ${index + 1}: ${target.label}`,
      sourceKind: "trade-target",
      grid: target.grid,
      includeTrades: false,
    }));

  const allSources = [...sources, ...tradeTargets];
  return Number.isFinite(limit) && limit > 0 ? allSources.slice(0, limit) : allSources;
}

function summarize(profiles) {
  return {
    sources: profiles.length,
    genuineAtOneSwap: profiles.filter((profile) => profile.oneSwap.classCounts.genuine > 0).length,
    genuineAtTwoSwaps: profiles.filter((profile) => profile.twoSwap.classCounts.genuine > 0).length,
    genuineInTwoSymbolTrades: profiles.filter((profile) => profile.twoSymbolTrades.classCounts.genuine > 0).length,
  };
}

function writeOutput(output) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(VISUALIZER_DATA_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_JSON, `${JSON.stringify(output, null, 2)}\n`);
  fs.writeFileSync(VISUALIZER_DATA_JS, `window.SUDOKU_ARBITRARY_TRANSFORMATIONS = ${JSON.stringify(output, null, 2)};\n`);
}

function loadExistingProfiles(config) {
  if (!flagEnabled("resume", true) || !fs.existsSync(OUTPUT_JSON)) return [];
  try {
    const parsed = JSON.parse(fs.readFileSync(OUTPUT_JSON, "utf8"));
    const existingConfig = parsed.config ?? {};
    const sameMode = existingConfig.sourceMode === config.sourceMode;
    const sameCount = existingConfig.sourceCount === config.sourceCount;
    return sameMode && sameCount ? parsed.profiles ?? [] : [];
  } catch {
    return [];
  }
}

function main() {
  const sourceMode = flagEnabled("frontier", false) ? "frontier" : "seed";
  const limit = Number(readArg("limit") ?? 0);
  const sources = buildSources(sourceMode, limit);
  const config = {
    sourceMode,
    sourceCount: sources.length,
    oneSwapDepth: 1,
    twoSwapDepth: 2,
    cyclicTwoSymbolTrades: true,
    resume: flagEnabled("resume", true),
  };
  const existingProfiles = loadExistingProfiles(config);
  const processedIds = new Set(existingProfiles.map((profile) => profile.id));

  const output = {
    kind: "arbitrary-transformations",
    runStartedAt: new Date().toISOString(),
    updatedAt: null,
    definition: {
      transformation: "any arbitrary cell-piece swaps that turn one completed Sudoku board into another completed Sudoku board",
      excluded: "targets reachable from the source by standard Sudoku symmetries are classified as standard-symmetry, not genuine",
      standardSymmetries: [
        "digit rename",
        "row swaps inside bands",
        "column swaps inside stacks",
        "whole-band swaps",
        "whole-stack swaps",
        "transpose",
      ],
    },
    config,
    processedCount: existingProfiles.length,
    complete: false,
    currentSource: null,
    profiles: existingProfiles,
    summary: summarize(existingProfiles),
    outputJson: OUTPUT_JSON,
    visualizerJson: VISUALIZER_JSON,
    visualizerDataJs: VISUALIZER_DATA_JS,
  };
  writeOutput(output);

  console.log("9x9 arbitrary transformation scan");
  console.log(`source mode: ${sourceMode}`);
  console.log(`source count: ${sources.length}`);
  console.log(`already processed: ${existingProfiles.length}`);
  for (let index = 0; index < sources.length; index += 1) {
    const source = sources[index];
    if (processedIds.has(source.id)) continue;

    output.currentSource = {
      index: index + 1,
      count: sources.length,
      id: source.id,
      label: source.label,
      kind: source.sourceKind,
    };
    output.updatedAt = new Date().toISOString();
    writeOutput(output);

    console.log(`scanning ${index + 1}/${sources.length}: ${source.label}`);
    const profile = profileSource(source);
    output.profiles.push(profile);
    output.processedCount = output.profiles.length;
    output.currentSource = null;
    output.updatedAt = new Date().toISOString();
    output.summary = summarize(output.profiles);
    writeOutput(output);

    console.log(`  processed ${output.processedCount}/${sources.length}`);
    console.log(`  one-swap targets: ${profile.oneSwap.uniqueTargets} ${JSON.stringify(profile.oneSwap.classCounts)}`);
    console.log(`  two-swap targets: ${profile.twoSwap.uniqueTargets} ${JSON.stringify(profile.twoSwap.classCounts)}`);
    if (source.includeTrades) {
      console.log(`  two-symbol trades: ${profile.twoSymbolTrades.uniqueTargets} ${JSON.stringify(profile.twoSymbolTrades.classCounts)}`);
      console.log(`  minimum genuine swap depth: ${profile.twoSymbolTrades.minimumGenuineSwapDepth}`);
    }
  }

  output.updatedAt = new Date().toISOString();
  output.processedCount = output.profiles.length;
  output.complete = output.processedCount >= sources.length;
  output.currentSource = null;
  output.summary = summarize(output.profiles);
  writeOutput(output);
}

main();
