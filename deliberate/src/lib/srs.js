import { addDays, dayKey } from './dates'

// A compact SM-2 variant. Grades: 0 = again, 1 = hard, 2 = good, 3 = easy.
export const GRADES = [
  { value: 0, label: 'Again', hint: 'Forgot it' },
  { value: 1, label: 'Hard', hint: 'Got it with effort' },
  { value: 2, label: 'Good', hint: 'Recalled it' },
  { value: 3, label: 'Easy', hint: 'Instant' },
]

export function newCard() {
  return { ease: 2.5, interval: 0, reps: 0, due: dayKey(), lapses: 0 }
}

export function schedule(card, grade, today = dayKey()) {
  let { ease, interval, reps, lapses } = card
  if (grade === 0) {
    reps = 0
    lapses += 1
    interval = 1
    ease = Math.max(1.3, ease - 0.2)
  } else {
    reps += 1
    if (reps === 1) interval = grade === 3 ? 3 : 1
    else if (reps === 2) interval = grade === 1 ? 3 : 6
    else interval = Math.round(interval * ease * (grade === 1 ? 0.8 : grade === 3 ? 1.3 : 1))
    ease = Math.max(1.3, ease + (grade === 1 ? -0.15 : grade === 3 ? 0.15 : 0))
  }
  return { ease, interval, reps, lapses, due: addDays(today, interval), last: today }
}

export function isDue(card, today = dayKey()) {
  return card.due <= today
}
