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

## 4x4 Move Preservation

We checked whether each allowed move model preserves the row-pair/column-pair parity profile.

Output:

```text
move parity preservation
  standard atomic moves
    total directed moves checked: 3744
    rows even:6,odd:0 | cols even:6,odd:0 -> rows even:6,odd:0 | cols even:6,odd:0: 1248
    rows even:2,odd:4 | cols even:2,odd:4 -> rows even:2,odd:4 | cols even:2,odd:4: 2496

  validity-preserving row/column swaps
    total directed moves checked: 3936
    rows even:6,odd:0 | cols even:6,odd:0 -> rows even:6,odd:0 | cols even:6,odd:0: 1440
    rows even:2,odd:4 | cols even:2,odd:4 -> rows even:2,odd:4 | cols even:2,odd:4: 2496

  validity-preserving cell swaps
    total directed moves checked: 6912
    rows even:6,odd:0 | cols even:6,odd:0 -> rows even:6,odd:0 | cols even:6,odd:0: 2304
    rows even:2,odd:4 | cols even:2,odd:4 -> rows even:2,odd:4 | cols even:2,odd:4: 4608
```

Every checked validity-preserving move keeps the board inside the same parity profile. This supports the parity profile as a real separator.

For cell swaps, the validity-preserving cases are no-op swaps of equal symbols. They do not move to a different completed board.

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

## 4x4 Forbidden Bridge

We then allowed arbitrary individual cell swaps, even if intermediate boards are invalid.

This answers a different question:

> If we are allowed to temporarily leave the space of valid completed Sudoku boards, how quickly can we cross from one family to the other?

Output:

```text
forbidden bridge search
  move model: arbitrary single-cell swaps, invalid intermediate boards allowed
  source family: 1
  target family: 2
  shortest bridge found: 2 cell swap(s)
    1. cell r1c1<->r1c2
       valid after move: false
       parity after move: rows even:3,odd:3 | cols even:1,odd:5
    2. cell r3c1<->r3c2
       valid after move: true
       parity after move: rows even:2,odd:4 | cols even:2,odd:4
```

Starting board:

```text
1 2 | 3 4
3 4 | 1 2
----+----
2 1 | 4 3
4 3 | 2 1
```

Step 1 swaps cells `r1c1` and `r1c2`:

```text
2 1 | 3 4
3 4 | 1 2
----+----
2 1 | 4 3
4 3 | 2 1
```

This board is invalid because column 1 and column 2 now contain duplicates.

Step 2 swaps cells `r3c1` and `r3c2`:

```text
2 1 | 3 4
3 4 | 1 2
----+----
1 2 | 4 3
4 3 | 2 1
```

This board is valid and belongs to family 2.

Interpretation:

The two families are disconnected only if every intermediate board must remain a valid completed Sudoku. If invalid intermediate states are allowed, a short two-cell-swap bridge exists.

This gives a useful language:

- allowed move: keeps every intermediate board valid
- forbidden move: temporarily breaks Sudoku validity
- forbidden bridge: a sequence that crosses families by passing through invalid boards

## 4x4 Forbidden Bridge Patterns

We also counted every two-step forbidden bridge from the family 1 representative into family 2.

Output:

```text
forbidden bridge pattern summary
  source family: 1 representative
  target family: 2
  two-step forbidden bridges found: 32

  geometry patterns
    same column across boxes -> same column across boxes: 8
    same column inside box -> same column inside box: 8
    same row across boxes -> same row across boxes: 8
    same row inside box -> same row inside box: 8

  middle invalidity patterns
    rows:0,cols:2,boxes:0: 8
    rows:0,cols:2,boxes:2: 8
    rows:2,cols:0,boxes:0: 8
    rows:2,cols:0,boxes:2: 8
```

The bridge patterns are not random. They come in balanced groups:

- row-type bridges break rows in the middle
- column-type bridges break columns in the middle
- some bridges also break boxes
- every first move is repaired by a second move with the same geometry type

So the pattern is:

> Break one constraint direction, then repair that same direction in a coordinated second swap.

This is pattern recognition beyond shortest path length.

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

## 9x9 Parity Profile

We applied the `4x4` row-pair/column-pair parity idea to two completed `9x9` boards.

Output:

```text
base cyclic grid:
  parity signature: rows even:36,odd:0 | cols even:36,odd:0

comparison grid:
  parity signature: rows even:16,odd:20 | cols even:16,odd:20
```

There are `36` row pairs and `36` column pairs in a `9x9` grid.

The cyclic base grid is all-even, just like the highly regular `4x4` family 1 representative. The comparison grid has mixed parity, closer in spirit to the less regular `4x4` family 2.

This suggests that row-pair/column-pair parity may be useful beyond `4x4`, but we have not yet proven a `9x9` separation theorem.

## 9x9 Two-Step Forbidden Bridge Probe

We also tested whether the exact cyclic base grid can reach the exact comparison grid by two arbitrary cell swaps, allowing the intermediate board to be invalid.

Output:

```text
two-step forbidden bridge profile: base -> comparison
  bridges found: 0
  geometry patterns
    none
  middle invalidity patterns
    none
  examples:
    none
```

This negative result is not surprising. The two boards are structurally far apart, not merely one local repair away from each other.

The next `9x9` bridge experiment should not compare two arbitrary distant boards. It should generate boards by applying controlled forbidden two-swap patterns to the cyclic base, then test which valid boards they land on and what parity signatures they produce.

## 9x9 Local Two-Step Forbidden Neighborhood

We generated every two-step arbitrary cell-swap sequence from the cyclic base grid:

```text
valid base -> invalid middle -> valid final
```

Output:

```text
two-step forbidden neighborhood: base
  bridge sequences found: 2916
  unique valid target boards: 1

  sequence geometry patterns
    different row/column/box -> different row/column/box: 2106
    same column across boxes -> same column across boxes: 243
    same row across boxes -> same row across boxes: 243
    same box diagonal -> same box diagonal: 162
    same column inside box -> same column inside box: 81
    same row inside box -> same row inside box: 81

  sequence middle invalidity patterns
    rows:2,cols:2,boxes:2: 2106
    rows:0,cols:2,boxes:2: 243
    rows:2,cols:0,boxes:2: 243
    rows:2,cols:2,boxes:0: 162
    rows:0,cols:2,boxes:0: 81
    rows:2,cols:0,boxes:0: 81

  sequence final parity signatures
    rows even:36,odd:0 | cols even:36,odd:0: 2916

  sequence identity status
    returns to source: 2916

  unique target parity signatures
    rows even:36,odd:0 | cols even:36,odd:0: 1

  unique target identity status
    source board: 1
```

Interpretation:

Unlike `4x4`, the cyclic `9x9` base grid has no nontrivial two-step forbidden cell-swap neighbor. Every two-step sequence that returns to a valid completed board returns to the original base grid.

So the `4x4` two-step bridge pattern does not immediately scale to `9x9`.

The next local-neighborhood question is:

> What is the smallest number of forbidden cell swaps that can move the cyclic `9x9` base grid to a different valid completed board?

The obvious next probe is depth `3` or a smarter patterned depth `4`, because exhaustive depth grows quickly.
