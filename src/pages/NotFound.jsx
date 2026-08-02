import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20 text-center sm:px-8">
      <Seo title="Page Not Found" description="The requested Wallpaper Vault page could not be found." noIndex robots="noindex,nofollow" />
      <div>
        <p className="text-7xl font-bold tracking-tight text-white">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-white">Page Not Found</h1>
        <Link to="/" className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          Return Home
        </Link>
      </div>
    </section>
  )
}
