import type { ChatMessage as ChatMessageType } from '@/stores/chatStore'

interface Props {
  message: ChatMessageType
}

/** Render markdown-style bold and links */
function renderContent(content: string) {
  const parts: (string | JSX.Element)[] = []
  let remaining = content
  let key = 0

  while (remaining.length > 0) {
    // Match **bold**
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
    // Match [text](url)
    const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/)

    // Find the earliest match
    const boldIdx = boldMatch?.index ?? Infinity
    const linkIdx = linkMatch?.index ?? Infinity

    if (boldIdx === Infinity && linkIdx === Infinity) {
      parts.push(remaining)
      break
    }

    if (boldIdx <= linkIdx && boldMatch) {
      parts.push(remaining.slice(0, boldIdx))
      parts.push(<strong key={key++}>{boldMatch[1]}</strong>)
      remaining = remaining.slice(boldIdx + boldMatch[0].length)
    } else if (linkMatch) {
      parts.push(remaining.slice(0, linkIdx))
      parts.push(
        <a
          key={key++}
          href={linkMatch[2]}
          style={{ color: '#1d4ed8', textDecoration: 'underline' }}
        >
          {linkMatch[1]}
        </a>,
      )
      remaining = remaining.slice(linkIdx + linkMatch[0].length)
    }
  }

  return parts
}

export function ChatMessage({ message }: Props) {
  const isUser = message.role === 'user'

  return (
    <div style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', marginBottom: '12px' }}>
      <div
        style={{
          maxWidth: '85%',
          padding: '10px 14px',
          borderRadius: '12px',
          fontSize: '13px',
          lineHeight: 1.5,
          whiteSpace: 'pre-wrap',
          ...(isUser
            ? { background: '#1d4ed8', color: '#ffffff', borderBottomRightRadius: '4px' }
            : { background: 'var(--sh-surface-alt, #f1f5f9)', color: 'var(--sh-text, #1e293b)', borderBottomLeftRadius: '4px' }),
        }}
      >
        {message.content.split('\n').map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {renderContent(line)}
          </span>
        ))}
      </div>
    </div>
  )
}

export function TypingIndicator() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '12px' }}>
      <div
        style={{
          padding: '10px 14px',
          borderRadius: '12px',
          borderBottomLeftRadius: '4px',
          background: 'var(--sh-surface-alt, #f1f5f9)',
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--sh-text-muted, #94a3b8)',
              display: 'inline-block',
              animation: `typingDot 1.4s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
        <style>{`
          @keyframes typingDot {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
            30% { transform: translateY(-4px); opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  )
}
