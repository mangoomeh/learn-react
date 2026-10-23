import { slice } from './slice'
import { dailyDrill } from './api'
import Drills from './pages/Drills'
import './drills.css'

export default {
  id: 'drills',
  slice,
  routes: [{ path: 'drills', Component: Drills }],
  nav: { to: '/drills', label: 'Drills' },
  today: {
    rep(s, { today }) {
      const drill = dailyDrill(today)
      return {
        title: 'Daily drill',
        to: '/drills',
        action: 'Solve',
        done: (s.log[today] || []).some((c) => c.id === drill.id),
        detail: drill.prompt.length > 90 ? drill.prompt.slice(0, 88).trimEnd() + '…' : drill.prompt,
      }
    },
  },
  stats: { figures: (s) => [['Drills solved', Object.values(s.log).flat().length]] },
}
