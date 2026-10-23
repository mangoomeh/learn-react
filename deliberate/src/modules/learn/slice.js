import { dayKey } from '../../core/lib/dates'

// { lessons: { [lessonId]: { completedOn, score, total } } }, keeping the best score.
export const slice = {
  initial: { lessons: {} },
  reducer(state, action) {
    switch (action.type) {
      case 'learn/complete': {
        const prev = state.lessons[action.lessonId]
        const record = {
          completedOn: prev?.completedOn || dayKey(),
          score: Math.max(action.score, prev?.score || 0),
          total: action.total,
        }
        return { ...state, lessons: { ...state.lessons, [action.lessonId]: record } }
      }
      default:
        throw new Error(`Unknown action: ${action.type}`)
    }
  },
}
