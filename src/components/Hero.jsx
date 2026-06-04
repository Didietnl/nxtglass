import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import NXTGlassLogo from './NXTGlassLogo'

/* ── SVG product silhouettes based on actual TastyLockers catalog ── */

/** SATENNE 44cl — tall elegant wine glass (main hero piece) */
function GlassSatenne({ h = 260 }) {
  const w = h * 0.45
  return (
    <svg width={w} height={h} viewBox="0 0 80 180" fill="none">
      {/* Bowl */}
      <path d="M22 8 C18 28 14 50 18 68 C22 84 34 94 40 96 C46 94 58 84 62 68 C66 50 62 28 58 8 Z"
        fill="url(#satenneGrad)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
      {/* Rim */}
      <path d="M22 8 Q31 4 40 4 Q49 4 58 8" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      {/* Liquid fill */}
      <path d="M22 60 C20 72 22 80 26 87 C31 92 40 95 40 95 C40 95 49 92 54 87 C58 80 60 72 58 60 Z"
        fill="url(#liquidGreen)" opacity="0.55"/>
      {/* Left highlight */}
      <path d="M26 12 C24 22 22 34 22 48" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      {/* Inner sheen */}
      <path d="M30 9 C29 16 28 24 28 32" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeLinecap="round" fill="none"/>
      {/* Stem */}
      <line x1="40" y1="96" x2="40" y2="148" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Base */}
      <ellipse cx="40" cy="151" rx="18" ry="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/>
      <ellipse cx="40" cy="154" rx="22" ry="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
      {/* Surface reflection */}
      <ellipse cx="40" cy="157" rx="26" ry="5" fill="url(#reflectGreen)" opacity="0.3"/>
      <defs>
        <linearGradient id="satenneGrad" x1="22" y1="4" x2="62" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.10)"/>
          <stop offset="50%" stopColor="rgba(74,222,128,0.05)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)"/>
        </linearGradient>
        <linearGradient id="liquidGreen" x1="22" y1="60" x2="58" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(74,222,128,0.25)"/>
          <stop offset="100%" stopColor="rgba(34,197,94,0.08)"/>
        </linearGradient>
        <radialGradient id="reflectGreen" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(74,222,128,0.4)"/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>
      </defs>
    </svg>
  )
}

/** ZEUS 38cl — cut crystal tumbler */
function GlassZeus({ h = 160 }) {
  const w = h * 0.7
  return (
    <svg width={w} height={h} viewBox="0 0 100 130" fill="none">
      {/* Body */}
      <path d="M12 10 L8 108 L92 108 L88 10 Z"
        fill="url(#zeusGrad)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
      {/* Rim */}
      <path d="M12 10 L88 10" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Crystal cut facets */}
      <line x1="28" y1="10" x2="22" y2="108" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      <line x1="44" y1="10" x2="40" y2="108" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"/>
      <line x1="56" y1="10" x2="60" y2="108" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"/>
      <line x1="72" y1="10" x2="78" y2="108" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      {/* Diagonal cuts */}
      <path d="M12 35 L88 35" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
      <path d="M10 60 L90 60" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
      <path d="M9 82 L91 82" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
      {/* Diamond facet pattern center */}
      <path d="M44 35 L50 48 L56 35" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="none"/>
      <path d="M44 60 L50 48 L56 60" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="none"/>
      <path d="M38 60 L44 72 L50 60" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" fill="none"/>
      <path d="M50 60 L56 72 L62 60" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" fill="none"/>
      {/* Liquid */}
      <path d="M14 75 L10 108 L90 108 L86 75 Z" fill="url(#zeusLiquid)" opacity="0.4"/>
      {/* Left highlight streak */}
      <path d="M16 12 L14 75" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Base */}
      <path d="M8 108 L92 108" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Shadow */}
      <ellipse cx="50" cy="118" rx="42" ry="6" fill="rgba(0,0,0,0.25)"/>
      <defs>
        <linearGradient id="zeusGrad" x1="8" y1="10" x2="92" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.09)"/>
          <stop offset="40%" stopColor="rgba(74,222,128,0.04)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)"/>
        </linearGradient>
        <linearGradient id="zeusLiquid" x1="10" y1="75" x2="90" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(74,222,128,0.2)"/>
          <stop offset="100%" stopColor="rgba(34,197,94,0.06)"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/** JUPITER 33cl — cocktail / martini style */
function GlassJupiter({ h = 130 }) {
  const w = h * 0.85
  return (
    <svg width={w} height={h} viewBox="0 0 100 120" fill="none">
      {/* Martini bowl */}
      <path d="M10 12 L50 64 L90 12 Z"
        fill="url(#jupiterGrad)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
      {/* Rim */}
      <path d="M10 12 L90 12" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Inner liquid */}
      <path d="M22 32 L50 64 L78 32 Z" fill="url(#jupiterLiq)" opacity="0.5"/>
      {/* Highlight left */}
      <path d="M14 14 L28 42" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Stem */}
      <line x1="50" y1="64" x2="50" y2="96" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Base */}
      <ellipse cx="50" cy="99" rx="16" ry="3.5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.1"/>
      <ellipse cx="50" cy="102" rx="20" ry="2.5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
      {/* Garnish olive */}
      <line x1="30" y1="10" x2="68" y2="22" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2"/>
      <circle cx="28" cy="9" r="4" fill="rgba(74,222,128,0.35)" stroke="rgba(74,222,128,0.6)" strokeWidth="0.8"/>
      <circle cx="68" cy="22" r="3" fill="rgba(74,222,128,0.2)" stroke="rgba(74,222,128,0.4)" strokeWidth="0.8"/>
      <ellipse cx="50" cy="110" rx="24" ry="5" fill="rgba(0,0,0,0.2)"/>
      <defs>
        <linearGradient id="jupiterGrad" x1="10" y1="12" x2="90" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.09)"/>
          <stop offset="100%" stopColor="rgba(74,222,128,0.04)"/>
        </linearGradient>
        <linearGradient id="jupiterLiq" x1="22" y1="32" x2="78" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(74,222,128,0.3)"/>
          <stop offset="100%" stopColor="rgba(34,197,94,0.08)"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

/** CHOPE 50cl — Belgian beer pint */
function GlassChope({ h = 155 }) {
  const w = h * 0.6
  return (
    <svg width={w} height={h} viewBox="0 0 80 130" fill="none">
      {/* Body — slightly tapered, wider at top */}
      <path d="M14 12 Q10 50 10 82 Q10 104 14 112 L66 112 Q70 104 70 82 Q70 50 66 12 Z"
        fill="url(#chopeGrad)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
      {/* Rim */}
      <path d="M14 12 Q40 8 66 12" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      {/* Handle */}
      <path d="M66 30 Q84 30 84 54 Q84 78 66 80"
        stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M66 36 Q78 36 78 54 Q78 72 66 74"
        stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeLinecap="round" fill="none"/>
      {/* Beer fill */}
      <path d="M12 52 Q10 72 10 82 Q10 104 14 112 L66 112 Q70 104 70 82 Q70 72 68 52 Z"
        fill="url(#chopeBeer)" opacity="0.45"/>
      {/* Foam */}
      <ellipse cx="40" cy="52" rx="26" ry="7" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
      <ellipse cx="33" cy="49" rx="8" ry="5" fill="rgba(255,255,255,0.08)"/>
      <ellipse cx="48" cy="48" rx="6" ry="4" fill="rgba(255,255,255,0.08)"/>
      {/* Highlight */}
      <path d="M18 14 L16 80" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M24 12 L22 50" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeLinecap="round" fill="none"/>
      {/* Base */}
      <path d="M14 112 Q40 116 66 112" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <ellipse cx="40" cy="120" rx="30" ry="5" fill="rgba(0,0,0,0.2)"/>
      <defs>
        <linearGradient id="chopeGrad" x1="10" y1="8" x2="70" y2="112" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)"/>
        </linearGradient>
        <linearGradient id="chopeBeer" x1="10" y1="52" x2="70" y2="112" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(251,191,36,0.3)"/>
          <stop offset="100%" stopColor="rgba(217,119,6,0.12)"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible) },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero} id="hero">
      {/* Layered dark cinematic background */}
      <div className={styles.bg}>
        <div className={styles.bgBase} />
        <div className={styles.bgRadial} />
        <div className={styles.bgGreen} />
        <div className={styles.bgGrid} />
        <div className={styles.bgVignette} />
        {/* Floating orbs */}
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      <div className={`${styles.content} container`} ref={heroRef}>
        {/* ── Left: Copy ── */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Premium Drinkware · 100% Made in Belgium
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
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Vraag brochure aan
            </a>
          </div>

          {/* Stats row */}
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
              <span className={styles.statNum}>🇧🇪</span>
              <span className={styles.statLabel}>Made in Belgium</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>20+</span>
              <span className={styles.statLabel}>Glasmodellen</span>
            </div>
          </div>
        </div>

        {/* ── Right: Glass stage ── */}
        <div className={styles.right}>
          {/* Floating reusable badge */}
          <div className={styles.reusableBadge}>
            <div className={styles.reusableInner}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                <path d="M23 4v6h-6M1 20v-6h6"/>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
              </svg>
              <div>
                <div className={styles.badgeTopText}>100% REUSABLE</div>
                <div className={styles.badgeBotText}>Duurzaam & stijlvol</div>
              </div>
            </div>
          </div>

          {/* Belgium badge */}
          <div className={styles.belgiumBadge}>
            <span className={styles.belgiumFlag}>🇧🇪</span>
            <span className={styles.belgiumText}>Made in<br/><strong>Belgium</strong></span>
          </div>

          {/* Glass scene */}
          <div className={styles.glassStage}>
            {/* Back glow */}
            <div className={styles.stageGlow} />

            {/* Water splash visual */}
            <div className={styles.splashRing1} />
            <div className={styles.splashRing2} />

            {/* Main wine glass */}
            <div className={`${styles.glassMain} ${styles.floatA}`}>
              <GlassSatenne h={240} />
            </div>

            {/* Tumbler right */}
            <div className={`${styles.glassRight} ${styles.floatB}`}>
              <GlassZeus h={150} />
            </div>

            {/* Cocktail left */}
            <div className={`${styles.glassLeft} ${styles.floatC}`}>
              <GlassJupiter h={118} />
            </div>

            {/* Beer pint back */}
            <div className={`${styles.glassBack} ${styles.floatD}`}>
              <GlassChope h={140} />
            </div>

            {/* Reflection surface */}
            <div className={styles.reflectionSurface} />
            <div className={styles.reflectionGlow} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
