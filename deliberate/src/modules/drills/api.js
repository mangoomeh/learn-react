import { earn } from '../../core/store/core'
import { dayIndex, dayKey } from '../../core/lib/dates'
import { challenges } from './data/challenges'

export const XP_PER_DRILL = 15

export const dailyDrill = (today = dayKey()) => challenges[dayIndex(today) % challenges.length]

// Each drill earns XP once per day.
export function logDrill(log, id, result, today = dayKey()) {
  if ((log[today] || []).some((c) => c.id === id)) return []
  return [{ type: 'drills/log', id, correct: result.correct, rating: result.rating }, earn(XP_PER_DRILL)]
}
