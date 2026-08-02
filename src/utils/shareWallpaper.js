function copyWithTextArea(url) {
  const textArea = document.createElement('textarea')

  textArea.value = url
  textArea.setAttribute('readonly', '')
  textArea.style.position = 'fixed'
  textArea.style.opacity = '0'
  document.body.appendChild(textArea)
  textArea.select()

  try {
    if (!document.execCommand('copy')) {
      throw new Error('The browser could not copy the link.')
    }
  } finally {
    textArea.remove()
  }
}

export async function shareWallpaper({ title, url }) {
  if (typeof url !== 'string' || !url.trim()) {
    throw new Error('A valid wallpaper page URL is required.')
  }

  const pageUrl = url.trim()
  const wallpaperTitle = typeof title === 'string' && title.trim() ? title.trim() : 'this wallpaper'

  if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
    try {
      await navigator.share({
        title: wallpaperTitle,
        text: `Check out ${wallpaperTitle} on Wallpaper Vault.`,
        url: pageUrl,
      })
      return 'shared'
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') return 'cancelled'

      throw new Error('Unable to share the wallpaper.', { cause: error })
    }
  }

  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(pageUrl)
    } else {
      copyWithTextArea(pageUrl)
    }

    return 'copied'
  } catch {
    try {
      copyWithTextArea(pageUrl)
      return 'copied'
    } catch (fallbackError) {
      throw new Error('Unable to copy the wallpaper link.', { cause: fallbackError })
    }
  }
}
