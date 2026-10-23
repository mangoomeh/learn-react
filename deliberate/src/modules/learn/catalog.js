import { subjects } from '../../subjects/index.js'

// Every lesson in the library, flattened, with where it lives.
export const allLessons = subjects.flatMap((s) =>
  s.units.flatMap((u) =>
    u.lessons.map((l) => ({ ...l, subjectId: s.id, unitId: u.id, unitTitle: u.title, group: u.group, elective: !!u.elective })),
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

// Today's lesson: the first unfinished core lesson in the least-progressed subject,
// so every subject grows together. Optional ("elective") units are never picked here.
export function nextLesson(completed) {
  const ranked = [...subjects].sort((a, b) => progressOf(a.id, completed, { core: true }).ratio - progressOf(b.id, completed, { core: true }).ratio)
  for (const s of ranked) {
    const lesson = lessonsOf(s.id, { core: true }).find((l) => !completed[l.id])
    if (lesson) return lesson
  }
  return null
}

// The first unfinished lesson from an optional unit, offered on Today as extra reading.
export const nextElective = (completed) => allLessons.find((l) => l.elective && !completed[l.id]) ?? null

// The lesson after this one within its subject.
export function nextInSubject(lesson) {
  const list = lessonsOf(lesson.subjectId)
  return list[list.indexOf(list.find((l) => l.id === lesson.id)) + 1] ?? null
}
