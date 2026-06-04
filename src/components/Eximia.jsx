import { useEffect, useRef } from 'react'
import s from './Eximia.module.css'

const bullets = [
  { t: '100% Made in Belgium', d: 'Europese productie met strikte kwaliteitscontrole' },
  { t: 'Innovatief & functioneel', d: 'Design dat werkt in de meest intensieve omgevingen' },
  { t: 'Duurzaam geproduceerd', d: 'Lagere CO₂-voetafdruk dan wegwerpplastic' },
  { t: 'BPA free · Food safe', d: 'Veilig voor consumenten — gecertificeerd foodgrade' },
]

export default function Eximia() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add(s.show) }, { threshold: 0.15 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <section className={s.sec} id="duurzaamheid">
      <div className={`container ${s.inner}`} ref={ref}>
        {/* Left */}
        <div className={s.left}>
          {/* Logo block */}
          <div className={s.logoBox}>
            <div className={s.logoE}>E</div>
            <div>
              <p className={s.logoName}>EXIMIA</p>
              <p className={s.logoSub}>DRINKWARE · BELGIUM</p>
            </div>
          </div>

          <h2 className={s.h2}>
            Europese kwaliteit.<br/>
            <span className={s.accent}>Geproduceerd in België.</span>
          </h2>

          <p className={s.lead}>
            NXTGlass is een label van TastyLockers en vertegenwoordigt de volledige premium drinkware collecties van Eximia Drinkware — ontworpen en geproduceerd in België, gebouwd voor de meest veeleisende horecaomgevingen.
          </p>

          <ul className={s.list}>
            {bullets.map((b, i) => (
              <li key={i} className={s.li}>
                <span className={s.check}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="rgba(61,220,132,0.12)"/>
                    <path d="M8 12l3 3 5-5" stroke="#3ddc84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div>
                  <strong>{b.t}</strong>
                  <span>{b.d}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className={s.btns}>
            <a href="#contact" className="btn-ghost">Meer over Eximia →</a>
          </div>
        </div>

        {/* Right: photo */}
        <div className={s.right}>
          <div className={s.photoFrame}>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format"
              alt="Premium glazen"
              className={s.photoImg}
              loading="lazy"
            />
            <div className={s.photoOver}/>
            {/* Floating stat cards */}
            <div className={s.stat1}>
              <p className={s.statN}>20+</p>
              <p className={s.statL}>Glasmodellen</p>
            </div>
            <div className={s.stat2}>
              <p className={s.statEmoji}>🇧🇪</p>
              <p className={s.statL}>Made in Belgium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
