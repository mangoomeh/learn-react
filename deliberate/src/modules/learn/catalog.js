import { subjects } from '../../subjects/index.js'
import { estimateMinutes } from '../../subjects/size.js'
import { isStarted } from './slice'

// "3 ideas · ~9 min"
export const lessonSize = (lesson) => `${lesson.ideas.length} idea${lesson.ideas.length === 1 ? '' : 's'} · ~${lesson.minutes} min`

// Every lesson in the library, flattened, with where it lives.
export const allLessons = subjects.flatMap((s) =>
  s.units.flatMap((u) =>
    u.lessons.map((l) => ({ ...l, minutes: estimateMinutes(l), subjectId: s.id, unitId: u.id, unitTitle: u.title, group: u.group, elective: !!u.elective })),
  ),
)

export const lessonById = Object.fromEntries(allLessons.map((l) => [l.id, l]))

export const lessonPath = (lesson) => `/learn/${lesson.subjectId}/${lesson.id}`

export const lessonsOf = (subjectId, { core = false } = {}) =>
  allLessons.filter((l) => l.subjectId === subjectId && (!core || !l.elective))

export function progressOf(subjectId, completed, opts) {
  const list = lessonsOf(subjectId, opts)
  const done = list.filter((l) => completed[l.id]).length
  return { done, total: list.length, ratio: list.length ? done / list.length : 1 }
}

// The lesson you most recently started and haven't finished, if any.
export function inProgress(completed, drafts, { core } = {}) {
  return (
    Object.entries(drafts)
      .filter(([id, d]) => lessonById[id] && !completed[id] && isStarted(d) && (!core || !lessonById[id].elective))
      .sort((a, b) => b[1].savedOn - a[1].savedOn)
      .map(([id]) => lessonById[id])[0] ?? null
  )
}

// Today's lesson: a core lesson you've started, otherwise the first unfinished core lesson in the
// least-progressed subject you're studying, so they grow together. Optional ("elective") units are never picked here.
export function nextLesson(completed, drafts = {}, subjectIds = subjects.map((s) => s.id)) {
  const started = inProgress(completed, drafts, { core: true })
  if (started) return started
  const ranked = subjects.filter((s) => subjectIds.includes(s.id)).sort((a, b) => progressOf(a.id, completed, { core: true }).ratio - progressOf(b.id, completed, { core: true }).ratio)
  for (const s of ranked) {
    const lesson = lessonsOf(s.id, { core: true }).find((l) => !completed[l.id])
    if (lesson) return lesson
  }
  return null
}

// The first unfinished lesson from an optional unit in a subject you're studying, offered on Today as extra reading.
export const nextElective = (completed, subjectIds) =>
  allLessons.find((l) => l.elective && !completed[l.id] && (!subjectIds || subjectIds.includes(l.subjectId))) ?? null

// The lesson after this one within its subject.
export function nextInSubject(lesson) {
  const list = lessonsOf(lesson.subjectId)
  return list[list.indexOf(list.find((l) => l.id === lesson.id)) + 1] ?? null
}
