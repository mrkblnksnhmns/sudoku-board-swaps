# Theoretical Answers

These are the model-level findings that are stable enough to keep as project answers.

## Working Model

The project studies completed Sudoku boards as a transformation space:

- completed boards are objects
- shuffles and relabelings are moves
- structural fingerprints help explain which boards are more or less interchangeable

The active asymmetric-scan model is:

```text
solved source board -> predefined shuffle pattern -> solved endpoint board
```

Intermediate boards may be invalid. The endpoint must be a completed Sudoku board.

## Current Theoretical Plan

The project is not trying to prove a broad Sudoku theorem first. The current plan is to build reliable local evidence:

```text
source boards -> constrained shuffle families -> solved endpoints -> reusable type signatures
```

The working theory is that useful asymmetric transformations should show structure in their touched cells, repeated number pairs, balance profiles, or endpoint type signatures. Broad brute force is useful only while the search space is small enough to inspect.

## Future Theoretical Plan

Future work should separate three questions:

- reachability: whether one solved board can move to another under a chosen operation family
- classification: whether the operation is identity, standard symmetry, or genuine
- explanation: what structural pattern made the transformation possible

Large shuffles should be studied as structured transformations, not just high-depth brute-force results.

## Endpoint Classes

Endpoints are classified as:

```text
identity
standard-symmetry
genuine
```

A genuine endpoint is solved, is not the exact source board, and is not a standard Sudoku symmetry copy of the source.

Standard symmetries are not the target phenomenon:

- digit renames
- row swaps inside bands
- column swaps inside stacks
- whole-band swaps
- whole-stack swaps
- transpose and reflection-style equivalents covered by the checker

## What 4x4 Already Shows

Complete `4x4` Sudoku has two standard-symmetry families. Even in the small case, completed boards are not all interchangeable under the usual Sudoku-preserving moves.

Validity-preserving row, column, digit, and transpose moves do not connect those two families. The row-pair and column-pair parity profiles stayed fixed in the checked move graphs, making the parity profile a useful structural separator.

## What 9x9 Already Shows

Endpoint validity and stepwise validity are different questions. A row or column permutation can have a valid completed-board endpoint without being reachable through single valid row or column swaps at every intermediate step.

The cyclic base board is unusually regular. It is still useful as a baseline, but it should not be treated as the main visible workflow.

## N-th Pair Shuffles

An N-th pair shuffle means `N` disjoint square-pairs trade values:

- one-pair shuffle: two cells touched
- two-pair shuffle: four cells touched
- three-pair shuffle: six cells touched

Each cell can appear in at most one pair inside a disjoint shuffle. On a `9x9` board, the clean disjoint maximum is:

```text
floor(81 / 2) = 40
```

The larger cell-pair count is:

```text
choose(81, 2) = 3240
```

That number is the distinct cell-pair ceiling if reused cells are allowed; it is not the clean disjoint shuffle depth.

## Repeated Number-Pair Shuffle

A repeated number-pair shuffle reuses the same two digits across several square-pairs. The interesting part is the location shape, not just the number pair.

This category belongs outside the simple N-th pair ladder because it is a structural pattern family. It can contain different pair counts while still sharing the same repeated-number idea.

## Coordinate Convention

Cells use chess-like coordinates:

- columns are `A` through `I`, left to right
- rows are `1` through `9`, top to bottom
- `A1` is the top-left cell
- `I9` is the bottom-right cell

A swap pair is written as:

```text
A1<->D1
```

The canonical form writes the earlier row-major cell first.
