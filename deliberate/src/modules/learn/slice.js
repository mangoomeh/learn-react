import { dayKey } from '../../core/lib/dates'

// {
//   lessons: { [lessonId]: { completedOn, score, total } }, keeping the best score
//   drafts:  { [lessonId]: { answers: { [question]: option }, practice, scroll, savedOn } } for lessons in progress
// }
export const slice = {
  initial: { lessons: {}, drafts: {} },
  reducer(state, action) {
    switch (action.type) {
      case 'learn/complete': {
        const prev = state.lessons[action.lessonId]
        const record = {
          completedOn: prev?.completedOn || dayKey(),
          score: Math.max(action.score, prev?.score || 0),
          total: action.total,
        }
        const drafts = { ...state.drafts }
        delete drafts[action.lessonId]
        return { ...state, lessons: { ...state.lessons, [action.lessonId]: record }, drafts }
      }
      case 'learn/saveDraft': {
        const prev = state.drafts[action.lessonId]
        const draft = { answers: {}, practice: '', scroll: 0, ...prev, ...action.changes, savedOn: Date.now() }
        return { ...state, drafts: { ...state.drafts, [action.lessonId]: draft } }
      }
      default:
        throw new Error(`Unknown action: ${action.type}`)
    }
  },
}

// A lesson counts as started once you've answered something, written practice notes
// or read a fair way down the page.
export const isStarted = (draft) =>
  !!draft && (Object.keys(draft.answers).length > 0 || draft.practice.trim() !== '' || draft.scroll > 0.15)
