import { useEffect, useRef, useState } from "react";

const EXP_CARDS = [
  { ic: "🏋️", title: "Strength Zone", video: "assets/strength_zone.mp4" },
  {
    ic: "🏃",
    title: "Premium Cardio Zone",
    video: "assets/premium_cardio_zone.mp4",
  },
  {
    ic: "🤸",
    title: "Functional Training Area",
    video: "assets/functional_training_area.mp4",
  },
  { ic: "🧘", title: "Group Fitness Studio" },
  { ic: "🧖", title: "Steam & Recovery" },
  {
    ic: "💺",
    title: "Premium Reception",
    video: "assets/premium_reception.mp4",
  },
];

export default function Experience() {
  const [active, setActive] = useState(null);
  const videoRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    if (active && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [active]);

  useEffect(() => {
    if (active && previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [active]);

  const toggle = (card) => {
    if (!card.video) return;
    setActive((cur) => (cur && cur.title === card.title ? null : card));
  };

  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="eyebrow">Inside The Squat</div>
        <h2>
          Experience
          <br />
          the vision.
        </h2>
        <p
          style={{
            marginTop: 20,
            color: "var(--off-dim)",
            maxWidth: 520,
            fontSize: 15,
            lineHeight: 1.7,
          }}
        >
          Explore the thoughtfully designed spaces created to deliver an
          exceptional fitness experience.
        </p>
        <div className="exp-grid">
          {EXP_CARDS.map((c) => (
            <button
              key={c.title}
              className={`exp-card${c.video ? " has-video" : ""}${
                active && active.title === c.title ? " active" : ""
              }`}
              onClick={() => toggle(c)}
            >
              <div className="ic">{c.ic}</div>
              <h3>{c.title}</h3>
            </button>
          ))}
        </div>
        {active && (
          <div
            className="exp-preview"
            ref={previewRef}
            style={{ scrollMarginTop: 110 }}
          >
            <div className="exp-preview-head">
              <span className="t">{active.title}</span>
              <button onClick={() => setActive(null)}>Close ✕</button>
            </div>
            <video
              className="exp-preview-video"
              src={active.video}
              controls
              playsInline
              ref={videoRef}
            />
          </div>
        )}
        <div className="walkthrough-block">
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            ▶ Watch Our 3D Walkthrough
          </div>
          <video
            className="walkthrough-video"
            controls
            playsInline
            poster="assets/poster.jpg"
          >
            <source src="assets/walkthrough.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="exp-note">
          Note: All images and videos shown are 3D visualizations of our
          upcoming facility.
        </p>
      </div>
    </section>
  );
}
