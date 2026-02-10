import { useState } from 'react'
import { Link } from 'react-router-dom'
import { featured } from '@/data/featured'
import { FEATURED_COLORS } from '@/config/theme'

function FeaturedCard({
  title,
  description,
  icon,
  badge,
  link,
  colorIndex,
}: {
  title: string
  description: string
  icon: string
  badge?: string
  link: string
  colorIndex: number
}) {
  const [hovered, setHovered] = useState(false)
  const color = FEATURED_COLORS[colorIndex] ?? '#FF9900'

  return (
    <Link
      to={link}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        background: 'var(--surface-light)',
        border: `1px solid ${hovered ? color : 'var(--border)'}`,
        borderRadius: '20px',
        padding: '28px 24px',
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
          height: hovered ? '4px' : '0px',
          background: color,
          transition: 'height 0.3s',
        }}
      />

      {/* Badge */}
      {badge && (
        <span
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            fontSize: '10px',
            fontWeight: 700,
            padding: '4px 10px',
            borderRadius: '20px',
            background: `${color}22`,
            color,
            border: `1px solid ${color}44`,
          }}
        >
          {badge}
        </span>
      )}

      {/* Icon */}
      <div style={{ fontSize: '40px', marginBottom: '16px' }}>{icon}</div>

      {/* Title */}
      <h4
        style={{
          fontSize: '16px',
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: '8px',
        }}
      >
        {title}
      </h4>

      {/* Description */}
      <p
        style={{
          fontSize: '12px',
          color: 'var(--text-dim)',
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
    </Link>
  )
}

export function FeaturedDeepDives() {
  return (
    <section style={{ marginBottom: '60px' }}>
      {/* Scoped responsive styles */}
      <style>{`
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }
        @media (max-width: 1400px) {
          .featured-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .featured-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .featured-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: '8px',
          }}
        >
          Featured Deep Dives
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-dim)' }}>
          Most popular guides and frameworks
        </p>
      </div>

      {/* 6-column grid */}
      <div className="featured-grid">
        {featured.map((item) => (
          <FeaturedCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            badge={item.badge}
            link={item.link}
            colorIndex={item.colorIndex}
          />
        ))}
      </div>
    </section>
  )
}
