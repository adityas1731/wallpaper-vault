import BrowseCategories from '../components/home/BrowseCategories'
import FeaturedWallpapers from '../components/home/FeaturedWallpapers'
import Hero from '../components/home/Hero'
import TrendingWallpapers from '../components/home/TrendingWallpapers'

export default function Home() {
  return (
    <>
      <Hero />
      <TrendingWallpapers />
      <FeaturedWallpapers />
      <BrowseCategories />
    </>
  )
}
