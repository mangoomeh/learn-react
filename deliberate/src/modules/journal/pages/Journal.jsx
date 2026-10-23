import { useState } from 'react'
import { useDispatch, useSlice } from '../../../core/store/ProgressStore'
import { dayIndex, dayKey, formatDay } from '../../../core/lib/dates'
import { PageHeader } from '../../../core/components/ui'
import { reflectionPrompts } from '../data/prompts'
import { XP_PER_ENTRY, addEntry, deleteEntry } from '../api'

export default function Journal() {
  const { entries: all } = useSlice('journal')
  const dispatch = useDispatch()
  const today = dayKey()
  const [promptIdx, setPromptIdx] = useState(dayIndex(today) % reflectionPrompts.length)
  const [text, setText] = useState('')
  const [query, setQuery] = useState('')
  const [confirmId, setConfirmId] = useState(null)
  const prompt = reflectionPrompts[promptIdx]

  function save(e) {
    e.preventDefault()
    if (!text.trim()) return
    dispatch(addEntry({ prompt, text: text.trim(), source: 'Daily reflection' }))
    setText('')
  }

  const q = query.trim().toLowerCase()
  const entries = q
    ? all.filter((r) => `${r.prompt} ${r.text} ${r.source}`.toLowerCase().includes(q))
    : all

  return (
    <div className="stack-lg">
      <PageHeader eyebrow="Reflection" title="Journal">
        Writing turns experience into learning. A few sentences a day is enough to notice patterns in how you work and think.
      </PageHeader>

      <form className="panel stack-sm" onSubmit={save}>
        <div className="row-between">
          <label htmlFor="reflection" className="prompt-label">{prompt}</label>
          <button type="button" className="btn btn-quiet small" onClick={() => setPromptIdx((i) => (i + 1) % reflectionPrompts.length)}>
            Different prompt
          </button>
        </div>
        <textarea id="reflection" rows="6" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write freely. Nobody else sees this." />
        <div className="row-between">
          <span className="muted small">+{XP_PER_ENTRY} XP per entry. Stored only in this browser.</span>
          <button className="btn btn-primary" type="submit" disabled={!text.trim()}>Save entry</button>
        </div>
      </form>

      <section aria-labelledby="past-h" className="stack">
        <div className="row-between">
          <h2 id="past-h" className="section-title">Past entries <span className="muted num">({all.length})</span></h2>
          <label htmlFor="journal-search" className="sr-only">Search entries</label>
          <input id="journal-search" type="search" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} className="search" />
        </div>
        {entries.length === 0 ? (
          <p className="muted">{q ? 'No entries match.' : 'Your entries will appear here, including notes from lesson practice exercises.'}</p>
        ) : (
          <ul className="entries">
            {entries.map((r) => (
              <li key={r.id} className="entry">
                <div className="row-between">
                  <span className="muted small">{formatDay(r.date)} · {r.source}</span>
                  {confirmId === r.id ? (
                    <span className="inline-confirm small">
                      Delete this entry?
                      <button className="link danger" onClick={() => dispatch(deleteEntry(r.id))}>Delete</button>
                      <button className="link" onClick={() => setConfirmId(null)}>Keep</button>
                    </span>
                  ) : (
                    <button className="link small muted" onClick={() => setConfirmId(r.id)}>Delete</button>
                  )}
                </div>
                <p className="entry-prompt">{r.prompt}</p>
                <p className="entry-text">{r.text}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
