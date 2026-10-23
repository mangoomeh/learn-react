// Public API: what other modules may use from Review.
import { earn } from '../../core/store/core'

export const XP_PER_CARD = 2

// Put cards into the review deck (no-op for cards already there).
export const addCards = (ids) => ({ type: 'review/addCards', ids })

export const gradeCard = (cardId, grade) => [{ type: 'review/grade', cardId, grade }, earn(XP_PER_CARD)]
