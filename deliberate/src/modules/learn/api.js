import { earn } from '../../core/store/core'
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
