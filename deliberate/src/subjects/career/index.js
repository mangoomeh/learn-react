import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'career',
  title: 'Career Growth',
  short: 'Career',
  tagline: 'Build valuable skills, get hired, and grow at work on purpose rather than by luck.',
  color: { light: '#a21caf', dark: '#e879f9' },
  units: unitsFrom(lessons),
  drills,
}
