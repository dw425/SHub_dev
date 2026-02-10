import { Link, useParams } from 'react-router-dom'
import { getCategoryBySlug } from '@/data'
import { getPages } from '@/data/pageRegistry'
import { detailPath } from '@/config/routes'

export default function CategoryOverviewPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined

  if (!category) return null

  const pages = getPages(category.slug)
  if (pages.length === 0) {
    return (
      <div style={{ padding: '60px', textAlign: 'center', color: 'var(--sh-text-secondary)' }}>
        <h2 style={{ color: 'var(--sh-text)', marginBottom: '12px' }}>Coming Soon</h2>
        <p>Category overview content is being built.</p>
        <Link to="/" style={{ color: '#1d4ed8', textDecoration: 'none', marginTop: '20px', display: 'inline-block' }}>&#8592; Back to Home</Link>
      </div>
    )
  }

  /* Build overview data from pages */
  const data = {
    badge: `${category.emoji} Category ${category.number}`,
    title: category.title,
    description: category.description,
    metrics: [
      { value: String(pages.length), label: 'Detail Pages' },
      { value: String(pages.reduce((n, p) => n + p.tools.items.length, 0)), label: 'Tools Covered' },
      { value: String(pages.reduce((n, p) => n + p.concepts.cards.length, 0)), label: 'Key Concepts' },
      { value: '100%', label: 'Coverage' },
    ],
    quickStats: pages.slice(0, 4).map((p) => ({ icon: p.agent.avatar || '📄', value: p.badge.split(' ').pop() || '', label: p.title })),
    paradigms: pages.slice(0, 3).map((p) => ({
      className: p.slug,
      borderColor: p.accentColor || category.color,
      icon: p.agent.avatar || '📄',
      title: p.title,
      subtitle: p.description.slice(0, 60) + '...',
      description: p.description,
      pageSlug: p.slug,
    })),
    pages: pages.map((p, i) => ({
      number: String(i + 1),
      slug: p.slug,
      title: p.title,
      description: p.description,
      tags: p.tools.items.slice(0, 3).map((t) => t.name),
    })),
    tools: pages.flatMap((p) => p.tools.items.slice(0, 1)).slice(0, 8).map((t) => ({
      icon: t.icon,
      name: t.name,
      description: t.vendor,
    })),
    agent: {
      avatar: pages[0]?.agent.avatar || '🤖',
      name: pages[0]?.agent.name || 'Agent',
      role: pages[0]?.agent.role || 'Specialist',
      description: pages[0]?.agent.description || '',
    },
    nextPage: pages[0] ? { title: `${category.number}.1 ${pages[0].title}`, slug: pages[0].slug } : undefined,
  }

  const catColor = category.color
  const catDark = '#1d4ed8'

  return (
    <>
      {/* Hero */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '32px',
        marginBottom: '32px',
        padding: '28px',
        background: 'var(--sh-surface)',
        border: '1px solid var(--sh-border)',
        borderRadius: '16px',
        position: 'relative',
        boxShadow: 'var(--sh-shadow)',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${catColor}, ${catDark})`, borderRadius: '16px 16px 0 0' }} />
        <div>
          <span style={{ display: 'inline-flex', background: `${catColor}12`, border: `1px solid ${catColor}40`, padding: '5px 14px', borderRadius: '9999px', fontSize: '12px', color: catColor, marginBottom: '12px', fontWeight: 600 }}>
            {data.badge}
          </span>
          <h1 style={{ fontSize: '28px', marginBottom: '8px', color: 'var(--sh-text)' }}>{data.title}</h1>
          <p style={{ fontSize: '13px', color: 'var(--sh-text-secondary)', lineHeight: 1.6 }}>{data.description}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {data.metrics.map((m, i) => (
            <div key={i} style={{ background: 'var(--sh-surface-alt)', border: '1px solid var(--sh-border)', borderRadius: '12px', padding: '16px', textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: catColor, borderRadius: '0 0 12px 12px' }} />
              <div style={{ fontSize: '24px', fontWeight: 700, color: catColor }}>{m.value}</div>
              <div style={{ fontSize: '10px', color: 'var(--sh-text-muted)', marginTop: '4px' }}>{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '24px' }}>
        {data.quickStats.map((s, i) => (
          <div key={i} style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '10px', padding: '16px', textAlign: 'center', boxShadow: 'var(--sh-shadow-sm)' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>{s.icon}</div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: catColor, marginBottom: '4px' }}>{s.value}</div>
            <div style={{ fontSize: '10px', color: 'var(--sh-text-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Machine Learning Paradigms */}
      <ModuleSection icon="🎯" title="Machine Learning Paradigms" subtitle="The three fundamental approaches to training intelligent systems" color={catColor}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '20px' }}>
          {data.paradigms.map((p) => (
            <div key={p.className} style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '12px', padding: '20px', position: 'relative', overflow: 'hidden', boxShadow: 'var(--sh-shadow)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: p.borderColor }} />
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{p.icon}</div>
              <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px', color: 'var(--sh-text)' }}>{p.title}</div>
              <div style={{ fontSize: '11px', color: 'var(--sh-text-muted)', marginBottom: '12px' }}>{p.subtitle}</div>
              <div style={{ fontSize: '11px', color: 'var(--sh-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>{p.description}</div>
              <Link to={detailPath(category.slug, p.pageSlug)} style={{ fontSize: '11px', color: '#1d4ed8', textDecoration: 'none', fontWeight: 600 }}>
                Deep Dive &#8594;
              </Link>
            </div>
          ))}
        </div>
      </ModuleSection>

      {/* Deep-Dive Pages */}
      <ModuleSection icon="📚" title="Deep-Dive Pages" subtitle="Comprehensive guides for each AI/ML foundation topic" color={catColor}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
          {data.pages.map((page) => (
            <Link key={page.slug} to={detailPath(category.slug, page.slug)} style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '12px', padding: '20px', position: 'relative', textDecoration: 'none', color: 'inherit', display: 'block', transition: 'all 0.2s', boxShadow: 'var(--sh-shadow)' }}>
              <div style={{ width: '32px', height: '32px', background: `${catColor}12`, border: `1px solid ${catColor}40`, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: catColor, marginBottom: '12px' }}>
                {page.number}
              </div>
              <h3 style={{ fontSize: '15px', marginBottom: '6px', color: 'var(--sh-text)' }}>{page.title}</h3>
              <p style={{ fontSize: '11px', color: 'var(--sh-text-secondary)', lineHeight: 1.5, marginBottom: '12px' }}>{page.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {page.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: '9px', padding: '3px 8px', background: 'var(--sh-surface-hover)', border: '1px solid var(--sh-border)', borderRadius: '4px', color: 'var(--sh-text-secondary)' }}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </ModuleSection>

      {/* Key Frameworks & Tools */}
      <ModuleSection icon="🛠️" title="Key Frameworks & Tools" subtitle="Essential technologies for ML development" color={catColor}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
          {data.tools.map((t) => (
            <div key={t.name} style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '10px', padding: '14px', textAlign: 'center', transition: 'all 0.2s', boxShadow: 'var(--sh-shadow-sm)' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{t.icon}</div>
              <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: 'var(--sh-text)' }}>{t.name}</div>
              <div style={{ fontSize: '9px', color: 'var(--sh-text-muted)' }}>{t.description}</div>
            </div>
          ))}
        </div>
      </ModuleSection>

      {/* Agent Preview */}
      <ModuleSection icon="🤖" title="Agent This" subtitle="AI-powered assistant for this category" color={catColor}>
        <div style={{ background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '12px', padding: '24px', display: 'flex', gap: '20px', alignItems: 'center', boxShadow: 'var(--sh-shadow)' }}>
          <div style={{ width: '64px', height: '64px', background: `linear-gradient(135deg, ${catColor}, ${catDark})`, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', flexShrink: 0 }}>
            {data.agent.avatar}
          </div>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px', color: 'var(--sh-text)' }}>{data.agent.name}</div>
            <div style={{ fontSize: '11px', color: catColor, marginBottom: '8px', fontWeight: 600 }}>{data.agent.role}</div>
            <div style={{ fontSize: '12px', color: 'var(--sh-text-secondary)', lineHeight: 1.5 }}>{data.agent.description}</div>
          </div>
        </div>
      </ModuleSection>

      {/* Footer Nav */}
      <footer style={{ marginTop: '32px', padding: '20px 0', borderTop: '1px solid var(--sh-border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ visibility: 'hidden' }}>&nbsp;</div>
          <div style={{ fontSize: '12px', color: 'var(--sh-text-muted)' }}>STRATEGY<span style={{ color: '#1d4ed8' }}>HUB</span></div>
          {data.nextPage && (
            <Link to={detailPath(category.slug, data.nextPage.slug)} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'var(--sh-text-body)', padding: '12px 20px', background: 'var(--sh-surface)', border: '1px solid var(--sh-border)', borderRadius: '10px', transition: 'all 0.2s', boxShadow: 'var(--sh-shadow-sm)' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '10px', color: 'var(--sh-text-muted)' }}>Next Page &#8594;</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--sh-text)' }}>{data.nextPage.title}</div>
              </div>
            </Link>
          )}
        </div>
      </footer>
    </>
  )
}

/* ── Module Section wrapper ── */
function ModuleSection({ icon, title, subtitle, color, children }: { icon: string; title: string; subtitle: string; color: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '32px', paddingTop: '24px', borderTop: '1px solid var(--sh-border)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
        <div style={{ width: '52px', height: '52px', background: `${color}12`, border: `2px solid ${color}40`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px' }}>
          {icon}
        </div>
        <div>
          <h2 style={{ fontSize: '20px', marginBottom: '4px', color: 'var(--sh-text)' }}>{title}</h2>
          <p style={{ fontSize: '12px', color: 'var(--sh-text-muted)' }}>{subtitle}</p>
        </div>
      </div>
      {children}
    </section>
  )
}
