/**
 * Extract page data from HTML source files and generate pages.ts for each category.
 * Handles BOTH template types: page-primary (cat02-style) and cat-primary (cat17-style)
 */
import * as cheerio from 'cheerio'
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const SRC = '/Users/darkstar33/Documents/GitHub/StrategyHub/src/data'
const TMP = '/tmp'

const CAT_META = {
  1:  { emoji: '🧠', slug: 'aiml-foundations' },
  2:  { emoji: '⚙️', slug: 'data-engineering' },
  3:  { emoji: '📊', slug: 'analytics-bi' },
  4:  { emoji: '🔬', slug: 'data-science' },
  5:  { emoji: '✨', slug: 'generative-ai' },
  6:  { emoji: '🤖', slug: 'chatbots-agents' },
  7:  { emoji: '📚', slug: 'knowledge-management' },
  8:  { emoji: '🔄', slug: 'automation-rpa' },
  9:  { emoji: '🏗️', slug: 'sdlc-devops' },
  10: { emoji: '📦', slug: 'product-building' },
  11: { emoji: '🔐', slug: 'security-compliance' },
  12: { emoji: '☁️', slug: 'cloud-platforms' },
  13: { emoji: '🔄', slug: 'migration-factory' },
  14: { emoji: '🔗', slug: 'integration-apis' },
  15: { emoji: '🌐', slug: 'networking' },
  16: { emoji: '📡', slug: 'monitoring-observability' },
  17: { emoji: '🔄', slug: 'change-management' },
  18: { emoji: '🎯', slug: 'implementation' },
  19: { emoji: '🚀', slug: 'emerging-technologies' },
  20: { emoji: '🔮', slug: 'industry-forecasts' },
  21: { emoji: '📄', slug: 'white-papers-research' },
  22: { emoji: '🎯', slug: 'competitive-intelligence' },
  23: { emoji: '👁️', slug: 'computer-vision' },
  24: { emoji: '🧩', slug: 'design-patterns' },
  25: { emoji: '🔒', slug: 'data-security' },
  26: { emoji: '⚖️', slug: 'governance' },
}

const BORDER_COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EC4899', '#06B6D4']
const TAG_CLASSES = ['tag-blue', 'tag-green', 'tag-purple', 'tag-orange', 'tag-pink']
const PAGE_COLORS = [
  { accent: '#3B82F6', light: '#60A5FA' },
  { accent: '#10B981', light: '#34D399' },
  { accent: '#8B5CF6', light: '#A78BFA' },
  { accent: '#F59E0B', light: '#FBBF24' },
  { accent: '#EC4899', light: '#F472B6' },
  { accent: '#06B6D4', light: '#22D3EE' },
  { accent: '#EF4444', light: '#F87171' },
  { accent: '#6366F1', light: '#818CF8' },
  { accent: '#14B8A6', light: '#2DD4BF' },
  { accent: '#F97316', light: '#FB923C' },
  { accent: '#84CC16', light: '#A3E635' },
  { accent: '#0EA5E9', light: '#38BDF8' },
]

function escapeTs(str) {
  if (!str) return ''
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').trim()
}

function txt($, sel) {
  const el = $(sel).first()
  return el.length ? el.text().trim() : ''
}

function parseHtml(filePath, catNum, pageNum, pageIndex) {
  const html = readFileSync(filePath, 'utf8')
  const $ = cheerio.load(html)

  // === COLORS ===
  let accentColor = '#3B82F6', accentLight = '#60A5FA'
  const ppMatch = html.match(/--page-primary:\s*(#[0-9a-fA-F]{6})/)
  const plMatch = html.match(/--page-light:\s*(#[0-9a-fA-F]{6})/)
  if (ppMatch && plMatch) {
    accentColor = ppMatch[1]
    accentLight = plMatch[1]
  } else {
    const cpMatch = html.match(/--cat-primary:\s*(#[0-9a-fA-F]{6})/)
    const clMatch = html.match(/--cat-light:\s*(#[0-9a-fA-F]{6})/)
    if (cpMatch && clMatch) {
      if (pageIndex === 0) {
        accentColor = cpMatch[1]
        accentLight = clMatch[1]
      } else {
        const c = PAGE_COLORS[pageIndex % PAGE_COLORS.length]
        accentColor = c.accent
        accentLight = c.light
      }
    }
  }

  // === SLUG ===
  const fnameMatch = filePath.match(/cat\d+-p\d+-(.+)\.html$/)
  const slug = fnameMatch ? fnameMatch[1] : 'unknown'

  // === HERO ===
  let badge = txt($, '.hero-tag') || txt($, '.page-tag')
  const title = txt($, 'h1')
  let description = ''
  const heroLeftP = $('.hero-left > p').first()
  if (heroLeftP.length) {
    description = heroLeftP.text().trim()
  } else {
    // page-header style: h1 followed by p
    const h1 = $('h1').first()
    const nextP = h1.nextAll('p').first()
    if (nextP.length) description = nextP.text().trim()
  }

  // === METRICS ===
  const metrics = []
  $('.hero-metric').each((i, el) => {
    const value = $(el).find('.hero-metric-value').text().trim()
    const label = $(el).find('.hero-metric-label').text().trim()
    if (value && label) metrics.push({ value, label })
  })
  while (metrics.length < 4 && metrics.length > 0) metrics.push({ value: '—', label: '—' })
  if (metrics.length === 0) {
    metrics.push({ value: String(pageNum), label: 'Page Number' },
      { value: '100%', label: 'Coverage' },
      { value: 'Active', label: 'Status' },
      { value: 'Deep', label: 'Analysis Level' })
  }

  // === OVERVIEW ===
  let overviewTitle = '', overviewSubtitle = ''
  const subsections = []
  const overviewContent = $('.overview-content').first()
  if (overviewContent.length) {
    const parentModule = overviewContent.closest('.module, section')
    const moduleInfo = parentModule.find('.module-info').first()
    overviewTitle = moduleInfo.find('h2').first().text().trim() || title
    overviewSubtitle = moduleInfo.find('p').first().text().trim() || ''
    let currentHeading = null, currentParagraphs = []
    overviewContent.children().each((i, el) => {
      const tag = el.tagName?.toLowerCase()
      if (tag === 'h3') {
        if (currentHeading) subsections.push({ heading: currentHeading, paragraphs: [...currentParagraphs] })
        currentHeading = $(el).text().trim()
        currentParagraphs = []
      } else if (tag === 'p') {
        const text = $(el).text().trim()
        if (text) currentParagraphs.push(text)
      } else if (tag === 'div') {
        $(el).find('h3').each((_, h3) => {
          if (currentHeading) subsections.push({ heading: currentHeading, paragraphs: [...currentParagraphs] })
          currentHeading = $(h3).text().trim()
          currentParagraphs = []
        })
        $(el).find('p').each((_, p) => {
          const text = $(p).text().trim()
          if (text) currentParagraphs.push(text)
        })
      }
    })
    if (currentHeading) subsections.push({ heading: currentHeading, paragraphs: [...currentParagraphs] })
  }
  if (subsections.length === 0) {
    const descBlock = $('.description-block, .section-intro').first()
    if (descBlock.length) {
      const paras = []
      descBlock.find('p').each((_, el) => { const t = $(el).text().trim(); if (t) paras.push(t) })
      if (paras.length > 0) subsections.push({ heading: 'Overview', paragraphs: paras })
    }
  }
  // Fallback: extract from section h2.section-title
  if (subsections.length === 0) {
    $('h2.section-title').each((_, el) => {
      if (subsections.length >= 3) return
      const heading = $(el).text().trim().replace(/^[\p{Emoji}\s]+/u, '')
      const section = $(el).closest('section')
      const paras = []
      section.find('p').slice(0, 3).each((_, p) => {
        const t = $(p).text().trim()
        if (t && t.length > 30) paras.push(t)
      })
      if (heading && paras.length > 0) subsections.push({ heading, paragraphs: paras })
    })
  }
  // Fallback: extract from .module .module-info h2 OR .section .section-info h2
  if (subsections.length === 0) {
    const moduleEls = $('.module, .section').filter((_, el) => {
      const $el = $(el)
      return $el.find('.module-info h2, .section-info h2, > h2').length > 0
    })
    moduleEls.each((_, mod) => {
      if (subsections.length >= 3) return
      const $mod = $(mod)
      const heading = $mod.find('.module-info h2, .section-info h2, > h2').first().text().trim()
      if (!heading) return
      // Skip tools, practices, agent, comparison, related, anti-pattern modules
      const lower = heading.toLowerCase()
      if (lower.includes('tool') || lower.includes('practice') || lower.includes('agent') || lower.includes('related') || lower.includes('comparison') || lower.includes('platform comparison') || lower.includes('anti-pattern')) return
      const paras = []
      $mod.find('p').slice(0, 3).each((_, p) => {
        const t = $(p).text().trim()
        if (t && t.length > 30) paras.push(t)
      })
      if (paras.length > 0) subsections.push({ heading, paragraphs: paras })
    })
  }
  if (!overviewTitle) {
    const firstH2 = $('.module .module-info h2').first()
    overviewTitle = firstH2.length ? firstH2.text().trim() : title
  }
  if (!overviewSubtitle) {
    const firstP = $('.module .module-info p').first()
    overviewSubtitle = firstP.length ? firstP.text().trim() : ''
  }

  // === CONCEPT CARDS ===
  const conceptCards = []
  let conceptsTitle = 'Key Concepts', conceptsSubtitle = 'Core components and patterns'

  // Helper to extract a card from any element
  function extractCard($c, i, $) {
    const classes = ($c.attr('class') || '').split(/\s+/)
    const mainClass = classes.find(c => c.endsWith('-card') && c !== 'related-card') || ''
    const baseName = mainClass ? mainClass.replace(/-card$/, '') : 'concept'
    const cardTitle = $c.find(`.${baseName}-title, [class$="-title"], h3, h4`).first().text().trim()
    const cardDesc = $c.find(`.${baseName}-desc, .${baseName}-description, [class$="-desc"], [class$="-description"], [class$="-content"] > p, p`).first().text().trim()
    const cardIcon = $c.find(`.${baseName}-icon, [class$="-icon"], [class$="-letter"], [class$="-emoji"], [class$="-num"]`).first().text().trim()
    const subclass = classes.find(c => c !== mainClass && c !== '') || `${baseName}-${i}`
    return {
      className: subclass || `concept-${i}`,
      borderColor: BORDER_COLORS[i % BORDER_COLORS.length],
      icon: cardIcon || '💡',
      title: cardTitle || '',
      description: cardDesc || '',
      examples: $c.find('li').map((_, li) => $(li).text().trim()).get().slice(0, 5),
    }
  }

  // Strategy 1: .pattern-card (page-primary template)
  const patternCards = $('.pattern-card')
  if (patternCards.length >= 2) {
    const pModule = patternCards.closest('.module').first()
    conceptsTitle = pModule.find('.module-info h2').first().text().trim() || conceptsTitle
    conceptsSubtitle = pModule.find('.module-info p').first().text().trim() || conceptsSubtitle
    patternCards.each((i, el) => {
      const $c = $(el)
      const classes = ($c.attr('class') || '').split(/\s+/)
      conceptCards.push({
        className: classes.find(c => c !== 'pattern-card') || `concept-${i}`,
        borderColor: BORDER_COLORS[i % BORDER_COLORS.length],
        icon: $c.find('.pattern-icon').text().trim() || '💡',
        title: $c.find('.pattern-title').text().trim() || '',
        description: $c.find('.pattern-desc').text().trim() || '',
        examples: $c.find('.pattern-features li, ul li').map((_, li) => $(li).text().trim()).get().slice(0, 5),
      })
    })
  }

  // Strategy 2: .concept-card (cat01, cat05, cat06, cat07, cat18 style)
  if (conceptCards.length < 2) {
    conceptCards.length = 0
    const ccards = $('.concept-card')
    if (ccards.length >= 2) {
      const cModule = ccards.closest('.module, section').first()
      conceptsTitle = cModule.find('.module-info h2, h2').first().text().trim() || conceptsTitle
      conceptsSubtitle = cModule.find('.module-info p').first().text().trim() || conceptsSubtitle
      ccards.slice(0, 4).each((i, el) => {
        const $c = $(el)
        const classes = ($c.attr('class') || '').split(/\s+/)
        conceptCards.push({
          className: classes.find(c => c !== 'concept-card') || `concept-${i}`,
          borderColor: BORDER_COLORS[i % BORDER_COLORS.length],
          icon: $c.find('.concept-icon').text().trim() || '💡',
          title: $c.find('.concept-title').text().trim() || '',
          description: $c.find('.concept-desc').text().trim() || '',
          examples: $c.find('.concept-examples li, ul li').map((_, li) => $(li).text().trim()).get().slice(0, 5),
        })
      })
    }
  }

  // Strategy 3: Extended list of known card selectors from all HTML templates
  if (conceptCards.length < 2) {
    conceptCards.length = 0
    const cardSelectors = [
      '.selection-card', '.framework-card', '.pillar-card', '.decomp-card',
      '.principle-card', '.capability-card', '.approach-card', '.type-card',
      '.method-card', '.category-card', '.paradigm-card', '.technique-card',
      '.adkar-step', '.stage-card', '.domain-card', '.step-card',
      '.seven-s-card', '.universal-card', '.evolution-card', '.collab-card',
      '.role-card', '.actor-card', '.vector-card', '.dimension-card',
      '.phase-card', '.platform-card', '.comp-type-card', '.signal-card',
      '.strategy-card', '.model-card', '.topic-card', '.research-card',
      '.insight-card', '.assess-card', '.leader-card', '.market-card',
      '.feature-card', '.metric-type-card', '.slo-card', '.exporter-card',
      '.checklist-card', '.db-card', '.deep-card', '.output-card',
      '.deliverable-card', '.char-card', '.comm-card', '.case-card',
      '.arch-compare-card', '.provider-card', '.pricing-card', '.region-card',
      '.sw-card', '.contents-card', '.dimension-card', '.timeline-card',
      '.discovery-stat-card', '.auth-card', '.observability-card',
      '.use-case-card', '.antipattern-card', '.dashboard-card',
      '.retention-card', '.architecture-card', '.augmentation-effect',
      '.compare-card', '.value-card', '.prediction-card',
      '.quadrant-card', '.value-detail-card', '.sector-card',
      '.usecase-card', '.capability-detail-card',
    ]
    for (const sel of cardSelectors) {
      const cards = $(sel)
      if (cards.length >= 2) {
        const cModule = cards.closest('.module, section').first()
        conceptsTitle = cModule.find('.module-info h2, h2').first().text().trim() || conceptsTitle
        conceptsSubtitle = cModule.find('.module-info p').first().text().trim() || conceptsSubtitle
        cards.slice(0, 4).each((i, el) => {
          conceptCards.push(extractCard($(el), i, $))
        })
        if (conceptCards.length >= 2) break
      }
    }
  }

  // Strategy 4: Generic — find ANY [class$="-card"] elements with 3+ siblings
  if (conceptCards.length < 2) {
    conceptCards.length = 0
    const skipPatterns = /related|practice|tool|agent|pros|cons|anti|footer|nav|code|hero|sidebar/i
    const allCards = $('[class*="-card"]').filter((_, el) => {
      const cls = $(el).attr('class') || ''
      return !skipPatterns.test(cls) && $(el).parent().children('[class*="-card"]').length >= 3
    })
    if (allCards.length >= 3) {
      const firstCard = allCards.first()
      const parent = firstCard.parent()
      const mod = parent.closest('.module, section')
      conceptsTitle = mod.find('.module-info h2, h2').first().text().trim() || conceptsTitle
      conceptsSubtitle = mod.find('.module-info p').first().text().trim() || conceptsSubtitle
      const siblings = parent.children('[class*="-card"]').slice(0, 4)
      siblings.each((i, el) => {
        conceptCards.push(extractCard($(el), i, $))
      })
    }
  }

  // Strategy 5: If still not enough, extract from section h3 headings
  if (conceptCards.length < 2) {
    conceptCards.length = 0
    const sectionH2s = $('h2.section-title, .module-info h2').slice(0, 6)
    sectionH2s.each((i, el) => {
      if (conceptCards.length >= 4) return
      const heading = $(el).text().trim()
      const section = $(el).closest('section, .module')
      const firstP = section.find('p').first().text().trim()
      if (heading && firstP) {
        conceptCards.push({
          className: `section-${i}`,
          borderColor: BORDER_COLORS[i % BORDER_COLORS.length],
          icon: heading.match(/^(\p{Emoji})/u)?.[1] || '📌',
          title: heading.replace(/^[\p{Emoji}\s]+/u, '').trim(),
          description: firstP.slice(0, 200),
          examples: section.find('li').slice(0, 4).map((_, li) => $(li).text().trim()).get(),
        })
      }
    })
  }

  // Pad to 4 if needed — use subsection headings instead of "Key Area N"
  while (conceptCards.length < 4) {
    const i = conceptCards.length
    const sub = subsections[i]
    if (sub && sub.heading) {
      conceptCards.push({
        className: `overview-${i}`,
        borderColor: BORDER_COLORS[i % BORDER_COLORS.length],
        icon: sub.heading.match(/^(\p{Emoji})/u)?.[1] || '📌',
        title: sub.heading.replace(/^[\p{Emoji}\s]+/u, '').trim(),
        description: sub.paragraphs?.[0]?.slice(0, 200) || '',
        examples: [],
      })
    } else {
      conceptCards.push({
        className: `concept-${i}`,
        borderColor: BORDER_COLORS[i % BORDER_COLORS.length],
        icon: '💡',
        title: title || `Topic ${i + 1}`,
        description: description?.slice(0, 200) || '',
        examples: [],
      })
    }
  }

  // === ALGORITHMS ===
  const isOdd = (pageNum % 2 === 1)
  const compTable = $('.comparison-table')
  const tableRows = []
  if (compTable.length) {
    compTable.find('tbody tr').each((i, el) => {
      const cells = $(el).find('td').map((_, td) => $(td).text().trim()).get()
      const tag = $(el).find('.compare-tag, [class*="tag"]')
      let tagClass = 'tag-blue'
      if (tag.hasClass('good') || tag.text().includes('Free') || tag.text().includes('$-')) tagClass = 'tag-green'
      else if (tag.hasClass('medium') || tag.text().includes('$$')) tagClass = 'tag-orange'
      else if (tag.hasClass('poor') || tag.text().includes('$$$')) tagClass = 'tag-pink'
      tableRows.push({ cells, tagText: tag.text().trim(), tagClass })
    })
  }
  const compModH2 = compTable.closest('.module, section').find('.module-info h2, h2').first()
  const compTitle = compModH2.text().trim() || 'Comparison & Analysis'
  const compModP = compTable.closest('.module, section').find('.module-info p').first()
  const compSubtitle = compModP.text().trim() || 'Evaluating approaches and tools'
  let algorithms
  if (!isOdd && tableRows.length >= 3) {
    algorithms = {
      type: 'table', title: compTitle, subtitle: compSubtitle,
      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],
      rows: tableRows.map((row, i) => ({
        icon: getToolIcon(row.cells[0] || ''),
        name: (row.cells[0] || '').replace(/\*+/g, '').trim(),
        tagText: row.tagText || row.cells[1] || '',
        tagClass: TAG_CLASSES[i % TAG_CLASSES.length],
        bestFor: row.cells[row.cells.length - 1] || '',
        complexity: row.tagClass === 'tag-green' ? 'low' : row.tagClass === 'tag-pink' ? 'high' : 'medium',
        rating: row.cells[2] || '⭐⭐⭐⭐',
      }))
    }
  } else {
    const cards = []
    if (tableRows.length > 0) {
      tableRows.forEach((row, i) => {
        cards.push({
          icon: getToolIcon(row.cells[0] || ''),
          title: (row.cells[0] || '').replace(/\*+/g, '').trim(),
          subtitle: row.cells[1] || '',
          description: row.cells[row.cells.length - 1] || '',
          tags: [row.tagText || row.cells[1] || ''].filter(Boolean),
        })
      })
    }
    if (cards.length < 3) {
      // Try section titles as cards
      $('h2.section-title, section h2, .module h2').each((i, el) => {
        if (cards.length >= 8) return
        const h2Text = $(el).text().trim().replace(/^[\p{Emoji}\s]+/u, '')
        const section = $(el).closest('section, .module')
        const firstP = section.find('p').first().text().trim()
        if (h2Text && firstP && !cards.find(c => c.title === h2Text)) {
          cards.push({ icon: '📌', title: h2Text, subtitle: '', description: firstP.slice(0, 150), tags: [] })
        }
      })
    }
    if (cards.length < 3) {
      $('h3').slice(0, 8).each((i, el) => {
        if (cards.length >= 8) return
        const h3Text = $(el).text().trim()
        const nextP = $(el).next('p')
        if (h3Text && !cards.find(c => c.title === h3Text)) {
          cards.push({ icon: '📌', title: h3Text, subtitle: '', description: nextP.length ? nextP.text().trim().slice(0, 150) : '', tags: [] })
        }
      })
    }
    // Pad remaining with meaningful info instead of "Analysis N"
    while (cards.length < 6) {
      const idx = cards.length
      const sub = subsections[idx]
      if (sub && sub.heading) {
        cards.push({ icon: '📌', title: sub.heading.replace(/^[\p{Emoji}\s]+/u, '').trim(), subtitle: '', description: sub.paragraphs?.[0]?.slice(0, 150) || '', tags: [] })
      } else {
        cards.push({ icon: '📌', title: title || `Topic ${idx + 1}`, subtitle: '', description: description?.slice(0, 150) || '', tags: [] })
      }
    }
    algorithms = { type: 'card-grid', title: compTitle, subtitle: compSubtitle, cards: cards.slice(0, 8) }
  }

  // === TOOLS ===
  const toolItems = []
  const toolsModule = $('.tools-grid, .tool-grid').closest('.module, section').first()
  const toolsTitle = toolsModule.find('.module-info h2, h2').first().text().trim() || 'Tools & Frameworks'
  const toolsSubtitle = toolsModule.find('.module-info p').first().text().trim() || 'Essential tools and platforms'
  // Pattern 1: .tool-card (page-primary)
  $('.tool-card').each((_, el) => {
    const $c = $(el)
    toolItems.push({
      icon: $c.find('.tool-logo').text().trim() || '🛠️',
      name: $c.find('.tool-name, .tool-card-header, h4, h3').first().text().trim(),
      vendor: $c.find('.tool-vendor').text().trim(),
      description: $c.find('.tool-desc, .tool-card-body, p').first().text().trim(),
      tags: $c.find('.tool-tag').map((_, t) => $(t).text().trim()).get(),
    })
  })
  // Pattern 2: cat-primary pages that have tool-like cards in a tools section
  if (toolItems.length === 0) {
    const toolSection = $('section').filter((_, s) => {
      const h2 = $(s).find('h2').first().text().toLowerCase()
      return h2.includes('tool') || h2.includes('platform') || h2.includes('framework') || h2.includes('ecosystem')
    }).first()
    if (toolSection.length) {
      toolSection.find('[class*="-card"]').each((_, el) => {
        const $c = $(el)
        const cls = ($c.attr('class') || '').toLowerCase()
        if (cls.includes('related') || cls.includes('practice') || cls.includes('anti')) return
        const name = $c.find('h3, h4, [class*="-name"], [class*="-title"]').first().text().trim()
        const desc = $c.find('[class*="-desc"], p').first().text().trim()
        if (name) {
          toolItems.push({
            icon: '🛠️', name, vendor: '',
            description: desc,
            tags: $c.find('[class*="-tag"]').map((_, t) => $(t).text().trim()).get(),
          })
        }
      })
    }
  }

  // === BEST PRACTICES ===
  const doItems = [], dontItems = []
  const practicesModule = $('.best-practices, .practices-grid').closest('.module, section').first()
  const practicesTitle = practicesModule.find('.module-info h2, h2').first().text().trim() || 'Best Practices'
  const practicesSubtitle = practicesModule.find('.module-info p').first().text().trim() || 'Guidelines and recommendations'
  // Pattern 1: page-primary template: .practice-card.do li / .practice-card.dont li
  $('.practice-card.do .practice-list li, .practice-card.do li').each((_, el) => doItems.push($(el).text().trim()))
  $('.practice-card.dont .practice-list li, .practice-card.dont li').each((_, el) => dontItems.push($(el).text().trim()))
  // Pattern 2: cat-primary template: .practices-do .practice-item / .practices-dont .practice-item
  if (doItems.length === 0) {
    $('.practices-do .practice-item').each((_, el) => {
      const text = $(el).text().replace(/^[✓✗]\s*/, '').trim()
      if (text) doItems.push(text)
    })
    $('.practices-dont .practice-item').each((_, el) => {
      const text = $(el).text().replace(/^[✓✗]\s*/, '').trim()
      if (text) dontItems.push(text)
    })
  }
  // Pattern 3: .practice-card with .practice-content (numbered cards, no do/don't split — cat14/15/16/22 style)
  if (doItems.length === 0) {
    $('.practice-card .practice-content').each((_, el) => {
      const h4 = $(el).find('h4').first().text().trim()
      const p = $(el).find('p').first().text().trim()
      if (h4 && p) doItems.push(`${h4} — ${p}`)
      else if (h4) doItems.push(h4)
    })
  }
  // Pattern 4: .bp-card.do / .bp-card.dont (cat09 style)
  if (doItems.length === 0) {
    $('.bp-card.do .bp-list li, .bp-card.do li').each((_, el) => {
      const text = $(el).text().replace(/^[✓✗]\s*/, '').trim()
      if (text) doItems.push(text)
    })
    $('.bp-card.dont .bp-list li, .bp-card.dont li').each((_, el) => {
      const text = $(el).text().replace(/^[✓✗]\s*/, '').trim()
      if (text) dontItems.push(text)
    })
  }
  // Pattern 4: .sw-card.strengths / .sw-card.weaknesses (cat12 style)
  if (doItems.length === 0) {
    $('.sw-card.strengths .sw-list li, .sw-card.strengths li').each((_, el) => doItems.push($(el).text().trim()))
    $('.sw-card.weaknesses .sw-list li, .sw-card.weaknesses li').each((_, el) => dontItems.push($(el).text().trim()))
  }
  // Pattern 5: .pros-card / .cons-card (some editorial pages)
  if (doItems.length === 0) {
    $('.pros-card li, .practice-content .pros li').each((_, el) => doItems.push($(el).text().trim()))
    $('.cons-card li, .practice-content .cons li').each((_, el) => dontItems.push($(el).text().trim()))
  }
  // Pattern 6: Generic — any section with ✓/✗ list items
  if (doItems.length === 0) {
    $('section').each((_, s) => {
      if (doItems.length > 0) return
      const $s = $(s)
      const h2 = $s.find('h2').first().text().toLowerCase()
      if (h2.includes('practice') || h2.includes('do') || h2.includes('recommendation') || $s.attr('id') === 'practices') {
        $s.find('li').each((_, li) => {
          const text = $(li).text().trim()
          if (text.startsWith('✓') || text.startsWith('Do ')) doItems.push(text.replace(/^[✓]\s*/, '').trim())
          else if (text.startsWith('✗') || text.startsWith("Don't")) dontItems.push(text.replace(/^[✗]\s*/, '').trim())
        })
        // If no ✓/✗ markers, split by halves
        if (doItems.length === 0) {
          const allLi = $s.find('li').map((_, li) => $(li).text().trim()).get().filter(Boolean)
          const half = Math.ceil(allLi.length / 2)
          allLi.slice(0, half).forEach(t => doItems.push(t))
          allLi.slice(half).forEach(t => dontItems.push(t))
        }
      }
    })
  }

  // === AGENT ===
  const agentAvatar = txt($, '.agent-avatar') || '🤖'
  let agentName = txt($, '.agent-name') || ''
  let agentRole = txt($, '.agent-role') || ''
  let agentDesc = txt($, '.agent-desc') || ''
  const agentCapabilities = []
  // Pattern 1: .agent-capabilities li
  $('.agent-capabilities li').each((_, el) => agentCapabilities.push($(el).text().trim()))
  // Pattern 2: .agent-capability div children (cat-primary template)
  if (agentCapabilities.length === 0) {
    $('.agent-capability').each((_, el) => {
      const text = $(el).text().replace(/^[^\w]+/, '').trim()
      if (text) agentCapabilities.push(text)
    })
  }
  const codeFilename = txt($, '.code-filename, .code-header') || ''
  const codeText = $('.code-content pre, .code-content').first().text().trim()
  if (!agentName) {
    const agentInfo = $('.agent-info').first()
    if (agentInfo.length) {
      agentName = agentInfo.find('h3, .name, strong').first().text().trim() || ''
      agentRole = agentInfo.find('.role, em, .subtitle').first().text().trim() || agentRole
      agentDesc = agentInfo.find('> p').first().text().trim() || agentDesc
      if (agentCapabilities.length === 0) {
        agentInfo.find('.agent-capability').each((_, el) => {
          const text = $(el).text().replace(/^[^\w]+/, '').trim()
          if (text) agentCapabilities.push(text)
        })
      }
      if (agentCapabilities.length === 0) {
        agentInfo.find('li').each((_, el) => agentCapabilities.push($(el).text().trim()))
      }
    }
  }
  // Extract from code text if still missing
  if (!agentName && codeText) {
    const am = codeText.match(/(\w+)\s*=\s*Agent\(/)
    if (am) agentName = am[1]
  }
  if (!agentRole && codeText) {
    const rm = codeText.match(/role\s*=\s*["']([^"']+)["']/)
    if (rm) agentRole = rm[1]
  }
  if (!agentDesc && codeText) {
    const bm = codeText.match(/backstory\s*=\s*["]{3}([^"]+)/)
    if (bm) agentDesc = bm[1].trim().slice(0, 200)
  }

  // === RELATED PAGES ===
  const relatedPages = []
  $('.related-card').each((_, el) => {
    const $c = $(el)
    const href = $c.attr('href') || ''
    const slugMatch = href.match(/p\d+-(.+)\.html$/)
    if (slugMatch) {
      relatedPages.push({
        number: $c.find('.related-num').text().trim(),
        title: $c.find('.related-title').text().trim(),
        description: $c.find('.related-desc').text().trim(),
        slug: slugMatch[1],
      })
    }
  })

  // === PREV/NEXT ===
  let prevPage = undefined, nextPage = undefined
  $('footer .footer-link').each((_, el) => {
    const $link = $(el)
    const label = $link.find('.footer-link-label').text().trim()
    const linkTitle = $link.find('.footer-link-title').text().trim()
    const href = $link.attr('href') || ''
    const sm = href.match(/p(\d+)-(.+)\.html$/)
    if (label.includes('Previous') || label.includes('←')) { if (sm) prevPage = { title: linkTitle, slug: sm[2] } }
    else if (label.includes('Next') || label.includes('→')) { if (sm) nextPage = { title: linkTitle, slug: sm[2] } }
  })

  return {
    slug, badge, title, description, accentColor, accentLight, metrics,
    overview: { title: overviewTitle || title, subtitle: overviewSubtitle, subsections },
    concepts: { title: conceptsTitle, subtitle: conceptsSubtitle, columns: 2, cards: conceptCards.slice(0, 4) },
    hasSvgViz: true, algorithms,
    tools: { title: toolsTitle, subtitle: toolsSubtitle, items: toolItems },
    bestPractices: { title: practicesTitle, subtitle: practicesSubtitle, doItems, dontItems },
    agent: { avatar: agentAvatar, name: agentName, role: agentRole, description: agentDesc, capabilities: agentCapabilities, codeFilename, code: codeText },
    relatedPages, prevPage, nextPage,
  }
}

function getToolIcon(name) {
  const n = (name || '').toLowerCase()
  if (n.includes('aws') || n.includes('amazon')) return '📦'
  if (n.includes('azure') || n.includes('microsoft')) return '🔷'
  if (n.includes('google') || n.includes('gcp') || n.includes('bigquery')) return '🔍'
  if (n.includes('kafka')) return '🌊'
  if (n.includes('spark')) return '⚡'
  return '🛠️'
}

function generateTs(catNum, pages) {
  const meta = CAT_META[catNum]
  let ts = `import { registerPages } from '../pageRegistry'\nimport type { PageData } from '../pageTypes'\n\nconst pages: PageData[] = [\n`
  for (const page of pages) {
    ts += `  {\n`
    ts += `    slug: '${escapeTs(page.slug)}',\n`
    ts += `    badge: '${escapeTs(page.badge)}',\n`
    ts += `    title: '${escapeTs(page.title)}',\n`
    ts += `    description: '${escapeTs(page.description)}',\n`
    ts += `    accentColor: '${page.accentColor}',\n`
    ts += `    accentLight: '${page.accentLight}',\n`
    ts += `    metrics: [\n`
    for (const m of page.metrics) ts += `      { value: '${escapeTs(m.value)}', label: '${escapeTs(m.label)}' },\n`
    ts += `    ],\n`
    ts += `    overview: {\n      title: '${escapeTs(page.overview.title)}',\n      subtitle: '${escapeTs(page.overview.subtitle)}',\n      subsections: [\n`
    for (const sub of page.overview.subsections) {
      ts += `        {\n          heading: '${escapeTs(sub.heading)}',\n          paragraphs: [\n`
      for (const p of sub.paragraphs) ts += `            '${escapeTs(p)}',\n`
      ts += `          ],\n        },\n`
    }
    ts += `      ],\n    },\n`
    ts += `    concepts: {\n      title: '${escapeTs(page.concepts.title)}',\n      subtitle: '${escapeTs(page.concepts.subtitle)}',\n      columns: 2,\n      cards: [\n`
    for (const card of page.concepts.cards) {
      ts += `        {\n          className: '${escapeTs(card.className)}',\n          borderColor: '${card.borderColor}',\n          icon: '${escapeTs(card.icon)}',\n          title: '${escapeTs(card.title)}',\n          description: '${escapeTs(card.description)}',\n          examples: [${card.examples.map(e => `'${escapeTs(e)}'`).join(', ')}],\n        },\n`
    }
    ts += `      ],\n    },\n    hasSvgViz: true,\n`
    if (page.algorithms.type === 'table') {
      ts += `    algorithms: {\n      type: 'table',\n      title: '${escapeTs(page.algorithms.title)}',\n      subtitle: '${escapeTs(page.algorithms.subtitle)}',\n      headers: ['Name', 'Category', 'Best For', 'Complexity', 'Rating'],\n      rows: [\n`
      for (const row of page.algorithms.rows) ts += `        { icon: '${escapeTs(row.icon)}', name: '${escapeTs(row.name)}', tagText: '${escapeTs(row.tagText)}', tagClass: '${escapeTs(row.tagClass)}', bestFor: '${escapeTs(row.bestFor)}', complexity: '${row.complexity}', rating: '${escapeTs(row.rating)}' },\n`
      ts += `      ],\n    },\n`
    } else {
      ts += `    algorithms: {\n      type: 'card-grid',\n      title: '${escapeTs(page.algorithms.title)}',\n      subtitle: '${escapeTs(page.algorithms.subtitle)}',\n      cards: [\n`
      for (const card of page.algorithms.cards) ts += `        { icon: '${escapeTs(card.icon)}', title: '${escapeTs(card.title)}', subtitle: '${escapeTs(card.subtitle)}', description: '${escapeTs(card.description)}', tags: [${card.tags.map(t => `'${escapeTs(t)}'`).join(', ')}] },\n`
      ts += `      ],\n    },\n`
    }
    ts += `    tools: {\n      title: '${escapeTs(page.tools.title)}',\n      subtitle: '${escapeTs(page.tools.subtitle)}',\n      items: [\n`
    for (const tool of page.tools.items) ts += `        { icon: '${escapeTs(tool.icon)}', name: '${escapeTs(tool.name)}', vendor: '${escapeTs(tool.vendor)}', description: '${escapeTs(tool.description)}', tags: [${tool.tags.map(t => `'${escapeTs(t)}'`).join(', ')}] },\n`
    ts += `      ],\n    },\n`
    ts += `    bestPractices: {\n      title: '${escapeTs(page.bestPractices.title)}',\n      subtitle: '${escapeTs(page.bestPractices.subtitle)}',\n      doItems: [\n`
    for (const item of page.bestPractices.doItems) ts += `        '${escapeTs(item)}',\n`
    ts += `      ],\n      dontItems: [\n`
    for (const item of page.bestPractices.dontItems) ts += `        '${escapeTs(item)}',\n`
    ts += `      ],\n    },\n`
    ts += `    agent: {\n      avatar: '${escapeTs(page.agent.avatar)}',\n      name: '${escapeTs(page.agent.name)}',\n      role: '${escapeTs(page.agent.role)}',\n      description: '${escapeTs(page.agent.description)}',\n      capabilities: [\n`
    for (const cap of page.agent.capabilities) ts += `        '${escapeTs(cap)}',\n`
    ts += `      ],\n      codeFilename: '${escapeTs(page.agent.codeFilename)}',\n`
    ts += `      code: \`${page.agent.code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,\n    },\n`
    ts += `    relatedPages: [\n`
    for (const rel of page.relatedPages) ts += `      { number: '${escapeTs(rel.number)}', title: '${escapeTs(rel.title)}', description: '${escapeTs(rel.description)}', slug: '${escapeTs(rel.slug)}' },\n`
    ts += `    ],\n`
    ts += page.prevPage ? `    prevPage: { title: '${escapeTs(page.prevPage.title)}', slug: '${escapeTs(page.prevPage.slug)}' },\n` : `    prevPage: undefined,\n`
    ts += page.nextPage ? `    nextPage: { title: '${escapeTs(page.nextPage.title)}', slug: '${escapeTs(page.nextPage.slug)}' },\n` : `    nextPage: undefined,\n`
    ts += `  },\n`
  }
  ts += `]\n\nregisterPages('${meta.slug}', pages)\nexport default pages\n`
  return ts
}

function main() {
  const results = {}
  for (let catNum = 1; catNum <= 26; catNum++) {
    const catStr = catNum.toString().padStart(2, '0')
    const files = readdirSync(TMP)
      .filter(f => f.startsWith(`sh-cat${catStr}-p`) && f.endsWith('.html'))
      .sort((a, b) => parseInt(a.match(/p(\d+)-/)?.[1] || '0') - parseInt(b.match(/p(\d+)-/)?.[1] || '0'))
    if (files.length === 0) { console.log(`cat${catStr}: No HTML files`); continue }
    console.log(`cat${catStr}: Processing ${files.length} pages...`)
    const pages = []
    for (let idx = 0; idx < files.length; idx++) {
      const pn = parseInt(files[idx].match(/p(\d+)-/)?.[1] || '0')
      try { pages.push(parseHtml(join(TMP, files[idx]), catNum, pn, idx)) }
      catch (err) { console.error(`  ERROR ${files[idx]}: ${err.message}`) }
    }
    if (pages.length === 0) continue
    for (let i = 0; i < pages.length; i++) {
      pages[i].prevPage = i > 0 ? { title: `${catNum}.${i} ${pages[i-1].title}`, slug: pages[i-1].slug } : undefined
      pages[i].nextPage = i < pages.length-1 ? { title: `${catNum}.${i+2} ${pages[i+1].title}`, slug: pages[i+1].slug } : undefined
    }
    const tsContent = generateTs(catNum, pages)
    const catDir = join(SRC, `cat${catStr}`)
    if (!existsSync(catDir)) mkdirSync(catDir, { recursive: true })
    writeFileSync(join(catDir, 'pages.ts'), tsContent, 'utf8')
    console.log(`  Written (${pages.length} pages, ${tsContent.length} chars)`)
    results[catStr] = { pages: pages.length, chars: tsContent.length }
  }
  console.log('\n=== SUMMARY ===')
  let total = 0
  for (const [cat, info] of Object.entries(results)) { console.log(`cat${cat}: ${info.pages} pages`); total += info.pages }
  console.log(`Total: ${total} pages across ${Object.keys(results).length} categories`)
}

main()
