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

const WIKI_GRID = [
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

const PERMS_3 = [
  [0, 1, 2],
  [0, 2, 1],
  [1, 0, 2],
  [1, 2, 0],
  [2, 0, 1],
  [2, 1, 0],
];

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

function makeBandRespectingPermutation(bandOrder, rowOrdersByBand) {
  const out = [];
  for (const band of bandOrder) {
    for (const row of rowOrdersByBand[band]) {
      out.push(band * 3 + row);
    }
  }
  return out;
}

function allBandRespectingPermutations() {
  const out = [];
  for (const bandOrder of PERMS_3) {
    for (const a of PERMS_3) {
      for (const b of PERMS_3) {
        for (const c of PERMS_3) {
          out.push(makeBandRespectingPermutation(bandOrder, [a, b, c]));
        }
      }
    }
  }
  return out;
}

function transpose(grid) {
  return grid[0].map((_, col) => grid.map((row) => row[col]));
}

function permuteRows(grid, permutation) {
  return permutation.map((row) => grid[row]);
}

function permuteCols(grid, permutation) {
  return grid.map((row) => permutation.map((col) => row[col]));
}

function validateGrid(grid) {
  const expected = "123456789";
  const sorted = (values) => [...values].sort((a, b) => a - b).join("");

  for (let i = 0; i < 9; i += 1) {
    if (sorted(grid[i]) !== expected) return false;
    if (sorted(grid.map((row) => row[i])) !== expected) return false;
  }

  for (let boxRow = 0; boxRow < 3; boxRow += 1) {
    for (let boxCol = 0; boxCol < 3; boxCol += 1) {
      const values = [];
      for (let row = boxRow * 3; row < boxRow * 3 + 3; row += 1) {
        for (let col = boxCol * 3; col < boxCol * 3 + 3; col += 1) {
          values.push(grid[row][col]);
        }
      }
      if (sorted(values) !== expected) return false;
    }
  }

  return true;
}

function findStandardSymmetry(source, target) {
  const rowPermutations = allBandRespectingPermutations();
  const colPermutations = rowPermutations;

  for (const shouldTranspose of [false, true]) {
    const working = shouldTranspose ? transpose(source) : source;

    for (const rowPermutation of rowPermutations) {
      for (const colPermutation of colPermutations) {
        const digitMap = new Map();
        const reverseDigitMap = new Map();
        let ok = true;

        for (let row = 0; row < 9 && ok; row += 1) {
          for (let col = 0; col < 9; col += 1) {
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
            rowPermutation,
            colPermutation,
            digitMap: Object.fromEntries([...digitMap.entries()].sort((a, b) => a[0] - b[0])),
          };
        }
      }
    }
  }

  return null;
}

function countStandardAutomorphisms(grid) {
  const rowPermutations = allBandRespectingPermutations();
  const colPermutations = rowPermutations;
  let count = 0;

  for (const shouldTranspose of [false, true]) {
    const working = shouldTranspose ? transpose(grid) : grid;

    for (const rowPermutation of rowPermutations) {
      for (const colPermutation of colPermutations) {
        const digitMap = new Map();
        const reverseDigitMap = new Map();
        let ok = true;

        for (let row = 0; row < 9 && ok; row += 1) {
          for (let col = 0; col < 9; col += 1) {
            const from = working[rowPermutation[row]][colPermutation[col]];
            const to = grid[row][col];

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

        if (ok) count += 1;
      }
    }
  }

  return count;
}

function rowShiftFingerprint(grid) {
  const firstRowPositions = new Map(grid[0].map((value, index) => [value, index]));

  return grid.map((row) => {
    const shifts = row.map((value, col) => (col - firstRowPositions.get(value) + 9) % 9);
    const uniqueShifts = [...new Set(shifts)];
    return uniqueShifts.length === 1 ? uniqueShifts[0] : "mixed";
  });
}

function bandBoxFingerprint(grid) {
  return [0, 1, 2].map((band) => {
    return [0, 1, 2].map((rowOffset) => {
      const row = band * 3 + rowOffset;
      return [0, 1, 2].map((stack) => {
        return grid[row].slice(stack * 3, stack * 3 + 3).join("");
      });
    });
  });
}

function cloneGrid(grid) {
  return grid.map((row) => [...row]);
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
  const firstRow = Math.floor(first / 9);
  const firstCol = first % 9;
  const secondRow = Math.floor(second / 9);
  const secondCol = second % 9;
  [next[firstRow][firstCol], next[secondRow][secondCol]] = [next[secondRow][secondCol], next[firstRow][firstCol]];
  return next;
}

function cellName(index) {
  return `r${Math.floor(index / 9) + 1}c${(index % 9) + 1}`;
}

function cellSwapMoveName(a, b) {
  return `cell ${cellName(a)}<->${cellName(b)}`;
}

function cellSwapGeometry(a, b) {
  const first = { row: Math.floor(a / 9), col: a % 9 };
  const second = { row: Math.floor(b / 9), col: b % 9 };
  const sameRow = first.row === second.row;
  const sameCol = first.col === second.col;
  const sameBox = Math.floor(first.row / 3) === Math.floor(second.row / 3)
    && Math.floor(first.col / 3) === Math.floor(second.col / 3);

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

  for (let a = 0; a < 9; a += 1) {
    for (let b = a + 1; b < 9; b += 1) {
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

function findValidityPreservingAtomicSwaps(grid) {
  const rowSwaps = [];
  const colSwaps = [];
  const digitSwaps = [];

  for (let a = 0; a < 9; a += 1) {
    for (let b = a + 1; b < 9; b += 1) {
      if (validateGrid(swapRows(grid, a, b))) rowSwaps.push([a + 1, b + 1]);
      if (validateGrid(swapCols(grid, a, b))) colSwaps.push([a + 1, b + 1]);
      if (validateGrid(swapDigits(grid, a + 1, b + 1))) digitSwaps.push([a + 1, b + 1]);
    }
  }

  return { rowSwaps, colSwaps, digitSwaps };
}

function invalidityProfile(grid) {
  const profile = {
    duplicateRows: 0,
    duplicateCols: 0,
    duplicateBoxes: 0,
    invalidRows: [],
    invalidCols: [],
    invalidBoxes: [],
  };

  for (let index = 0; index < 9; index += 1) {
    if (!isCompleteUnit(grid[index])) {
      profile.duplicateRows += 1;
      profile.invalidRows.push(index + 1);
    }

    const col = grid.map((row) => row[index]);
    if (!isCompleteUnit(col)) {
      profile.duplicateCols += 1;
      profile.invalidCols.push(index + 1);
    }
  }

  for (let boxRow = 0; boxRow < 9; boxRow += 3) {
    for (let boxCol = 0; boxCol < 9; boxCol += 3) {
      const values = [];
      for (let row = boxRow; row < boxRow + 3; row += 1) {
        for (let col = boxCol; col < boxCol + 3; col += 1) {
          values.push(grid[row][col]);
        }
      }
      if (!isCompleteUnit(values)) {
        profile.duplicateBoxes += 1;
        profile.invalidBoxes.push(`${boxRow / 3 + 1},${boxCol / 3 + 1}`);
      }
    }
  }

  return profile;
}

function isCompleteUnit(values) {
  return [...values].sort((a, b) => a - b).join("") === "123456789";
}

function invalidityProfileKey(profile) {
  return [
    `rows:${profile.duplicateRows}`,
    `cols:${profile.duplicateCols}`,
    `boxes:${profile.duplicateBoxes}`,
  ].join(",");
}

function countTwoStepCellSwapBridges(source, target) {
  const targetKey = gridKey(target);
  const geometryCounts = new Map();
  const invalidityCounts = new Map();
  const exampleBridges = [];
  let bridgeCount = 0;

  for (let firstA = 0; firstA < 81; firstA += 1) {
    for (let firstB = firstA + 1; firstB < 81; firstB += 1) {
      const middle = swapCells(source, firstA, firstB);
      if (validateGrid(middle)) continue;

      for (let secondA = 0; secondA < 81; secondA += 1) {
        for (let secondB = secondA + 1; secondB < 81; secondB += 1) {
          const final = swapCells(middle, secondA, secondB);
          if (gridKey(final) !== targetKey) continue;

          bridgeCount += 1;
          const geometryKey = `${cellSwapGeometry(firstA, firstB)} -> ${cellSwapGeometry(secondA, secondB)}`;
          const invalidityKey = invalidityProfileKey(invalidityProfile(middle));
          geometryCounts.set(geometryKey, (geometryCounts.get(geometryKey) ?? 0) + 1);
          invalidityCounts.set(invalidityKey, (invalidityCounts.get(invalidityKey) ?? 0) + 1);

          if (exampleBridges.length < 5) {
            exampleBridges.push({
              firstMove: cellSwapMoveName(firstA, firstB),
              secondMove: cellSwapMoveName(secondA, secondB),
              middleValid: validateGrid(middle),
              middleParity: paritySignature(middle),
              finalParity: paritySignature(final),
            });
          }
        }
      }
    }
  }

  return { bridgeCount, geometryCounts, invalidityCounts, exampleBridges };
}

function collectTwoStepForbiddenNeighborhood(source) {
  const validTargets = new Map();
  const sourceKey = gridKey(source);
  const geometryCounts = new Map();
  const invalidityCounts = new Map();
  const parityCounts = new Map();
  const identityCounts = new Map();
  const examples = [];

  for (let firstA = 0; firstA < 81; firstA += 1) {
    for (let firstB = firstA + 1; firstB < 81; firstB += 1) {
      const middle = swapCells(source, firstA, firstB);
      if (validateGrid(middle)) continue;

      for (let secondA = 0; secondA < 81; secondA += 1) {
        for (let secondB = secondA + 1; secondB < 81; secondB += 1) {
          const final = swapCells(middle, secondA, secondB);
          if (!validateGrid(final)) continue;

          const finalKey = gridKey(final);
          const geometryKey = `${cellSwapGeometry(firstA, firstB)} -> ${cellSwapGeometry(secondA, secondB)}`;
          const invalidityKey = invalidityProfileKey(invalidityProfile(middle));
          const finalParity = paritySignature(final);
          const identityStatus = finalKey === sourceKey ? "returns to source" : "different valid board";

          validTargets.set(finalKey, final);
          geometryCounts.set(geometryKey, (geometryCounts.get(geometryKey) ?? 0) + 1);
          invalidityCounts.set(invalidityKey, (invalidityCounts.get(invalidityKey) ?? 0) + 1);
          parityCounts.set(finalParity, (parityCounts.get(finalParity) ?? 0) + 1);
          identityCounts.set(identityStatus, (identityCounts.get(identityStatus) ?? 0) + 1);

          if (examples.length < 8 && finalKey !== sourceKey) {
            examples.push({
              firstMove: cellSwapMoveName(firstA, firstB),
              secondMove: cellSwapMoveName(secondA, secondB),
              geometry: geometryKey,
              middleInvalidity: invalidityKey,
              finalParity,
              identityStatus,
              final,
            });
          }
        }
      }
    }
  }

  const uniqueParityCounts = new Map();
  const uniqueIdentityCounts = new Map();
  for (const final of validTargets.values()) {
    const finalKey = gridKey(final);
    const finalParity = paritySignature(final);
    const identityStatus = finalKey === sourceKey ? "source board" : "different valid board";
    uniqueParityCounts.set(finalParity, (uniqueParityCounts.get(finalParity) ?? 0) + 1);
    uniqueIdentityCounts.set(identityStatus, (uniqueIdentityCounts.get(identityStatus) ?? 0) + 1);
  }

  return {
    bridgeCount: [...geometryCounts.values()].reduce((sum, count) => sum + count, 0),
    uniqueTargetCount: validTargets.size,
    geometryCounts,
    invalidityCounts,
    parityCounts,
    identityCounts,
    uniqueParityCounts,
    uniqueIdentityCounts,
    examples,
  };
}

function gridKey(grid) {
  return grid.map((row) => row.join("")).join("/");
}

function countValidityPreservingPermutations(grid) {
  const allPermutations = permutations([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  let rowPermutationCount = 0;
  let colPermutationCount = 0;
  const rowExamples = [];
  const colExamples = [];

  for (const permutation of allPermutations) {
    if (validateGrid(permuteRows(grid, permutation))) {
      rowPermutationCount += 1;
      if (rowExamples.length < 5) rowExamples.push(permutation.map((x) => x + 1));
    }
    if (validateGrid(permuteCols(grid, permutation))) {
      colPermutationCount += 1;
      if (colExamples.length < 5) colExamples.push(permutation.map((x) => x + 1));
    }
  }

  return {
    rowPermutationCount,
    colPermutationCount,
    rowExamples,
    colExamples,
  };
}

function summarizeAtomicSwaps(name, grid) {
  const swaps = findValidityPreservingAtomicSwaps(grid);
  console.log(`${name} validity-preserving single swaps:`);
  console.log(`  row swaps (${swaps.rowSwaps.length}): ${swaps.rowSwaps.map(([a, b]) => `${a}<->${b}`).join(", ")}`);
  console.log(`  col swaps (${swaps.colSwaps.length}): ${swaps.colSwaps.map(([a, b]) => `${a}<->${b}`).join(", ")}`);
  console.log(`  digit swaps (${swaps.digitSwaps.length}): ${swaps.digitSwaps.length} possible digit renames`);
  console.log("  row swap graph:");
  printSwapMatrix(swaps.rowSwaps);
  console.log("  column swap graph:");
  printSwapMatrix(swaps.colSwaps);
}

function summarizeStructuralProfile(name, grid) {
  const permutationCounts = countValidityPreservingPermutations(grid);
  console.log(`${name} structural profile:`);
  console.log(`  standard automorphisms: ${countStandardAutomorphisms(grid)}`);
  console.log(`  valid full-row permutations: ${permutationCounts.rowPermutationCount}`);
  console.log(`  valid full-column permutations: ${permutationCounts.colPermutationCount}`);
  console.log(`  parity signature: ${paritySignature(grid)}`);
  console.log(`  row permutation examples: ${JSON.stringify(permutationCounts.rowExamples)}`);
  console.log(`  column permutation examples: ${JSON.stringify(permutationCounts.colExamples)}`);
}

function printForbiddenBridgeProfile(sourceName, source, targetName, target) {
  console.log(`two-step forbidden bridge profile: ${sourceName} -> ${targetName}`);
  const profile = countTwoStepCellSwapBridges(source, target);
  console.log(`  bridges found: ${profile.bridgeCount}`);
  printCountMap("  geometry patterns", profile.geometryCounts);
  printCountMap("  middle invalidity patterns", profile.invalidityCounts);
  console.log("  examples:");
  if (profile.exampleBridges.length === 0) {
    console.log("    none");
  }
  for (const bridge of profile.exampleBridges) {
    console.log(`    ${bridge.firstMove}; ${bridge.secondMove}`);
    console.log(`      middle valid: ${bridge.middleValid}`);
    console.log(`      middle parity: ${bridge.middleParity}`);
    console.log(`      final parity: ${bridge.finalParity}`);
  }
}

function printForbiddenNeighborhoodProfile(name, source) {
  console.log(`two-step forbidden neighborhood: ${name}`);
  const profile = collectTwoStepForbiddenNeighborhood(source);
  console.log(`  bridge sequences found: ${profile.bridgeCount}`);
  console.log(`  unique valid target boards: ${profile.uniqueTargetCount}`);
  printCountMap("  sequence geometry patterns", profile.geometryCounts);
  printCountMap("  sequence middle invalidity patterns", profile.invalidityCounts);
  printCountMap("  sequence final parity signatures", profile.parityCounts);
  printCountMap("  sequence identity status", profile.identityCounts);
  printCountMap("  unique target parity signatures", profile.uniqueParityCounts);
  printCountMap("  unique target identity status", profile.uniqueIdentityCounts);
  console.log("  examples:");
  for (const example of profile.examples) {
    console.log(`    ${example.firstMove}; ${example.secondMove}`);
    console.log(`      geometry: ${example.geometry}`);
    console.log(`      middle invalidity: ${example.middleInvalidity}`);
    console.log(`      final parity: ${example.finalParity}`);
    console.log(`      identity status: ${example.identityStatus}`);
  }
  console.log("");
}

function printCountMap(label, map) {
  console.log(label);
  if (map.size === 0) {
    console.log("    none");
    return;
  }
  for (const [key, count] of [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))) {
    console.log(`    ${key}: ${count}`);
  }
}

function printSwapMatrix(swaps) {
  const connected = new Set(swaps.map(([a, b]) => `${a},${b}`));
  console.log("    1 2 3 | 4 5 6 | 7 8 9");
  for (let row = 1; row <= 9; row += 1) {
    const parts = [];
    for (let col = 1; col <= 9; col += 1) {
      if (col > 1 && (col - 1) % 3 === 0) parts.push("|");
      if (row === col) {
        parts.push(".");
      } else {
        const key = row < col ? `${row},${col}` : `${col},${row}`;
        parts.push(connected.has(key) ? "x" : "-");
      }
    }
    const rowPrefix = row === 4 || row === 7 ? "    ------+-------+------\n" : "";
    process.stdout.write(rowPrefix);
    console.log(`  ${row} ${parts.join(" ")}`);
  }
}

function printGrid(name, grid) {
  console.log(`${name}:`);
  for (let row = 0; row < 9; row += 1) {
    if (row > 0 && row % 3 === 0) console.log("------+-------+------");
    console.log(
      grid[row]
        .map(String)
        .reduce((parts, value, index) => {
          if (index > 0 && index % 3 === 0) parts.push("|");
          parts.push(value);
          return parts;
        }, [])
        .join(" "),
    );
  }
}

function inspectPair(sourceName, source, targetName, target) {
  console.log(`Comparing ${sourceName} -> ${targetName}`);
  console.log(`valid ${sourceName}: ${validateGrid(source)}`);
  console.log(`valid ${targetName}: ${validateGrid(target)}`);
  console.log("");

  const symmetry = findStandardSymmetry(source, target);
  if (symmetry) {
    console.log("Result: same standard symmetry family.");
    console.log(JSON.stringify(symmetry, null, 2));
  } else {
    console.log("Result: different standard symmetry families.");
    console.log("No combination of digit rename, band/stack row/column swaps, and transpose connects them.");
  }

  console.log("");
  console.log(`${sourceName} row-shift fingerprint: ${rowShiftFingerprint(source).join(", ")}`);
  console.log(`${targetName} row-shift fingerprint: ${rowShiftFingerprint(target).join(", ")}`);
  console.log("");
  console.log(`${sourceName} box chunks by band:`);
  console.log(JSON.stringify(bandBoxFingerprint(source), null, 2));
  console.log(`${targetName} box chunks by band:`);
  console.log(JSON.stringify(bandBoxFingerprint(target), null, 2));
  console.log("");
  summarizeAtomicSwaps(sourceName, source);
  summarizeAtomicSwaps(targetName, target);
  console.log("");
  summarizeStructuralProfile(sourceName, source);
  summarizeStructuralProfile(targetName, target);
  console.log("");
  printForbiddenBridgeProfile(sourceName, source, targetName, target);
  console.log("");
  printForbiddenNeighborhoodProfile(sourceName, source);
}

printGrid("Base grid", BASE_GRID);
console.log("");
printGrid("Comparison grid", WIKI_GRID);
console.log("");
inspectPair("base", BASE_GRID, "comparison", WIKI_GRID);
