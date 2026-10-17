import { Link } from 'react-router-dom'
import { useProgress } from '../store/ProgressContext'
import { nextLesson, tracks, trackById } from '../data'
import { challenges, reflectionPrompts } from '../data/challenges'
import { addDays, currentStreak, dayIndex, dayKey, formatDay, parseDay } from '../lib/dates'
import { isDue } from '../lib/srs'
import { levelFor, levelName } from '../lib/xp'
import { ProgressBar, TrackTag } from '../components/ui'
import Heatmap from '../components/Heatmap'

function Rep({ done, to, title, detail, action }) {
  return (
    <li className={`rep ${done ? 'is-done' : ''}`}>
      <span className="rep-check" aria-hidden="true">{done ? '✓' : ''}</span>
      <div className="rep-body">
        <p className="rep-title">{title}</p>
        <p className="rep-detail">{detail}</p>
      </div>
      <Link to={to} className={done ? 'btn btn-quiet' : 'btn'}>
        {done ? 'Again' : action}
      </Link>
    </li>
  )
}

export default function Today() {
  const { state } = useProgress()
  const today = dayKey()
  const lesson = nextLesson(state.lessons)
  const lessonDoneToday = Object.values(state.lessons).some((l) => l.completedOn === today)
  const dueCards = Object.values(state.cards).filter((c) => isDue(c, today)).length
  const reviewedToday = Object.values(state.cards).some((c) => c.last === today)
  const drill = challenges[dayIndex(today) % challenges.length]
  const drillDone = (state.challenges[today] || []).some((c) => c.id === drill.id)
  const reflectedToday = state.reflections.some((r) => r.date === today)
  const decisionsDue = state.decisions.filter((d) => !d.outcome && d.reviewOn && d.reviewOn <= today)
  const { level, progress, toNext } = levelFor(state.xp)
  const streak = currentStreak(state.activity, today)
  const xpToday = state.activity[today] || 0
  const repsDone = [lessonDoneToday, reviewedToday || dueCards === 0, drillDone, reflectedToday].filter(Boolean).length
  const weekday = parseDay(today).toLocaleDateString(undefined, { weekday: 'long' })
  const prompt = reflectionPrompts[dayIndex(today) % reflectionPrompts.length]

  return (
    <div className="stack-lg">
      <header className="today-head">
        <div>
          <p className="eyebrow">{weekday}, {formatDay(today)}</p>
          <h1>{repsDone === 4 ? 'All four reps done. Nice work.' : `${4 - repsDone} rep${4 - repsDone === 1 ? '' : 's'} left today`}</h1>
          <p className="lede">Small daily practice across engineering, thinking and decisions compounds faster than occasional marathons.</p>
        </div>
        <div className="today-stats">
          <div className="stat">
            <span className="stat-num">{streak}</span>
            <span className="stat-label">day streak</span>
          </div>
          <div className="stat">
            <span className="stat-num">{xpToday}</span>
            <span className="stat-label">XP today</span>
          </div>
          <div className="stat stat-wide">
            <span className="stat-num">L{level}</span>
            <span className="stat-label">{levelName(level)} · {toNext} XP to next</span>
            <ProgressBar value={progress} label="Level progress" />
          </div>
        </div>
      </header>

      <section aria-labelledby="reps-h">
        <h2 id="reps-h" className="section-title">Today's reps</h2>
        <ol className="reps">
          <Rep
            done={lessonDoneToday}
            to={lesson ? `/learn/${lesson.id}` : '/learn'}
            title="Study one lesson"
            detail={lesson ? `${trackById[lesson.trackId].short} · ${lesson.title} · ${lesson.minutes} min` : 'You have finished every lesson. Retake any to sharpen it.'}
            action="Start"
          />
          <Rep
            done={reviewedToday && dueCards === 0}
            to="/review"
            title="Review flashcards"
            detail={
              Object.keys(state.cards).length === 0
                ? 'Cards unlock as you finish lessons.'
                : dueCards > 0
                  ? `${dueCards} card${dueCards === 1 ? '' : 's'} due`
                  : 'Nothing due. Spaced repetition will bring cards back when needed.'
            }
            action="Review"
          />
          <Rep done={drillDone} to="/drills" title="Daily drill" detail={drill.prompt.length > 90 ? drill.prompt.slice(0, 88).trimEnd() + '…' : drill.prompt} action="Solve" />
          <Rep done={reflectedToday} to="/journal" title="Reflect" detail={prompt} action="Write" />
        </ol>
      </section>

      {decisionsDue.length > 0 && (
        <section className="notice" aria-labelledby="due-h">
          <h2 id="due-h" className="section-title">Decisions ready to review</h2>
          <ul className="plain-list">
            {decisionsDue.map((d) => (
              <li key={d.id}>
                <Link to="/decide">{d.title}</Link> <span className="muted">· review was due {formatDay(d.reviewOn)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="grid-2">
        <section aria-labelledby="tracks-h">
          <h2 id="tracks-h" className="section-title">Tracks</h2>
          <ul className="track-progress">
            {tracks.map((t) => {
              const done = t.lessons.filter((l) => state.lessons[l.id]).length
              return (
                <li key={t.id}>
                  <div className="row-between">
                    <TrackTag track={t.id}>{t.title}</TrackTag>
                    <span className="muted num">{done}/{t.lessons.length}</span>
                  </div>
                  <ProgressBar value={done / t.lessons.length} track={t.id} label={`${t.title} progress`} />
                </li>
              )
            })}
          </ul>
        </section>
        <section aria-labelledby="act-h">
          <div className="row-between">
            <h2 id="act-h" className="section-title">Last 16 weeks</h2>
            <Link to="/stats" className="muted small">All stats</Link>
          </div>
          <Heatmap activity={state.activity} end={today} start={addDays(today, -7 * 16 + 1)} />
        </section>
      </div>
    </div>
  )
}
