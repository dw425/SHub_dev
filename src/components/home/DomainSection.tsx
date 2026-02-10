import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/categories'
import { domains } from '@/data/domains'
import { CATEGORY_COLORS } from '@/config/theme'
import { categoryPath } from '@/config/routes'

function CategoryCard({
  number,
  title,
  slug,
  emoji,
  description,
  pageCount,
}: {
  number: number
  title: string
  slug: string
  emoji: string
  description: string
  pageCount: number
}) {
  const [hovered, setHovered] = useState(false)
  const color = CATEGORY_COLORS[number] ?? '#FF9900'

  return (
    <Link
      to={categoryPath(slug)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        background: 'linear-gradient(135deg, var(--surface-light), var(--surface))',
        border: `1px solid ${hovered ? color : 'var(--border)'}`,
        borderRadius: '16px',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 40px rgba(0,0,0,0.3), 0 0 20px ${color}22` : 'none',
      }}
    >
      {/* Top color bar on hover */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: hovered ? '3px' : '0px',
          background: color,
          transition: 'height 0.3s',
        }}
      />

      {/* Top row: emoji + number */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '12px',
        }}
      >
        <span style={{ fontSize: '32px' }}>{emoji}</span>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--text-dim)',
            background: 'rgba(255,255,255,0.05)',
            padding: '4px 8px',
            borderRadius: '8px',
          }}
        >
          #{String(number).padStart(2, '0')}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '14px',
          fontWeight: 700,
          marginBottom: '6px',
          color: 'var(--text)',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '11px',
          color: 'var(--text-dim)',
          lineHeight: 1.4,
          marginBottom: '14px',
        }}
      >
        {description}
      </p>

      {/* Meta: page count + arrow */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '18px', fontWeight: 700, color }}>
          {pageCount} <span style={{ fontSize: '10px', fontWeight: 400, color: 'var(--text-dim)' }}>pages</span>
        </span>
        <span
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: `1px solid ${hovered ? color : 'var(--border)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: hovered ? color : 'var(--text-dim)',
            transition: 'border-color 0.3s, color 0.3s',
          }}
        >
          &rarr;
        </span>
      </div>
    </Link>
  )
}

export function DomainSection() {
  return (
    <section>
      {domains.map((domain) => {
        const domainCategories = domain.categoryIds
          .map((id) => categories.find((c) => c.number === id))
          .filter(Boolean) as typeof categories

        return (
          <div key={domain.id} style={{ marginBottom: '48px' }}>
            {/* Domain header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
              }}
            >
              <span
                style={{
                  fontSize: '28px',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--surface-light)',
                  borderRadius: '14px',
                  border: '1px solid var(--border)',
                }}
              >
                {domain.emoji}
              </span>
              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  color: 'var(--text)',
                }}
              >
                {domain.name}
              </h2>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--text-dim)',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  border: '1px solid var(--border)',
                }}
              >
                {domainCategories.length} categories
              </span>
            </div>

            {/* Category cards grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '16px',
              }}
            >
              {domainCategories.map((cat) => (
                <CategoryCard
                  key={cat.number}
                  number={cat.number}
                  title={cat.title}
                  slug={cat.slug}
                  emoji={cat.emoji}
                  description={cat.description}
                  pageCount={cat.pageCount}
                />
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
