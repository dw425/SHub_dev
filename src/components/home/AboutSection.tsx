export function AboutSection() {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        marginBottom: '60px',
      }}
    >
      {/* Card 1 */}
      <div
        style={{
          background: 'var(--surface-light)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '32px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,153,0,0.1), transparent)',
            pointerEvents: 'none',
          }}
        />
        <h3
          style={{
            fontSize: '20px',
            fontWeight: 700,
            marginBottom: '12px',
            position: 'relative',
          }}
        >
          <span role="img" aria-label="target" style={{ marginRight: '8px' }}>
            🎯
          </span>
          What is Strategy Hub?
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-dim)',
            lineHeight: 1.7,
            position: 'relative',
          }}
        >
          A <strong style={{ color: '#fff' }}>comprehensive Data &amp; AI knowledge base</strong>{' '}
          covering 29 technology categories across 8 domains. From foundational AI/ML concepts to
          advanced cloud architecture, security frameworks, and digital transformation strategies
          — everything enterprise technology leaders need in one place.
        </p>
      </div>

      {/* Card 2 */}
      <div
        style={{
          background: 'var(--surface-light)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '32px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,153,0,0.1), transparent)',
            pointerEvents: 'none',
          }}
        />
        <h3
          style={{
            fontSize: '20px',
            fontWeight: 700,
            marginBottom: '12px',
            position: 'relative',
          }}
        >
          <span role="img" aria-label="books" style={{ marginRight: '8px' }}>
            📚
          </span>
          Why We Built This
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-dim)',
            lineHeight: 1.7,
            position: 'relative',
          }}
        >
          We built Strategy Hub to{' '}
          <strong style={{ color: '#fff' }}>
            consolidate thousands of hours of research
          </strong>{' '}
          into actionable, structured deep dives. Instead of scattered bookmarks and outdated
          PDFs, get curated content that connects the dots between technologies, vendors,
          frameworks, and real-world implementation patterns.
        </p>
      </div>
    </section>
  )
}
