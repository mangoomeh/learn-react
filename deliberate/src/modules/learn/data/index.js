import { trackById as coreTracks } from '../../../core/tracks'
import { engineering } from './engineering'
import { thinking } from './thinking'
import { decisions } from './decisions'

// Each track's lessons, combined with the shared track names from core.
export const tracks = [engineering, thinking, decisions].map((t) => ({ ...coreTracks[t.id], ...t }))

export const allLessons = tracks.flatMap((track) =>
  track.lessons.map((lesson) => ({ ...lesson, trackId: track.id })),
)

export const lessonById = Object.fromEntries(allLessons.map((l) => [l.id, l]))

export const trackById = Object.fromEntries(tracks.map((t) => [t.id, t]))

// The next lesson to study: the first incomplete lesson in the least-progressed track,
// so all three skills grow together.
export function nextLesson(completed) {
  const ranked = tracks
    .map((t) => ({ t, done: t.lessons.filter((l) => completed[l.id]).length / t.lessons.length }))
    .sort((a, b) => a.done - b.done)
  for (const { t } of ranked) {
    const lesson = t.lessons.find((l) => !completed[l.id])
    if (lesson) return { ...lesson, trackId: t.id }
  }
  return null
}
