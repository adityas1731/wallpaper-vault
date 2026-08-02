const MIME_EXTENSIONS = {
  'image/avif': 'avif',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
}

function createFilenameBase(title, id) {
  const normalizedTitle = typeof title === 'string'
    ? title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '')
    : ''

  return normalizedTitle || `wallpaper-${id}`
}

function getUrlExtension(imageUrl) {
  const match = imageUrl.match(/\.([a-z0-9]+)(?:[?#]|$)/i)
  const extension = match?.[1]?.toLowerCase()

  return ['jpg', 'jpeg', 'png', 'webp', 'avif'].includes(extension) ? extension : ''
}

function getExtension(blob, imageUrl) {
  const mimeType = blob.type.split(';')[0].toLowerCase()
  return MIME_EXTENSIONS[mimeType] || getUrlExtension(imageUrl) || 'jpg'
}

export async function downloadWallpaper({ imageUrl, title, id }) {
  if (typeof imageUrl !== 'string' || !imageUrl.trim()) {
    throw new Error('A valid wallpaper image URL is required.')
  }

  try {
    const response = await fetch(imageUrl)

    if (!response.ok) {
      throw new Error(`The image server returned ${response.status}.`)
    }

    const blob = await response.blob()
    const objectUrl = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    const extension = getExtension(blob, imageUrl)

    anchor.href = objectUrl
    anchor.download = `${createFilenameBase(title, id)}.${extension}`
    anchor.style.display = 'none'

    try {
      document.body.appendChild(anchor)
      anchor.click()
    } finally {
      anchor.remove()
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 0)
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unexpected error occurred.'
    throw new Error(`Download failed: ${message}`, { cause: error })
  }
}
