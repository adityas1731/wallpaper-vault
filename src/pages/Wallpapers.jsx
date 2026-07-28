import { Link } from 'react-router-dom'
import WallpaperCard from '../components/wallpapers/WallpaperCard'

const wallpapers = [
  { id: 1, title: 'Neon Horizon', category: 'AMOLED', resolution: '4K', image: 'https://picsum.photos/600/900?random=41' },
  { id: 2, title: 'Celestial Bloom', category: 'Anime', resolution: 'QHD', image: 'https://picsum.photos/600/900?random=42' },
  { id: 3, title: 'Verdant Peaks', category: 'Nature', resolution: '4K', image: 'https://picsum.photos/600/900?random=43' },
  { id: 4, title: 'Midnight Circuit', category: 'Gaming', resolution: '4K', image: 'https://picsum.photos/600/900?random=44' },
  { id: 5, title: 'Silent Form', category: 'Minimal', resolution: 'QHD', image: 'https://picsum.photos/600/900?random=45' },
  { id: 6, title: 'Aurora Echo', category: 'Nature', resolution: '4K', image: 'https://picsum.photos/600/900?random=46' },
  { id: 7, title: 'Velvet Orbit', category: 'AMOLED', resolution: 'QHD', image: 'https://picsum.photos/600/900?random=47' },
  { id: 8, title: 'Sakura Skies', category: 'Anime', resolution: '4K', image: 'https://picsum.photos/600/900?random=48' },
  { id: 9, title: 'Velocity Red', category: 'Cars', resolution: '4K', image: 'https://picsum.photos/600/900?random=49' },
  { id: 10, title: 'Twilight Dunes', category: 'Nature', resolution: 'QHD', image: 'https://picsum.photos/600/900?random=50' },
  { id: 11, title: 'Void Runner', category: 'Gaming', resolution: '4K', image: 'https://picsum.photos/600/900?random=51' },
  { id: 12, title: 'Linear Calm', category: 'Minimal', resolution: 'QHD', image: 'https://picsum.photos/600/900?random=52' },
  { id: 13, title: 'Prismatic Wave', category: 'Abstract', resolution: '4K', image: 'https://picsum.photos/600/900?random=53' },
  { id: 14, title: 'Solar Silence', category: 'AMOLED', resolution: '4K', image: 'https://picsum.photos/600/900?random=54' },
  { id: 15, title: 'Summit Light', category: 'Nature', resolution: 'QHD', image: 'https://picsum.photos/600/900?random=55' },
  { id: 16, title: 'Digital Rain', category: 'Gaming', resolution: '4K', image: 'https://picsum.photos/600/900?random=56' },
]

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
            <input
              type="search"
              placeholder="Search wallpapers..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
            />
          </label>
          <div className="flex flex-wrap gap-3" aria-label="Wallpaper filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wallpapers.map((wallpaper) => (
            <li key={wallpaper.id}>
              <Link
                to={`/wallpapers/${wallpaper.id}`}
                className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <WallpaperCard wallpaper={wallpaper} />
              </Link>
            </li>
          ))}
        </ul>

        <nav className="mt-14 flex items-center justify-center gap-2" aria-label="Wallpaper pages">
          <button type="button" className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Previous
          </button>
          <button type="button" aria-current="page" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            1
          </button>
          <button type="button" className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            2
          </button>
          <button type="button" className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            3
          </button>
          <button type="button" className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Next
          </button>
        </nav>
      </div>
    </section>
  )
}
