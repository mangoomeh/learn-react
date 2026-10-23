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
  nav: { to: '/guide', label: 'Guide', icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M15.5 8.5l-2 5-5 2 2-5z' },
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
