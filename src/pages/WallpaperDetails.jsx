import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import WallpaperCard from '../components/wallpapers/WallpaperCard'
import OptimizedImage from '../components/common/OptimizedImage'
import Seo from '../components/common/Seo'
import PageLoader from '../components/common/PageLoader'
import { useWallpapers } from '../context/WallpapersContext'
import { useFavorites } from '../hooks/useFavorites'
import { downloadWallpaper } from '../utils/downloadWallpaper'
import { shareWallpaper } from '../utils/shareWallpaper'

export default function WallpaperDetails() {
  const { id } = useParams()
  const { wallpapers, isLoading } = useWallpapers()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadError, setDownloadError] = useState('')
  const [isSharing, setIsSharing] = useState(false)
  const [shareFeedback, setShareFeedback] = useState({ message: '', wallpaperId: null })
  const shareTimerRef = useRef(null)
  const wallpaper = wallpapers.find((item) => item.id === Number(id))

  useEffect(() => () => window.clearTimeout(shareTimerRef.current), [])

  if (isLoading) return <PageLoader />
  if (!wallpaper) return <Navigate to="/404" replace />

  const details = [
    ['Device support', 'Mobile / AMOLED'], ['Dimensions', wallpaper.dimensions], ['File size', wallpaper.fileSize],
    ['Uploaded', wallpaper.uploadedAt], ['Views', wallpaper.views], ['Downloads', wallpaper.downloads],
  ]
  const sameCategory = wallpapers.filter((item) => item.id !== wallpaper.id && item.category === wallpaper.category)
  const additionalWallpapers = wallpapers.filter((item) => item.id !== wallpaper.id && item.category !== wallpaper.category)
  const relatedWallpapers = [...sameCategory, ...additionalWallpapers].slice(0, 4)
  const shareMessage = shareFeedback.wallpaperId === wallpaper.id ? shareFeedback.message : ''
  const showShareMessage = (message) => {
    window.clearTimeout(shareTimerRef.current)
    setShareFeedback({ message, wallpaperId: wallpaper.id })
    shareTimerRef.current = window.setTimeout(() => {
      setShareFeedback({ message: '', wallpaperId: wallpaper.id })
    }, 2500)
  }
  const handleDownload = async () => {
    setIsDownloading(true)
    setDownloadError('')

    try {
      await downloadWallpaper({ imageUrl: wallpaper.image, title: wallpaper.title, id: wallpaper.id })
    } catch {
      setDownloadError('Download failed. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }
  const handleShare = async () => {
    if (isSharing) return

    setIsSharing(true)
    setShareFeedback({ message: '', wallpaperId: wallpaper.id })
    window.clearTimeout(shareTimerRef.current)

    try {
      const result = await shareWallpaper({ title: wallpaper.title, url: window.location.href })

      if (result === 'shared') showShareMessage('Shared successfully.')
      if (result === 'copied') showShareMessage('Link copied to clipboard.')
    } catch {
      showShareMessage('Unable to share this wallpaper. Please try again.')
    } finally {
      setIsSharing(false)
    }
  }

  return (
    <>
      <Seo title={wallpaper.title} description={`Download ${wallpaper.title}, a ${wallpaper.category} wallpaper from Wallpaper Vault.`} image={wallpaper.image} canonicalPath={`/wallpapers/${wallpaper.id}`} type="article" />
      <section className="px-6 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(20rem,2fr)] lg:items-start lg:gap-12 xl:gap-16">
          <div className="flex w-full justify-center">
            <div className="w-fit max-w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-2 sm:p-3">
              <OptimizedImage src={wallpaper.image} alt={`${wallpaper.title} ${wallpaper.category.toLowerCase()} wallpaper preview`} priority className="block h-auto max-h-[70vh] max-w-full w-auto rounded-xl object-contain" />
            </div>
          </div>
          <article>
            <div className="flex flex-wrap gap-2"><span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-200">{wallpaper.category}</span><span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-200">{wallpaper.resolution}</span></div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">{wallpaper.title}</h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-400">A curated wallpaper designed for vivid contrast and immersive displays.</p>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-white/10 py-7 sm:grid-cols-3">{details.map(([label, value]) => <div key={label}><dt className="text-sm text-zinc-500">{label}</dt><dd className="mt-1 font-medium text-zinc-200">{value}</dd></div>)}</dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button type="button" onClick={handleDownload} disabled={isDownloading} aria-busy={isDownloading} className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-white/5 transition hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-xl hover:shadow-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-white">{isDownloading ? 'Downloading...' : 'Download Wallpaper'}</button>
              <button type="button" aria-pressed={isFavorite(wallpaper.id)} onClick={() => toggleFavorite(wallpaper.id)} className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{isFavorite(wallpaper.id) ? 'Remove from Favorites' : 'Add to Favorites'}</button>
              <button type="button" onClick={handleShare} disabled={isSharing} aria-busy={isSharing} className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-white">{isSharing ? 'Sharing...' : 'Share Wallpaper'}</button>
            </div>
            <p aria-live="polite" className="mt-3 text-sm text-red-400">{downloadError}</p>
            <p aria-live="polite" className={`text-sm ${shareMessage.startsWith('Unable') ? 'text-red-400' : 'text-zinc-400'}`}>{shareMessage}</p>
          </article>
        </div>
      </section>
      <section className="px-6 pb-24 sm:px-8 sm:pb-32"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Related Wallpapers</h2><ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">{relatedWallpapers.map((relatedWallpaper) => <li key={relatedWallpaper.id}><Link to={`/wallpapers/${relatedWallpaper.id}`} className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><WallpaperCard wallpaper={relatedWallpaper} /></Link></li>)}</ul></div></section>
    </>
  )
}
