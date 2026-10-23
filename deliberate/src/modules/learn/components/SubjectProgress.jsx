import { ProgressBar, SubjectTag } from '../../../core/components/ui'
import { subjects } from '../../../subjects/index.js'
import { lessonsOf } from '../catalog'

// Lessons finished per subject. Shown on Today and, with quiz accuracy, on Stats.
export default function SubjectProgress({ lessons, showAccuracy = false }) {
  return (
    <ul className="subject-progress">
      {subjects.map((s) => {
        const list = lessonsOf(s.id)
        const done = list.filter((l) => lessons[l.id])
        const score = done.reduce((n, l) => n + lessons[l.id].score, 0)
        const total = done.reduce((n, l) => n + lessons[l.id].total, 0)
        return (
          <li key={s.id}>
            <div className="row-between">
              <SubjectTag subject={s.id}>{s.title}</SubjectTag>
              <span className="muted small num">
                {done.length}/{list.length}
                {showAccuracy && ` lessons${total ? ` · ${Math.round((score / total) * 100)}% quiz accuracy` : ''}`}
              </span>
            </div>
            <ProgressBar value={done.length / list.length} subject={s.id} label={`${s.title} progress`} />
          </li>
        )
      })}
    </ul>
  )
}
