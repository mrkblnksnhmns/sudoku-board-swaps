# Sudoku Board Swaps

This is a small Node.js lab for investigating whether completed Sudoku boards are just reshufflings of one base solution.

The current priority is arbitrary cell-piece transformations first: any cells may be swapped as pieces, but endpoints that are only standard Sudoku symmetries are classified as symmetry-equivalent rather than genuinely new.

The project studies Sudoku as a transformation space:

- completed boards are objects
- swaps and relabelings are moves
- structural fingerprints tell us which boards are more or less interchangeable

We are starting with `4x4` Sudoku because it is small enough to enumerate completely, then using the same ideas on ordinary `9x9` Sudoku.

Run:

```bash
node sudoku-4x4.js
node sudoku-9x9-valid-patterns.js
node sudoku-9x9-optimization.js
node sudoku-9x9-role-graph-batch.js
node sudoku-9x9-trade-target-batch.js
node sudoku-9x9-trade-adjacency.js
node sudoku-9x9-forbidden-neighborhood.js
node sudoku-9x9-bridge-depth.js
node sudoku-9x9-arbitrary-transformations.js
node sudoku-9x9-raw-cell-swap-depth.js
node sudoku-9x9-trades.js
node sudoku-structure.js
```

Open `visualizer/index.html` in a browser to inspect board-to-board swap sequences visually.

The visualizer now starts from the current research loop:

- compare a completed source board with a completed target board
- switch between a Sudoku-preserving path and an invalid-intermediate path when both are known
- step through the moves on the board
- track how many swaps were used and whether the current intermediate board is still valid
- click through precomputed raw cell-swap records from `data/raw-cell-swap-depth.latest.json`

For live batch updates, serve the repo over localhost and open the visualizer route:

```bash
node serve-visualizer.js
```

Then open:

```text
http://localhost:8080/visualizer/
```

The batch scripts are still useful for generating research data. The large arbitrary frontier scan is a serial checkpointed run:

```bash
node sudoku-9x9-arbitrary-transformations.js --frontier
```

It scans the seed boards plus the cyclic-base trade-target frontier and saves after each source. If the machine shuts down mid-run, starting the same job again resumes from the last completed source.

It writes its status and log tail to:

- `data/job-status.latest.json`
- `data/arbitrary-transformations.latest.json`
- `visualizer/data/arbitrary-transformations.latest.json`

After rebooting, start the server again with `node serve-visualizer.js` if you want the local job API available. The current simple visualizer does not require the batch logs to render.

Small arbitrary transformation scan:

```bash
node sudoku-9x9-arbitrary-transformations.js
```

Big frontier scan:

```bash
node sudoku-9x9-arbitrary-transformations.js --frontier
```

Outputs:

- `data/arbitrary-transformations.latest.json`
- `visualizer/data/arbitrary-transformations.latest.json`
- `visualizer/data/arbitrary-transformations-data.js`

Raw cell-swap depth scan:

```bash
node sudoku-9x9-raw-cell-swap-depth.js --source=cyclic-base --max-depth=2 --no-guided-depth3
```

This writes only genuine non-symmetry endpoints to JSONL and stores small summaries for the visualizer:

- `data/raw-cell-swap-depth.latest.json`
- `data/raw-cell-swap-depth.latest.jsonl`
- `visualizer/data/raw-cell-swap-depth.latest.json`
- `visualizer/data/raw-cell-swap-depth-data.js`

Coordinates use chess-like notation: `A1` is the top-left cell, `I9` is the bottom-right cell, and a swap is written as `A1<->D1`.

The exact depth-2 scan is practical for individual source boards. A naive exact depth-3 scan is roughly `2916` times larger than depth 2, so the script keeps depth 3 behind the guided two-symbol trade mode:

```bash
node sudoku-9x9-raw-cell-swap-depth.js --source=cyclic-base --max-depth=3 --guided-depth3
```

Run one source board at a time with `--source=cyclic-base` or `--source=comparison`. Use `--source=all` only when you deliberately want to rebuild a combined offline snapshot.

For the high-to-low visualizer ladder, the clean strict swap-set maximum is `floor(81 / 2) = 40`, meaning each cell is used at most once and one cell is left unused. The larger `choose(81, 2) = 3240` number is the distinct cell-pair ceiling if reused cells are allowed in a sequence.

Batch role-graph tests write resumable/latest output while they run:

```bash
node sudoku-9x9-role-graph-batch.js --limit=12 --progress=1
```

Outputs:

- `data/role-graph-batch.latest.json`
- `visualizer/data/role-graph-batch.latest.json`
- `visualizer/data/role-graph-batch-data.js`

The generated `visualizer/data/role-graph-batch-data.js` mirror remains available for future visualizer views or standalone inspection.

Trade target batch:

```bash
node sudoku-9x9-trade-target-batch.js
```

Small verification run:

```bash
node sudoku-9x9-trade-target-batch.js --limit=2 --no-resume
```

Outputs:

- `data/trade-target-batch.latest.json`
- `visualizer/data/trade-target-batch.latest.json`
- `visualizer/data/trade-target-batch-data.js`

Trade adjacency batch:

```bash
node sudoku-9x9-trade-adjacency.js
```

Outputs:

- `data/trade-adjacency.latest.json`
- `visualizer/data/trade-adjacency.latest.json`
- `visualizer/data/trade-adjacency-data.js`

Forbidden neighborhood batch:

```bash
node sudoku-9x9-forbidden-neighborhood.js --limit=4 --progress=1
```

Outputs:

- `data/forbidden-neighborhood.latest.json`
- `visualizer/data/forbidden-neighborhood.latest.json`
- `visualizer/data/forbidden-neighborhood-data.js`

Bridge depth batch:

```bash
node sudoku-9x9-bridge-depth.js --limit=12
```

Outputs:

- `data/bridge-depth.latest.json`
- `visualizer/data/bridge-depth.latest.json`
- `visualizer/data/bridge-depth-data.js`

See [RESULTS.md](RESULTS.md) for the current research output.

See [docs/research-journal.md](docs/research-journal.md) for the narrative research log that captures the discussion, hypotheses, experiments, and next steps.

See [docs/paper-draft.md](docs/paper-draft.md) for the working research-paper draft.

See [docs/valid-transformation-agenda.md](docs/valid-transformation-agenda.md) for the current valid-first research agenda.

See [docs/swap-pair-conventions.md](docs/swap-pair-conventions.md) for the `9x9` cell coordinate and swap-pair definitions used by the raw depth search.

## Current Questions

- How many completed boards exist at each size?
- Which boards are connected by standard Sudoku-preserving transformations?
- Which boards have extra internal swap freedom?
- What is the shortest swap distance between connected boards?
- Which invariants prevent two boards from being connected?
- What patterns distinguish highly symmetric boards from ordinary boards?
- What additional transformations would connect more board families?
- What is the smallest arbitrary cell-swap depth that reaches a genuinely non-symmetrical completed board?
- Which valid full row/column permutations can be decomposed into valid single-swap steps as a narrower comparison model?

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

`sudoku-9x9-arbitrary-transformations.js` focuses on the main transformation question: arbitrary cell-piece swaps, with standard symmetry-equivalent endpoints filtered out.

`sudoku-9x9-valid-patterns.js` focuses on a narrower valid-pattern question: which row and column permutations are reachable by single-swap steps where every intermediate board is still a completed Sudoku.

`sudoku-9x9-optimization.js` turns those valid moves into role graphs, connected components, and worst-case step counts under single-swap and block-swap move vocabularies.

`sudoku-9x9-role-graph-batch.js` runs the role-graph/distance profile over a small tracked batch of boards and reports progress counters plus signature groups.

`sudoku-9x9-trade-target-batch.js` runs the same profile over cyclic-base two-symbol trade targets. It saves after each target and resumes from the latest output by stable target ID.

`sudoku-9x9-trade-adjacency.js` takes those trade targets as sources and classifies where further structured trades land.

`sudoku-9x9-trades.js` explores structured two-symbol trades. Treat this as later/special-case work because those trades are interpreted as forbidden cell-swap bridges when decomposed into individual cell swaps.
