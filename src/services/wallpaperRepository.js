import { wallpapers as localWallpapers } from '../data/wallpapers'
import { hasSupabaseConfiguration, supabaseGet } from './supabaseRest'

let wallpaperCache = null
let cachedDataSource = 'local'

const asString = (value, fallback = '') => typeof value === 'string' ? value : fallback
const asNumber = (value, fallback = 0) => Number.isFinite(Number(value)) ? Number(value) : fallback

function createSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function normalizeTags(tags) {
  if (Array.isArray(tags)) return tags.filter((tag) => typeof tag === 'string')
  if (typeof tags === 'string') return tags.split(',').map((tag) => tag.trim()).filter(Boolean)
  return []
}

function normalizeWallpaper(row) {
  const title = asString(row.title, 'Untitled Wallpaper')
  const image = asString(row.image_url) || asString(row.thumbnail_url)
  const orientation = asString(row.orientation, 'portrait')

  return {
    id: asNumber(row.id),
    slug: asString(row.slug) || createSlug(title),
    title,
    image,
    thumbnail: asString(row.thumbnail_url) || image,
    category: asString(row.category, 'Uncategorized'),
    tags: normalizeTags(row.tags),
    resolution: asString(row.resolution),
    aspectRatio: asString(row.aspect_ratio),
    orientation,
    colors: normalizeTags(row.colors),
    fileSize: asString(row.file_size),
    format: asString(row.format),
    views: asString(row.views),
    downloads: asString(row.downloads),
    uploadedAt: asString(row.uploaded_at),
    uploaded: asString(row.uploaded_at),
    added: asString(row.added),
    dimensions: asString(row.dimensions),
    width: asNumber(row.width),
    height: asNumber(row.height),
    description: asString(row.description),
    featured: Boolean(row.featured),
    trending: Boolean(row.trending),
  }
}

export async function getWallpapers() {
  if (wallpaperCache) return wallpaperCache

  if (!hasSupabaseConfiguration()) {
    cachedDataSource = 'local'
    return localWallpapers
  }

  try {
    const rows = await supabaseGet('wallpapers?select=*&published=eq.true&order=id.asc')
    wallpaperCache = Array.isArray(rows) ? rows.map(normalizeWallpaper) : []
    cachedDataSource = 'supabase'
    return wallpaperCache
  } catch {
    cachedDataSource = 'local'
    if (import.meta.env.DEV) console.warn('Supabase wallpapers unavailable; using local data.')
    return localWallpapers
  }
}

export function getWallpaperDataSource() {
  return cachedDataSource
}

export function clearWallpaperCache() {
  wallpaperCache = null
  cachedDataSource = 'local'
}
