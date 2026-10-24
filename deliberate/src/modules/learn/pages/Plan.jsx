import { Link } from 'react-router-dom'
import { useDispatch, useSlice } from '../../../core/store/ProgressStore'
import { PageHeader } from '../../../core/components/ui'
import { categories, studying } from '../../../subjects/index.js'
import { lessonsOf } from '../catalog'
import { toggleStudying } from '../api'

// Choose which subjects Today draws your daily lesson (and drills) from.
export default function Plan() {
  const { following } = useSlice('core')
  const dispatch = useDispatch()
  const mine = studying(following)

  return (
    <div className="stack-lg">
      <nav className="crumbs small">
        <Link to="/learn">Library</Link> <span aria-hidden="true">/</span> Daily plan
      </nav>
      <PageHeader eyebrow="Learn" title="Your daily plan">
        Pick the subjects you want to work on. Each day, Today gives you one short lesson from them, starting with
        whichever you're furthest behind in, plus a drill. Two to four subjects is a good pace; you can change this any time.
      </PageHeader>

      {categories.map((c) => (
        <fieldset key={c.id} className="plan-group">
          <legend className="category-title">{c.title}</legend>
          <ul className="plan-list">
            {c.subjects.map((s) => {
              const on = mine.includes(s.id)
              return (
                <li key={s.id} data-subject={s.id}>
                  <label className={`plan-option ${on ? 'is-on' : ''}`}>
                    <input type="checkbox" checked={on} onChange={() => dispatch(toggleStudying(following, s.id))} />
                    <span className="plan-option-text">
                      <span className="plan-option-title">{s.title}</span>
                      <span className="muted small">{s.tagline}</span>
                      <span className="muted small num">{lessonsOf(s.id, { core: true }).length} lessons</span>
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>
        </fieldset>
      ))}

      <div className="plan-bar">
        <span className="small" aria-live="polite">
          {mine.length === 0
            ? 'No subjects chosen yet.'
            : `${mine.length} subject${mine.length === 1 ? '' : 's'} in your daily plan.`}
          {mine.length > 5 && <span className="muted"> That's a lot: each subject will come round less often.</span>}
        </span>
        <Link to="/" className={mine.length ? 'btn btn-primary' : 'btn'}>{mine.length ? 'Done' : 'Back to Today'}</Link>
      </div>
    </div>
  )
}
