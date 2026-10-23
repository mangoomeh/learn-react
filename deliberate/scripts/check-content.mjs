// Validates every subject in src/subjects/ (see src/subjects/README.md). Run as part of `npm run lint`.
import { subjects } from '../src/subjects/index.js'
import { estimateMinutes, MAX_IDEAS, MAX_MINUTES } from '../src/subjects/size.js'

const problems = []
const seen = new Map()
const unique = (kind, id, where) => {
  const key = `${kind}:${id}`
  if (seen.has(key)) problems.push(`${where}: duplicate ${kind} id "${id}" (also in ${seen.get(key)})`)
  seen.set(key, where)
}
const need = (cond, msg) => cond || problems.push(msg)

const lessonIds = new Set(subjects.flatMap((s) => s.units.flatMap((u) => u.lessons.map((l) => l.id))))

for (const s of subjects) {
  unique('subject', s.id, s.id)
  for (const f of ['title', 'short', 'tagline']) need(s[f], `${s.id}: missing ${f}`)
  need(/^#[0-9a-f]{6}$/i.test(s.color?.light) && /^#[0-9a-f]{6}$/i.test(s.color?.dark), `${s.id}: color needs { light, dark } hex values`)
  need(s.units?.some((u) => !u.elective), `${s.id}: needs at least one core (non-elective) unit`)
  for (const u of s.units) {
    need(u.lessons.length > 0, `${s.id}/${u.id}: unit has no lessons`)
    for (const l of u.lessons) {
      const at = `${s.id}/${l.id}`
      unique('lesson', l.id, at)
      for (const f of ['title', 'summary', 'body']) need(l[f], `${at}: missing ${f}`)
      if (l.ideas) {
        // Bite-sized: few enough ideas to absorb in one sitting, each one covered by the quiz.
        need(l.ideas.length >= 1 && l.ideas.length <= MAX_IDEAS, `${at}: has ${l.ideas.length} ideas; split it so each lesson teaches at most ${MAX_IDEAS}`)
        need(l.minutes === undefined, `${at}: remove "minutes"; lesson time is calculated from the content`)
        const minutes = estimateMinutes(l)
        need(minutes <= MAX_MINUTES, `${at}: takes about ${minutes} min; trim it or split it to stay within ${MAX_MINUTES}`)
        need(l.quiz?.length >= l.ideas.length, `${at}: needs at least one quiz question per idea (${l.ideas.length})`)
      } else {
        need(Number.isFinite(l.minutes), `${at}: list its "ideas" (at most ${MAX_IDEAS})`)
      }
      need(l.takeaways?.length > 0, `${at}: needs takeaways`)
      need(l.quiz?.length > 0, `${at}: needs a quiz`)
      l.quiz?.forEach((q, i) => {
        need(q.q && q.why, `${at} quiz ${i + 1}: needs q and why`)
        need(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options?.length, `${at} quiz ${i + 1}: answer ${q.answer} is not one of its ${q.options?.length} options`)
      })
      for (const c of l.cards ?? []) {
        unique('card', c.id, at)
        need(c.front && c.back, `${at} card ${c.id}: needs front and back`)
      }
      for (const r of l.related ?? []) need(lessonIds.has(r), `${at}: related lesson "${r}" doesn't exist`)
    }
  }
  for (const d of s.drills ?? []) {
    const at = `${s.id}/drill ${d.id}`
    unique('drill', d.id, at)
    need(d.kind && d.prompt, `${at}: needs kind and prompt`)
    if (d.options) need(Number.isInteger(d.answer) && d.answer >= 0 && d.answer < d.options.length && d.explanation, `${at}: multiple choice needs a valid answer index and an explanation`)
    else need(typeof d.answer === 'string', `${at}: open drills need a model answer`)
  }
}

if (problems.length) {
  console.error(`Content problems:\n  ${problems.join('\n  ')}`)
  process.exit(1)
}
const count = (f) => subjects.reduce((n, s) => n + f(s), 0)
console.log(`Content OK: ${subjects.length} subjects, ${lessonIds.size} lessons, ${count((s) => s.units.reduce((m, u) => m + u.lessons.reduce((k, l) => k + l.quiz.length, 0), 0))} quiz questions, ${count((s) => (s.drills ?? []).length)} drills`)
