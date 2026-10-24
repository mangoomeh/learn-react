import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'health',
  title: 'Health Basics',
  short: 'Health',
  tagline: 'What the evidence says about sleep, movement and food. General education, not medical advice.',
  color: { light: '#b91c1c', dark: '#f87171' },
  units: unitsFrom(lessons),
  drills,
}
