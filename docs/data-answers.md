# Data Answers

These are the current practical findings from the local scripts and generated data.

## Active Workflow

The current app workflow is:

```text
build solved board sample -> scan patterns on source boards -> inspect discoveries
```

The main commands are:

```bash
node sudoku-9x9-board-sample.js --count=100 --seed=phase-one-board-finding
node sudoku-9x9-asymmetric-sequences.js --source=sample
node serve-visualizer.js
```

Open the UI at:

```text
http://localhost:8080/visualizer/
```

## Current Source Sample

The latest solved-board sample stores `100` solved boards. The current app focuses on a smaller selected working set so scans stay inspectable on local hardware.

The visible pattern-scan snapshot currently has `3` source boards:

```text
visible sources: 3
genuine endpoints in visible sources: 83
sequence type records in visible sources: 119
```

Current selected-board scan state in the generated data:

```text
board 1:
  one-pair shuffle: complete, 0 genuine
  two-pair shuffle: complete, 15 genuine
  repeated number-pair shuffle: interrupted/stopped checkpoint, 4 genuine so far

board 2:
  one-pair shuffle: complete, 0 genuine
  two-pair shuffle: not present in current snapshot
  repeated number-pair shuffle: not present in current snapshot

board 3:
  one-pair shuffle: complete, 0 genuine
  two-pair shuffle: complete, 14 genuine
  repeated number-pair shuffle: complete, 50 genuine
```

The interrupted repeated-number checkpoint can leave a family record marked `running` even after the job control record says the job was stopped. The UI now derives display status from both sources so stopped work is not shown as completed.

## Brute Force Limits

One-pair and two-pair shuffles are practical enough for direct selected-board scans.

The raw three-pair search is not ready for broad brute force:

```text
three-pair disjoint candidates per source board: 4,868,103,240
two-pair disjoint candidates per source board: 4,991,220
three-pair is about 975x the two-pair search
```

Three-pair scans should use tightening filters before broad runs. Good candidates include row balance, column balance, box balance, number-pair repetition, and shape constraints.

Large structured shuffles should be generated from structure first. Brute forcing high-N disjoint matchings is not the practical path.

## Tightening Already Reflected In Data

The current data workflow is already tightened in several concrete ways:

- UI jobs run one selected scan family at a time.
- The scanner writes source/family checkpoint output so completed work can be reused.
- N-th pair scans use disjoint cell pairs.
- Same-value swaps are ignored as no-op moves.
- Genuine counts exclude standard Sudoku symmetry endpoints.
- The visualizer reads compact type summaries and replay examples instead of trying to render every candidate.

The next practical tightening target is three-pair search. It needs filters before broad runs because raw enumeration is too large for the current local workflow.

## Output Files

Board finding writes:

```text
data/solved-board-sample.latest.json
visualizer/data/solved-board-sample.latest.json
visualizer/data/solved-board-sample-data.js
```

Pattern finding writes:

```text
data/asymmetric-sequences.latest.json
visualizer/data/asymmetric-sequences.latest.json
visualizer/data/asymmetric-sequences-data.js
```

The local server writes job state to:

```text
data/job-status.latest.json
```

## UI State

The visualizer now leads with N-th pair shuffles, then repeated/interesting shuffles, then planned larger lanes. The high-level summary cards sit at the bottom so the first screen focuses on actions and selected-board scan cards.

Visible source board labels are intentionally short:

```text
1
2
3
```
