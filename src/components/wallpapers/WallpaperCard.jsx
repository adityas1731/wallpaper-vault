export default function WallpaperCard({ wallpaper }) {
  return (
    <article className="group relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 ease-out hover:-translate-y-1 hover:border-white/30">
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
        <h2 className="text-lg font-semibold text-white">{wallpaper.title}</h2>
      </div>
    </article>
  )
}
