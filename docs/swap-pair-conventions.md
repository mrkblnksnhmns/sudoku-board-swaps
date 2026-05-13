# 9x9 Swap Pair Conventions

This file defines the shared language for raw cell-swap searches.

## Cell Coordinates

Use chess-like coordinates:

- columns are `A` through `I`, left to right
- rows are `1` through `9`, top to bottom
- `A1` is the top-left cell
- `I9` is the bottom-right cell

The row-major cell order is:

```text
A1, B1, C1, D1, E1, F1, G1, H1, I1,
A2, B2, C2, D2, E2, F2, G2, H2, I2,
...
A9, B9, C9, D9, E9, F9, G9, H9, I9
```

## Swap Pair

A swap pair is one unordered pair of two different cells:

```text
A1<->D1
```

`A1<->D1` and `D1<->A1` mean the same swap. The canonical form always writes the earlier row-major cell first.

There are:

```text
choose(81, 2) = 3240
```

possible cell pairs on a `9x9` board.

## Effective Swap Pair

In a completed Sudoku board, each digit appears `9` times. Swapping two cells that contain the same digit does not change the board.

Same-value pairs:

```text
9 digits * choose(9, 2) = 324
```

Effective value-changing pairs:

```text
3240 total pairs - 324 same-value pairs = 2916
```

The raw search ignores same-value pairs because they are no-op moves.

## Swap Sequence

A sequence is an ordered list of canonical swap pairs:

```text
A1<->D1, G2<->A2, D3<->G3, end
```

The order matters because intermediate boards differ by order.

## Maximum Swap Counts

There are two useful maximums, depending on the rule being studied.

### Distinct Cell-Pair Sequence Ceiling

If cells may be reused, but the exact same canonical cell pair cannot repeat, the theoretical pair ceiling is:

```text
choose(81, 2) = 3240
```

This is a very large ordered-sequence space and is not the first practical scan target.

### Disjoint Swap Set Ceiling

If each cell can be used at most once in a swap set, the maximum number of swaps is:

```text
floor(81 / 2) = 40
```

This leaves one cell unused. This is the clean high-to-low depth ladder shown in the visualizer:

```text
40, 39, 38, ..., 2, 1
```

## No Cancelling Pairs

A sequence cannot use the same canonical swap pair twice.

This is forbidden:

```text
A1<->D1, A1<->D1, end
```

The second swap cancels the first one. This rule keeps `n` meaningful by preventing fake depth increases.

## Endpoint Rule

The search starts from a completed Sudoku board and applies `n` effective non-repeated cell swaps.

The endpoint is kept only if:

- the endpoint is a completed Sudoku board
- the endpoint is not the source board
- the endpoint is not equivalent to the source by standard Sudoku symmetries

Standard symmetry endpoints are counted as ignored, not kept as genuine raw records.
