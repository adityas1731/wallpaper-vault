export function getCategories(wallpapers) {
  if (!Array.isArray(wallpapers)) return []

  return [...new Set(wallpapers.map((wallpaper) => wallpaper?.category).filter(Boolean))]
}
