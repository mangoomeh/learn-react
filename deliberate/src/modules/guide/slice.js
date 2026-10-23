import { dayKey } from '../../core/lib/dates'

// { read: { [articleId]: { readOn } } }
export const slice = {
  initial: { read: {} },
  reducer(state, action) {
    switch (action.type) {
      case 'guide/markRead':
        if (state.read[action.articleId]) return state
        return { ...state, read: { ...state.read, [action.articleId]: { readOn: dayKey() } } }
      case 'guide/markUnread': {
        const read = { ...state.read }
        delete read[action.articleId]
        return { ...state, read }
      }
      default:
        throw new Error(`Unknown action: ${action.type}`)
    }
  },
}
