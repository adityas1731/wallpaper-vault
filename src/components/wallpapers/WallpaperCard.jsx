import OptimizedImage from '../common/OptimizedImage'

export default function WallpaperCard({ wallpaper, metadata }) {
  const metaText = Array.isArray(metadata)
    ? metadata.filter(Boolean).join(' · ')
    : metadata || wallpaper.category

  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm shadow-[var(--shadow)] transition duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40">
      <div className="aspect-[2/3] overflow-hidden">
        <OptimizedImage src={wallpaper.image} alt={`${wallpaper.title} ${wallpaper.category.toLowerCase()} wallpaper`} className="size-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]" />
      </div>
      <div className="flex min-h-24 items-start justify-between gap-4 p-4">
        <div className="min-w-0">
          <h2 className="truncate font-medium text-[var(--text-primary)]">{wallpaper.title}</h2>
          <p className="mt-1 truncate text-sm text-[var(--text-secondary)]">{metaText}</p>
        </div>
        <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--button-secondary)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)]">{wallpaper.resolution}</span>
      </div>
    </article>
  )
}
