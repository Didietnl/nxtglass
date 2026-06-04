import { useEffect, useRef } from 'react'
import styles from './USP.module.css'

/* Icons matching actual brochure properties */
const usps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
    title: 'Herbruikbaar',
    desc: 'Volledig herbruikbaar. Duurzaam alternatief voor wegwerpplastic.',
    stat: '100%',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: 'Onbreekbaar',
    desc: 'Hoogwaardig kunststof. Veilig en sterk voor intensief gebruik.',
    stat: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Premium uitstraling',
    desc: 'Glashelder en elegant — niet te onderscheiden van echt glas.',
    stat: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 6l9-4 9 4v6a9 9 0 0 1-9 8 9 9 0 0 1-9-8V6z"/>
        <path d="M8 11h8M8 14h5"/>
      </svg>
    ),
    title: 'Vaatwasbestendig',
    desc: 'Industrieel vaatwasbestendig. Hygiënisch voor professioneel gebruik.',
    stat: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
        <line x1="12" y1="2" x2="12" y2="4"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      </svg>
    ),
    title: 'BPA Free',
    desc: 'Vrij van BPA en andere schadelijke stoffen. Foodgrade kwaliteit.',
    stat: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Stapelbaar',
    desc: 'Ruimtebesparend stapelbaar design. Ideaal voor opslag en transport.',
    stat: null,
  },
]

export default function USP() {
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
    <section className={styles.usp}>
      <div className={styles.topLine} />
      <div className={`container ${styles.grid}`} ref={ref}>
        {usps.map((u, i) => (
          <div key={i} className={styles.item} style={{ '--i': i }}>
            <div className={styles.icon}>{u.icon}</div>
            <div className={styles.title}>{u.title}</div>
            <div className={styles.desc}>{u.desc}</div>
          </div>
        ))}
      </div>
      <div className={styles.bottomLine} />
    </section>
  )
}
