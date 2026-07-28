const wallpapers = [
  { id: 1, title: 'Misty Mountain Range', resolution: '4K', category: 'Nature' },
  { id: 2, title: 'Neon City Nights', resolution: 'AMOLED', category: 'Gaming' },
  { id: 3, title: 'Celestial Bloom', resolution: 'QHD', category: 'Anime' },
  { id: 4, title: 'Quiet Geometry', resolution: '4K', category: 'Minimal' },
  { id: 5, title: 'Alpine Horizon', resolution: '4K', category: 'Nature' },
  { id: 6, title: 'Cyber Drift', resolution: 'AMOLED', category: 'Gaming' },
  { id: 7, title: 'Moonlit Garden', resolution: 'QHD', category: 'Anime' },
  { id: 8, title: 'Soft Gradient', resolution: '4K', category: 'Minimal' },
]

export default function FeaturedWallpapers() {
  return (
    <section id="explore" className="px-6 pt-12 pb-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Featured Wallpapers
            </h2>
            <p className="mt-3 text-zinc-400">
              Hand-picked wallpapers from our latest collection.
            </p>
          </div>
          <a
            href="#all-wallpapers"
            className="w-fit text-sm font-semibold text-zinc-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            View All →
          </a>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wallpapers.map((wallpaper) => (
            <li key={wallpaper.id}>
              <a
                href={`#wallpaper-${wallpaper.id}`}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={`https://picsum.photos/600/900?random=${wallpaper.id}`}
                    alt={`${wallpaper.title} ${wallpaper.category.toLowerCase()} wallpaper`}
                    className="size-full object-cover transition duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-4">
                  <div>
                    <h3 className="font-medium text-white">{wallpaper.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{wallpaper.category}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300">
                    {wallpaper.resolution}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
