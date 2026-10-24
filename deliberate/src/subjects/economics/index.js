import { unitsFrom } from '../units.js'
import { lessons } from './lessons.js'
import { drills } from './drills.js'

export default {
  id: 'economics',
  title: 'Economics Basics',
  short: 'Economics',
  tagline: 'Understand incentives, markets, trade and the big forces behind prices, jobs and the news.',
  color: { light: '#a16207', dark: '#e6b450' },
  units: unitsFrom(lessons),
  drills,
}
