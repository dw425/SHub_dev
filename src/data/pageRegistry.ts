/**
 * Central registry mapping category slugs to their page arrays.
 *
 * Each cat file exports its pages as a default export.
 * This file imports them all (ONE-WAY, no circular dependency)
 * and builds the lookup map.
 */
import type { PageData } from './pageTypes'

import cat01 from './cat01/pages'
import cat02 from './cat02/pages'
import cat03 from './cat03/pages'
import cat04 from './cat04/pages'
import cat05 from './cat05/pages'
import cat06 from './cat06/pages'
import cat07 from './cat07/pages'
import cat08 from './cat08/pages'
import cat09 from './cat09/pages'
import cat10 from './cat10/pages'
import cat11 from './cat11/pages'
import cat12 from './cat12/pages'
import cat13 from './cat13/pages'
import cat14 from './cat14/pages'
import cat15 from './cat15/pages'
import cat16 from './cat16/pages'
import cat17 from './cat17/pages'
import cat18 from './cat18/pages'
import cat19 from './cat19/pages'
import cat20 from './cat20/pages'
import cat21 from './cat21/pages'
import cat22 from './cat22/pages'
import cat23 from './cat23/pages'
import cat24 from './cat24/pages'
import cat25 from './cat25/pages'
import cat26 from './cat26/pages'
import cat27 from './cat27/pages'
import cat28 from './cat28/pages'
import cat29 from './cat29/pages'

const registry = new Map<string, PageData[]>([
  ['aiml-foundations', cat01],
  ['data-engineering', cat02],
  ['analytics-bi', cat03],
  ['data-science', cat04],
  ['generative-ai', cat05],
  ['chatbots-agents', cat06],
  ['knowledge-management', cat07],
  ['automation-rpa', cat08],
  ['sdlc-devops', cat09],
  ['product-building', cat10],
  ['security-compliance', cat11],
  ['cloud-platforms', cat12],
  ['migration-factory', cat13],
  ['integration-apis', cat14],
  ['networking', cat15],
  ['monitoring-observability', cat16],
  ['change-management', cat17],
  ['implementation', cat18],
  ['emerging-technologies', cat19],
  ['industry-forecasts', cat20],
  ['white-papers-research', cat21],
  ['competitive-intelligence', cat22],
  ['computer-vision', cat23],
  ['design-patterns', cat24],
  ['data-security', cat25],
  ['governance', cat26],
  ['finops', cat27],
  ['industry-verticals', cat28],
  ['methodologies', cat29],
])

export function getPages(categorySlug: string): PageData[] {
  return registry.get(categorySlug) ?? []
}

export function getPage(categorySlug: string, pageSlug: string): PageData | undefined {
  return getPages(categorySlug).find((p) => p.slug === pageSlug)
}
