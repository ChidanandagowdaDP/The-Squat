import { useEffect, useRef } from 'react'
import logoMarkA from '../assets/logo-mark-a.png'

export default function IntroOverlay({ onDismiss }) {
  const videoRef = useRef(null)
  const overlayRef = useRef(null)
  const soundBtnRef = useRef(null)

  useEffect(() => {
    document.documentElement.classList.add('intro-lock')

    const dismiss = () => {
      if (!overlayRef.current) return
      overlayRef.current.classList.add('hide')
      document.documentElement.classList.remove('intro-lock')
      window.setTimeout(() => {
        if (overlayRef.current) overlayRef.current.style.display = 'none'
        if (videoRef.current) videoRef.current.pause()
        onDismiss()
      }, 650)
    }

    const video = videoRef.current
    const soundBtn = soundBtnRef.current

    const handleEnded = () => dismiss()
    const handleError = () => dismiss()
    const handleSound = () => {
      if (!video) return
      video.muted = !video.muted
      if (soundBtn) soundBtn.textContent = video.muted ? '🔇 Tap for sound' : '🔊 Sound on'
    }

    if (video) {
      video.addEventListener('ended', handleEnded)
      video.addEventListener('error', handleError)
    }
    if (soundBtn) soundBtn.addEventListener('click', handleSound)

    const fallbackTimer = window.setTimeout(() => {
      if (video && video.paused && video.currentTime === 0) dismiss()
    }, 4000)

    return () => {
      document.documentElement.classList.remove('intro-lock')
      window.clearTimeout(fallbackTimer)
      if (video) {
        video.removeEventListener('ended', handleEnded)
        video.removeEventListener('error', handleError)
      }
      if (soundBtn) soundBtn.removeEventListener('click', handleSound)
    }
  }, [onDismiss])

  return (
    <div id="intro-overlay" ref={overlayRef}>
      <video
        id="intro-video"
        ref={videoRef}
        src="assets/walkthrough.mp4"
        poster="assets/poster.jpg"
        autoPlay
        muted
        playsInline
      ></video>
      <div className="intro-scrim"></div>
      <div className="intro-topbar">
        <img className="intro-logo" src={logoMarkA} alt="The Squat" />
        <a
          href="#home"
          className="btn btn-ghost btn-sm"
          onClick={(e) => {
            e.preventDefault()
            if (overlayRef.current) overlayRef.current.classList.add('hide')
            document.documentElement.classList.remove('intro-lock')
            window.setTimeout(() => {
              if (overlayRef.current) overlayRef.current.style.display = 'none'
              onDismiss()
            }, 650)
          }}
        >
          Skip Intro →
        </a>
      </div>
      <button ref={soundBtnRef} className="btn btn-ghost btn-sm intro-sound-btn">
        🔇 Tap for sound
      </button>
      <div className="intro-caption">
        <div className="eyebrow" style={{ color: '#f5f4f2' }}>
          Welcome to
        </div>
        <h1 className="intro-h1">The Squat</h1>
        <p className="intro-sub">Take a look inside — our 3D walkthrough</p>
      </div>
    </div>
  )
}
