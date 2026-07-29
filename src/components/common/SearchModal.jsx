import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { wallpapers } from '../../data/wallpapers'

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  const navigate = useNavigate()
  const { pathname } = useLocation()

  // Close and reset whenever navigation occurs
useEffect(() => {
  if (!isOpen) return

  setQuery('')
  onClose()

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [pathname])

  // Focus input when opened
  useEffect(() => {
    if (!isOpen) return

    inputRef.current?.focus()
  }, [isOpen])

  // ESC key
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setQuery('')
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const results = useMemo(() => {
    const searchTerm = query.trim().toLowerCase()

    if (!searchTerm) return wallpapers

    return wallpapers.filter((wallpaper) =>
      wallpaper.title.toLowerCase().includes(searchTerm) ||
      wallpaper.category.toLowerCase().includes(searchTerm) ||
      wallpaper.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm)
      )
    )
  }, [query])

  if (!isOpen) return null

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-zinc-950/70 px-4 py-20 backdrop-blur-sm sm:items-center sm:py-8"
      onMouseDown={() => {
        setQuery('')
        onClose()
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-title"
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/95 shadow-2xl shadow-black/50"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 p-4 sm:p-5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="size-5 shrink-0 text-zinc-400"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="6" />
            <path d="m16 16 4 4" />
          </svg>

          <label htmlFor="wallpaper-search" className="sr-only">
            Search wallpapers
          </label>

          <input
            ref={inputRef}
            id="wallpaper-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search wallpapers..."
            className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-zinc-500"
          />

          <button
            type="button"
            onClick={() => {
              setQuery('')
              onClose()
            }}
            className="rounded-lg px-2 py-1 text-sm text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            Close
          </button>
        </div>

        <div className="search-scrollbar h-80 overflow-y-auto p-3 sm:p-4">
          <h2 id="search-title" className="sr-only">
            Search wallpapers
          </h2>

          {results.length ? (
            <ul className="space-y-2">
              {results.map((wallpaper) => (
                <li key={wallpaper.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('')
                      onClose()
                      navigate(`/wallpapers/${wallpaper.id}`)
                    }}
                    className="flex w-full items-center gap-4 rounded-xl p-2 text-left transition hover:bg-white/5"
                  >
                    <img
                      src={wallpaper.thumbnail}
                      alt=""
                      className="size-14 rounded-lg object-cover"
                    />

                    <div>
                      <p className="font-medium text-white">
                        {wallpaper.title}
                      </p>

                      <p className="mt-1 text-sm text-zinc-400">
                        {wallpaper.category}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-2 py-8 text-center text-md text-zinc-400">
              No wallpapers found
            </p>
          )}
        </div>
      </section>
    </div>
  )
}