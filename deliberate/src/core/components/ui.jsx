// `subject` tints the bar with that subject's colour (see SubjectColors in the app shell).
export function ProgressBar({ value, subject, label }) {
  const pct = Math.round(Math.min(1, Math.max(0, value)) * 100)
  return (
    <div className="bar" data-subject={subject} role="progressbar" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100" aria-label={label}>
      <span style={{ width: `${pct}%` }} />
    </div>
  )
}

export function SubjectTag({ subject, children }) {
  return (
    <span className="tag" data-subject={subject}>
      {children}
    </span>
  )
}

export function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {children && <p className="lede">{children}</p>}
    </header>
  )
}
