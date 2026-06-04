import { useEffect, useRef } from 'react'
import styles from './Brochures.module.css'

/* Cover illustrations for each brochure based on actual catalog content */
function TastyLockersCover() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 240 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dark gradient bg */}
      <rect width="240" height="170" fill="url(#tlBg)"/>
      {/* Three festival cups */}
      <path d="M40 30 L34 120 L68 120 L62 30 Z" fill="rgba(74,222,128,0.12)" stroke="rgba(74,222,128,0.4)" strokeWidth="1.2"/>
      <path d="M40 30 L62 30" stroke="rgba(74,222,128,0.6)" strokeWidth="1.4" strokeLinecap="round"/>
      {/* Print band */}
      <rect x="37" y="58" width="28" height="20" rx="1.5" fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.2)" strokeWidth="0.8"/>
      <path d="M39 65 Q51 62 63 65" stroke="rgba(74,222,128,0.4)" strokeWidth="0.8" fill="none"/>
      <circle cx="47" cy="68" r="2" fill="rgba(74,222,128,0.5)"/>
      <circle cx="55" cy="68" r="2" fill="rgba(74,222,128,0.5)"/>
      {/* Highlight */}
      <path d="M43 33 L41 85" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Second cup left */}
      <path d="M14 38 L10 118 L42 118 L38 38 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" opacity="0.7"/>
      <path d="M14 38 L38 38" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round"/>

      {/* Third cup right */}
      <path d="M80 34 L76 118 L110 118 L106 34 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" opacity="0.65"/>
      <path d="M80 34 L106 34" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round"/>
      {/* Custom artwork on right cup */}
      <rect x="83" y="60" width="20" height="14" rx="1" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7"/>

      {/* TastyLockers wordmark */}
      <text x="130" y="62" fill="rgba(255,255,255,0.9)" fontSize="13" fontWeight="700" fontFamily="Montserrat,sans-serif">Tasty</text>
      <text x="130" y="78" fill="rgba(255,255,255,0.9)" fontSize="13" fontWeight="700" fontFamily="Montserrat,sans-serif">Lockers</text>
      <text x="130" y="95" fill="rgba(74,222,128,0.7)" fontSize="7" fontWeight="600" fontFamily="Inter,sans-serif" letterSpacing="2">CATALOGUS</text>

      {/* Divider */}
      <line x1="125" y1="40" x2="125" y2="130" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>

      {/* Property icons bottom */}
      <circle cx="145" cy="130" r="8" fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.2)" strokeWidth="0.8"/>
      <text x="145" y="133.5" fill="rgba(74,222,128,0.7)" fontSize="7" textAnchor="middle" fontFamily="sans-serif">♻</text>
      <circle cx="168" cy="130" r="8" fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.2)" strokeWidth="0.8"/>
      <text x="168" y="133.5" fill="rgba(74,222,128,0.7)" fontSize="7" textAnchor="middle" fontFamily="sans-serif">🛡</text>
      <circle cx="191" cy="130" r="8" fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.2)" strokeWidth="0.8"/>
      <text x="191" y="133.5" fill="rgba(74,222,128,0.7)" fontSize="6" textAnchor="middle" fontFamily="sans-serif">★</text>

      <defs>
        <linearGradient id="tlBg" x1="0" y1="0" x2="240" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#080e1a"/>
          <stop offset="100%" stopColor="#0d1628"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function EximiaCover() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 240 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="240" height="170" fill="url(#exBg)"/>
      {/* Wine glass main */}
      <path d="M55 18 C47 42 40 66 44 86 C48 102 62 114 74 117 C86 114 100 102 104 86 C108 66 101 42 93 18 Z"
        fill="rgba(129,140,248,0.08)" stroke="rgba(129,140,248,0.35)" strokeWidth="1.3"/>
      <path d="M55 18 Q74 13 93 18" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <path d="M47 78 C44 92 46 104 52 111 C60 116 74 117 74 117 C74 117 88 116 96 111 C102 104 104 92 101 78 Z"
        fill="rgba(129,140,248,0.2)" opacity="0.6"/>
      <path d="M58 22 L54 76" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="74" y1="117" x2="74" y2="148" stroke="rgba(129,140,248,0.25)" strokeWidth="1.7" strokeLinecap="round"/>
      <ellipse cx="74" cy="151" rx="18" ry="4" fill="rgba(129,140,248,0.06)" stroke="rgba(129,140,248,0.2)" strokeWidth="1"/>

      {/* Smaller wine glass right */}
      <path d="M135 25 C130 42 126 58 128 72 C130 84 138 92 148 94 C158 92 166 84 168 72 C170 58 166 42 161 25 Z"
        fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" opacity="0.6"/>
      <path d="M135 25 Q148 21 161 25" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none"/>
      <line x1="148" y1="94" x2="148" y2="118" stroke="rgba(255,255,255,0.18)" strokeWidth="1.3" strokeLinecap="round"/>
      <ellipse cx="148" cy="120" rx="12" ry="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>

      {/* Tumbler small */}
      <path d="M185 45 L182 118 L215 118 L212 45 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.9" opacity="0.55"/>
      <path d="M185 45 L212 45" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeLinecap="round"/>

      {/* EXIMIA text overlay */}
      <text x="110" y="35" fill="rgba(255,255,255,0.85)" fontSize="16" fontWeight="900" fontFamily="Montserrat,sans-serif" letterSpacing="4">EXIMIA</text>
      <text x="110" y="50" fill="rgba(255,255,255,0.4)" fontSize="7" fontWeight="500" fontFamily="Inter,sans-serif" letterSpacing="3">DRINKWARE</text>

      {/* Belgium line */}
      <text x="110" y="155" fill="rgba(74,222,128,0.6)" fontSize="7" fontFamily="Inter,sans-serif" letterSpacing="1">100% Made in Belgium</text>

      {/* Glow */}
      <ellipse cx="100" cy="155" rx="90" ry="10" fill="rgba(129,140,248,0.06)"/>

      <defs>
        <linearGradient id="exBg" x1="0" y1="0" x2="240" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#08101f"/>
          <stop offset="100%" stopColor="#0a0f1e"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function CupsTumblersCover() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 240 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="240" height="170" fill="url(#ctBg)"/>

      {/* Chope / beer pint left */}
      <path d="M18 22 Q12 60 12 90 Q12 115 18 125 L70 125 Q76 115 76 90 Q76 60 70 22 Z"
        fill="rgba(244,114,182,0.07)" stroke="rgba(244,114,182,0.35)" strokeWidth="1.3"/>
      <path d="M18 22 Q44 17 70 22" stroke="rgba(255,255,255,0.42)" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      {/* Handle */}
      <path d="M70 40 Q88 40 88 64 Q88 88 70 92"
        stroke="rgba(244,114,182,0.3)" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Beer fill + foam */}
      <path d="M14 65 Q12 80 12 90 Q12 115 18 125 L70 125 Q76 115 76 90 Q76 80 74 65 Z"
        fill="rgba(251,191,36,0.12)" opacity="0.5"/>
      <ellipse cx="44" cy="65" rx="27" ry="7" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8"/>
      <path d="M22 26 L20 85" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round"/>

      {/* Zeus crystal tumbler center */}
      <path d="M100 28 L96 135 L152 135 L148 28 Z"
        fill="rgba(255,255,255,0.05)" stroke="rgba(244,114,182,0.28)" strokeWidth="1.2"/>
      <path d="M100 28 L148 28" stroke="rgba(255,255,255,0.42)" strokeWidth="1.4" strokeLinecap="round"/>
      {/* Facets */}
      <line x1="114" y1="28" x2="111" y2="135" stroke="rgba(255,255,255,0.09)" strokeWidth="0.9"/>
      <line x1="124" y1="28" x2="122" y2="135" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7"/>
      <line x1="137" y1="28" x2="136" y2="135" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7"/>
      <path d="M98 62 L150 62" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7"/>
      <path d="M97 92 L151 92" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7"/>
      {/* Diamond pattern */}
      <path d="M116 62 L124 76 L132 62" stroke="rgba(244,114,182,0.18)" strokeWidth="0.8" fill="none"/>
      <path d="M116 92 L124 78 L132 92" stroke="rgba(244,114,182,0.14)" strokeWidth="0.8" fill="none"/>
      {/* Liquid */}
      <path d="M98 105 L96 135 L152 135 L150 105 Z" fill="rgba(244,114,182,0.1)" opacity="0.6"/>
      <path d="M103 30 L101 100" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round"/>

      {/* Tall tumbler / Bottlecut right */}
      <path d="M170 35 L167 132 L210 132 L207 35 Z"
        fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" opacity="0.6"/>
      <path d="M170 35 L207 35" stroke="rgba(255,255,255,0.28)" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M174 38 L172 100" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Text */}
      <text x="130" y="155" fill="rgba(244,114,182,0.6)" fontSize="7" fontFamily="Inter,sans-serif" letterSpacing="1" textAnchor="middle">CUPS &amp; TUMBLERS COLLECTIE</text>

      <ellipse cx="124" cy="145" rx="100" ry="8" fill="rgba(244,114,182,0.06)"/>

      <defs>
        <linearGradient id="ctBg" x1="0" y1="0" x2="240" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#090e1c"/>
          <stop offset="100%" stopColor="#0c1020"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

const brochures = [
  {
    component: <TastyLockersCover />,
    title: 'TastyLockers Catalogus',
    desc: 'Volledig overzicht van ons kunststof glassenassortiment — Cervecium, Ionic, Zeus, Chope en meer.',
    tag: 'PDF Catalogus',
    tagColor: '#4ade80',
    size: '4.2 MB',
    filename: 'Brochure_Reusable_Cups_TastyLockers.pdf',
  },
  {
    component: <EximiaCover />,
    title: 'Eximia Drinkware Collectie',
    desc: 'Premium drinkware collectie van Eximia voor horeca en events. 100% Made in Belgium.',
    tag: 'PDF Collectie',
    tagColor: '#818cf8',
    size: '6.1 MB',
    filename: null,
  },
  {
    component: <CupsTumblersCover />,
    title: 'Cups & Tumblers Brochure',
    desc: 'Alle herbruikbare cups, bierbekers en tumblers. Bedrukbaar met eigen logo.',
    tag: 'PDF Brochure',
    tagColor: '#f472b6',
    size: '3.8 MB',
    filename: null,
  },
]

export default function Brochures() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible) },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="brochures">
      <div className="container" ref={ref}>
        <div className={styles.header}>
          <div>
            <span className="section-label">Brochures & Downloads</span>
            <h2 className={styles.title}>Alle collecties en specificaties in detail.</h2>
          </div>
          <a href="#contact" className={styles.viewAll}>Naar alle brochures <span>→</span></a>
        </div>

        <div className={styles.grid}>
          {brochures.map((b, i) => (
            <div key={i} className={styles.card} style={{ '--i': i, '--color': b.tagColor }}>
              {/* SVG Cover */}
              <div className={styles.cover}>
                {b.component}
                {/* Overlay tag */}
                <span className={styles.coverTag} style={{ color: b.tagColor, borderColor: `${b.tagColor}44` }}>
                  {b.tag}
                </span>
              </div>

              {/* Info */}
              <div className={styles.info}>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.cardDesc}>{b.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.fileSize}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    PDF · {b.size}
                  </span>
                  <a
                    href={b.filename ? `/${b.filename}` : '#contact'}
                    className={styles.downloadBtn}
                    style={{ color: b.tagColor, borderColor: `${b.tagColor}44`, background: `${b.tagColor}12` }}
                    download={!!b.filename}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
