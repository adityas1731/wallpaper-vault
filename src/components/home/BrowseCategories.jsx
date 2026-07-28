const categories = [
  { id: 1, name: 'Desktop', count: '428 Wallpapers', image: 'https://picsum.photos/800/600?random=21' },
  { id: 2, name: 'AMOLED', count: '312 Wallpapers', image: 'https://picsum.photos/800/600?random=22' },
  { id: 3, name: 'Anime', count: '286 Wallpapers', image: 'https://picsum.photos/800/600?random=23' },
  { id: 4, name: 'Gaming', count: '354 Wallpapers', image: 'https://picsum.photos/800/600?random=24' },
  { id: 5, name: 'Nature', count: '416 Wallpapers', image: 'https://picsum.photos/800/600?random=25' },
  { id: 6, name: 'Minimal', count: '198 Wallpapers', image: 'https://picsum.photos/800/600?random=26' },
  { id: 7, name: 'Cars', count: '241 Wallpapers', image: 'https://picsum.photos/800/600?random=27' },
  { id: 8, name: 'Abstract', count: '295 Wallpapers', image: 'https://picsum.photos/800/600?random=28' },
]

export default function Categories() {
  return (
    <section id="categories" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-3 text-zinc-400">Explore wallpapers by your favorite style.</p>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <li key={category.id}>
              <a
                href={`#category-${category.name.toLowerCase()}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 ease-out hover:-translate-y-1 hover:border-white/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <img
                  src={category.image}
                  alt={`${category.name} wallpaper category`}
                  className="size-full object-cover transition duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent px-5 pb-5 pt-16">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{category.count}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
