import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSlice } from '../../../core/store/ProgressStore'
import { PageHeader, ProgressBar } from '../../../core/components/ui'
import { subjects, subjectById } from '../../../subjects/index.js'
import { allLessons, inProgress, lessonPath, lessonsOf, progressOf } from '../catalog'
import { isStarted } from '../slice'
import LessonRow from '../components/LessonRow'

const matches = (lesson, q) => `${lesson.title} ${lesson.summary} ${lesson.body} ${(lesson.inTheWild ?? []).join(' ')}`.toLowerCase().includes(q)

function SubjectCard({ subject, lessons, drafts }) {
  const { done, total } = progressOf(subject.id, lessons)
  const subjectDrafts = Object.fromEntries(Object.entries(drafts).filter(([id]) => lessonsOf(subject.id).some((l) => l.id === id)))
  const started = inProgress(lessons, subjectDrafts)
  const next = started ?? lessonsOf(subject.id, { core: true }).find((l) => !lessons[l.id]) ?? lessonsOf(subject.id).find((l) => !lessons[l.id])
  return (
    <li className="subject-card" data-subject={subject.id}>
      <Link to={`/learn/${subject.id}`} className="subject-card-title">{subject.title}</Link>
      <p className="muted small">{subject.tagline}</p>
      <div className="subject-card-meter">
        <span className="small muted num">{done} of {total} lessons</span>
        <ProgressBar value={done / total} subject={subject.id} label={`${subject.title} progress`} />
      </div>
      {next ? (
        <Link to={lessonPath(next)} className="subject-card-next small">
          {done === 0 && !started ? 'Start' : 'Continue'}: {next.title} →
        </Link>
      ) : (
        <span className="good small">✓ Every lesson finished</span>
      )}
    </li>
  )
}

export default function Library() {
  const { lessons, drafts } = useSlice('learn')
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const results = q ? allLessons.filter((l) => matches(l, q)) : []

  return (
    <div className="stack-lg">
      <PageHeader eyebrow="Learn" title="Library">
        Every subject is a set of short lessons. Each ends with a quiz, and its key ideas join your flashcard deck.
      </PageHeader>

      <div>
        <label htmlFor="library-search" className="sr-only">Search all lessons</label>
        <input id="library-search" type="search" className="search library-search" placeholder="Search all lessons, e.g. cron, anchoring, Big-O" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>

      {q ? (
        <section aria-label="Search results" className="stack-sm">
          <p className="muted small">{results.length} lesson{results.length === 1 ? '' : 's'} mention “{query.trim()}”</p>
          <ul className="lesson-list">
            {results.map((l) => (
              <li key={l.id}>
                <LessonRow lesson={l} record={lessons[l.id]} started={isStarted(drafts[l.id])} label={`${subjectById[l.subjectId].short} · ${l.unitTitle}`} />
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <ul className="subject-grid">
          {subjects.map((s) => (
            <SubjectCard key={s.id} subject={s} lessons={lessons} drafts={drafts} />
          ))}
        </ul>
      )}
    </div>
  )
}
