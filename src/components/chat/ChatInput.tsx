import { useState } from 'react'
import type { QuickAction } from '@/features/chat/chatService'

interface Props {
  onSend: (message: string) => void
  quickActions: QuickAction[]
  disabled?: boolean
}

export function ChatInput({ onSend, quickActions, disabled }: Props) {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSend(trimmed)
    setValue('')
  }

  return (
    <div>
      {/* Quick actions */}
      {quickActions.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '8px 12px', borderTop: '1px solid #e2e8f0' }}>
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => onSend(action.message)}
              disabled={disabled}
              style={{
                fontSize: '11px',
                padding: '4px 10px',
                border: '1px solid #1d4ed8',
                borderRadius: '12px',
                background: 'transparent',
                color: '#1d4ed8',
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.5 : 1,
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => {
                if (!disabled) {
                  e.currentTarget.style.background = '#1d4ed8'
                  e.currentTarget.style.color = '#ffffff'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#1d4ed8'
              }}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}

      {/* Input field */}
      <div style={{ display: 'flex', borderTop: '1px solid #e2e8f0', padding: '8px 12px', gap: '8px', alignItems: 'center' }}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value.slice(0, 500))}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Ask a question..."
          disabled={disabled}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: '13px',
            color: '#1e293b',
            background: 'transparent',
          }}
        />
        <button
          onClick={handleSubmit}
          disabled={disabled || !value.trim()}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: 'none',
            background: value.trim() && !disabled ? '#1d4ed8' : '#e2e8f0',
            color: value.trim() && !disabled ? '#ffffff' : '#94a3b8',
            cursor: value.trim() && !disabled ? 'pointer' : 'default',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.15s',
          }}
          aria-label="Send message"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  )
}
