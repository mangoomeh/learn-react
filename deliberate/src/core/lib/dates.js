// Dates are stored as local "YYYY-MM-DD" keys so streaks follow the learner's own day.
export function dayKey(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function parseDay(key) {
  const [y, m, d] = key.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export function addDays(key, n) {
  const date = parseDay(key)
  date.setDate(date.getDate() + n)
  return dayKey(date)
}

export function daysBetween(a, b) {
  return Math.round((parseDay(b) - parseDay(a)) / 86400000)
}

// Stable integer for a day, used to rotate the daily challenge and prompts.
export function dayIndex(key = dayKey()) {
  return Math.floor(parseDay(key).getTime() / 86400000)
}

export function formatDay(key) {
  return parseDay(key).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}

// Current streak: consecutive days with activity ending today (or yesterday, so
// the streak isn't shown as broken before you've had a chance to practise today).
export function currentStreak(activity, today = dayKey()) {
  let cursor = activity[today] ? today : addDays(today, -1)
  let streak = 0
  while (activity[cursor]) {
    streak++
    cursor = addDays(cursor, -1)
  }
  return streak
}

export function longestStreak(activity) {
  const days = Object.keys(activity).sort()
  let best = 0
  let run = 0
  let prev = null
  for (const d of days) {
    run = prev && daysBetween(prev, d) === 1 ? run + 1 : 1
    best = Math.max(best, run)
    prev = d
  }
  return best
}
