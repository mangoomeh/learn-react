import { dayKey } from '../../core/lib/dates'

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36)

// { entries: [{ id, date, prompt, text, source }] }, newest first.
export const slice = {
  initial: { entries: [] },
  reducer(state, action) {
    switch (action.type) {
      case 'journal/add': {
        const entry = { id: uid(), date: dayKey(), prompt: action.prompt, text: action.text, source: action.source }
        return { ...state, entries: [entry, ...state.entries] }
      }
      case 'journal/delete':
        return { ...state, entries: state.entries.filter((e) => e.id !== action.id) }
      default:
        throw new Error(`Unknown action: ${action.type}`)
    }
  },
}
