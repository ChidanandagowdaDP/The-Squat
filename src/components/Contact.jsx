import { useState } from 'react'
import { CONTACT } from '../constants.js'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    goal: 'Weight Loss',
    time: '',
    msg: '',
  })
  const [note, setNote] = useState('')
  const [noteShown, setNoteShown] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const lines = [
      'New Enquiry — The Squat',
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      form.email ? `Email: ${form.email}` : null,
      `Fitness Goal: ${form.goal}`,
      form.time ? `Preferred Time: ${form.time}` : null,
      form.msg ? `Message: ${form.msg}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(
      `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(lines)}`,
      '_blank'
    )

    const subject = encodeURIComponent(
      `New Enquiry from ${form.name || 'Website'} — The Squat`
    )
    const body = encodeURIComponent(lines)
    window.setTimeout(() => {
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    }, 400)

    setNote(
      'Opening WhatsApp and email with your details — just hit Send in each to reach us.'
    )
    setNoteShown(true)
    setSubmitting(true)
  }

  return (
    <section className="section light" id="contact">
      <div className="wrap">
        <div className="eyebrow">Visit Us</div>
        <h2>
          The Squat —
          <br />
          Elite Fitness Club.
        </h2>
        <div className="visit-grid" style={{ marginTop: 56 }}>
          <div>
            <div className="info-block">
              <div className="label">Address</div>
              <div className="value">
                {CONTACT.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            </div>
            <div className="info-block">
              <div className="label">Opening Hours</div>
              <div className="hours-row">
                <span>Monday – Saturday</span>
                <span>5:00 AM – 11:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Sunday</span>
                <span>7:00 AM – 9:00 PM</span>
              </div>
            </div>
            <div className="info-block">
              <div className="label">Contact</div>
              <a
                className="value"
                href={`tel:${CONTACT.phoneTel}`}
                style={{ display: 'block' }}
              >
                📞 {CONTACT.phoneDisplay}
              </a>
              <a
                className="value"
                href={`mailto:${CONTACT.email}`}
                style={{ display: 'block' }}
              >
                📧 {CONTACT.email}
              </a>
              <a
                className="value"
                href={CONTACT.instagram}
                style={{ display: 'block' }}
              >
                📷 @thesquat.fit
              </a>
            </div>
          </div>
          <div className="map-frame">
            <div style={{ fontSize: 30 }}>📍</div>
            <p>
              Kempegowda Road, Rajarajeshwari Nagar
              <br />
              Bengaluru, Karnataka – 560098
            </p>
            <a
              href={CONTACT.mapsUrl}
              className="btn btn-solid btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="form-wrap">
          <div className="eyebrow">Start Your Fitness Journey</div>
          <h3
            style={{
              fontFamily: 'var(--body)',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: 20,
              marginTop: 6,
            }}
          >
            Enquiry Form
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-name">Name</label>
                <input id="f-name" type="text" required value={form.name} onChange={set('name')} />
              </div>
              <div className="field">
                <label htmlFor="f-mobile">Mobile Number</label>
                <input id="f-mobile" type="tel" required value={form.mobile} onChange={set('mobile')} />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-email">Email (Optional)</label>
                <input id="f-email" type="email" value={form.email} onChange={set('email')} />
              </div>
              <div className="field">
                <label htmlFor="f-goal">Fitness Goal</label>
                <select id="f-goal" value={form.goal} onChange={set('goal')}>
                  <option>Weight Loss</option>
                  <option>Muscle Building</option>
                  <option>Strength Training</option>
                  <option>General Fitness</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-time">Preferred Time to Visit</label>
              <input
                id="f-time"
                type="text"
                placeholder="e.g. Weekday mornings"
                value={form.time}
                onChange={set('time')}
              />
            </div>
            <div className="field">
              <label htmlFor="f-msg">Message</label>
              <textarea id="f-msg" value={form.msg} onChange={set('msg')}></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-solid dark"
              style={{ background: 'var(--ink)', borderColor: 'var(--ink)' }}
            >
              {submitting ? 'Opening WhatsApp & Email…' : 'Submit Enquiry'}
            </button>
            <p className={`enquiry-note${noteShown ? ' show' : ''}`}>{note}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
