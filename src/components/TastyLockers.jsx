import { useEffect, useRef } from 'react'
import styles from './TastyLockers.module.css'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    label: '24/7 verkoop',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
    ),
    label: 'Plug & play installatie',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
    ),
    label: 'Cashless betaling',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    ),
    label: 'Realtime voorraadbeheer',
  },
]

export default function TastyLockers() {
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
    <section className={styles.section} id="over-ons">
      <div className={styles.bg} />
      <div className={`container ${styles.inner}`} ref={ref}>

        {/* Left: locker visual */}
        <div className={styles.left}>
          <div className={styles.lockerMock}>
            <div className={styles.lockerGlow} />
            <LockerVisual />
          </div>
        </div>

        {/* Right: content */}
        <div className={styles.right}>
          <span className="section-label">TastyLockers</span>
          <p className={styles.question}>Op zoek naar een volledig onbemande oplossing?</p>
          <h2 className={styles.title}>TastyLockers.</h2>
          <p className={styles.text}>
            Slimme, onbemande retailoplossingen voor 24/7 verkoop. Veilig, gebruiksvriendelijk en efficiënt.
          </p>

          <div className={styles.features}>
            {features.map((f, i) => (
              <div key={i} className={styles.feature}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <span className={styles.featureLabel}>{f.label}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary">
            Ontdek TastyLockers <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function LockerVisual() {
  return (
    <svg width="220" height="300" viewBox="0 0 140 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Locker body */}
      <rect x="10" y="10" width="120" height="170" rx="8"
        fill="rgba(13,22,40,0.8)" stroke="rgba(74,222,128,0.25)" strokeWidth="1.2"/>

      {/* Screen */}
      <rect x="20" y="18" width="100" height="55" rx="4"
        fill="rgba(74,222,128,0.07)" stroke="rgba(74,222,128,0.2)" strokeWidth="1"/>
      <rect x="25" y="23" width="90" height="45" rx="3"
        fill="rgba(8,14,26,0.6)"/>
      {/* Screen content */}
      <rect x="30" y="30" width="50" height="4" rx="2" fill="rgba(74,222,128,0.4)"/>
      <rect x="30" y="38" width="35" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
      <rect x="30" y="45" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.1)"/>
      <rect x="30" y="52" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.08)"/>
      {/* QR mockup */}
      <rect x="90" y="28" width="18" height="18" rx="2" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
      <rect x="92" y="30" width="5" height="5" rx="0.5" fill="rgba(74,222,128,0.3)"/>
      <rect x="101" y="30" width="5" height="5" rx="0.5" fill="rgba(74,222,128,0.3)"/>
      <rect x="92" y="39" width="5" height="5" rx="0.5" fill="rgba(74,222,128,0.3)"/>

      {/* Compartments */}
      {[0,1,2,3].map(row => (
        [0,1,2].map(col => (
          <g key={`${row}-${col}`}>
            <rect
              x={20 + col * 34}
              y={82 + row * 22}
              width={30}
              height={18}
              rx="3"
              fill="rgba(255,255,255,0.02)"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="0.8"
            />
            {/* Product inside */}
            <rect
              x={25 + col * 34}
              y={87 + row * 22}
              width={8}
              height={8}
              rx="1"
              fill={`rgba(74,222,128,${0.05 + Math.random() * 0.08})`}
            />
            {/* Hinge */}
            <circle cx={46 + col * 34} cy={91 + row * 22} r="1.5" fill="rgba(255,255,255,0.12)"/>
          </g>
        ))
      ))}

      {/* Bottom panel */}
      <rect x="20" y="172" width="100" height="4" rx="2" fill="rgba(74,222,128,0.1)" stroke="rgba(74,222,128,0.2)" strokeWidth="0.8"/>

      {/* LED strip */}
      <rect x="10" y="10" width="3" height="170" rx="1.5" fill="rgba(74,222,128,0.15)"/>
      <rect x="127" y="10" width="3" height="170" rx="1.5" fill="rgba(74,222,128,0.15)"/>
    </svg>
  )
}
