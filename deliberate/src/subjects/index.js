import engineering from './engineering/index.js'
import thinking from './thinking/index.js'
import decisions from './decisions/index.js'
import ai from './ai/index.js'
import learning from './learning/index.js'
import focus from './focus/index.js'
import habits from './habits/index.js'
import health from './health/index.js'
import stress from './stress/index.js'

// Every subject in the library, grouped into categories for browsing. To add one, create
// src/subjects/<id>/ (see README.md) and list it in a category here.
export const categories = [
  { id: 'mind', title: 'Learn and think', subjects: [learning, thinking, decisions] },
  { id: 'self', title: 'Get things done', subjects: [focus, habits] },
  { id: 'wellbeing', title: 'Health and wellbeing', subjects: [health, stress] },
  { id: 'work', title: 'Career and technology', subjects: [engineering, ai] },
]

export const subjects = categories.flatMap((c) => c.subjects)

export const subjectById = Object.fromEntries(subjects.map((s) => [s.id, s]))

// What you study until you pick your own subjects in the library.
export const starterSubjectIds = ['learning', 'engineering', 'thinking', 'decisions', 'ai']

// The subjects you're studying: your choice (`following`, saved in core state) or the starter set.
export const studying = (following) => (following ?? starterSubjectIds).filter((id) => subjectById[id])
