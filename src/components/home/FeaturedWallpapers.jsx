import { Link } from 'react-router-dom'
import OptimizedImage from '../common/OptimizedImage'
import { useWallpapers } from '../../context/WallpapersContext'

export default function FeaturedWallpapers() {
  const { wallpapers } = useWallpapers()
  return (
    <section id="explore" className="px-6 py-24 sm:px-8 sm:py-32"><div className="mx-auto max-w-7xl">
      <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Featured Wallpapers</h2><p className="mt-3 text-zinc-400">Hand-picked wallpapers from our latest collection.</p></div><Link to="/wallpapers" className="w-fit text-sm font-semibold text-zinc-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">View All →</Link></header>
      <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{wallpapers.slice(8, 16).map((wallpaper) => <li key={wallpaper.id}><Link to={`/wallpapers/${wallpaper.id}`} className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><div className="aspect-[2/3] overflow-hidden"><OptimizedImage src={wallpaper.image} alt={`${wallpaper.title} ${wallpaper.category.toLowerCase()} wallpaper`} className="size-full object-cover transition duration-500 ease-out group-hover:scale-105" /></div><div className="flex items-start justify-between gap-4 p-4"><div><h3 className="font-medium text-white">{wallpaper.title}</h3><p className="mt-1 text-sm text-zinc-400">{wallpaper.category}</p></div><span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300">{wallpaper.resolution}</span></div></Link></li>)}</ul>
    </div></section>
  )
}
