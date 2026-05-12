# Valid Transformation Agenda

This project will study transformations in this order:

1. Valid pattern transformations.
2. Valid-board graph structure.
3. Invariants that separate valid components.
4. Forbidden or special-case bridges.

The first layer is the most important one. A valid transformation sequence is a sequence where every step is itself a completed Sudoku board:

```text
valid board -> valid board -> valid board
```

Forbidden bridges use a different rule:

```text
valid board -> invalid board(s) -> valid board
```

Those are useful later, but they should not be mixed with the first layer.

## Valid Moves To Study First

The current valid move families are:

- digit renames
- row swaps that keep the grid valid
- column swaps that keep the grid valid
- whole-band and whole-stack swaps
- transpose
- full row or column permutations whose endpoints are valid

For full row or column permutations, we should also ask whether the endpoint can be reached by a sequence of valid single swaps. A valid endpoint alone is weaker than a valid step-by-step path.

The script for this layer is:

```bash
node sudoku-9x9-valid-patterns.js
node sudoku-9x9-optimization.js
node sudoku-9x9-role-graph-batch.js
node sudoku-9x9-trade-target-batch.js
node sudoku-9x9-trade-adjacency.js
```

## Current Signals

In `4x4`, complete enumeration shows two disconnected valid-board components. The row-pair and column-pair parity signature separates them.

In `9x9`, the cyclic base grid has extra valid column freedom:

```text
base valid full-row permutations:    1296
base valid full-column permutations: 46656
```

The comparison grid has only the default freedom:

```text
comparison valid full-row permutations:    1296
comparison valid full-column permutations: 1296
```

The first stepwise-valid scan adds an important distinction:

```text
cyclic base rows:    1296 valid endpoints,   216 stepwise-valid by single row swaps
cyclic base columns: 46656 valid endpoints, 46656 stepwise-valid by single column swaps
comparison rows:     1296 valid endpoints,   216 stepwise-valid by single row swaps
comparison columns:  1296 valid endpoints,   216 stepwise-valid by single column swaps
```

So endpoint-valid and stepwise-valid are different notions. The cyclic base columns are the first case where all extra valid endpoint permutations are also reachable by valid single-swap steps.

The first optimization scan adds a worst-case step view:

```text
ordinary single-swap components: 6 components of 216 endpoints, diameter 6
ordinary + block swaps:          1 component of 1296 endpoints, diameter 8
cyclic columns, single swaps:    1 component of 46656 endpoints, identity worst-case 12
cyclic columns + block swaps:    1 component of 46656 endpoints, identity worst-case 10
```

The optimization lesson is that block swaps are not just cosmetic standard symmetries. They turn the ordinary endpoint space from disconnected under single swaps into a connected valid move space.

Batch experiments should be run through:

```bash
node sudoku-9x9-role-graph-batch.js --limit=12 --progress=1
```

The batch script writes after every processed board, so interrupted runs still leave useful data in:

```text
data/role-graph-batch.latest.json
visualizer/data/role-graph-batch.latest.json
visualizer/data/role-graph-batch-data.js
```

The visualizer loads the JavaScript snapshot when opened directly as a file. When served over localhost, it polls the JSON snapshot every few seconds.

The forbidden/special-case bridge layer starts with structured two-symbol trade targets, not arbitrary cell swaps:

```bash
node sudoku-9x9-trade-target-batch.js
```

This script uses stable trade target IDs and writes after each processed target. Restarting the same command resumes from the saved target IDs. The localhost visualizer polls:

```text
visualizer/data/trade-target-batch.latest.json
```

The next job after target profiling is adjacency:

```bash
node sudoku-9x9-trade-adjacency.js
```

It classifies additional structured trades from each trade target source and is the first pass at a directed forbidden-move graph.

The next structured batch after adjacency is the forbidden neighborhood scan:

```bash
node sudoku-9x9-forbidden-neighborhood.js --limit=4 --progress=1
```

It profiles seed boards and a small trade-target frontier, so we can compare forbidden-move neighborhoods across different board families without waiting for a large open-ended search.

The next bridge-depth probe is:

```bash
node sudoku-9x9-bridge-depth.js --limit=12
```

It checks whether any of those same sources have nontrivial two-step forbidden bridges to other valid boards. This is the first direct test of whether forbidden moves shorten a path to a valid board in the `9x9` setting.

So the next `9x9` work should classify valid pattern transformations before returning to two-symbol trades or forbidden cell-swap bridges.

## Next Valid-First Experiments

- For selected `9x9` boards, classify valid single row and column swaps as graphs on row/column indices.
- Determine which valid full row/column permutations are generated by valid single swaps.
- Compare single-swap worst-case distances with distances after adding whole-band or whole-stack macro swaps.
- Run tracked batches of completed boards and test whether the same role-graph signature predicts the same distance profile.
- Track whether parity signatures stay fixed under every valid step.
- Compare the standard symmetry orbit against the larger validity-preserving row/column orbit.
- Only after that, classify forbidden bridges and special two-symbol trades as ways to leave the valid-board graph.
