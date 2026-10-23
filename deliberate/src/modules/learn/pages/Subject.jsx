import { Link, useParams } from 'react-router-dom'
import { useSlice } from '../../../core/store/ProgressStore'
import { ProgressBar } from '../../../core/components/ui'
import { subjectById } from '../../../subjects/index.js'
import { lessonsOf, progressOf } from '../catalog'
import { isStarted } from '../slice'
import LessonRow from '../components/LessonRow'

function Unit({ unit, subjectId, lessons, drafts }) {
  const list = lessonsOf(subjectId).filter((l) => l.unitId === unit.id)
  return (
    <section className="unit" aria-labelledby={`u-${unit.id}`}>
      <div className="unit-head">
        <h3 id={`u-${unit.id}`}>{unit.title}</h3>
        {unit.blurb && <p className="muted small">{unit.blurb}</p>}
      </div>
      <ul className="lesson-list">
        {list.map((l) => (
          <li key={l.id}>
            <LessonRow lesson={l} record={lessons[l.id]} started={isStarted(drafts[l.id])} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function Subject() {
  const { subjectId } = useParams()
  const { lessons, drafts } = useSlice('learn')
  const subject = subjectById[subjectId]

  if (!subject) {
    return (
      <div className="stack">
        <h1>Subject not found</h1>
        <Link to="/learn">Back to the library</Link>
      </div>
    )
  }

  const { done, total } = progressOf(subject.id, lessons)
  const core = subject.units.filter((u) => !u.elective)
  const groups = [...new Set(subject.units.filter((u) => u.elective).map((u) => u.group))]

  return (
    <div className="stack-lg" data-subject={subject.id}>
      <nav className="crumbs small">
        <Link to="/learn">Library</Link> <span aria-hidden="true">/</span> {subject.title}
      </nav>
      <header className="subject-head">
        <div className="page-header">
          <h1>{subject.title}</h1>
          <p className="lede">{subject.tagline}</p>
        </div>
        <div className="subject-meter">
          <span className="small muted num">{done} of {total} lessons</span>
          <ProgressBar value={done / total} subject={subject.id} label={`${subject.title} progress`} />
        </div>
      </header>

      <div className="stack-lg">
        {core.map((u) => (
          <Unit key={u.id} unit={u} subjectId={subject.id} lessons={lessons} drafts={drafts} />
        ))}
      </div>

      {groups.map((group) => (
        <section key={group} className="unit-group stack-lg" aria-labelledby={`g-${group}`}>
          <div className="unit-group-head">
            <h2 id={`g-${group}`}>{group}</h2>
            <p className="muted">Optional, practical topics. They aren't part of your daily lesson; Today suggests them as extra reading.</p>
          </div>
          {subject.units
            .filter((u) => u.elective && u.group === group)
            .map((u) => (
              <Unit key={u.id} unit={u} subjectId={subject.id} lessons={lessons} drafts={drafts} />
            ))}
        </section>
      ))}
    </div>
  )
}
