import { useEffect } from 'react'
import { siteConfig } from '../../config/site'

const MANAGED_ATTRIBUTE = 'data-wallpaper-vault-seo'

function updateMeta(attribute, value, content) {
  const selector = `meta[${attribute}="${value}"]`
  const tag = document.head.querySelector(`${selector}[${MANAGED_ATTRIBUTE}="true"]`) || document.head.querySelector(selector) || document.createElement('meta')

  tag.setAttribute(attribute, value)
  tag.setAttribute('content', content)
  tag.setAttribute(MANAGED_ATTRIBUTE, 'true')

  if (!tag.parentNode) document.head.appendChild(tag)
}

function removeMeta(attribute, value) {
  document.head.querySelector(`meta[${attribute}="${value}"][${MANAGED_ATTRIBUTE}="true"]`)?.remove()
}

function getCanonicalUrl(canonicalPath) {
  const currentUrl = new URL(window.location.href)

  if (!canonicalPath) {
    currentUrl.search = ''
    currentUrl.hash = ''
    return currentUrl.href
  }

  const cleanPath = canonicalPath.split(/[?#]/)[0].replace(/^\/+/, '')
  const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  const path = `${basePath}/${cleanPath}`.replace(/\/+/g, '/')

  return new URL(path, currentUrl.origin).href
}

export default function Seo({ title, description, image, canonicalPath, noIndex = false, type = 'website', robots }) {
  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return

    const resolvedTitle = title?.trim() || siteConfig.defaultTitle
    const pageTitle = resolvedTitle.includes(siteConfig.name)
      ? resolvedTitle
      : siteConfig.titleTemplate.replace('%s', resolvedTitle)
    const pageDescription = description?.trim() || siteConfig.description
    const canonicalUrl = getCanonicalUrl(canonicalPath)
    const robotsContent = robots || (noIndex ? 'noindex,follow' : 'index,follow')

    document.title = pageTitle
    updateMeta('name', 'description', pageDescription)
    updateMeta('name', 'robots', robotsContent)
    updateMeta('property', 'og:title', pageTitle)
    updateMeta('property', 'og:description', pageDescription)
    updateMeta('property', 'og:type', type)
    updateMeta('property', 'og:url', canonicalUrl)
    updateMeta('property', 'og:site_name', siteConfig.name)
    updateMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary')
    updateMeta('name', 'twitter:title', pageTitle)
    updateMeta('name', 'twitter:description', pageDescription)

    if (image) {
      updateMeta('property', 'og:image', image)
      updateMeta('name', 'twitter:image', image)
    } else {
      removeMeta('property', 'og:image')
      removeMeta('name', 'twitter:image')
    }

    const canonical = document.head.querySelector(`link[rel="canonical"][${MANAGED_ATTRIBUTE}="true"]`) || document.head.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', canonicalUrl)
    canonical.setAttribute(MANAGED_ATTRIBUTE, 'true')
    if (!canonical.parentNode) document.head.appendChild(canonical)
  }, [canonicalPath, description, image, noIndex, robots, title, type])

  return null
}
