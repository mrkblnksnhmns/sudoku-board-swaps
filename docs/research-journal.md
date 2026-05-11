# Sudoku Board Swaps Research Journal

## Project Frame

This project began from a conversation about NP-completeness, Sudoku, and whether solved Sudoku boards are fundamentally interchangeable under swaps, in a way loosely similar to states of a Rubik's Cube.

The working research question became:

> If completed Sudoku boards are treated as objects, and swaps/relabelings are treated as moves, what patterns determine whether one board can be transformed into another?

The project studies:

- solved boards as nodes
- swaps/relabelings as edges
- connected components as structural families
- shortest paths as swap distances
- invariants as properties that prevent two boards from being connected

## Early Discussion

We first separated several Sudoku questions that are often mixed together:

- Solving a normal `9x9` Sudoku is usually fast for computers.
- Generalized Sudoku is NP-complete because the board size can grow.
- A partially filled board can have zero, one, or many solutions.
- A proper Sudoku puzzle normally means a board with exactly one solution.
- The known minimum number of clues for a uniquely solvable standard `9x9` Sudoku is `17`; no puzzle with `16` or fewer clues has a unique solution.

The conversation then shifted from solving puzzles to studying completed boards.

The initial intuition was:

> Maybe every Sudoku board is just a permutation of one base solution.

We tested that idea against the standard Sudoku symmetries:

- rename digits
- swap rows inside a band
- swap columns inside a stack
- swap whole bands
- swap whole stacks
- transpose/rotate/reflect

The known count of essentially different completed `9x9` boards shows that not all boards are interchangeable under those obvious symmetries:

```text
all completed 9x9 boards:
6,670,903,752,021,072,936,960

essentially different boards after symmetries:
5,472,730,538
```

That made the research direction sharper:

> Study the swap patterns directly, instead of assuming all boards are interchangeable.

## First 9x9 Experiment

We compared a cyclic base grid against a common completed Sudoku grid.

Cyclic base grid:

```text
1 2 3 | 4 5 6 | 7 8 9
4 5 6 | 7 8 9 | 1 2 3
7 8 9 | 1 2 3 | 4 5 6
------+-------+------
2 3 4 | 5 6 7 | 8 9 1
5 6 7 | 8 9 1 | 2 3 4
8 9 1 | 2 3 4 | 5 6 7
------+-------+------
3 4 5 | 6 7 8 | 9 1 2
6 7 8 | 9 1 2 | 3 4 5
9 1 2 | 3 4 5 | 6 7 8
```

Comparison grid:

```text
5 3 4 | 6 7 8 | 9 1 2
6 7 2 | 1 9 5 | 3 4 8
1 9 8 | 3 4 2 | 5 6 7
------+-------+------
8 5 9 | 7 6 1 | 4 2 3
4 2 6 | 8 5 3 | 7 9 1
7 1 3 | 9 2 4 | 8 5 6
------+-------+------
9 6 1 | 5 3 7 | 2 8 4
2 8 7 | 4 1 9 | 6 3 5
3 4 5 | 2 8 6 | 1 7 9
```

Current observed metrics:

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

Interpretation:

The cyclic grid has extra symmetry, especially across columns. Columns `1,4,7`, `2,5,8`, and `3,6,9` share structural roles. The comparison grid appears closer to the default symmetry floor.

## Why We Moved to 4x4

We decided to start from smaller boards because `4x4` Sudoku can be fully enumerated.

For `4x4`:

```text
board size: 4x4
box size: 2x2
symbols: 1,2,3,4
```

This lets us compute complete results rather than samples:

- all completed boards
- all symmetry families
- full swap graphs
- shortest distances
- connected components
- candidate invariants

## 4x4 Complete Enumeration

Running:

```bash
node sudoku-4x4.js
```

produces:

```text
completed 4x4 grids: 288
standard symmetry families: 2
```

Family 1 representative:

```text
1 2 | 3 4
3 4 | 1 2
----+----
2 1 | 4 3
4 3 | 2 1
```

Family 2 representative:

```text
1 2 | 3 4
3 4 | 1 2
----+----
2 3 | 4 1
4 1 | 2 3
```

Family sizes:

```text
family 1: 96
family 2: 192
```

## 4x4 Swap Graphs

We tested multiple move models.

### Standard Atomic Moves

Allowed moves:

- swap rows inside the same band
- swap columns inside the same stack
- swap row bands
- swap column stacks
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

Interpretation:

The standard moves do not connect the two families.

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

Interpretation:

This looser move model adds more edges, but still does not connect the two families.

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

Interpretation:

Single-cell swaps are too local. They break Sudoku validity unless they leave the board unchanged.

## First Candidate Invariant: Pair Parity

For every pair of rows, compare one row to another as a permutation of the symbols. That permutation is either even or odd. Do the same for every pair of columns.

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

Current hypothesis:

> Row-pair and column-pair parity are separating invariants for the two `4x4` swap components.

This is the strongest result so far.

## Forbidden Moves

We introduced the phrase "forbidden move" to mean:

> A move that is useful for transforming one completed board into another, but which temporarily breaks Sudoku validity.

Under the graph model where every node must be a valid completed board, forbidden moves are not edges.

For `4x4`, no single cell swap creates a different valid completed board. The only validity-preserving cell swaps are no-op swaps of equal symbols.

But if invalid intermediate boards are allowed, there is a two-step bridge from family 1 to family 2.

Starting board:

```text
1 2 | 3 4
3 4 | 1 2
----+----
2 1 | 4 3
4 3 | 2 1
```

Step 1:

```text
swap r1c1 <-> r1c2
```

Intermediate board:

```text
2 1 | 3 4
3 4 | 1 2
----+----
2 1 | 4 3
4 3 | 2 1
```

This is invalid because columns now contain duplicates.

Step 2:

```text
swap r3c1 <-> r3c2
```

Final board:

```text
2 1 | 3 4
3 4 | 1 2
----+----
1 2 | 4 3
4 3 | 2 1
```

This is valid and belongs to family 2.

So the current interpretation is:

> The two `4x4` families are separated inside the valid-board graph, but they are close if we allow temporarily invalid states.

This distinction matters because it tells us the separation is not about raw rearrangement difficulty. It is about the constraint that every intermediate step must remain Sudoku-valid.

## Forbidden Bridge Pattern Recognition

We then asked whether the forbidden bridge was just one lucky shortest path, or whether many bridges share recognizable structure.

For the family 1 representative, there are `32` two-step forbidden bridges into family 2.

They split evenly into four geometry patterns:

```text
same column across boxes -> same column across boxes: 8
same column inside box -> same column inside box: 8
same row across boxes -> same row across boxes: 8
same row inside box -> same row inside box: 8
```

Their invalid middle states also split evenly:

```text
rows:0,cols:2,boxes:0: 8
rows:0,cols:2,boxes:2: 8
rows:2,cols:0,boxes:0: 8
rows:2,cols:0,boxes:2: 8
```

This suggests a pattern:

> A forbidden bridge temporarily breaks one constraint direction, then repairs that same direction with a coordinated second swap.

So we are not only measuring shortest paths. We are also classifying the shape of transformations.

## Current Status

The project currently has:

- a complete `4x4` board generator
- standard symmetry family grouping
- multiple swap graph models
- shortest path and diameter computation
- a documented parity separator
- a forbidden bridge search
- preliminary `9x9` structural profiling

Current local commits:

```text
b491d30 Start sudoku board swap lab
f989821 Add 4x4 swap graph analysis
449ce13 Add 4x4 parity separator
```

## Next Research Moves

The next move is not immediately to jump to larger boards. The next move is to make the `4x4` result more rigorous.

Recommended sequence:

1. Prove computationally that each allowed move preserves the parity profile.
2. Search for other forbidden bridges and classify the invalidity patterns they use.
3. Then sample `9x9` boards and compute analogous row-pair/column-pair parity profiles.
4. Compare highly symmetric `9x9` grids against ordinary solved grids.
5. Only after that, consider `16x16`.

## Cloud / Sandbox Notes

The project currently runs locally in the Codex terminal.

Possible cloud sandbox options:

- GitHub Codespaces: best fit because the project is already on GitHub and uses Node.
- Gitpod: similar browser-based dev environment.
- Replit: simple, but less natural for Git research workflows.
- Small VPS: most flexible, more setup.

For this project, GitHub Codespaces is the recommended cloud sandbox if remote work becomes important.

## Working Principle

The core idea is:

> Do not assume boards are interchangeable. Build the graph, measure the distances, and look for invariants that explain the disconnected pieces.
