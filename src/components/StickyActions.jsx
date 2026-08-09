import { CONTACT } from '../constants.js'

export default function StickyActions() {
  return (
    <div id="sticky-actions">
      <a href={`https://wa.me/${CONTACT.whatsappNumber}`} className="wa">
        WhatsApp
      </a>
      <a href={`tel:${CONTACT.phoneTel}`} className="call">
        Call Now
      </a>
    </div>
  )
}
