import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'leadership',
  title: 'Leadership and Teamwork',
  short: 'Leadership',
  tagline: 'Build teams where people speak up, know what matters and do their best work, with or without the title.',
  color: { light: '#4338ca', dark: '#a5a8ff' },
  units: unitsFrom(lessons),
  drills,
}
