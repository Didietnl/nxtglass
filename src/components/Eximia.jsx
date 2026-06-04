import { useEffect, useRef } from 'react'
import styles from './Eximia.module.css'

const bullets = [
  'Europese kwaliteit — 100% Made in Belgium',
  'Innovatief & functioneel design',
  'Duurzaam geproduceerd',
  'BPA free · Food safe · Vaatwasbestendig',
  'Voor professioneel gebruik',
]

function EximiaGlassScene() {
  return (
    <svg width="440" height="380" viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="egWine1" x1="35" y1="8" x2="85" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)"/>
          <stop offset="60%" stopColor="rgba(74,222,128,0.06)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)"/>
        </linearGradient>
        <linearGradient id="egWineLiq" x1="38" y1="72" x2="82" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(74,222,128,0.28)"/>
          <stop offset="100%" stopColor="rgba(34,197,94,0.06)"/>
        </linearGradient>
        <linearGradient id="egTumbler" x1="100" y1="28" x2="160" y2="148" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.09)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.03)"/>
        </linearGradient>
        <linearGradient id="egWine2" x1="168" y1="15" x2="218" y2="138" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.03)"/>
        </linearGradient>
        <radialGradient id="egGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(74,222,128,0.18)"/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>
        <radialGradient id="egFloor" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(74,222,128,0.12)"/>
          <stop offset="70%" stopColor="transparent"/>
        </radialGradient>
      </defs>

      {/* Ambient glow behind glasses */}
      <ellipse cx="150" cy="140" rx="140" ry="80" fill="url(#egGlow)" opacity="0.5"/>

      {/* ── Glass 1: Appellen/Satenne wine glass (main, center-left) ── */}
      <path d="M35 8 C28 36 22 64 26 88 C30 108 46 120 60 124 C74 120 90 108 94 88 C98 64 92 36 85 8 Z"
        fill="url(#egWine1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.4"/>
      <path d="M35 8 Q60 3 85 8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Liquid */}
      <path d="M30 78 C27 95 30 108 36 116 C44 122 60 124 60 124 C60 124 76 122 84 116 C90 108 93 95 90 78 Z"
        fill="url(#egWineLiq)" opacity="0.6"/>
      {/* Highlights */}
      <path d="M38 12 L34 76" stroke="rgba(255,255,255,0.28)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M44 9 L40 48" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeLinecap="round"/>
      {/* Stem */}
      <line x1="60" y1="124" x2="60" y2="168" stroke="rgba(255,255,255,0.28)" strokeWidth="1.8" strokeLinecap="round"/>
      <ellipse cx="60" cy="171" rx="20" ry="4.5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.1"/>
      <ellipse cx="60" cy="174" rx="26" ry="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>

      {/* ── Glass 2: Zeus cut-crystal tumbler (center) ── */}
      <path d="M105 28 L100 148 L165 148 L160 28 Z"
        fill="url(#egTumbler)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.3"/>
      <path d="M105 28 L160 28" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Crystal facets */}
      <line x1="120" y1="28" x2="116" y2="148" stroke="rgba(255,255,255,0.1)" strokeWidth="0.9"/>
      <line x1="132" y1="28" x2="130" y2="148" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7"/>
      <line x1="145" y1="28" x2="143" y2="148" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7"/>
      <line x1="152" y1="28" x2="152" y2="148" stroke="rgba(255,255,255,0.1)" strokeWidth="0.9"/>
      <path d="M103 60 L162 60" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7"/>
      <path d="M102 88 L163 88" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7"/>
      <path d="M101 114 L164 114" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7"/>
      {/* Diamond pattern */}
      <path d="M122 60 L130 75 L138 60" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="none"/>
      <path d="M122 88 L130 73 L138 88" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" fill="none"/>
      <path d="M134 88 L142 103 L150 88" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" fill="none"/>
      {/* Liquid */}
      <path d="M103 108 L100 148 L165 148 L162 108 Z" fill="rgba(74,222,128,0.1)" opacity="0.5"/>
      {/* Highlight */}
      <path d="M108 30 L105 100" stroke="rgba(255,255,255,0.22)" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M114 28 L112 65" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeLinecap="round"/>

      {/* ── Glass 3: Satenne wine glass right (elegant, narrower) ── */}
      <path d="M175 15 C170 38 166 62 168 80 C170 96 180 108 193 111 C206 108 216 96 218 80 C220 62 216 38 211 15 Z"
        fill="url(#egWine2)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2"/>
      <path d="M175 15 Q193 10 211 15" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M170 68 C168 80 170 90 174 97 C180 106 193 110 193 110" stroke="rgba(74,222,128,0.15)" strokeWidth="0.8" fill="none"/>
      <path d="M178 18 L175 70" stroke="rgba(255,255,255,0.2)" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="193" y1="111" x2="193" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="193" cy="153" rx="16" ry="3.5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>

      {/* ── Small shot / Bottlecut right background ── */}
      <g opacity="0.45">
        <path d="M228 55 L224 118 L256 118 L252 55 Z"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <path d="M228 55 L252 55" stroke="rgba(255,255,255,0.22)" strokeWidth="1" strokeLinecap="round"/>
        <path d="M226 75 L254 75" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7"/>
        <path d="M225 95 L255 95" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7"/>
        <path d="M230 58 L228 90" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
      </g>

      {/* Floor reflection */}
      <ellipse cx="140" cy="185" rx="130" ry="14" fill="url(#egFloor)" opacity="0.6"/>
      <line x1="10" y1="182" x2="270" y2="182" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

      {/* Tiny light specks */}
      <circle cx="92" cy="20" r="1.5" fill="rgba(74,222,128,0.5)" opacity="0.7"/>
      <circle cx="165" cy="32" r="1" fill="rgba(255,255,255,0.4)" opacity="0.6"/>
      <circle cx="220" cy="15" r="1.2" fill="rgba(74,222,128,0.4)" opacity="0.5"/>
    </svg>
  )
}

export default function Eximia() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="eximia" ref={ref}>
      <div className={styles.bg} />
      <div className={`container ${styles.inner}`}>
        {/* Left */}
        <div className={styles.left}>
          {/* Eximia logo block */}
          <div className={styles.logoBlock}>
            <div className={styles.eximiaLogo}>
              <div className={styles.eximiaE}>E</div>
              <div className={styles.eximiaTxt}>
                <div className={styles.eximiaName}>EXIMIA</div>
                <div className={styles.eximiaSub}>DRINKWARE</div>
              </div>
            </div>
          </div>

          <p className={styles.text}>
            NXTGlass is een label van TastyLockers en vertegenwoordigt de premium drinkware collecties van Eximia Drinkware — 100% geproduceerd in België met Europese kwaliteitsnormen.
          </p>

          <ul className={styles.bullets}>
            {bullets.map((b, i) => (
              <li key={i} className={styles.bullet}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="rgba(74,222,128,0.1)"/>
                  <path d="M8 12l3 3 5-5" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {b}
              </li>
            ))}
          </ul>

          {/* Belgium badge */}
          <div className={styles.belgiumRow}>
            <div className={styles.belgiumBadge}>
              <span>🇧🇪</span>
              <div>
                <div className={styles.belgiumTitle}>100% Made in Belgium</div>
                <div className={styles.belgiumDesc}>Europese productiestandaarden</div>
              </div>
            </div>
          </div>

          <a href="#contact" className="btn-secondary" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>
            Meer over Eximia <span>→</span>
          </a>
        </div>

        {/* Right: glass visual */}
        <div className={styles.right}>
          <div className={styles.glassDisplay}>
            <div className={styles.glowBehind} />
            <EximiaGlassScene />
          </div>
        </div>
      </div>
    </section>
  )
}
