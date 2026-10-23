// Daily drills for this subject. Multiple-choice drills have `options` + `answer`; open drills
// have a model `answer` that is revealed, and the learner rates their own attempt.
export const drills = [
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
