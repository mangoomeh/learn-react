import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { articles, sections } from './on-the-job.js'
import { drills } from './drills.js'

export default {
  id: 'engineering',
  title: 'Software Engineering',
  short: 'Engineering',
  tagline: 'Write code that is correct, readable, and easy to change, and run it well in production.',
  color: { light: '#3056d3', dark: '#7c9bff' },
  units: [
    ...unitsFrom(lessons),
    // Practical topics from real jobs. Optional: they're suggested as extra reading, not as the daily lesson.
    ...sections.map((s) => ({
      id: s.id,
      title: s.title,
      blurb: s.blurb,
      group: 'On the job',
      elective: true,
      lessons: articles.filter((a) => a.section === s.id),
    })),
  ],
  drills,
}
