export { categories } from './categories'
export { domains } from './domains'
export { featured } from './featured'

import type { CategoryMeta } from '@/types'
import { categories } from './categories'

/** Look up a category by its URL slug */
export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug)
}

/** Look up a category by its number (1-26) */
export function getCategoryByNumber(num: number): CategoryMeta | undefined {
  return categories.find((c) => c.number === num)
}
