import { ProgressBar, TrackTag } from '../../../core/components/ui'
import { tracks } from '../data'

// Per-track lesson progress. Shown on Today and, with quiz accuracy, on Stats.
export default function TrackProgress({ lessons, showAccuracy = false }) {
  return (
    <ul className="track-progress">
      {tracks.map((t) => {
        const done = t.lessons.filter((l) => lessons[l.id])
        const score = done.reduce((s, l) => s + lessons[l.id].score, 0)
        const total = done.reduce((s, l) => s + lessons[l.id].total, 0)
        return (
          <li key={t.id}>
            <div className="row-between">
              <TrackTag track={t.id}>{t.title}</TrackTag>
              <span className="muted small num">
                {done.length}/{t.lessons.length}
                {showAccuracy && ` lessons${total ? ` · ${Math.round((score / total) * 100)}% quiz accuracy` : ''}`}
              </span>
            </div>
            <ProgressBar value={done.length / t.lessons.length} track={t.id} label={`${t.title} progress`} />
          </li>
        )
      })}
    </ul>
  )
}
