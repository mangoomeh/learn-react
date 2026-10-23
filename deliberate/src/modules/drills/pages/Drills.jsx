import { useState } from 'react'
import { useDispatch, useSlice } from '../../../core/store/ProgressStore'
import { subjectById } from '../../../subjects/index.js'
import { dayKey } from '../../../core/lib/dates'
import { PageHeader, SubjectTag } from '../../../core/components/ui'
import { Inline } from '../../../core/components/Markdown'
import { KINDS } from '../kinds'
import { drills } from '../catalog'
import { dailyDrill, logDrill, XP_PER_DRILL } from '../api'

function Drill({ drill, onDone, logged }) {
  const [picked, setPicked] = useState(null)
  const [attempt, setAttempt] = useState('')
  const [revealed, setRevealed] = useState(false)
  const kind = KINDS[drill.kind]
  const isChoice = Array.isArray(drill.options)

  function choose(i) {
    setPicked(i)
    if (!logged) onDone({ correct: i === drill.answer })
  }

  return (
    <article className="drill" data-subject={drill.subject}>
      <div className="row-between">
        <SubjectTag subject={drill.subject}>{kind.label}</SubjectTag>
        <span className="muted small">{subjectById[drill.subject].short}</span>
      </div>
      <p className="prompt-text"><Inline text={drill.prompt} /></p>
      {drill.code && (
        <pre className="code">
          <code>{drill.code}</code>
        </pre>
      )}

      {isChoice ? (
        <>
          <div className="options">
            {drill.options.map((opt, i) => {
              let cls = 'option'
              if (picked !== null && i === drill.answer) cls += ' is-correct'
              else if (picked === i) cls += ' is-wrong'
              return (
                <button key={i} className={cls} disabled={picked !== null} onClick={() => choose(i)}>
                  {opt}
                </button>
              )
            })}
          </div>
          {picked !== null && (
            <p className={`feedback ${picked === drill.answer ? 'good' : 'bad'}`}>
              <strong>{picked === drill.answer ? 'Correct.' : 'Not quite.'}</strong> <Inline text={drill.explanation} />
            </p>
          )}
        </>
      ) : (
        <div className="stack-sm">
          <label htmlFor={`attempt-${drill.id}`} className="small muted">Think it through and write your answer before revealing.</label>
          <textarea id={`attempt-${drill.id}`} rows="4" value={attempt} onChange={(e) => setAttempt(e.target.value)} disabled={revealed} placeholder="Your reasoning…" />
          {!revealed ? (
            <div>
              <button className="btn btn-primary" onClick={() => setRevealed(true)} disabled={attempt.trim().length < 10}>
                Reveal model answer
              </button>
            </div>
          ) : (
            <>
              <div className="model-answer">
                <p className="eyebrow">Model answer</p>
                <p><Inline text={drill.answer} /></p>
              </div>
              {!logged ? (
                <div className="self-rate">
                  <span className="small muted">How close were you?</span>
                  {['Missed it', 'Partly', 'Nailed it'].map((label, i) => (
                    <button key={label} className="btn btn-quiet" onClick={() => onDone({ rating: i, correct: i === 2 })}>
                      {label}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="good small">Logged. +{XP_PER_DRILL} XP</p>
              )}
            </>
          )}
        </div>
      )}
    </article>
  )
}

export default function Drills() {
  const { log: logByDay } = useSlice('drills')
  const dispatch = useDispatch()
  const today = dayKey()
  const log = logByDay[today] || []
  const daily = dailyDrill(today)
  const [current, setCurrent] = useState(daily)
  const [filter, setFilter] = useState('all')
  const everDone = new Set(Object.values(logByDay).flat().map((c) => c.id))

  function another() {
    const pool = drills.filter((c) => c.id !== current.id && (filter === 'all' || c.kind === filter))
    const fresh = pool.filter((c) => !everDone.has(c.id))
    const from = fresh.length ? fresh : pool
    if (from.length) setCurrent(from[Math.floor(Math.random() * from.length)])
  }

  const logged = log.some((c) => c.id === current.id)
  const attempted = Object.values(logByDay).flat()
  const accuracy = attempted.length ? Math.round((attempted.filter((c) => c.correct).length / attempted.length) * 100) : null

  return (
    <div className="stack-lg">
      <PageHeader eyebrow="Practice" title="Drills">
        Short exercises that make you apply what you learn: spot fallacies, reason about code, estimate, and work through decisions.
      </PageHeader>

      <div className="chips">
        <span className="chip"><strong className="num">{log.length}</strong> today</span>
        <span className="chip"><strong className="num">{everDone.size}</strong> of {drills.length} seen</span>
        {accuracy !== null && <span className="chip"><strong className="num">{accuracy}%</strong> correct overall</span>}
      </div>

      {current.id === daily.id && <p className="eyebrow">Today's drill</p>}
      <Drill
        key={current.id}
        drill={current}
        logged={logged}
        onDone={(result) => dispatch(logDrill(logByDay, current.id, result, today))}
      />

      <div className="drill-next">
        <label htmlFor="drill-filter" className="small muted">Next drill type</label>
        <select id="drill-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Any type</option>
          {Object.entries(KINDS).map(([id, k]) => (
            <option key={id} value={id}>{k.label}</option>
          ))}
        </select>
        <button className="btn" onClick={another}>Another drill →</button>
      </div>
    </div>
  )
}
