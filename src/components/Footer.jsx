import { Link } from 'react-router-dom'
import logoIconUrl from '../assets/forge_guild_icon.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="container footer-new__inner">
        {/* Column 1: Logo */}
        <div className="footer-new__col footer-new__col--main">
          <Link to="/" className="footer-new__logo">
            <img src={logoIconUrl} alt="Forge Guild" className="footer-new__logo-img" />
            <span className="footer-new__logo-text">Forge Guild</span>
          </Link>
        </div>

        {/* Column 2: Social Media */}
        <div className="footer-new__col">
          <h3 className="footer-new__title"><span className="footer-new__pipe">|</span> Social Media</h3>
          <nav className="footer-new__nav">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-new__link">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-new__link">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-new__link">YouTube</a>
          </nav>
        </div>

        {/* Column 3: Navigation */}
        <div className="footer-new__col">
          <h3 className="footer-new__title"><span className="footer-new__pipe">|</span> Navigation</h3>
          <nav className="footer-new__nav">
            <Link to="/" className="footer-new__link">Home</Link>
            <Link to="/team" className="footer-new__link">Our Team</Link>
            <Link to="/projects" className="footer-new__link">Projects</Link>
            <Link to="/services" className="footer-new__link">Services</Link>
            <Link to="/contact" className="footer-new__link">Contact Us</Link>
          </nav>
        </div>

        {/* Column 4: Contact Info & Follow Us */}
        <div className="footer-new__col">
          <h3 className="footer-new__title"><span className="footer-new__pipe">|</span> Contact Info</h3>
          <ul className="footer-new__contact-list">
            <li>
              <svg className="footer-new__icon" viewBox="0 0 24 24">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
              </svg> 
              hello@forgeguild.com
            </li>
            <li>
              <svg className="footer-new__icon" viewBox="0 0 24 24">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.06 21 2 12.94 2 3C2 2.45 2.45 2 3 2H6.5C7.05 2 7.5 2.45 7.5 3C7.5 4.25 7.7 5.45 8.07 6.57C8.18 6.92 8.1 7.31 7.82 7.59L6.62 10.79Z" />
              </svg> 
              +91 7827485763
            </li>
          </ul>

          <h3 className="footer-new__title footer-new__title--mt"><span className="footer-new__pipe">|</span> Follow Us</h3>
          <div className="footer-new__social-pills">
            <a href="https://instagram.com/_forgeguild" target="_blank" rel="noopener noreferrer" className="footer-new__social-pill insta-pill">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-new__bottom">
        <div className="container footer-new__bottom-inner">
          <div className="footer-new__copy">
            © {new Date().getFullYear()} Forge Guild. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
