window.SUDOKU_ASYMMETRIC_SEQUENCES = {
  "kind": "asymmetric-sequences",
  "schema": "asymmetric-sequence-v1",
  "runStartedAt": "2026-05-14T10:13:26.575Z",
  "updatedAt": "2026-05-14T10:20:49.640Z",
  "complete": true,
  "config": {
    "source": "comparison",
    "sourceFile": "/home/markblanksonhemans/projects/sudoku-board-swaps/data/solved-board-sample.latest.json",
    "maxExactDepth": 2,
    "includeTwoSymbolTrades": true,
    "dedupeEquivalentSources": false,
    "cellReusePolicy": "each cell may appear in at most one swap",
    "sequenceDirectionPolicy": "canonical sorted disjoint pairs collapse forward and backward descriptions",
    "standardAggregatePolicy": "reject direct row/column/transpose layout aggregates before asymmetric type counting"
  },
  "storage": {
    "outputJson": "/home/markblanksonhemans/projects/sudoku-board-swaps/data/asymmetric-sequences.latest.json",
    "visualizerJson": "/home/markblanksonhemans/projects/sudoku-board-swaps/visualizer/data/asymmetric-sequences.latest.json",
    "visualizerDataJs": "/home/markblanksonhemans/projects/sudoku-board-swaps/visualizer/data/asymmetric-sequences-data.js"
  },
  "rules": {
    "sourceDeduplication": "Source boards are scanned as supplied; exact and symmetry reduction can be run later.",
    "disjointCells": "A candidate sequence is a matching over the 81 cells; one cell cannot be changed twice.",
    "reverseSequence": "The canonical pair list represents both directions of the same sequence.",
    "standardAggregates": "Pure row, column, stack/band, side-swap, and transpose aggregates are rejected as asymmetric types."
  },
  "skippedSources": [],
  "current": null,
  "sources": [
    {
      "id": "comparison",
      "label": "comparison",
      "board": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
      "equivalentSourceSkipped": false,
      "operationFamilies": [
        {
          "id": "exact-disjoint-cell-swap-depth-1",
          "label": "Exact disjoint cell swaps, depth 1",
          "depth": 1,
          "exhaustive": true,
          "status": "complete",
          "startedAt": "2026-05-14T10:13:26.582Z",
          "completedAt": "2026-05-14T10:13:26.597Z",
          "progress": {
            "checked": 3240,
            "total": 3240,
            "percent": 100
          },
          "attemptedSequences": 3240,
          "validEndpointSequences": 0,
          "uniqueValidEndpoints": 0,
          "classCounts": {
            "identity": 0,
            "standard-symmetry": 0,
            "genuine": 0
          },
          "rejected": {
            "noOpSwap": 324,
            "repeatedCell": 0,
            "standardAggregate": 0,
            "invalidEndpoint": 2916,
            "duplicateEndpoint": 0
          },
          "genuineEndpointFamilies": 0,
          "sequenceTypeCount": 0,
          "sequenceTypes": []
        },
        {
          "id": "exact-disjoint-cell-swap-depth-2",
          "label": "Exact disjoint cell swaps, depth 2",
          "depth": 2,
          "exhaustive": true,
          "status": "complete",
          "startedAt": "2026-05-14T10:13:26.600Z",
          "completedAt": "2026-05-14T10:13:59.411Z",
          "progress": {
            "checked": 4991220,
            "total": 4991220,
            "percent": 100
          },
          "attemptedSequences": 4991220,
          "validEndpointSequences": 12,
          "uniqueValidEndpoints": 6,
          "classCounts": {
            "identity": 0,
            "standard-symmetry": 0,
            "genuine": 6
          },
          "rejected": {
            "noOpSwap": 948186,
            "repeatedCell": 230364,
            "standardAggregate": 0,
            "invalidEndpoint": 4043022,
            "duplicateEndpoint": 6
          },
          "genuineEndpointFamilies": 6,
          "sequenceTypeCount": 6,
          "sequenceTypes": [
            {
              "typeKey": "{\"familyId\":\"exact-disjoint-cell-swap-depth-2\",\"swapDepth\":2,\"digitPairCounts\":{\"6<->7\":2},\"repeatedDigitPair\":true,\"locationShape\":\"2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks\",\"geometryCounts\":{\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2],\"cols\":[2,2],\"boxes\":[2,2],\"bands\":[2,2],\"stacks\":[4]},\"className\":\"genuine\"}",
              "label": "Exact disjoint cell swaps, depth 2; 2 swaps",
              "swapDepth": 2,
              "shape": {
                "digitPairs": [
                  "6<->7",
                  "6<->7"
                ],
                "digitPairCounts": {
                  "6<->7": 2
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "6<->7",
                "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                "geometryCounts": {
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    4
                  ],
                  "cols": [
                    4,
                    5
                  ],
                  "boxes": [
                    2,
                    5
                  ],
                  "bands": [
                    1,
                    2
                  ],
                  "stacks": [
                    2
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2
                  ],
                  "stacks": [
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "D1<->E1",
                    "D4<->E4"
                  ],
                  "shape": {
                    "digitPairs": [
                      "6<->7",
                      "6<->7"
                    ],
                    "digitPairCounts": {
                      "6<->7": 2
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "6<->7",
                    "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                    "geometryCounts": {
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        4
                      ],
                      "cols": [
                        4,
                        5
                      ],
                      "boxes": [
                        2,
                        5
                      ],
                      "bands": [
                        1,
                        2
                      ],
                      "stacks": [
                        2
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2
                      ],
                      "stacks": [
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534768912672195348198342567859671423426853791713924856961537284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-1"
                }
              ]
            },
            {
              "typeKey": "{\"familyId\":\"exact-disjoint-cell-swap-depth-2\",\"swapDepth\":2,\"digitPairCounts\":{\"4<->8\":2},\"repeatedDigitPair\":true,\"locationShape\":\"2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks\",\"geometryCounts\":{\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2],\"cols\":[2,2],\"boxes\":[2,2],\"bands\":[2,2],\"stacks\":[4]},\"className\":\"genuine\"}",
              "label": "Exact disjoint cell swaps, depth 2; 2 swaps",
              "swapDepth": 2,
              "shape": {
                "digitPairs": [
                  "4<->8",
                  "4<->8"
                ],
                "digitPairCounts": {
                  "4<->8": 2
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->8",
                "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                "geometryCounts": {
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    2,
                    7
                  ],
                  "cols": [
                    8,
                    9
                  ],
                  "boxes": [
                    3,
                    9
                  ],
                  "bands": [
                    1,
                    3
                  ],
                  "stacks": [
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2
                  ],
                  "stacks": [
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "H2<->I2",
                    "H7<->I7"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->8",
                      "4<->8"
                    ],
                    "digitPairCounts": {
                      "4<->8": 2
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->8",
                    "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                    "geometryCounts": {
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        2,
                        7
                      ],
                      "cols": [
                        8,
                        9
                      ],
                      "boxes": [
                        3,
                        9
                      ],
                      "bands": [
                        1,
                        3
                      ],
                      "stacks": [
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2
                      ],
                      "stacks": [
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195384198342567859761423426853791713924856961537248287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-2"
                }
              ]
            },
            {
              "typeKey": "{\"familyId\":\"exact-disjoint-cell-swap-depth-2\",\"swapDepth\":2,\"digitPairCounts\":{\"2<->4\":2},\"repeatedDigitPair\":true,\"locationShape\":\"2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks\",\"geometryCounts\":{\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2],\"cols\":[2,2],\"boxes\":[2,2],\"bands\":[2,2],\"stacks\":[4]},\"className\":\"genuine\"}",
              "label": "Exact disjoint cell swaps, depth 2; 2 swaps",
              "swapDepth": 2,
              "shape": {
                "digitPairs": [
                  "2<->4",
                  "2<->4"
                ],
                "digitPairCounts": {
                  "2<->4": 2
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->4",
                "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                "geometryCounts": {
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    3,
                    6
                  ],
                  "cols": [
                    5,
                    6
                  ],
                  "boxes": [
                    2,
                    5
                  ],
                  "bands": [
                    1,
                    2
                  ],
                  "stacks": [
                    2
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2
                  ],
                  "stacks": [
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "E3<->F3",
                    "E6<->F6"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->4",
                      "2<->4"
                    ],
                    "digitPairCounts": {
                      "2<->4": 2
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->4",
                    "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                    "geometryCounts": {
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        3,
                        6
                      ],
                      "cols": [
                        5,
                        6
                      ],
                      "boxes": [
                        2,
                        5
                      ],
                      "bands": [
                        1,
                        2
                      ],
                      "stacks": [
                        2
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2
                      ],
                      "stacks": [
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198324567859761423426853791713942856961537284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-3"
                }
              ]
            },
            {
              "typeKey": "{\"familyId\":\"exact-disjoint-cell-swap-depth-2\",\"swapDepth\":2,\"digitPairCounts\":{\"1<->3\":2},\"repeatedDigitPair\":true,\"locationShape\":\"2 swaps / 2 rows / 2 cols / 2 boxes / 1 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2},\"touchCounts\":{\"rows\":[2,2],\"cols\":[2,2],\"boxes\":[2,2],\"bands\":[4],\"stacks\":[2,2]},\"className\":\"genuine\"}",
              "label": "Exact disjoint cell swaps, depth 2; 2 swaps",
              "swapDepth": 2,
              "shape": {
                "digitPairs": [
                  "1<->3",
                  "1<->3"
                ],
                "digitPairCounts": {
                  "1<->3": 2
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->3",
                "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 1 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2
                },
                "touched": {
                  "rows": [
                    4,
                    5
                  ],
                  "cols": [
                    6,
                    9
                  ],
                  "boxes": [
                    5,
                    6
                  ],
                  "bands": [
                    2
                  ],
                  "stacks": [
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2
                  ],
                  "bands": [
                    4
                  ],
                  "stacks": [
                    2,
                    2
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "F4<->I4",
                    "F5<->I5"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->3",
                      "1<->3"
                    ],
                    "digitPairCounts": {
                      "1<->3": 2
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->3",
                    "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 1 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2
                    },
                    "touched": {
                      "rows": [
                        4,
                        5
                      ],
                      "cols": [
                        6,
                        9
                      ],
                      "boxes": [
                        5,
                        6
                      ],
                      "bands": [
                        2
                      ],
                      "stacks": [
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2
                      ],
                      "bands": [
                        4
                      ],
                      "stacks": [
                        2,
                        2
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567859763421426851793713924856961537284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-4"
                }
              ]
            },
            {
              "typeKey": "{\"familyId\":\"exact-disjoint-cell-swap-depth-2\",\"swapDepth\":2,\"digitPairCounts\":{\"4<->9\":2},\"repeatedDigitPair\":true,\"locationShape\":\"2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks\",\"geometryCounts\":{\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2],\"cols\":[2,2],\"boxes\":[2,2],\"bands\":[2,2],\"stacks\":[4]},\"className\":\"genuine\"}",
              "label": "Exact disjoint cell swaps, depth 2; 2 swaps",
              "swapDepth": 2,
              "shape": {
                "digitPairs": [
                  "4<->9",
                  "4<->9"
                ],
                "digitPairCounts": {
                  "4<->9": 2
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->9",
                "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                "geometryCounts": {
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    6,
                    8
                  ],
                  "cols": [
                    4,
                    6
                  ],
                  "boxes": [
                    5,
                    8
                  ],
                  "bands": [
                    2,
                    3
                  ],
                  "stacks": [
                    2
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2
                  ],
                  "stacks": [
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "D6<->F6",
                    "D8<->F8"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->9",
                      "4<->9"
                    ],
                    "digitPairCounts": {
                      "4<->9": 2
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->9",
                    "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                    "geometryCounts": {
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        6,
                        8
                      ],
                      "cols": [
                        4,
                        6
                      ],
                      "boxes": [
                        5,
                        8
                      ],
                      "bands": [
                        2,
                        3
                      ],
                      "stacks": [
                        2
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2
                      ],
                      "stacks": [
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567859761423426853791713429856961537284287914635345286179",
                  "className": "genuine",
                  "endpointKey": "family-5"
                }
              ]
            },
            {
              "typeKey": "{\"familyId\":\"exact-disjoint-cell-swap-depth-2\",\"swapDepth\":2,\"digitPairCounts\":{\"4<->5\":2},\"repeatedDigitPair\":true,\"locationShape\":\"2 swaps / 2 rows / 2 cols / 2 boxes / 1 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2},\"touchCounts\":{\"rows\":[2,2],\"cols\":[2,2],\"boxes\":[2,2],\"bands\":[4],\"stacks\":[2,2]},\"className\":\"genuine\"}",
              "label": "Exact disjoint cell swaps, depth 2; 2 swaps",
              "swapDepth": 2,
              "shape": {
                "digitPairs": [
                  "4<->5",
                  "4<->5"
                ],
                "digitPairCounts": {
                  "4<->5": 2
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->5",
                "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 1 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2
                },
                "touched": {
                  "rows": [
                    7,
                    8
                  ],
                  "cols": [
                    4,
                    9
                  ],
                  "boxes": [
                    8,
                    9
                  ],
                  "bands": [
                    3
                  ],
                  "stacks": [
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2
                  ],
                  "bands": [
                    4
                  ],
                  "stacks": [
                    2,
                    2
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "D7<->I7",
                    "D8<->I8"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->5",
                      "4<->5"
                    ],
                    "digitPairCounts": {
                      "4<->5": 2
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->5",
                    "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 1 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2
                    },
                    "touched": {
                      "rows": [
                        7,
                        8
                      ],
                      "cols": [
                        4,
                        9
                      ],
                      "boxes": [
                        8,
                        9
                      ],
                      "bands": [
                        3
                      ],
                      "stacks": [
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2
                      ],
                      "bands": [
                        4
                      ],
                      "stacks": [
                        2,
                        2
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567859761423426853791713924856961437285287519634345286179",
                  "className": "genuine",
                  "endpointKey": "family-6"
                }
              ]
            }
          ]
        },
        {
          "id": "two-symbol-balanced-trade",
          "label": "Two-symbol balanced trades",
          "depth": "variable",
          "exhaustive": false,
          "status": "complete",
          "startedAt": "2026-05-14T10:13:59.415Z",
          "completedAt": "2026-05-14T10:20:49.605Z",
          "progress": {
            "checked": 9437148,
            "total": 9437148,
            "percent": 100
          },
          "attemptedSequences": 4713048,
          "validEndpointSequences": 82,
          "uniqueValidEndpoints": 82,
          "classCounts": {
            "identity": 0,
            "standard-symmetry": 36,
            "genuine": 46
          },
          "rejected": {
            "noOpSwap": 0,
            "repeatedCell": 0,
            "standardAggregate": 0,
            "invalidEndpoint": 4712966,
            "duplicateEndpoint": 0
          },
          "genuineEndpointFamilies": 23,
          "sequenceTypeCount": 78,
          "sequenceTypes": [
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":3,\"digitPairCounts\":{\"1<->6\":3},\"repeatedDigitPair\":true,\"locationShape\":\"3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2],\"cols\":[2,2,2],\"boxes\":[2,2,2],\"bands\":[2,4],\"stacks\":[2,4]},\"className\":\"genuine\",\"digits\":\"1<->6\",\"cellCount\":6}",
              "label": "Two-symbol balanced trades; 3 swaps",
              "swapDepth": 3,
              "shape": {
                "digitPairs": [
                  "1<->6",
                  "1<->6",
                  "1<->6"
                ],
                "digitPairCounts": {
                  "1<->6": 3
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->6",
                "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    5,
                    6,
                    7
                  ],
                  "cols": [
                    2,
                    3,
                    9
                  ],
                  "boxes": [
                    4,
                    6,
                    7
                  ],
                  "bands": [
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    4
                  ],
                  "stacks": [
                    2,
                    4
                  ]
                }
              },
              "count": 2,
              "endpointCount": 2,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 2
              },
              "examples": [
                {
                  "moves": [
                    "C5<->I5",
                    "B6<->I6",
                    "B7<->C7"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->6",
                      "1<->6",
                      "1<->6"
                    ],
                    "digitPairCounts": {
                      "1<->6": 3
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->6",
                    "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        5,
                        6,
                        7
                      ],
                      "cols": [
                        2,
                        3,
                        9
                      ],
                      "boxes": [
                        4,
                        6,
                        7
                      ],
                      "bands": [
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4
                      ],
                      "stacks": [
                        2,
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567859761423421853796763924851916537284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-3"
                },
                {
                  "moves": [
                    "E4<->F4",
                    "E8<->G8",
                    "F9<->G9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->6",
                      "1<->6",
                      "1<->6"
                    ],
                    "digitPairCounts": {
                      "1<->6": 3
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->6",
                    "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        4,
                        8,
                        9
                      ],
                      "cols": [
                        5,
                        6,
                        7
                      ],
                      "boxes": [
                        5,
                        8,
                        9
                      ],
                      "bands": [
                        2,
                        3
                      ],
                      "stacks": [
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4
                      ],
                      "stacks": [
                        2,
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567859716423426853791713924856961537284287469135345281679",
                  "className": "genuine",
                  "endpointKey": "family-4"
                }
              ],
              "matchingMultiplicity": 6
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":6,\"digitPairCounts\":{\"1<->6\":6},\"repeatedDigitPair\":true,\"locationShape\":\"6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":5,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2],\"bands\":[2,4,6],\"stacks\":[2,4,6]},\"className\":\"genuine\",\"digits\":\"1<->6\",\"cellCount\":12}",
              "label": "Two-symbol balanced trades; 6 swaps",
              "swapDepth": 6,
              "shape": {
                "digitPairs": [
                  "1<->6",
                  "1<->6",
                  "1<->6",
                  "1<->6",
                  "1<->6",
                  "1<->6"
                ],
                "digitPairCounts": {
                  "1<->6": 6
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->6",
                "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 5,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    6,
                    7
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    4,
                    6
                  ],
                  "stacks": [
                    2,
                    4,
                    6
                  ]
                }
              },
              "count": 2,
              "endpointCount": 2,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 2
              },
              "examples": [
                {
                  "moves": [
                    "D1<->H1",
                    "A2<->D2",
                    "A3<->H3",
                    "C5<->I5",
                    "B6<->I6",
                    "B7<->C7"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6"
                    ],
                    "digitPairCounts": {
                      "1<->6": 6
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->6",
                    "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 5,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        5,
                        6,
                        7
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        6,
                        7
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4,
                        6
                      ],
                      "stacks": [
                        2,
                        4,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534178962172695348698342517859761423421853796763924851916537284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-4"
                },
                {
                  "moves": [
                    "D1<->H1",
                    "A2<->D2",
                    "A3<->H3",
                    "E4<->F4",
                    "E8<->G8",
                    "F9<->G9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6"
                    ],
                    "digitPairCounts": {
                      "1<->6": 6
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->6",
                    "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 5,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        4,
                        5,
                        6,
                        7,
                        8
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        5,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4,
                        6
                      ],
                      "stacks": [
                        2,
                        4,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534178962172695348698342517859716423426853791713924856961537284287469135345281679",
                  "className": "genuine",
                  "endpointKey": "family-3"
                }
              ],
              "matchingMultiplicity": 720
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":3,\"digitPairCounts\":{\"7<->8\":3},\"repeatedDigitPair\":true,\"locationShape\":\"3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2],\"cols\":[2,2,2],\"boxes\":[2,2,2],\"bands\":[2,4],\"stacks\":[2,4]},\"className\":\"genuine\",\"digits\":\"7<->8\",\"cellCount\":6}",
              "label": "Two-symbol balanced trades; 3 swaps",
              "swapDepth": 3,
              "shape": {
                "digitPairs": [
                  "7<->8",
                  "7<->8",
                  "7<->8"
                ],
                "digitPairCounts": {
                  "7<->8": 3
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "7<->8",
                "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    2,
                    3,
                    8
                  ],
                  "cols": [
                    2,
                    3,
                    9
                  ],
                  "boxes": [
                    1,
                    3,
                    7
                  ],
                  "bands": [
                    1,
                    3
                  ],
                  "stacks": [
                    1,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    4
                  ],
                  "stacks": [
                    2,
                    4
                  ]
                }
              },
              "count": 2,
              "endpointCount": 2,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 2
              },
              "examples": [
                {
                  "moves": [
                    "B2<->I2",
                    "C3<->I3",
                    "B8<->C8"
                  ],
                  "shape": {
                    "digitPairs": [
                      "7<->8",
                      "7<->8",
                      "7<->8"
                    ],
                    "digitPairCounts": {
                      "7<->8": 3
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "7<->8",
                    "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        2,
                        3,
                        8
                      ],
                      "cols": [
                        2,
                        3,
                        9
                      ],
                      "boxes": [
                        1,
                        3,
                        7
                      ],
                      "bands": [
                        1,
                        3
                      ],
                      "stacks": [
                        1,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4
                      ],
                      "stacks": [
                        2,
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912682195347197342568859761423426853791713924856961537284278419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-21"
                },
                {
                  "moves": [
                    "E1<->F1",
                    "F7<->H7",
                    "E9<->H9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "7<->8",
                      "7<->8",
                      "7<->8"
                    ],
                    "digitPairCounts": {
                      "7<->8": 3
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "7<->8",
                    "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        7,
                        9
                      ],
                      "cols": [
                        5,
                        6,
                        8
                      ],
                      "boxes": [
                        2,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        3
                      ],
                      "stacks": [
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4
                      ],
                      "stacks": [
                        2,
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534687912672195348198342567859761423426853791713924856961538274287419635345276189",
                  "className": "genuine",
                  "endpointKey": "family-22"
                }
              ],
              "matchingMultiplicity": 6
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":6,\"digitPairCounts\":{\"7<->8\":6},\"repeatedDigitPair\":true,\"locationShape\":\"6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":5,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2],\"bands\":[2,4,6],\"stacks\":[2,4,6]},\"className\":\"genuine\",\"digits\":\"7<->8\",\"cellCount\":12}",
              "label": "Two-symbol balanced trades; 6 swaps",
              "swapDepth": 6,
              "shape": {
                "digitPairs": [
                  "7<->8",
                  "7<->8",
                  "7<->8",
                  "7<->8",
                  "7<->8",
                  "7<->8"
                ],
                "digitPairCounts": {
                  "7<->8": 6
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "7<->8",
                "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 5,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    2,
                    3,
                    4,
                    5,
                    6,
                    8
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    7,
                    9
                  ],
                  "boxes": [
                    1,
                    3,
                    4,
                    5,
                    6,
                    7
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    4,
                    6
                  ],
                  "stacks": [
                    2,
                    4,
                    6
                  ]
                }
              },
              "count": 2,
              "endpointCount": 2,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 2
              },
              "examples": [
                {
                  "moves": [
                    "B2<->I2",
                    "C3<->I3",
                    "A4<->D4",
                    "D5<->G5",
                    "A6<->G6",
                    "B8<->C8"
                  ],
                  "shape": {
                    "digitPairs": [
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8"
                    ],
                    "digitPairCounts": {
                      "7<->8": 6
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "7<->8",
                    "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 5,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        2,
                        3,
                        4,
                        5,
                        6,
                        8
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        7,
                        9
                      ],
                      "boxes": [
                        1,
                        3,
                        4,
                        5,
                        6,
                        7
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4,
                        6
                      ],
                      "stacks": [
                        2,
                        4,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912682195347197342568759861423426753891813924756961537284278419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-22"
                },
                {
                  "moves": [
                    "E1<->F1",
                    "A4<->D4",
                    "D5<->G5",
                    "A6<->G6",
                    "F7<->H7",
                    "E9<->H9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8"
                    ],
                    "digitPairCounts": {
                      "7<->8": 6
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "7<->8",
                    "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 5,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        4,
                        5,
                        6,
                        7,
                        9
                      ],
                      "cols": [
                        1,
                        4,
                        5,
                        6,
                        7,
                        8
                      ],
                      "boxes": [
                        2,
                        4,
                        5,
                        6,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4,
                        6
                      ],
                      "stacks": [
                        2,
                        4,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534687912672195348198342567759861423426753891813924756961538274287419635345276189",
                  "className": "genuine",
                  "endpointKey": "family-21"
                }
              ],
              "matchingMultiplicity": 720
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":2,\"digitPairCounts\":{\"1<->3\":2},\"repeatedDigitPair\":true,\"locationShape\":\"2 swaps / 2 rows / 2 cols / 2 boxes / 1 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2},\"touchCounts\":{\"rows\":[2,2],\"cols\":[2,2],\"boxes\":[2,2],\"bands\":[4],\"stacks\":[2,2]},\"className\":\"genuine\",\"digits\":\"1<->3\",\"cellCount\":4}",
              "label": "Two-symbol balanced trades; 2 swaps",
              "swapDepth": 2,
              "shape": {
                "digitPairs": [
                  "1<->3",
                  "1<->3"
                ],
                "digitPairCounts": {
                  "1<->3": 2
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->3",
                "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 1 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2
                },
                "touched": {
                  "rows": [
                    4,
                    5
                  ],
                  "cols": [
                    6,
                    9
                  ],
                  "boxes": [
                    5,
                    6
                  ],
                  "bands": [
                    2
                  ],
                  "stacks": [
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2
                  ],
                  "bands": [
                    4
                  ],
                  "stacks": [
                    2,
                    2
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "F4<->I4",
                    "F5<->I5"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->3",
                      "1<->3"
                    ],
                    "digitPairCounts": {
                      "1<->3": 2
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->3",
                    "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 1 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2
                    },
                    "touched": {
                      "rows": [
                        4,
                        5
                      ],
                      "cols": [
                        6,
                        9
                      ],
                      "boxes": [
                        5,
                        6
                      ],
                      "bands": [
                        2
                      ],
                      "stacks": [
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2
                      ],
                      "bands": [
                        4
                      ],
                      "stacks": [
                        2,
                        2
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567859763421426851793713924856961537284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-1"
                }
              ],
              "matchingMultiplicity": 2
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":7,\"digitPairCounts\":{\"1<->3\":7},\"repeatedDigitPair\":true,\"locationShape\":\"7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":6,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2],\"bands\":[2,6,6],\"stacks\":[4,4,6]},\"className\":\"genuine\",\"digits\":\"1<->3\",\"cellCount\":14}",
              "label": "Two-symbol balanced trades; 7 swaps",
              "swapDepth": 7,
              "shape": {
                "digitPairs": [
                  "1<->3",
                  "1<->3",
                  "1<->3",
                  "1<->3",
                  "1<->3",
                  "1<->3",
                  "1<->3"
                ],
                "digitPairCounts": {
                  "1<->3": 7
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->3",
                "locationShape": "7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 6,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    7,
                    8
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    6,
                    6
                  ],
                  "stacks": [
                    4,
                    4,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "B1<->H1",
                    "D2<->G2",
                    "A3<->D3",
                    "B6<->C6",
                    "C7<->E7",
                    "E8<->H8",
                    "A9<->G9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->3",
                      "1<->3",
                      "1<->3",
                      "1<->3",
                      "1<->3",
                      "1<->3",
                      "1<->3"
                    ],
                    "digitPairCounts": {
                      "1<->3": 7
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->3",
                    "locationShape": "7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 6,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        7,
                        8
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        6,
                        6
                      ],
                      "stacks": [
                        4,
                        4,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "514678932672395148398142567859761423426853791731924856963517284287439615145286379",
                  "className": "genuine",
                  "endpointKey": "family-1"
                }
              ],
              "matchingMultiplicity": 5040
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":3,\"digitPairCounts\":{\"1<->6\":3},\"repeatedDigitPair\":true,\"locationShape\":\"3 swaps / 3 rows / 3 cols / 3 boxes / 1 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":3},\"touchCounts\":{\"rows\":[2,2,2],\"cols\":[2,2,2],\"boxes\":[2,2,2],\"bands\":[6],\"stacks\":[2,2,2]},\"className\":\"genuine\",\"digits\":\"1<->6\",\"cellCount\":6}",
              "label": "Two-symbol balanced trades; 3 swaps",
              "swapDepth": 3,
              "shape": {
                "digitPairs": [
                  "1<->6",
                  "1<->6",
                  "1<->6"
                ],
                "digitPairCounts": {
                  "1<->6": 3
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->6",
                "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 1 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 3
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3
                  ],
                  "cols": [
                    1,
                    4,
                    8
                  ],
                  "boxes": [
                    1,
                    2,
                    3
                  ],
                  "bands": [
                    1
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6
                  ],
                  "stacks": [
                    2,
                    2,
                    2
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "D1<->H1",
                    "A2<->D2",
                    "A3<->H3"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->6",
                      "1<->6",
                      "1<->6"
                    ],
                    "digitPairCounts": {
                      "1<->6": 3
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->6",
                    "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 1 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 3
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3
                      ],
                      "cols": [
                        1,
                        4,
                        8
                      ],
                      "boxes": [
                        1,
                        2,
                        3
                      ],
                      "bands": [
                        1
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6
                      ],
                      "stacks": [
                        2,
                        2,
                        2
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534178962172695348698342517859761423426853791713924856961537284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-2"
                }
              ],
              "matchingMultiplicity": 6
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":6,\"digitPairCounts\":{\"1<->6\":6},\"repeatedDigitPair\":true,\"locationShape\":\"6 swaps / 6 rows / 6 cols / 6 boxes / 2 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":4,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2],\"bands\":[6,6],\"stacks\":[4,4,4]},\"className\":\"genuine\",\"digits\":\"1<->6\",\"cellCount\":12}",
              "label": "Two-symbol balanced trades; 6 swaps",
              "swapDepth": 6,
              "shape": {
                "digitPairs": [
                  "1<->6",
                  "1<->6",
                  "1<->6",
                  "1<->6",
                  "1<->6",
                  "1<->6"
                ],
                "digitPairCounts": {
                  "1<->6": 6
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->6",
                "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 2 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 4,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    2,
                    3,
                    5,
                    6,
                    7,
                    9
                  ],
                  "boxes": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6
                  ],
                  "stacks": [
                    4,
                    4,
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "E4<->F4",
                    "C5<->I5",
                    "B6<->I6",
                    "B7<->C7",
                    "E8<->G8",
                    "F9<->G9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6"
                    ],
                    "digitPairCounts": {
                      "1<->6": 6
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->6",
                    "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 2 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 4,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        2,
                        3,
                        5,
                        6,
                        7,
                        9
                      ],
                      "boxes": [
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6
                      ],
                      "stacks": [
                        4,
                        4,
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567859716423421853796763924851916537284287469135345281679",
                  "className": "genuine",
                  "endpointKey": "family-2"
                }
              ],
              "matchingMultiplicity": 720
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":6,\"digitPairCounts\":{\"1<->9\":6},\"repeatedDigitPair\":true,\"locationShape\":\"6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":4},\"touchCounts\":{\"rows\":[2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2],\"bands\":[4,4,4],\"stacks\":[6,6]},\"className\":\"genuine\",\"digits\":\"1<->9\",\"cellCount\":12}",
              "label": "Two-symbol balanced trades; 6 swaps",
              "swapDepth": 6,
              "shape": {
                "digitPairs": [
                  "1<->9",
                  "1<->9",
                  "1<->9",
                  "1<->9",
                  "1<->9",
                  "1<->9"
                ],
                "digitPairCounts": {
                  "1<->9": 6
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->9",
                "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 4
                },
                "touched": {
                  "rows": [
                    2,
                    3,
                    4,
                    6,
                    7,
                    8
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                  ],
                  "boxes": [
                    1,
                    2,
                    4,
                    5,
                    7,
                    8
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    4,
                    4,
                    4
                  ],
                  "stacks": [
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "D2<->E2",
                    "A3<->B3",
                    "C4<->F4",
                    "B6<->D6",
                    "A7<->C7",
                    "E8<->F8"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->9",
                      "1<->9",
                      "1<->9",
                      "1<->9",
                      "1<->9",
                      "1<->9"
                    ],
                    "digitPairCounts": {
                      "1<->9": 6
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->9",
                    "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 4
                    },
                    "touched": {
                      "rows": [
                        2,
                        3,
                        4,
                        6,
                        7,
                        8
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                      ],
                      "boxes": [
                        1,
                        2,
                        4,
                        5,
                        7,
                        8
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        4,
                        4,
                        4
                      ],
                      "stacks": [
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672915348918342567851769423426853791793124856169537284287491635345286179",
                  "className": "genuine",
                  "endpointKey": "family-5"
                }
              ],
              "matchingMultiplicity": 720
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":3,\"digitPairCounts\":{\"1<->9\":3},\"repeatedDigitPair\":true,\"locationShape\":\"3 swaps / 3 rows / 3 cols / 3 boxes / 3 bands / 1 stacks\",\"geometryCounts\":{\"same-row-inside-box\":3},\"touchCounts\":{\"rows\":[2,2,2],\"cols\":[2,2,2],\"boxes\":[2,2,2],\"bands\":[2,2,2],\"stacks\":[6]},\"className\":\"genuine\",\"digits\":\"1<->9\",\"cellCount\":6}",
              "label": "Two-symbol balanced trades; 3 swaps",
              "swapDepth": 3,
              "shape": {
                "digitPairs": [
                  "1<->9",
                  "1<->9",
                  "1<->9"
                ],
                "digitPairCounts": {
                  "1<->9": 3
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->9",
                "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 3 bands / 1 stacks",
                "geometryCounts": {
                  "same-row-inside-box": 3
                },
                "touched": {
                  "rows": [
                    1,
                    5,
                    9
                  ],
                  "cols": [
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    3,
                    6,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2,
                    2
                  ],
                  "stacks": [
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "G1<->H1",
                    "H5<->I5",
                    "G9<->I9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->9",
                      "1<->9",
                      "1<->9"
                    ],
                    "digitPairCounts": {
                      "1<->9": 3
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->9",
                    "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 3 bands / 1 stacks",
                    "geometryCounts": {
                      "same-row-inside-box": 3
                    },
                    "touched": {
                      "rows": [
                        1,
                        5,
                        9
                      ],
                      "cols": [
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        3,
                        6,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2,
                        2
                      ],
                      "stacks": [
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678192672195348198342567859761423426853719713924856961537284287419635345286971",
                  "className": "genuine",
                  "endpointKey": "family-5"
                }
              ],
              "matchingMultiplicity": 6
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":2,\"digitPairCounts\":{\"2<->4\":2},\"repeatedDigitPair\":true,\"locationShape\":\"2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks\",\"geometryCounts\":{\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2],\"cols\":[2,2],\"boxes\":[2,2],\"bands\":[2,2],\"stacks\":[4]},\"className\":\"genuine\",\"digits\":\"2<->4\",\"cellCount\":4}",
              "label": "Two-symbol balanced trades; 2 swaps",
              "swapDepth": 2,
              "shape": {
                "digitPairs": [
                  "2<->4",
                  "2<->4"
                ],
                "digitPairCounts": {
                  "2<->4": 2
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->4",
                "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                "geometryCounts": {
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    3,
                    6
                  ],
                  "cols": [
                    5,
                    6
                  ],
                  "boxes": [
                    2,
                    5
                  ],
                  "bands": [
                    1,
                    2
                  ],
                  "stacks": [
                    2
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2
                  ],
                  "stacks": [
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "E3<->F3",
                    "E6<->F6"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->4",
                      "2<->4"
                    ],
                    "digitPairCounts": {
                      "2<->4": 2
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->4",
                    "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                    "geometryCounts": {
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        3,
                        6
                      ],
                      "cols": [
                        5,
                        6
                      ],
                      "boxes": [
                        2,
                        5
                      ],
                      "bands": [
                        1,
                        2
                      ],
                      "stacks": [
                        2
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2
                      ],
                      "stacks": [
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198324567859761423426853791713942856961537284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-6"
                }
              ],
              "matchingMultiplicity": 2
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":4,\"digitPairCounts\":{\"2<->4\":4},\"repeatedDigitPair\":true,\"locationShape\":\"4 swaps / 4 rows / 4 cols / 4 boxes / 3 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2],\"cols\":[2,2,2,2],\"boxes\":[2,2,2,2],\"bands\":[2,2,4],\"stacks\":[2,6]},\"className\":\"genuine\",\"digits\":\"2<->4\",\"cellCount\":8}",
              "label": "Two-symbol balanced trades; 4 swaps",
              "swapDepth": 4,
              "shape": {
                "digitPairs": [
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4"
                ],
                "digitPairCounts": {
                  "2<->4": 4
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->4",
                "locationShape": "4 swaps / 4 rows / 4 cols / 4 boxes / 3 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    4,
                    7
                  ],
                  "cols": [
                    3,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    3,
                    6,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2,
                    4
                  ],
                  "stacks": [
                    2,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "C1<->I1",
                    "C2<->H2",
                    "G4<->H4",
                    "G7<->I7"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4"
                    ],
                    "digitPairCounts": {
                      "2<->4": 4
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->4",
                    "locationShape": "4 swaps / 4 rows / 4 cols / 4 boxes / 3 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        4,
                        7
                      ],
                      "cols": [
                        3,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        3,
                        6,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2,
                        4
                      ],
                      "stacks": [
                        2,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "532678914674195328198342567859761243426853791713924856961537482287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-7"
                }
              ],
              "matchingMultiplicity": 24
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":6,\"digitPairCounts\":{\"2<->4\":6},\"repeatedDigitPair\":true,\"locationShape\":\"6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":4},\"touchCounts\":{\"rows\":[2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2],\"bands\":[2,4,6],\"stacks\":[2,4,6]},\"className\":\"genuine\",\"digits\":\"2<->4\",\"cellCount\":12}",
              "label": "Two-symbol balanced trades; 6 swaps",
              "swapDepth": 6,
              "shape": {
                "digitPairs": [
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4"
                ],
                "digitPairCounts": {
                  "2<->4": 6
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->4",
                "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 4
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    6,
                    7
                  ],
                  "cols": [
                    3,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    4,
                    6
                  ],
                  "stacks": [
                    2,
                    4,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "C1<->I1",
                    "C2<->H2",
                    "E3<->F3",
                    "G4<->H4",
                    "E6<->F6",
                    "G7<->I7"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4"
                    ],
                    "digitPairCounts": {
                      "2<->4": 6
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->4",
                    "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 4
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        6,
                        7
                      ],
                      "cols": [
                        3,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        5,
                        6,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4,
                        6
                      ],
                      "stacks": [
                        2,
                        4,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "532678914674195328198324567859761243426853791713942856961537482287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-8"
                }
              ],
              "matchingMultiplicity": 720
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":3,\"digitPairCounts\":{\"2<->4\":3},\"repeatedDigitPair\":true,\"locationShape\":\"3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2],\"cols\":[2,2,2],\"boxes\":[2,2,2],\"bands\":[2,4],\"stacks\":[2,4]},\"className\":\"genuine\",\"digits\":\"2<->4\",\"cellCount\":6}",
              "label": "Two-symbol balanced trades; 3 swaps",
              "swapDepth": 3,
              "shape": {
                "digitPairs": [
                  "2<->4",
                  "2<->4",
                  "2<->4"
                ],
                "digitPairCounts": {
                  "2<->4": 3
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->4",
                "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    5,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    4
                  ],
                  "boxes": [
                    4,
                    7,
                    8
                  ],
                  "bands": [
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    4
                  ],
                  "stacks": [
                    2,
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "A5<->B5",
                    "A8<->D8",
                    "B9<->D9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->4",
                      "2<->4",
                      "2<->4"
                    ],
                    "digitPairCounts": {
                      "2<->4": 3
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->4",
                    "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        5,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        4
                      ],
                      "boxes": [
                        4,
                        7,
                        8
                      ],
                      "bands": [
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4
                      ],
                      "stacks": [
                        2,
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567859761423246853791713924856961537284487219635325486179",
                  "className": "genuine",
                  "endpointKey": "family-8"
                }
              ],
              "matchingMultiplicity": 6
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":5,\"digitPairCounts\":{\"2<->4\":5},\"repeatedDigitPair\":true,\"locationShape\":\"5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":3},\"touchCounts\":{\"rows\":[2,2,2,2,2],\"cols\":[2,2,2,2,2],\"boxes\":[2,2,2,2,2],\"bands\":[2,4,4],\"stacks\":[4,6]},\"className\":\"genuine\",\"digits\":\"2<->4\",\"cellCount\":10}",
              "label": "Two-symbol balanced trades; 5 swaps",
              "swapDepth": 5,
              "shape": {
                "digitPairs": [
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4"
                ],
                "digitPairCounts": {
                  "2<->4": 5
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->4",
                "locationShape": "5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 3
                },
                "touched": {
                  "rows": [
                    3,
                    5,
                    6,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    4,
                    5,
                    6
                  ],
                  "boxes": [
                    2,
                    4,
                    5,
                    7,
                    8
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    4,
                    4
                  ],
                  "stacks": [
                    4,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "E3<->F3",
                    "A5<->B5",
                    "E6<->F6",
                    "A8<->D8",
                    "B9<->D9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4"
                    ],
                    "digitPairCounts": {
                      "2<->4": 5
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->4",
                    "locationShape": "5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 3
                    },
                    "touched": {
                      "rows": [
                        3,
                        5,
                        6,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        4,
                        5,
                        6
                      ],
                      "boxes": [
                        2,
                        4,
                        5,
                        7,
                        8
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4,
                        4
                      ],
                      "stacks": [
                        4,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198324567859761423246853791713942856961537284487219635325486179",
                  "className": "genuine",
                  "endpointKey": "family-7"
                }
              ],
              "matchingMultiplicity": 120
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":7,\"digitPairCounts\":{\"2<->4\":7},\"repeatedDigitPair\":true,\"locationShape\":\"7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":4,\"same-row-inside-box\":3},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2],\"bands\":[4,4,6],\"stacks\":[2,6,6]},\"className\":\"genuine\",\"digits\":\"2<->4\",\"cellCount\":14}",
              "label": "Two-symbol balanced trades; 7 swaps",
              "swapDepth": 7,
              "shape": {
                "digitPairs": [
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4"
                ],
                "digitPairCounts": {
                  "2<->4": 7
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->4",
                "locationShape": "7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 4,
                  "same-row-inside-box": 3
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    4,
                    5,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    3,
                    4,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    4,
                    4,
                    6
                  ],
                  "stacks": [
                    2,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "C1<->I1",
                    "C2<->H2",
                    "G4<->H4",
                    "A5<->B5",
                    "G7<->I7",
                    "A8<->D8",
                    "B9<->D9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4"
                    ],
                    "digitPairCounts": {
                      "2<->4": 7
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->4",
                    "locationShape": "7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 4,
                      "same-row-inside-box": 3
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        4,
                        5,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        3,
                        4,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        4,
                        4,
                        6
                      ],
                      "stacks": [
                        2,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "532678914674195328198342567859761243246853791713924856961537482487219635325486179",
                  "className": "genuine",
                  "endpointKey": "family-6"
                }
              ],
              "matchingMultiplicity": 5040
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":3,\"digitPairCounts\":{\"2<->5\":3},\"repeatedDigitPair\":true,\"locationShape\":\"3 swaps / 3 rows / 3 cols / 3 boxes / 1 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":3},\"touchCounts\":{\"rows\":[2,2,2],\"cols\":[2,2,2],\"boxes\":[2,2,2],\"bands\":[6],\"stacks\":[2,2,2]},\"className\":\"genuine\",\"digits\":\"2<->5\",\"cellCount\":6}",
              "label": "Two-symbol balanced trades; 3 swaps",
              "swapDepth": 3,
              "shape": {
                "digitPairs": [
                  "2<->5",
                  "2<->5",
                  "2<->5"
                ],
                "digitPairCounts": {
                  "2<->5": 3
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->5",
                "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 1 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 3
                },
                "touched": {
                  "rows": [
                    4,
                    5,
                    6
                  ],
                  "cols": [
                    2,
                    5,
                    8
                  ],
                  "boxes": [
                    4,
                    5,
                    6
                  ],
                  "bands": [
                    2
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6
                  ],
                  "stacks": [
                    2,
                    2,
                    2
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "B4<->H4",
                    "B5<->E5",
                    "E6<->H6"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->5",
                      "2<->5",
                      "2<->5"
                    ],
                    "digitPairCounts": {
                      "2<->5": 3
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->5",
                    "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 1 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 3
                    },
                    "touched": {
                      "rows": [
                        4,
                        5,
                        6
                      ],
                      "cols": [
                        2,
                        5,
                        8
                      ],
                      "boxes": [
                        4,
                        5,
                        6
                      ],
                      "bands": [
                        2
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6
                      ],
                      "stacks": [
                        2,
                        2,
                        2
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567829761453456823791713954826961537284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-9"
                }
              ],
              "matchingMultiplicity": 6
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":6,\"digitPairCounts\":{\"2<->5\":6},\"repeatedDigitPair\":true,\"locationShape\":\"6 swaps / 6 rows / 6 cols / 6 boxes / 2 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":6},\"touchCounts\":{\"rows\":[2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2],\"bands\":[6,6],\"stacks\":[4,4,4]},\"className\":\"genuine\",\"digits\":\"2<->5\",\"cellCount\":12}",
              "label": "Two-symbol balanced trades; 6 swaps",
              "swapDepth": 6,
              "shape": {
                "digitPairs": [
                  "2<->5",
                  "2<->5",
                  "2<->5",
                  "2<->5",
                  "2<->5",
                  "2<->5"
                ],
                "digitPairCounts": {
                  "2<->5": 6
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->5",
                "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 2 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 6
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    3,
                    4,
                    6,
                    7,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6
                  ],
                  "stacks": [
                    4,
                    4,
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "A1<->I1",
                    "C2<->F2",
                    "F3<->G3",
                    "D7<->G7",
                    "A8<->I8",
                    "C9<->D9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->5",
                      "2<->5",
                      "2<->5",
                      "2<->5",
                      "2<->5",
                      "2<->5"
                    ],
                    "digitPairCounts": {
                      "2<->5": 6
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->5",
                    "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 2 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 6
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        3,
                        4,
                        6,
                        7,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6
                      ],
                      "stacks": [
                        4,
                        4,
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "234678915675192348198345267859761423426853791713924856961237584587419632342586179",
                  "className": "genuine",
                  "endpointKey": "family-9"
                }
              ],
              "matchingMultiplicity": 720
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":4,\"digitPairCounts\":{\"2<->6\":4},\"repeatedDigitPair\":true,\"locationShape\":\"4 swaps / 4 rows / 4 cols / 4 boxes / 3 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2],\"cols\":[2,2,2,2],\"boxes\":[2,2,2,2],\"bands\":[2,2,4],\"stacks\":[2,6]},\"className\":\"genuine\",\"digits\":\"2<->6\",\"cellCount\":8}",
              "label": "Two-symbol balanced trades; 4 swaps",
              "swapDepth": 4,
              "shape": {
                "digitPairs": [
                  "2<->6",
                  "2<->6",
                  "2<->6",
                  "2<->6"
                ],
                "digitPairCounts": {
                  "2<->6": 4
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->6",
                "locationShape": "4 swaps / 4 rows / 4 cols / 4 boxes / 3 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    2,
                    5,
                    7,
                    8
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    7
                  ],
                  "boxes": [
                    1,
                    4,
                    7,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2,
                    4
                  ],
                  "stacks": [
                    2,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "A2<->C2",
                    "B5<->C5",
                    "B7<->G7",
                    "A8<->G8"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->6",
                      "2<->6",
                      "2<->6",
                      "2<->6"
                    ],
                    "digitPairCounts": {
                      "2<->6": 4
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->6",
                    "locationShape": "4 swaps / 4 rows / 4 cols / 4 boxes / 3 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        2,
                        5,
                        7,
                        8
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        7
                      ],
                      "boxes": [
                        1,
                        4,
                        7,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2,
                        4
                      ],
                      "stacks": [
                        2,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912276195348198342567859761423462853791713924856921537684687419235345286179",
                  "className": "genuine",
                  "endpointKey": "family-10"
                }
              ],
              "matchingMultiplicity": 24
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":5,\"digitPairCounts\":{\"2<->6\":5},\"repeatedDigitPair\":true,\"locationShape\":\"5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":4,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2,2,2],\"cols\":[2,2,2,2,2],\"boxes\":[2,2,2,2,2],\"bands\":[2,4,4],\"stacks\":[4,6]},\"className\":\"genuine\",\"digits\":\"2<->6\",\"cellCount\":10}",
              "label": "Two-symbol balanced trades; 5 swaps",
              "swapDepth": 5,
              "shape": {
                "digitPairs": [
                  "2<->6",
                  "2<->6",
                  "2<->6",
                  "2<->6",
                  "2<->6"
                ],
                "digitPairCounts": {
                  "2<->6": 5
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->6",
                "locationShape": "5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 4,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    1,
                    3,
                    4,
                    6,
                    9
                  ],
                  "cols": [
                    4,
                    5,
                    6,
                    8,
                    9
                  ],
                  "boxes": [
                    2,
                    3,
                    5,
                    6,
                    8
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    4,
                    4
                  ],
                  "stacks": [
                    4,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "D1<->I1",
                    "F3<->H3",
                    "E4<->H4",
                    "E6<->I6",
                    "D9<->F9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->6",
                      "2<->6",
                      "2<->6",
                      "2<->6",
                      "2<->6"
                    ],
                    "digitPairCounts": {
                      "2<->6": 5
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->6",
                    "locationShape": "5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 4,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        3,
                        4,
                        6,
                        9
                      ],
                      "cols": [
                        4,
                        5,
                        6,
                        8,
                        9
                      ],
                      "boxes": [
                        2,
                        3,
                        5,
                        6,
                        8
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4,
                        4
                      ],
                      "stacks": [
                        4,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534278916672195348198346527859721463426853791713964852961537284287419635345682179",
                  "className": "genuine",
                  "endpointKey": "family-10"
                }
              ],
              "matchingMultiplicity": 120
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":3,\"digitPairCounts\":{\"2<->8\":3},\"repeatedDigitPair\":true,\"locationShape\":\"3 swaps / 3 rows / 3 cols / 3 boxes / 1 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":3},\"touchCounts\":{\"rows\":[2,2,2],\"cols\":[2,2,2],\"boxes\":[2,2,2],\"bands\":[6],\"stacks\":[2,2,2]},\"className\":\"genuine\",\"digits\":\"2<->8\",\"cellCount\":6}",
              "label": "Two-symbol balanced trades; 3 swaps",
              "swapDepth": 3,
              "shape": {
                "digitPairs": [
                  "2<->8",
                  "2<->8",
                  "2<->8"
                ],
                "digitPairCounts": {
                  "2<->8": 3
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->8",
                "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 1 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 3
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3
                  ],
                  "cols": [
                    3,
                    6,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3
                  ],
                  "bands": [
                    1
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6
                  ],
                  "stacks": [
                    2,
                    2,
                    2
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "F1<->I1",
                    "C2<->I2",
                    "C3<->F3"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->8",
                      "2<->8",
                      "2<->8"
                    ],
                    "digitPairCounts": {
                      "2<->8": 3
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->8",
                    "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 1 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 3
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3
                      ],
                      "cols": [
                        3,
                        6,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3
                      ],
                      "bands": [
                        1
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6
                      ],
                      "stacks": [
                        2,
                        2,
                        2
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534672918678195342192348567859761423426853791713924856961537284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-11"
                }
              ],
              "matchingMultiplicity": 6
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":6,\"digitPairCounts\":{\"2<->8\":6},\"repeatedDigitPair\":true,\"locationShape\":\"6 swaps / 6 rows / 6 cols / 6 boxes / 2 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":3,\"same-row-inside-box\":3},\"touchCounts\":{\"rows\":[2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2],\"bands\":[6,6],\"stacks\":[4,4,4]},\"className\":\"genuine\",\"digits\":\"2<->8\",\"cellCount\":12}",
              "label": "Two-symbol balanced trades; 6 swaps",
              "swapDepth": 6,
              "shape": {
                "digitPairs": [
                  "2<->8",
                  "2<->8",
                  "2<->8",
                  "2<->8",
                  "2<->8",
                  "2<->8"
                ],
                "digitPairCounts": {
                  "2<->8": 6
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->8",
                "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 2 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 3,
                  "same-row-inside-box": 3
                },
                "touched": {
                  "rows": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    4,
                    5,
                    7,
                    8
                  ],
                  "boxes": [
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6
                  ],
                  "stacks": [
                    4,
                    4,
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "A4<->H4",
                    "B5<->D5",
                    "E6<->G6",
                    "G7<->H7",
                    "A8<->B8",
                    "D9<->E9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->8",
                      "2<->8",
                      "2<->8",
                      "2<->8",
                      "2<->8",
                      "2<->8"
                    ],
                    "digitPairCounts": {
                      "2<->8": 6
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->8",
                    "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 2 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 3,
                      "same-row-inside-box": 3
                    },
                    "touched": {
                      "rows": [
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        4,
                        5,
                        7,
                        8
                      ],
                      "boxes": [
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6
                      ],
                      "stacks": [
                        4,
                        4,
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567259761483486253791713984256961537824827419635345826179",
                  "className": "genuine",
                  "endpointKey": "family-11"
                }
              ],
              "matchingMultiplicity": 720
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":5,\"digitPairCounts\":{\"3<->4\":5},\"repeatedDigitPair\":true,\"locationShape\":\"5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":3},\"touchCounts\":{\"rows\":[2,2,2,2,2],\"cols\":[2,2,2,2,2],\"boxes\":[2,2,2,2,2],\"bands\":[2,4,4],\"stacks\":[4,6]},\"className\":\"genuine\",\"digits\":\"3<->4\",\"cellCount\":10}",
              "label": "Two-symbol balanced trades; 5 swaps",
              "swapDepth": 5,
              "shape": {
                "digitPairs": [
                  "3<->4",
                  "3<->4",
                  "3<->4",
                  "3<->4",
                  "3<->4"
                ],
                "digitPairCounts": {
                  "3<->4": 5
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "3<->4",
                "locationShape": "5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 3
                },
                "touched": {
                  "rows": [
                    2,
                    3,
                    4,
                    7,
                    8
                  ],
                  "cols": [
                    4,
                    5,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    2,
                    3,
                    6,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    4,
                    4
                  ],
                  "stacks": [
                    4,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "G2<->H2",
                    "D3<->E3",
                    "G4<->I4",
                    "E7<->I7",
                    "D8<->H8"
                  ],
                  "shape": {
                    "digitPairs": [
                      "3<->4",
                      "3<->4",
                      "3<->4",
                      "3<->4",
                      "3<->4"
                    ],
                    "digitPairCounts": {
                      "3<->4": 5
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "3<->4",
                    "locationShape": "5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 3
                    },
                    "touched": {
                      "rows": [
                        2,
                        3,
                        4,
                        7,
                        8
                      ],
                      "cols": [
                        4,
                        5,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        2,
                        3,
                        6,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4,
                        4
                      ],
                      "stacks": [
                        4,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195438198432567859761324426853791713924856961547283287319645345286179",
                  "className": "genuine",
                  "endpointKey": "family-12"
                }
              ],
              "matchingMultiplicity": 120
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":4,\"digitPairCounts\":{\"3<->4\":4},\"repeatedDigitPair\":true,\"locationShape\":\"4 swaps / 4 rows / 4 cols / 4 boxes / 3 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2],\"cols\":[2,2,2,2],\"boxes\":[2,2,2,2],\"bands\":[2,2,4],\"stacks\":[2,6]},\"className\":\"genuine\",\"digits\":\"3<->4\",\"cellCount\":8}",
              "label": "Two-symbol balanced trades; 4 swaps",
              "swapDepth": 4,
              "shape": {
                "digitPairs": [
                  "3<->4",
                  "3<->4",
                  "3<->4",
                  "3<->4"
                ],
                "digitPairCounts": {
                  "3<->4": 4
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "3<->4",
                "locationShape": "4 swaps / 4 rows / 4 cols / 4 boxes / 3 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    5,
                    6,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    6
                  ],
                  "boxes": [
                    1,
                    4,
                    5,
                    7
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2,
                    4
                  ],
                  "stacks": [
                    2,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "B1<->C1",
                    "A5<->F5",
                    "C6<->F6",
                    "A9<->B9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "3<->4",
                      "3<->4",
                      "3<->4",
                      "3<->4"
                    ],
                    "digitPairCounts": {
                      "3<->4": 4
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "3<->4",
                    "locationShape": "4 swaps / 4 rows / 4 cols / 4 boxes / 3 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        5,
                        6,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        6
                      ],
                      "boxes": [
                        1,
                        4,
                        5,
                        7
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2,
                        4
                      ],
                      "stacks": [
                        2,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "543678912672195348198342567859761423326854791714923856961537284287419635435286179",
                  "className": "genuine",
                  "endpointKey": "family-12"
                }
              ],
              "matchingMultiplicity": 24
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":4,\"digitPairCounts\":{\"3<->5\":4},\"repeatedDigitPair\":true,\"locationShape\":\"4 swaps / 4 rows / 4 cols / 4 boxes / 3 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2],\"cols\":[2,2,2,2],\"boxes\":[2,2,2,2],\"bands\":[2,2,4],\"stacks\":[2,6]},\"className\":\"genuine\",\"digits\":\"3<->5\",\"cellCount\":8}",
              "label": "Two-symbol balanced trades; 4 swaps",
              "swapDepth": 4,
              "shape": {
                "digitPairs": [
                  "3<->5",
                  "3<->5",
                  "3<->5",
                  "3<->5"
                ],
                "digitPairCounts": {
                  "3<->5": 4
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "3<->5",
                "locationShape": "4 swaps / 4 rows / 4 cols / 4 boxes / 3 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    2,
                    3,
                    5,
                    7
                  ],
                  "cols": [
                    4,
                    5,
                    6,
                    7
                  ],
                  "boxes": [
                    2,
                    3,
                    5,
                    8
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2,
                    4
                  ],
                  "stacks": [
                    2,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "F2<->G2",
                    "D3<->G3",
                    "E5<->F5",
                    "D7<->E7"
                  ],
                  "shape": {
                    "digitPairs": [
                      "3<->5",
                      "3<->5",
                      "3<->5",
                      "3<->5"
                    ],
                    "digitPairCounts": {
                      "3<->5": 4
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "3<->5",
                    "locationShape": "4 swaps / 4 rows / 4 cols / 4 boxes / 3 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        2,
                        3,
                        5,
                        7
                      ],
                      "cols": [
                        4,
                        5,
                        6,
                        7
                      ],
                      "boxes": [
                        2,
                        3,
                        5,
                        8
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2,
                        4
                      ],
                      "stacks": [
                        2,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672193548198542367859761423426835791713924856961357284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-13"
                }
              ],
              "matchingMultiplicity": 24
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":5,\"digitPairCounts\":{\"3<->5\":5},\"repeatedDigitPair\":true,\"locationShape\":\"5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":3},\"touchCounts\":{\"rows\":[2,2,2,2,2],\"cols\":[2,2,2,2,2],\"boxes\":[2,2,2,2,2],\"bands\":[2,4,4],\"stacks\":[4,6]},\"className\":\"genuine\",\"digits\":\"3<->5\",\"cellCount\":10}",
              "label": "Two-symbol balanced trades; 5 swaps",
              "swapDepth": 5,
              "shape": {
                "digitPairs": [
                  "3<->5",
                  "3<->5",
                  "3<->5",
                  "3<->5",
                  "3<->5"
                ],
                "digitPairCounts": {
                  "3<->5": 5
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "3<->5",
                "locationShape": "5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 3
                },
                "touched": {
                  "rows": [
                    1,
                    4,
                    6,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    4,
                    6,
                    7,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    4,
                    4
                  ],
                  "stacks": [
                    4,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "A1<->B1",
                    "B4<->I4",
                    "C6<->H6",
                    "H8<->I8",
                    "A9<->C9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "3<->5",
                      "3<->5",
                      "3<->5",
                      "3<->5",
                      "3<->5"
                    ],
                    "digitPairCounts": {
                      "3<->5": 5
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "3<->5",
                    "locationShape": "5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 3
                    },
                    "touched": {
                      "rows": [
                        1,
                        4,
                        6,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        4,
                        6,
                        7,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4,
                        4
                      ],
                      "stacks": [
                        4,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "354678912672195348198342567839761425426853791715924836961537284287419653543286179",
                  "className": "genuine",
                  "endpointKey": "family-13"
                }
              ],
              "matchingMultiplicity": 120
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":6,\"digitPairCounts\":{\"3<->7\":6},\"repeatedDigitPair\":true,\"locationShape\":\"6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":5,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2],\"bands\":[2,4,6],\"stacks\":[2,4,6]},\"className\":\"genuine\",\"digits\":\"3<->7\",\"cellCount\":12}",
              "label": "Two-symbol balanced trades; 6 swaps",
              "swapDepth": 6,
              "shape": {
                "digitPairs": [
                  "3<->7",
                  "3<->7",
                  "3<->7",
                  "3<->7",
                  "3<->7",
                  "3<->7"
                ],
                "digitPairCounts": {
                  "3<->7": 6
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "3<->7",
                "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 5,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    7
                  ],
                  "cols": [
                    2,
                    4,
                    5,
                    6,
                    7,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    8
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    4,
                    6
                  ],
                  "stacks": [
                    2,
                    4,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "B1<->E1",
                    "B2<->G2",
                    "D3<->I3",
                    "D4<->I4",
                    "F5<->G5",
                    "E7<->F7"
                  ],
                  "shape": {
                    "digitPairs": [
                      "3<->7",
                      "3<->7",
                      "3<->7",
                      "3<->7",
                      "3<->7",
                      "3<->7"
                    ],
                    "digitPairCounts": {
                      "3<->7": 6
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "3<->7",
                    "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 5,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        7
                      ],
                      "cols": [
                        2,
                        4,
                        5,
                        6,
                        7,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        5,
                        6,
                        8
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4,
                        6
                      ],
                      "stacks": [
                        2,
                        4,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "574638912632195748198742563859361427426857391713924856961573284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-14"
                }
              ],
              "matchingMultiplicity": 720
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":3,\"digitPairCounts\":{\"3<->7\":3},\"repeatedDigitPair\":true,\"locationShape\":\"3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2],\"cols\":[2,2,2],\"boxes\":[2,2,2],\"bands\":[2,4],\"stacks\":[2,4]},\"className\":\"genuine\",\"digits\":\"3<->7\",\"cellCount\":6}",
              "label": "Two-symbol balanced trades; 3 swaps",
              "swapDepth": 3,
              "shape": {
                "digitPairs": [
                  "3<->7",
                  "3<->7",
                  "3<->7"
                ],
                "digitPairCounts": {
                  "3<->7": 3
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "3<->7",
                "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    6,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    3,
                    8
                  ],
                  "boxes": [
                    4,
                    7,
                    9
                  ],
                  "bands": [
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    4
                  ],
                  "stacks": [
                    2,
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "A6<->C6",
                    "C8<->H8",
                    "A9<->H9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "3<->7",
                      "3<->7",
                      "3<->7"
                    ],
                    "digitPairCounts": {
                      "3<->7": 3
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "3<->7",
                    "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 2 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        6,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        3,
                        8
                      ],
                      "boxes": [
                        4,
                        7,
                        9
                      ],
                      "bands": [
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        4
                      ],
                      "stacks": [
                        2,
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567859761423426853791317924856961537284283419675745286139",
                  "className": "genuine",
                  "endpointKey": "family-14"
                }
              ],
              "matchingMultiplicity": 6
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":2,\"digitPairCounts\":{\"4<->5\":2},\"repeatedDigitPair\":true,\"locationShape\":\"2 swaps / 2 rows / 2 cols / 2 boxes / 1 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2},\"touchCounts\":{\"rows\":[2,2],\"cols\":[2,2],\"boxes\":[2,2],\"bands\":[4],\"stacks\":[2,2]},\"className\":\"genuine\",\"digits\":\"4<->5\",\"cellCount\":4}",
              "label": "Two-symbol balanced trades; 2 swaps",
              "swapDepth": 2,
              "shape": {
                "digitPairs": [
                  "4<->5",
                  "4<->5"
                ],
                "digitPairCounts": {
                  "4<->5": 2
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->5",
                "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 1 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2
                },
                "touched": {
                  "rows": [
                    7,
                    8
                  ],
                  "cols": [
                    4,
                    9
                  ],
                  "boxes": [
                    8,
                    9
                  ],
                  "bands": [
                    3
                  ],
                  "stacks": [
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2
                  ],
                  "bands": [
                    4
                  ],
                  "stacks": [
                    2,
                    2
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "D7<->I7",
                    "D8<->I8"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->5",
                      "4<->5"
                    ],
                    "digitPairCounts": {
                      "4<->5": 2
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->5",
                    "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 1 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2
                    },
                    "touched": {
                      "rows": [
                        7,
                        8
                      ],
                      "cols": [
                        4,
                        9
                      ],
                      "boxes": [
                        8,
                        9
                      ],
                      "bands": [
                        3
                      ],
                      "stacks": [
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2
                      ],
                      "bands": [
                        4
                      ],
                      "stacks": [
                        2,
                        2
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567859761423426853791713924856961437285287519634345286179",
                  "className": "genuine",
                  "endpointKey": "family-15"
                }
              ],
              "matchingMultiplicity": 2
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":7,\"digitPairCounts\":{\"4<->5\":7},\"repeatedDigitPair\":true,\"locationShape\":\"7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":5,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2],\"bands\":[2,6,6],\"stacks\":[4,4,6]},\"className\":\"genuine\",\"digits\":\"4<->5\",\"cellCount\":14}",
              "label": "Two-symbol balanced trades; 7 swaps",
              "swapDepth": 7,
              "shape": {
                "digitPairs": [
                  "4<->5",
                  "4<->5",
                  "4<->5",
                  "4<->5",
                  "4<->5",
                  "4<->5",
                  "4<->5"
                ],
                "digitPairCounts": {
                  "4<->5": 7
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->5",
                "locationShape": "7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 5,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    7,
                    8
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    6,
                    6
                  ],
                  "stacks": [
                    4,
                    4,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "A1<->C1",
                    "F2<->H2",
                    "E3<->G3",
                    "B4<->G4",
                    "A5<->E5",
                    "F6<->H6",
                    "B9<->C9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->5",
                      "4<->5",
                      "4<->5",
                      "4<->5",
                      "4<->5",
                      "4<->5",
                      "4<->5"
                    ],
                    "digitPairCounts": {
                      "4<->5": 7
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->5",
                    "locationShape": "7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 5,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        5,
                        6,
                        7,
                        8
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        6,
                        6
                      ],
                      "stacks": [
                        4,
                        4,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "435678912672194358198352467849761523526843791713925846961537284287419635354286179",
                  "className": "genuine",
                  "endpointKey": "family-15"
                }
              ],
              "matchingMultiplicity": 5040
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":2,\"digitPairCounts\":{\"4<->8\":2},\"repeatedDigitPair\":true,\"locationShape\":\"2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks\",\"geometryCounts\":{\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2],\"cols\":[2,2],\"boxes\":[2,2],\"bands\":[2,2],\"stacks\":[4]},\"className\":\"genuine\",\"digits\":\"4<->8\",\"cellCount\":4}",
              "label": "Two-symbol balanced trades; 2 swaps",
              "swapDepth": 2,
              "shape": {
                "digitPairs": [
                  "4<->8",
                  "4<->8"
                ],
                "digitPairCounts": {
                  "4<->8": 2
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->8",
                "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                "geometryCounts": {
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    2,
                    7
                  ],
                  "cols": [
                    8,
                    9
                  ],
                  "boxes": [
                    3,
                    9
                  ],
                  "bands": [
                    1,
                    3
                  ],
                  "stacks": [
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2
                  ],
                  "stacks": [
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "H2<->I2",
                    "H7<->I7"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->8",
                      "4<->8"
                    ],
                    "digitPairCounts": {
                      "4<->8": 2
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->8",
                    "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                    "geometryCounts": {
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        2,
                        7
                      ],
                      "cols": [
                        8,
                        9
                      ],
                      "boxes": [
                        3,
                        9
                      ],
                      "bands": [
                        1,
                        3
                      ],
                      "stacks": [
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2
                      ],
                      "stacks": [
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195384198342567859761423426853791713924856961537248287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-16"
                }
              ],
              "matchingMultiplicity": 2
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":7,\"digitPairCounts\":{\"4<->8\":7},\"repeatedDigitPair\":true,\"locationShape\":\"7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2],\"bands\":[4,4,6],\"stacks\":[2,6,6]},\"className\":\"genuine\",\"digits\":\"4<->8\",\"cellCount\":14}",
              "label": "Two-symbol balanced trades; 7 swaps",
              "swapDepth": 7,
              "shape": {
                "digitPairs": [
                  "4<->8",
                  "4<->8",
                  "4<->8",
                  "4<->8",
                  "4<->8",
                  "4<->8",
                  "4<->8"
                ],
                "digitPairCounts": {
                  "4<->8": 7
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->8",
                "locationShape": "7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7
                },
                "touched": {
                  "rows": [
                    1,
                    3,
                    4,
                    5,
                    6,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                  ],
                  "boxes": [
                    1,
                    2,
                    4,
                    5,
                    6,
                    7,
                    8
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    4,
                    4,
                    6
                  ],
                  "stacks": [
                    2,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "C1<->F1",
                    "C3<->E3",
                    "A4<->G4",
                    "A5<->D5",
                    "F6<->G6",
                    "B8<->D8",
                    "B9<->E9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->8",
                      "4<->8",
                      "4<->8",
                      "4<->8",
                      "4<->8",
                      "4<->8",
                      "4<->8"
                    ],
                    "digitPairCounts": {
                      "4<->8": 7
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->8",
                    "locationShape": "7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7
                    },
                    "touched": {
                      "rows": [
                        1,
                        3,
                        4,
                        5,
                        6,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7
                      ],
                      "boxes": [
                        1,
                        2,
                        4,
                        5,
                        6,
                        7,
                        8
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        4,
                        4,
                        6
                      ],
                      "stacks": [
                        2,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "538674912672195348194382567459761823826453791713928456961537284247819635385246179",
                  "className": "genuine",
                  "endpointKey": "family-16"
                }
              ],
              "matchingMultiplicity": 5040
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":2,\"digitPairCounts\":{\"4<->9\":2},\"repeatedDigitPair\":true,\"locationShape\":\"2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks\",\"geometryCounts\":{\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2],\"cols\":[2,2],\"boxes\":[2,2],\"bands\":[2,2],\"stacks\":[4]},\"className\":\"genuine\",\"digits\":\"4<->9\",\"cellCount\":4}",
              "label": "Two-symbol balanced trades; 2 swaps",
              "swapDepth": 2,
              "shape": {
                "digitPairs": [
                  "4<->9",
                  "4<->9"
                ],
                "digitPairCounts": {
                  "4<->9": 2
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->9",
                "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                "geometryCounts": {
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    6,
                    8
                  ],
                  "cols": [
                    4,
                    6
                  ],
                  "boxes": [
                    5,
                    8
                  ],
                  "bands": [
                    2,
                    3
                  ],
                  "stacks": [
                    2
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2
                  ],
                  "stacks": [
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "D6<->F6",
                    "D8<->F8"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->9",
                      "4<->9"
                    ],
                    "digitPairCounts": {
                      "4<->9": 2
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->9",
                    "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                    "geometryCounts": {
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        6,
                        8
                      ],
                      "cols": [
                        4,
                        6
                      ],
                      "boxes": [
                        5,
                        8
                      ],
                      "bands": [
                        2,
                        3
                      ],
                      "stacks": [
                        2
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2
                      ],
                      "stacks": [
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567859761423426853791713429856961537284287914635345286179",
                  "className": "genuine",
                  "endpointKey": "family-17"
                }
              ],
              "matchingMultiplicity": 2
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":7,\"digitPairCounts\":{\"4<->9\":7},\"repeatedDigitPair\":true,\"locationShape\":\"7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2],\"bands\":[4,4,6],\"stacks\":[2,6,6]},\"className\":\"genuine\",\"digits\":\"4<->9\",\"cellCount\":14}",
              "label": "Two-symbol balanced trades; 7 swaps",
              "swapDepth": 7,
              "shape": {
                "digitPairs": [
                  "4<->9",
                  "4<->9",
                  "4<->9",
                  "4<->9",
                  "4<->9",
                  "4<->9",
                  "4<->9"
                ],
                "digitPairCounts": {
                  "4<->9": 7
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->9",
                "locationShape": "7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    7,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    5,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    6,
                    7,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    4,
                    4,
                    6
                  ],
                  "stacks": [
                    2,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "C1<->G1",
                    "E2<->H2",
                    "B3<->E3",
                    "C4<->G4",
                    "A5<->H5",
                    "A7<->I7",
                    "B9<->I9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->9",
                      "4<->9",
                      "4<->9",
                      "4<->9",
                      "4<->9",
                      "4<->9",
                      "4<->9"
                    ],
                    "digitPairCounts": {
                      "4<->9": 7
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->9",
                    "locationShape": "7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        7,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        5,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        6,
                        7,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        4,
                        4,
                        6
                      ],
                      "stacks": [
                        2,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "539678412672145398148392567854761923926853741713924856461537289287419635395286174",
                  "className": "genuine",
                  "endpointKey": "family-17"
                }
              ],
              "matchingMultiplicity": 5040
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":3,\"digitPairCounts\":{\"5<->6\":3},\"repeatedDigitPair\":true,\"locationShape\":\"3 swaps / 3 rows / 3 cols / 3 boxes / 3 bands / 1 stacks\",\"geometryCounts\":{\"same-row-inside-box\":3},\"touchCounts\":{\"rows\":[2,2,2],\"cols\":[2,2,2],\"boxes\":[2,2,2],\"bands\":[2,2,2],\"stacks\":[6]},\"className\":\"genuine\",\"digits\":\"5<->6\",\"cellCount\":6}",
              "label": "Two-symbol balanced trades; 3 swaps",
              "swapDepth": 3,
              "shape": {
                "digitPairs": [
                  "5<->6",
                  "5<->6",
                  "5<->6"
                ],
                "digitPairCounts": {
                  "5<->6": 3
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "5<->6",
                "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 3 bands / 1 stacks",
                "geometryCounts": {
                  "same-row-inside-box": 3
                },
                "touched": {
                  "rows": [
                    3,
                    6,
                    8
                  ],
                  "cols": [
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    3,
                    6,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2,
                    2
                  ],
                  "stacks": [
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "G3<->H3",
                    "H6<->I6",
                    "G8<->I8"
                  ],
                  "shape": {
                    "digitPairs": [
                      "5<->6",
                      "5<->6",
                      "5<->6"
                    ],
                    "digitPairCounts": {
                      "5<->6": 3
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "5<->6",
                    "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 3 bands / 1 stacks",
                    "geometryCounts": {
                      "same-row-inside-box": 3
                    },
                    "touched": {
                      "rows": [
                        3,
                        6,
                        8
                      ],
                      "cols": [
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        3,
                        6,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2,
                        2
                      ],
                      "stacks": [
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342657859761423426853791713924865961537284287419536345286179",
                  "className": "genuine",
                  "endpointKey": "family-18"
                }
              ],
              "matchingMultiplicity": 6
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":6,\"digitPairCounts\":{\"5<->6\":6},\"repeatedDigitPair\":true,\"locationShape\":\"6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":6},\"touchCounts\":{\"rows\":[2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2],\"bands\":[4,4,4],\"stacks\":[6,6]},\"className\":\"genuine\",\"digits\":\"5<->6\",\"cellCount\":12}",
              "label": "Two-symbol balanced trades; 6 swaps",
              "swapDepth": 6,
              "shape": {
                "digitPairs": [
                  "5<->6",
                  "5<->6",
                  "5<->6",
                  "5<->6",
                  "5<->6",
                  "5<->6"
                ],
                "digitPairCounts": {
                  "5<->6": 6
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "5<->6",
                "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 6
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    4,
                    5,
                    7,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                  ],
                  "boxes": [
                    1,
                    2,
                    4,
                    5,
                    7,
                    8
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    4,
                    4,
                    4
                  ],
                  "stacks": [
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "A1<->D1",
                    "A2<->F2",
                    "B4<->E4",
                    "C5<->E5",
                    "B7<->D7",
                    "C9<->F9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "5<->6",
                      "5<->6",
                      "5<->6",
                      "5<->6",
                      "5<->6",
                      "5<->6"
                    ],
                    "digitPairCounts": {
                      "5<->6": 6
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "5<->6",
                    "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 3 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 6
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        4,
                        5,
                        7,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                      ],
                      "boxes": [
                        1,
                        2,
                        4,
                        5,
                        7,
                        8
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        4,
                        4,
                        4
                      ],
                      "stacks": [
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "634578912572196348198342567869751423425863791713924856951637284287419635346285179",
                  "className": "genuine",
                  "endpointKey": "family-18"
                }
              ],
              "matchingMultiplicity": 720
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":2,\"digitPairCounts\":{\"6<->7\":2},\"repeatedDigitPair\":true,\"locationShape\":\"2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks\",\"geometryCounts\":{\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2],\"cols\":[2,2],\"boxes\":[2,2],\"bands\":[2,2],\"stacks\":[4]},\"className\":\"genuine\",\"digits\":\"6<->7\",\"cellCount\":4}",
              "label": "Two-symbol balanced trades; 2 swaps",
              "swapDepth": 2,
              "shape": {
                "digitPairs": [
                  "6<->7",
                  "6<->7"
                ],
                "digitPairCounts": {
                  "6<->7": 2
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "6<->7",
                "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                "geometryCounts": {
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    4
                  ],
                  "cols": [
                    4,
                    5
                  ],
                  "boxes": [
                    2,
                    5
                  ],
                  "bands": [
                    1,
                    2
                  ],
                  "stacks": [
                    2
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2
                  ],
                  "stacks": [
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "D1<->E1",
                    "D4<->E4"
                  ],
                  "shape": {
                    "digitPairs": [
                      "6<->7",
                      "6<->7"
                    ],
                    "digitPairCounts": {
                      "6<->7": 2
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "6<->7",
                    "locationShape": "2 swaps / 2 rows / 2 cols / 2 boxes / 2 bands / 1 stacks",
                    "geometryCounts": {
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        4
                      ],
                      "cols": [
                        4,
                        5
                      ],
                      "boxes": [
                        2,
                        5
                      ],
                      "bands": [
                        1,
                        2
                      ],
                      "stacks": [
                        2
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2
                      ],
                      "stacks": [
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534768912672195348198342567859671423426853791713924856961537284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-19"
                }
              ],
              "matchingMultiplicity": 2
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":7,\"digitPairCounts\":{\"6<->7\":7},\"repeatedDigitPair\":true,\"locationShape\":\"7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":5,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2],\"bands\":[4,4,6],\"stacks\":[2,6,6]},\"className\":\"genuine\",\"digits\":\"6<->7\",\"cellCount\":14}",
              "label": "Two-symbol balanced trades; 7 swaps",
              "swapDepth": 7,
              "shape": {
                "digitPairs": [
                  "6<->7",
                  "6<->7",
                  "6<->7",
                  "6<->7",
                  "6<->7",
                  "6<->7",
                  "6<->7"
                ],
                "digitPairCounts": {
                  "6<->7": 7
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "6<->7",
                "locationShape": "7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 5,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    2,
                    3,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    3,
                    4,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    4,
                    4,
                    6
                  ],
                  "stacks": [
                    2,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "A2<->B2",
                    "H3<->I3",
                    "C5<->G5",
                    "A6<->I6",
                    "B7<->F7",
                    "C8<->G8",
                    "F9<->H9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "6<->7",
                      "6<->7",
                      "6<->7",
                      "6<->7",
                      "6<->7",
                      "6<->7",
                      "6<->7"
                    ],
                    "digitPairCounts": {
                      "6<->7": 7
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "6<->7",
                    "locationShape": "7 swaps / 7 rows / 7 cols / 7 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 5,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        2,
                        3,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        3,
                        4,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        4,
                        4,
                        6
                      ],
                      "stacks": [
                        2,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912762195348198342576859761423427853691613924857971536284286419735345287169",
                  "className": "genuine",
                  "endpointKey": "family-19"
                }
              ],
              "matchingMultiplicity": 5040
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":3,\"digitPairCounts\":{\"7<->8\":3},\"repeatedDigitPair\":true,\"locationShape\":\"3 swaps / 3 rows / 3 cols / 3 boxes / 1 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":3},\"touchCounts\":{\"rows\":[2,2,2],\"cols\":[2,2,2],\"boxes\":[2,2,2],\"bands\":[6],\"stacks\":[2,2,2]},\"className\":\"genuine\",\"digits\":\"7<->8\",\"cellCount\":6}",
              "label": "Two-symbol balanced trades; 3 swaps",
              "swapDepth": 3,
              "shape": {
                "digitPairs": [
                  "7<->8",
                  "7<->8",
                  "7<->8"
                ],
                "digitPairCounts": {
                  "7<->8": 3
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "7<->8",
                "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 1 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 3
                },
                "touched": {
                  "rows": [
                    4,
                    5,
                    6
                  ],
                  "cols": [
                    1,
                    4,
                    7
                  ],
                  "boxes": [
                    4,
                    5,
                    6
                  ],
                  "bands": [
                    2
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6
                  ],
                  "stacks": [
                    2,
                    2,
                    2
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "A4<->D4",
                    "D5<->G5",
                    "A6<->G6"
                  ],
                  "shape": {
                    "digitPairs": [
                      "7<->8",
                      "7<->8",
                      "7<->8"
                    ],
                    "digitPairCounts": {
                      "7<->8": 3
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "7<->8",
                    "locationShape": "3 swaps / 3 rows / 3 cols / 3 boxes / 1 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 3
                    },
                    "touched": {
                      "rows": [
                        4,
                        5,
                        6
                      ],
                      "cols": [
                        1,
                        4,
                        7
                      ],
                      "boxes": [
                        4,
                        5,
                        6
                      ],
                      "bands": [
                        2
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6
                      ],
                      "stacks": [
                        2,
                        2,
                        2
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567759861423426753891813924756961537284287419635345286179",
                  "className": "genuine",
                  "endpointKey": "family-20"
                }
              ],
              "matchingMultiplicity": 6
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":6,\"digitPairCounts\":{\"7<->8\":6},\"repeatedDigitPair\":true,\"locationShape\":\"6 swaps / 6 rows / 6 cols / 6 boxes / 2 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":4,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2],\"bands\":[6,6],\"stacks\":[4,4,4]},\"className\":\"genuine\",\"digits\":\"7<->8\",\"cellCount\":12}",
              "label": "Two-symbol balanced trades; 6 swaps",
              "swapDepth": 6,
              "shape": {
                "digitPairs": [
                  "7<->8",
                  "7<->8",
                  "7<->8",
                  "7<->8",
                  "7<->8",
                  "7<->8"
                ],
                "digitPairCounts": {
                  "7<->8": 6
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "7<->8",
                "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 2 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 4,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    2,
                    3,
                    5,
                    6,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6
                  ],
                  "stacks": [
                    4,
                    4,
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "E1<->F1",
                    "B2<->I2",
                    "C3<->I3",
                    "F7<->H7",
                    "B8<->C8",
                    "E9<->H9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8"
                    ],
                    "digitPairCounts": {
                      "7<->8": 6
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "7<->8",
                    "locationShape": "6 swaps / 6 rows / 6 cols / 6 boxes / 2 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 4,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        2,
                        3,
                        5,
                        6,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6
                      ],
                      "stacks": [
                        4,
                        4,
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534687912682195347197342568859761423426853791713924856961538274278419635345276189",
                  "className": "genuine",
                  "endpointKey": "family-20"
                }
              ],
              "matchingMultiplicity": 720
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":4,\"digitPairCounts\":{\"7<->9\":4},\"repeatedDigitPair\":true,\"locationShape\":\"4 swaps / 4 rows / 4 cols / 4 boxes / 2 bands / 2 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":4},\"touchCounts\":{\"rows\":[2,2,2,2],\"cols\":[2,2,2,2],\"boxes\":[2,2,2,2],\"bands\":[4,4],\"stacks\":[4,4]},\"className\":\"genuine\",\"digits\":\"7<->9\",\"cellCount\":8}",
              "label": "Two-symbol balanced trades; 4 swaps",
              "swapDepth": 4,
              "shape": {
                "digitPairs": [
                  "7<->9",
                  "7<->9",
                  "7<->9",
                  "7<->9"
                ],
                "digitPairCounts": {
                  "7<->9": 4
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "7<->9",
                "locationShape": "4 swaps / 4 rows / 4 cols / 4 boxes / 2 bands / 2 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 4
                },
                "touched": {
                  "rows": [
                    4,
                    6,
                    7,
                    8
                  ],
                  "cols": [
                    1,
                    3,
                    4,
                    6
                  ],
                  "boxes": [
                    4,
                    5,
                    7,
                    8
                  ],
                  "bands": [
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    4,
                    4
                  ],
                  "stacks": [
                    4,
                    4
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "C4<->D4",
                    "A6<->D6",
                    "A7<->F7",
                    "C8<->F8"
                  ],
                  "shape": {
                    "digitPairs": [
                      "7<->9",
                      "7<->9",
                      "7<->9",
                      "7<->9"
                    ],
                    "digitPairCounts": {
                      "7<->9": 4
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "7<->9",
                    "locationShape": "4 swaps / 4 rows / 4 cols / 4 boxes / 2 bands / 2 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 4
                    },
                    "touched": {
                      "rows": [
                        4,
                        6,
                        7,
                        8
                      ],
                      "cols": [
                        1,
                        3,
                        4,
                        6
                      ],
                      "boxes": [
                        4,
                        5,
                        7,
                        8
                      ],
                      "bands": [
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        4,
                        4
                      ],
                      "stacks": [
                        4,
                        4
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678912672195348198342567857961423426853791913724856761539284289417635345286179",
                  "className": "genuine",
                  "endpointKey": "family-23"
                }
              ],
              "matchingMultiplicity": 24
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":5,\"digitPairCounts\":{\"7<->9\":5},\"repeatedDigitPair\":true,\"locationShape\":\"5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":3,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2],\"cols\":[2,2,2,2,2],\"boxes\":[2,2,2,2,2],\"bands\":[2,2,6],\"stacks\":[2,2,6]},\"className\":\"genuine\",\"digits\":\"7<->9\",\"cellCount\":10}",
              "label": "Two-symbol balanced trades; 5 swaps",
              "swapDepth": 5,
              "shape": {
                "digitPairs": [
                  "7<->9",
                  "7<->9",
                  "7<->9",
                  "7<->9",
                  "7<->9"
                ],
                "digitPairCounts": {
                  "7<->9": 5
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "7<->9",
                "locationShape": "5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 3,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    5,
                    9
                  ],
                  "cols": [
                    2,
                    5,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    6,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    2,
                    2,
                    6
                  ],
                  "stacks": [
                    2,
                    2,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 0,
                "genuine": 1
              },
              "examples": [
                {
                  "moves": [
                    "E1<->G1",
                    "B2<->E2",
                    "B3<->I3",
                    "G5<->H5",
                    "H9<->I9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "7<->9",
                      "7<->9",
                      "7<->9",
                      "7<->9",
                      "7<->9"
                    ],
                    "digitPairCounts": {
                      "7<->9": 5
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "7<->9",
                    "locationShape": "5 swaps / 5 rows / 5 cols / 5 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 3,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        5,
                        9
                      ],
                      "cols": [
                        2,
                        5,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        6,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        2,
                        2,
                        6
                      ],
                      "stacks": [
                        2,
                        2,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534698712692175348178342569859761423426853971713924856961537284287419635345286197",
                  "className": "genuine",
                  "endpointKey": "family-23"
                }
              ],
              "matchingMultiplicity": 120
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"1<->2\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":8,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"1<->2\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "1<->2",
                  "1<->2",
                  "1<->2",
                  "1<->2",
                  "1<->2",
                  "1<->2",
                  "1<->2",
                  "1<->2",
                  "1<->2"
                ],
                "digitPairCounts": {
                  "1<->2": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->2",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 8,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "H1<->I1",
                    "C2<->D2",
                    "A3<->F3",
                    "F4<->H4",
                    "B5<->I5",
                    "B6<->E6",
                    "C7<->G7",
                    "A8<->E8",
                    "D9<->G9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->2",
                      "1<->2",
                      "1<->2",
                      "1<->2",
                      "1<->2",
                      "1<->2",
                      "1<->2",
                      "1<->2",
                      "1<->2"
                    ],
                    "digitPairCounts": {
                      "1<->2": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->2",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 8,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678921671295348298341567859762413416853792723914856962537184187429635345186279",
                  "className": "standard-symmetry",
                  "endpointKey": "534678921671295348298341567859762413416853792723914856962537184187429635345186279"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"1<->3\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":8,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"1<->3\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "1<->3",
                  "1<->3",
                  "1<->3",
                  "1<->3",
                  "1<->3",
                  "1<->3",
                  "1<->3",
                  "1<->3",
                  "1<->3"
                ],
                "digitPairCounts": {
                  "1<->3": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->3",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 8,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "B1<->H1",
                    "D2<->G2",
                    "A3<->D3",
                    "F4<->I4",
                    "F5<->I5",
                    "B6<->C6",
                    "C7<->E7",
                    "E8<->H8",
                    "A9<->G9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->3",
                      "1<->3",
                      "1<->3",
                      "1<->3",
                      "1<->3",
                      "1<->3",
                      "1<->3",
                      "1<->3",
                      "1<->3"
                    ],
                    "digitPairCounts": {
                      "1<->3": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->3",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 8,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "514678932672395148398142567859763421426851793731924856963517284287439615145286379",
                  "className": "standard-symmetry",
                  "endpointKey": "514678932672395148398142567859763421426851793731924856963517284287439615145286379"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"1<->4\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":8,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"1<->4\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "1<->4",
                  "1<->4",
                  "1<->4",
                  "1<->4",
                  "1<->4",
                  "1<->4",
                  "1<->4",
                  "1<->4",
                  "1<->4"
                ],
                "digitPairCounts": {
                  "1<->4": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->4",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 8,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "C1<->H1",
                    "D2<->H2",
                    "A3<->E3",
                    "F4<->G4",
                    "A5<->I5",
                    "B6<->F6",
                    "C7<->I7",
                    "D8<->E8",
                    "B9<->G9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->4",
                      "1<->4",
                      "1<->4",
                      "1<->4",
                      "1<->4",
                      "1<->4",
                      "1<->4",
                      "1<->4",
                      "1<->4"
                    ],
                    "digitPairCounts": {
                      "1<->4": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->4",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 8,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "531678942672495318498312567859764123126853794743921856964537281287149635315286479",
                  "className": "standard-symmetry",
                  "endpointKey": "531678942672495318498312567859764123126853794743921856964537281287149635315286479"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"1<->5\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":8,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"1<->5\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "1<->5",
                  "1<->5",
                  "1<->5",
                  "1<->5",
                  "1<->5",
                  "1<->5",
                  "1<->5",
                  "1<->5",
                  "1<->5"
                ],
                "digitPairCounts": {
                  "1<->5": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->5",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 8,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "A1<->H1",
                    "D2<->F2",
                    "A3<->G3",
                    "B4<->F4",
                    "E5<->I5",
                    "B6<->H6",
                    "C7<->D7",
                    "E8<->I8",
                    "C9<->G9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->5",
                      "1<->5",
                      "1<->5",
                      "1<->5",
                      "1<->5",
                      "1<->5",
                      "1<->5",
                      "1<->5",
                      "1<->5"
                    ],
                    "digitPairCounts": {
                      "1<->5": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->5",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 8,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "134678952672591348598342167819765423426813795753924816965137284287459631341286579",
                  "className": "standard-symmetry",
                  "endpointKey": "134678952672591348598342167819765423426813795753924816965137284287459631341286579"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"1<->6\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"1<->6\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "1<->6",
                  "1<->6",
                  "1<->6",
                  "1<->6",
                  "1<->6",
                  "1<->6",
                  "1<->6",
                  "1<->6",
                  "1<->6"
                ],
                "digitPairCounts": {
                  "1<->6": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->6",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "D1<->H1",
                    "A2<->D2",
                    "A3<->H3",
                    "E4<->F4",
                    "C5<->I5",
                    "B6<->I6",
                    "B7<->C7",
                    "E8<->G8",
                    "F9<->G9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6",
                      "1<->6"
                    ],
                    "digitPairCounts": {
                      "1<->6": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->6",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534178962172695348698342517859716423421853796763924851916537284287469135345281679",
                  "className": "standard-symmetry",
                  "endpointKey": "534178962172695348698342517859716423421853796763924851916537284287469135345281679"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"1<->7\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":5,\"same-row-inside-box\":4},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"1<->7\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "1<->7",
                  "1<->7",
                  "1<->7",
                  "1<->7",
                  "1<->7",
                  "1<->7",
                  "1<->7",
                  "1<->7",
                  "1<->7"
                ],
                "digitPairCounts": {
                  "1<->7": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->7",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 5,
                  "same-row-inside-box": 4
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "E1<->H1",
                    "B2<->D2",
                    "A3<->I3",
                    "D4<->F4",
                    "G5<->I5",
                    "A6<->B6",
                    "C7<->F7",
                    "C8<->E8",
                    "G9<->H9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->7",
                      "1<->7",
                      "1<->7",
                      "1<->7",
                      "1<->7",
                      "1<->7",
                      "1<->7",
                      "1<->7",
                      "1<->7"
                    ],
                    "digitPairCounts": {
                      "1<->7": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->7",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 5,
                      "same-row-inside-box": 4
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534618972612795348798342561859167423426853197173924856967531284281479635345286719",
                  "className": "standard-symmetry",
                  "endpointKey": "534618972612795348798342561859167423426853197173924856967531284281479635345286719"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"1<->8\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":8,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"1<->8\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "1<->8",
                  "1<->8",
                  "1<->8",
                  "1<->8",
                  "1<->8",
                  "1<->8",
                  "1<->8",
                  "1<->8",
                  "1<->8"
                ],
                "digitPairCounts": {
                  "1<->8": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->8",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 8,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "F1<->H1",
                    "D2<->I2",
                    "A3<->C3",
                    "A4<->F4",
                    "D5<->I5",
                    "B6<->G6",
                    "C7<->H7",
                    "B8<->E8",
                    "E9<->G9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->8",
                      "1<->8",
                      "1<->8",
                      "1<->8",
                      "1<->8",
                      "1<->8",
                      "1<->8",
                      "1<->8",
                      "1<->8"
                    ],
                    "digitPairCounts": {
                      "1<->8": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->8",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 8,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534671982672895341891342567159768423426153798783924156968537214217489635345216879",
                  "className": "standard-symmetry",
                  "endpointKey": "534671982672895341891342567159768423426153798783924156968537214217489635345216879"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"1<->9\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":2,\"same-row-inside-box\":7},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"1<->9\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "1<->9",
                  "1<->9",
                  "1<->9",
                  "1<->9",
                  "1<->9",
                  "1<->9",
                  "1<->9",
                  "1<->9",
                  "1<->9"
                ],
                "digitPairCounts": {
                  "1<->9": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "1<->9",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 2,
                  "same-row-inside-box": 7
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "G1<->H1",
                    "D2<->E2",
                    "A3<->B3",
                    "C4<->F4",
                    "H5<->I5",
                    "B6<->D6",
                    "A7<->C7",
                    "E8<->F8",
                    "G9<->I9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "1<->9",
                      "1<->9",
                      "1<->9",
                      "1<->9",
                      "1<->9",
                      "1<->9",
                      "1<->9",
                      "1<->9",
                      "1<->9"
                    ],
                    "digitPairCounts": {
                      "1<->9": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "1<->9",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 2,
                      "same-row-inside-box": 7
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678192672915348918342567851769423426853719793124856169537284287491635345286971",
                  "className": "standard-symmetry",
                  "endpointKey": "534678192672915348918342567851769423426853719793124856169537284287491635345286971"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"2<->3\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"2<->3\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "2<->3",
                  "2<->3",
                  "2<->3",
                  "2<->3",
                  "2<->3",
                  "2<->3",
                  "2<->3",
                  "2<->3",
                  "2<->3"
                ],
                "digitPairCounts": {
                  "2<->3": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->3",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "B1<->I1",
                    "C2<->G2",
                    "D3<->F3",
                    "H4<->I4",
                    "B5<->F5",
                    "C6<->E6",
                    "E7<->G7",
                    "A8<->H8",
                    "A9<->D9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->3",
                      "2<->3",
                      "2<->3",
                      "2<->3",
                      "2<->3",
                      "2<->3",
                      "2<->3",
                      "2<->3",
                      "2<->3"
                    ],
                    "digitPairCounts": {
                      "2<->3": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->3",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "524678913673195248198243567859761432436852791712934856961527384387419625245386179",
                  "className": "standard-symmetry",
                  "endpointKey": "524678913673195248198243567859761432436852791712934856961527384387419625245386179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"2<->4\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":4,\"same-row-inside-box\":5},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"2<->4\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4",
                  "2<->4"
                ],
                "digitPairCounts": {
                  "2<->4": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->4",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 4,
                  "same-row-inside-box": 5
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "C1<->I1",
                    "C2<->H2",
                    "E3<->F3",
                    "G4<->H4",
                    "A5<->B5",
                    "E6<->F6",
                    "G7<->I7",
                    "A8<->D8",
                    "B9<->D9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4",
                      "2<->4"
                    ],
                    "digitPairCounts": {
                      "2<->4": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->4",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 4,
                      "same-row-inside-box": 5
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "532678914674195328198324567859761243246853791713942856961537482487219635325486179",
                  "className": "standard-symmetry",
                  "endpointKey": "532678914674195328198324567859761243246853791713942856961537482487219635325486179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"2<->5\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":9},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"2<->5\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "2<->5",
                  "2<->5",
                  "2<->5",
                  "2<->5",
                  "2<->5",
                  "2<->5",
                  "2<->5",
                  "2<->5",
                  "2<->5"
                ],
                "digitPairCounts": {
                  "2<->5": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->5",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 9
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "A1<->I1",
                    "C2<->F2",
                    "F3<->G3",
                    "B4<->H4",
                    "B5<->E5",
                    "E6<->H6",
                    "D7<->G7",
                    "A8<->I8",
                    "C9<->D9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->5",
                      "2<->5",
                      "2<->5",
                      "2<->5",
                      "2<->5",
                      "2<->5",
                      "2<->5",
                      "2<->5",
                      "2<->5"
                    ],
                    "digitPairCounts": {
                      "2<->5": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->5",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 9
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "234678915675192348198345267829761453456823791713954826961237584587419632342586179",
                  "className": "standard-symmetry",
                  "endpointKey": "234678915675192348198345267829761453456823791713954826961237584587419632342586179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"2<->6\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":6,\"same-row-inside-box\":3},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"2<->6\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "2<->6",
                  "2<->6",
                  "2<->6",
                  "2<->6",
                  "2<->6",
                  "2<->6",
                  "2<->6",
                  "2<->6",
                  "2<->6"
                ],
                "digitPairCounts": {
                  "2<->6": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->6",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 6,
                  "same-row-inside-box": 3
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "D1<->I1",
                    "A2<->C2",
                    "F3<->H3",
                    "E4<->H4",
                    "B5<->C5",
                    "E6<->I6",
                    "B7<->G7",
                    "A8<->G8",
                    "D9<->F9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->6",
                      "2<->6",
                      "2<->6",
                      "2<->6",
                      "2<->6",
                      "2<->6",
                      "2<->6",
                      "2<->6",
                      "2<->6"
                    ],
                    "digitPairCounts": {
                      "2<->6": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->6",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 6,
                      "same-row-inside-box": 3
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534278916276195348198346527859721463462853791713964852921537684687419235345682179",
                  "className": "standard-symmetry",
                  "endpointKey": "534278916276195348198346527859721463462853791713964852921537684687419235345682179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"2<->7\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"2<->7\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "2<->7",
                  "2<->7",
                  "2<->7",
                  "2<->7",
                  "2<->7",
                  "2<->7",
                  "2<->7",
                  "2<->7",
                  "2<->7"
                ],
                "digitPairCounts": {
                  "2<->7": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->7",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "E1<->I1",
                    "B2<->C2",
                    "F3<->I3",
                    "D4<->H4",
                    "B5<->G5",
                    "A6<->E6",
                    "F7<->G7",
                    "A8<->C8",
                    "D9<->H9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->7",
                      "2<->7",
                      "2<->7",
                      "2<->7",
                      "2<->7",
                      "2<->7",
                      "2<->7",
                      "2<->7",
                      "2<->7"
                    ],
                    "digitPairCounts": {
                      "2<->7": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->7",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534628917627195348198347562859261473476853291213974856961532784782419635345786129",
                  "className": "standard-symmetry",
                  "endpointKey": "534628917627195348198347562859261473476853291213974856961532784782419635345786129"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"2<->8\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":6,\"same-row-inside-box\":3},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"2<->8\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "2<->8",
                  "2<->8",
                  "2<->8",
                  "2<->8",
                  "2<->8",
                  "2<->8",
                  "2<->8",
                  "2<->8",
                  "2<->8"
                ],
                "digitPairCounts": {
                  "2<->8": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->8",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 6,
                  "same-row-inside-box": 3
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "F1<->I1",
                    "C2<->I2",
                    "C3<->F3",
                    "A4<->H4",
                    "B5<->D5",
                    "E6<->G6",
                    "G7<->H7",
                    "A8<->B8",
                    "D9<->E9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->8",
                      "2<->8",
                      "2<->8",
                      "2<->8",
                      "2<->8",
                      "2<->8",
                      "2<->8",
                      "2<->8",
                      "2<->8"
                    ],
                    "digitPairCounts": {
                      "2<->8": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->8",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 6,
                      "same-row-inside-box": 3
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534672918678195342192348567259761483486253791713984256961537824827419635345826179",
                  "className": "standard-symmetry",
                  "endpointKey": "534672918678195342192348567259761483486253791713984256961537824827419635345826179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"2<->9\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"2<->9\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "2<->9",
                  "2<->9",
                  "2<->9",
                  "2<->9",
                  "2<->9",
                  "2<->9",
                  "2<->9",
                  "2<->9",
                  "2<->9"
                ],
                "digitPairCounts": {
                  "2<->9": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "2<->9",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "G1<->I1",
                    "C2<->E2",
                    "B3<->F3",
                    "C4<->H4",
                    "B5<->H5",
                    "D6<->E6",
                    "A7<->G7",
                    "A8<->F8",
                    "D9<->I9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "2<->9",
                      "2<->9",
                      "2<->9",
                      "2<->9",
                      "2<->9",
                      "2<->9",
                      "2<->9",
                      "2<->9",
                      "2<->9"
                    ],
                    "digitPairCounts": {
                      "2<->9": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "2<->9",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534678219679125348128349567852761493496853721713294856261537984987412635345986172",
                  "className": "standard-symmetry",
                  "endpointKey": "534678219679125348128349567852761493496853721713294856261537984987412635345986172"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"3<->4\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":4,\"same-row-inside-box\":5},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"3<->4\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "3<->4",
                  "3<->4",
                  "3<->4",
                  "3<->4",
                  "3<->4",
                  "3<->4",
                  "3<->4",
                  "3<->4",
                  "3<->4"
                ],
                "digitPairCounts": {
                  "3<->4": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "3<->4",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 4,
                  "same-row-inside-box": 5
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "B1<->C1",
                    "G2<->H2",
                    "D3<->E3",
                    "G4<->I4",
                    "A5<->F5",
                    "C6<->F6",
                    "E7<->I7",
                    "D8<->H8",
                    "A9<->B9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "3<->4",
                      "3<->4",
                      "3<->4",
                      "3<->4",
                      "3<->4",
                      "3<->4",
                      "3<->4",
                      "3<->4",
                      "3<->4"
                    ],
                    "digitPairCounts": {
                      "3<->4": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "3<->4",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 4,
                      "same-row-inside-box": 5
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "543678912672195438198432567859761324326854791714923856961547283287319645435286179",
                  "className": "standard-symmetry",
                  "endpointKey": "543678912672195438198432567859761324326854791714923856961547283287319645435286179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"3<->5\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":4,\"same-row-inside-box\":5},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"3<->5\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "3<->5",
                  "3<->5",
                  "3<->5",
                  "3<->5",
                  "3<->5",
                  "3<->5",
                  "3<->5",
                  "3<->5",
                  "3<->5"
                ],
                "digitPairCounts": {
                  "3<->5": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "3<->5",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 4,
                  "same-row-inside-box": 5
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "A1<->B1",
                    "F2<->G2",
                    "D3<->G3",
                    "B4<->I4",
                    "E5<->F5",
                    "C6<->H6",
                    "D7<->E7",
                    "H8<->I8",
                    "A9<->C9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "3<->5",
                      "3<->5",
                      "3<->5",
                      "3<->5",
                      "3<->5",
                      "3<->5",
                      "3<->5",
                      "3<->5",
                      "3<->5"
                    ],
                    "digitPairCounts": {
                      "3<->5": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "3<->5",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 4,
                      "same-row-inside-box": 5
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "354678912672193548198542367839761425426835791715924836961357284287419653543286179",
                  "className": "standard-symmetry",
                  "endpointKey": "354678912672193548198542367839761425426835791715924836961357284287419653543286179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"3<->6\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":8,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"3<->6\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "3<->6",
                  "3<->6",
                  "3<->6",
                  "3<->6",
                  "3<->6",
                  "3<->6",
                  "3<->6",
                  "3<->6",
                  "3<->6"
                ],
                "digitPairCounts": {
                  "3<->6": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "3<->6",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 8,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "B1<->D1",
                    "A2<->G2",
                    "D3<->H3",
                    "E4<->I4",
                    "C5<->F5",
                    "C6<->I6",
                    "B7<->E7",
                    "G8<->H8",
                    "A9<->F9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "3<->6",
                      "3<->6",
                      "3<->6",
                      "3<->6",
                      "3<->6",
                      "3<->6",
                      "3<->6",
                      "3<->6",
                      "3<->6"
                    ],
                    "digitPairCounts": {
                      "3<->6": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "3<->6",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 8,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "564378912372195648198642537859731426423856791716924853931567284287419365645283179",
                  "className": "standard-symmetry",
                  "endpointKey": "564378912372195648198642537859731426423856791716924853931567284287419365645283179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"3<->7\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"3<->7\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "3<->7",
                  "3<->7",
                  "3<->7",
                  "3<->7",
                  "3<->7",
                  "3<->7",
                  "3<->7",
                  "3<->7",
                  "3<->7"
                ],
                "digitPairCounts": {
                  "3<->7": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "3<->7",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "B1<->E1",
                    "B2<->G2",
                    "D3<->I3",
                    "D4<->I4",
                    "F5<->G5",
                    "A6<->C6",
                    "E7<->F7",
                    "C8<->H8",
                    "A9<->H9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "3<->7",
                      "3<->7",
                      "3<->7",
                      "3<->7",
                      "3<->7",
                      "3<->7",
                      "3<->7",
                      "3<->7",
                      "3<->7"
                    ],
                    "digitPairCounts": {
                      "3<->7": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "3<->7",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "574638912632195748198742563859361427426857391317924856961573284283419675745286139",
                  "className": "standard-symmetry",
                  "endpointKey": "574638912632195748198742563859361427426857391317924856961573284283419675745286139"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"3<->8\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"3<->8\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "3<->8",
                  "3<->8",
                  "3<->8",
                  "3<->8",
                  "3<->8",
                  "3<->8",
                  "3<->8",
                  "3<->8",
                  "3<->8"
                ],
                "digitPairCounts": {
                  "3<->8": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "3<->8",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "B1<->F1",
                    "G2<->I2",
                    "C3<->D3",
                    "A4<->I4",
                    "D5<->F5",
                    "C6<->G6",
                    "E7<->H7",
                    "B8<->H8",
                    "A9<->E9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "3<->8",
                      "3<->8",
                      "3<->8",
                      "3<->8",
                      "3<->8",
                      "3<->8",
                      "3<->8",
                      "3<->8",
                      "3<->8"
                    ],
                    "digitPairCounts": {
                      "3<->8": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "3<->8",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "584673912672195843193842567359761428426358791718924356961587234237419685845236179",
                  "className": "standard-symmetry",
                  "endpointKey": "584673912672195843193842567359761428426358791718924356961587234237419685845236179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"3<->9\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":9},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"3<->9\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "3<->9",
                  "3<->9",
                  "3<->9",
                  "3<->9",
                  "3<->9",
                  "3<->9",
                  "3<->9",
                  "3<->9",
                  "3<->9"
                ],
                "digitPairCounts": {
                  "3<->9": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "3<->9",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 9
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "B1<->G1",
                    "E2<->G2",
                    "B3<->D3",
                    "C4<->I4",
                    "F5<->H5",
                    "C6<->D6",
                    "A7<->E7",
                    "F8<->H8",
                    "A9<->I9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "3<->9",
                      "3<->9",
                      "3<->9",
                      "3<->9",
                      "3<->9",
                      "3<->9",
                      "3<->9",
                      "3<->9",
                      "3<->9"
                    ],
                    "digitPairCounts": {
                      "3<->9": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "3<->9",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 9
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "594678312672135948138942567853761429426859731719324856361597284287413695945286173",
                  "className": "standard-symmetry",
                  "endpointKey": "594678312672135948138942567853761429426859731719324856361597284287413695945286173"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"4<->5\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"4<->5\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "4<->5",
                  "4<->5",
                  "4<->5",
                  "4<->5",
                  "4<->5",
                  "4<->5",
                  "4<->5",
                  "4<->5",
                  "4<->5"
                ],
                "digitPairCounts": {
                  "4<->5": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->5",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "A1<->C1",
                    "F2<->H2",
                    "E3<->G3",
                    "B4<->G4",
                    "A5<->E5",
                    "F6<->H6",
                    "D7<->I7",
                    "D8<->I8",
                    "B9<->C9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->5",
                      "4<->5",
                      "4<->5",
                      "4<->5",
                      "4<->5",
                      "4<->5",
                      "4<->5",
                      "4<->5",
                      "4<->5"
                    ],
                    "digitPairCounts": {
                      "4<->5": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->5",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "435678912672194358198352467849761523526843791713925846961437285287519634354286179",
                  "className": "standard-symmetry",
                  "endpointKey": "435678912672194358198352467849761523526843791713925846961437285287519634354286179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"4<->6\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":8,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"4<->6\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "4<->6",
                  "4<->6",
                  "4<->6",
                  "4<->6",
                  "4<->6",
                  "4<->6",
                  "4<->6",
                  "4<->6",
                  "4<->6"
                ],
                "digitPairCounts": {
                  "4<->6": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->6",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 8,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "C1<->D1",
                    "A2<->H2",
                    "E3<->H3",
                    "E4<->G4",
                    "A5<->C5",
                    "F6<->I6",
                    "B7<->I7",
                    "D8<->G8",
                    "B9<->F9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->6",
                      "4<->6",
                      "4<->6",
                      "4<->6",
                      "4<->6",
                      "4<->6",
                      "4<->6",
                      "4<->6",
                      "4<->6"
                    ],
                    "digitPairCounts": {
                      "4<->6": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->6",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 8,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "536478912472195368198362547859741623624853791713926854941537286287619435365284179",
                  "className": "standard-symmetry",
                  "endpointKey": "536478912472195368198362547859741623624853791713926854941537286287619435365284179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"4<->7\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":9},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"4<->7\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "4<->7",
                  "4<->7",
                  "4<->7",
                  "4<->7",
                  "4<->7",
                  "4<->7",
                  "4<->7",
                  "4<->7",
                  "4<->7"
                ],
                "digitPairCounts": {
                  "4<->7": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->7",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 9
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "C1<->E1",
                    "B2<->H2",
                    "E3<->I3",
                    "D4<->G4",
                    "A5<->G5",
                    "A6<->F6",
                    "F7<->I7",
                    "C8<->D8",
                    "B9<->H9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->7",
                      "4<->7",
                      "4<->7",
                      "4<->7",
                      "4<->7",
                      "4<->7",
                      "4<->7",
                      "4<->7",
                      "4<->7"
                    ],
                    "digitPairCounts": {
                      "4<->7": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->7",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 9
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "537648912642195378198372564859461723726853491413927856961534287284719635375286149",
                  "className": "standard-symmetry",
                  "endpointKey": "537648912642195378198372564859461723726853491413927856961534287284719635375286149"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"4<->8\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"4<->8\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "4<->8",
                  "4<->8",
                  "4<->8",
                  "4<->8",
                  "4<->8",
                  "4<->8",
                  "4<->8",
                  "4<->8",
                  "4<->8"
                ],
                "digitPairCounts": {
                  "4<->8": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->8",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "C1<->F1",
                    "H2<->I2",
                    "C3<->E3",
                    "A4<->G4",
                    "A5<->D5",
                    "F6<->G6",
                    "H7<->I7",
                    "B8<->D8",
                    "B9<->E9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->8",
                      "4<->8",
                      "4<->8",
                      "4<->8",
                      "4<->8",
                      "4<->8",
                      "4<->8",
                      "4<->8",
                      "4<->8"
                    ],
                    "digitPairCounts": {
                      "4<->8": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->8",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "538674912672195384194382567459761823826453791713928456961537248247819635385246179",
                  "className": "standard-symmetry",
                  "endpointKey": "538674912672195384194382567459761823826453791713928456961537248247819635385246179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"4<->9\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"4<->9\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "4<->9",
                  "4<->9",
                  "4<->9",
                  "4<->9",
                  "4<->9",
                  "4<->9",
                  "4<->9",
                  "4<->9",
                  "4<->9"
                ],
                "digitPairCounts": {
                  "4<->9": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "4<->9",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "C1<->G1",
                    "E2<->H2",
                    "B3<->E3",
                    "C4<->G4",
                    "A5<->H5",
                    "D6<->F6",
                    "A7<->I7",
                    "D8<->F8",
                    "B9<->I9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "4<->9",
                      "4<->9",
                      "4<->9",
                      "4<->9",
                      "4<->9",
                      "4<->9",
                      "4<->9",
                      "4<->9",
                      "4<->9"
                    ],
                    "digitPairCounts": {
                      "4<->9": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "4<->9",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "539678412672145398148392567854761923926853741713429856461537289287914635395286174",
                  "className": "standard-symmetry",
                  "endpointKey": "539678412672145398148392567854761923926853741713429856461537289287914635395286174"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"5<->6\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":6,\"same-row-inside-box\":3},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"5<->6\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "5<->6",
                  "5<->6",
                  "5<->6",
                  "5<->6",
                  "5<->6",
                  "5<->6",
                  "5<->6",
                  "5<->6",
                  "5<->6"
                ],
                "digitPairCounts": {
                  "5<->6": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "5<->6",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 6,
                  "same-row-inside-box": 3
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "A1<->D1",
                    "A2<->F2",
                    "G3<->H3",
                    "B4<->E4",
                    "C5<->E5",
                    "H6<->I6",
                    "B7<->D7",
                    "G8<->I8",
                    "C9<->F9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "5<->6",
                      "5<->6",
                      "5<->6",
                      "5<->6",
                      "5<->6",
                      "5<->6",
                      "5<->6",
                      "5<->6",
                      "5<->6"
                    ],
                    "digitPairCounts": {
                      "5<->6": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "5<->6",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 6,
                      "same-row-inside-box": 3
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "634578912572196348198342657869751423425863791713924865951637284287419536346285179",
                  "className": "standard-symmetry",
                  "endpointKey": "634578912572196348198342657869751423425863791713924865951637284287419536346285179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"5<->7\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"5<->7\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "5<->7",
                  "5<->7",
                  "5<->7",
                  "5<->7",
                  "5<->7",
                  "5<->7",
                  "5<->7",
                  "5<->7",
                  "5<->7"
                ],
                "digitPairCounts": {
                  "5<->7": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "5<->7",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "A1<->E1",
                    "B2<->F2",
                    "G3<->I3",
                    "B4<->D4",
                    "E5<->G5",
                    "A6<->H6",
                    "D7<->F7",
                    "C8<->I8",
                    "C9<->H9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "5<->7",
                      "5<->7",
                      "5<->7",
                      "5<->7",
                      "5<->7",
                      "5<->7",
                      "5<->7",
                      "5<->7",
                      "5<->7"
                    ],
                    "digitPairCounts": {
                      "5<->7": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "5<->7",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "734658912652197348198342765879561423426873591513924876961735284285419637347286159",
                  "className": "standard-symmetry",
                  "endpointKey": "734658912652197348198342765879561423426873591513924876961735284285419637347286159"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"5<->8\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":6,\"same-row-inside-box\":3},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"5<->8\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "5<->8",
                  "5<->8",
                  "5<->8",
                  "5<->8",
                  "5<->8",
                  "5<->8",
                  "5<->8",
                  "5<->8",
                  "5<->8"
                ],
                "digitPairCounts": {
                  "5<->8": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "5<->8",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 6,
                  "same-row-inside-box": 3
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "A1<->F1",
                    "F2<->I2",
                    "C3<->G3",
                    "A4<->B4",
                    "D5<->E5",
                    "G6<->H6",
                    "D7<->H7",
                    "B8<->I8",
                    "C9<->E9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "5<->8",
                      "5<->8",
                      "5<->8",
                      "5<->8",
                      "5<->8",
                      "5<->8",
                      "5<->8",
                      "5<->8",
                      "5<->8"
                    ],
                    "digitPairCounts": {
                      "5<->8": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "5<->8",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 6,
                      "same-row-inside-box": 3
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "834675912672198345195342867589761423426583791713924586961837254257419638348256179",
                  "className": "standard-symmetry",
                  "endpointKey": "834675912672198345195342867589761423426583791713924586961837254257419638348256179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"5<->9\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"5<->9\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "5<->9",
                  "5<->9",
                  "5<->9",
                  "5<->9",
                  "5<->9",
                  "5<->9",
                  "5<->9",
                  "5<->9",
                  "5<->9"
                ],
                "digitPairCounts": {
                  "5<->9": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "5<->9",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "A1<->G1",
                    "E2<->F2",
                    "B3<->G3",
                    "B4<->C4",
                    "E5<->H5",
                    "D6<->H6",
                    "A7<->D7",
                    "F8<->I8",
                    "C9<->I9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "5<->9",
                      "5<->9",
                      "5<->9",
                      "5<->9",
                      "5<->9",
                      "5<->9",
                      "5<->9",
                      "5<->9",
                      "5<->9"
                    ],
                    "digitPairCounts": {
                      "5<->9": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "5<->9",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "934678512672159348158342967895761423426893751713524896561937284287415639349286175",
                  "className": "standard-symmetry",
                  "endpointKey": "934678512672159348158342967895761423426893751713524896561937284287415639349286175"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"6<->7\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":5,\"same-row-inside-box\":4},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"6<->7\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "6<->7",
                  "6<->7",
                  "6<->7",
                  "6<->7",
                  "6<->7",
                  "6<->7",
                  "6<->7",
                  "6<->7",
                  "6<->7"
                ],
                "digitPairCounts": {
                  "6<->7": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "6<->7",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 5,
                  "same-row-inside-box": 4
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "D1<->E1",
                    "A2<->B2",
                    "H3<->I3",
                    "D4<->E4",
                    "C5<->G5",
                    "A6<->I6",
                    "B7<->F7",
                    "C8<->G8",
                    "F9<->H9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "6<->7",
                      "6<->7",
                      "6<->7",
                      "6<->7",
                      "6<->7",
                      "6<->7",
                      "6<->7",
                      "6<->7",
                      "6<->7"
                    ],
                    "digitPairCounts": {
                      "6<->7": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "6<->7",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 5,
                      "same-row-inside-box": 4
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534768912762195348198342576859671423427853691613924857971536284286419735345287169",
                  "className": "standard-symmetry",
                  "endpointKey": "534768912762195348198342576859671423427853691613924857971536284286419735345287169"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"6<->8\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":6,\"same-row-inside-box\":3},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"6<->8\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "6<->8",
                  "6<->8",
                  "6<->8",
                  "6<->8",
                  "6<->8",
                  "6<->8",
                  "6<->8",
                  "6<->8",
                  "6<->8"
                ],
                "digitPairCounts": {
                  "6<->8": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "6<->8",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 6,
                  "same-row-inside-box": 3
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "D1<->F1",
                    "A2<->I2",
                    "C3<->H3",
                    "A4<->E4",
                    "C5<->D5",
                    "G6<->I6",
                    "B7<->H7",
                    "B8<->G8",
                    "E9<->F9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "6<->8",
                      "6<->8",
                      "6<->8",
                      "6<->8",
                      "6<->8",
                      "6<->8",
                      "6<->8",
                      "6<->8",
                      "6<->8"
                    ],
                    "digitPairCounts": {
                      "6<->8": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "6<->8",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 6,
                      "same-row-inside-box": 3
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534876912872195346196342587659781423428653791713924658981537264267419835345268179",
                  "className": "standard-symmetry",
                  "endpointKey": "534876912872195346196342587659781423428653791713924658981537264267419835345268179"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"6<->9\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":8,\"same-row-inside-box\":1},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"6<->9\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "6<->9",
                  "6<->9",
                  "6<->9",
                  "6<->9",
                  "6<->9",
                  "6<->9",
                  "6<->9",
                  "6<->9",
                  "6<->9"
                ],
                "digitPairCounts": {
                  "6<->9": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "6<->9",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 8,
                  "same-row-inside-box": 1
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "D1<->G1",
                    "A2<->E2",
                    "B3<->H3",
                    "C4<->E4",
                    "C5<->H5",
                    "D6<->I6",
                    "A7<->B7",
                    "F8<->G8",
                    "F9<->I9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "6<->9",
                      "6<->9",
                      "6<->9",
                      "6<->9",
                      "6<->9",
                      "6<->9",
                      "6<->9",
                      "6<->9",
                      "6<->9"
                    ],
                    "digitPairCounts": {
                      "6<->9": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "6<->9",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 8,
                      "same-row-inside-box": 1
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534978612972165348168342597856791423429853761713624859691537284287416935345289176",
                  "className": "standard-symmetry",
                  "endpointKey": "534978612972165348168342597856791423429853761713624859691537284287416935345289176"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"7<->8\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"7<->8\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "7<->8",
                  "7<->8",
                  "7<->8",
                  "7<->8",
                  "7<->8",
                  "7<->8",
                  "7<->8",
                  "7<->8",
                  "7<->8"
                ],
                "digitPairCounts": {
                  "7<->8": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "7<->8",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "E1<->F1",
                    "B2<->I2",
                    "C3<->I3",
                    "A4<->D4",
                    "D5<->G5",
                    "A6<->G6",
                    "F7<->H7",
                    "B8<->C8",
                    "E9<->H9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8",
                      "7<->8"
                    ],
                    "digitPairCounts": {
                      "7<->8": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "7<->8",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534687912682195347197342568759861423426753891813924756961538274278419635345276189",
                  "className": "standard-symmetry",
                  "endpointKey": "534687912682195347197342568759861423426753891813924756961538274278419635345276189"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"7<->9\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"7<->9\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "7<->9",
                  "7<->9",
                  "7<->9",
                  "7<->9",
                  "7<->9",
                  "7<->9",
                  "7<->9",
                  "7<->9",
                  "7<->9"
                ],
                "digitPairCounts": {
                  "7<->9": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "7<->9",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "E1<->G1",
                    "B2<->E2",
                    "B3<->I3",
                    "C4<->D4",
                    "G5<->H5",
                    "A6<->D6",
                    "A7<->F7",
                    "C8<->F8",
                    "H9<->I9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "7<->9",
                      "7<->9",
                      "7<->9",
                      "7<->9",
                      "7<->9",
                      "7<->9",
                      "7<->9",
                      "7<->9",
                      "7<->9"
                    ],
                    "digitPairCounts": {
                      "7<->9": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "7<->9",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534698712692175348178342569857961423426853971913724856761539284289417635345286197",
                  "className": "standard-symmetry",
                  "endpointKey": "534698712692175348178342569857961423426853971913724856761539284289417635345286197"
                }
              ],
              "matchingMultiplicity": 362880
            },
            {
              "typeKey": "{\"familyId\":\"two-symbol-balanced-trade\",\"swapDepth\":9,\"digitPairCounts\":{\"8<->9\":9},\"repeatedDigitPair\":true,\"locationShape\":\"9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks\",\"geometryCounts\":{\"same-row-across-boxes\":7,\"same-row-inside-box\":2},\"touchCounts\":{\"rows\":[2,2,2,2,2,2,2,2,2],\"cols\":[2,2,2,2,2,2,2,2,2],\"boxes\":[2,2,2,2,2,2,2,2,2],\"bands\":[6,6,6],\"stacks\":[6,6,6]},\"className\":\"standard-symmetry\",\"digits\":\"8<->9\",\"cellCount\":18}",
              "label": "Two-symbol balanced trades; 9 swaps",
              "swapDepth": 9,
              "shape": {
                "digitPairs": [
                  "8<->9",
                  "8<->9",
                  "8<->9",
                  "8<->9",
                  "8<->9",
                  "8<->9",
                  "8<->9",
                  "8<->9",
                  "8<->9"
                ],
                "digitPairCounts": {
                  "8<->9": 9
                },
                "uniqueDigitPairCount": 1,
                "repeatedDigitPair": true,
                "repeatedDigitPairKey": "8<->9",
                "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                "geometryCounts": {
                  "same-row-across-boxes": 7,
                  "same-row-inside-box": 2
                },
                "touched": {
                  "rows": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "cols": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "boxes": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ],
                  "bands": [
                    1,
                    2,
                    3
                  ],
                  "stacks": [
                    1,
                    2,
                    3
                  ]
                },
                "touchCounts": {
                  "rows": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "cols": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "boxes": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                  ],
                  "bands": [
                    6,
                    6,
                    6
                  ],
                  "stacks": [
                    6,
                    6,
                    6
                  ]
                }
              },
              "count": 1,
              "endpointCount": 1,
              "classCounts": {
                "identity": 0,
                "standard-symmetry": 1,
                "genuine": 0
              },
              "examples": [
                {
                  "moves": [
                    "F1<->G1",
                    "E2<->I2",
                    "B3<->C3",
                    "A4<->C4",
                    "D5<->H5",
                    "D6<->G6",
                    "A7<->H7",
                    "B8<->F8",
                    "E9<->I9"
                  ],
                  "shape": {
                    "digitPairs": [
                      "8<->9",
                      "8<->9",
                      "8<->9",
                      "8<->9",
                      "8<->9",
                      "8<->9",
                      "8<->9",
                      "8<->9",
                      "8<->9"
                    ],
                    "digitPairCounts": {
                      "8<->9": 9
                    },
                    "uniqueDigitPairCount": 1,
                    "repeatedDigitPair": true,
                    "repeatedDigitPairKey": "8<->9",
                    "locationShape": "9 swaps / 9 rows / 9 cols / 9 boxes / 3 bands / 3 stacks",
                    "geometryCounts": {
                      "same-row-across-boxes": 7,
                      "same-row-inside-box": 2
                    },
                    "touched": {
                      "rows": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "cols": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "boxes": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "bands": [
                        1,
                        2,
                        3
                      ],
                      "stacks": [
                        1,
                        2,
                        3
                      ]
                    },
                    "touchCounts": {
                      "rows": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "cols": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "boxes": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                      ],
                      "bands": [
                        6,
                        6,
                        6
                      ],
                      "stacks": [
                        6,
                        6,
                        6
                      ]
                    }
                  },
                  "sourceBoard": "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
                  "endpointBoard": "534679812672185349189342567958761423426953781713824956861537294297418635345296178",
                  "className": "standard-symmetry",
                  "endpointKey": "534679812672185349189342567958761423426953781713824956861537294297418635345296178"
                }
              ],
              "matchingMultiplicity": 362880
            }
          ]
        }
      ],
      "summary": {
        "sourceCount": 1,
        "completeSources": 1,
        "attemptedSequences": 9707508,
        "validEndpointSequences": 94,
        "uniqueValidEndpoints": 88,
        "genuineEndpoints": 52,
        "genuineEndpointFamilies": 29,
        "sequenceTypeCount": 84
      }
    }
  ],
  "summary": {
    "sourceCount": 1,
    "completeSources": 1,
    "attemptedSequences": 9707508,
    "validEndpointSequences": 94,
    "uniqueValidEndpoints": 88,
    "genuineEndpoints": 52,
    "genuineEndpointFamilies": 29,
    "sequenceTypeCount": 84
  }
};
