import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'wallpaper-vault-theme'
const ThemeContext = createContext(null)

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'

  let theme

  try {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY)
    if (storedTheme === 'dark' || storedTheme === 'light') theme = storedTheme
  } catch {
    // Fall back to the system preference when storage is unavailable.
  }

  theme ??= window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  return theme
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // The active in-memory theme still works when storage is unavailable.
    }
  }, [theme])

  const toggleTheme = () => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')

  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider.')
  }

  return context
}
