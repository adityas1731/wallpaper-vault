import { Link } from 'react-router-dom'
import WallpaperCard from '../components/wallpapers/WallpaperCard'
import { wallpapers } from '../data/wallpapers'

const filters = ['Category', 'Resolution', 'Sort']

export default function Wallpapers() {
  return (
    <section className="px-6 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">All Wallpapers</h1>
          <p className="mt-4 text-lg text-zinc-400">Browse our complete collection.</p>
        </header>
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block max-w-xl flex-1">
            <span className="sr-only">Search wallpapers</span>
            <input type="search" placeholder="Search wallpapers..." className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10" />
          </label>
          <div className="flex flex-wrap gap-3" aria-label="Wallpaper filters">
            {filters.map((filter) => <button key={filter} type="button" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{filter}</button>)}
          </div>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wallpapers.map((wallpaper) => <li key={wallpaper.id}><Link to={`/wallpapers/${wallpaper.id}`} className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><WallpaperCard wallpaper={wallpaper} /></Link></li>)}
        </ul>
        <nav className="mt-14 flex items-center justify-center gap-2" aria-label="Wallpaper pages">
          {['Previous', '1', '2', '3', 'Next'].map((label) => <button key={label} type="button" aria-current={label === '1' ? 'page' : undefined} className={label === '1' ? 'rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white' : 'rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'}>{label}</button>)}
        </nav>
      </div>
    </section>
  )
}
