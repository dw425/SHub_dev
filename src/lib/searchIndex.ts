import { categories } from '@/data/categories'
import { getPages } from '@/data/pageRegistry'
import { categoryPath, detailPath } from '@/config/routes'

export interface SearchEntry {
  title: string
  description: string
  type: 'category' | 'page' | 'algorithm' | 'tool' | 'concept'
  path: string
}

/** Score how well a query matches text (higher = better, 0 = no match) */
function fuzzyScore(query: string, text: string): number {
  const lower = text.toLowerCase()
  const q = query.toLowerCase().trim()
  const words = q.split(/\s+/).filter(Boolean)

  // Exact substring — highest
  if (lower.includes(q)) return 100

  // All words present
  if (words.every((w) => lower.includes(w))) return 80

  // Partial word matches
  const matched = words.filter((w) => lower.includes(w))
  if (matched.length > 0) return 40 + (matched.length / words.length) * 30

  // Character-order fuzzy
  let qi = 0
  for (let i = 0; i < lower.length && qi < q.length; i++) {
    if (lower[i] === q[qi]) qi++
  }
  if (qi === q.length) return 20

  // Prefix match on any word
  const textWords = lower.split(/\s+/)
  for (const w of words) {
    if (textWords.some((tw) => tw.startsWith(w) || w.startsWith(tw))) return 15
  }

  return 0
}

/** Build a flat searchable index from all available data */
function buildIndex(): SearchEntry[] {
  const entries: SearchEntry[] = []

  for (const cat of categories) {
    // Category entry
    entries.push({
      title: `${cat.emoji} ${cat.title}`,
      description: cat.description,
      type: 'category',
      path: categoryPath(cat.slug),
    })

    // All pages for this category
    const pages = getPages(cat.slug)
    for (const page of pages) {
      entries.push({
        title: page.title,
        description: page.description,
        type: 'page',
        path: detailPath(cat.slug, page.slug),
      })

      // Extract algorithms/techniques
      if (page.algorithms.type === 'table') {
        for (const row of page.algorithms.rows) {
          entries.push({
            title: row.name,
            description: `${row.tagText} — ${row.bestFor}`,
            type: 'algorithm',
            path: detailPath(cat.slug, page.slug),
          })
        }
      } else {
        for (const card of page.algorithms.cards) {
          entries.push({
            title: card.title,
            description: card.description.slice(0, 120),
            type: 'algorithm',
            path: detailPath(cat.slug, page.slug),
          })
        }
      }

      // Extract tools
      for (const tool of page.tools.items) {
        entries.push({
          title: `${tool.name} (${tool.vendor})`,
          description: tool.description.slice(0, 120),
          type: 'tool',
          path: detailPath(cat.slug, page.slug),
        })
      }

      // Extract concept cards
      for (const card of page.concepts.cards) {
        entries.push({
          title: card.title,
          description: card.description.slice(0, 120),
          type: 'concept',
          path: detailPath(cat.slug, page.slug),
        })
      }
    }
  }

  return entries
}

let _index: SearchEntry[] | null = null

function getIndex(): SearchEntry[] {
  if (!_index) _index = buildIndex()
  return _index
}

export interface SearchResult extends SearchEntry {
  score: number
}

export function search(query: string, limit = 8): SearchResult[] {
  if (!query || query.length < 2) return []

  const index = getIndex()
  const scored: SearchResult[] = []

  for (const entry of index) {
    const searchable = `${entry.title} ${entry.description}`
    const score = fuzzyScore(query, searchable)
    if (score > 0) scored.push({ ...entry, score })
  }

  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, limit)
}
