import { Link } from 'react-router-dom'
import WallpaperCard from '../components/wallpapers/WallpaperCard'
import Seo from '../components/common/Seo'
import { useWallpapers } from '../context/WallpapersContext'
import { useFavorites } from '../hooks/useFavorites'

export default function Favorites() {
  const { favoriteIds } = useFavorites()
  const { wallpapers } = useWallpapers()
  const favoriteWallpapers = wallpapers.filter((wallpaper) => favoriteIds.includes(wallpaper.id))

  return (
    <section className="px-6 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
      <Seo title="Favorite Wallpapers" description="View your saved wallpapers on Wallpaper Vault." canonicalPath="/favorites" noIndex />
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Favorite Wallpapers</h1>
          <p className="mt-4 text-lg text-zinc-400">Your saved wallpaper collection.</p>
        </header>

        {favoriteWallpapers.length > 0 ? (
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favoriteWallpapers.map((wallpaper) => (
              <li key={wallpaper.id}>
                <Link to={`/wallpapers/${wallpaper.id}`} className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  <WallpaperCard wallpaper={wallpaper} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-16 text-center">
            <p className="text-lg font-medium text-white">No favorite wallpapers yet.</p>
            <p className="mt-2 text-zinc-400">Start exploring and save your favorites.</p>
            <Link to="/wallpapers" className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Browse Wallpapers
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
