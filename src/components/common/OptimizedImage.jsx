import { useState } from 'react'

export default function OptimizedImage({ src, alt, className = '', priority = false, onError, onLoad, ...props }) {
  const [loadedSrc, setLoadedSrc] = useState(null)
  const [failedSrc, setFailedSrc] = useState(null)
  const hasError = failedSrc === src
  const isLoaded = loadedSrc === src

  if (hasError) {
    return <div role="img" aria-label={alt} className={`${className} bg-zinc-900/70`} />
  }

  return (
    <img
      {...props}
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      onLoad={(event) => {
        setLoadedSrc(src)
        onLoad?.(event)
      }}
      onError={(event) => {
        setFailedSrc(src)
        onError?.(event)
      }}
      className={`${className} bg-zinc-900/70 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    />
  )
}
