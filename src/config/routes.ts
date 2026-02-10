export const ROUTES = {
  HOME: '/',
  QUICK_PULSE: '/quick-pulse',
  CATEGORY: '/category/:categorySlug',
  DETAIL: '/category/:categorySlug/:pageSlug',
} as const

export function categoryPath(slug: string) {
  return `/category/${slug}`
}

export function detailPath(categorySlug: string, pageSlug: string) {
  return `/category/${categorySlug}/${pageSlug}`
}
