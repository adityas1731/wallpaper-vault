const normalize = (value) => (typeof value === 'string' ? value.toLowerCase() : '')

export function searchWallpapers(wallpapers, query) {
  if (!Array.isArray(wallpapers)) return []

  const searchTerm = normalize(typeof query === 'string' ? query.trim() : '')

  if (!searchTerm) return wallpapers

  return wallpapers
    .map((wallpaper, index) => {
      const title = normalize(wallpaper?.title)
      const category = normalize(wallpaper?.category)
      const tags = Array.isArray(wallpaper?.tags) ? wallpaper.tags.map(normalize) : []
      let rank = Number.POSITIVE_INFINITY

      if (title === searchTerm) rank = 0
      else if (title.startsWith(searchTerm)) rank = 1
      else if (title.includes(searchTerm)) rank = 2
      else if (category.includes(searchTerm)) rank = 3
      else if (tags.some((tag) => tag.includes(searchTerm))) rank = 4

      return { wallpaper, index, rank }
    })
    .filter(({ rank }) => Number.isFinite(rank))
    .sort((first, second) => first.rank - second.rank || first.index - second.index)
    .map(({ wallpaper }) => wallpaper)
}
