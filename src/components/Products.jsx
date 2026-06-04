import { useEffect, useRef } from 'react'
import styles from './Products.module.css'

const products = [
  {
    id: 'reusable-cups',
    tag: 'Bestseller',
    title: 'Reusable Cups',
    desc: 'Festival cups, bierbekers en hardcups. Ideaal voor events, festivals en stadions.',
    cta: 'Bekijk brochure',
    accent: '#4ade80',
    visual: <CupVisual />,
  },
  {
    id: 'wijnglazen',
    title: 'Wijnglazen',
    desc: 'Stijlvolle kunststof wijnglazen voor rood, wit, rosé en mousserende wijnen.',
    cta: 'Bekijk types',
    accent: '#818cf8',
    visual: <WineVisual />,
  },
  {
    id: 'cocktail',
    title: 'Cocktail & Spirits',
    desc: 'Voor cocktails, gin-tonic, longdrinks en sterke dranken. Elegant en onbreekbaar.',
    cta: 'Bekijk collectie',
    accent: '#f472b6',
    visual: <CocktailVisual />,
  },
  {
    id: 'horeca',
    title: 'Horeca Glazen',
    desc: 'Complete lijn van professionele glazen voor restaurants, bars en hotels.',
    cta: 'Bekijk assortiment',
    accent: '#fb923c',
    visual: <HorecaVisual />,
  },
]

function CupVisual() {
  return (
    <svg width="120" height="140" viewBox="0 0 80 100" fill="none">
      <path d="M15 15 L12 80 L68 80 L65 15 Z" fill="rgba(74,222,128,0.08)" stroke="rgba(74,222,128,0.3)" strokeWidth="1"/>
      <path d="M15 15 L65 15" stroke="rgba(74,222,128,0.5)" strokeWidth="1.5"/>
      <path d="M12 80 L68 80" stroke="rgba(74,222,128,0.2)" strokeWidth="1"/>
      <path d="M20 55 L60 55 L63 80 L17 80 Z" fill="rgba(74,222,128,0.12)"/>
      <path d="M18 20 L16 60" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="30" y="42" fill="rgba(74,222,128,0.4)" fontSize="8" fontFamily="sans-serif">NXT</text>
    </svg>
  )
}

function WineVisual() {
  return (
    <svg width="100" height="160" viewBox="0 0 60 100" fill="none">
      <path d="M15 8 Q8 35 12 52 Q16 68 30 72 Q44 68 48 52 Q52 35 45 8 Z" fill="rgba(129,140,248,0.08)" stroke="rgba(129,140,248,0.3)" strokeWidth="1"/>
      <line x1="30" y1="72" x2="30" y2="90" stroke="rgba(129,140,248,0.3)" strokeWidth="1.5"/>
      <ellipse cx="30" cy="92" rx="12" ry="3" fill="rgba(129,140,248,0.1)" stroke="rgba(129,140,248,0.2)" strokeWidth="1"/>
      <path d="M18 44 Q17 54 19 60 Q24 70 30 71" fill="none" stroke="rgba(129,140,248,0.2)" strokeWidth="1"/>
      <path d="M17 10 Q19 7 30 7" stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none"/>
      <path d="M20 14 L17 40" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CocktailVisual() {
  return (
    <svg width="110" height="140" viewBox="0 0 70 100" fill="none">
      <path d="M8 12 L35 52 L62 12 Z" fill="rgba(244,114,182,0.08)" stroke="rgba(244,114,182,0.3)" strokeWidth="1"/>
      <line x1="35" y1="52" x2="35" y2="80" stroke="rgba(244,114,182,0.3)" strokeWidth="1.5"/>
      <ellipse cx="35" cy="82" rx="12" ry="3" fill="rgba(244,114,182,0.1)" stroke="rgba(244,114,182,0.2)" strokeWidth="1"/>
      <path d="M8 12 L62 12" stroke="rgba(244,114,182,0.4)" strokeWidth="1.2"/>
      <path d="M18 32 L35 52 L52 32 Z" fill="rgba(244,114,182,0.12)"/>
      {/* Garnish stick */}
      <line x1="50" y1="8" x2="28" y2="22" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="2 1"/>
      <circle cx="52" cy="7" r="3" fill="rgba(244,114,182,0.4)"/>
    </svg>
  )
}

function HorecaVisual() {
  return (
    <svg width="130" height="130" viewBox="0 0 90 90" fill="none">
      {/* Three glasses of different heights */}
      <path d="M10 20 L8 65 L28 65 L26 20 Z" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.3)" strokeWidth="1"/>
      <path d="M35 28 L33 65 L53 65 L51 28 Z" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.3)" strokeWidth="1"/>
      <path d="M60 15 L58 65 L78 65 L76 15 Z" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.25)" strokeWidth="1"/>
      <line x1="8" y1="65" x2="78" y2="65" stroke="rgba(251,146,60,0.2)" strokeWidth="1"/>
      <path d="M12 42 L26 42 L27 65 L11 65 Z" fill="rgba(251,146,60,0.1)"/>
      <path d="M37 48 L51 48 L52 65 L36 65 Z" fill="rgba(251,146,60,0.1)"/>
      <path d="M62 38 L76 38 L77 65 L61 65 Z" fill="rgba(251,146,60,0.12)"/>
    </svg>
  )
}

export default function Products() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible)
          // also animate the grid cards
          el.closest('section')?.querySelector(`.${styles.grid}`)?.classList.add(styles.visible)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.products} id="assortiment">
      <div className="container">
        <div className={styles.header} ref={ref} id="header-products">
          <span className="section-label">Ons assortiment</span>
          <h2 className={styles.title}>Voor elke gelegenheid<br />een passend glas.</h2>
          <a href="#brochures" className={styles.viewAll}>
            Bekijk alle producten <span>→</span>
          </a>
        </div>

        <div className={styles.grid}>
          {products.map((p, i) => (
            <div
              key={p.id}
              className={styles.card}
              style={{ '--accent': p.accent, '--i': i }}
            >
              {p.tag && <span className={styles.cardTag}>{p.tag}</span>}

              <div className={styles.cardVisual}>
                <div className={styles.cardGlow} />
                <div className={styles.visualWrap}>{p.visual}</div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
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
