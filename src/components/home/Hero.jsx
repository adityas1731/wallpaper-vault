export default function Hero() {
  const categories = ['Desktop', 'AMOLED', 'Anime', 'Gaming', 'Nature', 'Minimal']

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32 text-center sm:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(113,113,122,0.3),transparent_45%)]"
      />
      <div className="relative mx-auto max-w-5xl">
        <h1 className="bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
          Discover Beautiful Wallpapers
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
          Find thousands of curated 4K, AMOLED, desktop and mobile wallpapers.
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-3" aria-label="Wallpaper categories">
          {categories.map((category) => (
            <li key={category}>
              <a
                href={`#${category.toLowerCase()}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
          >
            Browse Wallpapers
          </button>
          <button
            type="button"
            className="rounded-full border border-zinc-700 bg-zinc-900/50 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-800"
          >
            View Categories
          </button>
        </div>

        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
            <dt className="text-sm text-zinc-400">Wallpapers</dt>
            <dd className="mt-1 text-2xl font-semibold text-white">2,347+</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
            <dt className="text-sm text-zinc-400">Collections</dt>
            <dd className="mt-1 text-2xl font-semibold text-white">87</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
            <dt className="text-sm text-zinc-400">Quality</dt>
            <dd className="mt-1 text-2xl font-semibold text-white">4K Ultra HD</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
