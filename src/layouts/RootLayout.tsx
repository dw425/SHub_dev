import { Outlet } from 'react-router-dom'
import { Header } from '@/components/composed/Header'
import { Footer } from '@/components/composed/Footer'

/* ── Ripple ring colors ── */
const RIPPLES = [
  {
    top: '10%',
    left: '25%',
    color: 'rgba(255,153,0,0.08)',
    delay: '0s',
    duration: '6s',
  },
  {
    top: '15%',
    left: '70%',
    color: 'rgba(139,92,246,0.08)',
    delay: '1.2s',
    duration: '7s',
  },
  {
    top: '40%',
    left: '20%',
    color: 'rgba(6,182,212,0.08)',
    delay: '0.6s',
    duration: '5.5s',
  },
  {
    top: '50%',
    left: '75%',
    color: 'rgba(236,72,153,0.08)',
    delay: '2.1s',
    duration: '6.5s',
  },
  {
    top: '75%',
    left: '35%',
    color: 'rgba(16,185,129,0.08)',
    delay: '0.9s',
    duration: '6s',
  },
  {
    top: '85%',
    left: '65%',
    color: 'rgba(59,130,246,0.08)',
    delay: '1.8s',
    duration: '5.5s',
  },
]

export function RootLayout() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* ── Gradient Orbs ── */}
      <div
        style={{
          position: 'fixed',
          top: '-10%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(255,153,0,0.15)',
          filter: 'blur(100px)',
          animation: 'orbFloat 20s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: '40%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(139,92,246,0.12)',
          filter: 'blur(100px)',
          animation: 'orbFloat 20s ease-in-out infinite',
          animationDelay: '-5s',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: '10%',
          left: '20%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(6,182,212,0.1)',
          filter: 'blur(100px)',
          animation: 'orbFloat 20s ease-in-out infinite',
          animationDelay: '-10s',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── Ripple Effects ── */}
      {RIPPLES.map((ripple, i) => (
        <div
          key={i}
          style={{
            position: 'fixed',
            top: ripple.top,
            left: ripple.left,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          {[0, 1, 2].map((ring) => (
            <div
              key={ring}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                border: `1px solid ${ripple.color}`,
                animation: `rippleExpand ${ripple.duration} ease-out infinite`,
                animationDelay: `calc(${ripple.delay} + ${ring * 2}s)`,
              }}
            />
          ))}
        </div>
      ))}

      {/* ── Header ── */}
      <Header />

      {/* ── Page Content ── */}
      <Outlet />

      {/* ── Footer ── */}
      <Footer />
    </div>
  )
}
