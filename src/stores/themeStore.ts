import { create } from 'zustand'

type Theme = 'light' | 'dark'

interface ThemeStore {
  theme: Theme
  toggle: () => void
}

function applyTheme(theme: Theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('sh-theme', theme)
}

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('sh-theme') as Theme | null
  if (stored === 'dark' || stored === 'light') return stored
  return 'light'
}

export const useTheme = create<ThemeStore>((set) => {
  const initial = getInitialTheme()
  applyTheme(initial)

  return {
    theme: initial,
    toggle: () =>
      set((state) => {
        const next = state.theme === 'dark' ? 'light' : 'dark'
        applyTheme(next)
        return { theme: next }
      }),
  }
})
