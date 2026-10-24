import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'focus',
  title: 'Focus and Productivity',
  short: 'Focus',
  tagline: 'Protect your attention, plan realistically and get the important work done.',
  color: { light: '#c2410c', dark: '#ff8f5a' },
  units: unitsFrom(lessons),
  drills,
}
