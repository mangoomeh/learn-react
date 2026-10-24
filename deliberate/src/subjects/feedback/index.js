import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'feedback',
  title: 'Feedback and Hard Conversations',
  short: 'Feedback',
  tagline: 'Give feedback people can use, take it without getting defensive, and handle hard conversations well.',
  color: { light: '#9f1239', dark: '#fb7185' },
  units: unitsFrom(lessons),
  drills,
}
