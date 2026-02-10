# StrategyHub — React + TypeScript Conversion Plan

> **Source:** `dw425/StrategyHub_test` branch `testing` (259 static HTML files)
> **Target:** `dw425/StrategyHub_test` branch `v4.0.1` (React SPA)
> **Reference:** `dw425/TMP_remod_v1` (Blueprint Marketplace — light theme, header/footer, styles)
> **Working directory:** `/Users/darkstar33/Documents/GitHub/StrategyHub`

---

## Confirmed Requirements

1. **Full React 18 + TypeScript + Vite + Tailwind CSS SPA** — same stack as Marketplace
2. **DM Sans font** (400/500/700) — replaces Orbitron/Inter/system fonts
3. **Light theme matching Marketplace** — blueprint-blue `#1d4ed8`, bg `#eef2f6`, text `#111827`, sharp 0px corners
4. **Marketplace header exactly** — logo, divider, nav items, mega menus, search, connect button, cart, user menu
   - "Marketplace" label → **"StrategyHub"** (left side next to logo)
   - "StrategyHub" nav link → **"Marketplace"** (links back to Marketplace site)
5. **Marketplace footer exactly** — dark gray-900, 4-column layout, social icons, same structure
   - Footer brand text references StrategyHub instead of Marketplace where appropriate
6. **ALL 259 pages of content preserved — ZERO content loss**
7. **Sidebar navigation preserved** — fixed left sidebar with category page links, active states
8. **All visuals rebuilt** — particle canvas, orbital Quick Pulse, concept grids, comparison tables, metrics, SVG diagrams
9. **Dark mode toggle retained** from Marketplace header (sun/moon icon)
10. **Same component patterns** — SharpCard, Badge, Button (sharp corners, blue top borders)

---

## COMPLETE FILE INVENTORY (259 files — ALL must be converted)

### Special Pages (2 files)
| File | Page Type |
|------|-----------|
| `index.html` | Homepage / Cover Page |
| `quick-pulse-hub.html` | Quick Pulse Orbital Hub |

### Category Files (257 files across 29 categories)

Each category has **3 file types**:
- **Card file** (`catNN-name.html`) — category card/landing entry
- **Overview file** (`catNN-name-overview.html`) — expanded overview with concepts, tools, pros/cons
- **Detail pages** (`catNN-pN-topic.html`) — deep-dive content pages

| Cat | Title | Card File | Overview File | Detail Pages | Total |
|-----|-------|-----------|---------------|-------------|-------|
| 01 | AI/ML Foundations | `cat01-aiml-foundations.html` | `cat01-aiml-foundations-overview.html` | p1-supervised-learning, p2-unsupervised-learning, p3-reinforcement-learning, p4-neural-networks, p5-ml-pipeline, p6-algorithm-selection, p7-ml-frameworks, p8-evaluation-metrics | **10** |
| 02 | Data Engineering | `cat02-data-engineering.html` | `cat02-data-engineering-overview.html` | p1-data-ingestion, p2-data-transformation, p3-databricks, p4-snowflake, p5-bigquery, p6-apache-spark, p7-orchestration, p8-data-quality, p9-observability, p10-data-catalogs, p11-streaming, p12-reverse-etl | **14** |
| 03 | Analytics & BI | `cat03-analytics-bi.html` | `cat03-analytics-bi-overview.html` | p1-bi-platforms, p2-self-service, p3-semantic-layer, p4-visualization, p5-dashboard-design, p6-embedded, p7-realtime, p8-advanced, p9-mobile-bi, p10-bi-governance | **12** |
| 04 | Data Science | `cat04-data-science.html` | `cat04-data-science-overview.html` | p1-crisp-dm, p2-statistical-methods, p3-feature-engineering, p4-python-stack, p5-notebooks, p6-experiment-tracking, p7-model-evaluation, p8-use-cases | **10** |
| 05 | Generative AI | `cat05-generative-ai.html` | `cat05-generative-ai-overview.html` | p1-llm-fundamentals, p2-prompt-engineering, p3-rag-systems, p4-fine-tuning, p5-embeddings, p6-model-evaluation, p7-multimodal, p8-responsible-ai, p9-deployment, p10-cost-optimization | **12** |
| 06 | Chatbots & Agents | `cat06-chatbots-agents.html` | `cat06-agents-chatbots-overview.html` | p1-nlu-intent, p2-dialog-management, p3-response-generation, p4-context-memory, p5-platforms, p6-voice-assistants, p7-multichannel, p8-analytics, p9-testing, p10-enterprise | **12** |
| 07 | Knowledge Management | `cat07-knowledge-management.html` | `cat07-knowledge-overview.html` | p1-knowledge-graphs, p3-taxonomy, p4-content-lifecycle, p5-enterprise-wikis, p6-semantic-models, p7-vector-databases, p8-platform-comparison *(note: p2 missing in source)* | **9** |
| 08 | Automation & RPA | `cat08-automation-rpa.html` | `cat08-automation-overview.html` | p1-automation-maturity, p2-bot-orchestration, p3-process-mining, p4-lowcode-platforms, p5-rpa-platforms | **7** |
| 09 | Architecture | `cat09-sdlc-devops.html` | `cat09-architecture-overview.html` | p1-microservices, p2-event-driven, p3-data-mesh, p4-lakehouse, p5-api-patterns, p6-cqrs-eventsourcing, p7-domain-driven | **9** |
| 10 | Product Building | `cat10-product-building.html` | `cat10-product-building-overview.html` | p1-product-lifecycle, p2-best-practices, p3-scaling-strategies, p4-ai-assisted-dev, p5-validation, p6-methodologies, p7-product-metrics | **9** |
| 11 | Security & Compliance | `cat11-security-compliance.html` | `cat11-security-compliance-overview.html` | p1-compliance-frameworks, p2-data-privacy, p3-data-governance, p4-risk-management, p5-identity-access, p6-audit-logging, p7-incident-response | **9** |
| 12 | Cloud Platforms | `cat12-cloud-platforms.html` | `cat12-cloud-platforms-overview.html` | p1-cloud-providers, p2-architecture-patterns, p3-migration-strategies, p4-compute-containers, p5-storage-databases, p6-networking-security, p7-cost-optimization | **9** |
| 13 | Migration Factory | `cat13-migration-factory.html` | `cat13-migration-factory-overview.html` | p1-assessment, p2-conversion, p3-validation, p4-cutover, p5-wave-planning, p6-tooling | **8** |
| 14 | Integration & APIs | `cat14-integration-apis.html` | `cat14-integration-apis-overview.html` | p1-api-gateway, p2-event-architecture, p3-connectors, p4-api-lifecycle, p5-webhooks | **7** |
| 15 | Networking | `cat15-networking.html` | `cat15-networking-overview.html` | p1-network-architecture, p2-load-balancing, p3-dns-cdn, p4-vpn-connectivity, p5-network-security, p6-service-mesh | **8** |
| 16 | Monitoring & Observability | `cat16-monitoring-observability.html` | `cat16-monitoring-observability-overview.html` | p1-metrics-monitoring, p2-logging, p3-distributed-tracing, p4-alerting-incidents, p5-apm, p6-aiops | **8** |
| 17 | Change Management | `cat17-change-management.html` | `cat17-change-management-overview.html` | p1-change-frameworks, p2-stakeholder-management, p3-adoption-waves, p4-communication, p5-training-enablement, p6-adoption-measurement, p7-resistance-management | **9** |
| 18 | Implementation | `cat18-implementation.html` | `cat18-implementation-overview.html` | p1-go-live-planning, p2-cutover-management, p3-hypercare, p4-wave-rollout, p5-post-implementation *(+ extra: cat18-implementQP.html)* | **8** |
| 19 | Emerging Technologies | `cat19-emerging-technologies.html` | `cat19-emerging-technologies-overview.html` | p1-foundation-models, p2-agentic-ai, p3-multimodal-ai, p4-ai-coding, p5-edge-ai, p6-ai-infrastructure, p7-ai-safety, p8-rag-knowledge, p9-observability, p10-enterprise-adoption | **12** |
| 20 | Industry Forecasts | `cat20-industry-forecasts.html` | `cat20-industry-forecasts-overview.html` | p1-agentic-workforce, p2-builder-revolution, p3-tech-forecasts | **5** |
| 21 | White Papers & Research | `cat21-white-papers-research.html` | `cat21-white-papers-research-overview.html` | p1-ai-ml-research, p2-data-analytics, p3-cloud-platform, p4-security-governance, p5-strategy-transformation | **7** |
| 22 | Competitive Intelligence | `cat22-competitive-intelligence.html` | `cat22-competitive-intelligence-overview.html` | p1-market-analysis, p2-battle-cards, p3-win-loss-analysis, p4-pricing-intel, p5-ci-tools | **7** |
| 23 | Computer Vision | `cat23-computer-vision.html` | `cat23-computer-vision-overview.html` | p1-image-classification, p2-object-detection, p3-image-segmentation, p4-video-analytics, p5-ocr-document, p6-generative-vision | **8** |
| 24 | Design Patterns | `cat24-design-patterns.html` | `cat24-design-patterns-overview.html` | p1-creational, p2-structural, p3-behavioral, p4-architectural, p5-concurrency, p6-enterprise | **8** |
| 25 | Data Security | `cat25-data-security.html` | `cat25-data-security-overview.html` | p1-threat-landscape, p2-encryption, p3-access-control, p4-compliance, p5-zero-trust, p6-incident-response | **8** |
| 26 | Governance | `cat26-governance.html` | `cat26-governance-overview.html` | p1-data-quality, p2-metadata, p3-security-privacy, p4-stewardship, p5-compliance, p6-architecture | **8** |
| 27 | FinOps | `cat27-finops.html` | `cat27-finops-overview.html` | p1-cost-visibility, p2-rate-optimization, p3-usage-optimization, p4-forecasting, p5-unit-economics, p6-multicloud | **8** |
| 28 | Industry Verticals | `cat28-industry-verticals.html` | `cat28-industry-verticals-overview.html` | p1-healthcare, p2-financial-services, p3-retail-ecommerce, p4-manufacturing, p5-telecommunications, p6-public-sector | **8** |
| 29 | Methodologies | `cat29-methodologies.html` | `cat29-methodologies-overview.html` | p1-agile-scrum, p2-waterfall, p3-kanban, p4-safe, p5-lean, p6-devops | **8** |

**TOTALS: 29 card files + 29 overview files + 198 detail pages + 1 extra (cat18-implementQP) + 2 special = 259 files**

---

## CONTENT ELEMENT INVENTORY — Everything That Must Be Preserved

### 1. Card Types (12+ distinct types)

| Card Type | Fields to Preserve | Where Used |
|-----------|-------------------|------------|
| **Category Card** | emoji icon, cat number (01-29), title, description, page count, arrow, category color | Homepage grid (29 cards) |
| **Featured Deep Dive Card** | badge ("Popular"/"New"), emoji icon, title, description, card color | Homepage (6 cards) |
| **Concept Card** | colored left border (3px), emoji icon (28px), title, description, examples list with "→" prefix | Detail pages, 2-3 column grids |
| **Tool Card** | logo/icon box (36px), tool name, vendor name, description, tag list | Category overviews + detail pages, 3-column grids |
| **Agent/Profile Card** | avatar (56px circular gradient + emoji), name, role title, bio description, capabilities list with "✦" prefix | Every detail page (1 per page) |
| **Best Practice Card** | numbered circle badge, title, description | Detail pages |
| **Do/Don't Card** | colored left border (green/red 3px), title with ✓/✗ prefix, bullet list | Detail pages, 2-column split |
| **Model/Company Card** | accent bar (company color), model name, company name, badges ("Frontier"/"Open"), stats row, description, capability tags | Emerging tech pages |
| **Advanced Technique Card** | icon, title, description, code example | Gen AI / prompt engineering pages |
| **Domain Card** | domain emoji, domain name, category count, category list | Homepage domain sections |
| **Overview Content Card** | icon, h3 title, paragraph content | Category overview pages |
| **Related Page Card** | page number badge, title, description, link | Bottom of every detail page (3 per page) |

### 2. Table Types (5+ distinct types)

| Table Type | Columns | Special Features | Example |
|------------|---------|-----------------|---------|
| **Algorithm Matrix** | Algorithm (emoji+name), Ease (dots), Performance (dots), Ecosystem (dots), Best For (text) | 5-dot rating scale, color-coded tags (classification/regression/both), row hover | Cat01 Supervised Learning |
| **Framework Comparison** | Framework (emoji+name), Ease, Performance, Ecosystem, Best For | Dot/circle rating indicators (filled vs empty) | Cat01 Overview |
| **Pricing Table** | Model, Input price, Output price, Rate Limit, Notes | Monospace prices, color-coded (green/yellow/red), company tags | Cat19 Foundation Models |
| **Benchmark Table** | Model, Benchmark1, Benchmark2, Benchmark3... | Score cells with color coding (green=best), company badges | Cat19 Foundation Models |
| **Tools Comparison** | Tool (icon+name), Purpose, Ecosystem, Cost, Best For | Tag badges in cells | Multiple categories |

### 3. Visualization Types (6+ distinct types)

| Visualization | Description | Implementation | Where Used |
|--------------|-------------|----------------|------------|
| **Particle Canvas** | 60 floating orange particles with connecting lines (<100px distance), continuous animation | HTML5 Canvas + JS animation loop | Homepage background |
| **Gradient Orbs** | 3 large blurred orbs (600/500/400px), radial gradients (orange/purple/cyan), floating animation 20s | CSS positioned divs with radial-gradient + blur filter | Homepage background |
| **Ripple Effects** | 6 positioned ripples, each with 3 concentric ring animations, color-coded borders | CSS animations with staggered delays | Homepage background |
| **SVG Pipeline Diagram** | 6 numbered stage boxes (130x130px), colored strokes, arrow connectors with arrowhead markers, stage titles + details | SVG element, 900px width | Cat01 ML Pipeline page |
| **Orbital Visualization** | 4 concentric rings with rotating category items, center hub "29 CATEGORIES", 6 pulsing rings, counter-rotation on items, hover tooltips | CSS transforms + animations, positioned items | Quick Pulse Hub |
| **Grid Background** | Fixed 50x50px grid pattern (orange, 0.03 opacity) | CSS background-image repeating pattern | Quick Pulse Hub |
| **Value Analysis Bars** | Horizontal bars (6px height) with percentage fill (30-95%), labels, scores | CSS width percentages + colored backgrounds | Quick Pulse pages |

### 4. Section Types (10+ distinct module types per detail page)

Every detail page follows this standard flow — ALL sections must be preserved:

```
┌─ HEADER (fixed, 60px)
│   └─ Breadcrumb: "Strategy Hub / Category X / Current Page"
├─ SIDEBAR (fixed left, 260px)
│   ├─ Category title (uppercase, category color)
│   ├─ Page links (emoji + "N.N Title" format)
│   └─ Active state (bg highlight + left border accent)
├─ MAIN CONTENT
│   ├─ 1. HERO SECTION (hero-compact)
│   │   ├─ 2-column: left text + right metrics
│   │   ├─ Page number badge (e.g., "Page 1.1")
│   │   ├─ H1 title (28-32px)
│   │   ├─ Description (13-15px, 3-4 lines)
│   │   └─ 4 metric boxes (large number + small label + bottom accent bar)
│   ├─ 2. OVERVIEW MODULE
│   │   ├─ Module header: emoji icon + H2 + subtitle
│   │   ├─ Multiple H3 subsections
│   │   └─ Paragraph content (13px)
│   ├─ 3. CONCEPT/TYPE MODULE
│   │   ├─ Module header
│   │   └─ 2-3 column card grid (concept cards with colored borders)
│   ├─ 4. VISUALIZATION MODULE
│   │   ├─ Header with title + badge
│   │   └─ SVG or CSS visual content
│   ├─ 5. ALGORITHM/COMPARISON MATRIX MODULE
│   │   ├─ Table header
│   │   └─ Multi-row table with ratings/tags
│   ├─ 6. TOOLS GRID MODULE
│   │   └─ 3-column tool cards (logo + name + vendor + description + tags)
│   ├─ 7. BEST PRACTICES MODULE
│   │   ├─ 2-column split: Do's (green ✓) vs Don'ts (red ✗)
│   │   └─ Bullet lists with visual indicators
│   ├─ 8. ADVANCED CONTENT MODULE (varies by page)
│   │   └─ Technique cards, code examples, etc.
│   ├─ 9. AGENT PROFILE MODULE
│   │   ├─ 2-column: left (avatar + bio + capabilities) + right (code block)
│   │   ├─ Avatar: 56px, circular, gradient background, emoji
│   │   ├─ Name, role, description
│   │   ├─ Capabilities list (5-8 items with "✦" prefix)
│   │   └─ Code block with syntax highlighting + language tabs
│   └─ 10. RELATED PAGES SECTION
│       └─ 3-column grid of related page cards (number badge + title + description)
└─ FOOTER NAVIGATION
    ├─ Previous page link (← prefix)
    └─ Next page link (→ prefix)
```

### 5. Category Overview Page Structure

Each of the 29 overview pages contains:

```
├─ Category Hero
│   ├─ Category number badge (e.g., "01")
│   ├─ Title + description
│   ├─ Tags (topic labels)
│   └─ Navigation buttons (prev/next category)
├─ Overview Content Cards (icon + title + paragraphs)
├─ Key Concepts Grid (concept cards with examples)
├─ Essential Tools Grid (3-column tool cards)
├─ Pros & Cons Section (green advantages / red challenges)
├─ Framework/Tool Comparison Table
└─ CTA to explore full category pages
```

### 6. Homepage Structure (ALL sections)

```
├─ Particle Canvas Background (60 particles + connecting lines)
├─ Gradient Orbs Background (3 floating blurred orbs)
├─ Ripple Effects Background (6 positioned ripple animations)
├─ Hero Section
│   ├─ Title: "STRATEGY HUB" with gradient text animation
│   ├─ Subtitle/tagline
│   └─ Stats: 29 Categories | 250+ Pages | 1200+ Topics | 8 Domains
├─ Category Grid (29 cards in 7-column responsive grid)
│   └─ Each card: emoji + cat number + title + description + page count + arrow
├─ Domain Sections (8 domains, each with grouped category cards)
│   └─ Domain header + category cards within domain
├─ Featured Deep Dives (6 featured cards with badges)
│   └─ RAG Systems (Popular), Agentic AI (New), Vector Databases, Databricks Platform, Foundation Models, Security Research
└─ About Section (platform description)
```

### 7. Navigation Elements (ALL must work)

| Element | Fields | Where |
|---------|--------|-------|
| **Breadcrumbs** | "Strategy Hub / Category X / Current Page" with links | Every detail page |
| **Sidebar** | Category title, page links (emoji + "N.N Title"), active state (bg + left border) | Every detail page (fixed left 260px) |
| **Header prev/next** | Previous/next page within category | Detail page header |
| **Footer prev/next** | Previous link (← prefix) + Next link (→ prefix) | Detail page footer |
| **Category card links** | Each card links to category overview | Homepage |
| **Featured card links** | Each featured card links to specific detail page | Homepage |
| **Domain category links** | Each domain lists linked categories | Homepage domain sections |
| **Quick Pulse orbital links** | Each orbital item links to category page | Quick Pulse Hub |
| **Quick Pulse browse links** | Each domain card links to category overview | Quick Pulse browse section |
| **Related pages links** | 3 cards linking to related pages (same or cross-category) | Bottom of every detail page |

### 8. Emoji Icons Used (MUST preserve all)

Emojis are used as visual markers throughout — they serve as the icon system:
- **Page badges**: 📖 🎯 🔄 ⚙️ 🧠 📊 🔬 ✨ 🤖 📚 🏷️ ✍️
- **Module headers**: 📊 🧠 🔬 ✨ 🤖 📚 🎯 ⚡ 🔧 💡 📈 🔮 🛠️
- **Navigation**: 🏠 🏷️ 🎮 🔮 ⚡
- **Domain sections**: 🧠 📊 ☁️ 🔐 🚀 🎯 🏗️ 📋
- **Featured badges**: 🔥 (Popular), ✨ (New)
- **List prefixes**: → (examples), ✦ (capabilities), ✓ (do's), ✗ (don'ts)

### 9. Color Systems (ALL must be mapped)

**29 Category Colors** (each category has a unique accent):
| Cat | Color | Hex |
|-----|-------|-----|
| 01 | Blue | `#3B82F6` |
| 02 | Green | `#10B981` |
| 03 | Purple | `#8B5CF6` |
| 04 | Pink | `#EC4899` |
| 05 | Cyan | `#06B6D4` |
| 06 | Amber | `#F59E0B` |
| 07 | Teal | `#14B8A6` |
| 08 | Red | `#EF4444` |
| 09-29 | Various | Unique per category |

**Semantic Colors**:
- Success/Do: `#10B981` (green)
- Warning/Don't: `#EF4444` (red)
- Info: `#3B82F6` (blue)
- Important: `#F59E0B` (yellow)

**Company Colors** (Foundation Models page):
- OpenAI: `#10A37F` | Anthropic: `#D4A574` | Google: `#4285F4` | Meta: `#0668E1` | Mistral: `#F97316` | DeepSeek: `#06B6D4` | xAI: `#1DA1F2`

### 10. Interactive Elements

| Element | Behavior | Where |
|---------|----------|-------|
| **Card hover** | translateY(-8px), border-color shift, box-shadow glow | All card grids |
| **Link hover** | Color change to accent color | Throughout |
| **Button hover** | transform scale(1.02), elevated shadow | CTAs |
| **Table row hover** | Background highlight | All tables |
| **Code tabs** | Horizontal tab bar, active tab has colored border-bottom | Agent profile code blocks |
| **Orbital item hover** | Tooltip with category name, fade-in | Quick Pulse |
| **Sidebar active state** | Background highlight + left border accent | Detail pages |

### 11. Agent Profiles (1 per detail page = ~198 total)

Each detail page has exactly one agent profile with:
- **Avatar**: 56px circular with gradient background + emoji face
- **Name**: Unique AI agent name
- **Role**: Colored text describing specialty
- **Bio**: 2-3 sentence description
- **Capabilities**: 5-8 bullet items with "✦" prefix
- **Code Block**: Associated code example with:
  - Dark background
  - Monospace font (Monaco/Consolas/JetBrains Mono)
  - Syntax highlighting (colored keywords, strings, comments)
  - Language tabs (Python, JavaScript, etc.)
  - Filename display

---

## Architecture Overview

```
src/
├── app/
│   ├── App.tsx                    # Root with providers
│   └── Router.tsx                 # Lazy-loaded routes
├── components/
│   ├── composed/
│   │   ├── Header/                # COPIED from Marketplace (label swaps)
│   │   │   ├── Header.tsx
│   │   │   ├── MegaMenu.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── UserMenu.tsx
│   │   ├── Footer/                # COPIED from Marketplace
│   │   │   └── Footer.tsx
│   │   └── Sidebar/               # StrategyHub-specific
│   │       └── CategorySidebar.tsx
│   ├── home/                      # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── ParticleCanvas.tsx
│   │   ├── DomainSection.tsx
│   │   ├── CategoryGrid.tsx
│   │   ├── FeaturedDeepDives.tsx
│   │   └── AboutSection.tsx
│   ├── category/                  # Category overview components
│   │   ├── CategoryHero.tsx
│   │   ├── ConceptGrid.tsx
│   │   ├── ToolsPreview.tsx
│   │   ├── PagesGrid.tsx
│   │   └── ProsConsSection.tsx
│   ├── detail/                    # Content section renderers
│   │   ├── SectionRenderer.tsx    # Dispatcher by section type
│   │   ├── HeroCompact.tsx        # 2-col hero + 4 metrics
│   │   ├── OverviewModule.tsx     # Icon + H2 + H3 subsections + paragraphs
│   │   ├── ConceptGridModule.tsx  # 2-3 col concept cards with colored borders
│   │   ├── VisualizationModule.tsx # SVG diagrams, pipeline flowcharts
│   │   ├── TableModule.tsx        # Comparison tables with ratings/tags
│   │   ├── ToolsGridModule.tsx    # 3-col tool cards
│   │   ├── BestPracticesModule.tsx # Do/Don't 2-column split
│   │   ├── AdvancedModule.tsx     # Technique cards, code examples
│   │   ├── AgentProfileModule.tsx # Avatar + bio + capabilities + code block
│   │   ├── MetricsModule.tsx      # Stats with bars/numbers
│   │   ├── RelatedPagesModule.tsx # 3-col related page cards
│   │   └── FooterNav.tsx          # Prev/Next page links
│   ├── quickpulse/                # Quick Pulse hub
│   │   ├── OrbitalVisualization.tsx
│   │   ├── DomainLegend.tsx
│   │   └── BrowseByDomain.tsx
│   └── ui/                        # Shared primitives
│       ├── Button.tsx
│       ├── SharpCard.tsx
│       ├── Badge.tsx
│       ├── RatingDots.tsx         # 5-dot rating scale for tables
│       └── SearchBar.tsx
├── config/
│   ├── routes.ts
│   ├── navigation.ts              # Header mega menu data
│   └── theme.ts                   # 29 category colors, domain colors, semantic colors
├── data/
│   ├── categories.ts              # Master list: 29 categories with metadata
│   ├── domains.ts                 # 8 domain groupings with category assignments
│   ├── featured.ts                # 6 featured deep dive items
│   ├── cat01/                     # Category 1 content
│   │   ├── index.ts               # Re-exports
│   │   ├── overview.ts            # Overview page: hero, concepts, tools, pros/cons, table
│   │   └── pages.ts               # All 8 detail pages with every section
│   ├── cat02/ ... cat29/          # Repeat for all 29 categories
│   └── index.ts                   # Lookup helpers: getCategoryBySlug, getPageBySlug
├── hooks/
│   ├── useScrollSpy.ts
│   └── useCategory.ts
├── layouts/
│   ├── RootLayout.tsx             # Header + main + Footer
│   └── CategoryLayout.tsx         # Sidebar + main content area
├── pages/
│   ├── HomePage.tsx
│   ├── CategoryOverviewPage.tsx
│   ├── DetailPage.tsx
│   └── QuickPulseHub.tsx
├── stores/
│   └── themeStore.ts              # Zustand dark/light toggle
├── styles/
│   └── globals.css                # Global overrides, CSS custom properties, DM Sans
├── types/
│   └── index.ts                   # Full type system (all section types, card types, etc.)
└── main.tsx
```

---

## Type System (Comprehensive)

```typescript
// === DOMAIN & CATEGORY ===

interface Domain {
  id: string;
  name: string;
  emoji: string;             // 🧠 📊 ☁️ 🔐 🚀 🎯 🏗️ 📋
  description: string;
  color: string;
  categoryIds: string[];
}

interface Category {
  id: string;
  number: number;            // 1-29
  title: string;
  slug: string;
  emoji: string;             // Category icon emoji
  description: string;
  domain: string;
  color: string;             // Hex accent color
  stats: Stat[];
  tags: string[];
  pageCount: number;
}

interface Stat {
  value: string;             // "85%", "150+", etc.
  label: string;             // Uppercase label
}

// === OVERVIEW PAGE ===

interface CategoryOverview {
  categoryId: string;
  hero: OverviewHero;
  contentCards: OverviewCard[];
  concepts: ConceptCard[];
  tools: ToolCard[];
  proscons: ProsCons;
  comparisonTable?: ComparisonTable;
}

interface OverviewHero {
  badge: string;             // Category number
  title: string;
  description: string;
  tags: string[];
  navButtons: { label: string; link: string }[];
}

interface OverviewCard {
  icon: string;              // Emoji
  title: string;
  paragraphs: string[];
}

// === CONTENT PAGE ===

interface ContentPage {
  id: string;
  slug: string;
  title: string;
  categoryId: string;
  pageNumber: string;        // "1.1", "5.3", etc.
  badge: string;             // Emoji badge for sidebar
  description: string;
  heroMetrics: Stat[];       // 4 metric boxes
  sections: ContentSection[];
  agent: AgentProfile;
  relatedPages: RelatedPage[];
  prevPage?: PageLink;
  nextPage?: PageLink;
}

// === SECTION TYPES (union) ===

type ContentSection =
  | OverviewSection
  | ConceptGridSection
  | VisualizationSection
  | TableSection
  | ToolsGridSection
  | BestPracticesSection
  | AdvancedSection
  | MetricsSection
  | CodeSection
  | TimelineSection;

interface OverviewSection {
  type: 'overview';
  icon: string;
  title: string;
  subtitle?: string;
  subsections: { heading: string; paragraphs: string[] }[];
}

interface ConceptGridSection {
  type: 'concept-grid';
  icon: string;
  title: string;
  subtitle?: string;
  columns: number;           // 2 or 3
  cards: ConceptCard[];
}

interface ConceptCard {
  borderColor: string;
  icon: string;
  title: string;
  description: string;
  examples: string[];        // Items with "→" prefix
}

interface VisualizationSection {
  type: 'visualization';
  icon: string;
  title: string;
  badge?: string;
  vizType: 'svg-pipeline' | 'css-flow' | 'bar-chart';
  stages?: PipelineStage[];  // For SVG pipeline diagrams
  bars?: BarItem[];          // For bar chart visualizations
}

interface PipelineStage {
  number: number;
  title: string;
  details: string[];
  color: string;
}

interface TableSection {
  type: 'table';
  icon: string;
  title: string;
  subtitle?: string;
  headers: TableHeader[];
  rows: TableRow[];
  ratingType?: 'dots' | 'text' | 'color-coded';
}

interface TableHeader {
  label: string;
  align?: 'left' | 'center' | 'right';
}

interface TableRow {
  cells: TableCell[];
}

interface TableCell {
  text?: string;
  icon?: string;
  rating?: number;           // 1-5 for dot ratings
  tags?: string[];
  color?: string;
  monospace?: boolean;       // For pricing
}

interface ToolsGridSection {
  type: 'tools-grid';
  icon: string;
  title: string;
  tools: ToolCard[];
}

interface ToolCard {
  icon: string;              // Logo/emoji
  name: string;
  vendor: string;
  description: string;
  tags: string[];
}

interface BestPracticesSection {
  type: 'best-practices';
  icon: string;
  title: string;
  doItems: { title: string; points: string[] }[];   // ✓ items
  dontItems: { title: string; points: string[] }[];  // ✗ items
}

interface AdvancedSection {
  type: 'advanced';
  icon: string;
  title: string;
  subtitle?: string;
  cards: AdvancedCard[];
}

interface AdvancedCard {
  icon: string;
  title: string;
  description: string;
  codeExample?: string;
}

interface MetricsSection {
  type: 'metrics';
  icon: string;
  title: string;
  metrics: { label: string; value: string; color: string }[];
}

interface CodeSection {
  type: 'code';
  icon: string;
  title: string;
  language: string;
  filename?: string;
  code: string;
  tabs?: { label: string; language: string; code: string }[];
}

interface TimelineSection {
  type: 'timeline';
  icon: string;
  title: string;
  items: { date: string; title: string; description: string }[];
}

// === AGENT PROFILE ===

interface AgentProfile {
  avatar: string;            // Emoji for circular avatar
  name: string;
  role: string;
  description: string;
  capabilities: string[];    // Items with "✦" prefix
  codeBlock: {
    language: string;
    filename?: string;
    code: string;
    tabs?: { label: string; code: string }[];
  };
}

// === NAVIGATION ===

interface RelatedPage {
  pageNumber: string;
  title: string;
  description: string;
  link: string;
}

interface PageLink {
  title: string;
  link: string;
}

interface ProsCons {
  pros: { title: string; items: string[] };   // Green ✓
  cons: { title: string; items: string[] };   // Red ✗
}

interface ComparisonTable {
  title: string;
  headers: string[];
  rows: { icon: string; name: string; ratings: number[]; bestFor: string }[];
}
```

---

## Design Tokens (Light Theme — matches Marketplace)

| Token | Value | Usage |
|-------|-------|-------|
| `--blueprint-blue` | `#1d4ed8` | Primary accent, borders, buttons, links |
| `--bg-primary` | `#eef2f6` | Page background |
| `--text-primary` | `#111827` | Body text |
| `--border-card` | `#d1d5db` | Card/section borders |
| `--bg-card` | `#ffffff` | Card backgrounds |
| `--text-secondary` | `#6b7280` | Muted text |
| `--text-tertiary` | `#9ca3af` | Very muted text |
| `--footer-bg` | `#111827` | Footer background (gray-900) |
| `--success` | `#22c55e` | Green badges/indicators |
| `--error` | `#dc2626` | Red badges/alerts |
| `--warning` | `#eab308` | Yellow indicators |
| Font | DM Sans 400/500/700 | All typography |
| Border Radius | `0px !important` | Global override (sharp corners) |
| Badge Circle | `9999px` | Exception for circular badges only |

---

## Style Conversion Rules

| Source (Static HTML) | Target (React Light Theme) |
|---------------------|---------------------------|
| Dark backgrounds (`#0a0a0f`, `#12121a`, `#1a1a2e`) | Light backgrounds (`#eef2f6`, `#ffffff`) |
| White/light text (`#ffffff`, `#e0e0e0`) | Dark text (`#111827`, `#374151`) |
| Secondary text (`#a0a0b0`, `#6a7a7a`) | Gray text (`#6b7280`, `#9ca3af`) |
| Orange accent (`#FF9900`) | Blueprint blue (`#1d4ed8`) |
| Rounded corners (12px, 14px, 16px, 20px) | Sharp corners (`0px !important`) |
| Orbitron/Inter/system font | DM Sans (400/500/700) |
| Gradient text (orange→pink→purple→cyan) | Blueprint blue or `#1d4ed8` gradient |
| Glow/neon effects (box-shadow with color) | Subtle shadows (`0 1px 3px rgba(0,0,0,0.06)`) |
| Neon colored borders | Clean 1px `#d1d5db` borders + 4px `#1d4ed8` top |
| Dark card backgrounds (`#1a1a2e`) | White `#ffffff` cards with gray borders |
| Dark code blocks (`#0a0a0f`) | Preserved dark code blocks (code stays dark for readability) |
| Category colors in borders/accents | **PRESERVED** — each category keeps its unique color |

**Important**: Category accent colors (29 unique) are PRESERVED — they provide visual differentiation. Only the overall theme (background, text, primary accent) changes to match Marketplace.

---

## Phase Breakdown

### Phase 0 — Scaffolding + Cover Page + Category 1 (MANUAL CONFIRM)

**Goal:** Prove the conversion pattern works end-to-end. User confirms design before any further work.

#### 0.1 — Project Scaffolding
1. Initialize Vite + React 18 + TypeScript project
2. Install deps: `react`, `react-dom`, `react-router-dom`, `zustand`, `tailwindcss`, `@tailwindcss/vite`, `@vitejs/plugin-react`
3. Configure `vite.config.ts` with `@/` path alias + chunk splitting strategy
4. Configure `tailwind.config.ts` with blueprint-blue, DM Sans, category colors
5. Set up `globals.css`: `* { border-radius: 0px !important; }`, CSS custom properties, DM Sans import from Google Fonts
6. Set up `tsconfig.json` with strict mode + `@/` paths
7. Create `src/types/index.ts` with FULL type system (as detailed above)

#### 0.2 — Header & Footer (from Marketplace)
1. Copy Header from TMP_remod_v1, adapt:
   - Left: Blueprint logo + divider + **"StrategyHub"** (was "Marketplace")
   - Center nav: AI-Migration, What we do (mega menu), Databricks (mega menu), Our Work, **"Marketplace"** (was "StrategyHub")
   - Right: Theme toggle (sun/moon), search bar, Connect button, user menu
   - Mega menus: identical 4-column "What we do" + 3x3 Databricks grid
2. Copy Footer from TMP_remod_v1: gray-900 bg, 4-column grid, social icons
3. Copy MobileNav: hamburger below xl, slide-out drawer, accordion sections
4. Set up RootLayout: sticky Header + main + Footer
5. Set up themeStore (Zustand) for dark/light toggle with localStorage persistence

#### 0.3 — Shared UI Components
1. `Button.tsx` — primary (blueprint-blue bg) / secondary / outline, sharp corners, uppercase
2. `SharpCard.tsx` — 4px blue top border, 1px gray-300 borders, white bg, hover shadow
3. `Badge.tsx` — default/primary/success/warning/error variants, pill-shaped
4. `RatingDots.tsx` — 5-dot rating display (filled vs empty circles) for tables
5. `SearchBar.tsx` — matching Marketplace search

#### 0.4 — Homepage (Cover Page) — ALL content from index.html
1. `ParticleCanvas.tsx` — 60 orange particles, connecting lines (<100px), canvas animation loop
2. `HeroSection.tsx`:
   - "STRATEGY HUB" gradient text title
   - Tagline: "Enterprise Technology Knowledge Base"
   - Stats row: 29 Categories | 250+ Pages | 1200+ Topics | 8 Domains
3. `CategoryGrid.tsx` — ALL 29 category cards in 7-column responsive grid:
   - Each card: emoji icon + cat number + title + description + page count + arrow
   - Category accent color on hover border
4. `DomainSection.tsx` — ALL 8 domain groups:
   - AI & Machine Learning (cats 1,4,5,6,19,23)
   - Data & Analytics (cats 2,3,7,25)
   - Cloud & Infrastructure (cats 9,12,14,15,16,27)
   - Security & Governance (cats 11,24,26)
   - Delivery & Operations (cats 8,10,13,18,29)
   - Strategy & Transformation (cats 17,20,21,22,28)
5. `FeaturedDeepDives.tsx` — ALL 6 featured cards:
   - RAG Systems (🔥 Popular badge)
   - Agentic AI (✨ New badge)
   - Vector Databases
   - Databricks Platform
   - Foundation Models
   - Security Research
6. `AboutSection.tsx` — platform description text
7. Background layers: gradient orbs + ripple effects (adapted to light theme)

#### 0.5 — Config & Data Foundation
1. `src/config/routes.ts` — all route constants
2. `src/config/theme.ts` — 29 category colors, 8 domain definitions, semantic colors
3. `src/config/navigation.ts` — header mega menu data (copied from Marketplace)
4. `src/data/categories.ts` — ALL 29 categories with metadata (number, title, slug, emoji, description, domain, color, tags, pageCount)
5. `src/data/domains.ts` — 8 domain groupings with category assignments
6. `src/data/featured.ts` — 6 featured deep dive items

#### 0.6 — Category 1 Full Content Extraction
Extract EVERY piece of content from these 10 source files:

| Source File | Content to Extract |
|-------------|-------------------|
| `cat01-aiml-foundations.html` | Card data (emoji, title, description, page count) |
| `cat01-aiml-foundations-overview.html` | Hero, content cards, concepts, tools, pros/cons, comparison table |
| `cat01-p1-supervised-learning.html` | Hero metrics, overview (What is, Key Requirements), concept grid (Classification vs Regression), SVG pipeline visualization, algorithm matrix table, tools grid, best practices (do/don't), agent profile + code, related pages |
| `cat01-p2-unsupervised-learning.html` | All modules: overview, clustering/dimensionality types, algorithm selection, tools, practices, agent, related |
| `cat01-p3-reinforcement-learning.html` | All modules: overview, RL concepts, environment types, algorithm comparison, tools, practices, agent, related |
| `cat01-p4-neural-networks.html` | All modules: overview, architecture types, layer comparisons, training pipeline viz, frameworks table, practices, agent, related |
| `cat01-p5-ml-pipeline.html` | All modules: overview, pipeline stages, SVG workflow diagram, tools comparison, orchestration, practices, agent, related |
| `cat01-p6-algorithm-selection.html` | All modules: overview, algorithm families, selection decision tree, performance matrix, tools, practices, agent, related |
| `cat01-p7-ml-frameworks.html` | All modules: overview, framework comparisons, ecosystem cards, benchmark table, practices, agent, related |
| `cat01-p8-evaluation-metrics.html` | All modules: overview, metric types, confusion matrix viz, scoring tables, tools, practices, agent, related |

Create:
- `src/data/cat01/overview.ts` — overview page content
- `src/data/cat01/pages.ts` — ALL 8 detail pages with EVERY section
- `src/data/cat01/index.ts` — re-exports

#### 0.7 — Category Page Components
1. `CategoryOverviewPage.tsx`:
   - Category hero (badge, title, description, tags, nav buttons)
   - Overview content cards (icon + title + paragraphs)
   - Key concepts grid (concept cards with colored borders + examples)
   - Essential tools grid (3-column tool cards)
   - Pros & cons (green ✓ advantages / red ✗ challenges)
   - Framework comparison table (with dot ratings)
   - CTA to explore pages
2. `CategoryLayout.tsx`:
   - Fixed sidebar (260px left) + scrollable main content
   - Responsive: sidebar collapses on mobile
3. `CategorySidebar.tsx`:
   - Category title (uppercase, category color)
   - All page links: emoji + "N.N Title" format
   - Active state: bg highlight + left border accent (category color)
   - Smooth scroll to top on page change
4. `DetailPage.tsx`:
   - Breadcrumb navigation ("Strategy Hub / Category / Page")
   - Hero compact (2-col: title+description | 4 metric boxes)
   - Dynamic section rendering via SectionRenderer
   - Footer prev/next navigation
5. ALL section renderer components (as listed in architecture)

#### 0.8 — Routing
1. Routes: `/` (home), `/category/:slug` (overview), `/category/:slug/:pageSlug` (detail), `/quick-pulse` (placeholder)
2. `Router.tsx` with lazy loading for all page components
3. Wire ALL navigation: sidebar links, breadcrumbs, prev/next, card links, featured links

#### 0.9 — Build & Verify
1. `tsc && vite build` — 0 errors
2. Verify homepage: all 29 category cards, 8 domains, 6 featured, stats, particle canvas
3. Verify Cat 1 overview: hero, concepts, tools, pros/cons, table
4. Verify ALL 8 Cat 1 detail pages: every section renders with full content
5. Verify sidebar: all page links present, active states work
6. Verify header/footer: match Marketplace exactly
7. Verify light theme: blueprint-blue accents, `#eef2f6` bg, `#111827` text, sharp corners
8. Verify dark mode toggle works

**CHECKPOINT: User reviews and confirms before Phase 1.**

---

### Phase 1 — Quick Pulse Hub (MANUAL CONFIRM)

**Goal:** Convert the orbital visualization and browsing experience from `quick-pulse-hub.html`.

#### 1.1 — Orbital Visualization
1. `OrbitalVisualization.tsx`:
   - 4 concentric rings with CSS rotation animations (orbit-1 through orbit-4)
   - Ring 1 (innermost, ~200px): 5 items — core AI/ML categories
   - Ring 2 (~320px): 6 items — Data Platform categories
   - Ring 3 (~440px): 8 items — Infrastructure categories
   - Ring 4 (outermost, ~560px): 10 items — Strategy categories
   - Ring colors: blue, green, purple, cyan glowing borders
   - Center hub (110px): gradient circle, "29 CATEGORIES" text, pulsing
   - 6 pulsing rings emanating from center (6s animation, staggered)
   - Counter-rotation on items to keep labels upright
   - Each item: 52x52px, category emoji + number, category color
   - Hover: tooltip with full category name
   - Click: navigate to category overview

2. `DomainLegend.tsx`:
   - Color-coded legend for all 6+ domain groups
   - Domain emoji + name + category count
   - Positioned below orbital

3. `BrowseByDomain.tsx`:
   - Section below orbital
   - 6+ domain groups, each with header + category cards
   - Cards link to category overview pages

4. `QuickPulseHub.tsx` page:
   - Grid background pattern (50x50px, faint lines)
   - Orbital visualization (centered)
   - Domain legend
   - Scroll indicator (↓ arrow animation)
   - Browse by domain section
   - Adapted to light theme (light bg, dark text)

#### 1.2 — Route & Nav
1. Wire `/quick-pulse` route
2. Add Quick Pulse button/link to header if applicable
3. Verify all 29 orbital items link to correct categories

#### 1.3 — Build & Verify
1. `tsc && vite build` — 0 errors
2. Orbital animates with all 29 items in correct rings
3. Center hub pulses, rings emanate
4. Hover tooltips show category names
5. All links navigate correctly
6. Browse by domain shows all categories grouped properly

**CHECKPOINT: User confirms Quick Pulse design. After this, ALL remaining phases run headless.**

---

### Phase 2 — Categories 2–5 (HEADLESS — no user prompts)

| Cat | Title | Overview | Detail Pages | Total Files |
|-----|-------|----------|-------------|-------------|
| 02 | Data Engineering | 1 | 12 (p1-p12) | 14 |
| 03 | Analytics & BI | 1 | 10 (p1-p10) | 12 |
| 04 | Data Science | 1 | 8 (p1-p8) | 10 |
| 05 | Generative AI | 1 | 10 (p1-p10) | 12 |

**Per category**:
1. Read ALL source HTML files for the category
2. Extract EVERY content element into TypeScript data files
3. Create `src/data/catNN/overview.ts` — all overview content
4. Create `src/data/catNN/pages.ts` — all detail page content (every section, table, card, metric, agent, related page)
5. Create `src/data/catNN/index.ts` — re-exports
6. Verify all pages route and render
7. `tsc` — 0 errors

**Phase 2 total: 4 categories, 48 pages, 48 source files**

---

### Phase 3 — Categories 6–10 (HEADLESS)

| Cat | Title | Detail Pages |
|-----|-------|-------------|
| 06 | Chatbots & Agents | 10 |
| 07 | Knowledge Management | 7 (no p2) |
| 08 | Automation & RPA | 5 |
| 09 | Architecture | 7 |
| 10 | Product Building | 7 |

**Phase 3 total: 5 categories, ~36 detail pages + 5 overviews**

---

### Phase 4 — Categories 11–15 (HEADLESS)

| Cat | Title | Detail Pages |
|-----|-------|-------------|
| 11 | Security & Compliance | 7 |
| 12 | Cloud Platforms | 7 |
| 13 | Migration Factory | 6 |
| 14 | Integration & APIs | 5 |
| 15 | Networking | 6 |

**Phase 4 total: 5 categories, ~31 detail pages + 5 overviews**

---

### Phase 5 — Categories 16–20 (HEADLESS)

| Cat | Title | Detail Pages |
|-----|-------|-------------|
| 16 | Monitoring & Observability | 6 |
| 17 | Change Management | 7 |
| 18 | Implementation | 5 (+implementQP) |
| 19 | Emerging Technologies | 10 |
| 20 | Industry Forecasts | 3 |

**Phase 5 total: 5 categories, ~31 detail pages + 5 overviews + 1 extra**

---

### Phase 6 — Categories 21–25 (HEADLESS)

| Cat | Title | Detail Pages |
|-----|-------|-------------|
| 21 | White Papers & Research | 5 |
| 22 | Competitive Intelligence | 5 |
| 23 | Computer Vision | 6 |
| 24 | Design Patterns | 6 |
| 25 | Data Security | 6 |

**Phase 6 total: 5 categories, ~28 detail pages + 5 overviews**

---

### Phase 7 — Categories 26–29 (HEADLESS)

| Cat | Title | Detail Pages |
|-----|-------|-------------|
| 26 | Governance | 6 |
| 27 | FinOps | 6 |
| 28 | Industry Verticals | 6 |
| 29 | Methodologies | 6 |

**Phase 7 total: 4 categories, ~24 detail pages + 4 overviews**

---

### Phase 8 — Final QA & Polish (HEADLESS)

1. **Full build**: `tsc && vite build` — 0 errors, all chunks generated
2. **Content audit**: Verify ALL 259 source pages have corresponding React routes with complete content
3. **Navigation audit**: Every sidebar link, breadcrumb, prev/next, related page link works
4. **Visual audit**: All concept grids, tables (with dot ratings), SVG visualizations, metrics render correctly
5. **Responsive audit**: Mobile hamburger nav, sidebar collapse, grid reflow at breakpoints
6. **Dark mode**: All pages render correctly in both light and dark themes
7. **Performance**: Lazy loading works, chunk splitting correct for all 29 category data files
8. **Cross-link audit**: Related pages, featured deep dives, Quick Pulse orbital links all navigate
9. **Emoji audit**: All emoji icons render in sidebar, module headers, badges, cards
10. **Agent profile audit**: All ~198 agent profiles render with avatar, bio, capabilities, code block

---

## Content Extraction Protocol

For EVERY source HTML file, the extraction must capture:

1. **ALL text** — every heading (H1-H4), paragraph, description, tagline, label, stat
2. **ALL cards** — every card in every grid with ALL fields (icon, title, description, examples, tags, colors)
3. **ALL tables** — every column header, every row, every cell (text + ratings + tags + colors)
4. **ALL lists** — every bullet point, numbered item, do/don't item with prefixes (→, ✦, ✓, ✗)
5. **ALL metrics** — every stat box (value + label), every bar chart item (label + percentage + color)
6. **ALL visualizations** — every SVG stage/box/arrow, every pipeline step with title + details
7. **ALL agent profiles** — avatar emoji, name, role, bio, ALL capabilities, code block with language + syntax
8. **ALL related pages** — page number, title, description for every cross-link
9. **ALL navigation** — prev/next page links, sidebar page list, breadcrumb text
10. **ALL emojis** — preserve exact emoji characters used as icons throughout

**ZERO tolerance for content omission. Every sentence, every bullet, every table cell matters.**

---

## Dependencies

```json
{
  "react": "^18.3.0",
  "react-dom": "^18.3.0",
  "react-router-dom": "^7.0.0",
  "zustand": "^5.0.0",
  "tailwindcss": "^4.0.0",
  "@tailwindcss/vite": "^4.0.0",
  "typescript": "^5.6.0",
  "vite": "^6.0.0",
  "@vitejs/plugin-react": "^4.3.0"
}
```

---

## Total Scope Summary

| Item | Count |
|------|-------|
| Source HTML Files | 259 |
| Categories | 29 |
| Category Card Pages | 29 |
| Category Overview Pages | 29 |
| Detail Content Pages | 198 |
| Special Pages (Home + Quick Pulse) | 2 |
| Extra Pages (cat18-implementQP) | 1 |
| Agent Profiles | ~198 |
| Phases | 9 (0–8) |
| Manual Confirms | 2 (Phase 0, Phase 1) |
| Headless Phases | 7 (Phases 2–8) |

---

## Success Criteria

- [ ] ALL 259 source pages converted to React routes with COMPLETE content
- [ ] Header matches Marketplace exactly (StrategyHub↔Marketplace label swaps)
- [ ] Footer matches Marketplace exactly (4-column, gray-900, social icons)
- [ ] DM Sans font (400/500/700) used throughout
- [ ] Light theme: `#1d4ed8` accent, `#eef2f6` bg, `#111827` text, 0px corners
- [ ] Dark mode toggle works on all pages
- [ ] Fixed sidebar (260px) with ALL page links + active states on every category page
- [ ] ALL 29 category overview pages render with concepts, tools, pros/cons, tables
- [ ] ALL ~198 detail pages render with EVERY section (overview, concepts, viz, tables, tools, practices, agent, related)
- [ ] ALL ~198 agent profiles render with avatar, bio, capabilities, code block
- [ ] ALL comparison tables render with dot ratings, tags, color coding
- [ ] ALL SVG visualizations render (pipeline diagrams, flowcharts)
- [ ] Quick Pulse orbital animates with all 29 categories in correct rings
- [ ] Homepage: particle canvas, 29 category cards, 8 domains, 6 featured
- [ ] ALL navigation works: sidebar, breadcrumbs, prev/next, related pages, cross-links
- [ ] ALL emojis preserved as icons throughout
- [ ] Responsive: mobile hamburger, sidebar collapse, grid reflow
- [ ] `tsc && vite build` — 0 errors
- [ ] Zero dead links
