import { useState } from 'react'
import { useProgress } from '../store/ProgressContext'
import { tracks } from '../data'
import { addDays, currentStreak, dayKey, longestStreak } from '../lib/dates'
import { levelFor, levelName } from '../lib/xp'
import { PageHeader, ProgressBar, TrackTag } from '../components/ui'
import Heatmap from '../components/Heatmap'

function Backup() {
  const { state, dispatch } = useProgress()
  const [mode, setMode] = useState(null) // 'export' | 'import' | 'reset'
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const json = JSON.stringify(state)

  async function copy() {
    try {
      await navigator.clipboard.writeText(json)
      setMessage('Copied. Paste it somewhere safe, like a note or a file.')
    } catch {
      setMessage('Copy was blocked. Select the text above and copy it manually.')
    }
  }

  function restore() {
    try {
      const data = JSON.parse(text)
      if (typeof data !== 'object' || data === null || typeof data.xp !== 'number') throw new Error('shape')
      dispatch({ type: 'import', state: data })
      setMessage('Progress restored.')
      setMode(null)
      setText('')
    } catch {
      setMessage('That doesn\'t look like a Deliberate backup. Paste the full text you exported.')
    }
  }

  return (
    <section className="panel stack-sm" aria-labelledby="bk-h">
      <h2 id="bk-h" className="section-title">Your data</h2>
      <p className="muted small">Progress is saved in this browser only. Export a backup to move it to another device or keep it safe.</p>
      <div className="row wrap">
        <button className={`btn btn-quiet ${mode === 'export' ? 'is-on' : ''}`} onClick={() => { setMode('export'); setMessage('') }}>Export backup</button>
        <button className={`btn btn-quiet ${mode === 'import' ? 'is-on' : ''}`} onClick={() => { setMode('import'); setMessage('') }}>Restore backup</button>
        <button className={`btn btn-quiet danger ${mode === 'reset' ? 'is-on' : ''}`} onClick={() => { setMode('reset'); setMessage('') }}>Reset everything</button>
      </div>
      {mode === 'export' && (
        <div className="stack-sm">
          <label htmlFor="export-text" className="sr-only">Backup data</label>
          <textarea id="export-text" rows="4" readOnly value={json} onFocus={(e) => e.target.select()} className="mono small" />
          <div><button className="btn" onClick={copy}>Copy to clipboard</button></div>
        </div>
      )}
      {mode === 'import' && (
        <div className="stack-sm">
          <label htmlFor="import-text" className="small">Paste a backup. This replaces your current progress.</label>
          <textarea id="import-text" rows="4" value={text} onChange={(e) => setText(e.target.value)} className="mono small" />
          <div><button className="btn btn-primary" disabled={!text.trim()} onClick={restore}>Restore</button></div>
        </div>
      )}
      {mode === 'reset' && (
        <div className="inline-confirm">
          <span>Delete all lessons, cards, journal entries and decisions? This can't be undone.</span>
          <button className="btn danger-solid" onClick={() => { dispatch({ type: 'reset' }); setMode(null); setMessage('All progress deleted.') }}>Delete everything</button>
          <button className="btn btn-quiet" onClick={() => setMode(null)}>Cancel</button>
        </div>
      )}
      {message && <p className="small" role="status">{message}</p>}
    </section>
  )
}

export default function Stats() {
  const { state } = useProgress()
  const today = dayKey()
  const { level, progress, toNext } = levelFor(state.xp)
  const cards = Object.values(state.cards)
  const drills = Object.values(state.challenges).flat()
  const quizTotals = Object.values(state.lessons).reduce((acc, l) => ({ s: acc.s + l.score, t: acc.t + l.total }), { s: 0, t: 0 })
  const activeDays = Object.keys(state.activity).length

  const figures = [
    ['Total XP', state.xp],
    ['Current streak', `${currentStreak(state.activity, today)} d`],
    ['Longest streak', `${longestStreak(state.activity)} d`],
    ['Active days', activeDays],
    ['Lessons done', Object.keys(state.lessons).length],
    ['Quiz accuracy', quizTotals.t ? `${Math.round((quizTotals.s / quizTotals.t) * 100)}%` : '–'],
    ['Cards in deck', cards.length],
    ['Cards mature', cards.filter((c) => c.interval >= 21).length],
    ['Drills solved', drills.length],
    ['Journal entries', state.reflections.length],
    ['Decisions logged', state.decisions.length],
    ['Decisions reviewed', state.decisions.filter((d) => d.outcome).length],
  ]

  return (
    <div className="stack-lg">
      <PageHeader eyebrow="Progress" title="Stats" />

      <section className="level-card">
        <div>
          <p className="eyebrow">Level {level}</p>
          <p className="level-name">{levelName(level)}</p>
        </div>
        <div className="level-meter">
          <ProgressBar value={progress} label="Level progress" />
          <span className="muted small num">{toNext} XP to level {level + 1}</span>
        </div>
      </section>

      <dl className="figures">
        {figures.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd className="num">{value}</dd>
          </div>
        ))}
      </dl>

      <section aria-labelledby="yr-h" className="stack-sm">
        <h2 id="yr-h" className="section-title">Last 12 months</h2>
        <div className="table-wrap">
          <Heatmap activity={state.activity} start={addDays(today, -364)} end={today} />
        </div>
      </section>

      <section aria-labelledby="tr-h" className="stack-sm">
        <h2 id="tr-h" className="section-title">By track</h2>
        <ul className="track-progress">
          {tracks.map((t) => {
            const done = t.lessons.filter((l) => state.lessons[l.id])
            const score = done.reduce((s, l) => s + state.lessons[l.id].score, 0)
            const total = done.reduce((s, l) => s + state.lessons[l.id].total, 0)
            return (
              <li key={t.id}>
                <div className="row-between">
                  <TrackTag track={t.id}>{t.title}</TrackTag>
                  <span className="muted small num">
                    {done.length}/{t.lessons.length} lessons{total ? ` · ${Math.round((score / total) * 100)}% quiz accuracy` : ''}
                  </span>
                </div>
                <ProgressBar value={done.length / t.lessons.length} track={t.id} label={`${t.title} progress`} />
              </li>
            )
          })}
        </ul>
      </section>

      <Backup />
    </div>
  )
}
