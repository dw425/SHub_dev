import { Link } from 'react-router-dom'

export function HeroSection() {
  return (
    <section
      style={{
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '90px 48px 40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <span
          style={{
            display: 'block',
            fontSize: '84px',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-4px',
            color: 'var(--text)',
          }}
        >
          Master the
        </span>
        <span
          style={{
            display: 'block',
            fontSize: '84px',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-4px',
            background: 'linear-gradient(135deg, #FF9900, #FFB800, #EC4899, #8B5CF6, #06B6D4)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradientShift 6s ease infinite',
          }}
        >
          Data &amp; AI Stack
        </span>
      </h1>

      <p
        style={{
          fontSize: '18px',
          color: '#7a7a90',
          maxWidth: '620px',
          margin: '24px auto 0',
          lineHeight: 1.6,
        }}
      >
        The most comprehensive enterprise technology knowledge base. Deep dives into AI/ML,
        data engineering, cloud architecture, security, and digital transformation.
      </p>

      {/* CTA Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          marginTop: '36px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Link
          to="/quick-pulse"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 28px',
            background: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '15px',
            borderRadius: '14px',
            textDecoration: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 20px rgba(6, 182, 212, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 28px rgba(6, 182, 212, 0.45)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(6, 182, 212, 0.3)'
          }}
        >
          <span role="img" aria-label="lightning">&#9889;</span> Quick Pulse Hub
        </Link>

        <Link
          to="/category/generative-ai"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 28px',
            background: 'linear-gradient(135deg, #FF9900, #FFB800)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '15px',
            borderRadius: '14px',
            textDecoration: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 20px rgba(255, 153, 0, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 28px rgba(255, 153, 0, 0.45)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 153, 0, 0.3)'
          }}
        >
          <span role="img" aria-label="sparkles">&#10024;</span> Explore Gen AI
        </Link>

        <a
          href="#categories"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 28px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            color: '#7a7a90',
            fontWeight: 600,
            fontSize: '15px',
            borderRadius: '14px',
            textDecoration: 'none',
            border: '1px solid var(--border)',
            cursor: 'pointer',
            transition: 'transform 0.2s, color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.color = '#fff'
            e.currentTarget.style.borderColor = '#4a4a5e'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.color = '#7a7a90'
            e.currentTarget.style.borderColor = 'var(--border)'
          }}
        >
          Browse All Categories
        </a>
      </div>

      {/* Stats Row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          marginTop: '48px',
          flexWrap: 'wrap',
        }}
      >
        {[
          { value: '29', label: 'Categories' },
          { value: '250+', label: 'Deep Dives' },
          { value: '1200+', label: 'Topics' },
          { value: '8', label: 'Domains' },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '48px',
                fontWeight: 900,
                background: 'linear-gradient(180deg, #ffffff, #4a4a5e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#7a7a90',
                marginTop: '8px',
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
