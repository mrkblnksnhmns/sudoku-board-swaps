# Board Finding and Asymmetric Pattern Finding in Completed Sudoku Boards

## Abstract

This project studies completed `9x9` Sudoku boards as objects in a transformation space. The current research is split into two phases:

1. **Board finding:** create a local, reproducible sample of solved boards.
2. **Pattern finding:** scan those boards for asymmetric shuffle patterns that start and end on solved boards.

This split matters because a board that cannot be reached from one source board may still be important. Therefore, source boards are generated independently before pattern scans begin. Earlier cyclic-base experiments remain useful as baseline research, but the active workflow is no longer centered on the cyclic base board.

## 1. Current Research Question

Given a collection of solved Sudoku boards, which asymmetric shuffle patterns can move one solved board to another solved board?

The current object of study is:

```text
solved source board -> predefined shuffle pattern -> solved endpoint board
```

The endpoint is classified as:

```text
identity
standard-symmetry
genuine
```

A genuine endpoint is a solved board that is not just the same board and not a standard Sudoku symmetry copy of the source.

## 2. Phase 1: Board Finding

Board finding produces source boards for the experiment. It must not rely only on boards reachable from one starting board, because disconnected board regions would never be scanned.

The current local generator uses randomized backtracking to create completed Sudoku boards:

```bash
node sudoku-9x9-board-sample.js --count=100 --seed=phase-one-board-finding
```

The output is:

```text
data/solved-board-sample.latest.json
visualizer/data/solved-board-sample.latest.json
visualizer/data/solved-board-sample-data.js
```

Each board is:

- validated as a completed Sudoku grid
- exact-deduplicated
- sorted by cheap structural profile
- tagged with row-pair and column-pair parity profile metadata

This sample is not a complete catalog of all Sudoku boards. It is a reproducible working set that can grow over time.

## 3. Phase 2: Pattern Finding

Pattern finding scans source boards for predefined shuffle operations.

The current scanner is:

```bash
node sudoku-9x9-asymmetric-sequences.js --source=sample
```

The output is:

```text
data/asymmetric-sequences.latest.json
visualizer/data/asymmetric-sequences.latest.json
visualizer/data/asymmetric-sequences-data.js
```

The current shuffle types are:

- **One-pair shuffle:** try every single square-pair trade that changes two different numbers.
- **Two-pair shuffle:** try two square-pair trades where no square is used twice.
- **Repeated number-pair shuffle:** reuse one number pair across several shuffle locations, then classify the shuffle location shape that lets the endpoint remain solved.

The scanner is checkpointed at the source/type level. If power is lost, completed source/type records are reused when the same run starts again. An unfinished shuffle type restarts.

## 4. Asymmetric Swap Rules

The active rules are:

- A source board is a solved Sudoku grid.
- A candidate pattern may pass through invalid intermediate states.
- The endpoint must be a solved Sudoku grid.
- A cell can appear in at most one square-pair trade within a disjoint shuffle pattern.
- A forward sequence and its reverse are treated as the same pattern identity.
- Endpoints that are standard Sudoku symmetries are not counted as genuine discoveries.
- Whole-board symmetry aggregates are rejected as asymmetric discoveries.

These rules keep the experiment focused on local asymmetric patterns rather than rediscovering standard row, column, band, stack, transpose, or digit-renaming symmetries.

## 5. Current Implementation State

The current local app has two buttons:

- **Build Boards:** run the board-finding phase and write the solved-board sample.
- **Scan Patterns:** run the pattern-finding phase against the solved-board sample.

The visualizer shows:

- the selected source board
- source-level result counts
- shuffle type progress
- selected discoveries
- step-by-step board replay for a discovered shuffle pattern

The UI intentionally hides the cyclic base board. Cyclic-base work is now documented as background and later research rather than being the main visible workflow.

## 6. Current Data Snapshot

The latest board-finding sample currently stores:

```text
solved boards: 100
exact unique boards: 100
parity profile groups: 13
```

The latest completed pattern output contains preliminary seed-board results:

```text
genuine endpoints: 106
sequence type records: 134
```

Those preliminary results include cyclic-base baseline data and comparison-board data. The active UI filters out cyclic-base sources so the visible workflow stays focused on source boards from the board-finding/pattern-finding split.

## 7. Interesting Shuffle Types

### Repeated Number-Pair Shuffle

A repeated number-pair shuffle is currently the clearest example of a reusable asymmetric pattern.

Every ordinary square-pair trade exchanges two numbers. The current observation is that useful multi-shuffle discoveries often keep using the same number pair, then place those square-pairs in meaningful shuffle locations:

```text
4 -> 7
7 -> 4
```

The shuffle location shape is what makes this more interesting than the number pair alone. A strong form is balanced, where every affected row, column, and box loses and gains the same pair of numbers.

As ordinary square-pair trades, a repeated number-pair shuffle can be decomposed by size:

```text
4 selected cells  -> 2 square-pairs
6 selected cells  -> 3 square-pairs
12 selected cells -> 6 square-pairs
```

This pattern is important because it suggests that useful asymmetric transformations may be discoverable through structural constraints, especially repeated use of a number pair in specific shuffle locations, rather than only brute-force enumeration.

### Planned Three-Pair Shuffle

The next planned shuffle type is a three-pair shuffle:

```text
solved source board -> 3 disjoint square-pair trades -> solved endpoint board
```

This test should touch exactly six cells, reuse no cells, canonicalize pair order, and classify solved endpoints as identity, standard-symmetry, or genuine.

The first implementation should not try every possible long sequence blindly. It should use row/column/box balance filters, skip same-number no-op trades, checkpoint partial progress, and keep small example sets for visualization.

This is not yet a true 3-cell cycle test. A 3-cell cycle should be treated as a later, separate operation family.

## 8. Background: Cyclic Base

The cyclic base is a highly regular solved Sudoku board built by cycling the digits `1-9` through rows. It is useful as a clean baseline because its structure is easy to reason about.

Earlier observations:

- cyclic base has all-even row/column parity profile
- two arbitrary square-pair trades from the cyclic base do not reach a different solved board
- structured repeated number-pair shuffles from the cyclic base produced genuine solved endpoints at depth `3`

This is important background, but it is not the active UI path. Cyclic-base scans should be treated as a controlled baseline study.

## 9. Later Research

Next work should stay separated by phase.

Board-finding next steps:

- generate larger local samples, starting around `100` solved boards
- record exact board keys and structural profile tags
- add standard-symmetry grouping as an optional reduction pass
- keep boards even if they are not reachable from current sources

Pattern-finding next steps:

- run the current shuffle types against the local sample
- implement the planned three-pair shuffle with balance filters
- classify every discovery by number-pair repetition and shuffle location shape
- compare which source boards produce genuine endpoints quickly
- improve canonical type keys so equivalent asymmetric patterns merge cleanly
- add better resume checkpoints inside long-running shuffle types
- decide later whether to restrict the search to only disjoint or only non-equivalent board representatives

Cyclic-baseline later work:

- keep cyclic base as a separate baseline source
- study whether its repeated number-pair shuffle behavior appears in less regular boards
- compare cyclic baseline discoveries against random-sample discoveries
- avoid mixing cyclic baseline results into the main UI unless the view is explicitly labeled as baseline research

Longer-term theory questions:

- Which structural profiles predict many asymmetric endpoints?
- Which boards appear isolated under shallow disjoint swap scans?
- Do asymmetric shuffle types form reusable families across unrelated solved boards?
- Can source-board sampling and pattern scanning reveal disconnected regions of the solved-board space?
