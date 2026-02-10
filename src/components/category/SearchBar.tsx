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
    <div ref={containerRef} className="relative">
      <div className="flex items-center border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 rounded-sm px-3.5 py-2 w-48">
        <svg className="w-4 h-4 text-gray-400 shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className="w-full text-sm text-gray-700 dark:text-gray-200 bg-transparent border-none focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 shadow-lg z-50 max-h-80 overflow-y-auto rounded-sm">
          {results.map((result, i) => (
            <button
              key={`${result.type}-${result.title}-${i}`}
              onClick={() => handleSelect(result)}
              className={`w-full text-left px-4 py-3 border-b border-gray-100 dark:border-slate-700 last:border-0 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors ${
                i === selectedIndex ? 'bg-blue-50 dark:bg-slate-700' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm text-gray-900 dark:text-gray-100">{result.title}</span>
                <span
                  className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-sm"
                  style={{
                    color: TYPE_COLORS[result.type] ?? '#64748b',
                    background: `${TYPE_COLORS[result.type] ?? '#64748b'}18`,
                  }}
                >
                  {result.type}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">{result.description}</p>
            </button>
          ))}
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 shadow-lg z-50 p-4 text-center rounded-sm">
          <p className="text-sm text-gray-500 dark:text-gray-400">No results for &ldquo;{query}&rdquo;</p>
        </div>
      )}
    </div>
  )
}
