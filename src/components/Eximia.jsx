import { useEffect, useRef } from 'react'
import styles from './Eximia.module.css'

const bullets = [
  'Europese kwaliteit',
  'Innovatief & functioneel',
  'Duurzaam geproduceerd',
  'Voor professioneel gebruik',
]

export default function Eximia() {
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
    <section className={styles.section} id="eximia" ref={ref}>
      <div className={styles.bg} />
      <div className={`container ${styles.inner}`}>
        {/* Left */}
        <div className={styles.left}>
          {/* Eximia logo text */}
          <div className={styles.logoBlock}>
            <div className={styles.eximiaLogo}>
              <span className={styles.eximiaE}>E</span>
              <div>
                <div className={styles.eximiaName}>EXIMIA</div>
                <div className={styles.eximiaSub}>DRINKWARE</div>
              </div>
            </div>
          </div>

          <p className={styles.text}>
            NXTGlass is een label van TastyLockers en vertegenwoordigt de premium drinkware collecties van Eximia Drinkware.
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

          <a href="#contact" className="btn-secondary" style={{ display: 'inline-flex', marginTop: '0.5rem' }}>
            Meer over Eximia <span>→</span>
          </a>
        </div>

        {/* Right: glass visual */}
        <div className={styles.right}>
          <div className={styles.glassDisplay}>
            <div className={styles.glowBehind} />
            <EximiaGlasses />
          </div>
        </div>
      </div>
    </section>
  )
}

function EximiaGlasses() {
  return (
    <svg width="380" height="360" viewBox="0 0 240 230" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Back glass - tall wine */}
      <g opacity="0.55">
        <path d="M100 15 Q90 55 94 75 Q98 95 115 100 Q132 95 136 75 Q140 55 130 15 Z"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <line x1="115" y1="100" x2="115" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2"/>
        <ellipse cx="115" cy="132" rx="14" ry="3.5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
        <path d="M105 17 L105 17" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      </g>

      {/* Middle glass - premium wine */}
      <g>
        <path d="M60 20 Q46 68 52 90 Q58 115 80 122 Q102 115 108 90 Q114 68 100 20 Z"
          fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2"/>
        <line x1="80" y1="122" x2="80" y2="165" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
        <ellipse cx="80" cy="168" rx="20" ry="5" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
        {/* Wine fill */}
        <path d="M63 80 Q62 98 66 105 Q72 117 80 119 Q88 117 94 105 Q98 98 97 80 Z" fill="rgba(74,222,128,0.1)"/>
        {/* Highlight */}
        <path d="M67 26 L64 70" stroke="rgba(255,255,255,0.22)" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M62 22 Q66 18 80 18" stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none"/>
      </g>

      {/* Right tumbler */}
      <g opacity="0.75">
        <path d="M138 35 L134 145 L180 145 L176 35 Z"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.1"/>
        <path d="M138 35 L176 35" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3"/>
        <path d="M148 95 L170 95 L172 145 L146 145 Z" fill="rgba(74,222,128,0.07)"/>
        <path d="M142 40 L140 100" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
      </g>

      {/* Small cocktail glass right */}
      <g opacity="0.5">
        <path d="M185 45 L207 45 L196 72 Z"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <line x1="196" y1="72" x2="196" y2="95" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <ellipse cx="196" cy="97" rx="10" ry="2.5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      </g>

      {/* Ground reflection */}
      <ellipse cx="130" cy="195" rx="110" ry="12" fill="rgba(74,222,128,0.05)"/>
      <line x1="20" y1="195" x2="240" y2="195" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    </svg>
  )
}
