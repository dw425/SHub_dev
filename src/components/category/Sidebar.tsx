import { Link, useParams } from 'react-router-dom'
import type { CategoryMeta } from '@/types'
import { categoryPath, detailPath } from '@/config/routes'

export interface SidebarItem {
  icon: string
  label: string
  slug: string
}

interface SidebarProps {
  category: CategoryMeta
  pages: SidebarItem[]
  accentColor?: string
}

export function Sidebar({ category, pages, accentColor }: SidebarProps) {
  const { pageSlug } = useParams<{ pageSlug: string }>()
  const isOverview = !pageSlug
  const color = accentColor ?? category.color

  return (
    <>
      <style>{`
        .sh-sidebar { position: fixed; top: 80px; left: 0; width: 260px; height: calc(100vh - 80px); background: var(--sh-surface); border-right: 1px solid var(--sh-border); overflow-y: auto; z-index: 100; padding: 24px 0; }
        .sh-sidebar-title { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; padding: 0 24px; margin-bottom: 8px; font-weight: 600; }
        .sh-sidebar-nav { list-style: none; }
        .sh-sidebar-nav a { display: flex; align-items: center; gap: 8px; padding: 10px 24px; color: var(--sh-text-body); text-decoration: none; font-size: 12px; border-left: 3px solid transparent; transition: all 0.2s; }
        .sh-sidebar-nav a:hover { background: var(--sh-surface-hover); color: var(--sh-text); }
        .sh-sidebar-nav .nav-icon { font-size: 14px; width: 24px; text-align: center; }
        @media (max-width: 1024px) { .sh-sidebar { display: none; } }
      `}</style>
      <aside className="sh-sidebar">
        <div style={{ marginBottom: '24px' }}>
          <div className="sh-sidebar-title" style={{ color }}>
            {category.emoji} Category {category.number}
          </div>
          <ul className="sh-sidebar-nav">
            <li>
              <Link
                to={categoryPath(category.slug)}
                style={isOverview ? {
                  background: `${color}12`,
                  color,
                  borderLeftColor: color,
                  fontWeight: 600,
                } : undefined}
              >
                <span className="nav-icon">🏠</span> Overview
              </Link>
            </li>
            {pages.map((page) => {
              const isActive = pageSlug === page.slug
              return (
                <li key={page.slug}>
                  <Link
                    to={detailPath(category.slug, page.slug)}
                    style={isActive ? {
                      background: `${color}12`,
                      color,
                      borderLeftColor: color,
                      fontWeight: 600,
                    } : undefined}
                  >
                    <span className="nav-icon">{page.icon}</span> {page.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </>
  )
}
