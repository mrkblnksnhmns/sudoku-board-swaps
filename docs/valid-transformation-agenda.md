# Arbitrary Transformation Agenda

This project will study transformations in this order:

1. Arbitrary cell-piece swaps between completed Sudoku endpoints.
2. Standard symmetry filtering.
3. Shortest swap depth to a genuinely non-symmetrical endpoint.
4. Structural patterns in the first genuine transformations.

The main transformation model is:

```text
completed board -> arbitrary cell-piece swaps -> completed board
```

Then we classify the endpoint:

```text
same by standard symmetry -> equivalent, not genuinely new
not same by standard symmetry -> genuine transformation
```

Intermediate boards may be invalid. The important condition is that the start and endpoint are completed Sudoku boards.

## Symmetries To Exclude

Standard Sudoku symmetries are not the target phenomenon. They are filtered out:

- digit renames
- row swaps inside bands
- column swaps inside stacks
- whole-band swaps
- whole-stack swaps
- transpose

## Current Primary Script

The primary script is now:

```bash
node sudoku-9x9-arbitrary-transformations.js
```

Current output:

```text
data/arbitrary-transformations.latest.json
visualizer/data/arbitrary-transformations.latest.json
visualizer/data/arbitrary-transformations-data.js
```

The current first results are:

```text
cyclic base:
  one arbitrary cell swap: no genuine target
  two arbitrary cell swaps: no genuine target
  two-symbol trades: 54 genuine targets
  minimum genuine swap depth from two-symbol trades: 3

comparison board:
  one arbitrary cell swap: no genuine target
  two arbitrary cell swaps: 6 genuine targets
```

## Next Experiments

- Expand arbitrary depth-2 scans to more source boards.
- Classify the shape of the `6` comparison-board genuine two-swap targets.
- Search for depth-3 arbitrary cell-swap targets without restricting to two-symbol trades.
- Keep row/column role graphs as a secondary comparison layer, not the main transformation definition.
