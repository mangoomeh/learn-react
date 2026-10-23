import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSlice } from '../../../core/store/ProgressStore'
import { PageHeader, ProgressBar } from '../../../core/components/ui'
import { articles, guideSections } from '../data/articles'

function matches(article, q) {
  return `${article.title} ${article.summary} ${article.body} ${article.inTheWild.join(' ')}`.toLowerCase().includes(q)
}

export default function Guide() {
  const { read: readById } = useSlice('guide')
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const read = articles.filter((a) => readById[a.id]).length
  const nextUnread = articles.find((a) => !readById[a.id])

  return (
    <div className="stack-lg">
      <PageHeader eyebrow="Field Guide" title="Things they don't teach in school">
        Practical articles on what you'll meet on the job: health checks, heartbeats, cron jobs, background workers, retries, deploys and more.
        Mark an article as read to add its key ideas to your review deck.
      </PageHeader>

      <div className="guide-bar">
        <div className="guide-meter">
          <span className="small muted num">{read} of {articles.length} read</span>
          <ProgressBar value={read / articles.length} label="Field Guide progress" />
        </div>
        <label htmlFor="guide-search" className="sr-only">Search the Field Guide</label>
        <input id="guide-search" type="search" className="search" placeholder="Search, e.g. cron, 429, SIGTERM" value={query} onChange={(e) => setQuery(e.target.value)} />
        {nextUnread && !q && (
          <Link to={`/guide/${nextUnread.id}`} className="btn btn-primary">
            {read === 0 ? 'Start reading' : 'Next unread'}: {nextUnread.title}
          </Link>
        )}
      </div>

      {guideSections.map((section) => {
        const list = articles.filter((a) => a.section === section.id && (!q || matches(a, q)))
        if (list.length === 0) return null
        return (
          <section key={section.id} className="guide-section" aria-labelledby={`gs-${section.id}`}>
            <div className="guide-section-head">
              <h2 id={`gs-${section.id}`}>{section.title}</h2>
              <p className="muted">{section.blurb}</p>
            </div>
            <ul className="guide-grid">
              {list.map((a) => {
                const done = readById[a.id]
                return (
                  <li key={a.id}>
                    <Link to={`/guide/${a.id}`} className={`guide-card ${done ? 'is-done' : ''}`}>
                      <span className="guide-card-meta small">
                        <span className="num">{a.minutes} min</span>
                        {done && <span className="good">✓ Read</span>}
                      </span>
                      <span className="guide-card-title">{a.title}</span>
                      <span className="guide-card-summary">{a.summary}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}

      {q && !articles.some((a) => matches(a, q)) && <p className="muted">No articles mention “{query}”.</p>}
    </div>
  )
}
