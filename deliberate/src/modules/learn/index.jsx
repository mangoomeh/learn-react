import { subjectById } from '../../subjects/index.js'
import { slice } from './slice'
import { allLessons, inProgress, lessonPath, lessonSize, nextElective, nextLesson } from './catalog'
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
    rep(s, { today, studying }) {
      const lesson = nextLesson(s.lessons, s.drafts, studying)
      const started = lesson && inProgress(s.lessons, s.drafts, { core: true })?.id === lesson.id
      return {
        title: started ? 'Finish your lesson' : 'Study one lesson',
        to: lesson ? lessonPath(lesson) : '/learn',
        action: started ? 'Continue' : 'Start',
        done: Object.values(s.lessons).some((l) => l.completedOn === today),
        detail: lesson
          ? `${subjectById[lesson.subjectId].short} · ${lesson.title} · ${lessonSize(lesson)}`
          : studying.length
            ? 'You have finished every core lesson in your subjects. Add another subject in the library.'
            : 'Pick the subjects you want to study in the library.',
      }
    },
    extra(s, { studying }) {
      const next = nextElective(s.lessons, studying)
      return next && { label: `Extra reading in ${subjectById[next.subjectId].title}:`, title: next.title, to: lessonPath(next), meta: lessonSize(next) }
    },
    panel: { title: 'Your subjects', render: (s, { studying }) => <SubjectProgress lessons={s.lessons} subjectIds={studying} /> },
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
    panel: { title: 'By subject', render: (s) => <SubjectProgress lessons={s.lessons} showAccuracy onlyStarted /> },
  },
}
