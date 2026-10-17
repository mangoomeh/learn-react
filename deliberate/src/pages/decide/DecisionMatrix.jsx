import { useEffect, useState } from 'react'

const STORAGE_KEY = 'deliberate:matrix'

const EXAMPLE = {
  example: true,
  title: 'State management for a new React app',
  options: [
    { id: 'o1', name: 'Context + useReducer' },
    { id: 'o2', name: 'Redux Toolkit' },
    { id: 'o3', name: 'Zustand' },
  ],
  criteria: [
    { id: 'c1', name: 'Team familiarity', weight: 5 },
    { id: 'c2', name: 'Learning curve', weight: 3 },
    { id: 'c3', name: 'Ecosystem & devtools', weight: 2 },
    { id: 'c4', name: 'Low boilerplate', weight: 3 },
  ],
  scores: {
    o1: { c1: 5, c2: 5, c3: 3, c4: 4 },
    o2: { c1: 3, c2: 3, c3: 5, c4: 3 },
    o3: { c1: 2, c2: 4, c3: 3, c4: 5 },
  },
}

const BLANK = {
  example: false,
  title: '',
  options: [
    { id: 'o1', name: 'Option A' },
    { id: 'o2', name: 'Option B' },
  ],
  criteria: [
    { id: 'c1', name: 'Criterion 1', weight: 3 },
    { id: 'c2', name: 'Criterion 2', weight: 3 },
  ],
  scores: {},
}

function loadMatrix() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : EXAMPLE
  } catch {
    return EXAMPLE
  }
}

const newId = (prefix) => prefix + Math.random().toString(36).slice(2, 8)
const score = (m, o, c) => m.scores[o]?.[c] ?? 3

function totals(m, criteria = m.criteria) {
  return m.options.map((o) => ({
    ...o,
    total: criteria.reduce((sum, c) => sum + score(m, o.id, c.id) * c.weight, 0),
  }))
}

function winnerOf(m, criteria) {
  const t = totals(m, criteria)
  return t.reduce((best, o) => (o.total > best.total ? o : best), t[0])
}

// Which single-criterion weight changes of ±1 would change the winner?
function sensitivity(m) {
  if (m.options.length < 2) return []
  const base = winnerOf(m, m.criteria).id
  const flips = []
  for (const c of m.criteria) {
    for (const delta of [-1, 1]) {
      const weight = Math.min(5, Math.max(1, c.weight + delta))
      if (weight === c.weight) continue
      const changed = m.criteria.map((x) => (x.id === c.id ? { ...x, weight } : x))
      const w = winnerOf(m, changed)
      if (w.id !== base) flips.push({ criterion: c.name, weight, winner: w.name })
    }
  }
  return flips
}

export default function DecisionMatrix() {
  const [m, setM] = useState(loadMatrix)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(m))
    } catch {
      // Not persisted; the matrix still works for this visit.
    }
  }, [m])

  const edit = (fn) => setM((prev) => ({ ...fn(prev), example: false }))
  const setScore = (o, c, v) => edit((p) => ({ ...p, scores: { ...p.scores, [o]: { ...p.scores[o], [c]: v } } }))
  const ranked = totals(m).sort((a, b) => b.total - a.total)
  const max = Math.max(1, ...ranked.map((r) => r.total))
  const flips = sensitivity(m)

  return (
    <div className="stack-lg">
      {m.example && (
        <p className="notice small">
          This is a worked example from the lesson. Edit anything to make it yours, or <button className="link" onClick={() => setM(BLANK)}>start blank</button>.
        </p>
      )}
      <label className="field">
        <span>What are you deciding?</span>
        <input id="m-title" value={m.title} onChange={(e) => edit((p) => ({ ...p, title: e.target.value }))} placeholder="e.g. Which job offer to accept" />
      </label>

      <div className="table-wrap">
        <table className="table matrix">
          <thead>
            <tr>
              <th scope="col">Criterion</th>
              <th scope="col">Weight 1–5</th>
              {m.options.map((o) => (
                <th key={o.id} scope="col">
                  <div className="row nowrap">
                    <input
                      aria-label="Option name"
                      value={o.name}
                      onChange={(e) => edit((p) => ({ ...p, options: p.options.map((x) => (x.id === o.id ? { ...x, name: e.target.value } : x)) }))}
                    />
                    {m.options.length > 2 && (
                      <button className="link muted" aria-label={`Remove ${o.name}`} onClick={() => edit((p) => ({ ...p, options: p.options.filter((x) => x.id !== o.id) }))}>×</button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {m.criteria.map((c) => (
              <tr key={c.id}>
                <th scope="row">
                  <div className="row nowrap">
                    <input
                      aria-label="Criterion name"
                      value={c.name}
                      onChange={(e) => edit((p) => ({ ...p, criteria: p.criteria.map((x) => (x.id === c.id ? { ...x, name: e.target.value } : x)) }))}
                    />
                    {m.criteria.length > 1 && (
                      <button className="link muted" aria-label={`Remove ${c.name}`} onClick={() => edit((p) => ({ ...p, criteria: p.criteria.filter((x) => x.id !== c.id) }))}>×</button>
                    )}
                  </div>
                </th>
                <td>
                  <input
                    type="number" min="1" max="5" className="num-input" aria-label={`Weight for ${c.name}`}
                    value={c.weight}
                    onChange={(e) => edit((p) => ({ ...p, criteria: p.criteria.map((x) => (x.id === c.id ? { ...x, weight: Math.min(5, Math.max(1, Number(e.target.value) || 1)) } : x)) }))}
                  />
                </td>
                {m.options.map((o) => (
                  <td key={o.id}>
                    <input
                      type="number" min="1" max="5" className="num-input" aria-label={`${o.name} on ${c.name}`}
                      value={score(m, o.id, c.id)}
                      onChange={(e) => setScore(o.id, c.id, Math.min(5, Math.max(1, Number(e.target.value) || 1)))}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row wrap">
        <button className="btn btn-quiet" onClick={() => edit((p) => ({ ...p, criteria: [...p.criteria, { id: newId('c'), name: 'New criterion', weight: 3 }] }))}>+ Criterion</button>
        <button className="btn btn-quiet" onClick={() => edit((p) => ({ ...p, options: [...p.options, { id: newId('o'), name: `Option ${String.fromCharCode(65 + p.options.length)}` }] }))}>+ Option</button>
        <button className="btn btn-quiet" onClick={() => setM(BLANK)}>Clear</button>
      </div>

      <section className="stack-sm" aria-labelledby="res-h">
        <h2 id="res-h" className="section-title">Weighted totals</h2>
        <ul className="totals">
          {ranked.map((o, i) => (
            <li key={o.id} className={i === 0 ? 'is-top' : ''}>
              <span className="totals-name">{o.name}</span>
              <span className="totals-bar"><span style={{ width: `${(o.total / max) * 100}%` }} /></span>
              <span className="num">{o.total}</span>
            </li>
          ))}
        </ul>
        {flips.length > 0 ? (
          <p className="notice small">
            <strong>Close call.</strong> Changing the weight of <em>{flips[0].criterion}</em> to {flips[0].weight} would make <em>{flips[0].winner}</em> the winner
            {flips.length > 1 ? `, and ${flips.length - 1} other single change${flips.length > 2 ? 's' : ''} would also flip it` : ''}. When options are this close, pick one and move on, unless it's a one-way door.
          </p>
        ) : (
          <p className="muted small">Robust result: no single weight change of ±1 changes the winner.</p>
        )}
        <p className="muted small">If the winner feels wrong, ask which criterion is missing or mis-weighted. That gut reaction is information too.</p>
      </section>
    </div>
  )
}
