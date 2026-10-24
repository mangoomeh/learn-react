import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'finance',
  title: 'Personal Finance',
  short: 'Finance',
  tagline: 'Budget, save, handle debt and invest sensibly. General education, not financial advice.',
  color: { light: '#047857', dark: '#34d399' },
  units: unitsFrom(lessons),
  drills,
}
