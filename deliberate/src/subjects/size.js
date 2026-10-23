// How big a lesson is. Lessons are kept bite-sized: at most MAX_IDEAS ideas and about
// MAX_MINUTES minutes, so each one can be finished in a single sitting.
// The time counts careful reading, time to think about each idea, the quiz and any practice,
// and is calculated from the content so authors never have to guess.
export const MAX_IDEAS = 3
export const MAX_MINUTES = 12

const READ_WPM = 180
const MIN_PER_IDEA = 2
const MIN_PER_QUESTION = 0.5
const MIN_FOR_PRACTICE = 2

export const wordCount = (text) => text.split(/\s+/).filter(Boolean).length

export function estimateMinutes(lesson) {
  const raw =
    wordCount(lesson.body) / READ_WPM +
    lesson.ideas.length * MIN_PER_IDEA +
    lesson.quiz.length * MIN_PER_QUESTION +
    (lesson.practice ? MIN_FOR_PRACTICE : 0)
  return Math.max(3, Math.round(raw))
}
