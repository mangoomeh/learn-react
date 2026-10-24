// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'eco-dr-1',
    kind: 'money',
    prompt: 'A city pays residents for every dead pest they turn in. What could go wrong, and how would you design it better?',
    answer: 'People may breed pests or bring them in from elsewhere to collect the bounty, a perverse incentive like the 1902 Hanoi rat tails. Better: pay for outcomes that are hard to fake, such as reductions in pest sightings measured by inspectors, or fund contractors on results, and remove the cause, such as rubbish and food sources.',
  },
  {
    id: 'eco-dr-2',
    kind: 'money',
    prompt: 'A cinema raises prices 10% and ticket sales fall 2%. What does this suggest about demand, and what happens to revenue?',
    options: ['Elastic; revenue falls', 'Inelastic; revenue rises', 'Elastic; revenue rises', 'Inelastic; revenue falls'],
    answer: 1,
    explanation: 'Quantity fell less than price rose, so demand is inelastic and revenue goes up (about 1.1 × 0.98 ≈ 1.08).',
  },
  {
    id: 'eco-dr-3',
    kind: 'money',
    prompt: 'You\'ve already spent £300 on a non-refundable trip, but you\'d now rather spend the weekend at a friend\'s wedding. How should the £300 affect your decision?',
    options: ['Go on the trip to avoid wasting £300', 'It shouldn\'t: it\'s sunk either way; choose the better weekend from here', 'Split the weekend', 'Ask for a refund first, then decide'],
    answer: 1,
    explanation: 'Sunk costs can\'t be recovered whatever you choose, so only future costs and benefits matter.',
  },
  {
    id: 'eco-dr-4',
    kind: 'money',
    prompt: 'A country is better than its neighbour at producing both cars and wheat. Can trade still benefit both? Explain.',
    answer: 'Yes. What matters is comparative advantage: opportunity cost. If the first country gives up less to make cars than wheat, relative to its neighbour, it should specialise in cars while the neighbour specialises in wheat, where its opportunity cost is lower. Trading lets both consume more of both goods than if each produced everything itself, though some workers in each country may lose out and need support.',
  },
  {
    id: 'eco-dr-5',
    kind: 'money',
    prompt: 'Inflation has risen to 6% and the central bank\'s target is 2%. What is it likely to do, and what are the trade-offs?',
    answer: 'Raise its policy interest rate. Higher rates make borrowing costlier and saving more attractive, cooling spending and investment so price rises slow. The trade-off is slower growth and possibly higher unemployment, and the effects take a year or two to show fully, so it risks doing too much or too little.',
  },
  {
    id: 'eco-dr-6',
    kind: 'money',
    prompt: 'Which is the best example of a positive externality?',
    options: ['A neighbour\'s loud parties', 'A homeowner planting a front garden that brightens the whole street', 'A company raising prices', 'Traffic congestion'],
    answer: 1,
    explanation: 'Others benefit without paying, so such goods tend to be under-provided.',
  },
]
