/* === Domain & Category === */

export interface Domain {
  id: string
  name: string
  emoji: string
  categoryIds: number[]
}

export interface CategoryMeta {
  number: number
  title: string
  slug: string
  emoji: string
  description: string
  color: string
  domainId: string
  pageCount: number
}

/* === Overview Page === */

export interface CategoryOverview {
  categoryId: number
  hero: OverviewHero
  contentCards: OverviewCard[]
  concepts: ConceptCard[]
  tools: ToolCard[]
  proscons: ProsCons
  comparisonTable?: ComparisonTable
}

export interface OverviewHero {
  badge: string
  title: string
  description: string
  tags: string[]
}

export interface OverviewCard {
  icon: string
  title: string
  paragraphs: string[]
}

/* === Content Page === */

export interface ContentPage {
  id: string
  slug: string
  title: string
  categoryId: number
  pageNumber: string
  badge: string
  description: string
  heroMetrics: Stat[]
  sections: ContentSection[]
  agent: AgentProfile
  relatedPages: RelatedPage[]
  prevPage?: PageLink
  nextPage?: PageLink
}

export interface Stat {
  value: string
  label: string
}

/* === Section Types === */

export type ContentSection =
  | OverviewSection
  | ConceptGridSection
  | VisualizationSection
  | TableSection
  | ToolsGridSection
  | BestPracticesSection
  | AdvancedSection
  | MetricsSection
  | CodeSection
  | TimelineSection

export interface OverviewSection {
  type: 'overview'
  icon: string
  title: string
  subtitle?: string
  subsections: { heading: string; paragraphs: string[] }[]
}

export interface ConceptGridSection {
  type: 'concept-grid'
  icon: string
  title: string
  subtitle?: string
  columns: number
  cards: ConceptCard[]
}

export interface ConceptCard {
  borderColor: string
  icon: string
  title: string
  description: string
  examples: string[]
}

export interface VisualizationSection {
  type: 'visualization'
  icon: string
  title: string
  badge?: string
  vizType: 'svg-pipeline' | 'css-flow' | 'bar-chart'
  stages?: PipelineStage[]
  bars?: BarItem[]
}

export interface PipelineStage {
  number: number
  title: string
  details: string[]
  color: string
}

export interface BarItem {
  label: string
  value: number
  color: string
}

export interface TableSection {
  type: 'table'
  icon: string
  title: string
  subtitle?: string
  headers: TableHeader[]
  rows: TableRow[]
  ratingType?: 'dots' | 'text' | 'color-coded'
}

export interface TableHeader {
  label: string
  align?: 'left' | 'center' | 'right'
}

export interface TableRow {
  cells: TableCell[]
}

export interface TableCell {
  text?: string
  icon?: string
  rating?: number
  tags?: string[]
  color?: string
  monospace?: boolean
}

export interface ToolsGridSection {
  type: 'tools-grid'
  icon: string
  title: string
  tools: ToolCard[]
}

export interface ToolCard {
  icon: string
  name: string
  vendor: string
  description: string
  tags: string[]
}

export interface BestPracticesSection {
  type: 'best-practices'
  icon: string
  title: string
  doItems: { title: string; points: string[] }[]
  dontItems: { title: string; points: string[] }[]
}

export interface AdvancedSection {
  type: 'advanced'
  icon: string
  title: string
  subtitle?: string
  cards: AdvancedCard[]
}

export interface AdvancedCard {
  icon: string
  title: string
  description: string
  codeExample?: string
}

export interface MetricsSection {
  type: 'metrics'
  icon: string
  title: string
  metrics: { label: string; value: string; color: string }[]
}

export interface CodeSection {
  type: 'code'
  icon: string
  title: string
  language: string
  filename?: string
  code: string
  tabs?: { label: string; language: string; code: string }[]
}

export interface TimelineSection {
  type: 'timeline'
  icon: string
  title: string
  items: { date: string; title: string; description: string }[]
}

/* === Agent Profile === */

export interface AgentProfile {
  avatar: string
  name: string
  role: string
  roleColor: string
  description: string
  capabilities: string[]
  codeBlock: {
    language: string
    filename?: string
    code: string
    tabs?: { label: string; code: string }[]
  }
}

/* === Navigation === */

export interface RelatedPage {
  pageNumber: string
  title: string
  description: string
  link: string
}

export interface PageLink {
  title: string
  link: string
}

export interface ProsCons {
  pros: { title: string; items: string[] }
  cons: { title: string; items: string[] }
}

export interface ComparisonTable {
  title: string
  headers: string[]
  rows: { icon: string; name: string; ratings: number[]; bestFor: string }[]
}

/* === Featured === */

export interface FeaturedItem {
  id: number
  title: string
  description: string
  icon: string
  badge?: string
  link: string
  colorIndex: number
}
