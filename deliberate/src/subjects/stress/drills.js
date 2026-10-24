// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'str-dr-1',
    kind: 'self',
    prompt: 'Before a big presentation your heart is pounding. A colleague says, "Just calm down." What does research suggest might work better?',
    options: ['Suppress all signs of nerves', 'Reappraise the arousal: "My body is getting ready to perform"', 'Cancel the presentation', 'Drink coffee to focus'],
    answer: 1,
    explanation: 'Jamieson et al. (2012) found that seeing arousal as helpful led to healthier stress responses.',
  },
  {
    id: 'str-dr-2',
    kind: 'self',
    prompt: 'You\'ve spent an hour replaying an awkward comment you made at dinner. Is this useful? What would you do?',
    answer: 'It\'s rumination: the same thoughts with no new next step. Quick check: is there an action? If the comment might have upset someone, send a short, friendly message. If not, switch to something absorbing like a walk, a call or a task that needs attention. If it keeps coming back, write it down for a set worry time.',
  },
  {
    id: 'str-dr-3',
    kind: 'self',
    prompt: '"My manager scheduled a meeting with no agenda. I\'m definitely being let go." Name the thinking traps and write a more balanced thought.',
    answer: 'Catastrophising (jumping to the worst case) and mind reading (assuming you know their intent). Balanced version: "Meetings without agendas happen for lots of reasons, like planning, feedback or a new project. I don\'t have evidence it\'s bad news. I can ask what it\'s about so I can prepare."',
  },
  {
    id: 'str-dr-4',
    kind: 'self',
    prompt: 'You feel "stressed" all week. Which next step is most likely to help you respond well?',
    options: ['Ignore it', 'Name the emotion more precisely, such as overwhelmed, anxious or resentful, and respond to that', 'Work longer hours', 'Have a few drinks each night'],
    answer: 1,
    explanation: 'Precise labels point to specific responses, and labelling itself can reduce intensity.',
  },
  {
    id: 'str-dr-5',
    kind: 'self',
    prompt: 'A friend has seemed withdrawn, isn\'t sleeping, and says nothing feels enjoyable any more. It\'s been about a month. What should you do?',
    options: ['Give them space; it\'ll pass', 'Ask kindly and directly how they\'re doing, listen, and encourage them to talk to a doctor', 'Tell them to exercise more', 'Avoid the subject'],
    answer: 1,
    explanation: 'More than two weeks of low mood and lost enjoyment is a sign to seek professional help.',
  },
  {
    id: 'str-dr-6',
    kind: 'self',
    prompt: 'After a mistake at work, you think, "I\'m useless. I always get things wrong." Rewrite this using self-compassion.',
    answer: 'Something like: "I made a mistake, and that\'s frustrating. Everyone gets things wrong sometimes; it doesn\'t make me useless. What can I learn from it, and what\'s the next step to fix it?" This keeps responsibility while replacing harsh judgement with the kindness you\'d offer a friend.',
  },
]
