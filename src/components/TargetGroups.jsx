import { useEffect, useRef } from 'react'
import s from './TargetGroups.module.css'

const groups = [
  {
    img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&q=75&auto=format',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M9 19V6l12-3v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
    title: 'Festivals & Evenementen',
    copy: 'Schaalbaar voor 500 tot 50.000 bezoekers. Bedrukbaar met jouw festivalidentiteit.',
  },
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=75&auto=format',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 7v13h18V7M3 7l9-4 9 4M3 7h18"/></svg>,
    title: 'Horeca',
    copy: 'Voor restaurants, bars en hotels die kiezen voor stijl én duurzaamheid.',
  },
  {
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=75&auto=format',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: 'Bedrijven & Kantines',
    copy: 'Vervang eenmalig plastic op de werkvloer door een duurzame, professionele oplossing.',
  },
  {
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&q=75&auto=format',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>,
    title: 'Sportclubs & Stadions',
    copy: 'Onbreekbaar voor tribunes en kleedkamers. Veilig, schaalbaar en duurzaam.',
  },
  {
    img: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500&q=75&auto=format',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>,
    title: 'Catering & Foodconcepten',
    copy: 'Flexibele sets die meewerken bij elke catering — van lunch tot gala.',
  },
  {
    img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=75&auto=format',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
    title: 'Onbemande Retail',
    copy: 'Koppel NXTGlass aan een TastyLocker voor 24/7 onbemande drinkwareverkoop.',
  },
]

export default function TargetGroups() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add(s.show) }, { threshold: 0.08 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <section className={s.sec} id="voor-wie">
      {/* Section bg */}
      <div className={s.secBg}>
        <img src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=1400&q=70&auto=format" alt="" className={s.secBgImg}/>
        <div className={s.secBgOver}/>
      </div>

      <div className="container">
        <div className={s.hdr}>
          <p className="label">Voor wie</p>
          <h2 className={s.h2}>Onze drinkware voor professionals</h2>
          <p className={s.sub}>Van intiem horecaconcept tot grootschalig festival — NXTGlass past zich aan jouw operatie aan.</p>
        </div>

        <div className={s.grid} ref={ref}>
          {groups.map((g, i) => (
            <div key={i} className={s.card} style={{ '--i': i }}>
              {/* Photo */}
              <div className={s.photo}>
                <img src={g.img} alt={g.title} className={s.img} loading="lazy"/>
                <div className={s.imgOver}/>
              </div>

              {/* Icon */}
              <div className={s.iconWrap}>
                <div className={s.icon}>{g.icon}</div>
              </div>

              {/* Text */}
              <div className={s.body}>
                <h3 className={s.title}>{g.title}</h3>
                <p className={s.copy}>{g.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
