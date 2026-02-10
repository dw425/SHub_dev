import type { Domain } from '@/types'

export const domains: Domain[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    emoji: '🧠',
    categoryIds: [1, 4, 5, 6, 19, 23],
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    emoji: '📊',
    categoryIds: [2, 3, 7, 25],
  },
  {
    id: 'cloud-infra',
    name: 'Cloud & Infrastructure',
    emoji: '☁️',
    categoryIds: [12, 15, 16, 14, 9, 27],
  },
  {
    id: 'security-governance',
    name: 'Security & Governance',
    emoji: '🔐',
    categoryIds: [11, 26, 24],
  },
  {
    id: 'delivery-ops',
    name: 'Delivery & Operations',
    emoji: '🚀',
    categoryIds: [8, 10, 13, 18, 29],
  },
  {
    id: 'strategy-transformation',
    name: 'Strategy & Transformation',
    emoji: '🎯',
    categoryIds: [17, 20, 21, 22, 28],
  },
]
