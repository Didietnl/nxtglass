import { useEffect, useRef } from 'react'
import s from './Brochures.module.css'

const items = [
  {
    color: '#3ddc84',
    brand: 'TastyLockers',
    tagline: 'Catalogus',
    title: 'TastyLockers Catalogus',
    desc: 'Volledig overzicht van ons kunststof glassenassortiment — Cervecium, Ionic, Zeus, Chope, Appellen en meer. Met specificaties en prijsindicaties.',
    size: '4.2 MB · PDF',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=70&auto=format',
  },
  {
    color: '#a78bfa',
    brand: 'EXIMIA',
    tagline: 'Drinkware Collectie',
    title: 'Eximia Drinkware Collectie',
    desc: 'De volledige premium drinkware collectie van Eximia. Glasmodellen, afmetingen, capaciteiten en bedrukopties voor horeca en events.',
    size: '6.1 MB · PDF',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=70&auto=format',
  },
  {
    color: '#f472b6',
    brand: 'EXIMIA',
    tagline: 'Cups & Tumblers',
    title: 'Cups & Tumblers Brochure',
    desc: 'Alle herbruikbare cups, bierbekers en tumblers op een rij. Inclusief bedrukspecificaties en minimum afnameaantallen.',
    size: '3.8 MB · PDF',
    img: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400&q=70&auto=format',
  },
]

export default function Brochures() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add(s.show) }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <section className={s.sec} id="brochures">
      <div className="container">
        <div className={s.hdr}>
          <div>
            <p className="label">Brochures & Downloads</p>
            <h2 className={s.h2}>Alle collecties en<br/>specificaties in detail.</h2>
          </div>
          <a href="#contact" className={s.all}>Naar alle brochures →</a>
        </div>

        <div className={s.grid} ref={ref}>
          {items.map((it, i) => (
            <div key={i} className={s.card} style={{ '--i': i }}>
              {/* Photo cover */}
              <div className={s.cover}>
                <img src={it.img} alt={it.title} className={s.coverImg} loading="lazy"/>
                <div className={s.coverOver}/>
                {/* Brand overlay */}
                <div className={s.coverTxt}>
                  <p className={s.brand} style={{ color: it.color }}>{it.brand}</p>
                  <p className={s.tagline}>{it.tagline}</p>
                </div>
                {/* Corner icon */}
                <div className={s.pdfIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  <span>PDF</span>
                </div>
              </div>

              {/* Info */}
              <div className={s.info}>
                <h3 className={s.title}>{it.title}</h3>
                <p className={s.desc}>{it.desc}</p>
                <div className={s.foot}>
                  <span className={s.size}>{it.size}</span>
                  <a href="#contact" className={s.dl} style={{ color: it.color, borderColor: `${it.color}44`, background: `${it.color}10` }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
