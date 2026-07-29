import { categories } from '../../data/categories'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Trending', href: '#trending' },
  { label: 'Categories', href: '#categories' },
  { label: 'Recently Added', href: '#recently-added' },
]

const socials = ['GitHub', 'X', 'Discord']

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/60 px-6 pt-16 sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" className="text-lg font-semibold tracking-tight text-white transition hover:text-zinc-300">
              Wallpaper Vault
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
              Discover high-quality wallpapers for every device.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-sm font-semibold text-white">Quick Links</h2>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Wallpaper categories">
            <h2 className="text-sm font-semibold text-white">Categories</h2>
            <ul className="mt-4 space-y-3">
              {categories.slice(1, 5).map((category) => (
                <li key={category}>
                  <a href={`#category-${category.toLowerCase()}`} className="text-sm text-zinc-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social links">
            <h2 className="text-sm font-semibold text-white">Follow Us</h2>
            <ul className="mt-4 space-y-3">
              {socials.map((social) => (
                <li key={social}>
                  <a href={`#${social.toLowerCase()}`} className="text-sm text-zinc-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Wallpaper Vault</p>
          <p>Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
