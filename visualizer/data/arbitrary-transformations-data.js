window.SUDOKU_ARBITRARY_TRANSFORMATIONS = {
  "kind": "arbitrary-transformations",
  "runStartedAt": "2026-05-13T13:57:01.223Z",
  "updatedAt": "2026-05-13T14:08:53.163Z",
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
  "processedCount": 56,
  "complete": true,
  "currentSource": null,
  "profiles": [
    {
      "id": "seed-base",
      "label": "cyclic base",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": true,
        "uniqueTargets": 54,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 54
        },
        "minimumGenuineSwapDepth": 3,
        "genuineExamples": [
          {
            "label": "1<->4 mask 63",
            "moves": [
              "r1c1<->r1c4",
              "r2c7<->r2c1",
              "r3c4<->r3c7"
            ],
            "cellCount": 6,
            "swapDepth": 3,
            "symmetry": null,
            "cells": [
              {
                "row": 1,
                "col": 1,
                "value": 1
              },
              {
                "row": 1,
                "col": 4,
                "value": 4
              },
              {
                "row": 2,
                "col": 1,
                "value": 4
              },
              {
                "row": 2,
                "col": 7,
                "value": 1
              },
              {
                "row": 3,
                "col": 4,
                "value": 1
              },
              {
                "row": 3,
                "col": 7,
                "value": 4
              }
            ]
          },
          {
            "label": "1<->4 mask 4032",
            "moves": [
              "r4c9<->r4c3",
              "r5c6<->r5c9",
              "r6c3<->r6c6"
            ],
            "cellCount": 6,
            "swapDepth": 3,
            "symmetry": null,
            "cells": [
              {
                "row": 4,
                "col": 3,
                "value": 4
              },
              {
                "row": 4,
                "col": 9,
                "value": 1
              },
              {
                "row": 5,
                "col": 6,
                "value": 1
              },
              {
                "row": 5,
                "col": 9,
                "value": 4
              },
              {
                "row": 6,
                "col": 3,
                "value": 1
              },
              {
                "row": 6,
                "col": 6,
                "value": 4
              }
            ]
          },
          {
            "label": "1<->4 mask 4095",
            "moves": [
              "r1c1<->r1c4",
              "r2c7<->r2c1",
              "r3c4<->r3c7",
              "r4c9<->r4c3",
              "r5c6<->r5c9",
              "r6c3<->r6c6"
            ],
            "cellCount": 12,
            "swapDepth": 6,
            "symmetry": null,
            "cells": [
              {
                "row": 1,
                "col": 1,
                "value": 1
              },
              {
                "row": 1,
                "col": 4,
                "value": 4
              },
              {
                "row": 2,
                "col": 1,
                "value": 4
              },
              {
                "row": 2,
                "col": 7,
                "value": 1
              },
              {
                "row": 3,
                "col": 4,
                "value": 1
              },
              {
                "row": 3,
                "col": 7,
                "value": 4
              },
              {
                "row": 4,
                "col": 3,
                "value": 4
              },
              {
                "row": 4,
                "col": 9,
                "value": 1
              },
              {
                "row": 5,
                "col": 6,
                "value": 1
              },
              {
                "row": 5,
                "col": 9,
                "value": 4
              },
              {
                "row": 6,
                "col": 3,
                "value": 1
              },
              {
                "row": 6,
                "col": 6,
                "value": 4
              }
            ]
          },
          {
            "label": "1<->4 mask 258048",
            "moves": [
              "r7c8<->r7c2",
              "r8c5<->r8c8",
              "r9c2<->r9c5"
            ],
            "cellCount": 6,
            "swapDepth": 3,
            "symmetry": null,
            "cells": [
              {
                "row": 7,
                "col": 2,
                "value": 4
              },
              {
                "row": 7,
                "col": 8,
                "value": 1
              },
              {
                "row": 8,
                "col": 5,
                "value": 1
              },
              {
                "row": 8,
                "col": 8,
                "value": 4
              },
              {
                "row": 9,
                "col": 2,
                "value": 1
              },
              {
                "row": 9,
                "col": 5,
                "value": 4
              }
            ]
          },
          {
            "label": "1<->4 mask 258111",
            "moves": [
              "r1c1<->r1c4",
              "r2c7<->r2c1",
              "r3c4<->r3c7",
              "r7c8<->r7c2",
              "r8c5<->r8c8",
              "r9c2<->r9c5"
            ],
            "cellCount": 12,
            "swapDepth": 6,
            "symmetry": null,
            "cells": [
              {
                "row": 1,
                "col": 1,
                "value": 1
              },
              {
                "row": 1,
                "col": 4,
                "value": 4
              },
              {
                "row": 2,
                "col": 1,
                "value": 4
              },
              {
                "row": 2,
                "col": 7,
                "value": 1
              },
              {
                "row": 3,
                "col": 4,
                "value": 1
              },
              {
                "row": 3,
                "col": 7,
                "value": 4
              },
              {
                "row": 7,
                "col": 2,
                "value": 4
              },
              {
                "row": 7,
                "col": 8,
                "value": 1
              },
              {
                "row": 8,
                "col": 5,
                "value": 1
              },
              {
                "row": 8,
                "col": 8,
                "value": 4
              },
              {
                "row": 9,
                "col": 2,
                "value": 1
              },
              {
                "row": 9,
                "col": 5,
                "value": 4
              }
            ]
          }
        ],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234567891/567891234/891234567/345678912/678912345/912345678"
    },
    {
      "id": "seed-comparison",
      "label": "comparison",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 7,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 6
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 251,
          "same row across boxes -> same row across boxes": 247,
          "same box diagonal -> same box diagonal": 162,
          "same row inside box -> same row inside box": 89,
          "same column inside box -> same column inside box": 85
        },
        "genuineExamples": [
          {
            "label": "r1c4<->r1c5; r4c4<->r4c5",
            "moves": [
              "r1c4<->r1c5",
              "r4c4<->r4c5"
            ],
            "geometry": "same row inside box -> same row inside box",
            "symmetry": null
          },
          {
            "label": "r2c8<->r2c9; r7c8<->r7c9",
            "moves": [
              "r2c8<->r2c9",
              "r7c8<->r7c9"
            ],
            "geometry": "same row inside box -> same row inside box",
            "symmetry": null
          },
          {
            "label": "r3c5<->r3c6; r6c5<->r6c6",
            "moves": [
              "r3c5<->r3c6",
              "r6c5<->r6c6"
            ],
            "geometry": "same row inside box -> same row inside box",
            "symmetry": null
          },
          {
            "label": "r4c6<->r4c9; r5c6<->r5c9",
            "moves": [
              "r4c6<->r4c9",
              "r5c6<->r5c9"
            ],
            "geometry": "same row across boxes -> same row across boxes",
            "symmetry": null
          },
          {
            "label": "r6c4<->r6c6; r8c4<->r8c6",
            "moves": [
              "r6c4<->r6c6",
              "r8c4<->r8c6"
            ],
            "geometry": "same row inside box -> same row inside box",
            "symmetry": null
          }
        ],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "534678912/672195348/198342567/859761423/426853791/713924856/961537284/287419635/345286179"
    },
    {
      "id": "trade-target-1-1-4-mask-258048",
      "label": "trade target 1: 1<->4 mask 258048",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234567891/567891234/891234567/315678942/678942315/942315678"
    },
    {
      "id": "trade-target-2-1-4-mask-4032",
      "label": "trade target 2: 1<->4 mask 4032",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/231567894/567894231/894231567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-3-1-4-mask-63",
      "label": "trade target 3: 1<->4 mask 63",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "423156789/156789423/789423156/234567891/567891234/891234567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-4-1-7-mask-258048",
      "label": "trade target 4: 1<->7 mask 258048",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234567891/567891234/891234567/345618972/618972345/972345618"
    },
    {
      "id": "trade-target-5-1-7-mask-4032",
      "label": "trade target 5: 1<->7 mask 4032",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234561897/561897234/897234561/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-6-1-7-mask-63",
      "label": "trade target 6: 1<->7 mask 63",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "723456189/456189723/189723456/234567891/567891234/891234567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-7-2-5-mask-258048",
      "label": "trade target 7: 2<->5 mask 258048",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234567891/567891234/891234567/342678915/678915342/915342678"
    },
    {
      "id": "trade-target-8-2-5-mask-4032",
      "label": "trade target 8: 2<->5 mask 4032",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/534267891/267891534/891534267/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-9-2-5-mask-63",
      "label": "trade target 9: 2<->5 mask 63",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "153426789/426789153/789153426/234567891/567891234/891234567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-10-2-8-mask-258048",
      "label": "trade target 10: 2<->8 mask 258048",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234567891/567891234/891234567/345672918/672918345/918345672"
    },
    {
      "id": "trade-target-11-2-8-mask-4032",
      "label": "trade target 11: 2<->8 mask 4032",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/834567291/567291834/291834567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-12-2-8-mask-63",
      "label": "trade target 12: 2<->8 mask 63",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "183456729/456729183/729183456/234567891/567891234/891234567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-13-3-6-mask-258048",
      "label": "trade target 13: 3<->6 mask 258048",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234567891/567891234/891234567/645378912/378912645/912645378"
    },
    {
      "id": "trade-target-14-3-6-mask-4032",
      "label": "trade target 14: 3<->6 mask 4032",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/264537891/537891264/891264537/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-15-3-6-mask-63",
      "label": "trade target 15: 3<->6 mask 63",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "126453789/453789126/789126453/234567891/567891234/891234567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-16-3-9-mask-258048",
      "label": "trade target 16: 3<->9 mask 258048",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234567891/567891234/891234567/945678312/678312945/312945678"
    },
    {
      "id": "trade-target-17-3-9-mask-4032",
      "label": "trade target 17: 3<->9 mask 4032",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/294567831/567831294/831294567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-18-3-9-mask-63",
      "label": "trade target 18: 3<->9 mask 63",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "129456783/456783129/783129456/234567891/567891234/891234567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-19-4-7-mask-258048",
      "label": "trade target 19: 4<->7 mask 258048",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234567891/567891234/891234567/375648912/648912375/912375648"
    },
    {
      "id": "trade-target-20-4-7-mask-4032",
      "label": "trade target 20: 4<->7 mask 4032",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/237564891/564891237/891237564/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-21-4-7-mask-63",
      "label": "trade target 21: 4<->7 mask 63",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123756489/756489123/489123756/234567891/567891234/891234567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-22-5-8-mask-258048",
      "label": "trade target 22: 5<->8 mask 258048",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234567891/567891234/891234567/348675912/675912348/912348675"
    },
    {
      "id": "trade-target-23-5-8-mask-4032",
      "label": "trade target 23: 5<->8 mask 4032",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234867591/867591234/591234867/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-24-5-8-mask-63",
      "label": "trade target 24: 5<->8 mask 63",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123486759/486759123/759123486/234567891/567891234/891234567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-25-6-9-mask-258048",
      "label": "trade target 25: 6<->9 mask 258048",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234567891/567891234/891234567/345978612/978612345/612345978"
    },
    {
      "id": "trade-target-26-6-9-mask-4032",
      "label": "trade target 26: 6<->9 mask 4032",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234597861/597861234/861234597/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-27-6-9-mask-63",
      "label": "trade target 27: 6<->9 mask 63",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123459786/459786123/786123459/234567891/567891234/891234567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-28-1-4-mask-258111",
      "label": "trade target 28: 1<->4 mask 258111",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "423156789/156789423/789423156/234567891/567891234/891234567/315678942/678942315/942315678"
    },
    {
      "id": "trade-target-29-1-4-mask-262080",
      "label": "trade target 29: 1<->4 mask 262080",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/231567894/567894231/894231567/315678942/678942315/942315678"
    },
    {
      "id": "trade-target-30-1-4-mask-4095",
      "label": "trade target 30: 1<->4 mask 4095",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "423156789/156789423/789423156/231567894/567894231/894231567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-31-1-7-mask-258111",
      "label": "trade target 31: 1<->7 mask 258111",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "723456189/456189723/189723456/234567891/567891234/891234567/345618972/618972345/972345618"
    },
    {
      "id": "trade-target-32-1-7-mask-262080",
      "label": "trade target 32: 1<->7 mask 262080",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234561897/561897234/897234561/345618972/618972345/972345618"
    },
    {
      "id": "trade-target-33-1-7-mask-4095",
      "label": "trade target 33: 1<->7 mask 4095",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "723456189/456189723/189723456/234561897/561897234/897234561/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-34-2-5-mask-258111",
      "label": "trade target 34: 2<->5 mask 258111",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "153426789/426789153/789153426/234567891/567891234/891234567/342678915/678915342/915342678"
    },
    {
      "id": "trade-target-35-2-5-mask-262080",
      "label": "trade target 35: 2<->5 mask 262080",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/534267891/267891534/891534267/342678915/678915342/915342678"
    },
    {
      "id": "trade-target-36-2-5-mask-4095",
      "label": "trade target 36: 2<->5 mask 4095",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "153426789/426789153/789153426/534267891/267891534/891534267/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-37-2-8-mask-258111",
      "label": "trade target 37: 2<->8 mask 258111",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "183456729/456729183/729183456/234567891/567891234/891234567/345672918/672918345/918345672"
    },
    {
      "id": "trade-target-38-2-8-mask-262080",
      "label": "trade target 38: 2<->8 mask 262080",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/834567291/567291834/291834567/345672918/672918345/918345672"
    },
    {
      "id": "trade-target-39-2-8-mask-4095",
      "label": "trade target 39: 2<->8 mask 4095",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "183456729/456729183/729183456/834567291/567291834/291834567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-40-3-6-mask-258111",
      "label": "trade target 40: 3<->6 mask 258111",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "126453789/453789126/789126453/234567891/567891234/891234567/645378912/378912645/912645378"
    },
    {
      "id": "trade-target-41-3-6-mask-262080",
      "label": "trade target 41: 3<->6 mask 262080",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/264537891/537891264/891264537/645378912/378912645/912645378"
    },
    {
      "id": "trade-target-42-3-6-mask-4095",
      "label": "trade target 42: 3<->6 mask 4095",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "126453789/453789126/789126453/264537891/537891264/891264537/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-43-3-9-mask-258111",
      "label": "trade target 43: 3<->9 mask 258111",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "129456783/456783129/783129456/234567891/567891234/891234567/945678312/678312945/312945678"
    },
    {
      "id": "trade-target-44-3-9-mask-262080",
      "label": "trade target 44: 3<->9 mask 262080",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/294567831/567831294/831294567/945678312/678312945/312945678"
    },
    {
      "id": "trade-target-45-3-9-mask-4095",
      "label": "trade target 45: 3<->9 mask 4095",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "129456783/456783129/783129456/294567831/567831294/831294567/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-46-4-7-mask-258111",
      "label": "trade target 46: 4<->7 mask 258111",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123756489/756489123/489123756/234567891/567891234/891234567/375648912/648912375/912375648"
    },
    {
      "id": "trade-target-47-4-7-mask-262080",
      "label": "trade target 47: 4<->7 mask 262080",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/237564891/564891237/891237564/375648912/648912375/912375648"
    },
    {
      "id": "trade-target-48-4-7-mask-4095",
      "label": "trade target 48: 4<->7 mask 4095",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123756489/756489123/489123756/237564891/564891237/891237564/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-49-5-8-mask-258111",
      "label": "trade target 49: 5<->8 mask 258111",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123486759/486759123/759123486/234567891/567891234/891234567/348675912/675912348/912348675"
    },
    {
      "id": "trade-target-50-5-8-mask-262080",
      "label": "trade target 50: 5<->8 mask 262080",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234867591/867591234/591234867/348675912/675912348/912348675"
    },
    {
      "id": "trade-target-51-5-8-mask-4095",
      "label": "trade target 51: 5<->8 mask 4095",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123486759/486759123/759123486/234867591/867591234/591234867/345678912/678912345/912345678"
    },
    {
      "id": "trade-target-52-6-9-mask-258111",
      "label": "trade target 52: 6<->9 mask 258111",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123459786/459786123/786123459/234567891/567891234/891234567/345978612/978612345/612345978"
    },
    {
      "id": "trade-target-53-6-9-mask-262080",
      "label": "trade target 53: 6<->9 mask 262080",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123456789/456789123/789123456/234597861/597861234/861234597/345978612/978612345/612345978"
    },
    {
      "id": "trade-target-54-6-9-mask-4095",
      "label": "trade target 54: 6<->9 mask 4095",
      "valid": true,
      "oneSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSwap": {
        "uniqueTargets": 1,
        "classCounts": {
          "identity": 1,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "geometryCounts": {
          "different row/column/box -> different row/column/box": 107082,
          "same column across boxes -> same column across boxes": 243,
          "same row across boxes -> same row across boxes": 243,
          "same box diagonal -> same box diagonal": 162,
          "same column inside box -> same column inside box": 81,
          "same row inside box -> same row inside box": 81
        },
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "twoSymbolTrades": {
        "scanned": false,
        "uniqueTargets": 0,
        "classCounts": {
          "identity": 0,
          "standard-symmetry": 0,
          "genuine": 0
        },
        "minimumGenuineSwapDepth": null,
        "genuineExamples": [],
        "symmetryExamples": []
      },
      "sourceKey": "123459786/459786123/786123459/234597861/597861234/861234597/345678912/678912345/912345678"
    }
  ],
  "summary": {
    "sources": 56,
    "genuineAtOneSwap": 0,
    "genuineAtTwoSwaps": 1,
    "genuineInTwoSymbolTrades": 1
  },
  "outputJson": "/home/markblanksonhemans/projects/sudoku-board-swaps/data/arbitrary-transformations.latest.json",
  "visualizerJson": "/home/markblanksonhemans/projects/sudoku-board-swaps/visualizer/data/arbitrary-transformations.latest.json",
  "visualizerDataJs": "/home/markblanksonhemans/projects/sudoku-board-swaps/visualizer/data/arbitrary-transformations-data.js"
};
