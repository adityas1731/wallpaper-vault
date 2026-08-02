import { Link, useParams } from 'react-router-dom'
import WallpaperCard from '../components/wallpapers/WallpaperCard'
import { wallpapers } from '../data/wallpapers'
import { categoryMatchesSlug } from '../utils/categorySlug'

export default function CategoryWallpapers() {
  const { categorySlug } = useParams()
  const categoryWallpapers = wallpapers.filter((wallpaper) => categoryMatchesSlug(wallpaper.category, categorySlug))
  const categoryName = categoryWallpapers[0]?.category

  if (!categoryName) {
    return (
      <section className="px-6 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Category not found</h1>
          <p className="mt-3 text-zinc-400">We couldn&apos;t find any wallpapers in this category.</p>
          <Link to="/wallpapers" className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Browse All Wallpapers
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{categoryName} Wallpapers</h1>
          <p className="mt-4 text-lg text-zinc-400">Explore our collection of {categoryName} wallpapers.</p>
        </header>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryWallpapers.map((wallpaper) => (
            <li key={wallpaper.id}>
              <Link to={`/wallpapers/${wallpaper.id}`} className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <WallpaperCard wallpaper={wallpaper} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
