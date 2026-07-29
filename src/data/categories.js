import { wallpapers } from './wallpapers'

export const categories = [...new Set(wallpapers.map((wallpaper) => wallpaper.category))]
