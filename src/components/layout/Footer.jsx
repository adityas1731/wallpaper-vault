import { Link } from 'react-router-dom'
import { useWallpapers } from '../../context/WallpapersContext'
import { createCategorySlug } from '../../utils/categorySlug'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Trending', to: '/#trending' },
  { label: 'Categories', to: '/#categories' },
  { label: 'Recently Added', to: '/#recently-added' },
]

export default function Footer() {
  const { wallpapers } = useWallpapers()
  const categories = [...new Set(wallpapers.map((wallpaper) => wallpaper.category))]
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-6 pt-16 sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link to="/" className="text-lg font-semibold tracking-tight text-[var(--text-primary)] transition hover:text-[var(--accent)]">
              Wallpaper Vault
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--text-secondary)]">
              Discover high-quality wallpapers for every device.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-sm font-semibold text-[var(--text-primary)]">Quick Links</h2>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Wallpaper categories">
            <h2 className="text-sm font-semibold text-[var(--text-primary)]">Categories</h2>
            <ul className="mt-4 space-y-3">
              {categories.slice(1, 5).map((category) => (
                <li key={category}>
                  <Link to={`/categories/${createCategorySlug(category)}`} className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--border)] py-6 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Wallpaper Vault</p>
          <p>Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
