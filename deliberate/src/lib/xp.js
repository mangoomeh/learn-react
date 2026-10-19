export const XP = {
  lesson: 30,
  quizCorrect: 5,
  card: 2,
  challenge: 15,
  reflection: 10,
  decision: 15,
  review: 20,
  calibration: 3,
}

// Levels get progressively longer: level n starts at 50 * (n-1)^2 XP.
export function levelFor(xp) {
  const level = Math.floor(Math.sqrt(xp / 50)) + 1
  const start = 50 * (level - 1) ** 2
  const next = 50 * level ** 2
  return { level, progress: (xp - start) / (next - start), toNext: next - xp }
}

export const LEVEL_NAMES = [
  'Apprentice',
  'Practitioner',
  'Journeyman',
  'Craftsperson',
  'Analyst',
  'Strategist',
  'Senior',
  'Staff',
  'Principal',
  'Sage',
]

export function levelName(level) {
  return LEVEL_NAMES[Math.min(level - 1, LEVEL_NAMES.length - 1)]
}
