export function PlateDivider({ tone = 'red' }) {
  return (
    <div className="plate-divider">
      <div className="bar"></div>
      {tone === 'red' ? (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="18" stroke="#c81e1e" strokeWidth="2.4" />
          <circle cx="24" cy="24" r="6" stroke="#c81e1e" strokeWidth="2.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="18" stroke="#6b6b6b" strokeWidth="2.4" />
          <circle cx="24" cy="24" r="6" stroke="#6b6b6b" strokeWidth="2.4" />
        </svg>
      )}
      <div className="bar"></div>
    </div>
  )
}
