import logoMarkA from "../assets/logo-mark-a.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <img className="footer-watermark" src={logoMarkA} alt="" />
      <div className="wrap">
        <div className="foot-top">
          <div>
            <img className="foot-logo-img" src={logoMarkA} alt="The Squat" />
            <div className="foot-tag">
              Elite Fitness Club — for those who expect more.
            </div>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <div className="label">Visit</div>
              <div>Rajarajeshwari Nagar, Bengaluru</div>
            </div>
            <div className="foot-col">
              <div className="label">Contact</div>
              <div>9538 33 1234</div>
              <div>
                <a href="mailto:contact@thesquat.fit">contact@thesquat.fit</a>
              </div>
              <div>
                <a
                  href="https://instagram.com/thesquat.fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @thesquat.fit
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 The Squat — Elite Fitness Club</span>
          <span>Pre-Launch Site</span>
        </div>
      </div>
    </footer>
  );
}
