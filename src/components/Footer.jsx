import NXTGlassLogo from './NXTGlassLogo'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer} id="contact">
      <div className={s.topLine}/>

      <div className={`container ${s.grid}`}>
        {/* Brand */}
        <div className={s.brand}>
          <a href="#" className={s.logo}>
            <NXTGlassLogo size={38}/>
            <span className={s.wordmark}><em>NXT</em>Glass</span>
          </a>
          <p className={s.tagline}>Premium reusable drinkware.<br/>Built for real life.</p>
          <p className={s.about}>
            NXTGlass is een label van TastyLockers B.V. en de specialist in premium, duurzame en herbruikbare drinkware. Powered by Eximia Drinkware — 100% Made in Belgium.
          </p>
          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={s.li} aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

        {/* Contact */}
        <div className={s.col}>
          <h4 className={s.colH}>Contact</h4>
          <ul className={s.list}>
            <li><Icon type="mail"/><a href="mailto:sales@nxtglass.nl">sales@nxtglass.nl</a></li>
            <li><Icon type="phone"/><a href="tel:+31615372684">+31 6 153 726 84</a></li>
            <li><Icon type="web"/><a href="https://www.nxtglass.nl" target="_blank" rel="noopener noreferrer">www.nxtglass.nl</a></li>
          </ul>
        </div>

        {/* Over NXTGlass */}
        <div className={s.col}>
          <h4 className={s.colH}>Over NXTGlass</h4>
          <ul className={s.list}>
            {[['Assortiment','#assortiment'],['Voor wie','#voor-wie'],['Duurzaamheid','#duurzaamheid'],['Brochures','#brochures'],['TastyLockers','#over-ons'],['Offerte aanvragen','#contact']].map(([l,h])=>(
              <li key={h}><a href={h}>{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Volg ons */}
        <div className={s.col}>
          <h4 className={s.colH}>Volg ons</h4>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={s.social}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={s.btm}>
        <div className={`container ${s.btmRow}`}>
          <span>© 2024 NXTGlass – een label van TastyLockers B.V.</span>
          <div className={s.btmLinks}>
            <span>KvK: 87090653</span>
            <span className={s.dot}>·</span>
            <span>BTW: NL864514659B01</span>
            <span className={s.dot}>·</span>
            <a href="#">Privacyverklaring</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Icon({ type }) {
  if (type === 'mail')  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  if (type === 'phone') return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
}
