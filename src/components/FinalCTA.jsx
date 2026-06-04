import { useEffect, useRef } from 'react'
import s from './FinalCTA.module.css'

export default function FinalCTA() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add(s.show) }, { threshold: 0.2 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <section className={s.sec}>
      {/* Dark photo bg */}
      <div className={s.bg}>
        <img src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=1400&q=70&auto=format" alt="" className={s.bgImg}/>
        <div className={s.bgOver1}/>
        <div className={s.bgOver2}/>
      </div>

      {/* Floating glass decor */}
      <div className={s.decor}>
        <svg width="120" height="180" viewBox="0 0 60 90" fill="none" opacity="0.18">
          <path d="M8 5 C4 22 0 40 3 55 C6 68 18 76 30 78 C42 76 54 68 57 55 C60 40 56 22 52 5 Z" stroke="rgba(61,220,132,0.6)" strokeWidth="1" fill="rgba(61,220,132,0.04)"/>
          <line x1="30" y1="78" x2="30" y2="88" stroke="rgba(61,220,132,0.4)" strokeWidth="1"/>
          <ellipse cx="30" cy="89" rx="14" ry="3" stroke="rgba(61,220,132,0.3)" strokeWidth="0.8" fill="none"/>
        </svg>
      </div>

      <div className={`container ${s.inner}`} ref={ref}>
        <p className={s.eyebrow}>Klaar om te starten?</p>

        <h2 className={s.h2}>
          Stop met weggooien.<br/>
          <span className={s.accent}>Start met NXTGlass.</span>
        </h2>

        <p className={s.sub}>
          Wij denken graag mee over de juiste reusable drinkware-oplossing voor jouw organisatie — van eerste offerte tot volledige implementatie. Gratis adviesgesprek, geen verplichtingen.
        </p>

        {/* Objection-busting row */}
        <div className={s.trust}>
          <div className={s.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3ddc84" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            Geen minimale afname
          </div>
          <div className={s.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3ddc84" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            Snel leverbaar
          </div>
          <div className={s.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3ddc84" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            Gratis monsters beschikbaar
          </div>
          <div className={s.trustItem}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3ddc84" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            Persoonlijk advies
          </div>
        </div>

        <div className={s.btns}>
          <a href="mailto:sales@nxtglass.nl" className="btn-green">
            Neem contact op →
          </a>
          <a href="#brochures" className="btn-ghost">
            Vraag offerte aan
          </a>
        </div>

        {/* Contact info */}
        <div className={s.contact}>
          <a href="mailto:sales@nxtglass.nl" className={s.ci}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            sales@nxtglass.nl
          </a>
          <span className={s.cdot}>·</span>
          <a href="tel:+31615372684" className={s.ci}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.35 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +31 6 153 726 84
          </a>
        </div>
      </div>
    </section>
  )
}
