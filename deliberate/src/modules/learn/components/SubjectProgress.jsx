import { Link } from 'react-router-dom'
import { ProgressBar, SubjectTag } from '../../../core/components/ui'
import { subjects } from '../../../subjects/index.js'
import { lessonsOf } from '../catalog'

// Lessons finished per subject. Shown on Today (for the subjects in your daily plan) and, with quiz
// accuracy, on Stats (for every subject you've finished a lesson in).
export default function SubjectProgress({ lessons, subjectIds, showAccuracy = false, onlyStarted = false }) {
  const shown = subjects
    .filter((s) => !subjectIds || subjectIds.includes(s.id))
    .filter((s) => !onlyStarted || lessonsOf(s.id).some((l) => lessons[l.id]))
  if (!shown.length) return <p className="muted small">{onlyStarted ? 'Finish a lesson to see your progress by subject.' : <>No daily subjects yet. <Link to="/learn/plan">Choose some.</Link></>}</p>
  return (
    <ul className="subject-progress">
      {shown.map((s) => {
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
