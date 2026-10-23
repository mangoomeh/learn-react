import { slice } from './slice'
import { promptFor } from './data/prompts'
import Journal from './pages/Journal'
import './journal.css'

export default {
  id: 'journal',
  slice,
  routes: [{ path: 'journal', Component: Journal }],
  nav: { to: '/journal', label: 'Journal', icon: 'M6 3h10l3 3v15H6z M9 9h7 M9 13h7 M9 17h4' },
  today: {
    rep: (s, { today }) => ({
      title: 'Reflect',
      to: '/journal',
      action: 'Write',
      done: s.entries.some((e) => e.date === today),
      detail: promptFor(today),
    }),
  },
  stats: { figures: (s) => [['Journal entries', s.entries.length]] },
}
