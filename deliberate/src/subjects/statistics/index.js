import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'statistics',
  title: 'Statistics and Data',
  short: 'Statistics',
  tagline: 'Read numbers, charts and studies with confidence, and spot when data is misleading you.',
  color: { light: '#0369a1', dark: '#56b6f0' },
  units: unitsFrom(lessons),
  drills,
}
