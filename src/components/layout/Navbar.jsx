export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/60 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8"
      >
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-white transition-colors duration-200 hover:text-zinc-300"
        >
          Wallpaper Vault
        </a>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#explore"
              className="text-sm font-medium text-white transition-colors duration-200"
            >
              Explore
            </a>

            <a
              href="#categories"
              className="text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white"
            >
              Categories
            </a>

            <a
              href="#collections"
              className="text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white"
            >
              Collections
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search wallpapers"
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