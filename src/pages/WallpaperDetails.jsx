import { Link, useParams } from 'react-router-dom'
import WallpaperCard from '../components/wallpapers/WallpaperCard'

const wallpaper = {
  title: 'Neon Horizon',
  category: 'AMOLED',
  resolution: '4K',
  dimensions: '1440 × 3200',
  fileSize: '4.8 MB',
  uploaded: '3 days ago',
  downloads: '12,482',
  views: '58,391',
  image: 'https://picsum.photos/900/1600?random=50',
}

const relatedWallpapers = [
  { id: 1, title: 'Velvet Orbit', category: 'AMOLED', resolution: 'QHD', image: 'https://picsum.photos/600/900?random=61' },
  { id: 2, title: 'Midnight Circuit', category: 'Gaming', resolution: '4K', image: 'https://picsum.photos/600/900?random=62' },
  { id: 3, title: 'Prismatic Wave', category: 'Abstract', resolution: '4K', image: 'https://picsum.photos/600/900?random=63' },
  { id: 4, title: 'Aurora Echo', category: 'Nature', resolution: 'QHD', image: 'https://picsum.photos/600/900?random=64' },
]

const details = [
  ['Device support', 'Mobile / AMOLED'],
  ['Dimensions', wallpaper.dimensions],
  ['File size', wallpaper.fileSize],
  ['Uploaded', wallpaper.uploaded],
  ['Views', wallpaper.views],
  ['Downloads', wallpaper.downloads],
]

export default function WallpaperDetails() {
  const { id } = useParams()
  const previewImage = id === '1' ? wallpaper.image : `https://picsum.photos/900/1600?random=${Number(id) || 50}`

  return (
    <>
      <section className="px-6 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(20rem,2fr)] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-2 sm:p-3">
            <img
              src={previewImage}
              alt={`${wallpaper.title} ${wallpaper.category.toLowerCase()} wallpaper preview`}
              className="aspect-[9/16] w-full rounded-xl object-cover"
            />
          </div>

          <article>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-200">
                {wallpaper.category}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-200">
                {wallpaper.resolution}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">{wallpaper.title}</h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-400">
              A striking AMOLED wallpaper crafted for vivid contrast and immersive displays.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-white/10 py-7 sm:grid-cols-3">
              {details.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm text-zinc-500">{label}</dt>
                  <dd className="mt-1 font-medium text-zinc-200">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-white/5 transition hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-xl hover:shadow-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Download Wallpaper
              </button>
              <button
                type="button"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Favorite
              </button>
              <button
                type="button"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Share
              </button>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Related Wallpapers</h2>
          <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedWallpapers.map((relatedWallpaper) => (
              <li key={relatedWallpaper.id}>
                <Link
                  to={`/wallpapers/${relatedWallpaper.id}`}
                  className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <WallpaperCard wallpaper={relatedWallpaper} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
