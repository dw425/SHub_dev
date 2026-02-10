import { Link, useParams } from 'react-router-dom'
import { getCategoryBySlug } from '@/data'
import { getPage } from '@/data/pageRegistry'
import type { PageData } from '@/data/pageTypes'
import { detailPath, categoryPath } from '@/config/routes'

export default function DetailPage() {
  const { categorySlug, pageSlug } = useParams<{ categorySlug: string; pageSlug: string }>()
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined

  if (!category || !pageSlug) return null

  const page = getPage(category.slug, pageSlug)
  if (!page) {
    return (
      <div style={{ padding: '60px', textAlign: 'center', color: 'var(--sh-text-secondary)' }}>
        <h2 style={{ color: 'var(--sh-text)', marginBottom: '12px' }}>Page Not Found</h2>
        <Link to={categoryPath(category.slug)} style={{ color: '#1d4ed8', textDecoration: 'none' }}>&#8592; Back to Category</Link>
      </div>
    )
  }

  const accent = page.accentColor ?? category.color
  const accentLight = page.accentLight ?? '#3b82f6'

  return (
    <>
      <HeroCompact page={page} accent={accent} accentLight={accentLight} />

      {/* Overview */}
      <Module icon="📖" title={page.overview.title} subtitle={page.overview.subtitle} accent={accent}>
        <div style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '12px', padding: '24px', marginBottom: '20px', boxShadow: 'var(--sh-shadow)' }}>
          {page.overview.subsections.map((sub, i) => (
            <div key={i}>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: accent }}>{sub.heading}</h3>
              {sub.paragraphs.map((p, j) => (
                <p key={j} style={{ fontSize: '13px', color: 'var(--sh-text-body)', lineHeight: 1.7, marginBottom: '12px' }}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </Module>

      {/* Concepts */}
      <Module icon="🎯" title={page.concepts.title} subtitle={page.concepts.subtitle} accent={accent}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${page.concepts.columns}, 1fr)`, gap: '16px', marginBottom: '20px' }}>
          {page.concepts.cards.map((card) => (
            <div key={card.className} style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '12px', padding: '20px', position: 'relative', boxShadow: 'var(--sh-shadow)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: card.borderColor, borderRadius: '12px 12px 0 0' }} />
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{card.icon}</div>
              <div style={{ fontSize: card.title.length > 20 ? '15px' : '16px', fontWeight: 700, marginBottom: '6px', color: 'var(--sh-text)' }}>{card.title}</div>
              <div style={{ fontSize: '11px', color: 'var(--sh-text-body)', lineHeight: 1.6, marginBottom: '12px' }}>{card.description}</div>
              <ul style={{ listStyle: 'none' }}>
                {card.examples.map((ex, i) => (
                  <li key={i} style={{ fontSize: '10px', padding: '5px 10px', background: 'var(--sh-surface-alt)', borderRadius: '6px', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--sh-text-body)' }}>
                    <span style={{ color: accent }}>&#8594;</span> {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Module>

      {/* Algorithms */}
      {page.algorithms.type === 'table' ? (
        <AlgoTableSection algo={page.algorithms} accent={accent} />
      ) : (
        <AlgoCardGridSection algo={page.algorithms} accent={accent} />
      )}

      {/* Tools */}
      <Module icon="🛠️" title={page.tools.title} subtitle={page.tools.subtitle} accent={accent}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }}>
          {page.tools.items.map((tool) => (
            <div key={tool.name} style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '10px', padding: '16px', boxShadow: 'var(--sh-shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ width: '36px', height: '36px', background: 'var(--sh-surface-alt)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>{tool.icon}</div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--sh-text)' }}>{tool.name}</div>
                  <div style={{ fontSize: '9px', color: 'var(--sh-text-muted)' }}>{tool.vendor}</div>
                </div>
              </div>
              <div style={{ fontSize: '10px', color: 'var(--sh-text-body)', lineHeight: 1.5, marginBottom: '10px' }}>{tool.description}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {tool.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: '8px', padding: '2px 6px', background: 'var(--sh-surface-hover)', borderRadius: '4px', color: 'var(--sh-text-secondary)' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Module>

      {/* Best Practices */}
      <Module icon="✅" title={page.bestPractices.title} subtitle={page.bestPractices.subtitle} accent={accent}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
          <PracticeCard type="do" items={page.bestPractices.doItems} />
          <PracticeCard type="dont" items={page.bestPractices.dontItems} />
        </div>
      </Module>

      {/* Agent */}
      <Module icon="🤖" title="Agent This" subtitle={`AI-powered assistant for ${page.title.toLowerCase()}`} accent={accent}>
        <AgentSection page={page} accent={accent} accentLight={accentLight} />
      </Module>

      {/* Related */}
      <Module icon="🔗" title="Related Pages" subtitle="Continue learning with these related topics" accent={accent}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {page.relatedPages.map((rp) => (
            <Link key={rp.slug} to={detailPath(category.slug, rp.slug)} style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '10px', padding: '16px', textDecoration: 'none', color: 'inherit', boxShadow: 'var(--sh-shadow-sm)', transition: 'all 0.2s' }}>
              <div style={{ fontSize: '10px', color: accent, marginBottom: '4px', fontWeight: 600 }}>{rp.number}</div>
              <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: 'var(--sh-text)' }}>{rp.title}</div>
              <div style={{ fontSize: '10px', color: 'var(--sh-text-muted)' }}>{rp.description}</div>
            </Link>
          ))}
        </div>
      </Module>

      {/* Footer */}
      <footer style={{ marginTop: '32px', padding: '20px 0', borderTop: '1px solid var(--sh-border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {page.prevPage ? (
            <Link to={page.prevPage.slug ? detailPath(category.slug, page.prevPage.slug) : categoryPath(category.slug)} style={{ textDecoration: 'none', color: 'var(--sh-text-body)', padding: '12px 20px', background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '10px', boxShadow: 'var(--sh-shadow-sm)' }}>
              <div style={{ fontSize: '10px', color: 'var(--sh-text-muted)' }}>&#8592; Previous Page</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--sh-text)' }}>{page.prevPage.title}</div>
            </Link>
          ) : <div />}
          <div style={{ fontSize: '12px', color: 'var(--sh-text-muted)' }}>STRATEGY<span style={{ color: '#1d4ed8' }}>HUB</span></div>
          {page.nextPage ? (
            <Link to={detailPath(category.slug, page.nextPage.slug)} style={{ textDecoration: 'none', color: 'var(--sh-text-body)', padding: '12px 20px', background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '10px', boxShadow: 'var(--sh-shadow-sm)' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '10px', color: 'var(--sh-text-muted)' }}>Next Page &#8594;</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--sh-text)' }}>{page.nextPage.title}</div>
              </div>
            </Link>
          ) : <div />}
        </div>
      </footer>
    </>
  )
}

/* ── Sub-components ── */

function HeroCompact({ page, accent, accentLight }: { page: PageData; accent: string; accentLight: string }) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px', padding: '28px', background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '16px', position: 'relative', boxShadow: 'var(--sh-shadow)' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${accent}, ${accentLight})`, borderRadius: '16px 16px 0 0' }} />
      <div>
        <span style={{ display: 'inline-flex', background: `${accent}12`, border: `1px solid ${accent}40`, padding: '5px 14px', borderRadius: '9999px', fontSize: '12px', color: accent, marginBottom: '12px', fontWeight: 600 }}>{page.badge}</span>
        <h1 style={{ fontSize: '28px', marginBottom: '8px', color: 'var(--sh-text)' }}>{page.title}</h1>
        <p style={{ fontSize: '13px', color: 'var(--sh-text-secondary)', lineHeight: 1.6 }}>{page.description}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {page.metrics.map((m, i) => (
          <div key={i} style={{ background: 'var(--sh-surface-alt)', border: '1px solid var(--sh-border)', borderRadius: '12px', padding: '16px', textAlign: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: accent, borderRadius: '0 0 12px 12px' }} />
            <div style={{ fontSize: '24px', fontWeight: 700, color: accent }}>{m.value}</div>
            <div style={{ fontSize: '10px', color: 'var(--sh-text-muted)', marginTop: '4px' }}>{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Module({ icon, title, subtitle, accent, children }: { icon: string; title: string; subtitle: string; accent: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '32px', paddingTop: '24px', borderTop: '1px solid var(--sh-border)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
        <div style={{ width: '52px', height: '52px', background: `${accent}12`, border: `2px solid ${accent}40`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px' }}>{icon}</div>
        <div>
          <h2 style={{ fontSize: '20px', marginBottom: '4px', color: 'var(--sh-text)' }}>{title}</h2>
          <p style={{ fontSize: '12px', color: 'var(--sh-text-muted)' }}>{subtitle}</p>
        </div>
      </div>
      {children}
    </section>
  )
}

function AlgoTableSection({ algo, accent }: { algo: Extract<PageData['algorithms'], { type: 'table' }>; accent: string }) {
  const tagColors: Record<string, { bg: string; color: string }> = {
    both: { bg: 'rgba(139,92,246,0.1)', color: '#7c3aed' },
    classification: { bg: 'rgba(16,185,129,0.1)', color: '#059669' },
    regression: { bg: 'rgba(59,130,246,0.1)', color: '#2563eb' },
    clustering: { bg: 'rgba(139,92,246,0.1)', color: '#7c3aed' },
    dimensionality: { bg: 'rgba(6,182,212,0.1)', color: '#0891b2' },
    anomaly: { bg: 'rgba(236,72,153,0.1)', color: '#db2777' },
  }
  const cW = { low: '30%', medium: '60%', high: '90%' }
  const cC = { low: '#10B981', medium: '#F59E0B', high: '#EF4444' }

  return (
    <Module icon="🔢" title={algo.title} subtitle={algo.subtitle} accent={accent}>
      <div style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', boxShadow: 'var(--sh-shadow)' }}>
        <div style={{ background: 'var(--sh-surface-alt)', padding: '12px 16px', borderBottom: '1px solid var(--sh-border)' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--sh-text)' }}>Algorithm Comparison Matrix</div>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {algo.headers.map((h) => (
                <th key={h} style={{ background: 'var(--sh-surface-alt)', padding: '10px 12px', textAlign: 'left', fontSize: '10px', fontWeight: 600, color: 'var(--sh-text-secondary)', borderBottom: '1px solid var(--sh-border)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {algo.rows.map((row) => (
              <tr key={row.name}>
                <td style={{ padding: '12px', fontSize: '11px', borderBottom: '1px solid var(--sh-border-light)' }}>
                  <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--sh-text)' }}>
                    <span style={{ fontSize: '16px' }}>{row.icon}</span> {row.name}
                  </div>
                </td>
                <td style={{ padding: '12px', fontSize: '11px', borderBottom: '1px solid var(--sh-border-light)' }}>
                  <span style={{ fontSize: '9px', padding: '2px 8px', borderRadius: '4px', background: tagColors[row.tagClass]?.bg, color: tagColors[row.tagClass]?.color, fontWeight: 500 }}>{row.tagText}</span>
                </td>
                <td style={{ padding: '12px', fontSize: '11px', borderBottom: '1px solid var(--sh-border-light)', color: 'var(--sh-text-body)' }}>{row.bestFor}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid var(--sh-border-light)' }}>
                  <div style={{ height: '6px', background: 'var(--sh-surface-hover)', borderRadius: '3px', overflow: 'hidden', width: '60px' }}>
                    <div style={{ height: '100%', borderRadius: '3px', width: cW[row.complexity], background: cC[row.complexity] }} />
                  </div>
                </td>
                <td style={{ padding: '12px', fontSize: '11px', borderBottom: '1px solid var(--sh-border-light)', color: 'var(--sh-text-body)' }}>{row.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Module>
  )
}

function AlgoCardGridSection({ algo, accent }: { algo: Extract<PageData['algorithms'], { type: 'card-grid' }>; accent: string }) {
  return (
    <Module icon="🔢" title={algo.title} subtitle={algo.subtitle} accent={accent}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
        {algo.cards.map((card) => (
          <div key={card.title} style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '12px', padding: '20px', boxShadow: 'var(--sh-shadow)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid var(--sh-border-light)' }}>
              <div style={{ width: '44px', height: '44px', background: `${accent}12`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>{card.icon}</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--sh-text)' }}>{card.title}</div>
                <div style={{ fontSize: '10px', color: 'var(--sh-text-muted)' }}>{card.subtitle}</div>
              </div>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--sh-text-body)', lineHeight: 1.6, marginBottom: '12px' }}>{card.description}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {card.tags.map((tag) => (
                <span key={tag} style={{ fontSize: '9px', padding: '3px 8px', background: 'var(--sh-surface-hover)', border: '1px solid var(--sh-border)', borderRadius: '4px', color: 'var(--sh-text-secondary)' }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Module>
  )
}

function PracticeCard({ type, items }: { type: 'do' | 'dont'; items: string[] }) {
  const isDo = type === 'do'
  const color = isDo ? '#059669' : '#dc2626'
  const bgColor = isDo ? 'rgba(5,150,105,0.1)' : 'rgba(220,38,38,0.1)'
  const marker = isDo ? '\u2713' : '\u2717'
  return (
    <div style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '12px', padding: '20px', borderLeft: `3px solid ${color}`, boxShadow: 'var(--sh-shadow)' }}>
      <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color, display: 'flex', alignItems: 'center', gap: '8px' }}>
        {marker} {isDo ? "Do's" : "Don'ts"}
      </div>
      <ul style={{ listStyle: 'none' }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: '11px', color: 'var(--sh-text-body)', padding: '6px 0', borderBottom: i < items.length - 1 ? '1px solid var(--sh-border-light)' : 'none', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ color, flexShrink: 0, background: bgColor, borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', marginTop: '1px' }}>{marker}</span> {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function AgentSection({ page, accent, accentLight }: { page: PageData; accent: string; accentLight: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '20px' }}>
      <div style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '12px', padding: '20px', boxShadow: 'var(--sh-shadow)' }}>
        <div style={{ width: '56px', height: '56px', background: `linear-gradient(135deg, ${accent}, ${accentLight})`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '16px' }}>{page.agent.avatar}</div>
        <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px', color: 'var(--sh-text)' }}>{page.agent.name}</div>
        <div style={{ fontSize: '11px', color: accent, marginBottom: '16px', fontWeight: 600 }}>{page.agent.role}</div>
        <div style={{ fontSize: '11px', color: 'var(--sh-text-body)', lineHeight: 1.7, marginBottom: '16px' }}>{page.agent.description}</div>
        <ul style={{ listStyle: 'none' }}>
          {page.agent.capabilities.map((cap, i) => (
            <li key={i} style={{ fontSize: '11px', color: 'var(--sh-text-body)', padding: '6px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: accent }}>&#10022;</span> {cap}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--sh-shadow)' }}>
        <div style={{ display: 'flex', alignItems: 'center', background: 'var(--sh-surface-alt)', borderBottom: '1px solid var(--sh-border)' }}>
          <div style={{ padding: '12px 20px', fontSize: '12px', color: accent, borderBottom: `2px solid ${accent}`, background: `${accent}08`, fontWeight: 600 }}>Agent Definition</div>
          <div style={{ padding: '12px 20px', fontSize: '12px', color: 'var(--sh-text-muted)' }}>Example Task</div>
          <div style={{ marginLeft: 'auto', padding: '12px 20px', fontSize: '11px', color: 'var(--sh-text-muted)', fontFamily: 'monospace' }}>{page.agent.codeFilename}</div>
        </div>
        <pre style={{ padding: '16px', fontFamily: "'Monaco', 'Consolas', monospace", fontSize: '11px', lineHeight: 1.8, background: '#1e293b', overflowX: 'auto', margin: 0, color: '#e2e8f0' }}>{page.agent.code}</pre>
      </div>
    </div>
  )
}
