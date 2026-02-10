export default function QuickPulseHub() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '16px' }}>
          ⚡ Quick Pulse Hub
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-dim)' }}>
          Coming soon — orbital visualization of all 26 categories
        </p>
      </div>
    </div>
  )
}
