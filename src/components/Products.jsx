import { useEffect, useRef } from 'react'
import styles from './Products.module.css'

/* ── SVG glass illustrations based on actual TastyLockers catalog silhouettes ── */

/** Reusable Cups — festival/event printed cups (Cervecium style) */
function CupsIllustration() {
  return (
    <svg width="220" height="200" viewBox="0 0 160 150" fill="none">
      {/* Center cup — large festival cup */}
      <path d="M45 15 L38 115 L90 115 L83 15 Z"
        fill="url(#cupFestGrad)" stroke="rgba(74,222,128,0.4)" strokeWidth="1.2"/>
      <path d="M45 15 L83 15" stroke="rgba(74,222,128,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M38 115 L90 115" stroke="rgba(74,222,128,0.2)" strokeWidth="1"/>
      {/* Cup print design — decorative band */}
      <rect x="42" y="42" width="44" height="28" rx="2"
        fill="rgba(74,222,128,0.06)" stroke="rgba(74,222,128,0.15)" strokeWidth="0.8"/>
      <path d="M46 52 Q64 48 82 52" stroke="rgba(74,222,128,0.3)" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M46 58 Q64 62 82 58" stroke="rgba(74,222,128,0.2)" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      {/* Stars */}
      <circle cx="56" cy="55" r="2" fill="rgba(74,222,128,0.35)"/>
      <circle cx="72" cy="55" r="2" fill="rgba(74,222,128,0.35)"/>
      {/* Left cup — smaller, partially behind */}
      <path d="M16 25 L11 105 L55 105 L50 25 Z"
        fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" opacity="0.7"/>
      <path d="M16 25 L50 25" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Right cup */}
      <path d="M100 22 L95 110 L140 110 L135 22 Z"
        fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" opacity="0.65"/>
      <path d="M100 22 L135 22" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Highlight streaks */}
      <path d="M48 18 L44 80" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M104 25 L101 90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round"/>
      {/* Floor shadow */}
      <ellipse cx="80" cy="128" rx="55" ry="8" fill="rgba(74,222,128,0.06)"/>
      <defs>
        <linearGradient id="cupFestGrad" x1="38" y1="15" x2="90" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(74,222,128,0.12)"/>
          <stop offset="100%" stopColor="rgba(74,222,128,0.04)"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/** Wijnglazen — Satenne + Appellen style wine glasses */
function WineIllustration() {
  return (
    <svg width="220" height="220" viewBox="0 0 160 170" fill="none">
      {/* Main tall wine glass (Appellen 54cl) */}
      <path d="M48 12 C42 38 36 62 40 82 C44 100 58 112 70 115 C82 112 96 100 100 82 C104 62 98 38 92 12 Z"
        fill="url(#wineMain)" stroke="rgba(129,140,248,0.35)" strokeWidth="1.3"/>
      <path d="M48 12 Q70 7 92 12" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      {/* Wine fill */}
      <path d="M44 75 C40 90 42 102 46 108 C54 113 70 115 70 115 C70 115 86 113 94 108 C98 102 100 90 96 75 Z"
        fill="url(#wineLiquid)" opacity="0.5"/>
      {/* Stem */}
      <line x1="70" y1="115" x2="70" y2="148" stroke="rgba(129,140,248,0.3)" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Base */}
      <ellipse cx="70" cy="151" rx="20" ry="4.5" fill="rgba(129,140,248,0.06)" stroke="rgba(129,140,248,0.25)" strokeWidth="1.1"/>
      <ellipse cx="70" cy="154" rx="25" ry="3" fill="rgba(129,140,248,0.03)" stroke="rgba(129,140,248,0.12)" strokeWidth="0.8"/>
      {/* Left highlight */}
      <path d="M52 16 L48 72" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M57 13 L53 45" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeLinecap="round" fill="none"/>

      {/* Background wine glass right (Satenne style — narrower) */}
      <g opacity="0.4">
        <path d="M106 18 C102 38 98 56 100 72 C102 86 110 95 118 97 C126 95 134 86 136 72 C138 56 134 38 130 18 Z"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
        <path d="M106 18 Q118 14 130 18" stroke="rgba(255,255,255,0.28)" strokeWidth="1" fill="none"/>
        <line x1="118" y1="97" x2="118" y2="125" stroke="rgba(255,255,255,0.18)" strokeWidth="1.3"/>
        <ellipse cx="118" cy="127" rx="12" ry="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
      </g>

      {/* Floor glow */}
      <ellipse cx="80" cy="158" rx="60" ry="8" fill="rgba(129,140,248,0.08)"/>

      <defs>
        <linearGradient id="wineMain" x1="36" y1="7" x2="104" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)"/>
          <stop offset="50%" stopColor="rgba(129,140,248,0.05)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)"/>
        </linearGradient>
        <linearGradient id="wineLiquid" x1="40" y1="75" x2="100" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(129,140,248,0.35)"/>
          <stop offset="100%" stopColor="rgba(99,102,241,0.08)"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/** Cocktail & Spirits — Jupiter martini + cut crystal tumbler */
function CocktailIllustration() {
  return (
    <svg width="220" height="210" viewBox="0 0 160 165" fill="none">
      {/* Martini glass (Jupiter 33cl) — center */}
      <path d="M22 14 L68 72 L114 14 Z"
        fill="url(#martiniGrad)" stroke="rgba(244,114,182,0.4)" strokeWidth="1.3"/>
      <path d="M22 14 L114 14" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Drink fill */}
      <path d="M38 38 L68 72 L98 38 Z" fill="url(#martiniLiq)" opacity="0.55"/>
      {/* Highlight */}
      <path d="M26 16 L42 48" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Stem */}
      <line x1="68" y1="72" x2="68" y2="106" stroke="rgba(244,114,182,0.3)" strokeWidth="1.8" strokeLinecap="round"/>
      <ellipse cx="68" cy="109" rx="18" ry="4" fill="rgba(244,114,182,0.06)" stroke="rgba(244,114,182,0.22)" strokeWidth="1"/>
      <ellipse cx="68" cy="112" rx="22" ry="2.5" fill="rgba(244,114,182,0.03)"/>
      {/* Garnish */}
      <line x1="44" y1="10" x2="90" y2="24" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" strokeDasharray="2 2"/>
      <circle cx="42" cy="9" r="4.5" fill="rgba(244,114,182,0.4)" stroke="rgba(244,114,182,0.6)" strokeWidth="0.8"/>
      <circle cx="92" cy="25" r="3" fill="rgba(244,114,182,0.3)" stroke="rgba(244,114,182,0.4)" strokeWidth="0.8"/>

      {/* Cut-crystal shot glass right (Hermes/Bottlecut) */}
      <g opacity="0.75">
        <path d="M108 42 L104 108 L142 108 L138 42 Z"
          fill="rgba(255,255,255,0.04)" stroke="rgba(244,114,182,0.25)" strokeWidth="1"/>
        <path d="M108 42 L138 42" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Crystal facets */}
        <line x1="116" y1="42" x2="113" y2="108" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
        <line x1="125" y1="42" x2="123" y2="108" stroke="rgba(255,255,255,0.07)" strokeWidth="0.6"/>
        <line x1="133" y1="42" x2="131" y2="108" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
        <path d="M106 65 L140 65" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7"/>
        <path d="M105 82 L141 82" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7"/>
        {/* Diamond */}
        <path d="M118 55 L124 64 L130 55" stroke="rgba(244,114,182,0.2)" strokeWidth="0.7" fill="none"/>
        <path d="M118 65 L124 56 L130 65" stroke="rgba(244,114,182,0.15)" strokeWidth="0.7" fill="none"/>
        <path d="M112 88 L142 88 L142 108 L104 108 Z" fill="rgba(244,114,182,0.08)" opacity="0.6"/>
        <path d="M110 45 L108 90" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </g>

      <ellipse cx="85" cy="120" rx="55" ry="7" fill="rgba(244,114,182,0.06)"/>

      <defs>
        <linearGradient id="martiniGrad" x1="22" y1="14" x2="114" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.09)"/>
          <stop offset="100%" stopColor="rgba(244,114,182,0.05)"/>
        </linearGradient>
        <linearGradient id="martiniLiq" x1="38" y1="38" x2="98" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(244,114,182,0.35)"/>
          <stop offset="100%" stopColor="rgba(236,72,153,0.08)"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/** Horeca Glazen — assortment of three different professional glasses */
function HorecaIllustration() {
  return (
    <svg width="220" height="210" viewBox="0 0 160 165" fill="none">
      {/* Left — IONIC 36cl (tall cylindrical) */}
      <path d="M14 18 L10 118 L46 118 L42 18 Z"
        fill="url(#ionicGrad)" stroke="rgba(251,146,60,0.3)" strokeWidth="1.1"/>
      <path d="M14 18 L42 18" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M12 70 L44 70 L46 118 L10 118 Z" fill="rgba(251,146,60,0.1)" opacity="0.4"/>
      <path d="M17 22 L15 82" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Center — CHOPE 50cl beer pint */}
      <path d="M52 10 Q46 50 46 80 Q46 106 52 116 L108 116 Q114 106 114 80 Q114 50 108 10 Z"
        fill="url(#chopeHGrad)" stroke="rgba(251,146,60,0.45)" strokeWidth="1.3"/>
      <path d="M52 10 Q80 5 108 10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Handle */}
      <path d="M108 28 Q128 28 128 56 Q128 84 108 88"
        stroke="rgba(251,146,60,0.35)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      <path d="M108 36 Q120 36 120 56 Q120 76 108 80"
        stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round" fill="none"/>
      {/* Beer fill */}
      <path d="M48 58 Q46 75 46 80 Q46 106 52 116 L108 116 Q114 106 114 80 Q114 75 112 58 Z"
        fill="rgba(251,191,36,0.15)" opacity="0.5"/>
      {/* Foam top */}
      <ellipse cx="80" cy="58" rx="28" ry="7" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8"/>
      <ellipse cx="70" cy="55" rx="8" ry="4.5" fill="rgba(255,255,255,0.07)"/>
      <ellipse cx="88" cy="54" rx="6" ry="4" fill="rgba(255,255,255,0.07)"/>
      <path d="M55 14 L53 80" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" fill="none"/>

      {/* Right — WOODROSE 25cl brandy snifter */}
      <path d="M120 35 C116 50 112 64 114 76 C116 86 124 94 134 96 C144 94 152 86 154 76 C156 64 152 50 148 35 Z"
        fill="rgba(255,255,255,0.04)" stroke="rgba(251,146,60,0.25)" strokeWidth="1" opacity="0.7"/>
      <path d="M120 35 Q134 31 148 35" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none"/>
      <path d="M122 65 C120 74 122 82 126 88 C130 92 134 95 134 95" stroke="rgba(251,146,60,0.2)" strokeWidth="0.8" fill="none"/>
      <line x1="134" y1="96" x2="134" y2="116" stroke="rgba(255,255,255,0.18)" strokeWidth="1.3" strokeLinecap="round"/>
      <ellipse cx="134" cy="118" rx="10" ry="2.5" fill="rgba(251,146,60,0.06)" stroke="rgba(251,146,60,0.18)" strokeWidth="0.8"/>

      <ellipse cx="80" cy="130" rx="70" ry="8" fill="rgba(251,146,60,0.07)"/>

      <defs>
        <linearGradient id="ionicGrad" x1="10" y1="18" x2="46" y2="118" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)"/>
          <stop offset="100%" stopColor="rgba(251,146,60,0.05)"/>
        </linearGradient>
        <linearGradient id="chopeHGrad" x1="46" y1="5" x2="114" y2="116" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)"/>
          <stop offset="50%" stopColor="rgba(251,146,60,0.06)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Product data with real catalog info ── */
const products = [
  {
    id: 'reusable-cups',
    tag: 'Bestseller',
    tagColor: '#4ade80',
    title: 'Reusable Cups',
    subtitle: 'Cervecium · Ionic · Custom Print',
    desc: 'Festival cups, bierbekers en hardcups. Bedrukbaar met eigen logo. Ideaal voor events, festivals en stadions.',
    cta: 'Bekijk brochure',
    accent: '#4ade80',
    visual: <CupsIllustration />,
  },
  {
    id: 'wijnglazen',
    tag: 'Populair',
    tagColor: '#818cf8',
    title: 'Wijnglazen',
    subtitle: 'Satenne · Appellen · Tulip',
    desc: 'Stijlvolle kunststof wijnglazen voor rood, wit, rosé en mousserende wijnen. Glashelder en onbreekbaar.',
    cta: 'Bekijk types',
    accent: '#818cf8',
    visual: <WineIllustration />,
  },
  {
    id: 'cocktail',
    title: 'Cocktail & Spirits',
    subtitle: 'Jupiter · Hermes · Bottlecut',
    desc: 'Voor cocktails, gin-tonic, longdrinks en sterke dranken. Elegant design met premium uitstraling.',
    cta: 'Bekijk collectie',
    accent: '#f472b6',
    visual: <CocktailIllustration />,
  },
  {
    id: 'horeca',
    tag: 'Nieuw',
    tagColor: '#fb923c',
    title: 'Horeca Glazen',
    subtitle: 'Chope · Ionic · Woodrose · Venus',
    desc: 'Volledige lijn professionele glazen voor restaurants, hotels en bars. Vaatwasbestendig & stapelbaar.',
    cta: 'Bekijk assortiment',
    accent: '#fb923c',
    visual: <HorecaIllustration />,
  },
]

export default function Products() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const observe = (el) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible) },
        { threshold: 0.1 }
      )
      obs.observe(el)
      return obs
    }
    const o1 = observe(headerRef.current)
    const o2 = observe(gridRef.current)
    return () => { o1?.disconnect(); o2?.disconnect() }
  }, [])

  return (
    <section className={styles.products} id="assortiment">
      <div className="container">
        <div className={styles.header} ref={headerRef}>
          <div>
            <span className="section-label">Ons assortiment</span>
            <h2 className={styles.title}>Voor elke gelegenheid<br />een passend glas.</h2>
          </div>
          <a href="#brochures" className={styles.viewAll}>
            Bekijk alle producten <span>→</span>
          </a>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {products.map((p, i) => (
            <div
              key={p.id}
              className={styles.card}
              style={{ '--accent': p.accent, '--i': i }}
            >
              {p.tag && (
                <span className={styles.cardTag} style={{ '--tagColor': p.tagColor || p.accent }}>
                  {p.tag}
                </span>
              )}

              <div className={styles.cardVisual}>
                <div className={styles.cardGlow} />
                <div className={styles.visualWrap}>{p.visual}</div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardSub}>{p.subtitle}</p>
                <p className={styles.cardDesc}>{p.desc}</p>
                <a href="#brochures" className={styles.cardCta}>
                  {p.cta} <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
