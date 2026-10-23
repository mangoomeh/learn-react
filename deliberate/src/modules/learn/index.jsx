import { trackById } from '../../core/tracks'
import { slice } from './slice'
import { allLessons, nextLesson } from './data'
import Learn from './pages/Learn'
import Lesson from './pages/Lesson'
import TrackProgress from './components/TrackProgress'
import './learn.css'

export default {
  id: 'learn',
  slice,
  routes: [
    { path: 'learn', Component: Learn },
    { path: 'learn/:lessonId', Component: Lesson },
  ],
  nav: { to: '/learn', label: 'Lessons' },
  cards: allLessons.flatMap((l) => l.cards.map((c) => ({ ...c, source: l.title, track: l.trackId }))),
  today: {
    rep(s, { today }) {
      const lesson = nextLesson(s.lessons)
      return {
        title: 'Study one lesson',
        to: lesson ? `/learn/${lesson.id}` : '/learn',
        action: 'Start',
        done: Object.values(s.lessons).some((l) => l.completedOn === today),
        detail: lesson
          ? `${trackById[lesson.trackId].short} · ${lesson.title} · ${lesson.minutes} min`
          : 'You have finished every lesson. Retake any to sharpen it.',
      }
    },
    panel: { title: 'Tracks', render: (s) => <TrackProgress lessons={s.lessons} /> },
  },
  stats: {
    figures(s) {
      const records = Object.values(s.lessons)
      const score = records.reduce((n, l) => n + l.score, 0)
      const total = records.reduce((n, l) => n + l.total, 0)
      return [
        ['Lessons done', records.length],
        ['Quiz accuracy', total ? `${Math.round((score / total) * 100)}%` : '–'],
      ]
    },
    panel: { title: 'By track', render: (s) => <TrackProgress lessons={s.lessons} showAccuracy /> },
  },
}
