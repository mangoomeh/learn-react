// A deliberately tiny renderer for the subset of Markdown the lessons use:
// ## headings, paragraphs, "- " and "1. " lists, > callouts, ``` code fences,
// plus **bold** and `code` inline.
function inline(text, keyPrefix) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={key}>{part.slice(2, -2)}</strong>
    if (part.startsWith('`') && part.endsWith('`')) return <code key={key}>{part.slice(1, -1)}</code>
    return part
  })
}

function parse(source) {
  const lines = source.trim().split('\n')
  const blocks = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('```')) {
      const body = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) body.push(lines[i++])
      i++
      blocks.push({ type: 'code', text: body.join('\n') })
    } else if (line.startsWith('## ')) {
      blocks.push({ type: 'h', text: line.slice(3) })
      i++
    } else if (/^(- |\d+\. )/.test(line)) {
      const ordered = /^\d+\. /.test(line)
      const items = []
      while (i < lines.length && /^(- |\d+\. )/.test(lines[i])) items.push(lines[i++].replace(/^(- |\d+\. )/, ''))
      blocks.push({ type: ordered ? 'ol' : 'ul', items })
    } else if (line.startsWith('> ')) {
      const body = []
      while (i < lines.length && lines[i].startsWith('> ')) body.push(lines[i++].slice(2))
      blocks.push({ type: 'quote', text: body.join(' ') })
    } else if (line.trim() === '') {
      i++
    } else {
      const body = []
      while (i < lines.length && lines[i].trim() !== '' && !/^(```|## |- |\d+\. |> )/.test(lines[i])) body.push(lines[i++])
      blocks.push({ type: 'p', text: body.join(' ') })
    }
  }
  return blocks
}

// Inline-only formatting for short strings (quiz questions, cards, feedback).
export function Inline({ text }) {
  return <>{inline(text, 'i')}</>
}

export default function Markdown({ source }) {
  return (
    <div className="prose">
      {parse(source).map((b, i) => {
        const k = `b${i}`
        switch (b.type) {
          case 'h':
            return <h2 key={k}>{inline(b.text, k)}</h2>
          case 'code':
            return (
              <pre key={k} className="code">
                <code>{b.text}</code>
              </pre>
            )
          case 'ul':
          case 'ol': {
            const List = b.type
            return <List key={k}>{b.items.map((item, j) => <li key={j}>{inline(item, `${k}-${j}`)}</li>)}</List>
          }
          case 'quote':
            return <blockquote key={k}>{inline(b.text, k)}</blockquote>
          default:
            return <p key={k}>{inline(b.text, k)}</p>
        }
      })}
    </div>
  )
}
