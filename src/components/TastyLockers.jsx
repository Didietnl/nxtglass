import { useEffect, useRef } from 'react'
import s from './TastyLockers.module.css'

const feats = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, t: '24/7 verkoop', d: 'Geen personeel nodig' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>, t: 'Plug & play', d: 'Binnen één dag operationeel' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>, t: 'Cashless betaling', d: 'Pin, app of tegoed' },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, t: 'Realtime inzicht', d: 'Voorraadbeheer via dashboard' },
]

export default function TastyLockers() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add(s.show) }, { threshold: 0.12 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <section className={s.sec} id="over-ons">
      {/* Section background */}
      <div className={s.bg}>
        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=70&auto=format" alt="" className={s.bgImg}/>
        <div className={s.bgOver}/>
      </div>

      <div className={`container ${s.inner}`} ref={ref}>
        {/* Left: locker photo */}
        <div className={s.left}>
          <div className={s.mockFrame}>
            <img
              src="https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=700&q=80&auto=format"
              alt="TastyLockers"
              className={s.mockImg}
              loading="lazy"
            />
            <div className={s.mockOver}/>
            {/* Badge */}
            <div className={s.mockBadge}>
              <span>✓</span> Onbemande retailoplossing
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className={s.right}>
          <p className="label">TastyLockers</p>
          <p className={s.question}>Op zoek naar een volledig onbemande oplossing?</p>
          <h2 className={s.h2}>TastyLockers.</h2>
          <p className={s.lead}>
            Combineer NXTGlass met een slimme TastyLocker voor een volautomatisch drankenverkooppunt. Geen kassamedewerker nodig. Altijd beschikbaar. Altijd veilig.
          </p>

          <div className={s.feats}>
            {feats.map((f, i) => (
              <div key={i} className={s.feat} style={{ '--i': i }}>
                <div className={s.featIcon}>{f.icon}</div>
                <div>
                  <strong>{f.t}</strong>
                  <span>{f.d}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={s.btns}>
            <a href="#contact" className="btn-green">Ontdek TastyLockers →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
