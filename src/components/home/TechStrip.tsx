import { useState } from 'react'

const TECH_ITEMS = [
  { emoji: '\u{1F916}', label: 'LLMs' },
  { emoji: '\u{1F50D}', label: 'RAG' },
  { emoji: '\u{1F9F1}', label: 'Databricks' },
  { emoji: '\u{2744}\uFE0F', label: 'Snowflake' },
  { emoji: '\u{1F5C3}\uFE0F', label: 'Vector DBs' },
  { emoji: '\u{2601}\uFE0F', label: 'Multi-Cloud' },
  { emoji: '\u{1F3D7}\uFE0F', label: 'Architecture' },
  { emoji: '\u{26A1}', label: 'MLOps' },
  { emoji: '\u{1F510}', label: 'Security' },
  { emoji: '\u{1F4CA}', label: 'Analytics' },
]

function TechItem({ emoji, label }: { emoji: string; label: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '13px',
        color: hovered ? '#ffffff' : '#7a7a90',
        cursor: 'default',
        transition: 'color 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <span style={{ fontSize: '20px' }}>{emoji}</span>
      {label}
    </div>
  )
}

export function TechStrip() {
  return (
    <div
      style={{
        borderTop: '1px solid #2a2a3e',
        borderBottom: '1px solid #2a2a3e',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '36px',
        padding: '28px 0',
        marginBottom: '48px',
      }}
    >
      {TECH_ITEMS.map((item) => (
        <TechItem key={item.label} emoji={item.emoji} label={item.label} />
      ))}
    </div>
  )
}
