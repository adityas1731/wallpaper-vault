import CategoryCard from '../categories/CategoryCard'
import { useWallpapers } from '../../context/WallpapersContext'

export default function BrowseCategories() {
  const { wallpapers } = useWallpapers()
  const categories = [...new Set(wallpapers.map((wallpaper) => wallpaper.category).filter(Boolean))]

  return (
    <section id="categories" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl"><h2 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">Browse by Category</h2><p className="mt-3 text-[var(--text-secondary)]">Explore wallpapers by your favorite style.</p></header>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => <li key={category}><CategoryCard category={category} count={wallpapers.filter((wallpaper) => wallpaper.category === category).length} image={`https://picsum.photos/800/600?random=${21 + index}`} /></li>)}
        </ul>
      </div>
    </section>
  )
}
