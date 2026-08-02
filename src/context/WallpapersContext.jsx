import { createContext, useContext, useEffect, useState } from 'react'
import { getWallpaperDataSource, getWallpapers } from '../services/wallpaperRepository'

const WallpapersContext = createContext(null)

export function WallpapersProvider({ children }) {
  const [wallpapers, setWallpapers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [dataSource, setDataSource] = useState('local')

  useEffect(() => {
    let isMounted = true

    getWallpapers()
      .then((nextWallpapers) => {
        if (!isMounted) return
        setWallpapers(nextWallpapers)
        setDataSource(getWallpaperDataSource())
      })
      .catch(() => {
        if (!isMounted) return
        setError('Wallpaper data could not be loaded.')
      })
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  return <WallpapersContext.Provider value={{ wallpapers, isLoading, error, dataSource }}>{children}</WallpapersContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWallpapers() {
  const context = useContext(WallpapersContext)

  if (!context) {
    throw new Error('useWallpapers must be used within a WallpapersProvider.')
  }

  return context
}
