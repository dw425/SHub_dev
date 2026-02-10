import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/layouts/RootLayout'
import { CategoryLayout } from '@/components/category/CategoryLayout'

const HomePage = lazy(() => import('@/pages/HomePage'))
const CategoryOverviewPage = lazy(() => import('@/pages/CategoryOverviewPage'))
const DetailPage = lazy(() => import('@/pages/DetailPage'))
const QuickPulseHub = lazy(() => import('@/pages/QuickPulseHub'))

function Loading() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      color: '#7a7a90',
      fontSize: '14px',
      fontFamily: "'Inter', sans-serif",
    }}>
      Loading...
    </div>
  )
}

export function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Homepage layout (orbs, ripples, homepage header/footer) */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/quick-pulse" element={<QuickPulseHub />} />
        </Route>

        {/* Category layout (sidebar, breadcrumb header) */}
        <Route path="/category/:categorySlug" element={<CategoryLayout />}>
          <Route index element={<CategoryOverviewPage />} />
          <Route path=":pageSlug" element={<DetailPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
