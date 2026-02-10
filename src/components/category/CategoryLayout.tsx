import { Outlet, Link, useParams } from 'react-router-dom'
import { getCategoryBySlug } from '@/data'
import { Sidebar } from './Sidebar'
import type { SidebarItem } from './Sidebar'
import { categoryPath } from '@/config/routes'
import { useTheme } from '@/stores/themeStore'
import { SearchBar } from './SearchBar'
import { ChatWidget } from '@/components/chat/ChatWidget'
import { getPages } from '@/data/pageRegistry'

/* ── "What we do" mega menu data (matches marketplace) ── */
const WHAT_WE_DO = [
  { title: 'AI & Analytics', links: [
    { label: 'Generative AI', href: 'https://bpcs.com/genai' },
    { label: 'AI Factory', href: 'https://bpcs.com/genai/ai-factory' },
    { label: 'CampaignIQ', href: 'https://bpcs.com/genai/campaigniq' },
    { label: 'Intelligent SOP', href: 'https://bpcs.com/intelligent-sop' },
    { label: 'Video Analytics', href: 'https://bpcs.com/video-analytics' },
    { label: 'Data Science', href: 'https://bpcs.com/data-science' },
  ]},
  { title: 'Modern Platforms', links: [
    { label: 'Platform Modernization', href: 'https://bpcs.com/data-platform-modernization' },
    { label: 'Lakehouse Optimization', href: 'https://bpcs.com/lakehouse-optimization' },
    { label: 'Cloud & Infrastructure', href: 'https://bpcs.com/cloud-and-infrastructure' },
    { label: 'Data Migration', href: 'https://bpcs.com/data-migration' },
  ]},
  { title: 'Data Management', links: [
    { label: 'Data Governance', href: 'https://bpcs.com/data-governance' },
    { label: 'Data Management', href: 'https://bpcs.com/data-management' },
    { label: 'Data Catalog', href: 'https://bpcs.com/data-management/data-catalog' },
    { label: 'Data Sharing Portal', href: 'https://bpcs.com/data-management/data-sharing-portal' },
    { label: 'TCO Planning', href: 'https://bpcs.com/tco-planning' },
  ]},
  { title: 'App & Strategy', links: [
    { label: 'Application Development', href: 'https://bpcs.com/application-development' },
    { label: 'Productization', href: 'https://bpcs.com/productization' },
    { label: 'Future Proofing', href: 'https://bpcs.com/future-proofing' },
    { label: 'Localization', href: 'https://bpcs.com/localization' },
  ]},
]

/* ── "Databricks" mega menu data (matches marketplace) ── */
const DATABRICKS_MENU = [
  { title: 'Databricks + Blueprint', description: 'Our partnership with Databricks helps organizations unify their data, analytics and AI.', href: 'https://bpcs.com/databricks' },
  { title: 'Data Intelligence Platform', description: 'Unlock the full potential of your data with the Databricks Data Intelligence Platform.', href: 'https://bpcs.com/databricks/data-intelligence' },
  { title: 'Data Migration', description: 'Modernize your data estate and migrate to the Databricks Lakehouse.', href: 'https://bpcs.com/databricks/data-migration' },
  { title: 'Snowflake to Databricks', description: 'Accelerated migration path from Snowflake to the Databricks Lakehouse.', href: 'https://bpcs.com/databricks/accelerated-snowflake-to-databricks-migration' },
  { title: 'SAP + Databricks', description: 'Unlock SAP data for AI and analytics by integrating with the Databricks Lakehouse.', href: 'https://bpcs.com/databricks/sap-databricks' },
  { title: 'Lakehouse Optimizer', description: 'Optimize your Databricks environment for cost, performance, and governance.', href: 'https://bpcs.com/databricks/lakehouse-optimizer' },
  { title: 'Unity Catalog Migration', description: 'Upgrade to Unity Catalog for fine-grained governance across your data and AI assets.', href: 'https://bpcs.com/databricks/unity-catalog-migration' },
  { title: 'Collaborate with Us', description: 'Partner with Blueprint to build and scale Databricks solutions.', href: 'https://bpcs.com/databricks/collaborate-with-us' },
  { title: 'Databricks Workshops', description: 'Hands-on workshops to accelerate your Databricks adoption and skills.', href: 'https://bpcs.com/databricks-workshops' },
]

/* ── Footer link data ── */
const PRODUCT_LINKS = [
  { label: 'Lakehouse Optimizer', href: '/products/lakehouse-optimizer' },
  { label: 'CampaignIQ', href: '/products/campaign-iq' },
  { label: 'ChurnIQ', href: '/products/churn-iq' },
  { label: 'AI Factory', href: '/ai-factory' },
  { label: 'Migration Suite', href: '/migration' },
]
const RESOURCE_LINKS = [
  { label: 'Migration Assessments', href: '/migration' },
  { label: 'Marketplace', href: 'https://dw425.github.io/TMP_remod_v1/' },
  { label: 'Blog', href: 'https://bpcs.com/blog' },
  { label: 'Case Studies', href: 'https://bpcs.com/case-studies' },
]
const COMPANY_LINKS = [
  { label: 'About', href: 'https://bpcs.com/about' },
  { label: 'Careers', href: 'https://bpcs.com/careers' },
  { label: 'Contact', href: 'https://bpcs.com/contact' },
  { label: 'Privacy Policy', href: 'https://bpcs.com/privacy-policy' },
  { label: 'Terms of Service', href: 'https://bpcs.com/terms-of-service' },
]

export function CategoryLayout() {
  const { categorySlug } = useParams<{ categorySlug: string; pageSlug: string }>()
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined
  const { theme, toggle: toggleTheme } = useTheme()

  if (!category) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', color: '#1e293b' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px' }}>Category Not Found</h1>
          <Link to="/" style={{ color: '#1d4ed8', textDecoration: 'none' }}>&#8592; Back to Home</Link>
        </div>
      </div>
    )
  }

  const pages = getPages(category.slug)
  const sidebarPages: SidebarItem[] = pages.map((p, i) => ({
    icon: p.badge.split(' ')[0] || '📄',
    label: `${category.number}.${i + 1} ${p.title}`,
    slug: p.slug,
  }))

  return (
    <>
      {/* ══════════════ Header (exact marketplace Tailwind) ══════════════ */}
      <header className="bg-white fixed top-0 left-0 right-0 z-40 border-b shadow-md" style={{ background: 'var(--sh-surface)', borderColor: 'var(--sh-border)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Logo + Divider + StrategyHub */}
            <div className="flex items-center gap-4">
              <a
                href="https://bpcs.com/"
                title="Blueprint Home"
                className="flex items-center gap-2 group"
              >
                <img
                  src="https://bpcs.com/wp-content/uploads/2021/02/BlueprintLogo_White_Tiles-400x81.png"
                  alt="Blueprint"
                  className="h-8 w-auto blue-logo-filter"
                />
              </a>

              <div className="h-6 w-px mx-2" style={{ background: 'var(--sh-border)' }} />

              <Link
                to="/"
                className="text-lg font-medium tracking-tight hover:text-blueprint-blue transition-colors"
                style={{ color: 'var(--sh-text-muted)' }}
              >
                StrategyHub
              </Link>
            </div>

            {/* Center: Navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden xl:flex items-center gap-8 text-sm font-bold tracking-wide"
              style={{ color: 'var(--sh-text)' }}
            >
              {/* AI-Migration */}
              <Link
                to={categoryPath('aiml-foundations')}
                className="hover:text-blueprint-blue transition-colors flex items-center gap-1"
              >
                AI-Migration <span>+</span>
              </Link>

              {/* What we do — mega dropdown */}
              <div className="group h-20 flex items-center">
                <span className="hover:text-blueprint-blue transition-colors flex items-center gap-1 py-8 cursor-pointer">
                  What we do <span>+</span>
                </span>
                <div className="fixed left-0 top-20 w-full border-t-4 border-blueprint-blue shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" style={{ background: 'var(--sh-surface)' }}>
                  <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-4 gap-8">
                      {WHAT_WE_DO.map((col) => (
                        <div key={col.title} className="flex flex-col gap-4">
                          <h4 className="text-xs uppercase font-bold tracking-wider pb-2" style={{ color: 'var(--sh-text-muted)', borderBottom: '1px solid var(--sh-border)' }}>
                            {col.title}
                          </h4>
                          {col.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              className="hover:text-blueprint-blue transition-colors block text-[15px]"
                              style={{ color: 'var(--sh-text-body)' }}
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Databricks — mega dropdown */}
              <div className="group h-20 flex items-center">
                <span className="hover:text-blueprint-blue transition-colors flex items-center gap-1 py-8 cursor-pointer">
                  Databricks <span>+</span>
                </span>
                <div className="fixed left-0 top-20 w-full border-t-4 border-blueprint-blue shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" style={{ background: 'var(--sh-surface)' }}>
                  <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-3 gap-x-12 gap-y-10">
                      {DATABRICKS_MENU.map((item) => (
                        <div key={item.title} className="flex flex-col">
                          <a
                            href={item.href}
                            className="text-[17px] font-bold hover:text-blueprint-blue transition-colors mb-1"
                            style={{ color: 'var(--sh-text)' }}
                          >
                            {item.title}
                          </a>
                          {item.description && (
                            <p className="text-[13px] leading-relaxed font-normal" style={{ color: 'var(--sh-text-secondary)' }}>
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Work */}
              <a
                href="https://bpcs.com/case-studies"
                className="hover:text-blueprint-blue transition-colors"
              >
                Our Work
              </a>

              {/* Marketplace (swapped from StrategyHub) */}
              <a
                href="https://dw425.github.io/TMP_remod_v1/"
                className="hover:text-blueprint-blue transition-colors"
              >
                Marketplace
              </a>
            </nav>

            {/* Right: Theme + Search + Connect + Cart + Sign In */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 hover:text-blueprint-blue transition-colors"
                style={{ color: 'var(--sh-text-muted)' }}
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <div className="hidden lg:block">
                <SearchBar />
              </div>
              <a
                href="https://bpcs.com/contact"
                className="hidden sm:inline-block bg-blueprint-blue hover:bg-blue-800 text-white text-sm font-bold py-2.5 px-6 transition-colors tracking-wide btn-rounded shadow-sm"
              >
                Connect
              </a>
              <button className="relative p-2 hover:text-blueprint-blue transition-colors" style={{ color: 'var(--sh-text-muted)' }} aria-label="Cart">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </button>
              <a href="#" className="text-sm font-semibold hover:text-blueprint-blue transition-colors whitespace-nowrap" style={{ color: 'var(--sh-text-body)' }}>
                Sign In
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════ Sidebar ══════════════ */}
      <Sidebar category={category} pages={sidebarPages} />

      {/* ══════════════ Main Content ══════════════ */}
      <div className="lg:ml-[260px] mt-20 min-h-[calc(100vh-80px)]" style={{ background: 'var(--sh-bg)' }}>
        <div className="max-w-[1100px] p-8">
          <Outlet />
        </div>
      </div>

      {/* ══════════════ Footer (exact marketplace Tailwind) ══════════════ */}
      <footer className="bg-gray-900 lg:ml-[260px]">
        {/* Main footer grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1: Brand */}
            <div>
              <img
                src="https://bpcs.com/wp-content/uploads/2021/02/BlueprintLogo_White_Tiles-400x81.png"
                alt="Blueprint"
                className="h-7 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Production-ready AI &amp; data solutions built on Databricks. From migration to deployment.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/BlueprintConsulting" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com/BPCSData" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="X (Twitter)">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/blueprint-consulting-services" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Products */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Products
              </h4>
              <ul className="space-y-2.5">
                {PRODUCT_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Resources */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5">
                {RESOURCE_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Company
              </h4>
              <ul className="space-y-2.5">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Blueprint Technologies, LLC. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Built on{' '}
              <a
                href="https://databricks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Databricks
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </>
  )
}
