import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
