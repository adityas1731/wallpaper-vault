import { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import SearchModal from '../common/SearchModal'

export default function Layout({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)]">
      <Navbar onSearch={() => setIsSearchOpen(true)} />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <main>{children}</main>

      <Footer />
    </div>
  )
}
