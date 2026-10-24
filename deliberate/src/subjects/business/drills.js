// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'bus-dr-1',
    kind: 'business',
    prompt: 'A coffee shop sells a latte for £3.50. Milk, coffee and cup cost £0.90; card fees are £0.10. Rent, staff and other fixed costs are £12,000 a month. How many lattes does it need to sell each month to break even (if it sold only lattes)?',
    options: ['About 3,400', 'About 4,800', 'About 12,000', 'About 1,200'],
    answer: 1,
    explanation: 'Contribution margin = £3.50 − £1.00 = £2.50. £12,000 ÷ £2.50 = 4,800 lattes.',
  },
  {
    id: 'bus-dr-2',
    kind: 'business',
    prompt: 'A subscription app charges £8 a month. Variable cost per user is £2. Users stay 10 months on average. Marketing costs £90 per new user. Is this healthy?',
    answer: 'Contribution is £6 a month, so lifetime value ≈ £6 × 10 = £60. CAC is £90, so each new user loses about £30. That\'s unhealthy: growth would deepen losses. Options: improve retention (each extra month adds £6), cut acquisition costs, raise prices or reduce variable costs. A common target is LTV at least three times CAC.',
  },
  {
    id: 'bus-dr-3',
    kind: 'business',
    prompt: 'A company reports a profit every quarter but keeps struggling to pay suppliers. What\'s the most likely explanation?',
    options: ['The profit figures are fake', 'Cash is tied up in unpaid customer invoices or stock: profit isn\'t cash', 'It has too many customers', 'Tax is too low'],
    answer: 1,
    explanation: 'Profit is recorded at the sale; if customers pay slowly or stock builds up, cash runs short.',
  },
  {
    id: 'bus-dr-4',
    kind: 'business',
    prompt: 'Your product team celebrates 1 million downloads. What questions would you ask before celebrating?',
    answer: 'How many of those people are active now? What share of each monthly cohort is still using the product after 30 and 90 days? How many convert to paying, and what does it cost to acquire each user? Downloads are a vanity metric; retention, churn, conversion and unit economics show whether the business is healthy.',
  },
  {
    id: 'bus-dr-5',
    kind: 'business',
    prompt: 'A spreadsheet tool used by thousands of finance teams keeps customers even though cheaper rivals exist. Which moat is most likely at work?',
    options: ['Network effects', 'Switching costs: retraining, migrating files and rebuilding workflows', 'Efficient scale', 'Lower prices'],
    answer: 1,
    explanation: 'Changing tools is costly and risky, so customers stay.',
  },
  {
    id: 'bus-dr-6',
    kind: 'business',
    prompt: 'You have an idea for a meal-planning service. What\'s the cheapest way to test whether people want it?',
    answer: 'Test the riskiest assumption, which is demand, before building. Interview a dozen people in your target group about how they plan meals today and what frustrates them. Put up a simple landing page describing the service with a pre-order or waitlist button and send some traffic to it. Then deliver the service manually (a spreadsheet and emails) to a few paying customers. Measure behaviour, such as sign-ups, payment and repeat use, rather than compliments.',
  },
]
