const wallpapers = [
  { id: 1, title: 'Aurora Echo', category: 'Nature', resolution: '4K', added: '2 hours ago', image: 'https://picsum.photos/600/900?random=31' },
  { id: 2, title: 'Velvet Orbit', category: 'AMOLED', resolution: 'QHD', added: '4 hours ago', image: 'https://picsum.photos/600/900?random=32' },
  { id: 3, title: 'Sakura Skies', category: 'Anime', resolution: '4K', added: '6 hours ago', image: 'https://picsum.photos/600/900?random=33' },
  { id: 4, title: 'Velocity Red', category: 'Cars', resolution: '4K', added: '8 hours ago', image: 'https://picsum.photos/600/900?random=34' },
  { id: 5, title: 'Twilight Dunes', category: 'Nature', resolution: 'QHD', added: 'Yesterday', image: 'https://picsum.photos/600/900?random=35' },
  { id: 6, title: 'Void Runner', category: 'Gaming', resolution: '4K', added: 'Yesterday', image: 'https://picsum.photos/600/900?random=36' },
  { id: 7, title: 'Linear Calm', category: 'Minimal', resolution: 'QHD', added: '2 days ago', image: 'https://picsum.photos/600/900?random=37' },
  { id: 8, title: 'Prismatic Wave', category: 'Abstract', resolution: '4K', added: '2 days ago', image: 'https://picsum.photos/600/900?random=38' },
]

export default function RecentlyAdded() {
  return (
    <section id="recently-added" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Recently Added
            </h2>
            <p className="mt-3 text-zinc-400">Fresh wallpapers added to the collection.</p>
          </div>
          <Link
            to="/wallpapers"
            className="w-fit text-sm font-semibold text-zinc-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            View All →
          </Link>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wallpapers.map((wallpaper) => (
            <li key={wallpaper.id}>
              <Link
                to={`/wallpapers/${wallpaper.id}`}
                className="group relative block aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 ease-out hover:-translate-y-1 hover:border-white/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <img
                  src={wallpaper.image}
                  alt={`${wallpaper.title} ${wallpaper.category.toLowerCase()} wallpaper`}
                  className="size-full object-cover transition duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                  <span className="rounded-full border border-white/15 bg-zinc-950/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {wallpaper.resolution}
                  </span>
                  <span className="rounded-full border border-white/15 bg-zinc-950/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {wallpaper.category}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-transparent px-5 pb-5 pt-16">
                  <h3 className="text-lg font-semibold text-white">{wallpaper.title}</h3>
                  <p className="mt-1 text-sm text-zinc-300">Added {wallpaper.added}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
import { Link } from 'react-router-dom'
