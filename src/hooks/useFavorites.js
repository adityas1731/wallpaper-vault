import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'wallpaper-vault-favorites'
const FAVORITES_UPDATED_EVENT = 'wallpaper-vault-favorites-updated'

function normalizeIds(value) {
  if (!Array.isArray(value)) return []

  return [...new Set(value.filter((id) => Number.isInteger(id)))]
}

function readFavoriteIds() {
  if (typeof window === 'undefined') return []

  try {
    return normalizeIds(JSON.parse(window.localStorage.getItem(STORAGE_KEY)))
  } catch {
    return []
  }
}

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState(readFavoriteIds)

  useEffect(() => {
    const syncFavorites = () => setFavoriteIds(readFavoriteIds())
    const handleStorageChange = (event) => {
      if (event.key === STORAGE_KEY) syncFavorites()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener(FAVORITES_UPDATED_EVENT, syncFavorites)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener(FAVORITES_UPDATED_EVENT, syncFavorites)
    }
  }, [])

  const toggleFavorite = useCallback((id) => {
    if (!Number.isInteger(id)) return

    const nextIds = favoriteIds.includes(id)
      ? favoriteIds.filter((favoriteId) => favoriteId !== id)
      : [...favoriteIds, id]

    setFavoriteIds(nextIds)

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIds))
      window.dispatchEvent(new Event(FAVORITES_UPDATED_EVENT))
    } catch {
      // Keep the in-memory favorite state when localStorage is unavailable.
    }
  }, [favoriteIds])

  const isFavorite = useCallback((id) => favoriteIds.includes(id), [favoriteIds])

  return { favoriteIds, isFavorite, toggleFavorite }
}
