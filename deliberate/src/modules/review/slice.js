import { dayKey } from '../../core/lib/dates'
import { isDue, newCard, schedule } from './srs'

// { cards: { [cardId]: srs state } }. Card content (front/back) comes from the modules that
// contribute cards; this slice only tracks scheduling.
export const slice = {
  initial: { cards: {} },
  reducer(state, action) {
    switch (action.type) {
      case 'review/addCards': {
        const cards = { ...state.cards }
        for (const id of action.ids) if (!cards[id]) cards[id] = newCard()
        return { ...state, cards }
      }
      case 'review/grade': {
        const card = state.cards[action.cardId] || newCard()
        return { ...state, cards: { ...state.cards, [action.cardId]: schedule(card, action.grade) } }
      }
      default:
        throw new Error(`Unknown action: ${action.type}`)
    }
  },
  fromV1: (old) => ({ cards: old.cards ?? {} }),
}

export const dueIds = (s, today = dayKey()) => Object.keys(s.cards).filter((id) => isDue(s.cards[id], today))
