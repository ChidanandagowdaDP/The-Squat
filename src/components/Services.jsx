const SERVICES = [
  "Gym Membership",
  "Personal Training",
  "Strength Training",
  "Muscle Building",
  "Weight Loss & Fat Loss",
  "Functional Training",
  "Cardio Training",
  "Nutrition Guidance",
];

const GROUP_TAGS = ["Zumba", "Yoga", "HIIT", "And More"];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="eyebrow">Our Services</div>
        {/* <h2>
          Everything you need,
          <br />
          under one roof.
        </h2> */}
        <div className="services-list">
          {SERVICES.map((name, i) => (
            <div className="service-row" key={name}>
              <span className="name">{name}</span>
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
          <div className="service-row-block">
            <div className="service-row">
              <span className="name">Group Fitness Classes</span>
              <span className="idx">09</span>
            </div>
            <div className="sub-tags">
              {GROUP_TAGS.map((t) => (
                <span className="sub-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="service-row">
            <span className="name">Steam & Shower Facilities</span>
            <span className="idx">10</span>
          </div>
        </div>
      </div>
    </section>
  );
}
