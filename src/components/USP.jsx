import { useEffect, useRef } from 'react'
import styles from './USP.module.css'

const usps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3C8 3 5 6 5 10c0 5 7 11 7 11s7-6 7-11c0-4-3-7-7-7z"/>
        <path d="M12 12V7M9.5 9.5L12 7l2.5 2.5"/>
      </svg>
    ),
    title: 'Duurzaam',
    desc: 'Alternatief voor wegwerpplastic',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Onbreekbaar',
    desc: 'Gemaakt van hoogwaardig kunststof',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Premium uitstraling',
    desc: 'Elegante glazen voor elke gelegenheid',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v6a8 8 0 0 1-16 0V4z"/>
        <path d="M8 2v2M16 2v2M12 12v4M8 18h8"/>
      </svg>
    ),
    title: 'Vaatwas bestendig',
    desc: 'Geschikt voor professioneel gebruik',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
        <line x1="4.5" y1="4.5" x2="6" y2="6"/>
        <line x1="19.5" y1="4.5" x2="18" y2="6"/>
      </svg>
    ),
    title: 'BPA Free',
    desc: 'Vrij van BPA en schadelijke stoffen',
  },
]

export default function USP() {
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
    <section className={styles.usp}>
      <div className={styles.line} />
      <div className={`container ${styles.grid}`} ref={ref}>
        {usps.map((u, i) => (
          <div key={i} className={styles.item} style={{ '--i': i }}>
            <div className={styles.icon}>{u.icon}</div>
            <div className={styles.title}>{u.title}</div>
            <div className={styles.desc}>{u.desc}</div>
          </div>
        ))}
      </div>
      <div className={styles.line} />
    </section>
  )
}
