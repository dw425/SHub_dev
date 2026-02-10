import { categories } from '@/data/categories'
import { getPages } from '@/data/pageRegistry'

export interface PageInfo {
  title: string
  slug: string
  categorySlug: string
  categoryTitle: string
  description: string
  keywords: string[]
}

export interface CategoryInfo {
  title: string
  slug: string
  emoji: string
  description: string
  pageCount: number
  domainId: string
}

/** All 29 categories */
export const categoryKnowledge: CategoryInfo[] = categories.map((c) => ({
  title: c.title,
  slug: c.slug,
  emoji: c.emoji,
  description: c.description,
  pageCount: c.pageCount,
  domainId: c.domainId,
}))

/** All pages across all categories with extracted keywords */
export const pageKnowledge: PageInfo[] = (() => {
  const pages: PageInfo[] = []
  for (const cat of categories) {
    const catPages = getPages(cat.slug)
    for (const p of catPages) {
      const keywords: string[] = []

      // Add concept card titles
      for (const card of p.concepts.cards) {
        keywords.push(card.title.toLowerCase())
      }

      // Add algorithm/technique names
      if (p.algorithms.type === 'table') {
        for (const row of p.algorithms.rows) {
          keywords.push(row.name.toLowerCase())
        }
      } else {
        for (const card of p.algorithms.cards) {
          keywords.push(card.title.toLowerCase())
        }
      }

      // Add tool names
      for (const tool of p.tools.items) {
        keywords.push(tool.name.toLowerCase())
      }

      pages.push({
        title: p.title,
        slug: p.slug,
        categorySlug: cat.slug,
        categoryTitle: cat.title,
        description: p.description,
        keywords,
      })
    }
  }
  return pages
})()

/** Auto-built topic → {categorySlug, pageSlug} map from all page keywords */
export const topicMap: Record<string, { categorySlug: string; pageSlug: string }> = (() => {
  const map: Record<string, { categorySlug: string; pageSlug: string }> = {}
  for (const page of pageKnowledge) {
    // Map page title words (3+ chars) to page
    const titleWords = page.title.toLowerCase().split(/\s+/).filter((w) => w.length >= 3)
    for (const word of titleWords) {
      if (!map[word]) map[word] = { categorySlug: page.categorySlug, pageSlug: page.slug }
    }
    // Map keywords to page
    for (const kw of page.keywords) {
      if (kw.length >= 3 && !map[kw]) {
        map[kw] = { categorySlug: page.categorySlug, pageSlug: page.slug }
      }
    }
  }
  return map
})()

const totalPages = categories.reduce((sum, c) => sum + c.pageCount, 0)

/** Common Q&A about the platform */
export const quickAnswers: Record<string, string> = {
  'what is strategyhub': `StrategyHub is Blueprint's comprehensive AI & Data Strategy knowledge base. It covers 29 categories across 6 domains — from AI/ML foundations to cloud infrastructure and security governance, with **${totalPages} detailed pages** of strategies, patterns, and tooling.`,
  'how many categories': `There are **29 categories** organized across 6 domains:\n- AI & Machine Learning (6 categories)\n- Data & Analytics (4 categories)\n- Cloud & Infrastructure (5 categories)\n- Security & Governance (3 categories)\n- Delivery & Operations (5 categories)\n- Strategy & Transformation (4 categories)\n\nPlus FinOps and Industry Verticals.`,
  'how many pages': `StrategyHub has **${totalPages} detailed pages** across 29 categories. Each page covers strategies, concept cards, comparison tables, tools, best practices, and an AI agent assistant.`,
}
