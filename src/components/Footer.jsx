import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      {/* Top border */}
      <div className={styles.topBorder} />

      <div className={`container ${styles.grid}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="#4ade80" strokeWidth="1.5" fill="none"/>
              <path d="M10 8 C10 8 8 14 10 18 C12 22 16 24 16 24 C16 24 20 22 22 18 C24 14 22 8 22 8 Z" stroke="white" strokeWidth="1.5" fill="none"/>
              <path d="M13 8 L19 8 L20 12 L16 14 L12 12 Z" fill="rgba(74,222,128,0.15)" stroke="#4ade80" strokeWidth="1"/>
            </svg>
            <span className={styles.logoText}>
              <span className={styles.nxt}>NXT</span>Glass
            </span>
          </a>
          <p className={styles.tagline}>Premium reusable drinkware.<br />Built for real life.</p>
          <p className={styles.subTagline}>
            NXTGlass is een label van TastyLockers en de specialist in premium, duurzame en herbruikbare drinkware. Powered by Eximia Drinkware.
          </p>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedin}
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.colList}>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:sales@nxtglass.nl">sales@nxtglass.nl</a>
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:+31615372684">+31 6 153 726 84</a>
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <a href="https://www.nxtglass.nl" target="_blank" rel="noopener noreferrer">www.nxtglass.nl</a>
            </li>
          </ul>
        </div>

        {/* Over NXTGlass */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Over NXTGlass</h4>
          <ul className={styles.colList}>
            <li><a href="#assortiment">Assortiment</a></li>
            <li><a href="#voor-wie">Voor wie</a></li>
            <li><a href="#eximia">Duurzaamheid</a></li>
            <li><a href="#brochures">Brochures</a></li>
            <li><a href="#over-ons">TastyLockers</a></li>
          </ul>
        </div>

        {/* Volg ons */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Volg ons</h4>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span>© 2024 NXTGlass – een label van TastyLockers B.V.</span>
            <div className={styles.bottomLinks}>
              <span>KvK: 87090653</span>
              <span className={styles.sep}>·</span>
              <span>BTW: NL864514659B01</span>
              <span className={styles.sep}>·</span>
              <a href="#">Privacyverklaring</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
