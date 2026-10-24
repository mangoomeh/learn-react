import { earn, follow } from '../../core/store/core'
import { studying } from '../../subjects/index.js'
import { addCards } from '../review/api'

export const XP_PER_LESSON = 30
export const XP_PER_CORRECT = 5

// Completing a lesson records the score, puts its flashcards in the review deck and awards XP.
// Retaking a lesson only pays for improvements, so XP can't be farmed.
export function completeLesson(lesson, score, previous) {
  const gained = (previous ? 0 : XP_PER_LESSON) + Math.max(0, score - (previous?.score || 0)) * XP_PER_CORRECT
  return [
    { type: 'learn/complete', lessonId: lesson.id, score, total: lesson.quiz.length },
    addCards(lesson.cards.map((c) => c.id)),
    ...(gained ? [earn(gained)] : []),
  ]
}

// Remember where you are in a lesson (quiz answers, practice notes, scroll position)
// so you can leave and pick up later.
export const saveDraft = (lessonId, changes) => ({ type: 'learn/saveDraft', lessonId, changes })

// Add a subject to your daily plan, or remove it.
export function toggleStudying(following, subjectId) {
  const ids = studying(following)
  return follow(ids.includes(subjectId) ? ids.filter((id) => id !== subjectId) : [...ids, subjectId])
}
