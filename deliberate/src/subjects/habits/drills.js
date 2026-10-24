// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'hab-dr-1',
    kind: 'self',
    prompt: 'A friend wants to start going to the gym and plans to go "five times a week, starting tomorrow, for an hour". What would you suggest?',
    answer: 'Start smaller and more specific. Pick two or three fixed slots ("Monday and Thursday after work, I\'ll go straight from the office") and keep the first sessions short, even 20 minutes, so it\'s hard to skip. Pack the bag the night before to lower friction. Expect it to take a couple of months to feel automatic, and if they miss a session, just don\'t miss the next one.',
  },
  {
    id: 'hab-dr-2',
    kind: 'self',
    prompt: 'Which plan is most likely to lead to daily flossing?',
    options: ['I\'ll floss more', 'Flossing is important for my health', 'After I brush my teeth at night, I\'ll floss one tooth', 'I\'ll floss for five minutes whenever I remember'],
    answer: 2,
    explanation: 'It\'s specific, attached to an existing habit, and so small it\'s hard to skip.',
  },
  {
    id: 'hab-dr-3',
    kind: 'self',
    prompt: 'Someone on day 25 of a new habit says it still feels effortful, so the "21-day rule" must not work for them. What\'s the best response?',
    options: ['They\'re doing it wrong', 'The 21-day rule is a myth; research found a median of 66 days, with wide variation', 'Habits never form', 'They should start over'],
    answer: 1,
    explanation: 'Lally et al. (2010) found a median of 66 days to automaticity, ranging from 18 to 254.',
  },
  {
    id: 'hab-dr-4',
    kind: 'self',
    prompt: 'You check your phone every time you sit on the sofa in the evening, and you want to stop. Design a plan using cues, replacement and friction.',
    answer: 'Cue: sitting on the sofa in the evening. Need it meets: probably winding down or avoiding boredom. Replacement: keep a book or puzzle on the sofa, and plan "If I sit on the sofa, then I\'ll pick up the book first." Friction: charge the phone in another room after 8pm, or put social apps in a folder off the home screen. Expect urges for a while; they fade as the link weakens.',
  },
  {
    id: 'hab-dr-5',
    kind: 'self',
    prompt: 'Which statement about self-control is best supported by recent evidence?',
    options: ['Willpower is a fuel tank that empties with use', 'People high in self-control mostly avoid temptations rather than resisting them', 'Self-control can\'t be improved', 'Sugar restores willpower'],
    answer: 1,
    explanation: 'Ego depletion largely failed to replicate; Ent et al. (2015) found high self-control people encounter fewer temptations.',
  },
  {
    id: 'hab-dr-6',
    kind: 'self',
    prompt: 'You skipped your morning run three days in a row while travelling. What\'s the most useful next step?',
    options: ['Wait until next month to restart', 'Treat it as data: plan for travel next time, and run tomorrow', 'Decide running isn\'t for you', 'Run three times tomorrow'],
    answer: 1,
    explanation: 'A lapse is information, not a verdict. Restart at the next opportunity and add an if-then plan for travel.',
  },
]
