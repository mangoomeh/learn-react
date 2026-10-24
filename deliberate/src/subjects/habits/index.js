import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'habits',
  title: 'Habits and Behaviour Change',
  short: 'Habits',
  tagline: 'Build habits that last and break the ones you don\'t want, without relying on willpower.',
  color: { light: '#6d28d9', dark: '#b49bff' },
  units: unitsFrom(lessons),
  drills,
}
