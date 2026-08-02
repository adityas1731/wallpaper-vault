import { Link } from 'react-router-dom'
import { useWallpapers } from '../../context/WallpapersContext'
import { createCategorySlug } from '../../utils/categorySlug'

export default function Hero() {
  const { wallpapers } = useWallpapers()
  const categories = [...new Set(wallpapers.map((wallpaper) => wallpaper.category))]
  return (
    <section className="relative overflow-hidden px-6 pb-6 pt-32 text-center sm:px-8 sm:pb-8 sm:pt-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_0%,rgba(113,113,122,0.28),transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-zinc-700/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl">
        <h1 className="bg-gradient-to-r from-[var(--text-primary)] via-[var(--text-primary)] to-[var(--accent-secondary)] bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent sm:text-7xl sm:leading-[1.1]">
          Discover Beautiful Wallpapers
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
          Find thousands of curated 4K, AMOLED, desktop and mobile wallpapers.
        </p>

        <ul className="mt-9 flex flex-wrap justify-center gap-3" aria-label="Wallpaper categories">
          {categories.slice(0, 6).map((category) => (
            <li key={category}>
              <Link
                to={`/categories/${createCategorySlug(category)}`}
                className="rounded-full border border-[var(--border)] bg-[var(--button-secondary)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:text-[var(--text-primary)]"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-11 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/wallpapers"
            className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--accent-text)] shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--accent-secondary)]"
          >
            Browse Wallpapers
          </Link>
          <Link
            to="/categories"
            className="rounded-full border border-[var(--border)] bg-[var(--button-secondary)] px-7 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--accent)]/40"
          >
            View Categories
          </Link>
        </div>

      </div>
    </section>
  )
}
