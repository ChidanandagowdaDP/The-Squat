import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../constants.js'
import logoMarkB from '../assets/logo-mark-b.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap">
          <a href="#home" className="logo" onClick={() => setOpen(false)}>
            <img className="logo-img" src={logoMarkB} alt="The Squat" />
          </a>
          <nav className={`primary${open ? ' open' : ''}`}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href="#prelaunch" className="btn btn-solid btn-sm">
              Join Pre-Launch
            </a>
            <button
              className={`burger${open ? ' open' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
