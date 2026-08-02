import { Link } from 'react-router-dom'
import WallpaperCard from '../wallpapers/WallpaperCard'
import { useWallpapers } from '../../context/WallpapersContext'

export default function TrendingWallpapers() {
  const { wallpapers } = useWallpapers()

  return (
    <section id="trending" className="px-6 pb-24 pt-12 sm:px-8 sm:pb-32 sm:pt-14"><div className="mx-auto max-w-7xl">
      <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Trending Wallpapers</h2><p className="mt-3 text-zinc-400">Browse our most popular wallpapers.</p></div><Link to="/wallpapers" className="w-fit text-sm font-semibold text-zinc-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">View All →</Link></header>
      <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{wallpapers.slice(0, 8).map((wallpaper) => <li key={wallpaper.id}><Link to={`/wallpapers/${wallpaper.id}`} className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"><WallpaperCard wallpaper={wallpaper} /></Link></li>)}</ul>
    </div></section>
  )
}
