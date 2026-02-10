/** Category accent colors — exact from original HTML */
export const CATEGORY_COLORS: Record<number, string> = {
  1: '#3B82F6',
  2: '#10B981',
  3: '#F59E0B',
  4: '#8B5CF6',
  5: '#EC4899',
  6: '#06B6D4',
  7: '#14B8A6',
  8: '#EF4444',
  9: '#6366F1',
  10: '#84CC16',
  11: '#059669',
  12: '#0EA5E9',
  13: '#7C3AED',
  14: '#22D3EE',
  15: '#FACC15',
  16: '#FB923C',
  17: '#4ADE80',
  18: '#C084FC',
  19: '#2DD4BF',
  20: '#F472B6',
  21: '#818CF8',
  22: '#FB7185',
  23: '#34D399',
  24: '#A78BFA',
  25: '#FCD34D',
  26: '#67E8F9',
  27: '#F97316',
  28: '#38BDF8',
  29: '#A3E635',
}

/** Featured card colors */
export const FEATURED_COLORS: Record<number, string> = {
  1: '#EC4899',
  2: '#06B6D4',
  3: '#8B5CF6',
  4: '#10B981',
  5: '#3B82F6',
  6: '#F59E0B',
}

export function getCategoryColor(catNum: number): string {
  return CATEGORY_COLORS[catNum] ?? '#FF9900'
}
