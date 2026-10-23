import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSlice } from '../../../core/store/ProgressStore'
import Markdown, { Inline } from '../../../core/components/Markdown'
import { articleById, articles, guideSections } from '../data/articles'
import { markRead, markUnread, XP_PER_ARTICLE } from '../api'

export default function Article() {
  const { articleId } = useParams()
  const { read: readById } = useSlice('guide')
  const dispatch = useDispatch()
  const article = articleById[articleId]

  if (!article) {
    return (
      <div className="stack">
        <h1>Article not found</h1>
        <Link to="/guide">Back to the Field Guide</Link>
      </div>
    )
  }

  const section = guideSections.find((s) => s.id === article.section)
  const index = articles.findIndex((a) => a.id === article.id)
  const next = articles[index + 1]
  const read = readById[article.id]

  return (
    <article className="reading guide-article" data-track="engineering">
      <nav className="crumbs small">
        <Link to="/guide">Field Guide</Link> <span aria-hidden="true">/</span> {section.title}
      </nav>
      <header className="reading-head">
        <span className="tag">{article.minutes} min read</span>
        <h1>{article.title}</h1>
        <p className="lede">{article.summary}</p>
      </header>

      <Markdown source={article.body} />

      <section className="takeaways" aria-labelledby="tk-h">
        <h2 id="tk-h">Remember</h2>
        <ul>
          {article.takeaways.map((t) => (
            <li key={t}><Inline text={t} /></li>
          ))}
        </ul>
      </section>

      <section className="stack-sm" aria-labelledby="wild-h">
        <h2 id="wild-h" className="section-title">Where you'll see it</h2>
        <ul className="wild">
          {article.inTheWild.map((w) => (
            <li key={w} className="chip">{w}</li>
          ))}
        </ul>
      </section>

      <div className="action-bar">
        {read ? (
          <>
            <p className="good"><strong>Read.</strong> {article.cards.length} flashcards are in your review deck.</p>
            <button className="btn btn-quiet" onClick={() => dispatch(markUnread(article))}>Mark as unread</button>
          </>
        ) : (
          <>
            <p className="muted">Adds {article.cards.length} flashcards to your review deck. +{XP_PER_ARTICLE} XP</p>
            <button className="btn btn-primary" onClick={() => dispatch(markRead(article, read))}>
              Mark as read
            </button>
          </>
        )}
      </div>

      {article.related.length > 0 && (
        <section className="stack-sm" aria-labelledby="rel-h">
          <h2 id="rel-h" className="section-title">Related</h2>
          <ul className="related">
            {article.related.map((id) => articleById[id]).filter(Boolean).map((r) => (
              <li key={r.id}>
                <Link to={`/guide/${r.id}`}>{r.title}</Link>
                {readById[r.id] && <span className="good small"> ✓</span>}
                <span className="muted small"> · {r.summary}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="reading-foot">
        <Link to="/guide" className="btn btn-quiet">All articles</Link>
        {next && <Link to={`/guide/${next.id}`} className="btn">Next: {next.title} →</Link>}
      </footer>
    </article>
  )
}
