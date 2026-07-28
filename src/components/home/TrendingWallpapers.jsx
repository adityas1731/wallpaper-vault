const wallpapers = [
  { id: 1, title: 'Neon Horizon', category: 'AMOLED', resolution: '4K', image: 'https://picsum.photos/600/900?random=1' },
  { id: 2, title: 'Celestial Bloom', category: 'Anime', resolution: 'QHD', image: 'https://picsum.photos/600/900?random=2' },
  { id: 3, title: 'Verdant Peaks', category: 'Nature', resolution: '4K', image: 'https://picsum.photos/600/900?random=3' },
  { id: 4, title: 'Midnight Circuit', category: 'Gaming', resolution: '4K', image: 'https://picsum.photos/600/900?random=4' },
  { id: 5, title: 'Silent Form', category: 'Minimal', resolution: 'QHD', image: 'https://picsum.photos/600/900?random=5' },
  { id: 6, title: 'Ocean Afterglow', category: 'Nature', resolution: '4K', image: 'https://picsum.photos/600/900?random=6' },
  { id: 7, title: 'Electric Reverie', category: 'AMOLED', resolution: 'QHD', image: 'https://picsum.photos/600/900?random=7' },
  { id: 8, title: 'Skyward Dreams', category: 'Anime', resolution: '4K', image: 'https://picsum.photos/600/900?random=8' },
]

export default function TrendingWallpapers() {
  return (
    <section id="trending" className="px-6 pt-12 pb-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Trending Wallpapers
            </h2>
            <p className="mt-3 text-zinc-400">Browse our most popular wallpapers.</p>
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
                href={`#trending-wallpaper-${wallpaper.id}`}
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
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
