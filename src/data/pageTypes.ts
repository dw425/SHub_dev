/** Shared page data type used by all categories */

export interface PageData {
  slug: string
  badge: string
  title: string
  description: string
  accentColor?: string
  accentLight?: string
  metrics: { value: string; label: string }[]
  overview: {
    title: string
    subtitle: string
    subsections: { heading: string; paragraphs: string[] }[]
  }
  concepts: {
    title: string
    subtitle: string
    columns: number
    cards: {
      className: string
      borderColor: string
      icon: string
      title: string
      description: string
      examples: string[]
    }[]
  }
  hasSvgViz: boolean
  algorithms: AlgoTable | AlgoCardGrid
  tools: {
    title: string
    subtitle: string
    items: { icon: string; name: string; vendor: string; description: string; tags: string[] }[]
  }
  bestPractices: {
    title: string
    subtitle: string
    doItems: string[]
    dontItems: string[]
  }
  agent: {
    avatar: string
    name: string
    role: string
    description: string
    capabilities: string[]
    codeFilename: string
    code: string
  }
  relatedPages: { number: string; title: string; description: string; slug: string }[]
  prevPage?: { title: string; slug: string }
  nextPage?: { title: string; slug: string }
}

export interface AlgoTable {
  type: 'table'
  title: string
  subtitle: string
  headers: string[]
  rows: {
    icon: string
    name: string
    tagText: string
    tagClass: string
    bestFor: string
    complexity: 'low' | 'medium' | 'high'
    rating: string
  }[]
}

export interface AlgoCardGrid {
  type: 'card-grid'
  title: string
  subtitle: string
  cards: {
    icon: string
    title: string
    subtitle: string
    description: string
    tags: string[]
  }[]
}
