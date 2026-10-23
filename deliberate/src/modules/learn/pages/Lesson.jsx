import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSlice } from '../../../core/store/ProgressStore'
import Markdown, { Inline } from '../../../core/components/Markdown'
import { TrackTag } from '../../../core/components/ui'
import { addEntry, XP_PER_ENTRY } from '../../journal/api'
import { allLessons, lessonById, trackById } from '../data'
import { completeLesson, XP_PER_CORRECT, XP_PER_LESSON } from '../api'

function Quiz({ quiz, answers, setAnswer }) {
  return (
    <ol className="quiz">
      {quiz.map((item, qi) => {
        const picked = answers[qi]
        const answered = picked !== undefined
        return (
          <li key={qi} className="quiz-item">
            <p className="quiz-q"><Inline text={item.q} /></p>
            <div className="options" role="radiogroup" aria-label={`Question ${qi + 1}`}>
              {item.options.map((opt, oi) => {
                let cls = 'option'
                if (answered && oi === item.answer) cls += ' is-correct'
                else if (answered && oi === picked) cls += ' is-wrong'
                return (
                  <button
                    key={oi}
                    role="radio"
                    aria-checked={picked === oi}
                    className={cls}
                    disabled={answered}
                    onClick={() => setAnswer(qi, oi)}
                  >
                    <Inline text={opt} />
                  </button>
                )
              })}
            </div>
            {answered && (
              <p className={`feedback ${picked === item.answer ? 'good' : 'bad'}`}>
                <strong>{picked === item.answer ? 'Correct.' : 'Not quite.'}</strong> <Inline text={item.why} />
              </p>
            )}
          </li>
        )
      })}
    </ol>
  )
}

function LessonView({ lesson }) {
  const { lessons } = useSlice('learn')
  const dispatch = useDispatch()
  const [answers, setAnswers] = useState({})
  const [practice, setPractice] = useState('')
  const [savedPractice, setSavedPractice] = useState(false)
  const record = lessons[lesson.id]
  const track = trackById[lesson.trackId]
  const allAnswered = Object.keys(answers).length === lesson.quiz.length
  const score = lesson.quiz.filter((q, i) => answers[i] === q.answer).length
  const index = allLessons.findIndex((l) => l.id === lesson.id)
  const next = allLessons[index + 1]
  const [completedNow, setCompletedNow] = useState(false)

  function complete() {
    dispatch(completeLesson(lesson, score, record))
    setCompletedNow(true)
  }

  function savePractice(e) {
    e.preventDefault()
    if (!practice.trim()) return
    dispatch(addEntry({ prompt: lesson.practice, text: practice.trim(), source: lesson.title }))
    setSavedPractice(true)
  }

  return (
    <article className="reading" data-track={track.id}>
      <nav className="crumbs small">
        <Link to={`/learn?track=${track.id}`}>{track.title}</Link> <span aria-hidden="true">/</span> {lesson.unit}
      </nav>
      <header className="reading-head">
        <TrackTag track={track.id}>{lesson.minutes} min read</TrackTag>
        <h1>{lesson.title}</h1>
        <p className="lede">{lesson.summary}</p>
      </header>

      <Markdown source={lesson.body} />

      <section className="takeaways" aria-labelledby="tk-h">
        <h2 id="tk-h">Key takeaways</h2>
        <ul>
          {lesson.takeaways.map((t) => (
            <li key={t}><Inline text={t} /></li>
          ))}
        </ul>
      </section>

      <section className="quiz-section" aria-labelledby="quiz-h">
        <h2 id="quiz-h" className="section-title">Check your understanding</h2>
        <Quiz quiz={lesson.quiz} answers={answers} setAnswer={(qi, oi) => setAnswers((a) => ({ ...a, [qi]: oi }))} />
        <div className="action-bar">
          {completedNow ? (
            <p className="good">
              <strong>Lesson complete: {score}/{lesson.quiz.length}.</strong> {lesson.cards.length} flashcards added to your review deck.
            </p>
          ) : (
            <>
              <p className="muted">
                {allAnswered
                  ? `You scored ${score}/${lesson.quiz.length}.`
                  : `Answer all ${lesson.quiz.length} questions to finish.`}{' '}
                {record ? `Best so far: ${record.score}/${record.total}.` : `+${XP_PER_LESSON} XP, +${XP_PER_CORRECT} per correct answer.`}
              </p>
              <button className="btn btn-primary" disabled={!allAnswered} onClick={complete}>
                {record ? 'Save attempt' : 'Complete lesson'}
              </button>
            </>
          )}
        </div>
      </section>

      <section className="practice" aria-labelledby="pr-h">
        <h2 id="pr-h" className="section-title">Practice</h2>
        <p>{lesson.practice}</p>
        {savedPractice ? (
          <p className="good">Saved to your journal. +{XP_PER_ENTRY} XP</p>
        ) : (
          <form onSubmit={savePractice} className="stack-sm">
            <label htmlFor="practice-text" className="sr-only">Your practice notes</label>
            <textarea id="practice-text" rows="5" value={practice} onChange={(e) => setPractice(e.target.value)} placeholder="Write your answer. It is saved to your journal." />
            <div>
              <button className="btn" type="submit" disabled={!practice.trim()}>Save to journal</button>
            </div>
          </form>
        )}
      </section>

      <footer className="reading-foot">
        <Link to="/learn" className="btn btn-quiet">All lessons</Link>
        {next && (
          <Link to={`/learn/${next.id}`} className="btn">
            Next: {next.title} →
          </Link>
        )}
      </footer>
    </article>
  )
}

export default function Lesson() {
  const { lessonId } = useParams()
  const lesson = lessonById[lessonId]
  if (!lesson) {
    return (
      <div className="stack">
        <h1>Lesson not found</h1>
        <Link to="/learn">Back to all lessons</Link>
      </div>
    )
  }
  // key resets quiz state when navigating between lessons
  return <LessonView key={lesson.id} lesson={lesson} />
}
