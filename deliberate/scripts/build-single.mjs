// Packs the production build into one self-contained HTML file (dist-single/index.html)
// with CSS and JS inlined, so it can be opened directly or hosted as a single page.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const dist = new URL('../dist/', import.meta.url).pathname
let html = readFileSync(join(dist, 'index.html'), 'utf8')

html = html.replace(/<link rel="stylesheet" crossorigin href="\.\/(assets\/[^"]+\.css)">/, (_, file) =>
  `<style>${readFileSync(join(dist, file), 'utf8')}</style>`,
)
const jsTag = /<script type="module" crossorigin src="\.\/(assets\/[^"]+\.js)"><\/script>/
const jsFile = html.match(jsTag)[1]
html = html.replace(jsTag, '')
const js = readFileSync(join(dist, jsFile), 'utf8').replace(/<\/script/gi, '<\\/script')
html = html.replace('</body>', `<script type="module">${js}</script>\n</body>`)
html = html.replace(/\s*<link rel="icon"[^>]*>/, '')

const out = new URL('../dist-single/', import.meta.url).pathname
mkdirSync(out, { recursive: true })
writeFileSync(join(out, 'index.html'), html)
console.log(`Wrote ${join(out, 'index.html')} (${(html.length / 1024).toFixed(0)} KB)`)
