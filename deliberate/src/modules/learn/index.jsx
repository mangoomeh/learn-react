import { subjectById } from '../../subjects/index.js'
import { slice } from './slice'
import { allLessons, lessonPath, nextElective, nextLesson } from './catalog'
import Library from './pages/Library'
import Subject from './pages/Subject'
import Lesson from './pages/Lesson'
import SubjectProgress from './components/SubjectProgress'
import './learn.css'

export default {
  id: 'learn',
  slice,
  routes: [
    { path: 'learn', Component: Library },
    { path: 'learn/:subjectId', Component: Subject },
    { path: 'learn/:subjectId/:lessonId', Component: Lesson },
  ],
  nav: { to: '/learn', label: 'Library' },
  cards: allLessons.flatMap((l) => l.cards.map((c) => ({ ...c, source: l.title, subject: l.subjectId }))),
  today: {
    rep(s, { today }) {
      const lesson = nextLesson(s.lessons)
      return {
        title: 'Study one lesson',
        to: lesson ? lessonPath(lesson) : '/learn',
        action: 'Start',
        done: Object.values(s.lessons).some((l) => l.completedOn === today),
        detail: lesson
          ? `${subjectById[lesson.subjectId].short} · ${lesson.title} · ${lesson.minutes} min`
          : 'You have finished every core lesson. Retake any to sharpen it.',
      }
    },
    extra(s) {
      const next = nextElective(s.lessons)
      return next && { label: `Extra reading in ${subjectById[next.subjectId].title}:`, title: next.title, to: lessonPath(next), meta: `${next.minutes} min` }
    },
    panel: { title: 'Subjects', render: (s) => <SubjectProgress lessons={s.lessons} /> },
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
    panel: { title: 'By subject', render: (s) => <SubjectProgress lessons={s.lessons} showAccuracy /> },
  },
}
