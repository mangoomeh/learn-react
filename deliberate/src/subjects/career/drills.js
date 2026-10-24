// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'car-dr-1',
    kind: 'career',
    prompt: 'Rewrite this CV bullet: "Responsible for the company newsletter."',
    answer: 'Use "accomplished X, as measured by Y, by doing Z". For example: "Grew newsletter subscribers from 2,000 to 11,000 in a year and lifted open rates from 21% to 34% by introducing segmented content and A/B-testing subject lines." Use real numbers or honest estimates.',
  },
  {
    id: 'car-dr-2',
    kind: 'career',
    prompt: 'You have two offers: A pays 10% more; B has a manager you clicked with, harder problems, and a team you\'d learn from. You\'re two years into your career. What would you weigh?',
    answer: 'Early in a career, learning and the manager usually compound more than a 10% pay difference: skills built now raise your pay for decades. Check B\'s pay is fair (and negotiate it), confirm the learning claims by talking to the team, and consider the trajectory of each company. Both are two-way doors, so don\'t agonise; if B doesn\'t deliver, you can move again with stronger skills.',
  },
  {
    id: 'car-dr-3',
    kind: 'career',
    prompt: 'In an interview you\'re asked, "Tell me about a time you failed." Which answer structure is best?',
    options: ['Say you\'ve never really failed', 'Situation, task, what you did, the result, and what you learned and changed', 'Describe a team failure and blame others', 'Talk about a weakness like perfectionism'],
    answer: 1,
    explanation: 'STAR with a genuine failure and a clear lesson shows self-awareness and growth.',
  },
  {
    id: 'car-dr-4',
    kind: 'career',
    prompt: 'You\'re looking for a new role. Who is statistically likely to be most helpful?',
    options: ['Your closest friends only', 'Acquaintances and former colleagues you\'re moderately connected to', 'Strangers on social media', 'Nobody; apply online only'],
    answer: 1,
    explanation: 'Weak ties bring new information; a large LinkedIn study found moderately weak ties most helpful.',
  },
  {
    id: 'car-dr-5',
    kind: 'career',
    prompt: 'You\'ve worked hard all year but weren\'t promoted. Your manager says you\'re "doing great". What would you do next?',
    answer: 'Ask specifically: "What would I need to show to be ready for the next level, and what gaps do you see?" Agree two or three concrete goals tied to next-level scope, with check-ins every month or two. Learn how promotion decisions are made and what evidence is used. Keep a brag document of results. If after a fair effort the path stays unclear, consider whether growth requires a move elsewhere.',
  },
  {
    id: 'car-dr-6',
    kind: 'career',
    prompt: 'A project you lead will miss its date by two weeks. When and how should you tell your manager?',
    options: ['On the original deadline', 'Now, with the cause, your plan and options to recover or reduce scope', 'Only if they ask', 'After you\'ve fixed it'],
    answer: 1,
    explanation: 'No surprises: early warning with options turns a crisis into a shared problem.',
  },
]
