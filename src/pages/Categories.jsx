import CategoryCard from '../components/categories/CategoryCard'
import Seo from '../components/common/Seo'
import { useWallpapers } from '../context/WallpapersContext'

export default function Categories() {
  const { wallpapers } = useWallpapers()
  const categories = [...new Set(wallpapers.map((wallpaper) => wallpaper.category).filter(Boolean))]
    .sort((first, second) => first.localeCompare(second))

  return (
    <section className="px-6 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
      <Seo title="Browse Categories" description="Explore wallpapers by category on Wallpaper Vault." canonicalPath="/categories" />
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl"><h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">Browse by Category</h1><p className="mt-4 text-lg text-[var(--text-secondary)]">Explore wallpapers by your favorite style.</p></header>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => <li key={category}><CategoryCard category={category} count={wallpapers.filter((wallpaper) => wallpaper.category === category).length} image={`https://picsum.photos/800/600?random=${21 + index}`} /></li>)}
        </ul>
      </div>
    </section>
  )
}
