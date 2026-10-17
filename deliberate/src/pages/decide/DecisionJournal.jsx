import { useState } from 'react'
import { useProgress } from '../../store/ProgressContext'
import { addDays, dayKey, formatDay } from '../../lib/dates'
import { XP } from '../../lib/xp'

const EMPTY = {
  title: '',
  options: '',
  choice: '',
  reasoning: '',
  expected: '',
  confidence: 70,
  reversible: 'two-way',
  state: '',
  reviewOn: '',
}

function NewDecision({ onSave, onCancel }) {
  const [form, setForm] = useState({ ...EMPTY, reviewOn: addDays(dayKey(), 30) })
  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  const valid = form.title.trim() && form.expected.trim() && form.reviewOn

  function submit(e) {
    e.preventDefault()
    if (!valid) return
    onSave({ ...form, confidence: Number(form.confidence) })
  }

  return (
    <form className="panel form-grid" onSubmit={submit}>
      <label className="field span-2">
        <span>Decision</span>
        <input id="d-title" value={form.title} onChange={set('title')} placeholder="e.g. Migrate the billing service to the new queue" required />
      </label>
      <label className="field">
        <span>Options you considered</span>
        <textarea id="d-options" rows="3" value={form.options} onChange={set('options')} placeholder="One per line" />
      </label>
      <label className="field">
        <span>What you chose</span>
        <textarea id="d-choice" rows="3" value={form.choice} onChange={set('choice')} />
      </label>
      <label className="field span-2">
        <span>Reasoning and key information</span>
        <textarea id="d-reasoning" rows="3" value={form.reasoning} onChange={set('reasoning')} placeholder="Why this option? What did you know, and what didn't you know?" />
      </label>
      <label className="field span-2">
        <span>Prediction: what will happen? Make it checkable.</span>
        <input id="d-expected" value={form.expected} onChange={set('expected')} placeholder="e.g. Migration finished by March 1 with no customer-facing incidents" required />
      </label>
      <label className="field">
        <span>Confidence the prediction comes true: <strong className="num">{form.confidence}%</strong></span>
        <input id="d-confidence" type="range" min="50" max="99" value={form.confidence} onChange={set('confidence')} />
      </label>
      <label className="field">
        <span>Reversibility</span>
        <select id="d-reversible" value={form.reversible} onChange={set('reversible')}>
          <option value="two-way">Two-way door (easy to undo)</option>
          <option value="one-way">One-way door (hard to undo)</option>
        </select>
      </label>
      <label className="field">
        <span>Your state right now</span>
        <input id="d-state" value={form.state} onChange={set('state')} placeholder="e.g. rested, rushed, stressed" />
      </label>
      <label className="field">
        <span>Review on</span>
        <input id="d-review" type="date" value={form.reviewOn} min={dayKey()} onChange={set('reviewOn')} required />
      </label>
      <div className="span-2 row-between">
        <span className="muted small">+{XP.decision} XP now, +{XP.review} XP when you review it.</span>
        <div className="row">
          <button type="button" className="btn btn-quiet" onClick={onCancel}>Cancel</button>
          <button type="submit" className="btn btn-primary" disabled={!valid}>Log decision</button>
        </div>
      </div>
    </form>
  )
}

function ReviewForm({ decision, onSave, onCancel }) {
  const [happened, setHappened] = useState(null)
  const [notes, setNotes] = useState('')
  const [process, setProcess] = useState(3)
  const [lesson, setLesson] = useState('')

  return (
    <div className="review-form stack-sm">
      <p className="small"><strong>Your prediction:</strong> {decision.expected} <span className="muted">({decision.confidence}% confident)</span></p>
      <div className="row" role="group" aria-label="Did the prediction come true?">
        <span className="small">Did it come true?</span>
        <button type="button" className={`btn btn-quiet ${happened === true ? 'is-on' : ''}`} onClick={() => setHappened(true)}>Yes</button>
        <button type="button" className={`btn btn-quiet ${happened === false ? 'is-on' : ''}`} onClick={() => setHappened(false)}>No</button>
      </div>
      <label className="field">
        <span>What actually happened?</span>
        <textarea id={`r-notes-${decision.id}`} rows="2" value={notes} onChange={(e) => setNotes(e.target.value)} />
      </label>
      <label className="field">
        <span>Quality of your process, given what you knew then: <strong className="num">{process}/5</strong></span>
        <input id={`r-process-${decision.id}`} type="range" min="1" max="5" value={process} onChange={(e) => setProcess(Number(e.target.value))} />
        <span className="muted small">Judge the reasoning, not the luck.</span>
      </label>
      <label className="field">
        <span>What would you do differently?</span>
        <textarea id={`r-lesson-${decision.id}`} rows="2" value={lesson} onChange={(e) => setLesson(e.target.value)} />
      </label>
      <div className="row">
        <button className="btn btn-quiet" onClick={onCancel}>Cancel</button>
        <button className="btn btn-primary" disabled={happened === null} onClick={() => onSave({ happened, notes, process, lesson })}>
          Save review
        </button>
      </div>
    </div>
  )
}

function DecisionCard({ d, today }) {
  const { dispatch } = useProgress()
  const [reviewing, setReviewing] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const due = !d.outcome && d.reviewOn <= today

  return (
    <li className={`decision ${due ? 'is-due' : ''}`}>
      <div className="row-between">
        <div className="row wrap">
          <span className={`pill ${d.outcome ? (d.outcome.happened ? 'pill-good' : 'pill-bad') : due ? 'pill-warn' : ''}`}>
            {d.outcome ? (d.outcome.happened ? 'Came true' : 'Did not happen') : due ? 'Review due' : `Review ${formatDay(d.reviewOn)}`}
          </span>
          <span className="pill">{d.reversible === 'one-way' ? 'One-way door' : 'Two-way door'}</span>
          <span className="muted small">Logged {formatDay(d.date)}</span>
        </div>
        {confirming ? (
          <span className="inline-confirm small">
            Delete?
            <button className="link danger" onClick={() => dispatch({ type: 'deleteDecision', id: d.id })}>Delete</button>
            <button className="link" onClick={() => setConfirming(false)}>Keep</button>
          </span>
        ) : (
          <button className="link small muted" onClick={() => setConfirming(true)}>Delete</button>
        )}
      </div>
      <h3>{d.title}</h3>
      <dl className="dl">
        {d.choice && (<><dt>Chose</dt><dd>{d.choice}</dd></>)}
        {d.reasoning && (<><dt>Because</dt><dd>{d.reasoning}</dd></>)}
        <dt>Predicted</dt>
        <dd>{d.expected} <span className="muted num">({d.confidence}%)</span></dd>
        {d.state && (<><dt>State</dt><dd>{d.state}</dd></>)}
        {d.outcome && (
          <>
            <dt>Outcome</dt>
            <dd>{d.outcome.notes || (d.outcome.happened ? 'Came true.' : 'Did not happen.')}</dd>
            <dt>Process</dt>
            <dd className="num">{d.outcome.process}/5</dd>
            {d.outcome.lesson && (<><dt>Lesson</dt><dd>{d.outcome.lesson}</dd></>)}
          </>
        )}
      </dl>
      {!d.outcome &&
        (reviewing ? (
          <ReviewForm
            decision={d}
            onCancel={() => setReviewing(false)}
            onSave={(outcome) => {
              dispatch({ type: 'reviewDecision', id: d.id, outcome })
              setReviewing(false)
            }}
          />
        ) : (
          <button className={due ? 'btn btn-primary' : 'btn btn-quiet'} onClick={() => setReviewing(true)}>
            {due ? 'Review now' : 'Review early'}
          </button>
        ))}
    </li>
  )
}

export default function DecisionJournal() {
  const { state, dispatch } = useProgress()
  const [adding, setAdding] = useState(false)
  const today = dayKey()
  const sorted = [...state.decisions].sort((a, b) => {
    const ad = !a.outcome && a.reviewOn <= today
    const bd = !b.outcome && b.reviewOn <= today
    if (ad !== bd) return ad ? -1 : 1
    return b.date.localeCompare(a.date)
  })

  return (
    <div className="stack">
      {adding ? (
        <NewDecision
          onCancel={() => setAdding(false)}
          onSave={(decision) => {
            dispatch({ type: 'addDecision', decision })
            setAdding(false)
          }}
        />
      ) : (
        <div className="row-between panel">
          <p>Facing a meaningful choice? Write it down before you know the outcome.</p>
          <button className="btn btn-primary" onClick={() => setAdding(true)}>Log a decision</button>
        </div>
      )}
      {sorted.length === 0 ? (
        <div className="empty">
          <h2>No decisions logged yet</h2>
          <p>Start with any real choice this week: a technical approach, a priority call, a career move. Over time the journal shows patterns in your reasoning and calibration.</p>
        </div>
      ) : (
        <ul className="decisions">
          {sorted.map((d) => (
            <DecisionCard key={d.id} d={d} today={today} />
          ))}
        </ul>
      )}
    </div>
  )
}
