import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useChatStore } from '@/stores/chatStore'
import { generateResponse, getQuickActions } from '@/features/chat/chatService'
import { ChatMessage, TypingIndicator } from './ChatMessage'
import { ChatInput } from './ChatInput'

export function ChatWidget() {
  const { messages, isOpen, isTyping, addMessage, toggle, setTyping } = useChatStore()
  const { pathname } = useLocation()
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = async (text: string) => {
    addMessage('user', text)
    setTyping(true)

    try {
      const response = await generateResponse(text, pathname)
      addMessage('assistant', response)
    } catch {
      addMessage('assistant', 'Sorry, something went wrong. Please try again.')
    } finally {
      setTyping(false)
    }
  }

  const quickActions = getQuickActions(pathname)

  return (
    <>
      {/* Toggle button — fixed bottom-right */}
      <button
        onClick={toggle}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: '#1d4ed8',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(29, 78, 216, 0.4)',
          zIndex: 1000,
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)' }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '88px',
            right: '24px',
            width: '340px',
            maxHeight: '480px',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: '#1d4ed8',
              color: '#ffffff',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
              }}
            >
              💡
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>StrategyHub Assistant</div>
              <div style={{ fontSize: '10px', opacity: 0.8 }}>Ask about topics, pages & categories</div>
            </div>
          </div>

          {/* Messages area */}
          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px 12px',
              minHeight: '200px',
              maxHeight: '300px',
            }}
          >
            {messages.length === 0 && (
              <div style={{ textAlign: 'center', padding: '20px 0', color: '#94a3b8', fontSize: '12px' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>💡</div>
                <p>Ask me about AI/ML topics,<br />categories, or pages!</p>
              </div>
            )}
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isTyping && <TypingIndicator />}
          </div>

          {/* Input area */}
          <ChatInput
            onSend={handleSend}
            quickActions={quickActions}
            disabled={isTyping}
          />
        </div>
      )}
    </>
  )
}
