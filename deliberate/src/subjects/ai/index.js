import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'ai',
  title: 'Artificial Intelligence',
  short: 'AI',
  tagline: 'Understand how modern AI works, where it fails, and how to build with it responsibly.',
  color: { light: '#b45309', dark: '#f5a524' },
  units: unitsFrom(lessons),
  drills,
}
