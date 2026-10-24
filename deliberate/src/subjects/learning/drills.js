// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'lrn-dr-1',
    kind: 'learning',
    prompt: 'A friend has an exam in two weeks and plans to read their notes three times the weekend before. What would you suggest instead?',
    answer: 'Swap rereading for retrieval and spacing: starting now, do short sessions every two or three days where they answer practice questions or write what they remember from memory, then check against the notes. Focus each session on what they got wrong last time. Same total time, much better recall in the exam, and they won\'t need an all-nighter.',
  },
  {
    id: 'lrn-dr-2',
    kind: 'learning',
    prompt: 'Which study session is most likely to produce long-term learning?',
    options: ['Highlighting the chapter, then rereading the highlights', 'Reading the chapter, then writing everything you remember without looking, then checking', 'Watching a video of the chapter twice', 'Copying the chapter summary into neat notes'],
    answer: 1,
    explanation: 'Recalling from memory with feedback is retrieval practice, the strongest technique. The others mainly build familiarity.',
  },
  {
    id: 'lrn-dr-3',
    kind: 'learning',
    prompt: 'You\'re learning three types of statistics problems. Your textbook groups 20 of each type together. How should you practise once you understand each method?',
    options: ['Do them in order, 20 at a time', 'Mix them so you don\'t know which type comes next', 'Do only the first five of each', 'Skip practice and reread the theory'],
    answer: 1,
    explanation: 'Interleaving trains you to identify which method a problem needs, which blocked practice never does.',
  },
  {
    id: 'lrn-dr-4',
    kind: 'learning',
    prompt: 'A colleague says: "I\'m a visual learner, so I only learn from videos." What would you say, kindly?',
    answer: 'Preferences are real, but studies that properly tested matching teaching to a "style" mostly found no benefit. What matters more is the material (some topics suit diagrams, others text or practice) and what you do with it. Whatever the format, they\'ll learn more by testing themselves afterwards and spacing reviews than by rewatching.',
  },
  {
    id: 'lrn-dr-5',
    kind: 'learning',
    prompt: 'You want to remember a set of facts for about a year. When should your first few reviews roughly be?',
    options: ['Every hour for a day, then never', 'After a day, then a few days, then a week or two, then about a month or more', 'Once, the day before you need it', 'Every day forever'],
    answer: 1,
    explanation: 'Expanding gaps work, and for long retention the later gaps should grow to weeks or months.',
  },
  {
    id: 'lrn-dr-6',
    kind: 'learning',
    prompt: 'You\'re a complete beginner at programming. Should you start with hard problems on your own to benefit from desirable difficulty?',
    options: ['Yes, struggle is always good', 'No: study worked examples first, then complete partly solved ones, then solve alone', 'No: only read theory', 'Yes, and avoid all examples'],
    answer: 1,
    explanation: 'Difficulty helps once you can make progress. Beginners learn more from worked examples, with help faded as skill grows.',
  },
]
