import { useWholeState } from '../../core/store/ProgressStore'
import { useModules } from '../../core/modules'
import { addDays, currentStreak, dayKey, longestStreak } from '../../core/lib/dates'
import { levelFor, levelName } from '../../core/lib/levels'
import { PageHeader, ProgressBar } from '../../core/components/ui'
import Heatmap from '../../core/components/Heatmap'
import Backup from '../components/Backup'

// Stats shows the shared XP and streak figures, then whatever each module reports
// through its `stats` hooks (figures and an optional panel).
export default function Stats() {
  const state = useWholeState()
  const modules = useModules()
  const today = dayKey()
  const { xp, activity } = state.core
  const { level, progress, toNext } = levelFor(xp)

  const figures = [
    ['Total XP', xp],
    ['Current streak', `${currentStreak(activity, today)} d`],
    ['Longest streak', `${longestStreak(activity)} d`],
    ['Active days', Object.keys(activity).length],
    ...modules.flatMap((m) => m.stats?.figures?.(state[m.id]) ?? []),
  ]
  const panels = modules.filter((m) => m.stats?.panel)

  return (
    <div className="stack-lg">
      <PageHeader eyebrow="Progress" title="Stats" />

      <section className="level-card">
        <div>
          <p className="eyebrow">Level {level}</p>
          <p className="level-name">{levelName(level)}</p>
        </div>
        <div className="level-meter">
          <ProgressBar value={progress} label="Level progress" />
          <span className="muted small num">{toNext} XP to level {level + 1}</span>
        </div>
      </section>

      <dl className="figures">
        {figures.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd className="num">{value}</dd>
          </div>
        ))}
      </dl>

      <section aria-labelledby="yr-h" className="stack-sm">
        <h2 id="yr-h" className="section-title">Last 12 months</h2>
        <div className="table-wrap">
          <Heatmap activity={activity} start={addDays(today, -364)} end={today} />
        </div>
      </section>

      {panels.map((m) => (
        <section key={m.id} aria-label={m.stats.panel.title} className="stack-sm">
          <h2 className="section-title">{m.stats.panel.title}</h2>
          {m.stats.panel.render(state[m.id])}
        </section>
      ))}

      <Backup />
    </div>
  )
}
