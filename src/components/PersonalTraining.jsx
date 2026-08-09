import logoMarkA from '../assets/logo-mark-a.png'

export default function PersonalTraining() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="pt-wrap">
          <div>
            <div className="eyebrow">Personal Training</div>
            <h2>
              Faster results,
              <br />
              guided properly.
            </h2>
            <p>
              Achieve your goals faster with certified trainers who provide
              personalized workout programs, expert guidance, and nutrition
              support tailored to your fitness journey.
            </p>
            <a
              href="#contact"
              className="btn btn-solid"
              style={{ marginTop: 30 }}
            >
              Book a Free Consultation
            </a>
          </div>
          <div className="pt-visual">
            <img className="pt-logo" src={logoMarkA} alt="The Squat" />
          </div>
        </div>
      </div>
    </section>
  );
}
