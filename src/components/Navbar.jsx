import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import NXTGlassLogo from './NXTGlassLogo'

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
          <NXTGlassLogo size={38} />
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
