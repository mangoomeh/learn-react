import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../store/ProgressContext'
import { cardById, trackById } from '../data'
import { dayKey, formatDay } from '../lib/dates'
import { GRADES, isDue } from '../lib/srs'
import { PageHeader, TrackTag } from '../components/ui'
import { Inline } from '../components/Markdown'

function shuffle(list) {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Review() {
  const { state, dispatch } = useProgress()
  const today = dayKey()
  const deckIds = Object.keys(state.cards).filter((id) => cardById[id])
  // The session queue is fixed when the page opens (or when practising ahead),
  // so grading a card doesn't reshuffle the cards still to come.
  const [queue, setQueue] = useState(() => shuffle(deckIds.filter((id) => isDue(state.cards[id], today))))
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [reviewed, setReviewed] = useState(0)

  const nextDue = useMemo(() => {
    const future = deckIds.map((id) => state.cards[id].due).filter((d) => d > today).sort()
    return future[0]
  }, [deckIds, state.cards, today])

  const mature = deckIds.filter((id) => state.cards[id].interval >= 21).length
  const cardId = queue[pos]
  const card = cardId && cardById[cardId]

  function grade(value) {
    dispatch({ type: 'gradeCard', cardId, grade: value })
    setReviewed((n) => n + 1)
    setFlipped(false)
    // "Again" puts the card back at the end of this session.
    if (value === 0) setQueue((q) => [...q, cardId])
    setPos((p) => p + 1)
  }

  function practiceAhead() {
    setQueue(shuffle(deckIds).slice(0, 10))
    setPos(0)
    setFlipped(false)
  }

  return (
    <div className="stack-lg">
      <PageHeader eyebrow="Spaced repetition" title="Review">
        Cards come back just before you would forget them. A few minutes a day keeps everything you have learned within reach.
      </PageHeader>

      <div className="chips">
        <span className="chip"><strong className="num">{deckIds.length}</strong> in deck</span>
        <span className="chip"><strong className="num">{Math.max(0, queue.length - pos)}</strong> left this session</span>
        <span className="chip"><strong className="num">{mature}</strong> mature (21+ day interval)</span>
      </div>

      {deckIds.length === 0 ? (
        <div className="empty">
          <h2>Your deck is empty</h2>
          <p>Each lesson you complete, and each Field Guide article you mark as read, adds its flashcards here.</p>
          <Link to="/learn" className="btn btn-primary">Start a lesson</Link>
        </div>
      ) : card ? (
        <div className="flash-wrap">
          <button className={`flash ${flipped ? 'is-flipped' : ''}`} onClick={() => setFlipped((f) => !f)} aria-live="polite">
            <span className="flash-meta">
              <TrackTag track={card.trackId}>{trackById[card.trackId].short}</TrackTag>
              <span className="muted small">{card.sourceTitle}</span>
            </span>
            <span className="flash-front"><Inline text={card.front} /></span>
            {flipped ? <span className="flash-back"><Inline text={card.back} /></span> : <span className="muted small">Recall the answer, then tap to reveal</span>}
          </button>
          {flipped && (
            <div className="grades" role="group" aria-label="How well did you recall it?">
              {GRADES.map((g) => (
                <button key={g.value} className={`grade grade-${g.value}`} onClick={() => grade(g.value)}>
                  <span>{g.label}</span>
                  <span className="small">{g.hint}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="empty">
          <h2>{reviewed > 0 ? `Done. You reviewed ${reviewed} card${reviewed === 1 ? '' : 's'}.` : 'Nothing due right now'}</h2>
          <p>{nextDue ? `Next cards are due ${formatDay(nextDue)}.` : 'Complete more lessons to grow your deck.'}</p>
          <button className="btn" onClick={practiceAhead}>Practise 10 random cards</button>
        </div>
      )}
    </div>
  )
}
