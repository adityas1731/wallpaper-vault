export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 text-center sm:px-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Discover Beautiful Wallpapers
        </h1>
        <p className="mt-5 text-lg text-zinc-400 sm:text-xl">
          Curated wallpapers for every screen.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            Browse Wallpapers
          </button>
          <button
            type="button"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            Categories
          </button>
        </div>
      </div>
    </section>
  )
}
