import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logoIconUrl from '../assets/forge_guild_icon.png'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/',          label: 'Home' },
  { to: '/team',      label: 'Our Team' },
  { to: '/projects',  label: 'Projects' },
  { to: '/services',  label: 'Services' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Full-width Standard Navbar */}
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          
          <div className="navbar__left">
            <Link to="/" className="site-logo" onClick={() => setMenuOpen(false)}>
              <img src={logoIconUrl} alt="Forge Guild" className="site-logo__img" />
              <span className="site-logo__text">Forge Guild</span>
            </Link>
          </div>

          <nav className="navbar__center">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__right">
            <Link to="/contact" className="btn-nav desktop-only">
              Contact Us
            </Link>
            <button
              className={`mobile-burger${menuOpen ? ' mobile-burger--open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCD6F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCD6F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
          
        </div>
      </header>

      {/* Mobile fullscreen menu overlay */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__links">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn-white mobile-menu__cta"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT US ↗
          </Link>
        </nav>
      </div>
    </>
  )
}
