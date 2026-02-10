import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '20px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}
    >
      {/* Left: Logo */}
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: 900,
          letterSpacing: '-0.5px',
          color: 'var(--text)',
        }}
      >
        <span style={{ color: '#FF9900' }}>STRATEGY</span>HUB
      </Link>

      {/* Right: Version info */}
      <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
        Version 2.0 &bull; 26 Categories &bull; 200+ Pages
      </span>
    </footer>
  )
}
