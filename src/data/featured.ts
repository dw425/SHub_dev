import type { FeaturedItem } from '@/types'

export const featured: FeaturedItem[] = [
  {
    id: 1,
    title: 'RAG Systems',
    description: 'Production-ready retrieval pipelines',
    icon: '🔍',
    badge: '🔥 Popular',
    link: '/category/generative-ai/rag-systems',
    colorIndex: 1,
  },
  {
    id: 2,
    title: 'Agentic AI',
    description: 'Autonomous AI systems & workflows',
    icon: '🤖',
    badge: '✨ New',
    link: '/category/emerging-technologies/agentic-ai',
    colorIndex: 2,
  },
  {
    id: 3,
    title: 'Vector Databases',
    description: 'Embeddings & semantic search',
    icon: '🗃️',
    link: '/category/knowledge-management/vector-databases',
    colorIndex: 3,
  },
  {
    id: 4,
    title: 'Databricks Platform',
    description: 'Unified lakehouse architecture',
    icon: '🧱',
    link: '/category/data-engineering/databricks',
    colorIndex: 4,
  },
  {
    id: 5,
    title: 'Foundation Models',
    description: 'GPT, Claude, Llama deep dive',
    icon: '🧠',
    link: '/category/emerging-technologies/foundation-models',
    colorIndex: 5,
  },
  {
    id: 6,
    title: 'Security Research',
    description: 'Zero Trust & threat landscape',
    icon: '🔒',
    link: '/category/white-papers-research/security-governance',
    colorIndex: 6,
  },
]
