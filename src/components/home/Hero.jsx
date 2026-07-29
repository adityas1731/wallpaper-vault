import { categories } from '../../data/categories'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32 text-center sm:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_0%,rgba(113,113,122,0.28),transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-zinc-700/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl -translate-y-16 sm:-translate-y-20">
        <h1 className="bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent sm:text-7xl sm:leading-[1.1]">
          Discover Beautiful Wallpapers
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
          Find thousands of curated 4K, AMOLED, desktop and mobile wallpapers.
        </p>

        <ul className="mt-9 flex flex-wrap justify-center gap-3" aria-label="Wallpaper categories">
          {categories.slice(0, 6).map((category) => (
            <li key={category}>
              <a
                href={`#${category.toLowerCase()}`}
                className="rounded-full border border-white/[0.08] bg-white/5 px-5 py-2 text-sm font-medium text-zinc-300 shadow-sm shadow-black/10 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/10 hover:text-white hover:shadow-md hover:shadow-black/20"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-11 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-white/5 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-xl hover:shadow-white/10"
          >
            Browse Wallpapers
          </button>
          <button
            type="button"
            className="rounded-full border border-zinc-700 bg-zinc-900/50 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-800 hover:shadow-lg hover:shadow-black/20"
          >
            View Categories
          </button>
        </div>

        <dl className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] px-6 py-5 backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]">
            <dt className="text-sm text-zinc-400">Wallpapers</dt>
            <dd className="mt-1 text-2xl font-semibold text-white">2,347+</dd>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] px-6 py-5 backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]">
            <dt className="text-sm text-zinc-400">Collections</dt>
            <dd className="mt-1 text-2xl font-semibold text-white">87</dd>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] px-6 py-5 backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]">
            <dt className="text-sm text-zinc-400">Quality</dt>
            <dd className="mt-1 text-2xl font-semibold text-white">4K Ultra HD</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
