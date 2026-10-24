import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'stress',
  title: 'Stress and Emotions',
  short: 'Stress',
  tagline: 'Understand stress, handle difficult emotions and know when to get help. Not a substitute for professional care.',
  color: { light: '#4f5d8a', dark: '#a9b8e8' },
  units: unitsFrom(lessons),
  drills,
}
