# Subjects

A subject is a topic you can learn, such as Software Engineering or Critical Thinking. Each one
is a folder of plain content: no React, no app code. The app turns it into a library page,
lessons with quizzes, flashcards for Review, and daily drills.

To add a subject:

1. Create `src/subjects/<id>/` with an `index.js` like the one below.
2. Add it to the `subjects` list in `src/subjects/index.js`.
3. Run `npm run lint`. It checks every subject's content (`scripts/check-content.mjs`) and tells
   you exactly what is missing or wrong.

Nothing else changes: the library, Today, Review, Drills and Stats pick the subject up automatically.
Use explicit `.js` extensions in imports here so the content check can load the files with Node.

## `index.js`

```js
import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'finance',                       // unique, used in URLs: /learn/finance
  title: 'Personal Finance',
  short: 'Finance',                    // used on tags and in Today's lesson line
  tagline: 'One sentence on what you will be able to do.',
  color: { light: '#b4561f', dark: '#f0a070' },  // readable on light and dark backgrounds
  units: unitsFrom(lessons),           // groups lessons by their `unit` field, in order
  drills,                              // optional
}
```

`units` can also be written out by hand, which is how Software Engineering adds its optional
"On the job" units:

```js
units: [
  ...unitsFrom(lessons),
  { id: 'taxes', title: 'Taxes', blurb: 'One line about this unit.', group: 'Going further', elective: true, lessons: taxLessons },
]
```

An `elective` unit is optional reading. Today never picks it as the daily lesson and suggests it
as extra reading instead. Units with the same `group` are shown together on the subject page.

## A lesson

Lessons are **bite-sized**: each one teaches at most 3 ideas and takes about 12 minutes at most,
so it can be finished in one sitting. If a topic needs more, split it into several lessons in
the same unit. Give every idea a concrete example; that's what makes it stick.

The time shown to learners is calculated from the lesson (careful reading, about 2 minutes of
thinking per idea, the quiz and any practice; see `size.js`), so lessons don't state their own.
The content check fails any lesson over the limits and tells you which.

```js
{
  id: 'fin-compound-interest',         // unique across all subjects; also the URL
  unit: 'Foundations',                 // only needed when using unitsFrom
  title: 'Compound interest',
  summary: 'One sentence shown in lists.',
  ideas: ['Interest on interest', 'The rule of 72'],  // 1–3, shown as "In this lesson"
  // Write the body with one section (## heading) per idea, each with an example.
  body: `Markdown-lite: ## headings, paragraphs, - lists, 1. lists, > callouts,
\`\`\` code blocks \`\`\`, **bold** and \`inline code\`.`,
  takeaways: ['Three to five short points.'],
  quiz: [                              // at least one question per idea
    { q: 'Question?', options: ['A', 'B', 'C', 'D'], answer: 1, why: 'Why B is right.' },
  ],
  cards: [{ id: 'c-fin-ci-1', front: 'Question', back: 'Answer' }],  // ids unique across all subjects
  // optional:
  practice: 'An exercise; the answer is saved to the journal.',
  inTheWild: ['Where you will meet this in real life'],
  related: ['another-lesson-id'],
  sources: [{ title: 'Where a fact came from', url: 'https://…' }],  // shown at the end; use for researched facts
}
```

## A drill

Drills are short daily exercises. `kind` picks the label (see `src/modules/drills/kinds.js`;
add a new kind there if none fits).

```js
// multiple choice
{ id: 'fin-dr-1', kind: 'estimate', prompt: '…', options: ['…', '…'], answer: 0, explanation: '…' }
// open: the learner writes an answer, then compares it with yours
{ id: 'fin-dr-2', kind: 'decision', prompt: '…', answer: 'A model answer.' }
```
