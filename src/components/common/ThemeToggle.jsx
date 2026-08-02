import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === 'light'}
      className="inline-flex min-h-10 items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--button-secondary)] p-1 text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
    >
      <span className={`grid size-8 place-items-center rounded-full transition ${theme === 'light' ? 'bg-[var(--surface-raised)] text-[var(--accent)] shadow-sm' : ''}`} aria-hidden="true">☀</span>
      <span className={`grid size-8 place-items-center rounded-full transition ${theme === 'dark' ? 'bg-[var(--surface-raised)] text-[var(--accent)] shadow-sm' : ''}`} aria-hidden="true">☾</span>
    </button>
  )
}
