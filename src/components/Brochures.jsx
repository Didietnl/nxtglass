import { useEffect, useRef } from 'react'
import styles from './Brochures.module.css'

const brochures = [
  {
    brand: 'Tasty\nLockers',
    brandColor: '#4ade80',
    title: 'TastyLockers Catalogus',
    desc: 'Bekijk ons volledige assortiment aan kunststof glazen.',
    size: '4.2 MB',
  },
  {
    brand: 'EXIMIA\nDRINKWARE',
    brandColor: '#818cf8',
    title: 'Eximia Drinkware Collectie',
    desc: 'Premium drinkware collectie voor horeca en events.',
    size: '6.1 MB',
  },
  {
    brand: 'EXIMIA\nCUPS',
    brandColor: '#f472b6',
    title: 'Cups & Tumblers Brochure',
    desc: 'Alle herbruikbare cups, bierbekers en tumblers op een rij.',
    size: '3.8 MB',
  },
]

export default function Brochures() {
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
            <div key={i} className={styles.card} style={{ '--i': i, '--color': b.brandColor }}>
              {/* Cover */}
              <div className={styles.cover}>
                <div className={styles.coverBg} />
                <div className={styles.coverLogo}>{b.brand}</div>
                {/* Decorative lines */}
                <div className={styles.coverLines}>
                  <div /><div /><div />
                </div>
              </div>

              {/* Info */}
              <div className={styles.info}>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.cardDesc}>{b.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.fileSize}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    PDF · {b.size}
                  </span>
                  <button className={styles.downloadBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
