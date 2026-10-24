import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'business',
  title: 'Business Basics',
  short: 'Business',
  tagline: 'Understand how companies make money, read the numbers and think like a product owner.',
  color: { light: '#0f766e', dark: '#2dd4bf' },
  units: unitsFrom(lessons),
  drills,
}
