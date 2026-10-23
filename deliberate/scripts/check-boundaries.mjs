// Enforces the module boundaries described in src/modules/README.md:
//   - src/core/** never imports src/app/** or src/modules/**
//   - src/modules/<a>/** imports src/core/**, src/subjects/**, its own files, and only another module's api.js
//   - src/subjects/** is pure content: it imports only other files in src/subjects/
// Run as part of `npm run lint`.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'

const src = resolve(new URL('../src', import.meta.url).pathname)
const files = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? files(p) : /\.(js|jsx)$/.test(name) ? [p] : []
  })

const problems = []
for (const file of files(src)) {
  const from = relative(src, file).split('/')
  for (const [, spec] of readFileSync(file, 'utf8').matchAll(/(?:import|from)\s+['"](\.[^'"]+)['"]/g)) {
    const to = relative(src, resolve(dirname(file), spec)).split('/')
    const where = `${relative(src, file)} imports ${spec}`
    if (from[0] === 'core' && to[0] !== 'core') problems.push(`${where}: core must not depend on the app, modules or subjects`)
    if (from[0] === 'subjects' && to[0] !== 'subjects') problems.push(`${where}: subjects are content and must not import code from elsewhere`)
    if (from[0] === 'modules' && to[0] === 'app') problems.push(`${where}: modules must not depend on the app shell`)
    if (from[0] === 'modules' && to[0] === 'modules' && to[1] !== from[1] && to.slice(2).join('/').replace(/\.js$/, '') !== 'api')
      problems.push(`${where}: use the ${to[1]} module's api.js instead of its internals`)
  }
}

if (problems.length) {
  console.error(`Module boundary violations:\n  ${problems.join('\n  ')}`)
  process.exit(1)
}
console.log('Module boundaries OK')
