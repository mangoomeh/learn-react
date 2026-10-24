// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'hea-dr-1',
    kind: 'evidence',
    prompt: 'A colleague says they function perfectly on five hours of sleep and feel fine. What does the research suggest?',
    options: ['They\'re probably right; some people adapt', 'People adapt to feeling tired, not to being impaired; their performance is likely reduced', 'Five hours is the recommended amount', 'Sleep only matters for children'],
    answer: 1,
    explanation: 'In Van Dongen et al. (2003), performance kept falling under restricted sleep while self-rated sleepiness levelled off.',
  },
  {
    id: 'hea-dr-2',
    kind: 'evidence',
    prompt: 'You drink a large coffee at 4pm and go to bed at 11pm. You fall asleep fine. Is the coffee affecting your sleep?',
    options: ['No; you fell asleep fine', 'Possibly: caffeine six hours before bed cut sleep by over an hour in one study, often unnoticed', 'Only if you drink decaf', 'Caffeine wears off in an hour'],
    answer: 1,
    explanation: 'Drake et al. (2013) found caffeine six hours before bed still reduced total sleep, and people often didn\'t notice.',
  },
  {
    id: 'hea-dr-3',
    kind: 'evidence',
    prompt: 'Someone walks briskly for 20 minutes on weekdays and does nothing else. Do they meet the WHO aerobic minimum, and what would you suggest adding?',
    answer: '20 minutes × 5 days = 100 minutes of moderate activity, short of the 150-minute minimum. Adding 10 minutes to each walk, or a longer weekend walk or bike ride, would get them there. WHO also recommends muscle-strengthening activity on two or more days, which they\'re missing: a short bodyweight routine twice a week would cover it. And all movement counts, so stairs and walking to the shops help too.',
  },
  {
    id: 'hea-dr-4',
    kind: 'evidence',
    prompt: 'An ad says: "Our juice cleanse detoxes your body in 3 days. Thousands of happy customers!" What are the red flags?',
    answer: '"Detox" has no clear meaning here; the liver and kidneys already remove waste. Three days promises a fast, effortless fix. The evidence offered is testimonials, which can\'t show the juice caused anything. And the claim comes from the seller. Juice is also high in free sugars, which WHO advises limiting.',
  },
  {
    id: 'hea-dr-5',
    kind: 'evidence',
    prompt: 'A study finds people who eat more nuts live longer. Which explanation should you rule out before concluding nuts cause longer life?',
    options: ['Nuts contain calories', 'Nut eaters may differ in other ways, such as income, exercise or smoking', 'Some nuts are expensive', 'Nuts are tasty'],
    answer: 1,
    explanation: 'Observational links can come from confounders. Good studies adjust for these, but can\'t rule them all out.',
  },
  {
    id: 'hea-dr-6',
    kind: 'evidence',
    prompt: 'Which swap would most reduce free sugar for someone who drinks two cans of cola a day?',
    options: ['Switching to fruit juice', 'Switching to water or unsweetened drinks', 'Switching to a smaller cereal bowl', 'Adding a vitamin pill'],
    answer: 1,
    explanation: 'Two cans can contain around 70 g of sugar, above the WHO limit of about 50 g. Juice still counts as free sugar.',
  },
]
