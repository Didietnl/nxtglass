import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible) },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero} id="hero">
      {/* Layered background */}
      <div className={styles.bg}>
        <div className={styles.bgGradient1} />
        <div className={styles.bgGradient2} />
        <div className={styles.bgGrid} />
        {/* Floating orbs */}
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>

      <div className={`${styles.content} container`} ref={heroRef}>
        {/* Left: Copy */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            PREMIUM DRINKWARE
          </div>

          <h1 className={styles.headline}>
            BUILT FOR<br />
            <span className={styles.headlineAccent}>REAL LIFE.</span>
          </h1>

          <p className={styles.sub}>
            NXTGlass levert duurzame, hoogwaardige en stijlvolle herbruikbare drinkware voor horeca, events, bedrijven en onbemande retailconcepten.
          </p>

          <div className={styles.buttons}>
            <a href="#assortiment" className="btn-primary">
              Bekijk assortiment <span>→</span>
            </a>
            <a href="#brochures" className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Vraag brochure aan
            </a>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Reusable</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>BPA</span>
              <span className={styles.statLabel}>Vrij & veilig</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>EU</span>
              <span className={styles.statLabel}>Kwaliteit</span>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className={styles.right}>
          {/* Floating badge */}
          <div className={styles.reusableBadge}>
            <div className={styles.reusableInner}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                <path d="M23 4v6h-6M1 20v-6h6"/>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
              </svg>
              <div>
                <div className={styles.badgeTop}>100% REUSABLE</div>
                <div className={styles.badgeBottom}>Duurzaam & stijlvol</div>
              </div>
            </div>
          </div>

          {/* Glass visual */}
          <div className={styles.glassVisual}>
            <div className={styles.glassStage}>
              {/* Main large glass */}
              <div className={`${styles.glassItem} ${styles.glassMain} animate-float`}>
                <GlassWine size={220} />
              </div>
              {/* Secondary glass */}
              <div className={`${styles.glassItem} ${styles.glassSecond}`} style={{animationDelay: '1.5s'}}>
                <GlassTumbler size={140} />
              </div>
              {/* Third glass */}
              <div className={`${styles.glassItem} ${styles.glassThird}`} style={{animationDelay: '0.8s'}}>
                <GlassCocktail size={110} />
              </div>
              {/* Glow base */}
              <div className={styles.glassGlow} />
            </div>

            {/* Light reflections */}
            <div className={styles.reflection1} />
            <div className={styles.reflection2} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}

function GlassWine({ size = 200 }) {
  return (
    <svg width={size} height={Math.round(size * 1.4)} viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Glass body */}
      <path d="M30 10 Q20 45 25 60 Q30 80 50 85 Q70 80 75 60 Q80 45 70 10 Z"
        fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      {/* Stem */}
      <line x1="50" y1="85" x2="50" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
      {/* Base */}
      <ellipse cx="50" cy="122" rx="18" ry="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      {/* Wine fill */}
      <path d="M33 55 Q32 65 35 70 Q42 80 50 81 Q58 80 65 70 Q68 65 67 55 Z"
        fill="rgba(74,222,128,0.12)" />
      {/* Rim highlight */}
      <path d="M32 12 Q35 8 50 8 Q65 8 68 12" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>
      {/* Left reflection */}
      <path d="M35 20 Q32 35 33 50" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

function GlassTumbler({ size = 140 }) {
  return (
    <svg width={size} height={Math.round(size * 0.85)} viewBox="0 0 100 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 10 L14 75 L86 75 L82 10 Z"
        fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
      <path d="M18 10 L82 10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      <path d="M14 75 L86 75" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      {/* Ice / content */}
      <path d="M20 50 L80 50 L82 75 L18 75 Z" fill="rgba(74,222,128,0.08)"/>
      {/* Reflection */}
      <path d="M22 12 L20 60" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function GlassCocktail({ size = 110 }) {
  return (
    <svg width={size} height={Math.round(size * 1.2)} viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10 L40 50 L70 10 Z"
        fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
      <line x1="40" y1="50" x2="40" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
      <ellipse cx="40" cy="82" rx="15" ry="3.5" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <path d="M10 10 L70 10" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
      {/* Drink fill */}
      <path d="M21 30 L40 50 L59 30 Z" fill="rgba(74,222,128,0.1)"/>
    </svg>
  )
}
