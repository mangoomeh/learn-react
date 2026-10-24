// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'neg-dr-1',
    kind: 'conversation',
    prompt: 'You\'re selling your car. A dealer will give you £6,000 for it. A private buyer offers £5,800. What should you do?',
    options: ['Accept; it\'s close enough', 'Decline or counter: the offer is below your BATNA of £6,000', 'Accept and ask for £100 extra', 'Lower your price to £5,500'],
    answer: 1,
    explanation: 'An offer below your best alternative is worse than no deal.',
  },
  {
    id: 'neg-dr-2',
    kind: 'conversation',
    prompt: 'A recruiter asks for your salary expectation. Similar roles pay £65,000–75,000 locally, and you\'d be happy at £72,000. What do you say?',
    answer: 'Anchor with a justified, bolstering range starting at your target: "Based on market data for this role and my experience, I\'m looking for something in the £72,000 to £78,000 range." Then pause. Expect them to focus on the lower end, which is still your target. Avoid ranges like £65,000–75,000 that invite an offer at the bottom.',
  },
  {
    id: 'neg-dr-3',
    kind: 'conversation',
    prompt: 'Two departments are fighting over the only meeting room on Tuesdays. Which approach is most likely to find a deal both like?',
    options: ['Flip a coin', 'Ask each why they need it, such as space, a screen or privacy, and look for options that meet both', 'Let the more senior person decide', 'Split the day in half without discussion'],
    answer: 1,
    explanation: 'Exploring interests often reveals solutions (another room with a screen, a video call) that positions hide.',
  },
  {
    id: 'neg-dr-4',
    kind: 'conversation',
    prompt: 'A supplier refuses to drop their price. You care most about fast delivery and flexible payment terms. Suggest a package.',
    answer: 'Move beyond price and trade across issues. For example: "We can accept your current price if you can guarantee 48-hour delivery and 60-day payment terms, and we\'ll commit to a 12-month contract." The supplier keeps their price and gets a longer commitment; you get the delivery and terms you value most.',
  },
  {
    id: 'neg-dr-5',
    kind: 'conversation',
    prompt: 'You\'ve made three concessions of £500 each and the other side hasn\'t moved at all. What should you do next?',
    options: ['Concede another £500', 'Stop conceding and ask them to make a move, or trade any further concession for something', 'Double your concession', 'Walk out immediately'],
    answer: 1,
    explanation: 'Don\'t concede repeatedly without reciprocity; constant steps also signal plenty of room.',
  },
  {
    id: 'neg-dr-6',
    kind: 'conversation',
    prompt: 'A buyer opens with a price far below market value for your flat. What\'s the best response?',
    options: ['Counter halfway between their offer and your price', 'Say it\'s well outside the market range, and reset with your own figure based on comparable sales', 'Accept to avoid haggling', 'Lower your price a little'],
    answer: 1,
    explanation: 'Don\'t negotiate from their anchor; reset the discussion with objective criteria.',
  },
]
