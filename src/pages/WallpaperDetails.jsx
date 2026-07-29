import { Link, Navigate, useParams } from 'react-router-dom'
import WallpaperCard from '../components/wallpapers/WallpaperCard'
import { wallpapers } from '../data/wallpapers'

export default function WallpaperDetails() {
  const { id } = useParams()
  const wallpaper = wallpapers.find((item) => item.id === Number(id))

  if (!wallpaper) return <Navigate to="/404" replace />

  const details = [
    ['Device support', 'Mobile / AMOLED'], ['Dimensions', wallpaper.dimensions], ['File size', wallpaper.fileSize],
    ['Uploaded', wallpaper.uploaded], ['Views', wallpaper.views], ['Downloads', wallpaper.downloads],
  ]
  const relatedWallpapers = wallpapers.filter((item) => item.id !== wallpaper.id).slice(0, 4)

  return (
    <>
      <section className="px-6 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(20rem,2fr)] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-2 sm:p-3"><img src={wallpaper.image} alt={`${wallpaper.title} ${wallpaper.category.toLowerCase()} wallpaper preview`} className="aspect-[9/16] w-full rounded-xl object-cover" /></div>
          <article>
            <div className="flex flex-wrap gap-2"><span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-200">{wallpaper.category}</span><span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-200">{wallpaper.resolution}</span></div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">{wallpaper.title}</h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-400">A curated wallpaper designed for vivid contrast and immersive displays.</p>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-white/10 py-7 sm:grid-cols-3">{details.map(([label, value]) => <div key={label}><dt className="text-sm text-zinc-500">{label}</dt><dd className="mt-1 font-medium text-zinc-200">{value}</dd></div>)}</dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button type="button" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-white/5 transition hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-xl hover:shadow-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Download Wallpaper</button>
              <button type="button" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Favorite</button>
              <button type="button" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Share</button>
            </div>
          </article>
        </div>
      </section>
      <section className="px-6 pb-24 sm:px-8 sm:pb-32"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Related Wallpapers</h2><ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">{relatedWallpapers.map((relatedWallpaper) => <li key={relatedWallpaper.id}><Link to={`/wallpapers/${relatedWallpaper.id}`} className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><WallpaperCard wallpaper={relatedWallpaper} /></Link></li>)}</ul></div></section>
    </>
  )
}
