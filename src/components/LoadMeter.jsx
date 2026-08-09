import { useEffect, useState } from 'react'

const PLATE_COUNT = 10

export default function LoadMeter() {
  const [filled, setFilled] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const pct = scrollable > 0 ? window.scrollY / scrollable : 0
      setFilled(Math.round(pct * PLATE_COUNT))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div id="loadmeter" aria-hidden="true">
      {Array.from({ length: PLATE_COUNT }, (_, i) => (
        <div
          key={i}
          className={`plate${i < filled ? ' filled' : ''}`}
        ></div>
      ))}
    </div>
  )
}
