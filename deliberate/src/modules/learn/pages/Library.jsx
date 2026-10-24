import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSlice } from '../../../core/store/ProgressStore'
import { PageHeader, ProgressBar } from '../../../core/components/ui'
import { categories, studying, subjects, subjectById } from '../../../subjects/index.js'
import { allLessons, inProgress, lessonPath, lessonsOf, progressOf } from '../catalog'
import { isStarted } from '../slice'
import LessonRow from '../components/LessonRow'
import StudyButton from '../components/StudyButton'

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

// A subject not in your daily plan: what it covers, how big it is, and a button to add it.
function ExploreCard({ subject, lessons, drafts, following }) {
  const list = lessonsOf(subject.id)
  const { done } = progressOf(subject.id, lessons)
  const started = inProgress(lessons, Object.fromEntries(Object.entries(drafts).filter(([id]) => list.some((l) => l.id === id))))
  const minutes = list.reduce((n, l) => n + l.minutes, 0)
  return (
    <li className="subject-card" data-subject={subject.id}>
      <Link to={`/learn/${subject.id}`} className="subject-card-title">{subject.title}</Link>
      <p className="muted small">{subject.tagline}</p>
      {started && (
        <Link to={lessonPath(started)} className="subject-card-next small">
          Continue: {started.title} →
        </Link>
      )}
      <div className="subject-card-foot">
        <span className="small muted num">
          {list.length} lessons · about {Math.round(minutes / 60) || 1} h{done > 0 && ` · ${done} done`}
        </span>
        <StudyButton subject={subject} following={following} compact />
      </div>
    </li>
  )
}

export default function Library() {
  const { lessons, drafts } = useSlice('learn')
  const { following } = useSlice('core')
  const mine = studying(following)
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
        <>
          <section aria-labelledby="mine-h" className="stack-sm">
            <div className="row-between">
              <h2 id="mine-h" className="section-title">Your daily plan</h2>
              {mine.length > 0 && <Link to="/learn/plan" className="small">Edit plan</Link>}
            </div>
            {mine.length ? (
              <ul className="subject-grid">
                {subjects.filter((s) => mine.includes(s.id)).map((s) => (
                  <SubjectCard key={s.id} subject={s} lessons={lessons} drafts={drafts} />
                ))}
              </ul>
            ) : (
              <div className="plan-empty">
                <p className="muted">Choose the subjects you want to work on. Each day, Today gives you one short lesson from them.</p>
                <Link to="/learn/plan" className="btn btn-primary">Choose daily subjects</Link>
              </div>
            )}
          </section>

          <section aria-labelledby="explore-h" className="stack">
            <div>
              <h2 id="explore-h" className="section-title">{mine.length ? 'More subjects' : 'All subjects'}</h2>
              <p className="muted small">You can open any lesson, whether or not its subject is in your daily plan.</p>
            </div>
            {categories.map((c) => {
              const rest = c.subjects.filter((s) => !mine.includes(s.id))
              return rest.length > 0 && (
                <section key={c.id} aria-labelledby={`cat-${c.id}`} className="stack-sm">
                  <h3 id={`cat-${c.id}`} className="category-title">{c.title}</h3>
                  <ul className="subject-grid">
                    {rest.map((s) => (
                      <ExploreCard key={s.id} subject={s} lessons={lessons} drafts={drafts} following={following} />
                    ))}
                  </ul>
                </section>
              )
            })}
            {subjects.every((s) => mine.includes(s.id)) && <p className="muted small">Every subject in the library is in your daily plan.</p>}
          </section>
        </>
      )}
    </div>
  )
}
