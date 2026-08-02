import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ onSearch }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/60 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8"
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-white transition-colors duration-200 hover:text-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Wallpaper Vault
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <NavLink
              to="/categories"
              className={({ isActive }) => `text-sm font-medium transition-colors duration-200 hover:text-white ${isActive ? 'text-white' : 'text-zinc-300'}`}
            >
              Categories
            </NavLink>

            <NavLink
              to="/wallpapers"
              className={({ isActive }) => `text-sm font-medium transition-colors duration-200 hover:text-white ${isActive ? 'text-white' : 'text-zinc-300'}`}
            >
              Collections
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) => `text-sm font-medium transition-colors duration-200 hover:text-white ${isActive ? 'text-white' : 'text-zinc-300'}`}
            >
              Favorites
            </NavLink>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search wallpapers"
              aria-haspopup="dialog"
              aria-expanded={false}
              onClick={onSearch}
              className="rounded-full p-2 text-zinc-300 transition-colors duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-5"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="6" />
                <path d="m16 16 4 4" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Toggle color theme"
              className="rounded-full p-2 text-zinc-300 transition-colors duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <span aria-hidden="true">☾</span>
            </button>
          </div>
        </div>
      </nav>

    </header>
  );
}
