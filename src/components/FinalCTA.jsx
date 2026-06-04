import { useEffect, useRef } from 'react'
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <div className={styles.bgOrb1} />
        <div className={styles.bgOrb2} />
        <div className={styles.bgGrid} />
      </div>

      <div className={`container ${styles.content}`} ref={ref}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Premium Drinkware Partner
        </div>

        <h2 className={styles.title}>
          Klaar voor duurzame drinkware?
        </h2>

        <p className={styles.sub}>
          Wij denken graag mee over de juiste reusable oplossing voor jouw organisatie, evenement of horecaconcept.
        </p>

        <div className={styles.buttons}>
          <a href="#contact" className="btn-secondary">
            Neem contact op
          </a>
          <a href="#contact" className="btn-primary">
            Vraag offerte aan <span>→</span>
          </a>
        </div>

        {/* Decorative glass */}
        <div className={styles.glassDecor}>
          <svg width="80" height="120" viewBox="0 0 50 80" fill="none">
            <path d="M8 5 Q3 28 6 40 Q9 55 25 60 Q41 55 44 40 Q47 28 42 5 Z"
              fill="rgba(74,222,128,0.06)" stroke="rgba(74,222,128,0.15)" strokeWidth="1"/>
            <line x1="25" y1="60" x2="25" y2="72" stroke="rgba(74,222,128,0.12)" strokeWidth="1"/>
            <ellipse cx="25" cy="73.5" rx="10" ry="2.5" fill="rgba(74,222,128,0.05)" stroke="rgba(74,222,128,0.1)" strokeWidth="0.8"/>
            <path d="M12 38 Q11 48 14 53 Q19 59 25 60" stroke="rgba(74,222,128,0.1)" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
