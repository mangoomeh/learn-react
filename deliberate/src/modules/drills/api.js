import { earn } from '../../core/store/core'
import { dayIndex, dayKey } from '../../core/lib/dates'
import { drills } from './catalog'

export const XP_PER_DRILL = 15

// Drills from your daily subjects (all of them if you haven't picked any).
export function drillsFor(subjectIds) {
  const mine = drills.filter((d) => subjectIds.includes(d.subject))
  return mine.length ? mine : drills
}

export const dailyDrill = (today = dayKey(), subjectIds = []) => {
  const pool = drillsFor(subjectIds)
  return pool[dayIndex(today) % pool.length]
}

// Each drill earns XP once per day.
export function logDrill(log, id, result, today = dayKey()) {
  if ((log[today] || []).some((c) => c.id === id)) return []
  return [{ type: 'drills/log', id, correct: result.correct, rating: result.rating }, earn(XP_PER_DRILL)]
}
