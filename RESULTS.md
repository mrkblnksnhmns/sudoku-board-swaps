# Results

This file records observations from running the scripts in this repository.

## 4x4 Complete Enumeration

Command:

```bash
node sudoku-4x4.js
```

Result:

```text
completed 4x4 grids: 288
standard symmetry families: 2
```

So `4x4` Sudoku already has more than one structural family. Even at this tiny size, completed boards are not all interchangeable under the usual Sudoku-preserving moves.

## 4x4 Families

Family 1:

```text
family size: 96
valid single row swaps: 4
valid single column swaps: 4
row-pair parity: even:6,odd:0
col-pair parity: even:6,odd:0
```

Representative:

```text
1 2 | 3 4
3 4 | 1 2
----+----
2 1 | 4 3
4 3 | 2 1
```

Family 2:

```text
family size: 192
valid single row swaps: 2
valid single column swaps: 4
row-pair parity: even:2,odd:4
col-pair parity: even:2,odd:4
```

Representative:

```text
1 2 | 3 4
3 4 | 1 2
----+----
2 3 | 4 1
4 1 | 2 3
```

## 4x4 Swap Graphs

We tested two graph models.

In both models:

- node = a completed `4x4` Sudoku board
- edge = one allowed move from one valid completed board to another
- distance = shortest number of moves between two boards

### Standard Atomic Moves

Allowed moves:

- swap rows inside the same band
- swap columns inside the same stack
- swap the two row bands
- swap the two column stacks
- swap any two digit labels
- transpose

Output:

```text
nodes: 288
edges: 1836
connected components: 2
component sizes: 192, 96
reachable pairs: 22896
average shortest swap distance: 2.639
diameter: 4
family edge counts: {"1<->1":588,"2<->2":1248}
```

The diameter is `4`, meaning any two boards in the same component can be connected in at most four standard atomic moves.

There are no `1<->2` family edges, so the two families do not connect under standard moves.

### Validity-Preserving Row/Column Swaps

Allowed moves:

- any single row swap, if the result is still a valid completed Sudoku
- any single column swap, if the result is still a valid completed Sudoku
- swap any two digit labels
- transpose

Output:

```text
nodes: 288
edges: 1944
connected components: 2
component sizes: 192, 96
reachable pairs: 22896
average shortest swap distance: 2.593
diameter: 4
family edge counts: {"1<->1":696,"2<->2":1248}
```

The looser move model adds more edges, but it still does not connect the two families.

This is the first important research signal:

> Some completed Sudoku boards remain structurally separated even when we allow every row/column swap that preserves validity at each step.

### Validity-Preserving Cell Swaps

Allowed move:

- swap any two individual cells, if the result is still a valid completed Sudoku

Output:

```text
nodes: 288
edges: 0
connected components: 288
component sizes: 1x288
reachable pairs: 0
average shortest swap distance: 0.000
diameter: 0
family edge counts: {}
```

No single cell swap connects one completed `4x4` board to another completed `4x4` board. Individual cell swaps are too local; they immediately break row, column, or box validity unless they leave the board unchanged.

## 4x4 Parity Separator

The two `4x4` families are separated by row-pair and column-pair parity.

For every pair of rows, compare one row to another as a permutation of the four symbols. That permutation is either even or odd. Do the same for column pairs.

Family 1:

```text
rows even:6,odd:0
cols even:6,odd:0
```

Family 2:

```text
rows even:2,odd:4
cols even:2,odd:4
```

This profile is constant across every member of each family.

This is the current best candidate for the invariant that keeps the two `4x4` components apart.

## 9x9 Starting Observation

Command:

```bash
node sudoku-structure.js
```

The cyclic `9x9` base grid has more internal symmetry than the comparison grid.

```text
base cyclic grid:
  standard automorphisms: 54
  valid full-row permutations: 1296
  valid full-column permutations: 46656
  valid single row swaps: 9
  valid single column swaps: 18

comparison grid:
  standard automorphisms: 1
  valid full-row permutations: 1296
  valid full-column permutations: 1296
  valid single row swaps: 9
  valid single column swaps: 9
```

The cyclic grid has extra column symmetry. The comparison grid appears closer to the default symmetry floor.
