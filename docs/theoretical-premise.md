# Theoretical Premise

These are the current and future model-level plans. They describe what the project is trying to learn, not one specific run.

## Current Plan

- Treat board finding and pattern finding as separate phases.
- Use independently generated solved boards as sources instead of assuming everything comes from one seed.
- Keep the cyclic base as a baseline, not the main UI path.
- Keep one-pair and two-pair shuffles as the shallow N-th pair lane.
- Keep repeated number-pair shuffles as a separate interesting-shuffle lane.
- Treat standard Sudoku symmetries as exclusions, not discoveries.
- Use the visualizer to inspect concrete source-board discoveries before broadening the scan.

## Future Plan

- Add a filtered three-pair shuffle scan once the tightening rules are clear.
- Build a board browser for source boards before they have scan output.
- Add a board-to-board backtracking mode for comparing two solved boards directly.
- Develop large structured shuffles from balance and shape rules rather than brute force.
- Compare whether repeated number-pair behavior appears across unrelated boards.
- Keep refining canonical type keys so equivalent asymmetric patterns merge cleanly.
- Decide later whether true shuffle-disjoint families should become a separate classification layer.

## Board Space

- Are completed Sudoku boards connected under useful local shuffle rules, or do durable structural families remain separated?
- Which invariants separate boards after standard Sudoku symmetries are removed?
- Can true shuffle-disjoint families be discovered from local scans, or do they require a separate global board-to-board search?
- How much of the observed behavior is caused by the cyclic base board being unusually regular?

## Shuffle Rules

- Which operation families are worth treating as first-class shuffles?
- Should the main model allow invalid intermediate boards as long as the endpoint is solved?
- When should a shuffle be rejected as only a disguised standard symmetry?
- Is a repeated number-pair shuffle a reusable structural idea across unrelated boards, or mostly a cyclic-base artifact?

## N-th Pair Shuffles

- Does the N-th pair ladder stay useful after two-pair scans?
- What filters make three-pair shuffles practical without erasing real discoveries?
- Are large disjoint shuffles better generated from structural rules instead of enumerating cell-pair matchings?
- Does the high-to-low disjoint limit reveal patterns that shallow N-th pair scans miss?

## Reachability

- Given two solved boards, can a small sequence of square-pair trades explain movement between them?
- Which endpoint classes are genuinely new after standard symmetry canonicalization?
- Should source boards be standard-symmetry deduped before scans, or should dedupe remain an optional comparison mode?
