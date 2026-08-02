import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { wallpapers } from '../../data/wallpapers'
import { searchWallpapers } from '../../utils/searchWallpapers'

export default function SearchModal({ isOpen, onClose }) {
  const [search, setSearch] = useState({ query: '', pathname: '' })
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef(null)
  const resultRefs = useRef([])
  const closeModalRef = useRef(null)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const query = search.pathname === pathname ? search.query : ''

  const closeModal = useCallback(() => {
    setSearch({ query: '', pathname })
    setSelectedIndex(-1)
    onClose()
  }, [onClose, pathname])

  const openWallpaper = useCallback((wallpaper) => {
    setSearch({ query: '', pathname })
    setSelectedIndex(-1)
    onClose()
    navigate(`/wallpapers/${wallpaper.id}`)
  }, [navigate, onClose, pathname])

  useEffect(() => {
    closeModalRef.current = closeModal
  }, [closeModal])

  useEffect(() => {
    closeModalRef.current?.()
  }, [pathname])

  const results = useMemo(
    () => searchWallpapers(wallpapers, query),
    [query],
  )

  useEffect(() => {
    if (!isOpen) return undefined

    inputRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal()
        return
      }

      if (!results.length) return

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setSelectedIndex((index) => (index + 1) % results.length)
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setSelectedIndex((index) => (index === -1 ? results.length - 1 : (index - 1 + results.length) % results.length))
      }

      if (event.key === 'Enter' && selectedIndex >= 0) {
        event.preventDefault()
        openWallpaper(results[selectedIndex])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closeModal, isOpen, openWallpaper, pathname, results, selectedIndex])

  useEffect(() => {
    if (selectedIndex >= 0) {
      resultRefs.current[selectedIndex]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [selectedIndex])

  if (!isOpen) return null

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-zinc-950/70 px-4 py-20 backdrop-blur-sm sm:items-center sm:py-8"
      onMouseDown={closeModal}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-title"
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/95 shadow-2xl shadow-black/50"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 p-4 sm:p-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 shrink-0 text-zinc-400" aria-hidden="true">
            <circle cx="11" cy="11" r="6" />
            <path d="m16 16 4 4" />
          </svg>
          <label htmlFor="wallpaper-search" className="sr-only">Search wallpapers</label>
          <input
            ref={inputRef}
            id="wallpaper-search"
            type="search"
            value={query}
            onChange={(event) => {
              setSearch({ query: event.target.value, pathname })
              setSelectedIndex(-1)
            }}
            placeholder="Search wallpapers..."
            className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-zinc-500"
          />

        </div>

        <div className={`h-80 p-3 sm:p-4 ${results.length ? 'search-scrollbar overflow-y-auto' : 'flex items-center justify-center overflow-hidden'}`}>
          <h2 id="search-title" className="sr-only">Search wallpapers</h2>
          {results.length ? (
            <ul className="space-y-2">
              {results.map((wallpaper, index) => (
                <li key={wallpaper.id} ref={(element) => { resultRefs.current[index] = element }}>
                  <button
                    type="button"
                    onClick={() => openWallpaper(wallpaper)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex w-full items-center gap-4 rounded-xl border p-2 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${selectedIndex === index ? 'border-white/10 bg-white/10' : 'border-transparent hover:bg-white/5'}`}
                  >
                    <img src={wallpaper.thumbnail} alt="" className="size-14 rounded-lg object-cover" />
                    <div><p className="font-medium text-white">{wallpaper.title}</p><p className="mt-1 text-sm text-zinc-400">{wallpaper.category}</p></div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm font-medium text-zinc-300">No wallpapers found.</p>
          )}
        </div>
      </section>
    </div>
  )
}
