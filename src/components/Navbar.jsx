import { useState, useEffect } from 'react'
import NXTGlassLogo from './NXTGlassLogo'
import s from './Navbar.module.css'

const links = [
  ['Assortiment', '#assortiment'],
  ['Voor wie',    '#voor-wie'],
  ['Duurzaamheid','#duurzaamheid'],
  ['Brochures',   '#brochures'],
  ['Over ons',    '#over-ons'],
  ['Contact',     '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`${s.bar} ${scrolled ? s.solid : ''}`}>
      <div className={s.inner}>
        <a href="#" className={s.logo}>
          <NXTGlassLogo size={36} />
          <span className={s.wordmark}><em>NXT</em>Glass</span>
        </a>

        <nav className={s.nav}>
          {links.map(([l, h]) => <a key={h} href={h} className={s.link}>{l}</a>)}
        </nav>

        <a href="#contact" className={`btn-green ${s.cta}`}>
          Offerte aanvragen →
        </a>

        <button className={s.burger} onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={open ? s.x1 : ''}/><span className={open ? s.x2 : ''}/><span className={open ? s.x3 : ''}/>
        </button>
      </div>

      {open && (
        <div className={s.drawer}>
          {links.map(([l, h]) => (
            <a key={h} href={h} className={s.dlink} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="#contact" className={`btn-green ${s.dCta}`} onClick={() => setOpen(false)}>
            Offerte aanvragen →
          </a>
        </div>
      )}
    </header>
  )
}
