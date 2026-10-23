import { formatDay } from '../../core/lib/dates'
import { slice, decisionsDue } from './slice'
import Decide from './pages/Decide'
import './decide.css'

export default {
  id: 'decide',
  slice,
  routes: [{ path: 'decide/*', Component: Decide }],
  nav: { to: '/decide', label: 'Decisions' },
  today: {
    notice(s, { today }) {
      const due = decisionsDue(s, today)
      if (due.length === 0) return null
      return {
        title: 'Decisions ready to review',
        items: due.map((d) => ({ key: d.id, label: d.title, to: '/decide', meta: `review was due ${formatDay(d.reviewOn)}` })),
      }
    },
  },
  stats: {
    figures: (s) => [
      ['Decisions logged', s.decisions.length],
      ['Decisions reviewed', s.decisions.filter((d) => d.outcome).length],
    ],
  },
}
