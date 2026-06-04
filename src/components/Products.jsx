import { useEffect, useRef } from 'react'
import s from './Products.module.css'

// Real Unsplash product photography for each category
const products = [
  {
    id: 'cups',
    img: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=600&q=80&auto=format',
    tag: 'Bestseller',
    tagColor: '#3ddc84',
    title: 'Reusable Cups',
    models: 'Cervecium · Ionic · Custom Print',
    copy: 'Van festival cup tot full-colour bedrukt bierbekers. Bedrukbaar met jouw logo, onbreekbaar en 100% herbruikbaar.',
    cta: 'Bekijk brochure',
    accent: '#3ddc84',
  },
  {
    id: 'wijn',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80&auto=format',
    tag: 'Premium',
    tagColor: '#a78bfa',
    title: 'Wijnglazen',
    models: 'Satenne · Appellen · Tulip · Mars',
    copy: 'Glashelder, elegante silhouetten — niet te onderscheiden van kristal. Voor rood, wit, rosé en mousserende wijnen.',
    cta: 'Bekijk collectie',
    accent: '#a78bfa',
  },
  {
    id: 'cocktail',
    img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80&auto=format',
    tag: 'Nieuw',
    tagColor: '#f472b6',
    title: 'Cocktail & Spirits',
    models: 'Jupiter · Hermes · Bottlecut · Gaetan',
    copy: 'Slanke martini, retro coupe of geslepen tumbler. Voor cocktailbars, events en premium alcoholconcepten.',
    cta: 'Bekijk types',
    accent: '#f472b6',
  },
  {
    id: 'horeca',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&auto=format',
    tag: 'Pro',
    tagColor: '#fb923c',
    title: 'Horeca Glazen',
    models: 'Chope · Woodrose · Venus · Ionic · Optik',
    copy: 'Complete professionele lijn. Stapelbaar, industrieel vaatwasbestendig en gebouwd voor intensief horecagebruik.',
    cta: 'Bekijk assortiment',
    accent: '#fb923c',
  },
]

function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add(s.show) }, { threshold })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return ref
}

export default function Products() {
  const hRef = useReveal(0.1)
  const gRef = useReveal(0.08)

  return (
    <section className={s.sec} id="assortiment">
      <div className="container">
        {/* Header */}
        <div className={`${s.hdr} reveal`} ref={hRef}>
          <div>
            <p className="label">Ons assortiment</p>
            <h2 className={s.h2}>Voor elke gelegenheid<br/>een passend glas.</h2>
          </div>
          <a href="#brochures" className={s.all}>Bekijk alle producten →</a>
        </div>

        {/* Cards */}
        <div className={s.grid} ref={gRef}>
          {products.map((p, i) => (
            <div key={p.id} className={s.card} style={{ '--i': i }}>
              {/* Photo background */}
              <div className={s.photo}>
                <img src={p.img} alt={p.title} className={s.img} loading="lazy"/>
                <div className={s.photoOverlay}/>
                <div className={s.photoGrad} style={{ '--c': p.accent }}/>
              </div>

              {/* Tag */}
              <span className={s.tag} style={{ color: p.tagColor, borderColor: `${p.tagColor}44` }}>
                {p.tag}
              </span>

              {/* Content */}
              <div className={s.body}>
                <p className={s.models} style={{ color: p.accent }}>{p.models}</p>
                <h3 className={s.title}>{p.title}</h3>
                <p className={s.copy}>{p.copy}</p>
                <a href="#brochures" className={s.cta} style={{ color: p.accent }}>
                  {p.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
