# Sudoku Board Swaps

This is a small Node.js lab for studying completed Sudoku boards as a transformation space.

The current workflow has two phases:

1. **Board finding:** generate a local sample of solved boards.
2. **Pattern finding:** scan those source boards for asymmetric shuffle patterns that end on solved boards.

The cyclic base grid is kept as baseline research, but it is not the main UI path.

The project studies Sudoku as a transformation space:

- completed boards are objects
- shuffles and relabelings are moves
- structural fingerprints tell us which boards are more or less interchangeable

Older `4x4`, cyclic-base, raw-depth, and frontier scripts remain useful as research history and comparison tools. The active app workflow is board sample first, then pattern scan.

Active workflow:

```bash
node sudoku-9x9-board-sample.js
node sudoku-9x9-asymmetric-sequences.js
```

Open `visualizer/index.html` in a browser to inspect the current research workflow:

- build solved board samples
- scan asymmetric shuffle patterns against source boards
- track checkpointed progress by shuffle type
- inspect selected discoveries with shuffle location details
- replay discovered shuffle patterns on the board

For live batch updates, serve the repo over localhost and open the visualizer route:

```bash
node serve-visualizer.js
```

Then open:

```text
http://localhost:8080/visualizer/
```

The main app buttons run:

```bash
node sudoku-9x9-board-sample.js --count=100 --seed=phase-one-board-finding
node sudoku-9x9-asymmetric-sequences.js --source=sample
```

Older batch scripts are still useful for comparison research. The large arbitrary frontier scan is a serial checkpointed run:

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

Asymmetric sequence offline scan:

First generate a local solved-board sample:

```bash
node sudoku-9x9-board-sample.js --count=100 --seed=phase-one-board-finding
```

This writes:

- `data/solved-board-sample.latest.json`
- `visualizer/data/solved-board-sample.latest.json`
- `visualizer/data/solved-board-sample-data.js`

Then run the pattern scanner against that sample:

```bash
node sudoku-9x9-asymmetric-sequences.js --source=sample
```

The first offline version separates board finding from pattern finding. The board-finding phase creates a reproducible local sample of solved boards. The pattern-finding phase scans operation families on those boards, generates only disjoint square-pair matchings, collapses forward/backward sequence descriptions, and rejects direct whole-board symmetry aggregates before counting asymmetric types.

Current shuffle names:

- **One-pair shuffle:** one square-pair trades values.
- **Two-pair shuffle:** two square-pairs trade values; four cells are touched and no cell repeats.
- **Repeated number-pair shuffle:** several square-pairs reuse the same number pair, then the scanner studies the shuffle location shape.

It is resumable at the source/family level. If the computer turns off, run the same command again and completed source/family records are reused:

```bash
node sudoku-9x9-asymmetric-sequences.js --source=sample --resume
```

By default, the scanner uses the source boards as supplied. Add `--dedupe-sources` when you deliberately want to skip sources that are standard-symmetry equivalents of an earlier source.

Small verification run:

```bash
node sudoku-9x9-asymmetric-sequences.js --source=comparison --max-exact-depth=2 --no-two-symbol-trades --no-resume
```

The `--no-two-symbol-trades` flag is the older internal name for disabling repeated number-pair shuffles.

Outputs:

- `data/asymmetric-sequences.latest.json`
- `visualizer/data/asymmetric-sequences.latest.json`
- `visualizer/data/asymmetric-sequences-data.js`

When the local visualizer server is running, the frontend can start/stop this job and poll progress from the latest checkpoint.

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

The exact depth-2 scan is practical for individual source boards. A naive exact depth-3 scan is roughly `2916` times larger than depth 2, so the older raw-depth script keeps depth 3 behind its guided repeated number-pair mode:

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

- How should we grow a local sample of solved boards without assuming all boards are reachable from one seed?
- Which source boards produce genuine asymmetric endpoints under shallow shuffle types?
- Which asymmetric type signatures repeat across unrelated solved boards?
- How much standard-symmetry deduplication should happen before pattern scans?
- Which shuffle types are useful enough to keep in the main workflow?
- Which older cyclic-base findings should stay as baseline-only research?

## Current Observations

The active workflow is now:

```text
build solved board sample -> scan patterns on source boards -> inspect discoveries
```

The visualizer intentionally focuses on this path. The cyclic base and older raw-depth outputs are not part of the main UI.

The latest local board sample stores `100` solved boards when built through the UI's `Build Boards` button. The pattern scanner is configured to use that sample by default.

## Working Notes

Primary scripts:

- `sudoku-9x9-board-sample.js`: phase 1 board finding.
- `sudoku-9x9-asymmetric-sequences.js`: phase 2 pattern finding.
- `serve-visualizer.js`: local UI server and job controls.

Baseline and historical scripts:

- `sudoku-4x4.js`: complete `4x4` enumeration and family graph work.
- `sudoku-structure.js`: early structural profiling.
- `sudoku-9x9-valid-patterns.js`: valid row/column permutation work.
- `sudoku-9x9-arbitrary-transformations.js`: older arbitrary transformation scan.
- `sudoku-9x9-raw-cell-swap-depth.js`: older raw-depth scan.
- `sudoku-9x9-trades.js` and trade batch scripts: cyclic-baseline and repeated number-pair research.
