window.SUDOKU_BRIDGE_DEPTH = {
  "kind": "bridge-depth",
  "runStartedAt": "2026-05-12T11:42:42.564Z",
  "config": {
    "sourceCount": 2,
    "seedSourceCount": 2,
    "tradeTargetLimit": 0,
    "resume": false,
    "searchDepth": 2
  },
  "processedCount": 2,
  "complete": true,
  "currentSource": null,
  "sources": [
    {
      "id": "seed-base",
      "label": "cyclic base",
      "sourceKind": "seed",
      "valid": true,
      "paritySignature": "rows even:36,odd:0 | cols even:36,odd:0",
      "signature": "bridges:2916;targets:1;kind:seed;parity:rows even:36,odd:0 | cols even:36,odd:0",
      "bridgeCount": 2916,
      "uniqueTargetCount": 1,
      "nontrivialTargetCount": 0,
      "hasNontrivialBridge": false,
      "geometryCounts": {
        "different row/column/box -> different row/column/box": 2106,
        "same column across boxes -> same column across boxes": 243,
        "same row across boxes -> same row across boxes": 243,
        "same box diagonal -> same box diagonal": 162,
        "same column inside box -> same column inside box": 81,
        "same row inside box -> same row inside box": 81
      },
      "invalidityCounts": {
        "rows:2,cols:2,boxes:2": 2106,
        "rows:0,cols:2,boxes:2": 243,
        "rows:2,cols:0,boxes:2": 243,
        "rows:2,cols:2,boxes:0": 162,
        "rows:0,cols:2,boxes:0": 81,
        "rows:2,cols:0,boxes:0": 81
      },
      "parityCounts": {
        "rows even:36,odd:0 | cols even:36,odd:0": 2916
      },
      "identityCounts": {
        "returns to source": 2916
      },
      "examples": []
    },
    {
      "id": "seed-comparison",
      "label": "comparison",
      "sourceKind": "seed",
      "valid": true,
      "paritySignature": "rows even:16,odd:20 | cols even:16,odd:20",
      "signature": "bridges:2940;targets:7;kind:seed;parity:rows even:16,odd:20 | cols even:16,odd:20",
      "bridgeCount": 2940,
      "uniqueTargetCount": 7,
      "nontrivialTargetCount": 6,
      "hasNontrivialBridge": true,
      "geometryCounts": {
        "different row/column/box -> different row/column/box": 2106,
        "same column across boxes -> same column across boxes": 251,
        "same row across boxes -> same row across boxes": 247,
        "same box diagonal -> same box diagonal": 162,
        "same row inside box -> same row inside box": 89,
        "same column inside box -> same column inside box": 85
      },
      "invalidityCounts": {
        "rows:2,cols:2,boxes:2": 2106,
        "rows:2,cols:0,boxes:2": 251,
        "rows:0,cols:2,boxes:2": 247,
        "rows:2,cols:2,boxes:0": 162,
        "rows:0,cols:2,boxes:0": 89,
        "rows:2,cols:0,boxes:0": 85
      },
      "parityCounts": {
        "rows even:16,odd:20 | cols even:16,odd:20": 2928,
        "rows even:18,odd:18 | cols even:16,odd:20": 8,
        "rows even:16,odd:20 | cols even:22,odd:14": 4
      },
      "identityCounts": {
        "returns to source": 2916,
        "different valid board": 24
      },
      "examples": [
        {
          "firstMove": "cell r1c4<->r1c5",
          "secondMove": "cell r4c4<->r4c5",
          "geometry": "same row inside box -> same row inside box",
          "middleInvalidity": "rows:0,cols:2,boxes:0",
          "finalParity": "rows even:18,odd:18 | cols even:16,odd:20",
          "identityStatus": "different valid board",
          "final": [
            [
              5,
              3,
              4,
              7,
              6,
              8,
              9,
              1,
              2
            ],
            [
              6,
              7,
              2,
              1,
              9,
              5,
              3,
              4,
              8
            ],
            [
              1,
              9,
              8,
              3,
              4,
              2,
              5,
              6,
              7
            ],
            [
              8,
              5,
              9,
              6,
              7,
              1,
              4,
              2,
              3
            ],
            [
              4,
              2,
              6,
              8,
              5,
              3,
              7,
              9,
              1
            ],
            [
              7,
              1,
              3,
              9,
              2,
              4,
              8,
              5,
              6
            ],
            [
              9,
              6,
              1,
              5,
              3,
              7,
              2,
              8,
              4
            ],
            [
              2,
              8,
              7,
              4,
              1,
              9,
              6,
              3,
              5
            ],
            [
              3,
              4,
              5,
              2,
              8,
              6,
              1,
              7,
              9
            ]
          ]
        },
        {
          "firstMove": "cell r1c4<->r4c4",
          "secondMove": "cell r1c5<->r4c5",
          "geometry": "same column across boxes -> same column across boxes",
          "middleInvalidity": "rows:2,cols:0,boxes:2",
          "finalParity": "rows even:18,odd:18 | cols even:16,odd:20",
          "identityStatus": "different valid board",
          "final": [
            [
              5,
              3,
              4,
              7,
              6,
              8,
              9,
              1,
              2
            ],
            [
              6,
              7,
              2,
              1,
              9,
              5,
              3,
              4,
              8
            ],
            [
              1,
              9,
              8,
              3,
              4,
              2,
              5,
              6,
              7
            ],
            [
              8,
              5,
              9,
              6,
              7,
              1,
              4,
              2,
              3
            ],
            [
              4,
              2,
              6,
              8,
              5,
              3,
              7,
              9,
              1
            ],
            [
              7,
              1,
              3,
              9,
              2,
              4,
              8,
              5,
              6
            ],
            [
              9,
              6,
              1,
              5,
              3,
              7,
              2,
              8,
              4
            ],
            [
              2,
              8,
              7,
              4,
              1,
              9,
              6,
              3,
              5
            ],
            [
              3,
              4,
              5,
              2,
              8,
              6,
              1,
              7,
              9
            ]
          ]
        },
        {
          "firstMove": "cell r1c5<->r4c5",
          "secondMove": "cell r1c4<->r4c4",
          "geometry": "same column across boxes -> same column across boxes",
          "middleInvalidity": "rows:2,cols:0,boxes:2",
          "finalParity": "rows even:18,odd:18 | cols even:16,odd:20",
          "identityStatus": "different valid board",
          "final": [
            [
              5,
              3,
              4,
              7,
              6,
              8,
              9,
              1,
              2
            ],
            [
              6,
              7,
              2,
              1,
              9,
              5,
              3,
              4,
              8
            ],
            [
              1,
              9,
              8,
              3,
              4,
              2,
              5,
              6,
              7
            ],
            [
              8,
              5,
              9,
              6,
              7,
              1,
              4,
              2,
              3
            ],
            [
              4,
              2,
              6,
              8,
              5,
              3,
              7,
              9,
              1
            ],
            [
              7,
              1,
              3,
              9,
              2,
              4,
              8,
              5,
              6
            ],
            [
              9,
              6,
              1,
              5,
              3,
              7,
              2,
              8,
              4
            ],
            [
              2,
              8,
              7,
              4,
              1,
              9,
              6,
              3,
              5
            ],
            [
              3,
              4,
              5,
              2,
              8,
              6,
              1,
              7,
              9
            ]
          ]
        },
        {
          "firstMove": "cell r2c8<->r2c9",
          "secondMove": "cell r7c8<->r7c9",
          "geometry": "same row inside box -> same row inside box",
          "middleInvalidity": "rows:0,cols:2,boxes:0",
          "finalParity": "rows even:16,odd:20 | cols even:16,odd:20",
          "identityStatus": "different valid board",
          "final": [
            [
              5,
              3,
              4,
              6,
              7,
              8,
              9,
              1,
              2
            ],
            [
              6,
              7,
              2,
              1,
              9,
              5,
              3,
              8,
              4
            ],
            [
              1,
              9,
              8,
              3,
              4,
              2,
              5,
              6,
              7
            ],
            [
              8,
              5,
              9,
              7,
              6,
              1,
              4,
              2,
              3
            ],
            [
              4,
              2,
              6,
              8,
              5,
              3,
              7,
              9,
              1
            ],
            [
              7,
              1,
              3,
              9,
              2,
              4,
              8,
              5,
              6
            ],
            [
              9,
              6,
              1,
              5,
              3,
              7,
              2,
              4,
              8
            ],
            [
              2,
              8,
              7,
              4,
              1,
              9,
              6,
              3,
              5
            ],
            [
              3,
              4,
              5,
              2,
              8,
              6,
              1,
              7,
              9
            ]
          ]
        },
        {
          "firstMove": "cell r2c8<->r7c8",
          "secondMove": "cell r2c9<->r7c9",
          "geometry": "same column across boxes -> same column across boxes",
          "middleInvalidity": "rows:2,cols:0,boxes:2",
          "finalParity": "rows even:16,odd:20 | cols even:16,odd:20",
          "identityStatus": "different valid board",
          "final": [
            [
              5,
              3,
              4,
              6,
              7,
              8,
              9,
              1,
              2
            ],
            [
              6,
              7,
              2,
              1,
              9,
              5,
              3,
              8,
              4
            ],
            [
              1,
              9,
              8,
              3,
              4,
              2,
              5,
              6,
              7
            ],
            [
              8,
              5,
              9,
              7,
              6,
              1,
              4,
              2,
              3
            ],
            [
              4,
              2,
              6,
              8,
              5,
              3,
              7,
              9,
              1
            ],
            [
              7,
              1,
              3,
              9,
              2,
              4,
              8,
              5,
              6
            ],
            [
              9,
              6,
              1,
              5,
              3,
              7,
              2,
              4,
              8
            ],
            [
              2,
              8,
              7,
              4,
              1,
              9,
              6,
              3,
              5
            ],
            [
              3,
              4,
              5,
              2,
              8,
              6,
              1,
              7,
              9
            ]
          ]
        },
        {
          "firstMove": "cell r2c9<->r7c9",
          "secondMove": "cell r2c8<->r7c8",
          "geometry": "same column across boxes -> same column across boxes",
          "middleInvalidity": "rows:2,cols:0,boxes:2",
          "finalParity": "rows even:16,odd:20 | cols even:16,odd:20",
          "identityStatus": "different valid board",
          "final": [
            [
              5,
              3,
              4,
              6,
              7,
              8,
              9,
              1,
              2
            ],
            [
              6,
              7,
              2,
              1,
              9,
              5,
              3,
              8,
              4
            ],
            [
              1,
              9,
              8,
              3,
              4,
              2,
              5,
              6,
              7
            ],
            [
              8,
              5,
              9,
              7,
              6,
              1,
              4,
              2,
              3
            ],
            [
              4,
              2,
              6,
              8,
              5,
              3,
              7,
              9,
              1
            ],
            [
              7,
              1,
              3,
              9,
              2,
              4,
              8,
              5,
              6
            ],
            [
              9,
              6,
              1,
              5,
              3,
              7,
              2,
              4,
              8
            ],
            [
              2,
              8,
              7,
              4,
              1,
              9,
              6,
              3,
              5
            ],
            [
              3,
              4,
              5,
              2,
              8,
              6,
              1,
              7,
              9
            ]
          ]
        },
        {
          "firstMove": "cell r3c5<->r3c6",
          "secondMove": "cell r6c5<->r6c6",
          "geometry": "same row inside box -> same row inside box",
          "middleInvalidity": "rows:0,cols:2,boxes:0",
          "finalParity": "rows even:16,odd:20 | cols even:16,odd:20",
          "identityStatus": "different valid board",
          "final": [
            [
              5,
              3,
              4,
              6,
              7,
              8,
              9,
              1,
              2
            ],
            [
              6,
              7,
              2,
              1,
              9,
              5,
              3,
              4,
              8
            ],
            [
              1,
              9,
              8,
              3,
              2,
              4,
              5,
              6,
              7
            ],
            [
              8,
              5,
              9,
              7,
              6,
              1,
              4,
              2,
              3
            ],
            [
              4,
              2,
              6,
              8,
              5,
              3,
              7,
              9,
              1
            ],
            [
              7,
              1,
              3,
              9,
              4,
              2,
              8,
              5,
              6
            ],
            [
              9,
              6,
              1,
              5,
              3,
              7,
              2,
              8,
              4
            ],
            [
              2,
              8,
              7,
              4,
              1,
              9,
              6,
              3,
              5
            ],
            [
              3,
              4,
              5,
              2,
              8,
              6,
              1,
              7,
              9
            ]
          ]
        },
        {
          "firstMove": "cell r3c5<->r6c5",
          "secondMove": "cell r3c6<->r6c6",
          "geometry": "same column across boxes -> same column across boxes",
          "middleInvalidity": "rows:2,cols:0,boxes:2",
          "finalParity": "rows even:16,odd:20 | cols even:16,odd:20",
          "identityStatus": "different valid board",
          "final": [
            [
              5,
              3,
              4,
              6,
              7,
              8,
              9,
              1,
              2
            ],
            [
              6,
              7,
              2,
              1,
              9,
              5,
              3,
              4,
              8
            ],
            [
              1,
              9,
              8,
              3,
              2,
              4,
              5,
              6,
              7
            ],
            [
              8,
              5,
              9,
              7,
              6,
              1,
              4,
              2,
              3
            ],
            [
              4,
              2,
              6,
              8,
              5,
              3,
              7,
              9,
              1
            ],
            [
              7,
              1,
              3,
              9,
              4,
              2,
              8,
              5,
              6
            ],
            [
              9,
              6,
              1,
              5,
              3,
              7,
              2,
              8,
              4
            ],
            [
              2,
              8,
              7,
              4,
              1,
              9,
              6,
              3,
              5
            ],
            [
              3,
              4,
              5,
              2,
              8,
              6,
              1,
              7,
              9
            ]
          ]
        }
      ]
    }
  ],
  "outputJson": "/home/markblanksonhemans/projects/sudoku-board-swaps/data/bridge-depth.latest.json",
  "visualizerJson": "/home/markblanksonhemans/projects/sudoku-board-swaps/visualizer/data/bridge-depth.latest.json",
  "visualizerDataJs": "/home/markblanksonhemans/projects/sudoku-board-swaps/visualizer/data/bridge-depth-data.js",
  "updatedAt": "2026-05-12T11:43:41.669Z",
  "summary": {
    "sourceKinds": {
      "seed": 2
    },
    "bridgeCount": 5856,
    "uniqueTargetCount": 8,
    "nontrivialSources": 1
  },
  "groups": [
    {
      "signature": "bridges:2916;targets:1;kind:seed;parity:rows even:36,odd:0 | cols even:36,odd:0",
      "count": 1,
      "examples": [
        "cyclic base"
      ]
    },
    {
      "signature": "bridges:2940;targets:7;kind:seed;parity:rows even:16,odd:20 | cols even:16,odd:20",
      "count": 1,
      "examples": [
        "comparison"
      ]
    }
  ]
};
