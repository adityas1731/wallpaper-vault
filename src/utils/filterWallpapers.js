import { categoryMatchesSlug } from './categorySlug'
import { searchWallpapers } from './searchWallpapers'

const normalizeTitle = (value) => (typeof value === 'string' ? value : '')

export function filterWallpapers(wallpapers, filters = {}) {
  const { query = '', category = '', sort = 'relevance' } = filters
  const searchedWallpapers = searchWallpapers(wallpapers, query)
  const categoryValue = typeof category === 'string' ? category.trim() : ''
  const filteredWallpapers = categoryValue
    ? searchedWallpapers.filter((wallpaper) => categoryMatchesSlug(wallpaper?.category, categoryValue))
    : searchedWallpapers

  if (sort === 'title-asc') {
    return [...filteredWallpapers].sort((first, second) => normalizeTitle(first?.title).localeCompare(normalizeTitle(second?.title)))
  }

  if (sort === 'title-desc') {
    return [...filteredWallpapers].sort((first, second) => normalizeTitle(second?.title).localeCompare(normalizeTitle(first?.title)))
  }

  return filteredWallpapers
}
