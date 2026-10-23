import { slice } from './slice'
import { articles } from './data/articles'
import Guide from './pages/Guide'
import Article from './pages/Article'
import './guide.css'

export default {
  id: 'guide',
  slice,
  routes: [
    { path: 'guide', Component: Guide },
    { path: 'guide/:articleId', Component: Article },
  ],
  nav: { to: '/guide', label: 'Field Guide' },
  // Field Guide topics are engineering practice, so their cards carry the engineering track.
  cards: articles.flatMap((a) => a.cards.map((c) => ({ ...c, source: `Field Guide · ${a.title}`, track: 'engineering' }))),
  today: {
    extra(s) {
      const next = articles.find((a) => !s.read[a.id])
      return next && { label: 'Extra reading from the Field Guide:', title: next.title, to: `/guide/${next.id}`, meta: `${next.minutes} min` }
    },
  },
  stats: { figures: (s) => [['Guide articles read', Object.keys(s.read).length]] },
}
