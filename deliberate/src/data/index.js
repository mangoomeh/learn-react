import { engineering } from './engineering'
import { thinking } from './thinking'
import { decisions } from './decisions'
import { articles } from './guide'

export const tracks = [engineering, thinking, decisions]

export const allLessons = tracks.flatMap((track) =>
  track.lessons.map((lesson) => ({ ...lesson, trackId: track.id })),
)

export const lessonById = Object.fromEntries(allLessons.map((l) => [l.id, l]))

export const trackById = Object.fromEntries(tracks.map((t) => [t.id, t]))

// Field Guide cards are reviewed alongside lesson cards and count as engineering.
export const allCards = [
  ...allLessons.flatMap((lesson) =>
    lesson.cards.map((card) => ({ ...card, sourceTitle: lesson.title, trackId: lesson.trackId })),
  ),
  ...articles.flatMap((article) =>
    article.cards.map((card) => ({ ...card, sourceTitle: `Field Guide · ${article.title}`, trackId: 'engineering' })),
  ),
]

export const cardById = Object.fromEntries(allCards.map((c) => [c.id, c]))

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
