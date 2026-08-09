const WHY_ITEMS = [
  'Premium Strength Equipment',
  'Premium Cardio Equipment',
  'Certified Personal Trainers',
  'Functional Training Zone',
  'Group Fitness Studio',
  'Nutrition Guidance',
  'Steam & Shower Facilities',
  'Ample Parking Space',
  'Spacious Premium Environment',
  'Dedicated Member Support',
]

export default function WhyChoose() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="eyebrow">Why Choose The Squat</div>
        <div className="why-grid">
          {WHY_ITEMS.map((item, i) => (
            <div className="why-item" key={item}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
