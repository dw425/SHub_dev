import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { search, type SearchResult } from '@/lib/searchIndex'

const TYPE_COLORS: Record<string, string> = {
  category: '#1d4ed8',
  page: '#10b981',
  algorithm: '#f59e0b',
  tool: '#8b5cf6',
  concept: '#ec4899',
}

export function SearchBar() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout>>()

  const doSearch = useCallback((q: string) => {
    const found = search(q)
    setResults(found)
    setIsOpen(found.length > 0)
    setSelectedIndex(-1)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setQuery(val)
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => doSearch(val), 300)
  }

  const handleSelect = (result: SearchResult) => {
    setQuery('')
    setIsOpen(false)
    navigate(result.path)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && selectedIndex >= 0 && results[selectedIndex]) {
      e.preventDefault()
      handleSelect(results[selectedIndex])
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid var(--sh-border)',
          background: 'var(--sh-surface-alt)',
          borderRadius: '2px',
          padding: '8px 14px',
          width: '192px',
        }}
      >
        <svg style={{ width: '16px', height: '16px', color: 'var(--sh-text-muted)', flexShrink: 0, marginRight: '8px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder="Search..."
          aria-label="Search categories and pages"
          aria-expanded={isOpen}
          style={{
            width: '100%',
            fontSize: '14px',
            color: 'var(--sh-text)',
            background: 'transparent',
            border: 'none',
            outline: 'none',
          }}
        />
      </div>

      {isOpen && results.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '4px',
            background: 'var(--sh-surface)',
            border: '1px solid var(--sh-border)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            zIndex: 50,
            maxHeight: '320px',
            overflowY: 'auto',
            borderRadius: '2px',
          }}
        >
          {results.map((result, i) => (
            <button
              key={`${result.type}-${result.title}-${i}`}
              onClick={() => handleSelect(result)}
              onMouseEnter={() => setSelectedIndex(i)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '12px 16px',
                borderBottom: '1px solid var(--sh-border-light)',
                background: i === selectedIndex ? 'var(--sh-surface-hover)' : 'transparent',
                cursor: 'pointer',
                display: 'block',
                border: 'none',
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
                borderBottomColor: 'var(--sh-border-light)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: 500, fontSize: '14px', color: 'var(--sh-text)' }}>{result.title}</span>
                <span
                  style={{
                    fontSize: '9px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    color: TYPE_COLORS[result.type] ?? '#64748b',
                    background: `${TYPE_COLORS[result.type] ?? '#64748b'}18`,
                  }}
                >
                  {result.type}
                </span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--sh-text-secondary)', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {result.description}
              </p>
            </button>
          ))}
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '4px',
            background: 'var(--sh-surface)',
            border: '1px solid var(--sh-border)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            zIndex: 50,
            padding: '16px',
            textAlign: 'center',
            borderRadius: '2px',
          }}
        >
          <p style={{ fontSize: '14px', color: 'var(--sh-text-secondary)' }}>No results for &ldquo;{query}&rdquo;</p>
        </div>
      )}
    </div>
  )
}
