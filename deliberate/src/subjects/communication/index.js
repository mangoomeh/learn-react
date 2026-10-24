import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'communication',
  title: 'Communication and Writing',
  short: 'Communication',
  tagline: 'Write and speak so people understand you quickly and act on what you say.',
  color: { light: '#be185d', dark: '#f472b6' },
  units: unitsFrom(lessons),
  drills,
}
