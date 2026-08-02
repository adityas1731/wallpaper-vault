import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from '../common/ThemeToggle'

export default function Navbar({ onSearch }) {
  const navLinkClass = ({ isActive }) => `text-sm font-medium transition-colors duration-200 hover:text-[var(--text-primary)] ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--page-bg)_88%,transparent)] backdrop-blur">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        <Link to="/" className="text-xl font-bold tracking-tight text-[var(--text-primary)] transition-colors duration-200 hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
          Wallpaper Vault
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 md:flex">
            <NavLink to="/categories" className={navLinkClass}>Categories</NavLink>
            <NavLink to="/wallpapers" className={navLinkClass}>Collections</NavLink>
            <NavLink to="/favorites" className={navLinkClass}>Favorites</NavLink>
          </div>

          <div className="flex items-center gap-3">
            <button type="button" aria-label="Search wallpapers" aria-haspopup="dialog" aria-expanded={false} onClick={onSearch} className="rounded-full p-2 text-[var(--text-secondary)] transition-colors duration-200 hover:bg-[var(--button-secondary)] hover:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden="true"><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></svg>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
