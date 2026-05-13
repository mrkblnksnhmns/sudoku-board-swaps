window.SUDOKU_TRADE_TARGET_BATCH = {
  "kind": "cyclic-base-two-symbol-trade-targets",
  "runStartedAt": "2026-05-12T16:46:39.683Z",
  "config": {
    "targetCount": 54,
    "allGeneratedTargetCount": 54,
    "exactDiameterLimit": 1500,
    "resume": true
  },
  "processedCount": 33,
  "complete": false,
  "currentTarget": {
    "index": 34,
    "count": 54,
    "id": "digits-2-5-mask-4095",
    "label": "2<->5 mask 4095"
  },
  "profiles": [
    {
      "id": "digits-1-4-mask-63",
      "label": "1<->4 mask 63",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 1,
        "secondDigit": 4,
        "mask": 63,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
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
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-1-4-mask-4032",
      "label": "1<->4 mask 4032",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 1,
        "secondDigit": 4,
        "mask": 4032,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
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
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-1-4-mask-258048",
      "label": "1<->4 mask 258048",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 1,
        "secondDigit": 4,
        "mask": 258048,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
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
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-1-7-mask-63",
      "label": "1<->7 mask 63",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 1,
        "secondDigit": 7,
        "mask": 63,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 1,
            "col": 1,
            "value": 1
          },
          {
            "row": 1,
            "col": 7,
            "value": 7
          },
          {
            "row": 2,
            "col": 4,
            "value": 7
          },
          {
            "row": 2,
            "col": 7,
            "value": 1
          },
          {
            "row": 3,
            "col": 1,
            "value": 7
          },
          {
            "row": 3,
            "col": 4,
            "value": 1
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-1-7-mask-4032",
      "label": "1<->7 mask 4032",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 1,
        "secondDigit": 7,
        "mask": 4032,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 4,
            "col": 6,
            "value": 7
          },
          {
            "row": 4,
            "col": 9,
            "value": 1
          },
          {
            "row": 5,
            "col": 3,
            "value": 7
          },
          {
            "row": 5,
            "col": 6,
            "value": 1
          },
          {
            "row": 6,
            "col": 3,
            "value": 1
          },
          {
            "row": 6,
            "col": 9,
            "value": 7
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-1-7-mask-258048",
      "label": "1<->7 mask 258048",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 1,
        "secondDigit": 7,
        "mask": 258048,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 7,
            "col": 5,
            "value": 7
          },
          {
            "row": 7,
            "col": 8,
            "value": 1
          },
          {
            "row": 8,
            "col": 2,
            "value": 7
          },
          {
            "row": 8,
            "col": 5,
            "value": 1
          },
          {
            "row": 9,
            "col": 2,
            "value": 1
          },
          {
            "row": 9,
            "col": 8,
            "value": 7
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-2-5-mask-63",
      "label": "2<->5 mask 63",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 2,
        "secondDigit": 5,
        "mask": 63,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 1,
            "col": 2,
            "value": 2
          },
          {
            "row": 1,
            "col": 5,
            "value": 5
          },
          {
            "row": 2,
            "col": 2,
            "value": 5
          },
          {
            "row": 2,
            "col": 8,
            "value": 2
          },
          {
            "row": 3,
            "col": 5,
            "value": 2
          },
          {
            "row": 3,
            "col": 8,
            "value": 5
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-2-5-mask-4032",
      "label": "2<->5 mask 4032",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 2,
        "secondDigit": 5,
        "mask": 4032,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 4,
            "col": 1,
            "value": 2
          },
          {
            "row": 4,
            "col": 4,
            "value": 5
          },
          {
            "row": 5,
            "col": 1,
            "value": 5
          },
          {
            "row": 5,
            "col": 7,
            "value": 2
          },
          {
            "row": 6,
            "col": 4,
            "value": 2
          },
          {
            "row": 6,
            "col": 7,
            "value": 5
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-2-5-mask-258048",
      "label": "2<->5 mask 258048",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 2,
        "secondDigit": 5,
        "mask": 258048,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 7,
            "col": 3,
            "value": 5
          },
          {
            "row": 7,
            "col": 9,
            "value": 2
          },
          {
            "row": 8,
            "col": 6,
            "value": 2
          },
          {
            "row": 8,
            "col": 9,
            "value": 5
          },
          {
            "row": 9,
            "col": 3,
            "value": 2
          },
          {
            "row": 9,
            "col": 6,
            "value": 5
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-2-8-mask-63",
      "label": "2<->8 mask 63",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 2,
        "secondDigit": 8,
        "mask": 63,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 1,
            "col": 2,
            "value": 2
          },
          {
            "row": 1,
            "col": 8,
            "value": 8
          },
          {
            "row": 2,
            "col": 5,
            "value": 8
          },
          {
            "row": 2,
            "col": 8,
            "value": 2
          },
          {
            "row": 3,
            "col": 2,
            "value": 8
          },
          {
            "row": 3,
            "col": 5,
            "value": 2
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-2-8-mask-4032",
      "label": "2<->8 mask 4032",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 2,
        "secondDigit": 8,
        "mask": 4032,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 4,
            "col": 1,
            "value": 2
          },
          {
            "row": 4,
            "col": 7,
            "value": 8
          },
          {
            "row": 5,
            "col": 4,
            "value": 8
          },
          {
            "row": 5,
            "col": 7,
            "value": 2
          },
          {
            "row": 6,
            "col": 1,
            "value": 8
          },
          {
            "row": 6,
            "col": 4,
            "value": 2
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-2-8-mask-258048",
      "label": "2<->8 mask 258048",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 2,
        "secondDigit": 8,
        "mask": 258048,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 7,
            "col": 6,
            "value": 8
          },
          {
            "row": 7,
            "col": 9,
            "value": 2
          },
          {
            "row": 8,
            "col": 3,
            "value": 8
          },
          {
            "row": 8,
            "col": 6,
            "value": 2
          },
          {
            "row": 9,
            "col": 3,
            "value": 2
          },
          {
            "row": 9,
            "col": 9,
            "value": 8
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-3-6-mask-63",
      "label": "3<->6 mask 63",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 3,
        "secondDigit": 6,
        "mask": 63,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 1,
            "col": 3,
            "value": 3
          },
          {
            "row": 1,
            "col": 6,
            "value": 6
          },
          {
            "row": 2,
            "col": 3,
            "value": 6
          },
          {
            "row": 2,
            "col": 9,
            "value": 3
          },
          {
            "row": 3,
            "col": 6,
            "value": 3
          },
          {
            "row": 3,
            "col": 9,
            "value": 6
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-3-6-mask-4032",
      "label": "3<->6 mask 4032",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 3,
        "secondDigit": 6,
        "mask": 4032,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 4,
            "col": 2,
            "value": 3
          },
          {
            "row": 4,
            "col": 5,
            "value": 6
          },
          {
            "row": 5,
            "col": 2,
            "value": 6
          },
          {
            "row": 5,
            "col": 8,
            "value": 3
          },
          {
            "row": 6,
            "col": 5,
            "value": 3
          },
          {
            "row": 6,
            "col": 8,
            "value": 6
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-3-6-mask-258048",
      "label": "3<->6 mask 258048",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 3,
        "secondDigit": 6,
        "mask": 258048,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 7,
            "col": 1,
            "value": 3
          },
          {
            "row": 7,
            "col": 4,
            "value": 6
          },
          {
            "row": 8,
            "col": 1,
            "value": 6
          },
          {
            "row": 8,
            "col": 7,
            "value": 3
          },
          {
            "row": 9,
            "col": 4,
            "value": 3
          },
          {
            "row": 9,
            "col": 7,
            "value": 6
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-3-9-mask-63",
      "label": "3<->9 mask 63",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 3,
        "secondDigit": 9,
        "mask": 63,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 1,
            "col": 3,
            "value": 3
          },
          {
            "row": 1,
            "col": 9,
            "value": 9
          },
          {
            "row": 2,
            "col": 6,
            "value": 9
          },
          {
            "row": 2,
            "col": 9,
            "value": 3
          },
          {
            "row": 3,
            "col": 3,
            "value": 9
          },
          {
            "row": 3,
            "col": 6,
            "value": 3
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-3-9-mask-4032",
      "label": "3<->9 mask 4032",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 3,
        "secondDigit": 9,
        "mask": 4032,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 4,
            "col": 2,
            "value": 3
          },
          {
            "row": 4,
            "col": 8,
            "value": 9
          },
          {
            "row": 5,
            "col": 5,
            "value": 9
          },
          {
            "row": 5,
            "col": 8,
            "value": 3
          },
          {
            "row": 6,
            "col": 2,
            "value": 9
          },
          {
            "row": 6,
            "col": 5,
            "value": 3
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-3-9-mask-258048",
      "label": "3<->9 mask 258048",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 3,
        "secondDigit": 9,
        "mask": 258048,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 7,
            "col": 1,
            "value": 3
          },
          {
            "row": 7,
            "col": 7,
            "value": 9
          },
          {
            "row": 8,
            "col": 4,
            "value": 9
          },
          {
            "row": 8,
            "col": 7,
            "value": 3
          },
          {
            "row": 9,
            "col": 1,
            "value": 9
          },
          {
            "row": 9,
            "col": 4,
            "value": 3
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-4-7-mask-63",
      "label": "4<->7 mask 63",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 4,
        "secondDigit": 7,
        "mask": 63,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 1,
            "col": 4,
            "value": 4
          },
          {
            "row": 1,
            "col": 7,
            "value": 7
          },
          {
            "row": 2,
            "col": 1,
            "value": 4
          },
          {
            "row": 2,
            "col": 4,
            "value": 7
          },
          {
            "row": 3,
            "col": 1,
            "value": 7
          },
          {
            "row": 3,
            "col": 7,
            "value": 4
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-4-7-mask-4032",
      "label": "4<->7 mask 4032",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 4,
        "secondDigit": 7,
        "mask": 4032,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 4,
            "col": 3,
            "value": 4
          },
          {
            "row": 4,
            "col": 6,
            "value": 7
          },
          {
            "row": 5,
            "col": 3,
            "value": 7
          },
          {
            "row": 5,
            "col": 9,
            "value": 4
          },
          {
            "row": 6,
            "col": 6,
            "value": 4
          },
          {
            "row": 6,
            "col": 9,
            "value": 7
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-4-7-mask-258048",
      "label": "4<->7 mask 258048",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 4,
        "secondDigit": 7,
        "mask": 258048,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 7,
            "col": 2,
            "value": 4
          },
          {
            "row": 7,
            "col": 5,
            "value": 7
          },
          {
            "row": 8,
            "col": 2,
            "value": 7
          },
          {
            "row": 8,
            "col": 8,
            "value": 4
          },
          {
            "row": 9,
            "col": 5,
            "value": 4
          },
          {
            "row": 9,
            "col": 8,
            "value": 7
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-5-8-mask-63",
      "label": "5<->8 mask 63",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 5,
        "secondDigit": 8,
        "mask": 63,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 1,
            "col": 5,
            "value": 5
          },
          {
            "row": 1,
            "col": 8,
            "value": 8
          },
          {
            "row": 2,
            "col": 2,
            "value": 5
          },
          {
            "row": 2,
            "col": 5,
            "value": 8
          },
          {
            "row": 3,
            "col": 2,
            "value": 8
          },
          {
            "row": 3,
            "col": 8,
            "value": 5
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-5-8-mask-4032",
      "label": "5<->8 mask 4032",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 5,
        "secondDigit": 8,
        "mask": 4032,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 4,
            "col": 4,
            "value": 5
          },
          {
            "row": 4,
            "col": 7,
            "value": 8
          },
          {
            "row": 5,
            "col": 1,
            "value": 5
          },
          {
            "row": 5,
            "col": 4,
            "value": 8
          },
          {
            "row": 6,
            "col": 1,
            "value": 8
          },
          {
            "row": 6,
            "col": 7,
            "value": 5
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-5-8-mask-258048",
      "label": "5<->8 mask 258048",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 5,
        "secondDigit": 8,
        "mask": 258048,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 7,
            "col": 3,
            "value": 5
          },
          {
            "row": 7,
            "col": 6,
            "value": 8
          },
          {
            "row": 8,
            "col": 3,
            "value": 8
          },
          {
            "row": 8,
            "col": 9,
            "value": 5
          },
          {
            "row": 9,
            "col": 6,
            "value": 5
          },
          {
            "row": 9,
            "col": 9,
            "value": 8
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-6-9-mask-63",
      "label": "6<->9 mask 63",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 6,
        "secondDigit": 9,
        "mask": 63,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 1,
            "col": 6,
            "value": 6
          },
          {
            "row": 1,
            "col": 9,
            "value": 9
          },
          {
            "row": 2,
            "col": 3,
            "value": 6
          },
          {
            "row": 2,
            "col": 6,
            "value": 9
          },
          {
            "row": 3,
            "col": 3,
            "value": 9
          },
          {
            "row": 3,
            "col": 9,
            "value": 6
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-6-9-mask-4032",
      "label": "6<->9 mask 4032",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 6,
        "secondDigit": 9,
        "mask": 4032,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 4,
            "col": 5,
            "value": 6
          },
          {
            "row": 4,
            "col": 8,
            "value": 9
          },
          {
            "row": 5,
            "col": 2,
            "value": 6
          },
          {
            "row": 5,
            "col": 5,
            "value": 9
          },
          {
            "row": 6,
            "col": 2,
            "value": 9
          },
          {
            "row": 6,
            "col": 8,
            "value": 6
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-6-9-mask-258048",
      "label": "6<->9 mask 258048",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 6,
        "secondDigit": 9,
        "mask": 258048,
        "size": 6,
        "shape": {
          "cellCount": 6,
          "rowCount": 3,
          "colCount": 3,
          "boxCount": 3,
          "rowBandCount": 1,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 7,
            "col": 4,
            "value": 6
          },
          {
            "row": 7,
            "col": 7,
            "value": 9
          },
          {
            "row": 8,
            "col": 1,
            "value": 6
          },
          {
            "row": 8,
            "col": 4,
            "value": 9
          },
          {
            "row": 9,
            "col": 1,
            "value": 9
          },
          {
            "row": 9,
            "col": 7,
            "value": 6
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-1-4-mask-4095",
      "label": "1<->4 mask 4095",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 1,
        "secondDigit": 4,
        "mask": 4095,
        "size": 12,
        "shape": {
          "cellCount": 12,
          "rowCount": 6,
          "colCount": 6,
          "boxCount": 6,
          "rowBandCount": 2,
          "colStackCount": 3
        },
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
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-1-4-mask-258111",
      "label": "1<->4 mask 258111",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 1,
        "secondDigit": 4,
        "mask": 258111,
        "size": 12,
        "shape": {
          "cellCount": 12,
          "rowCount": 6,
          "colCount": 6,
          "boxCount": 6,
          "rowBandCount": 2,
          "colStackCount": 3
        },
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
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-1-4-mask-262080",
      "label": "1<->4 mask 262080",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 1,
        "secondDigit": 4,
        "mask": 262080,
        "size": 12,
        "shape": {
          "cellCount": 12,
          "rowCount": 6,
          "colCount": 6,
          "boxCount": 6,
          "rowBandCount": 2,
          "colStackCount": 3
        },
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
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-1-7-mask-4095",
      "label": "1<->7 mask 4095",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 1,
        "secondDigit": 7,
        "mask": 4095,
        "size": 12,
        "shape": {
          "cellCount": 12,
          "rowCount": 6,
          "colCount": 6,
          "boxCount": 6,
          "rowBandCount": 2,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 1,
            "col": 1,
            "value": 1
          },
          {
            "row": 1,
            "col": 7,
            "value": 7
          },
          {
            "row": 2,
            "col": 4,
            "value": 7
          },
          {
            "row": 2,
            "col": 7,
            "value": 1
          },
          {
            "row": 3,
            "col": 1,
            "value": 7
          },
          {
            "row": 3,
            "col": 4,
            "value": 1
          },
          {
            "row": 4,
            "col": 6,
            "value": 7
          },
          {
            "row": 4,
            "col": 9,
            "value": 1
          },
          {
            "row": 5,
            "col": 3,
            "value": 7
          },
          {
            "row": 5,
            "col": 6,
            "value": 1
          },
          {
            "row": 6,
            "col": 3,
            "value": 1
          },
          {
            "row": 6,
            "col": 9,
            "value": 7
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-1-7-mask-258111",
      "label": "1<->7 mask 258111",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 1,
        "secondDigit": 7,
        "mask": 258111,
        "size": 12,
        "shape": {
          "cellCount": 12,
          "rowCount": 6,
          "colCount": 6,
          "boxCount": 6,
          "rowBandCount": 2,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 1,
            "col": 1,
            "value": 1
          },
          {
            "row": 1,
            "col": 7,
            "value": 7
          },
          {
            "row": 2,
            "col": 4,
            "value": 7
          },
          {
            "row": 2,
            "col": 7,
            "value": 1
          },
          {
            "row": 3,
            "col": 1,
            "value": 7
          },
          {
            "row": 3,
            "col": 4,
            "value": 1
          },
          {
            "row": 7,
            "col": 5,
            "value": 7
          },
          {
            "row": 7,
            "col": 8,
            "value": 1
          },
          {
            "row": 8,
            "col": 2,
            "value": 7
          },
          {
            "row": 8,
            "col": 5,
            "value": 1
          },
          {
            "row": 9,
            "col": 2,
            "value": 1
          },
          {
            "row": 9,
            "col": 8,
            "value": 7
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    },
    {
      "id": "digits-1-7-mask-262080",
      "label": "1<->7 mask 262080",
      "valid": true,
      "paritySignature": "rows even:18,odd:18 | cols even:18,odd:18",
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "trade": {
        "firstDigit": 1,
        "secondDigit": 7,
        "mask": 262080,
        "size": 12,
        "shape": {
          "cellCount": 12,
          "rowCount": 6,
          "colCount": 6,
          "boxCount": 6,
          "rowBandCount": 2,
          "colStackCount": 3
        },
        "cells": [
          {
            "row": 4,
            "col": 6,
            "value": 7
          },
          {
            "row": 4,
            "col": 9,
            "value": 1
          },
          {
            "row": 5,
            "col": 3,
            "value": 7
          },
          {
            "row": 5,
            "col": 6,
            "value": 1
          },
          {
            "row": 6,
            "col": 3,
            "value": 1
          },
          {
            "row": 6,
            "col": 9,
            "value": 7
          },
          {
            "row": 7,
            "col": 5,
            "value": 7
          },
          {
            "row": 7,
            "col": 8,
            "value": 1
          },
          {
            "row": 8,
            "col": 2,
            "value": 7
          },
          {
            "row": 8,
            "col": 5,
            "value": 1
          },
          {
            "row": 9,
            "col": 2,
            "value": 1
          },
          {
            "row": 9,
            "col": 8,
            "value": 7
          }
        ]
      },
      "row": {
        "roleGraphKey": "edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222",
        "edgeCount": 9,
        "componentShape": "3+3+3",
        "degreeSequence": "2,2,2,2,2,2,2,2,2",
        "endpointCount": 1296,
        "singleComponentCount": 6,
        "singleComponentSizes": "216x6",
        "singleReachable": 216,
        "singleIdentityWorstCase": 6,
        "singleLargestDiameter": 6,
        "blockComponentCount": 1,
        "blockComponentSizes": "1296",
        "blockReachable": 1296,
        "blockIdentityWorstCase": 8,
        "blockLargestDiameter": 8
      },
      "col": {
        "roleGraphKey": "edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
        "edgeCount": 18,
        "componentShape": "9",
        "degreeSequence": "4,4,4,4,4,4,4,4,4",
        "endpointCount": 46656,
        "singleComponentCount": 1,
        "singleComponentSizes": "46656",
        "singleReachable": 46656,
        "singleIdentityWorstCase": 12,
        "singleLargestDiameter": null,
        "blockComponentCount": 1,
        "blockComponentSizes": "46656",
        "blockReachable": 46656,
        "blockIdentityWorstCase": 10,
        "blockLargestDiameter": null
      }
    }
  ],
  "outputJson": "/home/markblanksonhemans/projects/sudoku-board-swaps/data/trade-target-batch.latest.json",
  "visualizerJson": "/home/markblanksonhemans/projects/sudoku-board-swaps/visualizer/data/trade-target-batch.latest.json",
  "visualizerDataJs": "/home/markblanksonhemans/projects/sudoku-board-swaps/visualizer/data/trade-target-batch-data.js",
  "updatedAt": "2026-05-12T16:53:50.259Z",
  "groups": [
    {
      "signature": "row:edges:1-2,1-3,2-3,4-5,4-6,5-6,7-8,7-9,8-9;components:123|456|789;degrees:222222222 || col:edges:1-2,1-3,1-4,1-7,2-3,2-5,2-8,3-6,3-9,4-5,4-6,4-7,5-6,5-8,6-9,7-8,7-9,8-9;components:123456789;degrees:444444444",
      "count": 33,
      "examples": [
        "1<->4 mask 63",
        "1<->4 mask 4032",
        "1<->4 mask 258048",
        "1<->7 mask 63",
        "1<->7 mask 4032",
        "1<->7 mask 258048"
      ],
      "sizes": {
        "6": 27,
        "12": 6
      },
      "paritySignatures": {
        "rows even:18,odd:18 | cols even:18,odd:18": 33
      }
    }
  ]
};
