const TIMELINE = [
  {
    dot: '✔',
    stage: 'Stage 01 · Complete',
    title: 'Project Announced',
    desc: 'The Squat is officially underway in RR Nagar.',
    done: true,
  },
  {
    dot: '🚧',
    stage: 'Stage 02 · In Progress',
    title: 'Interior Work in Progress',
    desc: 'Interior work is currently underway.',
    done: true,
  },
  {
    dot: '🏗',
    stage: 'Stage 03 · Upcoming',
    title: 'Equipment Installation',
    desc: 'Jerai and VIVA Fitness equipment moves in.',
    done: false,
  },
  {
    dot: '🎉',
    stage: 'Stage 04 · Upcoming',
    title: 'Grand Opening',
    desc: 'The doors open to our founding members.',
    done: false,
  },
]

export default function Journey() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="eyebrow">Our Journey</div>
        <h2>
          Building something
          <br />
          extraordinary.
        </h2>
        <div className="timeline">
          <div className="rail"></div>
          {TIMELINE.map((t) => (
            <div className={`t-item${t.done ? ' done' : ''}`} key={t.title}>
              <div className="t-dot">{t.dot}</div>
              <div className="t-body">
                <div className="stage">{t.stage}</div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            marginTop: 40,
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--steel)',
          }}
        >
          Follow our journey as The Squat comes to life.
        </p>
      </div>
    </section>
  )
}
