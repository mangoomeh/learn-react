import { addDays, daysBetween, formatDay, parseDay } from '../lib/dates'

// GitHub-style activity grid: one column per week, Monday at the top.
export default function Heatmap({ activity, start, end }) {
  const offset = (parseDay(start).getDay() + 6) % 7
  const first = addDays(start, -offset)
  const total = daysBetween(first, end) + 1
  const weeks = Math.ceil(total / 7)
  const cells = []
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < 7; d++) {
      const key = addDays(first, w * 7 + d)
      if (key > end) continue
      const xp = activity[key] || 0
      const lvl = xp === 0 ? 0 : xp < 20 ? 1 : xp < 50 ? 2 : xp < 90 ? 3 : 4
      cells.push(
        <rect key={key} x={w * 14} y={d * 14} width="11" height="11" rx="2" className={`hm hm-${lvl}`}>
          <title>{`${formatDay(key)}: ${xp} XP`}</title>
        </rect>,
      )
    }
  }
  return (
    <div className="heatmap">
      <svg viewBox={`0 0 ${weeks * 14} ${7 * 14}`} role="img" aria-label="Daily activity over recent weeks">
        {cells}
      </svg>
      <div className="hm-legend muted small">
        Less
        {[0, 1, 2, 3, 4].map((l) => (
          <svg key={l} width="11" height="11" aria-hidden="true"><rect width="11" height="11" rx="2" className={`hm hm-${l}`} /></svg>
        ))}
        More
      </div>
    </div>
  )
}
