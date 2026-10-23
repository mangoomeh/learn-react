// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
  {
    id: 'ch-fal-1',
    kind: 'fallacy',
    prompt:
      '"Our new hire suggested switching to PostgreSQL, but they\'ve only been here two weeks, so we can ignore it."',
    options: ['Ad hominem', 'Straw man', 'Slippery slope', 'Bandwagon'],
    answer: 0,
    explanation: 'The suggestion is dismissed because of who made it, not on its merits. Tenure has no bearing on whether the argument is good.',
  },
  {
    id: 'ch-fal-2',
    kind: 'fallacy',
    prompt: '"Since we started standups, velocity went up 20%. Standups clearly made us faster."',
    options: ['Circular reasoning', 'Post hoc (false cause)', 'False dilemma', 'Appeal to authority'],
    answer: 1,
    explanation: 'Velocity rose after standups started, but many other things changed too (team size, project phase, estimates). Sequence is not causation.',
  },
  {
    id: 'ch-fal-3',
    kind: 'fallacy',
    prompt:
      'A: "We should add some integration tests." B: "So you think unit tests are worthless and we should throw them all away?"',
    options: ['Tu quoque', 'Straw man', 'Hasty generalisation', 'Appeal to tradition'],
    answer: 1,
    explanation: 'B misrepresents A\'s position as something much more extreme, which is easier to reject.',
  },
  {
    id: 'ch-fal-4',
    kind: 'fallacy',
    prompt: '"Every major tech company uses Kubernetes, so our three-person startup should too."',
    options: ['Bandwagon / appeal to popularity', 'Ad hominem', 'Moving the goalposts', 'Slippery slope'],
    answer: 0,
    explanation: 'Popularity among very different organisations says little about fit for a three-person team with different constraints.',
  },
  {
    id: 'ch-fal-5',
    kind: 'fallacy',
    prompt:
      '"The release is ready once tests pass." (Tests pass.) "Well, it\'s ready once QA signs off." (QA signs off.) "Actually, we need a security review too."',
    options: ['Circular reasoning', 'Moving the goalposts', 'False dilemma', 'Straw man'],
    answer: 1,
    explanation: 'The criteria keep changing after each one is met. Legitimate requirements should be stated up front.',
  },
  {
    id: 'ch-fal-6',
    kind: 'fallacy',
    prompt: '"This framework is the most reliable because it never fails, and it never fails because it\'s so reliable."',
    options: ['Circular reasoning', 'Post hoc', 'Bandwagon', 'Ad hominem'],
    answer: 0,
    explanation: 'The conclusion is used as its own premise. No independent evidence is offered.',
  },
  {
    id: 'ch-bias-1',
    kind: 'bias',
    prompt:
      'After a major outage caused by a bad config push, the team proposes a two-week freeze on all config changes, even though config pushes have caused one incident in three years.',
    options: ['Availability heuristic', 'Sunk cost fallacy', 'Survivorship bias', 'Anchoring'],
    answer: 0,
    explanation: 'A vivid, recent event makes that risk feel far more likely than its base rate. The response is out of proportion.',
  },
  {
    id: 'ch-bias-2',
    kind: 'bias',
    prompt:
      'You believe your service is the bottleneck. You open the dashboards and quickly find a graph that supports this, then stop looking.',
    options: ['Confirmation bias', 'Hindsight bias', 'Fundamental attribution error', 'Anchoring'],
    answer: 0,
    explanation: 'You searched until you found support for an existing belief, then stopped. Look for evidence that would disprove it.',
  },
  {
    id: 'ch-bias-3',
    kind: 'bias',
    prompt:
      'A recruiter opens salary talks with a high number. Even though you know it\'s a tactic, your counter-offer ends up much higher than you planned.',
    options: ['Anchoring', 'Availability', 'Overconfidence', 'Survivorship'],
    answer: 0,
    explanation: 'The first number sets a reference point that pulls later judgements toward it, even when you know it\'s arbitrary.',
  },
  {
    id: 'ch-bias-4',
    kind: 'bias',
    prompt:
      '"I read interviews with ten successful founders who all dropped out of college. Dropping out must help."',
    options: ['Survivorship bias', 'Confirmation bias', 'Anchoring', 'Sunk cost'],
    answer: 0,
    explanation: 'You only see the successes. The many dropouts who failed don\'t get interviewed.',
  },
  {
    id: 'ch-bias-5',
    kind: 'bias',
    prompt:
      'A colleague misses a deadline and you think "they\'re disorganised." When you miss one the next week, you think "that sprint was chaotic."',
    options: ['Fundamental attribution error', 'Hindsight bias', 'Availability', 'Bandwagon'],
    answer: 0,
    explanation: 'Others\' failures get attributed to character, your own to circumstances.',
  },
  {
    id: 'ch-bias-6',
    kind: 'bias',
    prompt:
      'A team has spent eight months on a custom auth system that keeps failing security reviews. They reject an off-the-shelf option because "we\'ve come too far to stop."',
    options: ['Sunk cost fallacy', 'Anchoring', 'Availability', 'Overconfidence'],
    answer: 0,
    explanation: 'The eight months are gone either way. Compare the future cost and risk of each path.',
  },
  {
    id: 'ch-stats-1',
    kind: 'stats',
    prompt:
      'A fraud detector flags 99% of fraudulent transactions and wrongly flags 1% of legitimate ones. Fraud is 1 in 10,000 transactions. A transaction is flagged. Roughly how likely is it to be fraud?',
    options: ['99%', 'About 50%', 'About 1%', 'About 10%'],
    answer: 2,
    explanation: 'Per 1,000,000 transactions: about 99 real frauds flagged vs about 10,000 false flags (1% of 999,900). 99 / ~10,100 ≈ 1%. The base rate dominates.',
  },
  {
    id: 'ch-stats-2',
    kind: 'stats',
    prompt:
      'Variant B of a landing page got 6 signups from 40 visitors; variant A got 4 from 40. The PM wants to ship B. What\'s the best response?',
    options: [
      'Ship B: it\'s 50% better',
      'The sample is too small to tell; keep testing or decide on other grounds',
      'Ship A: it\'s more conservative',
      'Average them',
    ],
    answer: 1,
    explanation: 'A difference of two signups is well within random noise at this sample size.',
  },
  {
    id: 'ch-stats-3',
    kind: 'stats',
    prompt:
      'The worst-performing team last quarter got a new manager, and this quarter their numbers improved a lot. What should you consider before crediting the manager?',
    options: ['Regression to the mean', 'Survivorship bias', 'Anchoring', 'Nothing; the manager did it'],
    answer: 0,
    explanation: 'Extreme results tend to move back toward average on their own. Compare with similar teams that didn\'t change managers.',
  },
  {
    id: 'ch-stats-4',
    kind: 'stats',
    prompt: '"Using our tool cuts your risk of a data breach in half!" What should you ask first?',
    options: [
      'What is the absolute risk before and after?',
      'Who founded the company?',
      'How many customers do they have?',
      'Is it open source?',
    ],
    answer: 0,
    explanation: 'Halving a 0.01% risk is very different from halving a 20% risk. Relative changes without a baseline mean little.',
  },
]
