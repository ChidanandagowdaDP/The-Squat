import { CONTACT } from "../constants.js";
import logoMarkB from "../assets/logo-mark-b.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img className="hero-watermark" src={logoMarkB} alt="" />
      <div className="wrap">
        <h1>
          The
          <br />
          Squat
        </h1>
        <p className="sub">Elite Fitness Club — for those who expect more.</p>
        <div className="strip">
          <span>Premium Fitness</span>
          <span className="dot">/</span>
          <span>Expert Coaching</span>
          <span className="dot">/</span>
          <span>Exceptional Results</span>
        </div>
        <div className="ctas">
          <a href="#prelaunch" className="btn btn-solid">
            Join Pre-Launch
          </a>
          <a href="#contact" className="btn btn-ghost dark">
            Book a Free Consultation
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsappNumber}`}
            className="btn btn-ghost dark"
          >
            WhatsApp
          </a>
          <a href={`tel:${CONTACT.phoneTel}`} className="btn btn-ghost dark">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
