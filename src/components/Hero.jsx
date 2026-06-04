import { useEffect, useRef } from 'react'
import s from './Hero.module.css'

export default function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const t = setTimeout(() => el.classList.add(s.show), 120)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={s.hero} id="hero">
      {/* Photographic dark background */}
      <div className={s.photo}>
        <img
          src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=1600&q=85&auto=format"
          alt=""
          className={s.photoImg}
        />
        <div className={s.overlay1} />
        <div className={s.overlay2} />
        <div className={s.overlay3} />
      </div>

      {/* Grid lines */}
      <div className={s.grid} />

      <div className={`container ${s.content}`} ref={ref}>
        <div className={s.left}>
          <div className={s.badge}>
            <span className={s.dot} />
            Premium Drinkware · 100% Made in Belgium
          </div>

          <h1 className={s.h1}>
            BUILT FOR<br/>
            <span className={s.accent}>REAL LIFE.</span>
          </h1>

          <p className={s.lead}>
            Duurzaam. Stijlvol. Onbreekbaar. NXTGlass levert herbruikbare kunststof glazen die er uitzien en aanvoelen als echt glas — voor horeca, events, bedrijven en retail.
          </p>

          <div className={s.btns}>
            <a href="#assortiment" className="btn-green">Bekijk assortiment →</a>
            <a href="#brochures" className="btn-ghost">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Download brochure
            </a>
          </div>

          {/* Social proof / stats */}
          <div className={s.stats}>
            <Stat n="20+" l="Glasmodellen" />
            <div className={s.div}/>
            <Stat n="100%" l="Herbruikbaar" />
            <div className={s.div}/>
            <Stat n="BPA" l="Vrij & veilig" />
            <div className={s.div}/>
            <Stat n="🇧🇪" l="Made in Belgium" emoji />
          </div>
        </div>

        {/* Right: glass showcase visual */}
        <div className={s.right}>
          {/* Floating "100% Reusable" badge */}
          <div className={s.floatBadge}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3ddc84" strokeWidth="2.2">
              <path d="M23 4v6h-6M1 20v-6h6"/>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
            </svg>
            <div>
              <p className={s.fbTop}>100% REUSABLE</p>
              <p className={s.fbBot}>Duurzaam · Stijlvol</p>
            </div>
          </div>

          {/* Floating Belgium badge */}
          <div className={s.floatBelgium}>
            <span>🇧🇪</span>
            <div>
              <p className={s.fbTop}>Made in Belgium</p>
              <p className={s.fbBot}>Europese kwaliteit</p>
            </div>
          </div>

          {/* Cinematic glass scene */}
          <GlassScene />
        </div>
      </div>

      {/* Scroll mouse */}
      <div className={s.scroll}>
        <div className={s.mouse}><div className={s.wheel}/></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

function Stat({ n, l, emoji }) {
  return (
    <div className={s.stat}>
      <span className={`${s.sn} ${emoji ? s.emoji : ''}`}>{n}</span>
      <span className={s.sl}>{l}</span>
    </div>
  )
}

function GlassScene() {
  return (
    <div className={s.scene}>
      <div className={s.sceneGlow}/>
      <div className={s.sceneRing1}/>
      <div className={s.sceneRing2}/>

      {/* Satenne wine glass */}
      <div className={`${s.g1} ${s.fa}`}>
        <svg width="180" height="270" viewBox="0 0 80 120" fill="none">
          <defs>
            <linearGradient id="hg1" x1="15" y1="4" x2="65" y2="88" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(255,255,255,0.14)"/>
              <stop offset="50%" stopColor="rgba(61,220,132,0.06)"/>
              <stop offset="100%" stopColor="rgba(255,255,255,0.04)"/>
            </linearGradient>
            <linearGradient id="hl1" x1="16" y1="58" x2="64" y2="88" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(61,220,132,0.3)"/>
              <stop offset="100%" stopColor="rgba(34,197,94,0.06)"/>
            </linearGradient>
          </defs>
          <path d="M16 4 C11 22 7 42 10 58 C13 72 26 82 40 84 C54 82 67 72 70 58 C73 42 69 22 64 4 Z" fill="url(#hg1)" stroke="rgba(255,255,255,0.38)" strokeWidth="1.1"/>
          <path d="M16 4 Q40 0 64 4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
          <path d="M13 50 C10 62 12 72 16 78 C22 83 40 84 40 84 C40 84 58 83 64 78 C68 72 70 62 67 50 Z" fill="url(#hl1)" opacity="0.6"/>
          <path d="M20 7 L17 52" stroke="rgba(255,255,255,0.28)" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M25 5 L23 30" stroke="rgba(255,255,255,0.14)" strokeWidth="0.9" strokeLinecap="round"/>
          <line x1="40" y1="84" x2="40" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="1.6" strokeLinecap="round"/>
          <ellipse cx="40" cy="111" rx="16" ry="3.5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
          <ellipse cx="40" cy="114" rx="20" ry="2.5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
        </svg>
      </div>

      {/* Zeus cut-crystal tumbler */}
      <div className={`${s.g2} ${s.fb}`}>
        <svg width="130" height="165" viewBox="0 0 72 95" fill="none">
          <defs>
            <linearGradient id="hg2" x1="6" y1="8" x2="66" y2="82" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)"/>
              <stop offset="100%" stopColor="rgba(255,255,255,0.03)"/>
            </linearGradient>
          </defs>
          <path d="M8 8 L4 80 L68 80 L64 8 Z" fill="url(#hg2)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.1"/>
          <path d="M8 8 L64 8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" strokeLinecap="round"/>
          <line x1="20" y1="8" x2="17" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
          <line x1="32" y1="8" x2="30" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6"/>
          <line x1="44" y1="8" x2="44" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6"/>
          <line x1="55" y1="8" x2="56" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
          <path d="M6 30 L66 30" stroke="rgba(255,255,255,0.07)" strokeWidth="0.6"/>
          <path d="M5 52 L67 52" stroke="rgba(255,255,255,0.07)" strokeWidth="0.6"/>
          <path d="M22 30 L28 42 L34 30" stroke="rgba(255,255,255,0.16)" strokeWidth="0.8" fill="none"/>
          <path d="M22 52 L28 40 L34 52" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" fill="none"/>
          <path d="M34 52 L40 64 L46 52" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7" fill="none"/>
          <path d="M5 62 L4 80 L68 80 L67 62 Z" fill="rgba(61,220,132,0.09)" opacity="0.6"/>
          <path d="M11 10 L9 70" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round"/>
          <ellipse cx="36" cy="88" rx="34" ry="5" fill="rgba(0,0,0,0.25)"/>
        </svg>
      </div>

      {/* Jupiter martini */}
      <div className={`${s.g3} ${s.fc}`}>
        <svg width="115" height="140" viewBox="0 0 72 100" fill="none">
          <defs>
            <linearGradient id="hg3" x1="6" y1="8" x2="66" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(255,255,255,0.09)"/>
              <stop offset="100%" stopColor="rgba(61,220,132,0.04)"/>
            </linearGradient>
          </defs>
          <path d="M6 8 L36 56 L66 8 Z" fill="url(#hg3)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.1"/>
          <path d="M6 8 L66 8" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M18 28 L36 56 L54 28 Z" fill="rgba(61,220,132,0.2)" opacity="0.5"/>
          <path d="M9 10 L20 36" stroke="rgba(255,255,255,0.22)" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="36" y1="56" x2="36" y2="80" stroke="rgba(255,255,255,0.28)" strokeWidth="1.6" strokeLinecap="round"/>
          <ellipse cx="36" cy="83" rx="14" ry="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.22)" strokeWidth="1"/>
          <line x1="20" y1="6" x2="52" y2="18" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" strokeDasharray="2 2"/>
          <circle cx="18" cy="5" r="4" fill="rgba(61,220,132,0.35)" stroke="rgba(61,220,132,0.55)" strokeWidth="0.7"/>
          <ellipse cx="36" cy="90" rx="20" ry="4" fill="rgba(0,0,0,0.2)"/>
        </svg>
      </div>

      {/* Chope pint — back */}
      <div className={`${s.g4} ${s.fd}`}>
        <svg width="110" height="145" viewBox="0 0 72 105" fill="none">
          <defs>
            <linearGradient id="hg4" x1="8" y1="6" x2="64" y2="92" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(255,255,255,0.08)"/>
              <stop offset="100%" stopColor="rgba(255,255,255,0.03)"/>
            </linearGradient>
          </defs>
          <path d="M12 8 Q7 42 7 65 Q7 85 12 93 L60 93 Q65 85 65 65 Q65 42 60 8 Z" fill="url(#hg4)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.1"/>
          <path d="M12 8 Q36 3 60 8" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <path d="M60 22 Q76 22 76 44 Q76 66 60 68" stroke="rgba(255,255,255,0.25)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <path d="M60 30 Q70 30 70 44 Q70 58 60 60" stroke="rgba(255,255,255,0.1)" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
          <path d="M9 44 Q7 55 7 65 Q7 85 12 93 L60 93 Q65 85 65 65 Q65 55 63 44 Z" fill="rgba(251,191,36,0.1)" opacity="0.5"/>
          <ellipse cx="36" cy="44" rx="24" ry="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.7"/>
          <path d="M15 10 L13 72" stroke="rgba(255,255,255,0.18)" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Reflection */}
      <div className={s.floor}/>
      <div className={s.floorGlow}/>
    </div>
  )
}
