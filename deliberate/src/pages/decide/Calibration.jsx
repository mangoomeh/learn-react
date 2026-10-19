import { useState } from 'react'
import { useProgress } from '../../store/ProgressContext'
import { statements } from '../../data/calibration'

const BUCKETS = [
  [50, 59],
  [60, 69],
  [70, 79],
  [80, 89],
  [90, 100],
]
const LEVELS = [50, 60, 70, 80, 90, 99]

function summarise(predictions) {
  const buckets = BUCKETS.map(([lo, hi]) => {
    const inside = predictions.filter((p) => p.confidence >= lo && p.confidence <= hi)
    const hits = inside.filter((p) => p.hit).length
    const avg = inside.length ? inside.reduce((s, p) => s + p.confidence, 0) / inside.length : (lo + hi) / 2
    return { lo, hi, n: inside.length, rate: inside.length ? (hits / inside.length) * 100 : null, avg }
  })
  const brier = predictions.length
    ? predictions.reduce((s, p) => s + (p.confidence / 100 - (p.hit ? 1 : 0)) ** 2, 0) / predictions.length
    : null
  const meanConf = predictions.length ? predictions.reduce((s, p) => s + p.confidence, 0) / predictions.length : 0
  const hitRate = predictions.length ? (predictions.filter((p) => p.hit).length / predictions.length) * 100 : 0
  return { buckets, brier, gap: meanConf - hitRate }
}

function Chart({ buckets }) {
  // Plot area: x from 50% to 100% stated confidence, y from 0% to 100% actual.
  const W = 320
  const H = 240
  const pad = { l: 40, r: 12, t: 12, b: 34 }
  const x = (c) => pad.l + ((c - 50) / 50) * (W - pad.l - pad.r)
  const y = (r) => H - pad.b - (r / 100) * (H - pad.t - pad.b)
  const pts = buckets.filter((b) => b.n > 0)
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="cal-chart" role="img" aria-label="Calibration chart: stated confidence against actual accuracy">
      {[0, 25, 50, 75, 100].map((r) => (
        <g key={r}>
          <line x1={pad.l} x2={W - pad.r} y1={y(r)} y2={y(r)} className="grid" />
          <text x={pad.l - 6} y={y(r) + 4} textAnchor="end" className="axis">{r}%</text>
        </g>
      ))}
      {[50, 60, 70, 80, 90, 100].map((c) => (
        <text key={c} x={x(c)} y={H - pad.b + 16} textAnchor="middle" className="axis">{c}%</text>
      ))}
      <text x={(pad.l + W - pad.r) / 2} y={H - 4} textAnchor="middle" className="axis">Stated confidence</text>
      <line x1={x(50)} y1={y(50)} x2={x(100)} y2={y(100)} className="ideal" />
      <text x={x(96)} y={y(100) + 14} textAnchor="end" className="axis">perfect</text>
      {pts.length > 1 && (
        <polyline fill="none" className="cal-line" points={pts.map((b) => `${x(b.avg)},${y(b.rate)}`).join(' ')} />
      )}
      {pts.map((b) => (
        <circle key={b.lo} cx={x(b.avg)} cy={y(b.rate)} r={4 + Math.min(6, Math.sqrt(b.n) * 1.5)} className="cal-dot">
          <title>{`${b.lo}–${b.hi}%: ${Math.round(b.rate)}% correct over ${b.n}`}</title>
        </circle>
      ))}
    </svg>
  )
}

function Practice() {
  const { state, dispatch } = useProgress()
  const answered = new Set(state.calibration.map((c) => c.id))
  const remaining = statements.filter((s) => !answered.has(s.id))
  const [choice, setChoice] = useState(null)
  const [conf, setConf] = useState(null)
  const [result, setResult] = useState(null)
  const item = result ? result.item : remaining[0]

  if (!item) {
    return <p className="muted">You've answered every practice statement. Your decision journal predictions keep feeding the chart.</p>
  }

  function lock(level) {
    setConf(level)
    const correct = choice === item.truth
    dispatch({ type: 'logCalibration', id: item.id, confidence: level, correct })
    setResult({ item, correct, level })
  }

  function next() {
    setChoice(null)
    setConf(null)
    setResult(null)
  }

  return (
    <div className="panel stack-sm">
      <p className="eyebrow">Calibration practice · {remaining.length} left</p>
      <p className="drill-prompt">{item.text}</p>
      {!result ? (
        <>
          <div className="row" role="group" aria-label="True or false">
            <button className={`btn btn-quiet ${choice === true ? 'is-on' : ''}`} onClick={() => setChoice(true)}>True</button>
            <button className={`btn btn-quiet ${choice === false ? 'is-on' : ''}`} onClick={() => setChoice(false)}>False</button>
          </div>
          {choice !== null && (
            <div className="row wrap" role="group" aria-label="How confident are you?">
              <span className="small muted">How sure are you?</span>
              {LEVELS.map((l) => (
                <button key={l} className={`btn btn-quiet num ${conf === l ? 'is-on' : ''}`} onClick={() => lock(l)}>{l}%</button>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <p className={`feedback ${result.correct ? 'good' : 'bad'}`}>
            <strong>{item.truth ? 'True.' : 'False.'}</strong> {item.note}{' '}
            <span className="muted">You were {result.correct ? 'right' : 'wrong'} at {result.level}% confidence.</span>
          </p>
          <div>
            <button className="btn" onClick={next}>Next statement →</button>
          </div>
        </>
      )}
    </div>
  )
}

export default function Calibration() {
  const { state } = useProgress()
  const [source, setSource] = useState('all')
  const fromDecisions = state.decisions
    .filter((d) => d.outcome)
    .map((d) => ({ confidence: d.confidence, hit: d.outcome.happened }))
  const fromQuiz = state.calibration.map((c) => ({ confidence: c.confidence, hit: c.correct }))
  const predictions = source === 'decisions' ? fromDecisions : source === 'quiz' ? fromQuiz : [...fromDecisions, ...fromQuiz]
  const { buckets, brier, gap } = summarise(predictions)

  let verdict = 'Make at least 10 predictions to see a meaningful pattern.'
  if (predictions.length >= 10) {
    if (gap > 8) verdict = `You tend to be overconfident: your stated confidence averages ${Math.round(gap)} points above your accuracy.`
    else if (gap < -8) verdict = `You tend to be underconfident: you're right more often than you say, by about ${Math.round(-gap)} points.`
    else verdict = 'You are fairly well calibrated: your confidence roughly matches your accuracy.'
  }

  return (
    <div className="stack-lg">
      <div className="grid-2">
        <section className="stack-sm">
          <div className="tabs small" role="tablist" aria-label="Prediction source">
            {[
              ['all', 'All'],
              ['decisions', 'Decisions'],
              ['quiz', 'Practice'],
            ].map(([id, label]) => (
              <button key={id} role="tab" aria-selected={source === id} className="tab" onClick={() => setSource(id)}>{label}</button>
            ))}
          </div>
          <Chart buckets={buckets} />
        </section>
        <section className="stack-sm">
          <div className="chips">
            <span className="chip"><strong className="num">{predictions.length}</strong> scored predictions</span>
            <span className="chip"><strong className="num">{brier === null ? '–' : brier.toFixed(3)}</strong> Brier score</span>
          </div>
          <p>{verdict}</p>
          <p className="muted small">
            Dots show how often you were right at each confidence level. Points on the diagonal mean your confidence matches reality; below it means overconfidence.
            Brier score: 0 is perfect, 0.25 is what always answering 50% earns.
          </p>
          <table className="table small">
            <thead>
              <tr><th>Confidence</th><th>Predictions</th><th>Correct</th></tr>
            </thead>
            <tbody>
              {buckets.map((b) => (
                <tr key={b.lo}>
                  <td className="num">{b.lo}–{b.hi === 100 ? 99 : b.hi}%</td>
                  <td className="num">{b.n}</td>
                  <td className="num">{b.rate === null ? '–' : `${Math.round(b.rate)}%`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
      <Practice />
    </div>
  )
}
