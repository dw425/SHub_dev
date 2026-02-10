import { Link } from 'react-router-dom'

export function Header() {
  return (
    <>
      <style>{`
        .sh-header-stats {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        @media (max-width: 768px) {
          .sh-header-stats { display: none; }
        }
      `}</style>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '60px',
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Left: Logo */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 900,
            letterSpacing: '-0.5px',
            color: 'var(--text)',
          }}
        >
          <span style={{ color: '#FF9900' }}>STRATEGY</span>HUB
        </Link>

        {/* Center: Tagline */}
        <span
          style={{
            fontSize: '13px',
            color: 'var(--text-dim)',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Enterprise Technology Knowledge Base
        </span>

        {/* Right: Quick Pulse button + stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link
            to="/quick-pulse"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 18px',
              background: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '12px',
              borderRadius: '10px',
              textDecoration: 'none',
              border: 'none',
              boxShadow: '0 2px 12px rgba(6, 182, 212, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(6, 182, 212, 0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(6, 182, 212, 0.3)'
            }}
          >
            <span role="img" aria-label="lightning">&#9889;</span> Quick Pulse
          </Link>

          <div className="sh-header-stats">
            <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
              <strong style={{ color: 'var(--text)' }}>26</strong> Categories
            </span>
            <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
              <strong style={{ color: 'var(--text)' }}>200+</strong> Pages
            </span>
          </div>
        </div>
      </header>
    </>
  )
}
