import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'learning',
  title: 'How to Learn',
  short: 'Learning',
  tagline: 'Study less and remember more, using what research shows actually works.',
  color: { light: '#4d7c0f', dark: '#a3d65c' },
  units: unitsFrom(lessons),
  drills,
}
