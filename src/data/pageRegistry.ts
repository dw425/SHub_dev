/**
 * Central registry mapping category slugs to their page arrays.
 * Each category module registers itself on import.
 *
 * NOTE: The registry Map is lazily initialised inside getRegistry()
 * so that it is always created before any cat module calls registerPages().
 * This prevents a temporal-dead-zone crash when the bundler (Rollup)
 * reorders the const declaration after the side-effect imports.
 */
import type { PageData } from './pageTypes'

let registry: Map<string, PageData[]> | null = null

function getRegistry(): Map<string, PageData[]> {
  if (!registry) registry = new Map()
  return registry
}

export function registerPages(categorySlug: string, pages: PageData[]) {
  getRegistry().set(categorySlug, pages)
}

export function getPages(categorySlug: string): PageData[] {
  return getRegistry().get(categorySlug) ?? []
}

export function getPage(categorySlug: string, pageSlug: string): PageData | undefined {
  return getPages(categorySlug).find((p) => p.slug === pageSlug)
}

/* ── Import all category data modules to trigger registration ── */
import './cat01/pages'
import './cat02/pages'
import './cat03/pages'
import './cat04/pages'
import './cat05/pages'
import './cat06/pages'
import './cat07/pages'
import './cat08/pages'
import './cat09/pages'
import './cat10/pages'
import './cat11/pages'
import './cat12/pages'
import './cat13/pages'
import './cat14/pages'
import './cat15/pages'
import './cat16/pages'
import './cat17/pages'
import './cat18/pages'
import './cat19/pages'
import './cat20/pages'
import './cat21/pages'
import './cat22/pages'
import './cat23/pages'
import './cat24/pages'
import './cat25/pages'
import './cat26/pages'
import './cat27/pages'
import './cat28/pages'
import './cat29/pages'
