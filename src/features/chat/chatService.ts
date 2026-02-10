import {
  categoryKnowledge,
  getPageKnowledge,
  getTopicMap,
  quickAnswers,
} from './chatKnowledge'
import { categoryPath, detailPath } from '@/config/routes'

const MAX_MESSAGE_LENGTH = 500

export interface QuickAction {
  label: string
  message: string
}

type Intent =
  | 'greeting'
  | 'page_query'
  | 'topic_query'
  | 'category_query'
  | 'navigation'
  | 'platform_info'
  | 'recommendation'
  | 'unknown'

/* -- Levenshtein distance for typo tolerance -- */
function levenshtein(a: string, b: string): number {
  const m = b.length + 1
  const n = a.length + 1
  const matrix = Array.from({ length: m }, (_, i) => {
    const row = new Array<number>(n).fill(0)
    row[0] = i
    return row
  })
  for (let j = 1; j < n; j++) matrix[0]![j] = j
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const cost = b[i - 1] === a[j - 1] ? 0 : 1
      matrix[i]![j] = Math.min(
        matrix[i - 1]![j]! + 1,
        matrix[i]![j - 1]! + 1,
        matrix[i - 1]![j - 1]! + cost,
      )
    }
  }
  return matrix[b.length]![a.length]!
}

function fuzzyMatch(input: string, target: string): boolean {
  if (input.length < 3) return input === target
  if (target.includes(input)) return true
  return levenshtein(input, target) <= Math.floor(target.length * 0.3)
}

/* -- Intent Detection -- */
function detectIntent(message: string): { intent: Intent; match?: string; matchCat?: string } {
  const lower = message.toLowerCase().trim()

  // Greeting
  if (['hi', 'hello', 'hey', 'help', 'hi there', 'good morning', 'good afternoon'].includes(lower)) {
    return { intent: 'greeting' }
  }

  // Platform info questions
  for (const key of Object.keys(quickAnswers)) {
    if (lower.includes(key) || fuzzyMatch(lower, key)) {
      return { intent: 'platform_info', match: key }
    }
  }

  // Topic mapping (direct keyword match)
  for (const [keyword, loc] of Object.entries(getTopicMap())) {
    if (lower.includes(keyword)) {
      return { intent: 'topic_query', match: loc.pageSlug, matchCat: loc.categorySlug }
    }
  }

  // Page title fuzzy match
  for (const page of getPageKnowledge()) {
    const titleLower = page.title.toLowerCase()
    if (lower.includes(titleLower) || fuzzyMatch(lower, titleLower)) {
      return { intent: 'page_query', match: page.slug, matchCat: page.categorySlug }
    }
    // Check page keywords
    for (const kw of page.keywords) {
      if (lower.includes(kw)) {
        return { intent: 'topic_query', match: page.slug, matchCat: page.categorySlug }
      }
    }
  }

  // Category query
  for (const cat of categoryKnowledge) {
    const titleLower = cat.title.toLowerCase()
    if (lower.includes(titleLower) || fuzzyMatch(lower, titleLower)) {
      return { intent: 'category_query', match: cat.slug }
    }
  }

  // Navigation keywords
  if (lower.includes('show me') || lower.includes('take me') || lower.includes('go to') || lower.includes('navigate')) {
    return { intent: 'navigation' }
  }

  // Recommendation keywords
  if (lower.includes('recommend') || lower.includes('suggest') || lower.includes('where should') || lower.includes('what should')) {
    return { intent: 'recommendation' }
  }

  return { intent: 'unknown' }
}

/* -- Response Generation -- */
function getPageResponse(slug: string, catSlug?: string): string {
  const pages = getPageKnowledge()
  const page = catSlug
    ? pages.find((p) => p.slug === slug && p.categorySlug === catSlug)
    : pages.find((p) => p.slug === slug)
  if (!page) return "I couldn't find that page. Try asking about a specific topic or category."

  const path = detailPath(page.categorySlug, page.slug)
  return `**${page.title}** (${page.categoryTitle})\n\n${page.description.slice(0, 200)}...\n\n[View Page](${path})`
}

function getCategoryResponse(slug: string): string {
  const cat = categoryKnowledge.find((c) => c.slug === slug)
  if (!cat) return "I couldn't find that category."

  const path = categoryPath(cat.slug)
  return `**${cat.emoji} ${cat.title}**\n\n${cat.description}\n\nThis category has ${cat.pageCount} pages.\n\n[View Category](${path})`
}

function getNavigationResponse(message: string): string {
  const lower = message.toLowerCase()

  // Try topic map first
  for (const [keyword, loc] of Object.entries(getTopicMap())) {
    if (lower.includes(keyword)) {
      return getPageResponse(loc.pageSlug, loc.categorySlug)
    }
  }

  // Try category names
  for (const cat of categoryKnowledge) {
    if (lower.includes(cat.title.toLowerCase())) {
      return getCategoryResponse(cat.slug)
    }
  }

  return "I can help you navigate! Try asking about a topic like \"neural networks\", \"data engineering\", or \"cloud platforms\". You can also ask about any of our 29 categories."
}

function getRecommendation(message: string): string {
  const lower = message.toLowerCase()

  if (lower.includes('beginner') || lower.includes('start') || lower.includes('new')) {
    return "For beginners, I'd recommend starting with:\n\n1. **AI/ML Foundations** — core ML paradigms and algorithms\n2. **Data Engineering** — pipelines, Databricks, Spark\n3. **Analytics & BI** — dashboards and semantic layers\n\n[Start with AI/ML Foundations](/category/aiml-foundations)"
  }

  if (lower.includes('deep learning') || lower.includes('neural') || lower.includes('ai')) {
    return "For deep learning and AI, check out:\n\n1. **AI/ML Foundations** — neural networks, supervised/unsupervised learning\n2. **Generative AI** — LLMs, RAG, fine-tuning\n3. **AI Agents** — chatbots, NLU, autonomous systems\n\n[View Generative AI](/category/generative-ai)"
  }

  if (lower.includes('data') || lower.includes('pipeline')) {
    return "For data & pipeline work, explore:\n\n1. **Data Engineering** — Databricks, Snowflake, Spark pipelines\n2. **Analytics & BI** — dashboards and insights\n3. **Data Science** — statistics, modeling, experimentation\n\n[View Data Engineering](/category/data-engineering)"
  }

  if (lower.includes('cloud') || lower.includes('infrastructure') || lower.includes('devops')) {
    return "For cloud & infrastructure, explore:\n\n1. **Cloud Platforms** — AWS, Azure, GCP, multi-cloud\n2. **Architecture** — microservices, events, lakehouse\n3. **Observability** — metrics, logging, tracing\n\n[View Cloud Platforms](/category/cloud-platforms)"
  }

  if (lower.includes('security') || lower.includes('compliance') || lower.includes('governance')) {
    return "For security & governance, explore:\n\n1. **Security & Compliance** — frameworks, privacy, risk\n2. **Data Security** — encryption, masking, access control\n3. **Governance** — policies, standards, controls\n\n[View Security & Compliance](/category/security-compliance)"
  }

  return "Here are some popular starting points:\n\n- **AI/ML Foundations** — core machine learning paradigms\n- **Data Engineering** — Databricks, Spark, pipelines\n- **Generative AI** — LLMs, RAG, fine-tuning\n- **Cloud Platforms** — AWS, Azure, GCP\n\nWhat area interests you most?"
}

function getContextGreeting(currentPath: string): string {
  // Try to match a specific category
  for (const cat of categoryKnowledge) {
    if (currentPath.includes(`/category/${cat.slug}/`)) {
      return `I see you're exploring **${cat.title}**! I can help explain topics, find related pages, or recommend next steps.`
    }
    if (currentPath.includes(`/category/${cat.slug}`)) {
      return `Welcome to **${cat.emoji} ${cat.title}**! This category has ${cat.pageCount} pages. Ask me about any topic or page here.`
    }
  }
  if (currentPath.includes('/category/')) {
    return "Welcome! I can help you navigate StrategyHub's 29 categories and their pages. What topic interests you?"
  }
  return "Welcome to StrategyHub! I can help you find content across 29 categories and 198 detailed pages. What would you like to learn about?"
}

export function getQuickActions(currentPath: string): QuickAction[] {
  // Check if we're on a specific category overview
  for (const cat of categoryKnowledge) {
    if (currentPath === `/category/${cat.slug}` || currentPath === `/category/${cat.slug}/`) {
      return [
        { label: 'Pages', message: `What pages are in ${cat.title}?` },
        { label: 'Recommend', message: 'Where should I start?' },
        { label: 'Categories', message: 'How many categories are there?' },
      ]
    }
    // On a detail page within this category
    if (currentPath.includes(`/category/${cat.slug}/`)) {
      return [
        { label: 'Topics', message: 'What topics can I learn about here?' },
        { label: 'Related', message: `What else is in ${cat.title}?` },
        { label: 'About', message: 'What is StrategyHub?' },
      ]
    }
  }
  return [
    { label: 'Explore', message: 'What can I learn on StrategyHub?' },
    { label: 'AI/ML', message: 'Show me AI/ML content' },
    { label: 'Categories', message: 'How many categories are there?' },
  ]
}

export async function generateResponse(
  message: string,
  currentPath: string,
): Promise<string> {
  // Simulate typing delay
  await new Promise((r) => setTimeout(r, 400 + Math.random() * 800))

  const sanitized = message.slice(0, MAX_MESSAGE_LENGTH).trim()
  const { intent, match, matchCat } = detectIntent(sanitized)

  switch (intent) {
    case 'greeting':
      return getContextGreeting(currentPath)
    case 'page_query':
      return match ? getPageResponse(match, matchCat) : "I couldn't find that page. Try a specific topic name."
    case 'topic_query':
      return match ? getPageResponse(match, matchCat) : "Could you be more specific? Try asking about a topic like \"supervised learning\" or \"data pipelines\"."
    case 'category_query':
      return match ? getCategoryResponse(match) : "I couldn't find that category."
    case 'navigation':
      return getNavigationResponse(sanitized)
    case 'platform_info':
      return match ? quickAnswers[match] ?? "I have information about StrategyHub. What would you like to know?" : "I have information about StrategyHub. What would you like to know?"
    case 'recommendation':
      return getRecommendation(sanitized)
    default:
      return "I can help with finding pages, explaining topics, navigating categories, and recommending content. Try asking:\n\n- \"What is supervised learning?\"\n- \"Show me data engineering\"\n- \"How many categories are there?\"\n- \"Where should I start?\""
  }
}
