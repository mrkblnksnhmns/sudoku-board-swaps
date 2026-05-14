# Data Premise

These are the practical scan, checkpoint, UI-data, and tightening plans.

## Brute Force vs Tightening

- Which scan families are small enough to brute force directly?
- Where should the scanner stop brute forcing and start tightening with row, column, box, number-pair, or shape filters?
- Which filters are safe search gates, and which filters are only analysis labels after a candidate is found?
- Can three-pair shuffles be tightened enough to run per selected board without hiding useful asymmetric endpoints?
- For large structured shuffles, should candidates be generated from balance rules first instead of enumerating every disjoint matching?

## Real Tightening In Use

These are the tightening choices already used by the current scanner or UI workflow:

- scan only the selected board when a UI button starts a job
- split one-pair, two-pair, and repeated number-pair work into separate job families
- generate disjoint square-pair matchings so a cell is not reused inside a concrete N-th pair shuffle
- skip same-value swaps because they do not change the board
- canonicalize pair order and collapse forward/backward descriptions
- reject endpoints that are standard Sudoku symmetry copies before counting genuine discoveries
- keep only compact example sets for visual replay
- use resumable latest/checkpoint files instead of restarting completed source/family records
- keep the active UI focused on the small selected working set instead of all `100` sampled boards

## Tightening To Test Next

- Add three-pair prefilters before any broad scan.
- Use row, column, and box balance as early search gates where they are proven safe.
- Use repeated number-pair constraints when the target family is specifically a repeated number-pair shuffle.
- Track shape metadata so equivalent location patterns can merge earlier.
- Improve interrupted checkpoint handling so a stopped family cannot remain marked `running` in generated data.
- Decide which generated runtime files should be committed snapshots and which should stay local.

## Current Scan Data

- Which selected boards have complete one-pair, two-pair, and repeated number-pair scans?
- How should interrupted checkpoints be represented so the UI does not confuse stopped work with completed work?
- Which source boards produce genuine endpoints quickly, and which appear sparse under the current operation families?
- Which type signatures repeat across multiple source boards?
- How many examples should be kept per type for useful replay without making the JSON too large?

## Source Boards

- How many solved boards should stay in the local board sample while the UI focuses on a smaller working set?
- Should the next board browser show sample boards before they have scan output?
- Which board metadata best predicts whether a board will produce genuine asymmetric endpoints?
- When should standard-symmetry-equivalent sources be skipped?

## Checkpointing

- Should long scans checkpoint inside a source/family instead of only at source/family boundaries?
- How should stopped, interrupted, failed, and complete states flow into both `data/job-status.latest.json` and the family records?
- Which generated data files should be treated as committed snapshots, and which should remain local runtime state?
