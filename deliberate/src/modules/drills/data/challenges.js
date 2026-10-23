// Daily drills. Multiple-choice drills have `options` + `answer`; open drills have
// a model `answer` that is revealed, and the learner rates their own attempt.
export const KINDS = {
  fallacy: { label: 'Spot the fallacy', track: 'thinking' },
  bias: { label: 'Name the bias', track: 'thinking' },
  stats: { label: 'Read the numbers', track: 'thinking' },
  code: { label: 'Code reasoning', track: 'engineering' },
  design: { label: 'Design trade-off', track: 'engineering' },
  estimate: { label: 'Fermi estimate', track: 'decisions' },
  decision: { label: 'Decision scenario', track: 'decisions' },
}

export const challenges = [
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
  {
    id: 'ch-code-1',
    kind: 'code',
    prompt: 'What is the time complexity of this function, and how would you improve it?',
    code: `function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) return true
  }
  return false
}`,
    answer:
      'O(n²): indexOf is a linear scan inside a loop. Use a Set: `return new Set(arr).size !== arr.length` (O(n)), or add items to a Set and return early on the first repeat.',
  },
  {
    id: 'ch-code-2',
    kind: 'code',
    prompt: 'This React component re-fetches in an infinite loop. Why?',
    code: `function Profile({ id }) {
  const [user, setUser] = useState(null)
  const options = { headers: { id } }
  useEffect(() => {
    fetch('/api/user', options).then(r => r.json()).then(setUser)
  }, [options])
  return <p>{user?.name}</p>
}`,
    answer:
      '`options` is a new object on every render, so the effect\'s dependency always changes: fetch, setUser, re-render, new object, fetch again. Depend on `id` instead and build options inside the effect (or memoise them with useMemo).',
  },
  {
    id: 'ch-code-3',
    kind: 'code',
    prompt: 'What does this log, and why?',
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)
}`,
    answer:
      'It logs 3, 3, 3. `var` is function-scoped, so all three callbacks share one `i`, which is 3 by the time they run. Using `let` creates a new binding per iteration and logs 0, 1, 2.',
  },
  {
    id: 'ch-code-4',
    kind: 'code',
    prompt: 'Find the bug.',
    code: `function average(nums) {
  let total = 0
  for (const n of nums) total += n
  return total / nums.length
}`,
    answer:
      'An empty array returns NaN (0 / 0). Decide what an empty input should mean (return 0, null, or throw) and handle it explicitly. Edge cases like empty input are where bugs hide.',
  },
  {
    id: 'ch-code-5',
    kind: 'code',
    prompt: 'Two requests run this at the same moment for an account with balance 100. What can go wrong?',
    code: `async function withdraw(accountId, amount) {
  const acct = await db.get(accountId)
  if (acct.balance < amount) throw new Error('Insufficient funds')
  await db.update(accountId, { balance: acct.balance - amount })
}`,
    answer:
      'A race condition (check-then-act). Both requests read 100, both pass the check, and both write. Two withdrawals of 80 can both succeed, and one update overwrites the other. Fix with an atomic conditional update (`UPDATE ... SET balance = balance - 80 WHERE id = ? AND balance >= 80`), a transaction with row locking, or optimistic concurrency (version numbers).',
  },
  {
    id: 'ch-code-6',
    kind: 'code',
    prompt: 'What is wrong with this way of updating state?',
    code: `function TodoList() {
  const [todos, setTodos] = useState([])
  function add(text) {
    todos.push({ text })
    setTodos(todos)
  }
  // ...
}`,
    answer:
      'It mutates the existing array and passes the same reference back, so React sees no change and may not re-render. Create a new array: `setTodos(prev => [...prev, { text }])`. The updater form also avoids stale-state bugs.',
  },
  {
    id: 'ch-design-1',
    kind: 'design',
    prompt:
      'Your product page is slow because it calls a pricing service on every request. Prices change a few times a day. What would you do, and what is the trade-off?',
    answer:
      'Cache prices (in memory or Redis) with a TTL of a few minutes, or invalidate on price change events. Trade-off: users may briefly see stale prices. Decide whether that\'s acceptable (perhaps re-check the price at checkout) and how you\'ll invalidate. Also consider what happens when the cache is cold or the pricing service is down.',
  },
  {
    id: 'ch-design-2',
    kind: 'design',
    prompt:
      'Sending a welcome email currently happens inside the signup request, and the email provider is sometimes slow, making signups time out. How would you redesign it?',
    answer:
      'Move email sending to a background job: signup writes a "send welcome email" message to a queue and returns immediately; a worker sends it with retries and backoff. Trade-offs: more moving parts, and the email arrives a few seconds later. Make the job idempotent so retries don\'t send duplicates.',
  },
  {
    id: 'ch-design-3',
    kind: 'design',
    prompt:
      'A teammate proposes splitting your 5-person team\'s monolith into 12 microservices "so it scales." How do you respond?',
    answer:
      'Ask what problem it solves: is there an actual scaling or deployment bottleneck? Microservices add network calls, distributed failures, deployment and observability overhead, which is a lot for 5 people. Alternatives: modularise the monolith with clear boundaries, scale it horizontally, extract only a part with genuinely different needs. Steelman their concern first; it may be about deploy coupling or ownership.',
  },
  {
    id: 'ch-est-1',
    kind: 'estimate',
    prompt:
      'Roughly how much storage would it take to store every tweet-length post (280 characters) written in one day by 10 million active users who post 3 times each?',
    answer:
      '10M × 3 = 30M posts. About 280 bytes of text plus ~200 bytes of metadata ≈ 500 bytes each. 30M × 500 B = 15 GB per day, about 5.5 TB per year before replication and indexes. The method matters more than the exact number: break it down, estimate each part, multiply.',
  },
  {
    id: 'ch-est-2',
    kind: 'estimate',
    prompt:
      'A service handles 50 million requests per day. What is the average requests per second, and what peak should you plan for?',
    answer:
      'A day is ~86,400 s, call it ~100,000. 50M / 100k ≈ 500 req/s on average (more precisely about 580). Traffic is uneven, so plan for a peak 2–5× the average: roughly 1,500–3,000 req/s.',
  },
  {
    id: 'ch-est-3',
    kind: 'estimate',
    prompt: 'How many piano tuners are there in a city of 1 million people?',
    answer:
      '1M people / ~2.5 per household = 400k households. Maybe 1 in 20 has a piano: 20k pianos (plus some in schools and venues, say 25k). Tuned about once a year = 25k tunings per year. A tuner does ~4 a day × 250 days = 1,000 a year. So about 25 tuners. The value is in making each assumption explicit.',
  },
  {
    id: 'ch-est-4',
    kind: 'estimate',
    prompt: 'Your nightly job processes 2 million records, each taking 5 ms. How long does it take, and is that a problem?',
    answer:
      '2M × 5 ms = 10,000 s ≈ 2.8 hours serially. Fine if the window is 8 hours; risky if data grows 3× or it must finish before business hours. Options: batch the database calls (often the 5 ms is mostly round trips), or parallelise with N workers to get about 2.8h / N.',
  },
  {
    id: 'ch-dec-1',
    kind: 'decision',
    prompt:
      'You\'re offered a lead role on a high-visibility project with an aggressive deadline, which would mean pausing your current deep-learning plan for three months. How would you structure this decision?',
    answer:
      'Clarify what you\'re optimising for (growth, visibility, wellbeing) and weight it. Is it a one-way door? Probably not: you can resume the learning plan. List outcomes with rough probabilities: project succeeds or slips, burnout risk. Consider opportunity cost and second-order effects (leadership experience, reputation, relationships). Run a quick pre-mortem: "It\'s three months later and I regret saying yes. Why?" Then decide, and log the decision with a prediction and confidence.',
  },
  {
    id: 'ch-dec-2',
    kind: 'decision',
    prompt:
      'A flaky test fails about 1 in 20 runs. Fixing it properly might take a day. The team suggests just re-running CI when it fails. Think through the second-order effects.',
    answer:
      'First order: saves a day now. Second order: people learn to ignore red builds, so real failures get re-run and missed too; CI time and frustration accumulate; more flaky tests get tolerated (broken windows). The flake may also be hiding a real race condition. Over months, one day of fixing is usually far cheaper.',
  },
  {
    id: 'ch-dec-3',
    kind: 'decision',
    prompt:
      'Two job offers: A pays 15% more at a large, stable company; B is a startup with equity, more responsibility, and a 60% chance of failing within two years. How would you compare them?',
    answer:
      'Use a weighted matrix with criteria that matter to you (learning, money, stability, mentorship, lifestyle) set before scoring. Treat equity as a lottery ticket: estimate its expected value roughly, and don\'t rely on it. Check for ruin: can you afford a failure in two years? How reversible is each path, and what skills or network does each build? Pre-mortem both: "I took A and regret it because..." and "I took B and regret it because..."',
  },
  {
    id: 'ch-dec-4',
    kind: 'decision',
    prompt:
      'You must pick a frontend framework for a new internal tool used by 20 people. The team is split and has debated for a week. What do you do?',
    answer:
      'Recognise it as a two-way door for a low-stakes internal tool. Pick the option the team knows best (familiarity usually dominates), time-box a review ("we\'ll revisit after the first milestone"), record the decision and reasoning, and move on. The cost of continued debate is already larger than the difference between the options.',
  },
]
