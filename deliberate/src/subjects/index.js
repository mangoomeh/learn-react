import learning from './learning/index.js'
import thinking from './thinking/index.js'
import decisions from './decisions/index.js'
import statistics from './statistics/index.js'
import focus from './focus/index.js'
import habits from './habits/index.js'
import health from './health/index.js'
import stress from './stress/index.js'
import communication from './communication/index.js'
import feedback from './feedback/index.js'
import negotiation from './negotiation/index.js'
import leadership from './leadership/index.js'
import finance from './finance/index.js'
import economics from './economics/index.js'
import business from './business/index.js'
import career from './career/index.js'
import engineering from './engineering/index.js'
import ai from './ai/index.js'

// Every subject in the library, grouped into categories for browsing. To add one, create
// src/subjects/<id>/ (see README.md) and list it in a category here.
export const categories = [
  { id: 'mind', title: 'Learn and think', subjects: [learning, thinking, decisions, statistics] },
  { id: 'self', title: 'Get things done', subjects: [focus, habits] },
  { id: 'wellbeing', title: 'Health and wellbeing', subjects: [health, stress] },
  { id: 'people', title: 'Work with people', subjects: [communication, feedback, negotiation, leadership] },
  { id: 'money', title: 'Money and business', subjects: [finance, economics, business] },
  { id: 'work', title: 'Career and technology', subjects: [career, engineering, ai] },
]

export const subjects = categories.flatMap((c) => c.subjects)

export const subjectById = Object.fromEntries(subjects.map((s) => [s.id, s]))

// What you study until you pick your own subjects in the library.
export const starterSubjectIds = ['learning', 'engineering', 'thinking', 'decisions', 'ai']

// The subjects you're studying: your choice (`following`, saved in core state) or the starter set.
export const studying = (following) => (following ?? starterSubjectIds).filter((id) => subjectById[id])
