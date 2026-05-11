# Sudoku Board Swaps

This is a small Node.js lab for investigating whether completed Sudoku boards are just reshufflings of one base solution.

The project studies Sudoku as a transformation space:

- completed boards are objects
- swaps and relabelings are moves
- structural fingerprints tell us which boards are more or less interchangeable

We are starting with `4x4` Sudoku because it is small enough to enumerate completely, then using the same ideas on ordinary `9x9` Sudoku.

Run:

```bash
node sudoku-4x4.js
node sudoku-structure.js
```

See [RESULTS.md](RESULTS.md) for the current research output.

See [docs/research-journal.md](docs/research-journal.md) for the narrative research log that captures the discussion, hypotheses, experiments, and next steps.

## Current Questions

- How many completed boards exist at each size?
- Which boards are connected by standard Sudoku-preserving transformations?
- Which boards have extra internal swap freedom?
- What is the shortest swap distance between connected boards?
- Which invariants prevent two boards from being connected?
- What patterns distinguish highly symmetric boards from ordinary boards?
- What additional transformations would connect more board families?

The current script compares:

- a simple cyclic base grid
- a common completed Sudoku grid with a less regular structure

It checks whether the second board can be reached from the first using the standard Sudoku-preserving symmetries:

- rename digits
- swap rows inside a 3-row band
- swap columns inside a 3-column stack
- swap whole bands
- swap whole stacks
- transpose the grid

If no combination works, the boards are in different standard symmetry families.

## Current Observations

The base cyclic board is much more symmetric than the comparison board.

For the two included boards:

| metric | base cyclic grid | comparison grid |
| --- | ---: | ---: |
| standard automorphisms | 54 | 1 |
| valid full-row permutations | 1296 | 1296 |
| valid full-column permutations | 46656 | 1296 |
| valid single row swaps | 9 | 9 |
| valid single column swaps | 18 | 9 |

The number `1296` is the ordinary/default Sudoku freedom:

```text
swap rows inside each band: 6 * 6 * 6
swap the three bands:       6
total:                      1296
```

The comparison board only has that default freedom for rows and columns.

The base board has extra column freedom. In the base board, columns can be swapped when they are:

- in the same 3-column stack, or
- in the same position inside different stacks

That second condition is the interesting one. It comes from the cyclic construction:

```text
1 2 3 | 4 5 6 | 7 8 9
4 5 6 | 7 8 9 | 1 2 3
7 8 9 | 1 2 3 | 4 5 6
```

Columns `1`, `4`, and `7` have matching structural roles. So do `2`, `5`, `8`, and `3`, `6`, `9`.

The comparison board does not share that extra column pattern.

## Working Notes

`sudoku-4x4.js` enumerates every completed `4x4` Sudoku board and groups them into standard symmetry families.

It also builds swap graphs for `4x4` boards and reports connected components, shortest-path distances, average distance, diameter, and family edge counts.

`sudoku-structure.js` profiles two completed `9x9` boards:

- a cyclic base grid
- a common completed Sudoku grid with less visible regularity

The first `9x9` observation is that the cyclic grid has extra column symmetry. The comparison grid has only the default column freedom.
