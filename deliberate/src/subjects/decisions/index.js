import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'decisions',
  title: 'Decision Making',
  short: 'Decisions',
  tagline: 'Make better calls under uncertainty and learn from every one.',
  color: { light: '#0e7c86', dark: '#4cc3c9' },
  units: unitsFrom(lessons),
  drills,
}
