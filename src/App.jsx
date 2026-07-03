import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './pages/Index'
import OurTeam from './pages/OurTeam'
import Projects from './pages/Projects'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
