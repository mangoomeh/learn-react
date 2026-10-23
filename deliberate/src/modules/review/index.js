import { slice, dueIds } from './slice'
import Review from './pages/Review'
import './review.css'

export default {
  id: 'review',
  slice,
  routes: [{ path: 'review', Component: Review }],
  nav: { to: '/review', label: 'Flashcards' },
  badge: (s, { today }) => dueIds(s, today).length,
  today: {
    rep(s, { today }) {
      const size = Object.keys(s.cards).length
      const due = dueIds(s, today).length
      return {
        title: 'Review flashcards',
        to: '/review',
        action: 'Review',
        done: size > 0 && due === 0,
        detail:
          size === 0
            ? 'Cards unlock as you finish lessons.'
            : due > 0
              ? `${due} card${due === 1 ? '' : 's'} due`
              : 'Nothing due. Spaced repetition will bring cards back when needed.',
      }
    },
  },
  stats: {
    figures: (s) => [
      ['Cards in deck', Object.keys(s.cards).length],
      ['Cards mature', Object.values(s.cards).filter((c) => c.interval >= 21).length],
    ],
  },
}
