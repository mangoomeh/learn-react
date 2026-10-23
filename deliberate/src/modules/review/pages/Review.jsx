import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSlice } from '../../../core/store/ProgressStore'
import { useModules } from '../../../core/modules'
import { subjectById } from '../../../subjects/index.js'
import { dayKey, formatDay } from '../../../core/lib/dates'
import { PageHeader, SubjectTag } from '../../../core/components/ui'
import { Inline } from '../../../core/components/Markdown'
import { GRADES, isDue } from '../srs'
import { gradeCard } from '../api'

function shuffle(list) {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Review() {
  const { cards } = useSlice('review')
  const dispatch = useDispatch()
  const modules = useModules()
  // Every module can contribute flashcards; Review only schedules them.
  const cardById = useMemo(() => Object.fromEntries(modules.flatMap((m) => m.cards ?? []).map((c) => [c.id, c])), [modules])
  const today = dayKey()
  const deckIds = Object.keys(cards).filter((id) => cardById[id])
  // The session queue is fixed when the page opens (or when practising ahead),
  // so grading a card doesn't reshuffle the cards still to come.
  const [queue, setQueue] = useState(() => shuffle(deckIds.filter((id) => isDue(cards[id], today))))
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [reviewed, setReviewed] = useState(0)

  const nextDue = useMemo(() => {
    const future = deckIds.map((id) => cards[id].due).filter((d) => d > today).sort()
    return future[0]
  }, [deckIds, cards, today])

  const mature = deckIds.filter((id) => cards[id].interval >= 21).length
  const cardId = queue[pos]
  const card = cardId && cardById[cardId]

  function grade(value) {
    dispatch(gradeCard(cardId, value))
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
      <PageHeader eyebrow="Spaced repetition" title="Flashcards">
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
          <p>Each lesson you complete adds its flashcards here.</p>
          <Link to="/learn" className="btn btn-primary">Start a lesson</Link>
        </div>
      ) : card ? (
        <div className="flash-wrap">
          <button className={`flash ${flipped ? 'is-flipped' : ''}`} onClick={() => setFlipped((f) => !f)} aria-live="polite">
            <span className="flash-meta">
              <SubjectTag subject={card.subject}>{subjectById[card.subject].short}</SubjectTag>
              <span className="muted small">{card.source}</span>
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
