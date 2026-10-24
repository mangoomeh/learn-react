import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'negotiation',
  title: 'Negotiation',
  short: 'Negotiation',
  tagline: 'Get better deals at work and in life while keeping relationships intact.',
  color: { light: '#9a3412', dark: '#f0a070' },
  units: unitsFrom(lessons),
  drills,
}
