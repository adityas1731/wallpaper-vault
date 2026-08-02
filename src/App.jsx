import { Link, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import WallpaperDetails from './pages/WallpaperDetails'
import Wallpapers from './pages/Wallpapers'

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20 text-center sm:px-8">
      <div>
        <p className="text-7xl font-bold tracking-tight text-white">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-white">Page Not Found</h1>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Return Home
        </Link>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallpapers" element={<Wallpapers />} />
        <Route path="/wallpapers/:id" element={<WallpaperDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
