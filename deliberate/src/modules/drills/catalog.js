import { subjects } from '../../subjects/index.js'

// Every subject's drills, interleaved (one from each subject in turn) so consecutive
// days rotate through subjects instead of spending a week on one.
export const drills = (() => {
  const lists = subjects.map((s) => (s.drills ?? []).map((d) => ({ ...d, subject: s.id })))
  const out = []
  for (let i = 0; out.length < lists.reduce((n, l) => n + l.length, 0); i++) for (const l of lists) if (l[i]) out.push(l[i])
  return out
})()
