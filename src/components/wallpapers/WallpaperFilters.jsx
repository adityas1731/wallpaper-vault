export default function WallpaperFilters({ filters, categories, onFilterChange, onClear }) {
  const hasActiveFilters = Boolean(filters.query.trim() || filters.category || filters.sort !== 'relevance')

  return (
    <form className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-end" onSubmit={(event) => event.preventDefault()}>
      <label className="block flex-1">
        <span className="sr-only">Search wallpapers</span>
        <input
          type="search"
          value={filters.query}
          onChange={(event) => onFilterChange({ ...filters, query: event.target.value })}
          placeholder="Search by title, category or tag..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
        />
      </label>
      <label className="block lg:w-48">
        <span className="sr-only">Category</span>
        <select value={filters.category} onChange={(event) => onFilterChange({ ...filters, category: event.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10">
          <option value="">All Categories</option>
          {categories.map((category) => <option key={category.value} value={category.value}>{category.label}</option>)}
        </select>
      </label>
      <label className="block lg:w-44">
        <span className="sr-only">Sort wallpapers</span>
        <select value={filters.sort} onChange={(event) => onFilterChange({ ...filters, sort: event.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10">
          <option value="relevance">Relevance</option>
          <option value="title-asc">Title: A to Z</option>
          <option value="title-desc">Title: Z to A</option>
        </select>
      </label>
      <button type="button" onClick={onClear} disabled={!hasActiveFilters} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-40">
        Clear Filters
      </button>
    </form>
  )
}
