import { useState } from 'react'
import { useDispatch, useWholeState } from '../../core/store/ProgressStore'
import { isBackup } from '../../core/store/persistence'

// Export, restore and reset cover the whole store, so they live in the app shell.
export default function Backup() {
  const state = useWholeState()
  const dispatch = useDispatch()
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
      if (!isBackup(data)) throw new Error('shape')
      dispatch({ type: 'app/import', state: data })
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
          <button className="btn danger-solid" onClick={() => { dispatch({ type: 'app/reset' }); setMode(null); setMessage('All progress deleted.') }}>Delete everything</button>
          <button className="btn btn-quiet" onClick={() => setMode(null)}>Cancel</button>
        </div>
      )}
      {message && <p className="small" role="status">{message}</p>}
    </section>
  )
}
