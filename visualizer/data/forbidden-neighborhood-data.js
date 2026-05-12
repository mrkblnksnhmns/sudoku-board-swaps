window.SUDOKU_FORBIDDEN_NEIGHBORHOOD = {
  "kind": "forbidden-neighborhood",
  "runStartedAt": "2026-05-12T11:33:49.990Z",
  "config": {
    "sourceCount": 56,
    "seedSourceCount": 2,
    "tradeTargetLimit": 54,
    "exactScanLimit": 1500,
    "resume": true
  },
  "processedCount": 56,
  "complete": true,
  "currentSource": null,
  "sources": [
    {
      "id": "seed-base",
      "label": "cyclic base",
      "sourceKind": "seed",
      "valid": true,
      "paritySignature": "rows even:36,odd:0 | cols even:36,odd:0",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:36,odd:0 | cols even:36,odd:0;kind:seed",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 54
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "seed-comparison",
      "label": "comparison",
      "sourceKind": "seed",
      "valid": true,
      "paritySignature": "rows even:16,odd:20 | cols even:16,odd:20",
      "signature": "min:4;shape:{\"cellCount\":4,\"rowCount\":2,\"colCount\":2,\"boxCount\":2,\"rowBandCount\":2,\"colStackCount\":1};parity:rows even:16,odd:20 | cols even:16,odd:20;kind:seed",
      "primaryShape": "{\"cellCount\":4,\"rowCount\":2,\"colCount\":2,\"boxCount\":2,\"rowBandCount\":2,\"colStackCount\":1}",
      "totalTrades": 46,
      "uniqueTargetCount": 46,
      "minimumSize": 4,
      "minimumSwapDepth": 2,
      "tradeSizeCounts": {
        "4": 6,
        "6": 12,
        "8": 5,
        "10": 5,
        "12": 12,
        "14": 6
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":3}": 6,
        "{\"cellCount\":14,\"rowCount\":7,\"colCount\":7,\"boxCount\":7,\"rowBandCount\":3,\"colStackCount\":3}": 6,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":2,\"colStackCount\":2}": 6,
        "{\"cellCount\":10,\"rowCount\":5,\"colCount\":5,\"boxCount\":5,\"rowBandCount\":3,\"colStackCount\":2}": 4,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 4,
        "{\"cellCount\":4,\"rowCount\":2,\"colCount\":2,\"boxCount\":2,\"rowBandCount\":2,\"colStackCount\":1}": 4,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 4,
        "{\"cellCount\":8,\"rowCount\":4,\"colCount\":4,\"boxCount\":4,\"rowBandCount\":3,\"colStackCount\":2}": 4,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 2,
        "{\"cellCount\":4,\"rowCount\":2,\"colCount\":2,\"boxCount\":2,\"rowBandCount\":1,\"colStackCount\":2}": 2,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 2,
        "{\"cellCount\":10,\"rowCount\":5,\"colCount\":5,\"boxCount\":5,\"rowBandCount\":3,\"colStackCount\":3}": 1,
        "{\"cellCount\":8,\"rowCount\":4,\"colCount\":4,\"boxCount\":4,\"rowBandCount\":2,\"colStackCount\":2}": 1
      },
      "minimumShapeCounts": {
        "{\"cellCount\":4,\"rowCount\":2,\"colCount\":2,\"boxCount\":2,\"rowBandCount\":2,\"colStackCount\":1}": 4,
        "{\"cellCount\":4,\"rowCount\":2,\"colCount\":2,\"boxCount\":2,\"rowBandCount\":1,\"colStackCount\":2}": 2
      },
      "minimumBandStackShapeCounts": {
        "2-1": 4,
        "1-2": 2
      },
      "minimumDigitPairCounts": {
        "1<->3": 1,
        "2<->4": 1,
        "4<->5": 1,
        "4<->8": 1,
        "4<->9": 1,
        "6<->7": 1
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:16,odd:20": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 10,
        "rows even:18,odd:18 | cols even:18,odd:18": 6,
        "rows even:16,odd:20 | cols even:18,odd:18": 4,
        "rows even:16,odd:20 | cols even:22,odd:14": 2,
        "rows even:18,odd:18 | cols even:22,odd:14": 2,
        "rows even:18,odd:18 | cols even:28,odd:8": 2,
        "rows even:22,odd:14 | cols even:16,odd:20": 2,
        "rows even:22,odd:14 | cols even:18,odd:18": 2,
        "rows even:22,odd:14 | cols even:22,odd:14": 2,
        "rows even:28,odd:8 | cols even:22,odd:14": 2
      },
      "examples": [
        {
          "digits": "1<->3",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 3,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 3,
              "sign": -1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:16,odd:20"
        },
        {
          "digits": "2<->4",
          "cells": [
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 2,
              "col": 5,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 4,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "4<->5",
          "cells": [
            {
              "row": 6,
              "col": 3,
              "box": 7,
              "value": 5,
              "sign": -1
            },
            {
              "row": 6,
              "col": 8,
              "box": 8,
              "value": 4,
              "sign": 1
            },
            {
              "row": 7,
              "col": 3,
              "box": 7,
              "value": 4,
              "sign": 1
            },
            {
              "row": 7,
              "col": 8,
              "box": 8,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "4<->8",
          "cells": [
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 4,
              "sign": 1
            },
            {
              "row": 1,
              "col": 8,
              "box": 2,
              "value": 8,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 8,
              "sign": -1
            },
            {
              "row": 6,
              "col": 8,
              "box": 8,
              "value": 4,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "4<->9",
          "cells": [
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 9,
              "sign": -1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": 1
            },
            {
              "row": 7,
              "col": 3,
              "box": 7,
              "value": 4,
              "sign": 1
            },
            {
              "row": 7,
              "col": 5,
              "box": 7,
              "value": 9,
              "sign": -1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:22,odd:14"
        },
        {
          "digits": "6<->7",
          "cells": [
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 6,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 4,
              "box": 4,
              "value": 6,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:16,odd:20"
        }
      ]
    },
    {
      "id": "trade-target-1-digits-1-4-mask-63",
      "label": "1<->4 mask 63",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->4": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-2-digits-1-4-mask-4032",
      "label": "1<->4 mask 4032",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->2": 3,
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->2",
          "cells": [
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": -1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 8,
              "box": 8,
              "value": 2,
              "sign": -1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->2",
          "cells": [
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": -1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": -1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 5,
              "box": 7,
              "value": 2,
              "sign": -1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->2",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": -1
            },
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": -1
            },
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 2,
              "box": 6,
              "value": 2,
              "sign": -1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-3-digits-1-4-mask-258048",
      "label": "1<->4 mask 258048",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-4-digits-1-7-mask-63",
      "label": "1<->7 mask 63",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "1<->9": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->9",
          "cells": [
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 8,
              "box": 2,
              "value": 9,
              "sign": -1
            },
            {
              "row": 3,
              "col": 7,
              "box": 5,
              "value": 9,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 6,
              "box": 8,
              "value": 9,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->9",
          "cells": [
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 5,
              "box": 1,
              "value": 9,
              "sign": -1
            },
            {
              "row": 4,
              "col": 4,
              "box": 4,
              "value": 9,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 3,
              "box": 7,
              "value": 9,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        }
      ]
    },
    {
      "id": "trade-target-5-digits-1-7-mask-4032",
      "label": "1<->7 mask 4032",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3,
        "7<->8": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-6-digits-1-7-mask-258048",
      "label": "1<->7 mask 258048",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-7-digits-2-5-mask-63",
      "label": "2<->5 mask 63",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-8-digits-2-5-mask-4032",
      "label": "2<->5 mask 4032",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->5": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-9-digits-2-5-mask-258048",
      "label": "2<->5 mask 258048",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->3": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->3",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 2,
              "box": 0,
              "value": 3,
              "sign": -1
            },
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 1,
              "box": 3,
              "value": 3,
              "sign": -1
            },
            {
              "row": 6,
              "col": 0,
              "box": 6,
              "value": 3,
              "sign": -1
            },
            {
              "row": 6,
              "col": 2,
              "box": 6,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "2<->3",
          "cells": [
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 1,
              "col": 8,
              "box": 2,
              "value": 3,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 7,
              "box": 5,
              "value": 3,
              "sign": -1
            },
            {
              "row": 7,
              "col": 6,
              "box": 8,
              "value": 3,
              "sign": -1
            },
            {
              "row": 7,
              "col": 8,
              "box": 8,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        }
      ]
    },
    {
      "id": "trade-target-10-digits-2-8-mask-63",
      "label": "2<->8 mask 63",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 0,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-11-digits-2-8-mask-4032",
      "label": "2<->8 mask 4032",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->2": 3,
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->2",
          "cells": [
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": -1
            },
            {
              "row": 3,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 8,
              "box": 8,
              "value": 2,
              "sign": -1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->2",
          "cells": [
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": -1
            },
            {
              "row": 4,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 5,
              "box": 7,
              "value": 2,
              "sign": -1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->2",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": -1
            },
            {
              "row": 5,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 2,
              "box": 6,
              "value": 2,
              "sign": -1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-12-digits-2-8-mask-258048",
      "label": "2<->8 mask 258048",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3,
        "8<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-13-digits-3-6-mask-63",
      "label": "3<->6 mask 63",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->4": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-14-digits-3-6-mask-4032",
      "label": "3<->6 mask 4032",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-15-digits-3-6-mask-258048",
      "label": "3<->6 mask 258048",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->6": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-16-digits-3-9-mask-63",
      "label": "3<->9 mask 63",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "1<->9": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->9",
          "cells": [
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 8,
              "box": 2,
              "value": 9,
              "sign": -1
            },
            {
              "row": 3,
              "col": 7,
              "box": 5,
              "value": 9,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 6,
              "box": 8,
              "value": 9,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->9",
          "cells": [
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 5,
              "box": 1,
              "value": 9,
              "sign": -1
            },
            {
              "row": 4,
              "col": 4,
              "box": 4,
              "value": 9,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 3,
              "box": 7,
              "value": 9,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        }
      ]
    },
    {
      "id": "trade-target-17-digits-3-9-mask-4032",
      "label": "3<->9 mask 4032",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-18-digits-3-9-mask-258048",
      "label": "3<->9 mask 258048",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->3": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->3",
          "cells": [
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 1,
              "col": 8,
              "box": 2,
              "value": 3,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 7,
              "box": 5,
              "value": 3,
              "sign": -1
            },
            {
              "row": 6,
              "col": 6,
              "box": 8,
              "value": 3,
              "sign": -1
            },
            {
              "row": 6,
              "col": 8,
              "box": 8,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "2<->3",
          "cells": [
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 5,
              "box": 1,
              "value": 3,
              "sign": -1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 4,
              "box": 4,
              "value": 3,
              "sign": -1
            },
            {
              "row": 7,
              "col": 3,
              "box": 7,
              "value": 3,
              "sign": -1
            },
            {
              "row": 7,
              "col": 5,
              "box": 7,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        }
      ]
    },
    {
      "id": "trade-target-19-digits-4-7-mask-63",
      "label": "4<->7 mask 63",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->7": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-20-digits-4-7-mask-4032",
      "label": "4<->7 mask 4032",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->5": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-21-digits-4-7-mask-258048",
      "label": "4<->7 mask 258048",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-22-digits-5-8-mask-63",
      "label": "5<->8 mask 63",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-23-digits-5-8-mask-4032",
      "label": "5<->8 mask 4032",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3,
        "7<->8": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-24-digits-5-8-mask-258048",
      "label": "5<->8 mask 258048",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->6": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-25-digits-6-9-mask-63",
      "label": "6<->9 mask 63",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->7": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-26-digits-6-9-mask-4032",
      "label": "6<->9 mask 4032",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-27-digits-6-9-mask-258048",
      "label": "6<->9 mask 258048",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3,
        "8<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-28-digits-1-4-mask-4095",
      "label": "1<->4 mask 4095",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-29-digits-1-4-mask-258111",
      "label": "1<->4 mask 258111",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->4": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->4",
          "cells": [
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 8,
              "box": 8,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "2<->4",
          "cells": [
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            },
            {
              "row": 7,
              "col": 5,
              "box": 7,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        }
      ]
    },
    {
      "id": "trade-target-30-digits-1-4-mask-262080",
      "label": "1<->4 mask 262080",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->3": 3,
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->3",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 2,
              "box": 0,
              "value": 3,
              "sign": -1
            },
            {
              "row": 3,
              "col": 1,
              "box": 3,
              "value": 3,
              "sign": -1
            },
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 0,
              "box": 6,
              "value": 3,
              "sign": -1
            },
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->3",
          "cells": [
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 8,
              "box": 2,
              "value": 3,
              "sign": -1
            },
            {
              "row": 4,
              "col": 7,
              "box": 5,
              "value": 3,
              "sign": -1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 6,
              "box": 8,
              "value": 3,
              "sign": -1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->3",
          "cells": [
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 5,
              "box": 1,
              "value": 3,
              "sign": -1
            },
            {
              "row": 5,
              "col": 4,
              "box": 4,
              "value": 3,
              "sign": -1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 3,
              "box": 7,
              "value": 3,
              "sign": -1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-31-digits-1-7-mask-4095",
      "label": "1<->7 mask 4095",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-32-digits-1-7-mask-258111",
      "label": "1<->7 mask 258111",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "1<->8": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->8",
          "cells": [
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 4,
              "box": 1,
              "value": 8,
              "sign": -1
            },
            {
              "row": 4,
              "col": 3,
              "box": 4,
              "value": 8,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 5,
              "box": 7,
              "value": 8,
              "sign": -1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->8",
          "cells": [
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 1,
              "box": 0,
              "value": 8,
              "sign": -1
            },
            {
              "row": 5,
              "col": 0,
              "box": 3,
              "value": 8,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 2,
              "box": 6,
              "value": 8,
              "sign": -1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        }
      ]
    },
    {
      "id": "trade-target-33-digits-1-7-mask-262080",
      "label": "1<->7 mask 262080",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3,
        "7<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-34-digits-2-5-mask-4095",
      "label": "2<->5 mask 4095",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->5": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-35-digits-2-5-mask-258111",
      "label": "2<->5 mask 258111",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->4": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->4",
          "cells": [
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 2,
              "box": 6,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "2<->4",
          "cells": [
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 7,
              "col": 8,
              "box": 8,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        }
      ]
    },
    {
      "id": "trade-target-36-digits-2-5-mask-262080",
      "label": "2<->5 mask 262080",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-37-digits-2-8-mask-4095",
      "label": "2<->8 mask 4095",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "2<->9": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 0,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 3,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-38-digits-2-8-mask-258111",
      "label": "2<->8 mask 258111",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "1<->8": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->8",
          "cells": [
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 8,
              "sign": -1
            },
            {
              "row": 3,
              "col": 6,
              "box": 5,
              "value": 8,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 8,
              "box": 8,
              "value": 8,
              "sign": -1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->8",
          "cells": [
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 8,
              "sign": -1
            },
            {
              "row": 4,
              "col": 3,
              "box": 4,
              "value": 8,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 5,
              "box": 7,
              "value": 8,
              "sign": -1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        }
      ]
    },
    {
      "id": "trade-target-39-digits-2-8-mask-262080",
      "label": "2<->8 mask 262080",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 3,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-40-digits-3-6-mask-4095",
      "label": "3<->6 mask 4095",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->5": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-41-digits-3-6-mask-258111",
      "label": "3<->6 mask 258111",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-42-digits-3-6-mask-262080",
      "label": "3<->6 mask 262080",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->6": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-43-digits-3-9-mask-4095",
      "label": "3<->9 mask 4095",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "2<->9": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-44-digits-3-9-mask-258111",
      "label": "3<->9 mask 258111",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-45-digits-3-9-mask-262080",
      "label": "3<->9 mask 262080",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->3": 3,
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->3",
          "cells": [
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 1,
              "col": 8,
              "box": 2,
              "value": 3,
              "sign": -1
            },
            {
              "row": 3,
              "col": 7,
              "box": 5,
              "value": 3,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 6,
              "col": 6,
              "box": 8,
              "value": 3,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->3",
          "cells": [
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 5,
              "box": 1,
              "value": 3,
              "sign": -1
            },
            {
              "row": 4,
              "col": 4,
              "box": 4,
              "value": 3,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 3,
              "box": 7,
              "value": 3,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->3",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 2,
              "box": 0,
              "value": 3,
              "sign": -1
            },
            {
              "row": 5,
              "col": 1,
              "box": 3,
              "value": 3,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 0,
              "box": 6,
              "value": 3,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:16,odd:20 | cols even:16,odd:20"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-46-digits-4-7-mask-4095",
      "label": "4<->7 mask 4095",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-47-digits-4-7-mask-258111",
      "label": "4<->7 mask 258111",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-48-digits-4-7-mask-262080",
      "label": "4<->7 mask 262080",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->6": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-49-digits-5-8-mask-4095",
      "label": "5<->8 mask 4095",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-50-digits-5-8-mask-258111",
      "label": "5<->8 mask 258111",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-51-digits-5-8-mask-262080",
      "label": "5<->8 mask 262080",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-52-digits-6-9-mask-4095",
      "label": "6<->9 mask 4095",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        }
      ]
    },
    {
      "id": "trade-target-53-digits-6-9-mask-258111",
      "label": "6<->9 mask 258111",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 54,
      "uniqueTargetCount": 54,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 27,
        "12": 27
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        }
      ]
    },
    {
      "id": "trade-target-54-digits-6-9-mask-262080",
      "label": "6<->9 mask 262080",
      "sourceKind": "trade-target",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "primaryShape": "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}",
      "totalTrades": 60,
      "uniqueTargetCount": 60,
      "minimumSize": 6,
      "minimumSwapDepth": 3,
      "tradeSizeCounts": {
        "6": 30,
        "12": 30
      },
      "shapeCounts": {
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":2,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":12,\"rowCount\":6,\"colCount\":6,\"boxCount\":6,\"rowBandCount\":3,\"colStackCount\":2}": 3,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumShapeCounts": {
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 27,
        "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":3,\"colStackCount\":1}": 3
      },
      "minimumBandStackShapeCounts": {
        "1-3": 27,
        "3-1": 3
      },
      "minimumDigitPairCounts": {
        "1<->4": 3,
        "1<->7": 3,
        "2<->5": 3,
        "2<->8": 3,
        "3<->6": 3,
        "3<->9": 3,
        "4<->7": 3,
        "5<->8": 3,
        "6<->9": 3,
        "7<->9": 3
      },
      "parityCounts": {
        "rows even:18,odd:18 | cols even:18,odd:18": 24,
        "rows even:18,odd:18 | cols even:36,odd:0": 12,
        "rows even:36,odd:0 | cols even:18,odd:18": 12,
        "rows even:16,odd:20 | cols even:16,odd:20": 6,
        "rows even:36,odd:0 | cols even:36,odd:0": 6
      },
      "examples": [
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 3,
              "box": 1,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 0,
              "box": 0,
              "value": 4,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 6,
              "box": 2,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 3,
              "col": 2,
              "box": 3,
              "value": 4,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 8,
              "box": 5,
              "value": 4,
              "sign": -1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 5,
              "box": 4,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->4",
          "cells": [
            {
              "row": 6,
              "col": 1,
              "box": 6,
              "value": 4,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 7,
              "box": 8,
              "value": 4,
              "sign": -1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 4,
              "box": 7,
              "value": 4,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 0,
              "col": 0,
              "box": 0,
              "value": 1,
              "sign": 1
            },
            {
              "row": 0,
              "col": 6,
              "box": 2,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 3,
              "box": 1,
              "value": 7,
              "sign": -1
            },
            {
              "row": 1,
              "col": 6,
              "box": 2,
              "value": 1,
              "sign": 1
            },
            {
              "row": 2,
              "col": 0,
              "box": 0,
              "value": 7,
              "sign": -1
            },
            {
              "row": 2,
              "col": 3,
              "box": 1,
              "value": 1,
              "sign": 1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 3,
              "col": 5,
              "box": 4,
              "value": 7,
              "sign": -1
            },
            {
              "row": 3,
              "col": 8,
              "box": 5,
              "value": 1,
              "sign": 1
            },
            {
              "row": 4,
              "col": 2,
              "box": 3,
              "value": 7,
              "sign": -1
            },
            {
              "row": 4,
              "col": 5,
              "box": 4,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 2,
              "box": 3,
              "value": 1,
              "sign": 1
            },
            {
              "row": 5,
              "col": 8,
              "box": 5,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:36,odd:0"
        },
        {
          "digits": "1<->7",
          "cells": [
            {
              "row": 6,
              "col": 4,
              "box": 7,
              "value": 7,
              "sign": -1
            },
            {
              "row": 6,
              "col": 7,
              "box": 8,
              "value": 1,
              "sign": 1
            },
            {
              "row": 7,
              "col": 1,
              "box": 6,
              "value": 7,
              "sign": -1
            },
            {
              "row": 7,
              "col": 4,
              "box": 7,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 1,
              "box": 6,
              "value": 1,
              "sign": 1
            },
            {
              "row": 8,
              "col": 7,
              "box": 8,
              "value": 7,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 0,
              "col": 1,
              "box": 0,
              "value": 2,
              "sign": 1
            },
            {
              "row": 0,
              "col": 4,
              "box": 1,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 1,
              "box": 0,
              "value": 5,
              "sign": -1
            },
            {
              "row": 1,
              "col": 7,
              "box": 2,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 4,
              "box": 1,
              "value": 2,
              "sign": 1
            },
            {
              "row": 2,
              "col": 7,
              "box": 2,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:36,odd:0 | cols even:18,odd:18"
        },
        {
          "digits": "2<->5",
          "cells": [
            {
              "row": 3,
              "col": 0,
              "box": 3,
              "value": 2,
              "sign": 1
            },
            {
              "row": 3,
              "col": 3,
              "box": 4,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 0,
              "box": 3,
              "value": 5,
              "sign": -1
            },
            {
              "row": 4,
              "col": 6,
              "box": 5,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 3,
              "box": 4,
              "value": 2,
              "sign": 1
            },
            {
              "row": 5,
              "col": 6,
              "box": 5,
              "value": 5,
              "sign": -1
            }
          ],
          "parity": "rows even:18,odd:18 | cols even:18,odd:18"
        }
      ]
    }
  ],
  "outputJson": "/home/markblanksonhemans/projects/sudoku-board-swaps/data/forbidden-neighborhood.latest.json",
  "visualizerJson": "/home/markblanksonhemans/projects/sudoku-board-swaps/visualizer/data/forbidden-neighborhood.latest.json",
  "visualizerDataJs": "/home/markblanksonhemans/projects/sudoku-board-swaps/visualizer/data/forbidden-neighborhood-data.js",
  "updatedAt": "2026-05-12T11:36:00.171Z",
  "summary": {
    "totalTrades": 3232,
    "sourceKinds": {
      "seed": 2,
      "trade-target": 54
    },
    "minimumSizes": {
      "4": 1,
      "6": 55
    },
    "paritySignatures": {
      "rows even:36,odd:0 | cols even:36,odd:0": 1,
      "rows even:16,odd:20 | cols even:16,odd:20": 1,
      "rows even:18,odd:18 | cols even:18,odd:18": 54
    },
    "primaryShapes": {
      "{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3}": 55,
      "{\"cellCount\":4,\"rowCount\":2,\"colCount\":2,\"boxCount\":2,\"rowBandCount\":2,\"colStackCount\":1}": 1
    }
  },
  "groups": [
    {
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:18,odd:18 | cols even:18,odd:18;kind:trade-target",
      "count": 54,
      "examples": [
        "1<->4 mask 63",
        "1<->4 mask 4032",
        "1<->4 mask 258048",
        "1<->7 mask 63",
        "1<->7 mask 4032",
        "1<->7 mask 258048"
      ]
    },
    {
      "signature": "min:4;shape:{\"cellCount\":4,\"rowCount\":2,\"colCount\":2,\"boxCount\":2,\"rowBandCount\":2,\"colStackCount\":1};parity:rows even:16,odd:20 | cols even:16,odd:20;kind:seed",
      "count": 1,
      "examples": [
        "comparison"
      ]
    },
    {
      "signature": "min:6;shape:{\"cellCount\":6,\"rowCount\":3,\"colCount\":3,\"boxCount\":3,\"rowBandCount\":1,\"colStackCount\":3};parity:rows even:36,odd:0 | cols even:36,odd:0;kind:seed",
      "count": 1,
      "examples": [
        "cyclic base"
      ]
    }
  ]
};
