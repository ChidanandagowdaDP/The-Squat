import { useEffect, useState } from 'react'
import IntroOverlay from './components/IntroOverlay.jsx'
import Header from './components/Header.jsx'
import LoadMeter from './components/LoadMeter.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import { PlateDivider } from './components/PlateDivider.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Equipment from './components/Equipment.jsx'
import Services from './components/Services.jsx'
import Experience from './components/Experience.jsx'
import PreLaunch from './components/PreLaunch.jsx'
import PersonalTraining from './components/PersonalTraining.jsx'
import Journey from './components/Journey.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import StickyActions from './components/StickyActions.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  const [introDismissed, setIntroDismissed] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll('.section, .prelaunch')
    els.forEach((el) => el.classList.add('reveal'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in')
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      {!introDismissed && <IntroOverlay onDismiss={() => setIntroDismissed(true)} />}
      <LoadMeter />
      <Header />
      <main>
        <Hero />
        <About />
        <PlateDivider />
        <WhyChoose />
        <Equipment />
        <PlateDivider tone="steel" />
        <Services />
        <Experience />
        <PreLaunch />
        <PersonalTraining />
        <PlateDivider />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <StickyActions />
      <WhatsAppButton />
    </>
  )
}
