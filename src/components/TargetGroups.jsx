import { useEffect, useRef } from 'react'
import styles from './TargetGroups.module.css'

const groups = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19V6l12-3v13M9 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/></svg>
    ),
    title: 'Festivals &\nEvenementen',
    desc: 'Reusable cups en glazen voor grootschalige events',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7v13h18V7M3 7l9-4 9 4M3 7h18M8 20V12h8v8"/></svg>
    ),
    title: 'Horeca',
    desc: 'Premium glazen voor restaurants, bars en hotels',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
    title: 'Bedrijven &\nBedrijfskantines',
    desc: 'Duurzame drinkware voor de werkvloer',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>
    ),
    title: 'Sportclubs &\nStadions',
    desc: 'Onbreekbare glazen voor sportevenementen',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
    ),
    title: 'Catering &\nFoodconcepten',
    desc: 'Flexibele drinkware voor elke cateringvorm',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
    ),
    title: 'Onbemande\nRetail',
    desc: 'Glazen voor onbemande verkoopoplossingen',
  },
]

export default function TargetGroups() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible) },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="voor-wie">
      {/* Background */}
      <div className={styles.bg}>
        <div className={styles.bgGlow} />
      </div>

      <div className="container" ref={ref}>
        <div className={styles.header}>
          <span className="section-label">Voor wie</span>
          <h2 className={styles.title}>Onze drinkware voor professionals</h2>
          <p className={styles.sub}>
            Van drukke festivals tot verfijnde horecaconcepten — NXTGlass past bij elke professionele omgeving.
          </p>
        </div>

        <div className={styles.grid}>
          {groups.map((g, i) => (
            <div key={i} className={styles.card} style={{ '--i': i }}>
              <div className={styles.iconWrap}>
                <div className={styles.icon}>{g.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{g.title}</h3>
              <p className={styles.cardDesc}>{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
