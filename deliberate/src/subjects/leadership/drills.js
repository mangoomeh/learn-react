// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'led-dr-1',
    kind: 'conversation',
    prompt: 'A junior engineer noticed a risk in your design but stayed quiet in the review. Afterwards they mention it privately. What should you do to make speaking up more likely next time?',
    answer: 'Thank them sincerely for raising it, and act on it. Then make it easier to speak up in the room: in reviews, explicitly ask "What are we missing?" and call on quieter people; admit your own uncertainties; and respond appreciatively when people raise problems. If it\'s appropriate, credit them publicly for spotting the risk.',
  },
  {
    id: 'led-dr-2',
    kind: 'conversation',
    prompt: 'Your team has debated two database options for a month. What\'s most likely to end it well?',
    options: ['Another long meeting', 'Agree who decides and by when; gather input; decide and explain; everyone disagrees and commits', 'Let the loudest person win', 'Choose both'],
    answer: 1,
    explanation: 'A clear decider and deadline, with genuine input, ends debates without leaving people unheard.',
  },
  {
    id: 'led-dr-3',
    kind: 'conversation',
    prompt: 'You delegated a report, and the first draft takes a different approach from the one you\'d have used. It meets the brief. What should you do?',
    options: ['Rewrite it your way', 'Accept it, perhaps with specific suggestions; different isn\'t wrong', 'Take the task back', 'Delegate it to someone else'],
    answer: 1,
    explanation: 'Delegating outcomes means accepting different approaches that meet the goal.',
  },
  {
    id: 'led-dr-4',
    kind: 'conversation',
    prompt: 'A team member brings you a problem: "The client keeps changing requirements." Coach them using GROW.',
    answer: 'Goal: "What would you like to happen with this client?" Reality: "What\'s happening now? What have you tried so far?" Options: "What could you do about it? What else?" (for example, a change-request process, a fixed scope per sprint, involving the account manager). Will: "Which will you try, and by when? How can I help?" Offer your own ideas only after they\'ve explored theirs.',
  },
  {
    id: 'led-dr-5',
    kind: 'conversation',
    prompt: 'Two team members keep clashing in meetings, and comments are getting personal. What kind of conflict is this, and why does it matter?',
    options: ['Task conflict; it\'s healthy', 'Relationship conflict, which is consistently linked to worse team outcomes, so address it early and privately', 'Not conflict at all', 'Normal; ignore it'],
    answer: 1,
    explanation: 'de Wit et al. (2012) found relationship conflict consistently harmful.',
  },
  {
    id: 'led-dr-6',
    kind: 'conversation',
    prompt: 'You run a weekly hour-long meeting where each of 10 people reads out their status. How would you improve it?',
    answer: 'Move status to a written update people post and read in their own time. Keep a shorter meeting (perhaps 25 minutes) only for blockers, decisions and discussion, with an agenda built from what people flagged in the written updates. Invite only those involved in each topic, end with decisions and owned actions, and review in a month whether the meeting is still needed.',
  },
]
