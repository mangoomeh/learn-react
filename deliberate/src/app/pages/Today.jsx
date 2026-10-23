import { Link } from 'react-router-dom'
import { useWholeState } from '../../core/store/ProgressStore'
import { useModules } from '../../core/modules'
import { addDays, currentStreak, dayKey, formatDay, parseDay } from '../../core/lib/dates'
import { levelFor, levelName } from '../../core/lib/levels'
import { ProgressBar } from '../../core/components/ui'
import Heatmap from '../../core/components/Heatmap'

function Rep({ done, to, title, detail, action }) {
  return (
    <li className={`rep ${done ? 'is-done' : ''}`}>
      <span className="rep-check" aria-hidden="true">{done ? '✓' : ''}</span>
      <div className="rep-body">
        <p className="rep-title">{title}</p>
        <p className="rep-detail">{detail}</p>
      </div>
      <Link to={to} className={done ? 'btn btn-quiet' : 'btn'}>
        {done ? 'Again' : action}
      </Link>
    </li>
  )
}

// Today is assembled from what each module contributes through its `today` hooks:
// rep (a daily task), notice (needs attention), extra (optional suggestion) and panel.
export default function Today() {
  const state = useWholeState()
  const modules = useModules()
  const today = dayKey()
  const ctx = { today }
  const collect = (key) =>
    modules.map((m) => m.today?.[key] && { id: m.id, value: m.today[key](state[m.id], ctx) }).filter((c) => c?.value)
  const reps = collect('rep')
  const notices = collect('notice')
  const extras = collect('extra')
  const panels = modules.filter((m) => m.today?.panel)

  const { level, progress, toNext } = levelFor(state.core.xp)
  const streak = currentStreak(state.core.activity, today)
  const xpToday = state.core.activity[today] || 0
  const left = reps.filter((r) => !r.value.done).length
  const weekday = parseDay(today).toLocaleDateString(undefined, { weekday: 'long' })

  return (
    <div className="stack-lg">
      <header className="today-head">
        <div>
          <p className="eyebrow">{weekday}, {formatDay(today)}</p>
          <h1>{left === 0 ? `All ${reps.length} reps done. Nice work.` : `${left} rep${left === 1 ? '' : 's'} left today`}</h1>
          <p className="lede">Small daily practice across engineering, thinking and decisions compounds faster than occasional marathons.</p>
        </div>
        <div className="today-stats">
          <div className="stat">
            <span className="stat-num">{streak}</span>
            <span className="stat-label">day streak</span>
          </div>
          <div className="stat">
            <span className="stat-num">{xpToday}</span>
            <span className="stat-label">XP today</span>
          </div>
          <div className="stat stat-wide">
            <span className="stat-num">L{level}</span>
            <span className="stat-label">{levelName(level)} · {toNext} XP to next</span>
            <ProgressBar value={progress} label="Level progress" />
          </div>
        </div>
      </header>

      <section aria-labelledby="reps-h">
        <h2 id="reps-h" className="section-title">Today's reps</h2>
        <ol className="reps">
          {reps.map(({ id, value }) => (
            <Rep key={id} {...value} />
          ))}
        </ol>
        {extras.map(({ id, value }) => (
          <p key={id} className="today-extra small">
            <span className="muted">{value.label}</span> <Link to={value.to}>{value.title}</Link>{' '}
            {value.meta && <span className="muted">· {value.meta}</span>}
          </p>
        ))}
      </section>

      {notices.map(({ id, value }) => (
        <section key={id} className="notice" aria-label={value.title}>
          <h2 className="section-title">{value.title}</h2>
          <ul className="plain-list">
            {value.items.map((item) => (
              <li key={item.key}>
                <Link to={item.to}>{item.label}</Link> {item.meta && <span className="muted">· {item.meta}</span>}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <div className="grid-2">
        {panels.map((m) => (
          <section key={m.id} aria-label={m.today.panel.title}>
            <h2 className="section-title">{m.today.panel.title}</h2>
            {m.today.panel.render(state[m.id], ctx)}
          </section>
        ))}
        <section aria-labelledby="act-h">
          <div className="row-between">
            <h2 id="act-h" className="section-title">Last 16 weeks</h2>
            <Link to="/stats" className="muted small">All stats</Link>
          </div>
          <Heatmap activity={state.core.activity} end={today} start={addDays(today, -7 * 16 + 1)} />
        </section>
      </div>
    </div>
  )
}
