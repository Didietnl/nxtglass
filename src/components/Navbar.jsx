import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Assortiment', href: '#assortiment' },
  { label: 'Voor wie', href: '#voor-wie' },
  { label: 'Duurzaamheid', href: '#eximia' },
  { label: 'Brochures', href: '#brochures' },
  { label: 'Over ons', href: '#over-ons' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" stroke="#4ade80" strokeWidth="1.5" fill="none"/>
            <path d="M10 8 C10 8 8 14 10 18 C12 22 16 24 16 24 C16 24 20 22 22 18 C24 14 22 8 22 8 Z" stroke="white" strokeWidth="1.5" fill="none"/>
            <path d="M13 8 L19 8 L20 12 L16 14 L12 12 Z" fill="rgba(74,222,128,0.15)" stroke="#4ade80" strokeWidth="1"/>
          </svg>
          <span className={styles.logoText}>
            <span className={styles.logoNXT}>NXT</span>Glass
          </span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className={styles.navLink}>{link.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.cta}>
          <a href="#contact" className="btn-primary">
            Offerte aanvragen <span>→</span>
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={`btn-primary ${styles.mobileCta}`} onClick={() => setMenuOpen(false)}>
            Offerte aanvragen →
          </a>
        </div>
      )}
    </header>
  )
}
