import { Link } from 'react-router-dom'
import OptimizedImage from '../components/common/OptimizedImage'
import Seo from '../components/common/Seo'
import { useWallpapers } from '../context/WallpapersContext'
import { createCategorySlug } from '../utils/categorySlug'

export default function Categories() {
  const { wallpapers } = useWallpapers()
  const categories = [...new Set(wallpapers.map((wallpaper) => wallpaper.category).filter(Boolean))]
    .sort((first, second) => first.localeCompare(second))

  return (
    <section className="px-6 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
      <Seo title="Browse Categories" description="Explore wallpapers by category on Wallpaper Vault." canonicalPath="/categories" />
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Browse Categories</h1>
          <p className="mt-4 text-lg text-zinc-400">Explore wallpapers by category.</p>
        </header>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => {
            const count = wallpapers.filter((wallpaper) => wallpaper.category === category).length

            return (
              <li key={category}>
                <Link to={`/categories/${createCategorySlug(category)}`} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 ease-out hover:-translate-y-1 hover:border-white/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  <OptimizedImage src={`https://picsum.photos/800/600?random=${21 + index}`} alt={`${category} wallpaper category`} className="size-full object-cover transition duration-500 ease-out group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent px-5 pb-5 pt-16"><h2 className="text-xl font-semibold text-white">{category}</h2><p className="mt-1 text-sm text-zinc-300">{count} Wallpapers</p></div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
