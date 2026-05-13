window.SUDOKU_ARBITRARY_TRANSFORMATIONS = {
  "kind": "arbitrary-transformations",
  "runStartedAt": "2026-05-12T18:39:55.426Z",
  "updatedAt": "2026-05-12T18:39:55.437Z",
  "definition": {
    "transformation": "any arbitrary cell-piece swaps that turn one completed Sudoku board into another completed Sudoku board",
    "excluded": "targets reachable from the source by standard Sudoku symmetries are classified as standard-symmetry, not genuine",
    "standardSymmetries": [
      "digit rename",
      "row swaps inside bands",
      "column swaps inside stacks",
      "whole-band swaps",
      "whole-stack swaps",
      "transpose"
    ]
  },
  "config": {
    "sourceMode": "frontier",
    "sourceCount": 56,
    "oneSwapDepth": 1,
    "twoSwapDepth": 2,
    "cyclicTwoSymbolTrades": true,
    "resume": true
  },
  "processedCount": 0,
  "complete": false,
  "currentSource": {
    "index": 1,
    "count": 56,
    "id": "seed-base",
    "label": "cyclic base",
    "kind": "seed"
  },
  "profiles": [],
  "summary": {
    "sources": 0,
    "genuineAtOneSwap": 0,
    "genuineAtTwoSwaps": 0,
    "genuineInTwoSymbolTrades": 0
  },
  "outputJson": "/home/markblanksonhemans/projects/sudoku-board-swaps/data/arbitrary-transformations.latest.json",
  "visualizerJson": "/home/markblanksonhemans/projects/sudoku-board-swaps/visualizer/data/arbitrary-transformations.latest.json",
  "visualizerDataJs": "/home/markblanksonhemans/projects/sudoku-board-swaps/visualizer/data/arbitrary-transformations-data.js"
};
