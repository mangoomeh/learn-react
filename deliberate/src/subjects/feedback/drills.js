// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'fbk-dr-1',
    kind: 'conversation',
    prompt: 'Turn this into SBI feedback: "You\'re always unprepared for our one-on-ones."',
    answer: '"In our last two one-on-ones (situation), you didn\'t have the project update ready and we spent the first 15 minutes finding the numbers (behaviour). That left no time to talk about your promotion goals, which I know matter to you (impact). What\'s been getting in the way?" It names specific occasions and observable behaviour, explains the impact, and opens a conversation.',
  },
  {
    id: 'fbk-dr-2',
    kind: 'conversation',
    prompt: 'Which praise is most likely to help someone keep improving?',
    options: ['"You\'re a natural."', '"You\'re so smart."', '"Writing the tests before the code caught three bugs before review. Nice approach."', '"Great job!"'],
    answer: 2,
    explanation: 'Specific praise for the approach tells them what to repeat; trait praise can make people avoid challenges.',
  },
  {
    id: 'fbk-dr-3',
    kind: 'conversation',
    prompt: 'A teammate says your design doc is "confusing". You feel a flash of irritation because they wrote a confusing doc last month. What trigger is this, and what\'s a useful response?',
    answer: 'A relationship trigger: reacting to who gave the feedback rather than what they said. A useful response is to ask for specifics: "Thanks. Which parts were confusing? Where did you get lost?" That gets you information you can act on. Whether their own doc was clear is a separate matter.',
  },
  {
    id: 'fbk-dr-4',
    kind: 'conversation',
    prompt: 'You need to talk to a flatmate who rarely does the dishes. Which opening is most likely to go well?',
    options: ['"You never clean up after yourself."', '"I think we see the kitchen differently. Can we talk about how we split the chores? I\'d like to hear how it looks to you."', '"Everyone thinks you\'re messy."', '"I\'ve been keeping a list of every time you didn\'t wash up."'],
    answer: 1,
    explanation: 'The third story describes the difference neutrally and invites their view.',
  },
  {
    id: 'fbk-dr-5',
    kind: 'conversation',
    prompt: 'A colleague asks you to join a new working group. You\'re at capacity and the launch is next week. Write a positive no.',
    answer: '"Thanks for thinking of me. I\'m focused on getting the launch out next week (yes to priority), so I can\'t join the group right now (clear no). I\'d be happy to give feedback on the group\'s first proposal after the 20th, or you could ask Sam, who\'s worked on this before (yes to the relationship)."',
  },
  {
    id: 'fbk-dr-6',
    kind: 'conversation',
    prompt: 'Which apology is most effective?',
    options: ['"Sorry if that caused any issues."', '"Mistakes were made with the invoice."', '"I sent the wrong invoice; that\'s my mistake. I\'ve issued a corrected one and refunded the difference today."', '"Sorry, but your team gave me the wrong numbers."'],
    answer: 2,
    explanation: 'It acknowledges responsibility and offers repair, the two most important elements.',
  },
]
