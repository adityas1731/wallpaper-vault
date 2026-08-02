import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import PageLoader from './components/common/PageLoader'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

const Wallpapers = lazy(() => import('./pages/Wallpapers'))
const WallpaperDetails = lazy(() => import('./pages/WallpaperDetails'))
const Favorites = lazy(() => import('./pages/Favorites'))
const CategoryWallpapers = lazy(() => import('./pages/CategoryWallpapers'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallpapers" element={<Wallpapers />} />
          <Route path="/wallpapers/:id" element={<WallpaperDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/categories/:categorySlug" element={<CategoryWallpapers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
