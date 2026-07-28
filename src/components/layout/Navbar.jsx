export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-transparent">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8"
      >
        <a href="/" className="text-lg font-semibold tracking-tight text-white">
          Wallpaper Vault
        </a>
        <button type="button" className="text-sm font-medium text-zinc-200 transition hover:text-white">
          Search
        </button>
      </nav>
    </header>
  )
}
