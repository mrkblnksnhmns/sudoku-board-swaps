# Asymmetric Sequence Agenda

## Research Question

Can we predefine asymmetric operation sequences on solved `9x9` Sudoku grids, run them against solved boards, and measure how many genuinely different solved boards they reach?

In this project, a solved board is treated as a node. A predefined sequence of operations is treated as an edge candidate. If the sequence starts at a solved board and ends at a solved board, it becomes a real edge in the transformation graph.

## Two-Phase Workflow

The research is split into two separate phases.

### 1. Board Finding

Board finding creates the source boards. It must not depend only on boards reachable from one seed under the asymmetric operation rules, because disconnected board families would never be seen.

The first local version uses randomized completed-grid generation:

```bash
node sudoku-9x9-board-sample.js --count=100 --seed=phase-one-board-finding
```

Output:

```text
data/solved-board-sample.latest.json
visualizer/data/solved-board-sample.latest.json
visualizer/data/solved-board-sample-data.js
```

This sample is not a complete catalog. It is a reproducible local source-board set that can grow over time.

Each generated board is:

- validated as a solved Sudoku grid
- exact-deduped
- sorted by cheap structural profiles
- tagged with row/column parity profile metadata

We do not need to solve the full "only disconnected representatives" problem at this phase. That reduction can be added later. For now, the board sample keeps all generated boards and lets the pattern phase decide whether to skip standard-equivalent sources.

### 2. Pattern Finding

Pattern finding scans operation families on each source board:

```bash
node sudoku-9x9-asymmetric-sequences.js --source=sample
```

The pattern scan can run in two modes:

- scan every supplied source board
- skip standard-symmetry-equivalent source boards with `--dedupe-sources`

The important point is that board discovery and pattern reachability are not the same thing. A board that cannot be derived from one source may still appear in the source sample because the board-finding phase generated it independently.

## Working Definition

An asymmetric sequence is a reusable ordered operation pattern that is not just one of the standard Sudoku symmetries.

Standard symmetries stay excluded from the target count:

- digit renames
- row swaps inside bands
- column swaps inside stacks
- whole-band swaps
- whole-stack swaps
- transpose/reflection-style equivalents already covered by the standard symmetry checker

The operation sequence may pass through invalid intermediate boards. The endpoint must be a completed Sudoku grid.

```text
solved board -> operation sequence -> solved board
```

Then the endpoint is classified:

```text
same exact board -> identity
same by standard symmetry -> standard-symmetry
not same by standard symmetry -> genuine
```

## What We Count

For each source board and each predefined asymmetric sequence family, count:

- `attemptedSequences`: how many concrete sequences were tried
- `validEndpoints`: how many attempts ended at a solved board
- `uniqueEndpoints`: how many distinct solved boards were reached
- `genuineEndpoints`: how many reached boards are not standard-symmetry equivalents of the source
- `essentialEndpointFamilies`: how many reached endpoint families remain after canonical standard-symmetry filtering
- `minimumSwapDepth`: shortest sequence length that reaches a genuine endpoint

This answers a precise version of "how many Sudokus could we solve?": how many solved Sudoku grids, or symmetry-distinct solved-grid families, are reachable from a given solved grid under the selected operation library.

## Data Format

The comparison data should stay graph-shaped so it can feed both batch scripts and the visualizer.

```json
{
  "schema": "asymmetric-sequence-v1",
  "generatedAt": "ISO timestamp",
  "sources": [
    {
      "id": "seed-base",
      "label": "cyclic base",
      "gridKey": "123456789/456789123/...",
      "summary": {
        "attemptedSequences": 0,
        "validEndpoints": 0,
        "uniqueEndpoints": 0,
        "genuineEndpoints": 0,
        "essentialEndpointFamilies": 0,
        "minimumSwapDepth": null
      },
      "operationFamilies": [
        {
          "id": "two-symbol-balanced-trade",
          "label": "Repeated number-pair shuffle",
          "arity": "variable",
          "attemptedSequences": 0,
          "classCounts": {
            "identity": 0,
            "standard-symmetry": 0,
            "genuine": 0
          },
          "sequenceTypes": [
            {
              "typeKey": "canonical structural signature",
              "cellCount": 0,
              "swapDepth": 0,
              "touchedRows": [],
              "touchedCols": [],
              "touchedBoxes": [],
              "rowBalance": [],
              "colBalance": [],
              "boxBalance": [],
              "examples": [
                {
                  "moves": ["r1c1<->r2c2"],
                  "targetKey": "target grid key",
                  "className": "genuine"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## Initial Data Structures

Use compact structures during search and expand to JSON only after a candidate survives the cheap filters.

- board values: `Uint8Array(81)`
- board key: compact 81-character string, created only for valid endpoints
- changed-cell set: three unsigned `32`-bit words, covering cells `0..80`
- sequence pairs: sorted `Uint8Array(2 * swapDepth)` or plain numeric array during prototyping
- row/column/box balance: `Int8Array(27 * 10)`, indexed by unit and digit
- known source families: `Set<canonicalBoardKey>`
- reached endpoints: `Map<canonicalBoardKey, endpointRecord>`
- reached exact endpoints: `Set<gridKey>`
- sequence types: `Map<typeKey, typeRecord>`
- graph edges: adjacency map from `sourceCanonicalKey` to endpoint/type summaries

The hot path should avoid cloning full nested arrays. A candidate sequence mutates only metadata while it is being generated. Only after passing the no-overlap and balance tests should we materialize the final `Uint8Array(81)` board and validate it.

## Asymmetric Swap Rules

These rules are search gates, not just after-the-fact labels.

### 1. Every Cell Can Change At Most Once

A concrete asymmetric swap sequence is a matching over the `81` cells. No cell can appear in more than one swap.

```text
valid:   r1c1<->r2c2, r3c3<->r4c4
invalid: r1c1<->r2c2, r1c1<->r3c3
```

This makes the sequence order-independent. Internally, store each pair with the lower cell index first, then sort all pairs lexicographically. That canonical pair list is the `concreteKey`.

### 2. Equivalent Source Boards Are Scanned Once

For the initial closed sample of known solved boards, every source board must be canonicalized before scanning. If two solved boards are equivalent under the standard Sudoku symmetries, keep the first representative and skip the rest.

```text
sourceBoard -> canonicalBoardKey -> scan only if not already scanned
```

This keeps the sample small and prevents the same neighborhood from being counted multiple times.

### 3. A Sequence And Its Reverse Are The Same Type

Because every cell changes at most once, a swap sequence is its own inverse when applied again. The forward and backward descriptions are the same operation.

```text
r1c1<->r2c2, r3c3<->r4c4
```

is the same concrete sequence regardless of whether the visualizer plays it from source to target or target to source.

The graph can still store a directed source-to-endpoint edge for reachability, but the sequence identity itself is undirected.

### 4. Whole-Board Symmetry Aggregates Are Rejected

Some many-cell swap sets are just disguised standard board symmetries. For example, a sequence that merely exchanges the left side of the board with the right side, swaps whole stacks, mirrors columns, transposes, or performs another standard layout symmetry is not an asymmetric type.

Reject any candidate whose induced cell permutation is equivalent to:

- row swaps inside bands
- column swaps inside stacks
- whole-band swaps
- whole-stack swaps
- transpose/reflection-equivalent standard mappings
- a global digit rename with no genuine cell-structure change

This rejection should happen before counting the candidate as an asymmetric type. The endpoint may be valid, but it belongs in the `standard-symmetry` bucket, not the `genuine` bucket.

## Type Classification

The first important count is not just the number of concrete sequences. Many concrete sequences are the same structural type after renaming rows, columns, boxes, and digits in standard Sudoku ways.

So each sequence needs two identities:

- `concreteKey`: exact cells and exact digits moved
- `typeKey`: canonicalized structural shape of the sequence

The `typeKey` should include:

- operation family id
- number of touched cells
- square-pair depth
- rows/columns/boxes touched
- per-row, per-column, and per-box balance deltas
- cell-pair geometry counts
- cycle structure of the induced cell movement
- whether the result is identity, standard-symmetry, or genuine

The long-term goal is to canonicalize `typeKey` under the standard Sudoku symmetry group. That gives the real answer to "how many asymmetric shuffle types exist?"

## Interesting Shuffle Types

### Repeated Number-Pair Shuffle

A repeated number-pair shuffle is the first pattern that looks like a reusable idea rather than only brute force.

Every ordinary square-pair trade exchanges two numbers. The current observation is that useful multi-shuffle discoveries often keep using the same number pair, such as `4` and `7`, across several shuffle locations:

```text
4 -> 7
7 -> 4
```

The shuffle location shape is the interesting part. A strong version of the pattern is balanced:

- each affected row loses and gains the same pair of numbers
- each affected column loses and gains the same pair of numbers
- each affected box loses and gains the same pair of numbers

That balance is one reason the final board can still be solved even though the intermediate square-pair trades may be invalid.

As square-pair trades:

```text
4 selected cells  -> 2 square-pairs
6 selected cells  -> 3 square-pairs
12 selected cells -> 6 square-pairs
```

This pattern should stay in an `interesting shuffles` category because the relevant idea is the repeated reuse of one number pair across meaningful shuffle locations. The scanner should classify both the number pair and the shuffle location shape.

### Planned Three-Pair Shuffle

The next shuffle type should be a three-pair shuffle:

```text
solved source board -> 3 disjoint square-pair trades -> solved endpoint board
```

Working rules:

- exactly three square-pair trades
- six touched cells total
- no cell reused
- order does not matter; store pairs in canonical sorted order
- endpoint must be solved
- standard-symmetry endpoints are counted separately, not as genuine
- whole-board symmetry aggregates are rejected before type counting

This is different from a true 3-cell cycle. A 3-cell cycle may become its own later operation family, but the next planned test is three disjoint two-cell trades.

The raw search space is large, so the first version should use filters:

- skip same-number no-op trades
- track row/column/box digit balance before materializing endpoint boards
- checkpoint by source board and outer-pair prefix
- keep only a small number of examples per type for the visualizer
- stop early per source if the run is configured as a sampling pass

## Algorithm

1. Load the closed sample of known solved source boards.
2. Convert each source to `Uint8Array(81)`.
3. Compute `canonicalBoardKey` for each source and skip duplicate equivalent sources.
4. Generate disjoint cell-pair matchings from one predefined family.
5. Canonicalize pair order so forward/backward sequence descriptions collapse.
6. Reject pair sets that are known whole-board symmetry aggregates.
7. Track row/column/box digit balance while generating.
8. Materialize and validate only candidates that pass the cheap balance filters.
9. Deduplicate valid endpoints by exact `gridKey` and canonical `canonicalBoardKey`.
10. Classify each endpoint with the existing standard-symmetry checker.
11. Build `concreteKey` and canonical `typeKey`.
12. Count concrete sequences, unique endpoints, genuine endpoints, and unique asymmetric types.
13. Write JSON to `data/` and mirrored visualizer data to `visualizer/data/`.

## Search Structure

Use a graph for the real model:

```text
node = solved board or canonical solved-board family
edge = predefined asymmetric operation sequence
```

A binary tree is not the right primary model because each board has far more than two possible next sequences. Better structures:

- graph adjacency map for reachability and shortest paths
- queue-based BFS for minimum depth
- trie of operation prefixes to avoid recomputing shared partial sequences
- canonical-key maps to merge duplicate boards and duplicate sequence types
- union-find if the goal becomes connected-component counting

For visualization, the graph can still be displayed as a tree-like frontier from one selected source board, but internally it should remain a graph so duplicate endpoints collapse correctly.

## First Implementation Target

Start with the operation families we already understand:

1. raw square-pair sequences at small depth
2. repeated number-pair shuffles
3. valid row/column endpoint permutations as a comparison layer

Then add an `asymmetric-sequences` batch script that emits:

```text
data/asymmetric-sequences.latest.json
visualizer/data/asymmetric-sequences.latest.json
visualizer/data/asymmetric-sequences-data.js
```

The visualizer can then show:

- source board
- selected operation family
- selected sequence type
- move-by-move board state
- endpoint class
- count of concrete sequences represented by that type
- count of genuine solved endpoints reached by that type
