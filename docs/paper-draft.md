# Valid and Forbidden Transformations of Completed Sudoku Boards

## Abstract

This project studies completed Sudoku boards as objects in a transformation space. We distinguish between valid transformations, where every intermediate board remains a completed Sudoku solution, and forbidden transformations, where intermediate boards may temporarily violate Sudoku constraints before returning to a valid completed board.

Initial complete enumeration of `4x4` Sudoku shows two disconnected valid-transformation families. These families are separated by row-pair and column-pair parity signatures. However, they can be bridged by two forbidden cell swaps.

For the cyclic `9x9` base grid, two forbidden cell swaps never reach a different valid completed board. A structured two-symbol trade scan finds the first nontrivial forbidden neighbors at depth `3`, through six-cell trades.

## 1. Research Question

Given two completed Sudoku boards, when can one be transformed into the other by swaps?

We study two spaces:

- **Valid-board space:** every intermediate board must be a valid completed Sudoku.
- **Forbidden space:** intermediate boards may be invalid, but the start and end boards must be valid completed Sudoku.

The central question is:

> Which structural properties prevent movement inside valid-board space, and how quickly can forbidden moves cross those boundaries?

## 2. Definitions

A completed Sudoku board is a filled grid satisfying all row, column, and box constraints.

A valid move is a transformation that maps one completed Sudoku board directly to another completed Sudoku board.

A forbidden move is a transformation step that may temporarily break Sudoku validity.

A forbidden bridge is a sequence:

```text
valid board -> invalid board(s) -> valid board
```

A row-pair parity signature compares every pair of rows as permutations of the symbols and counts how many pair mappings are even or odd. A column-pair parity signature does the same for columns.

## 3. Complete 4x4 Results

For `4x4` Sudoku with `2x2` boxes:

```text
completed grids: 288
standard symmetry families: 2
```

Family 1:

```text
size: 96
rows even:6,odd:0
cols even:6,odd:0
```

Family 2:

```text
size: 192
rows even:2,odd:4
cols even:2,odd:4
```

Under standard atomic moves:

```text
connected components: 2
component sizes: 192, 96
diameter: 4
```

Under validity-preserving row/column swaps:

```text
connected components: 2
component sizes: 192, 96
diameter: 4
```

Thus the two families remain disconnected even under looser validity-preserving row/column moves.

## 4. 4x4 Forbidden Bridges

Although the `4x4` families are disconnected in valid-board space, they are close in forbidden space.

Example:

```text
1 2 | 3 4
3 4 | 1 2
----+----
2 1 | 4 3
4 3 | 2 1
```

Swap `r1c1 <-> r1c2`, producing an invalid intermediate board:

```text
2 1 | 3 4
3 4 | 1 2
----+----
2 1 | 4 3
4 3 | 2 1
```

Then swap `r3c1 <-> r3c2`, producing a valid board in family 2:

```text
2 1 | 3 4
3 4 | 1 2
----+----
1 2 | 4 3
4 3 | 2 1
```

There are `32` two-step forbidden bridges from the family 1 representative into family 2. The bridges have balanced geometric patterns, showing that the result is not a one-off accident.

## 5. Initial 9x9 Results

For the cyclic `9x9` base grid:

```text
parity signature:
rows even:36,odd:0 | cols even:36,odd:0
```

For a comparison completed grid:

```text
parity signature:
rows even:16,odd:20 | cols even:16,odd:20
```

The cyclic base is highly regular and all-even. The comparison grid has mixed parity.

## 6. 9x9 Forbidden Neighborhood

Every two-step arbitrary cell-swap sequence from the cyclic base grid that returns to a valid completed board returns to the original grid:

```text
bridge sequences found: 2916
unique valid target boards: 1
identity status: returns to source
```

So, unlike `4x4`, the cyclic `9x9` base has no nontrivial valid target at forbidden depth `2`.

## 7. 9x9 Two-Symbol Trades

We searched for structured two-symbol trades around the cyclic base grid.

Result:

```text
total nontrivial trades: 54
unique valid target boards: 54
minimum trade size: 6 cells
minimum forbidden cell-swap depth: 3
```

Trade size distribution:

```text
6 cells: 27
12 cells: 27
```

Minimum trade shape:

```text
cells:6,rows:3,cols:3,boxes:3
rowBands:1,colStacks:3
```

Minimum digit-pair distribution:

```text
1<->4: 3
1<->7: 3
2<->5: 3
2<->8: 3
3<->6: 3
3<->9: 3
4<->7: 3
5<->8: 3
6<->9: 3
```

Every nontrivial two-symbol trade changes the parity signature:

```text
before: rows even:36,odd:0  | cols even:36,odd:0
after:  rows even:18,odd:18 | cols even:18,odd:18
```

## 8. Current Hypotheses

The row-pair and column-pair parity signature appears to be a useful invariant for classifying valid-board components.

Forbidden moves can cross valid-board boundaries, but the depth and shape of the bridge depends strongly on board size and structure.

For the cyclic `9x9` base grid, the first nontrivial forbidden neighbors appear at depth `3`, not depth `2`.

## 9. Next Work

Next experiments:

- classify the 54 `9x9` two-symbol trade targets by symmetry and swap freedom
- test whether the `18 even / 18 odd` parity signature is stable under further trades
- build a graph of `9x9` trade-neighborhoods from the cyclic base
- compare the cyclic base against less regular completed grids
- determine whether similar trade patterns exist in non-cyclic boards

