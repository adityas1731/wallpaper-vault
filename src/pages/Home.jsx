import BrowseCategories from '../components/home/BrowseCategories'
import FeaturedWallpapers from '../components/home/FeaturedWallpapers'
import Hero from '../components/home/Hero'
import RecentlyAdded from '../components/home/RecentlyAdded'
import TrendingWallpapers from '../components/home/TrendingWallpapers'
import Seo from '../components/common/Seo'

export default function Home() {
  return (
    <>
      <Seo title="Wallpaper Vault | Discover Beautiful Wallpapers" description="Discover curated desktop, mobile, AMOLED, anime, gaming and 4K wallpapers." canonicalPath="/" />
      <Hero />
      <TrendingWallpapers />
      <FeaturedWallpapers />
      <BrowseCategories />
      <RecentlyAdded />
    </>
  )
}
