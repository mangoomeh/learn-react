import { Link, useSearchParams } from 'react-router-dom'
import { useProgress } from '../store/ProgressContext'
import { tracks } from '../data'
import { PageHeader, ProgressBar } from '../components/ui'

export default function Learn() {
  const { state } = useProgress()
  const [params, setParams] = useSearchParams()
  const active = params.get('track') || 'all'
  const shown = active === 'all' ? tracks : tracks.filter((t) => t.id === active)

  return (
    <div className="stack-lg">
      <PageHeader eyebrow="Curriculum" title="Learn">
        Three tracks of short lessons. Each ends with a quiz, a practice exercise, and flashcards that join your review deck.
      </PageHeader>

      <div className="tabs" role="tablist" aria-label="Filter by track">
        {[{ id: 'all', short: 'All tracks' }, ...tracks].map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            className="tab"
            data-track={t.id}
            onClick={() => setParams(t.id === 'all' ? {} : { track: t.id })}
          >
            {t.short}
          </button>
        ))}
      </div>

      {shown.map((track) => {
        const done = track.lessons.filter((l) => state.lessons[l.id]).length
        return (
          <section key={track.id} className="track" data-track={track.id} aria-labelledby={`t-${track.id}`}>
            <div className="track-head">
              <div>
                <h2 id={`t-${track.id}`}>{track.title}</h2>
                <p className="muted">{track.tagline}</p>
              </div>
              <div className="track-meter">
                <span className="num">{done} of {track.lessons.length} done</span>
                <ProgressBar value={done / track.lessons.length} track={track.id} label={`${track.title} progress`} />
              </div>
            </div>
            <ul className="lesson-list">
              {track.lessons.map((lesson) => {
                const record = state.lessons[lesson.id]
                return (
                  <li key={lesson.id}>
                    <Link to={`/learn/${lesson.id}`} className={`lesson-row ${record ? 'is-done' : ''}`}>
                      <span className="lesson-unit">{lesson.unit}</span>
                      <span className="lesson-main">
                        <span className="lesson-title">{lesson.title}</span>
                        <span className="lesson-summary">{lesson.summary}</span>
                      </span>
                      <span className="lesson-meta num">
                        {record ? `✓ ${record.score}/${record.total}` : `${lesson.minutes} min`}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
