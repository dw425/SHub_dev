# StrategyHub Data Rebuild Plan

## Problem
Categories 1-26 were generated with fabricated page topics instead of matching the HTML source files on `origin/testing`. Only cat27-29 are correct.

## Source of Truth
- Branch: `origin/testing` on `https://github.com/dw425/StrategyHub_test.git`
- HTML files: `cat{NN}-p{N}-{slug}.html` contain the actual page content

## Audit Summary

| Cat | Slug | Testing Pages | Our Pages | Status |
|-----|------|:---:|:---:|--------|
| 01 | aiml-foundations | 8 | 5 (p4-p8) | p1-p3 missing, p4-p8 correct |
| 02 | data-engineering | 12 | 12 | ALL slugs wrong |
| 03 | analytics-bi | 10 | 10 | ALL slugs wrong |
| 04 | data-science | 8 | 8 | ALL slugs wrong |
| 05 | generative-ai | 10 | 10 | ALL slugs wrong |
| 06 | chatbots-agents | 10 | 10 | ALL slugs wrong |
| 07 | knowledge-management | 7 | 8 | ALL slugs wrong + extra page |
| 08 | automation-rpa | 5 | 7 | ALL slugs wrong + 2 extra |
| 09 | sdlc-devops | 7 | 7 | ALL slugs wrong |
| 10 | product-building | 7 | 7 | ALL slugs wrong |
| 11 | security-compliance | 7 | 8 | ALL slugs wrong + extra page |
| 12 | cloud-platforms | 7 | 8 | ALL slugs wrong + extra page |
| 13 | migration-factory | 6 | 7 | ALL slugs wrong + extra page |
| 14 | integration-apis | 5 | 6 | ALL slugs wrong + extra page |
| 15 | networking | 6 | 7 | MOST slugs wrong + extra page |
| 16 | monitoring-observability | 6 | 7 | MOST slugs wrong + extra page |
| 17 | change-management | 7 | 8 | SOME slugs wrong + extra page |
| 18 | implementation | 5 | 6 | ALL slugs wrong + extra page |
| 19 | emerging-technologies | 10 | 11 | ALL slugs wrong + extra page |
| 20 | industry-forecasts | 3 | 4 | ALL slugs wrong + extra page |
| 21 | white-papers-research | 5 | 6 | ALL slugs wrong + extra page |
| 22 | competitive-intelligence | 5 | 6 | ALL slugs wrong + extra page |
| 23 | computer-vision | 6 | 6 | 2 slugs wrong |
| 24 | design-patterns | 6 | 6 | ALL slugs wrong |
| 25 | data-security | 6 | 6 | ALL slugs wrong |
| 26 | governance | 6 | 6 | ALL slugs wrong |
| 27 | finops | 6 | 6 | OK |
| 28 | industry-verticals | 6 | 6 | OK |
| 29 | methodologies | 6 | 6 | OK |

## Correct Page Slugs (from testing branch)

### cat01 (8 pages) — aiml-foundations
1. supervised-learning
2. unsupervised-learning
3. reinforcement-learning
4. neural-networks ✓
5. ml-pipeline ✓
6. algorithm-selection ✓
7. ml-frameworks ✓
8. evaluation-metrics ✓

### cat02 (12 pages) — data-engineering
1. data-ingestion
2. data-transformation
3. databricks
4. snowflake
5. bigquery
6. apache-spark
7. orchestration
8. data-quality
9. observability
10. data-catalogs
11. streaming
12. reverse-etl

### cat03 (10 pages) — analytics-bi
1. bi-platforms
2. self-service
3. semantic-layer
4. visualization
5. dashboard-design
6. embedded
7. realtime
8. advanced
9. mobile-bi
10. bi-governance

### cat04 (8 pages) — data-science
1. crisp-dm
2. statistical-methods
3. feature-engineering
4. python-stack
5. notebooks
6. experiment-tracking
7. model-evaluation
8. use-cases

### cat05 (10 pages) — generative-ai
1. llm-fundamentals
2. prompt-engineering
3. rag-systems
4. fine-tuning
5. embeddings
6. model-evaluation
7. multimodal
8. responsible-ai
9. deployment
10. cost-optimization

### cat06 (10 pages) — chatbots-agents
1. nlu-intent
2. dialog-management
3. response-generation
4. context-memory
5. platforms
6. voice-assistants
7. multichannel
8. analytics
9. testing
10. enterprise

### cat07 (7 pages) — knowledge-management
1. knowledge-graphs
2. taxonomy
3. content-lifecycle
4. enterprise-wikis
5. semantic-models
6. vector-databases
7. platform-comparison

### cat08 (5 pages) — automation-rpa
1. automation-maturity
2. bot-orchestration
3. process-mining
4. lowcode-platforms
5. rpa-platforms

### cat09 (7 pages) — sdlc-devops
1. microservices
2. event-driven
3. data-mesh
4. lakehouse
5. api-patterns
6. cqrs-eventsourcing
7. domain-driven

### cat10 (7 pages) — product-building
1. product-lifecycle
2. best-practices
3. scaling-strategies
4. ai-assisted-dev
5. validation
6. methodologies
7. product-metrics

### cat11 (7 pages) — security-compliance
1. compliance-frameworks
2. data-privacy
3. data-governance
4. risk-management
5. identity-access
6. audit-logging
7. incident-response

### cat12 (7 pages) — cloud-platforms
1. cloud-providers
2. architecture-patterns
3. migration-strategies
4. compute-containers
5. storage-databases
6. networking-security
7. cost-optimization

### cat13 (6 pages) — migration-factory
1. assessment
2. conversion
3. validation
4. cutover
5. wave-planning
6. tooling

### cat14 (5 pages) — integration-apis
1. api-gateway
2. event-architecture
3. connectors
4. api-lifecycle
5. webhooks

### cat15 (6 pages) — networking
1. network-architecture
2. load-balancing
3. dns-cdn
4. vpn-connectivity
5. network-security
6. service-mesh

### cat16 (6 pages) — monitoring-observability
1. metrics-monitoring
2. logging
3. distributed-tracing
4. alerting-incidents
5. apm
6. aiops

### cat17 (7 pages) — change-management
1. change-frameworks
2. stakeholder-management
3. adoption-waves
4. communication
5. training-enablement
6. adoption-measurement
7. resistance-management

### cat18 (5 pages) — implementation
1. go-live-planning
2. cutover-management
3. hypercare
4. wave-rollout
5. post-implementation

### cat19 (10 pages) — emerging-technologies
1. foundation-models
2. agentic-ai
3. multimodal-ai
4. ai-coding
5. edge-ai
6. ai-infrastructure
7. ai-safety
8. rag-knowledge
9. observability
10. enterprise-adoption

### cat20 (3 pages) — industry-forecasts
1. agentic-workforce
2. builder-revolution
3. tech-forecasts

### cat21 (5 pages) — white-papers-research
1. ai-ml-research
2. data-analytics
3. cloud-platform
4. security-governance
5. strategy-transformation

### cat22 (5 pages) — competitive-intelligence
1. market-analysis
2. battle-cards
3. win-loss-analysis
4. pricing-intel
5. ci-tools

### cat23 (6 pages) — computer-vision
1. image-classification
2. object-detection
3. image-segmentation
4. video-analytics
5. ocr-document
6. generative-vision

### cat24 (6 pages) — design-patterns
1. creational
2. structural
3. behavioral
4. architectural
5. concurrency
6. enterprise

### cat25 (6 pages) — data-security
1. threat-landscape
2. encryption
3. access-control
4. compliance
5. zero-trust
6. incident-response

### cat26 (6 pages) — governance
1. data-quality
2. metadata
3. security-privacy
4. stewardship
5. compliance
6. architecture

### cat27-29: CORRECT, no changes needed

## Architecture: 3-Agent Pipeline

Every category batch runs through a 3-agent pipeline. No category ships until all 3 agents sign off.

### Agent 1: Builder
**Role:** Generate the `pages.ts` data file from HTML source.

**Process per category:**
1. Read every HTML page file from `/tmp/sh-cat{NN}-p{N}-{slug}.html`
2. Read `src/data/pageTypes.ts` for the exact TypeScript interface
3. Read `/tmp/strategyhub-page-template.md` for structural rules
4. Read an existing correct file (e.g. `cat27/pages.ts`) as reference
5. Extract from each HTML file:
   - Title (from `<h1>`)
   - Metrics (from `.hero-metric-value` + `.hero-metric-label`)
   - Section headings and paragraph content (from `.section-info h2` and description blocks)
   - Concept/card titles and descriptions
   - Algorithm/technique names, categories, ratings
   - Tool names, vendors, descriptions, tags
   - Best practice items (do's and don'ts)
   - Agent name, role, capabilities, code
   - Related page references
6. Write the complete `pages.ts` file using exact slugs from HTML filenames
7. Use exact page ordering matching the HTML file numbering (p1, p2, p3...)

**Rules:**
- Slugs MUST match HTML filenames exactly (e.g. `cat02-p3-databricks.html` → slug: `'databricks'`)
- Page count MUST match testing branch count exactly
- Badge format: `'{emoji} Page {catNum}.{pageNum}'`
- Algorithms alternate: odd pages = card-grid, even pages = table
- prevPage/nextPage chain must link all pages in order
- Single quotes, escaped apostrophes
- No fabricated content — everything derived from HTML source

### Agent 2: Validator
**Role:** Verify the Builder's output preserves ALL content from the HTML source.

**Process per category (runs after Builder completes):**
1. Read the generated `pages.ts` file
2. Read every corresponding HTML source file
3. Check each page against its HTML source:
   - **Slug match:** slug matches HTML filename exactly
   - **Title match:** title matches `<h1>` content
   - **Metrics preserved:** all 4 hero metric values and labels present
   - **Section content:** all major section headings appear in overview subsections
   - **Concepts/cards:** key concept titles and descriptions not dropped
   - **Algorithms/techniques:** all named items present (names, categories)
   - **Tools:** all tool names and vendors present
   - **Best practices:** do/don't item count matches (8 each)
   - **Agent:** agent name, role, capabilities present
   - **Related pages:** 3 related pages referencing valid slugs within category
   - **Navigation:** prevPage/nextPage chain is correct and complete
4. Report any content that was dropped, truncated, or fabricated
5. If issues found: list them explicitly so Builder can fix

**Validation checklist per page:**
- [ ] Slug matches HTML filename
- [ ] Title matches `<h1>`
- [ ] 4 metrics with values from HTML
- [ ] 3 overview subsections with real content
- [ ] 4 concept cards with titles from HTML
- [ ] 6-8 algorithm/technique items
- [ ] 6 tools with correct names/vendors
- [ ] 8 doItems + 8 dontItems
- [ ] Agent with name, role, 6 capabilities, Python code
- [ ] 3 relatedPages with valid in-category slugs
- [ ] prevPage/nextPage chain correct

### Agent 3: Aesthetics Auditor
**Role:** Verify the data renders correctly and matches the visual design of the HTML source.

**Process per category (runs after Validator passes):**
1. Read the generated `pages.ts` data
2. Cross-reference with the rendering components:
   - `src/pages/DetailPage.tsx` — how PageData maps to UI
   - `src/components/category/CategoryLayout.tsx` — layout wrapper
3. Verify visual/structural integrity:
   - **accentColor/accentLight:** valid hex colors, varied per page within category
   - **Concept cards:** `columns: 2`, 4 cards, `borderColor` values are distinct hex colors
   - **Algorithm tables:** headers array matches `['Name','Category','Best For','Complexity','Rating']`
   - **Algorithm card-grids:** cards have icon, title, subtitle, description, tags
   - **Tag classes:** only valid values (`tag-blue`, `tag-green`, `tag-purple`, `tag-orange`, `tag-pink`)
   - **Complexity values:** only `'low'`, `'medium'`, `'high'`
   - **Agent code:** valid Python syntax, CrewAI pattern, ~20 lines
   - **Emoji usage:** badge emoji matches category, concept card icons are meaningful
   - **No broken references:** relatedPages slugs exist in same category, prevPage/nextPage slugs valid
4. Spot-check visual parity with HTML source:
   - Same general color scheme per category
   - Metric values render sensibly (not cut off)
   - Description lengths reasonable (not too short, not overflowing)

---

## Execution Plan

### Pre-work (before agents)
1. Extract ALL HTML page files from `origin/testing` to `/tmp/sh-*`
2. Fix `categories.ts` page counts for 16 mismatched categories
3. Update template file at `/tmp/strategyhub-page-template.md` if needed

### Batch Execution
Process categories in batches. Each batch runs the 3-agent pipeline:

**Batch 1 — Large categories (10-12 pages):**
- cat02 (12), cat03 (10), cat05 (10), cat06 (10), cat19 (10)
- Builder agents use 2-pass strategy for 10+ pages to avoid output token limits

**Batch 2 — Medium categories (7-8 pages):**
- cat04 (8), cat07 (7), cat09 (7), cat10 (7), cat11 (7), cat12 (7), cat17 (7)

**Batch 3 — Small categories (5-6 pages):**
- cat08 (5), cat13 (6), cat14 (5), cat15 (6), cat16 (6), cat18 (5)
- cat20 (3), cat21 (5), cat22 (5), cat23 (6), cat24 (6), cat25 (6), cat26 (6)

**Batch 4 — cat01 (p1-p3 only):**
- Generate p1.ts, p2.ts, p3.ts as separate files
- Update cat01/index.ts to import them

### Post-work (after all batches)
1. `tsc --noEmit` — zero TypeScript errors
2. `vite build` — clean build
3. Re-run slug comparison script — 29/29 categories must match
4. Verify total page count matches testing branch (185 pages across cat01-26 + 18 pages cat27-29 = 203 total)

## Operating Mode: Headless
- No questions or interrupts — run autonomously start to finish
- If a Builder agent fails (token limit, etc.), automatically retry with 2-pass strategy
- If Validator finds issues, automatically feed back to Builder for correction
- If Auditor finds issues, automatically fix and re-validate
- Only pause at the very end with a final summary report
