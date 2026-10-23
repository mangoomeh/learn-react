import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'thinking',
  title: 'Critical Thinking',
  short: 'Thinking',
  tagline: 'Evaluate claims, spot weak reasoning, and change your mind for good reasons.',
  color: { light: '#9140a8', dark: '#cc8be0' },
  units: unitsFrom(lessons),
  drills,
}
