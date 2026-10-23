import engineering from './engineering/index.js'
import thinking from './thinking/index.js'
import decisions from './decisions/index.js'
import ai from './ai/index.js'

// Every subject in the library. To add one, create src/subjects/<id>/ (see README.md) and list it here.
export const subjects = [engineering, thinking, decisions, ai]

export const subjectById = Object.fromEntries(subjects.map((s) => [s.id, s]))
