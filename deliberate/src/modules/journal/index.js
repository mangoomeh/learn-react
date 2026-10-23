import { slice } from './slice'
import { promptFor } from './data/prompts'
import Journal from './pages/Journal'
import './journal.css'

export default {
  id: 'journal',
  slice,
  routes: [{ path: 'journal', Component: Journal }],
  nav: { to: '/journal', label: 'Journal' },
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
