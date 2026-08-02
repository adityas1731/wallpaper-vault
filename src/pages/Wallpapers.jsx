import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import WallpaperFilters from '../components/wallpapers/WallpaperFilters'
import WallpaperCard from '../components/wallpapers/WallpaperCard'
import Seo from '../components/common/Seo'
import { wallpapers } from '../data/wallpapers'
import { createCategorySlug } from '../utils/categorySlug'
import { filterWallpapers } from '../utils/filterWallpapers'

const sortOptions = ['relevance', 'title-asc', 'title-desc']

export default function Wallpapers() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categories = useMemo(() => [...new Set(wallpapers.map((wallpaper) => wallpaper.category).filter((category) => typeof category === 'string' && category.trim()))]
    .sort((first, second) => first.localeCompare(second))
    .map((category) => ({ label: category, value: createCategorySlug(category) })), [])
  const requestedCategory = searchParams.get('category') ?? ''
  const query = searchParams.get('q') ?? ''
  const category = categories.some((item) => item.value === requestedCategory) ? requestedCategory : ''
  const requestedSort = searchParams.get('sort')
  const sort = sortOptions.includes(requestedSort) ? requestedSort : 'relevance'
  const filters = useMemo(() => ({ query, category, sort }), [category, query, sort])
  const displayedWallpapers = useMemo(() => filterWallpapers(wallpapers, filters), [filters])

  const updateFilters = (nextFilters) => {
    const nextParams = new URLSearchParams()
    const query = nextFilters.query.trim()

    if (query) nextParams.set('q', query)
    if (nextFilters.category) nextParams.set('category', nextFilters.category)
    if (nextFilters.sort !== 'relevance') nextParams.set('sort', nextFilters.sort)

    setSearchParams(nextParams)
  }

  const clearFilters = () => setSearchParams({})
  const resultLabel = `${displayedWallpapers.length} wallpaper${displayedWallpapers.length === 1 ? '' : 's'} found`

  return (
    <section className="px-6 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
      <Seo title="Browse Wallpapers" description="Browse curated desktop, mobile, AMOLED, anime, gaming and 4K wallpapers." canonicalPath="/wallpapers" />
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">All Wallpapers</h1>
          <p className="mt-4 text-lg text-zinc-400">Browse our complete collection.</p>
        </header>

        <WallpaperFilters filters={filters} categories={categories} onFilterChange={updateFilters} onClear={clearFilters} />
        <p className="mt-6 text-sm text-zinc-400" aria-live="polite">{resultLabel}</p>

        {displayedWallpapers.length > 0 ? (
          <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedWallpapers.map((wallpaper) => (
              <li key={wallpaper.id}>
                <Link to={`/wallpapers/${wallpaper.id}`} className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  <WallpaperCard wallpaper={wallpaper} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-16 text-center">
            <h2 className="text-xl font-semibold text-white">No wallpapers found</h2>
            <p className="mt-2 text-zinc-400">Try changing or clearing your filters.</p>
            <button type="button" onClick={clearFilters} className="mt-7 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Clear Filters
            </button>
          </div>
        )}

        {displayedWallpapers.length > 0 && (
          <nav className="mt-14 flex items-center justify-center gap-2" aria-label="Wallpaper pages">
            {['Previous', '1', '2', '3', 'Next'].map((label) => <button key={label} type="button" aria-current={label === '1' ? 'page' : undefined} className={label === '1' ? 'rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white' : 'rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'}>{label}</button>)}
          </nav>
        )}
      </div>
    </section>
  )
}
