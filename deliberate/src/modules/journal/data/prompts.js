import { dayIndex } from '../../../core/lib/dates'

// Rotating daily reflection prompts.
export const reflectionPrompts = [
  'What did you learn today that surprised you?',
  'What is one thing you would do differently if you redid today\'s work?',
  'Which assumption did you rely on today without checking it?',
  'Describe a problem you got stuck on. What finally unblocked you?',
  'What decision did you make today, and what did you trade off?',
  'Where did you notice a bias in your own thinking this week?',
  'What feedback did you receive recently, and what is the strongest case that it is right?',
  'What is one skill gap that slowed you down this week? What is one step to close it?',
  'Explain a concept you learned recently as if to a junior colleague.',
  'What did you avoid today, and why?',
  'What would make tomorrow a great learning day?',
  'Think of a disagreement you had. Write the steelman of the other person\'s view.',
  'Which of your current beliefs about software are you least sure of?',
  'What did you ship or finish recently that you are proud of, and why?',
]

// The prompt for a given day, so Today and the Journal page agree.
export const promptFor = (today) => reflectionPrompts[dayIndex(today) % reflectionPrompts.length]
