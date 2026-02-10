import { useParams } from 'react-router-dom'
import { getCategoryBySlug } from '@/data'

export function useCategory() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined
  return { category, categorySlug }
}
