// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'foc-dr-1',
    kind: 'self',
    prompt: 'You have a big proposal due Friday and it\'s Monday. Your calendar has meetings scattered through every day. What would you do this morning?',
    answer: 'Block two or three 90-minute slots this week for the proposal, ideally mornings, and treat them as meetings. Write the first concrete action now (for example, "outline the five sections"). Use the outside view: proposals like this have taken longer before, so start today rather than Thursday. Batch messages around the blocks and turn notifications off during them.',
  },
  {
    id: 'foc-dr-2',
    kind: 'self',
    prompt: 'Your teammate says they work best with chat open so they never miss anything. What\'s the main cost they\'re probably underestimating?',
    options: ['Chat apps use battery', 'Frequent switching and attention residue eat into their deep work', 'They\'ll get too many messages', 'There is no cost'],
    answer: 1,
    explanation: 'Each check is a switch, and unanswered messages linger in attention. Batching usually costs little in responsiveness.',
  },
  {
    id: 'foc-dr-3',
    kind: 'self',
    prompt: 'You estimated a task at two days. Your last four similar tasks took 3, 4, 3 and 5 days. What should you tell your manager?',
    options: ['Two days; this time will be different', 'About three to four days, using the track record', 'One day, to look efficient', 'Refuse to estimate'],
    answer: 1,
    explanation: 'The outside view, how long similar tasks actually took, beats picturing this task\'s smooth path.',
  },
  {
    id: 'foc-dr-4',
    kind: 'self',
    prompt: 'Your to-do list has "Taxes", "Garden" and "Career". Nothing on it ever gets done. Rewrite one item so it\'s more likely to happen, and say why.',
    answer: 'Turn each into a next physical action. For example, "Taxes" becomes "Download last year\'s tax summary from the bank website". A project name doesn\'t say what to do, so it gets avoided; a concrete, small first step is easy to start and fits in a spare ten minutes.',
  },
  {
    id: 'foc-dr-5',
    kind: 'self',
    prompt: 'You\'ve put off writing a difficult email for three days. Which question gets closest to the cause?',
    options: ['Is my calendar organised?', 'What feeling am I avoiding by not writing it?', 'Do I have the right email app?', 'Should I work longer hours?'],
    answer: 1,
    explanation: 'Procrastination is usually mood repair. Naming the feeling (dread, uncertainty) points to the fix.',
  },
  {
    id: 'foc-dr-6',
    kind: 'self',
    prompt: 'You need to stop coding mid-feature to go home. What\'s the best thing to do in the last two minutes?',
    options: ['Close everything quickly', 'Write a note of exactly where you are and the next step', 'Start a new task', 'Check social media'],
    answer: 1,
    explanation: 'An easy re-entry point makes tomorrow\'s start fast and reduces attention residue tonight.',
  },
]
