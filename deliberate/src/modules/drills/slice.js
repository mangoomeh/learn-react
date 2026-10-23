import { dayKey } from '../../core/lib/dates'

// { log: { 'YYYY-MM-DD': [{ id, correct, rating }] } }, one entry per drill per day.
export const slice = {
  initial: { log: {} },
  reducer(state, action) {
    switch (action.type) {
      case 'drills/log': {
        const today = dayKey()
        const entries = state.log[today] || []
        const entry = { id: action.id, correct: action.correct, rating: action.rating }
        return { ...state, log: { ...state.log, [today]: [...entries, entry] } }
      }
      default:
        throw new Error(`Unknown action: ${action.type}`)
    }
  },
  fromV1: (old) => ({ log: old.challenges ?? {} }),
}
