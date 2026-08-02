import { Link, useLocation, useMatch } from 'react-router-dom'

export default function HomeLogoLink({ className, children }) {
  const { pathname } = useLocation()
  const homeMatch = useMatch({ path: '/', end: true })
  const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  const isHome = homeMatch !== null || pathname.replace(/\/$/, '') === '' || pathname.replace(/\/$/, '') === basePath

  const handleClick = (event) => {
    if (!isHome) return

    event.preventDefault()
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return <Link to="/" onClick={handleClick} className={className}>{children}</Link>
}
