import { useEffect, useRef } from 'react'
import s from './USP.module.css'

const items = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
    label: 'Duurzaam',
    copy: 'Alternatief voor wegwerpplastic',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
    label: 'Onbreekbaar',
    copy: 'Veilig kunststof. Sterk & duurzaam',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    label: 'Premium uitstraling',
    copy: 'Niet te onderscheiden van echt glas',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 6l9-4 9 4v6a9 9 0 0 1-9 8 9 9 0 0 1-9-8V6z"/><path d="M8 11h8M8 14h5"/></svg>,
    label: 'Vaatwasbestendig',
    copy: 'Industrieel wasbaar voor professioneel gebruik',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
    label: 'BPA Free',
    copy: 'Vrij van schadelijke stoffen. Food safe',
  },
]

export default function USP() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add(s.show) }, { threshold: 0.2 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <div className={s.wrap} ref={ref}>
      <div className={`container ${s.row}`}>
        {items.map((it, i) => (
          <div key={i} className={s.item} style={{ '--i': i }}>
            <div className={s.icon}>{it.icon}</div>
            <div className={s.txt}>
              <strong>{it.label}</strong>
              <span>{it.copy}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
