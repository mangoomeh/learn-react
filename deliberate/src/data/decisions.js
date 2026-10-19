export const decisions = {
  id: 'decisions',
  title: 'Decision Making',
  short: 'Decisions',
  tagline: 'Make better calls under uncertainty and learn from every one.',
  lessons: [
    {
      id: 'dm-reversibility',
      unit: 'Framing',
      title: 'One-way and two-way doors',
      minutes: 6,
      summary: 'Match the effort you put into a decision to how hard it is to undo.',
      body: `
Not all decisions deserve the same care. A useful first question: **how hard is this to reverse?**

## Two kinds of doors

- **Two-way doors** (reversible): you can walk back through if it turns out wrong. Trying a new library in one module, a UI tweak behind a feature flag, a meeting format. **Decide quickly**, often alone, and learn from the result.
- **One-way doors** (irreversible or very costly to reverse): choosing a primary database, a public API contract, a hire, a major architecture. **Slow down**: gather input, consider alternatives, write it down.

The common failure is treating every decision as a one-way door. That leads to slow, consensus-heavy processes for things that could be tested in a day. The opposite failure, rushing a one-way door, is rarer but more expensive.

## Make doors two-way

Good engineering often means **turning one-way doors into two-way doors**:
- Feature flags and gradual rollouts.
- Abstraction layers around vendors you might replace.
- Database migrations that are backwards-compatible.
- Time-boxed experiments: "We'll try this for two sprints, then review."

## Speed matters

Most decisions should be made with about **70% of the information** you wish you had. Waiting for 90% usually means being slow, and for a reversible decision, being wrong and correcting quickly is often cheaper than being slow.

> If you're stuck on a decision, ask: "What's the cost of being wrong here, and how fast would we find out?"
`,
      takeaways: [
        'Ask first: how reversible is this?',
        'Two-way doors: decide fast and learn.',
        'One-way doors: slow down and write it down.',
        'Turn one-way doors into two-way ones with flags, abstractions and trials.',
      ],
      quiz: [
        {
          q: 'Which is most like a one-way door?',
          options: [
            'Changing a button label',
            'Trying a new standup format for two weeks',
            'Publishing a public API that external customers will integrate with',
            'Renaming an internal variable',
          ],
          answer: 2,
          why: 'Once customers depend on a public API, changing it breaks them. It is costly to reverse.',
        },
        {
          q: 'A team spends three weeks debating which charting library to use for an internal dashboard. The main problem?',
          options: [
            'They should have used more criteria',
            'They are treating a two-way door as a one-way door',
            'They need a vote',
            'Charting libraries are irrelevant',
          ],
          answer: 1,
          why: 'An internal dashboard\'s library is easy to swap. A quick choice and a review later would be cheaper.',
        },
      ],
      practice:
        'List three decisions you\'re currently facing. Label each as a one-way or two-way door, and note whether you\'re spending the right amount of time on it.',
      cards: [
        { id: 'c-dm-rv-1', front: 'One-way vs two-way door decisions?', back: 'One-way: irreversible or costly to undo, so go slowly. Two-way: reversible, so decide fast and learn.' },
        { id: 'c-dm-rv-2', front: 'How do you turn a one-way door into a two-way door?', back: 'Feature flags, gradual rollouts, abstraction layers, backwards-compatible migrations, time-boxed trials.' },
        { id: 'c-dm-rv-3', front: 'The "70% rule"?', back: 'Most decisions should be made with about 70% of the information you\'d like; waiting for more is usually too slow.' },
      ],
    },
    {
      id: 'dm-expected-value',
      unit: 'Uncertainty',
      title: 'Expected value and thinking in bets',
      minutes: 10,
      summary: 'Weigh outcomes by their probability, and judge decisions by process rather than results.',
      body: `
Every decision under uncertainty is a bet. You can't control outcomes, only how well you weigh the possibilities.

## Expected value

Multiply each outcome's value by its probability and add them up.

**Example**: Should you spend a week on a performance project?
- 60% chance it works: saves $50k/year in servers.
- 40% chance it doesn't: $0 saved.
- Cost: one engineer-week, about $5k.

EV = 0.6 × $50k + 0.4 × $0 − $5k = **$25k**. A good bet, even though it fails 40% of the time.

You'll rarely have exact numbers, and that's fine. Rough estimates force you to make your assumptions explicit, and that is most of the value.

## Beyond the average

EV isn't everything. Also consider:
- **Ruin**: avoid bets where a bad outcome is unrecoverable, however good the EV looks. Never bet the company, your health, or all your data on one backup.
- **Variance**: two options with the same EV can feel very different. A sure $10k vs a 10% shot at $100k.
- **Optionality**: some choices open more future doors than others.

## Resulting: don't judge by outcomes

"Resulting" is judging a decision by how it turned out. A good decision can have a bad outcome (you made a +EV bet and lost), and a bad decision can get lucky.

- Deploying on Friday night without tests and nothing breaking doesn't make it a good decision.
- A well-reasoned launch that flopped because of an unforeseeable market shift isn't necessarily a bad one.

To learn properly, separate the **quality of the decision** (information, reasoning, process) from the **quality of the outcome** (luck plus skill). That's what a decision journal is for.
`,
      takeaways: [
        'EV = sum of (probability × value) minus cost.',
        'Rough numbers still expose assumptions.',
        'Avoid ruin even when EV is positive.',
        'Judge decisions by process, not just outcome.',
      ],
      quiz: [
        {
          q: 'A bet has a 25% chance to win $400 and costs $80 to play. What is its expected value?',
          options: ['+$20', '+$100', '−$20', '+$320'],
          answer: 0,
          why: '0.25 × $400 = $100 expected winnings, minus the $80 cost, = +$20.',
        },
        {
          q: 'You skipped code review, deployed, and nothing broke. Concluding "skipping review is fine" is an example of:',
          options: ['Expected value', 'Resulting', 'Anchoring', 'Steelmanning'],
          answer: 1,
          why: 'Judging the decision by one lucky outcome rather than by its risk.',
        },
        {
          q: 'An investment has strongly positive EV but a 5% chance of bankrupting you. A sound response:',
          options: [
            'Take it, since EV is positive',
            'Avoid it or shrink it: ruin is unrecoverable',
            'Flip a coin',
            'EV doesn\'t apply here',
          ],
          answer: 1,
          why: 'You can\'t benefit from good long-run averages if one bad outcome ends the game.',
        },
      ],
      practice:
        'Pick a decision you face this month. Write down two or three possible outcomes with rough probabilities and values, and calculate an expected value.',
      cards: [
        { id: 'c-dm-ev-1', front: 'Expected value formula?', back: 'Sum over outcomes of (probability × value), minus the cost.' },
        { id: 'c-dm-ev-2', front: 'What is "resulting"?', back: 'Judging a decision\'s quality by its outcome, ignoring luck and the information available at the time.' },
        { id: 'c-dm-ev-3', front: 'Why avoid risk of ruin even with positive EV?', back: 'An unrecoverable loss ends the game; you never get the long-run average.' },
      ],
    },
    {
      id: 'dm-second-order',
      unit: 'Framing',
      title: 'Second-order thinking',
      minutes: 7,
      summary: 'Ask "and then what?" to see the consequences of the consequences.',
      body: `
First-order thinking asks, "What happens if I do this?" Second-order thinking keeps going: **"And then what?"**

## Examples

- **Add a metric target** ("close 50 tickets a week"). First order: more tickets closed. Second order: people split tickets, close without fixing, avoid hard problems. (Goodhart's law: when a measure becomes a target, it stops being a good measure.)
- **Hire quickly to hit a deadline.** First order: more hands. Second order: onboarding slows current staff, and late projects get later (Brooks's law).
- **Add a cache to fix slow pages.** First order: faster. Second order: stale-data bugs, a new failure mode, and a slow path nobody notices until the cache misses.
- **Hero culture.** First order: one person saves every incident. Second order: knowledge concentrates, others never learn, and the hero burns out.

## How to practise

1. Write the decision and its immediate effect.
2. Ask "and then what?" at least twice, for each group affected: users, teammates, future you, other teams.
3. Consider **timescales**: 10 minutes, 10 months, 10 years.
4. Look for **incentives**: how will people adapt their behaviour to this change?

## Watch out

Second-order effects are often **delayed and opposite** to first-order ones. Short-term pain can bring long-term gain (writing tests, paying down tech debt), and short-term gain can bring long-term pain (skipping them). Most competitive advantage comes from accepting short-term costs others won't.
`,
      takeaways: [
        'Keep asking "and then what?"',
        'Goodhart: targets distort the measures they target.',
        'Think across stakeholders and timescales.',
        'Second-order effects are often delayed and opposite.',
      ],
      quiz: [
        {
          q: 'Management rewards developers per bug fixed. A likely second-order effect?',
          options: [
            'Fewer bugs overall',
            'Less incentive to prevent bugs, possibly more bugs introduced',
            'No change',
            'Faster code review',
          ],
          answer: 1,
          why: 'Rewarding fixes rather than quality changes incentives in a perverse way (Goodhart\'s law).',
        },
        {
          q: 'Brooks\'s law says:',
          options: [
            'Software always ships late',
            'Adding people to a late software project makes it later',
            'Code size doubles every year',
            'Bugs grow with team size',
          ],
          answer: 1,
          why: 'New people need onboarding and add communication overhead, slowing things down in the short term.',
        },
      ],
      practice:
        'Take a change your team is considering. Write the first-order effect, then ask "and then what?" three times. Note one second-order effect nobody has mentioned.',
      cards: [
        { id: 'c-dm-so-1', front: 'Goodhart\'s law?', back: 'When a measure becomes a target, it ceases to be a good measure.' },
        { id: 'c-dm-so-2', front: 'Brooks\'s law?', back: 'Adding people to a late software project makes it later.' },
        { id: 'c-dm-so-3', front: 'Second-order thinking in one question?', back: '"And then what?"' },
      ],
    },
    {
      id: 'dm-premortem',
      unit: 'Uncertainty',
      title: 'Pre-mortems and inversion',
      minutes: 7,
      summary: 'Imagine failure in advance, and work backwards to avoid it.',
      body: `
## The pre-mortem

Before starting a project, imagine it's six months from now and **the project has failed badly**. Ask everyone to write down, independently: *what went wrong?*

Why it works:
- Saying "it failed" makes it safe to raise concerns that would otherwise sound negative.
- Imagining a definite outcome generates more specific reasons than asking "what could go wrong?"
- Writing independently avoids groupthink and anchoring.

Then rank the risks and decide what to do about the top ones: prevent, mitigate, monitor, or accept.

**Example** (launching a new payments flow), "it failed because...":
- The third-party API rate-limited us on launch day.
- Edge cases in currency rounding caused refund errors.
- Support wasn't trained, so tickets piled up.

Each one points to an action: load-test against the provider, property-test the rounding logic, brief the support team.

## Inversion

"Invert, always invert." Instead of asking how to succeed, ask **how you would guarantee failure**, then avoid those things.

- How would we make this codebase impossible to maintain? No tests, giant functions, no docs, clever tricks. So don't do those.
- How would I make sure I never grow as an engineer? Never read others' code, avoid hard tasks, never ask for feedback.

Avoiding stupidity is often easier and more reliable than seeking brilliance.
`,
      takeaways: [
        'A pre-mortem assumes failure and asks why.',
        'Independent writing surfaces more, and more honest, risks.',
        'Turn top risks into concrete actions.',
        'Inversion: list the ways to fail, then avoid them.',
      ],
      quiz: [
        {
          q: 'Why does a pre-mortem ask people to write risks independently first?',
          options: [
            'To save time',
            'To avoid groupthink and anchoring on the first risk mentioned',
            'To assign blame later',
            'It doesn\'t matter',
          ],
          answer: 1,
          why: 'Independent generation captures more diverse concerns before the group converges.',
        },
        {
          q: 'Inversion means:',
          options: [
            'Doing the opposite of what others do',
            'Asking how you\'d guarantee failure, then avoiding that',
            'Reversing a decision',
            'Starting from the end of a project plan',
          ],
          answer: 1,
          why: 'It approaches a goal by identifying and avoiding the paths to failure.',
        },
      ],
      practice:
        'Run a two-minute pre-mortem on something you are working on: "It\'s three months from now and this failed. Why?" Write at least five reasons and one action for the top risk.',
      cards: [
        { id: 'c-dm-pm-1', front: 'What is a pre-mortem?', back: 'Imagining a project has failed and listing why, before it starts, to find and address risks.' },
        { id: 'c-dm-pm-2', front: 'Inversion?', back: 'Ask how you would guarantee failure, then avoid those things.' },
      ],
    },
    {
      id: 'dm-prioritization',
      unit: 'Framing',
      title: 'Opportunity cost and prioritisation',
      minutes: 8,
      summary: 'Every yes is a no to something else. Choose what not to do.',
      body: `
## Opportunity cost

The real cost of anything is **the best alternative you gave up**. A week spent polishing an internal tool costs not just salary, but the feature, the learning or the rest you didn't get.

Ask: "If I do this, what am I *not* doing?" Many "good ideas" fail this test only once you compare them with the alternatives.

## Eisenhower matrix

Sort tasks by **urgent** and **important**:

- **Important and urgent**: do now (production incident).
- **Important, not urgent**: schedule and protect time. This is where growth happens: learning, refactoring, mentoring, planning.
- **Urgent, not important**: delegate, batch or decline (many interruptions and messages).
- **Neither**: drop.

Most people spend too long in "urgent" and too little in "important, not urgent".

## Impact vs effort

For a backlog, roughly estimate **impact** and **effort**:
- High impact, low effort: quick wins. Do first.
- High impact, high effort: big bets. Plan deliberately.
- Low impact, low effort: fill-ins.
- Low impact, high effort: avoid.

## Saying no

- "Not now" and "not like this" are often better than "no".
- Make trade-offs visible: "I can do X this week if we push Y. Which matters more?"
- A clear, short list of priorities beats a long list where everything is "high".
`,
      takeaways: [
        'The cost of a choice is the best alternative you gave up.',
        'Protect time for important but not urgent work.',
        'Rank work by impact vs effort.',
        'Make trade-offs explicit when saying no.',
      ],
      quiz: [
        {
          q: 'In the Eisenhower matrix, where do learning and refactoring usually belong?',
          options: [
            'Urgent and important',
            'Important but not urgent',
            'Urgent but not important',
            'Neither',
          ],
          answer: 1,
          why: 'They rarely feel urgent but drive long-term results, which is why they need protected time.',
        },
        {
          q: 'Your manager asks you to take on a new project. The most effective reply?',
          options: [
            '"Sure!" and work weekends',
            '"No."',
            '"Happy to. That would push the migration by about two weeks; which should come first?"',
            'Ignore the request',
          ],
          answer: 2,
          why: 'It makes the opportunity cost visible and lets the right person make the trade-off.',
        },
      ],
      practice:
        'List everything on your plate this week. Put each item in an Eisenhower quadrant. Pick one item to drop or delegate.',
      cards: [
        { id: 'c-dm-pr-1', front: 'Opportunity cost?', back: 'The value of the best alternative you give up by making a choice.' },
        { id: 'c-dm-pr-2', front: 'Eisenhower quadrants?', back: 'Urgent+important: do. Important only: schedule. Urgent only: delegate. Neither: drop.' },
      ],
    },
    {
      id: 'dm-calibration',
      unit: 'Learning',
      title: 'Decision journals and calibration',
      minutes: 8,
      summary: 'Write decisions down before you know the outcome, then score yourself honestly.',
      body: `
Memory rewrites history. After an outcome is known, hindsight bias makes us believe we "knew it all along" and resulting makes us grade decisions by luck. The fix is simple: **write it down first**.

## What to record

When you make a meaningful decision, note:
- **The decision** and the **options** you considered.
- **Your reasoning** and the key information you had.
- **What you expect to happen**, as a specific, checkable prediction.
- **Your confidence** (e.g. 70%) that the prediction will come true.
- **Your state**: tired, rushed, stressed? It matters more than we admit.
- **A review date.**

Then, on the review date, record what actually happened and ask:
- Was the outcome due to the decision, to luck, or to both?
- Was the **process** good, given what I knew?
- What would I do differently?

## Calibration

You're **well calibrated** if things you're 70% sure about happen about 70% of the time. Most people are overconfident: their "90% sure" comes true far less often.

The **Brier score** measures it: for each prediction, take (confidence − outcome)², where outcome is 1 if it happened and 0 if not, then average. Lower is better: 0 is perfect, and always saying 50% gives 0.25.

## Make it a habit

- Start small: a decision a week is enough.
- Make predictions concrete: "the migration will be done by March 1", not "it'll go fine".
- Review regularly. The insight comes from patterns across many entries.

> The Decision Journal in this app tracks your predictions and shows your calibration over time.
`,
      takeaways: [
        'Write decisions and predictions down before outcomes are known.',
        'Record confidence as a percentage.',
        'Review the process, not just the result.',
        'Calibration: your 70% should come true about 70% of the time.',
      ],
      quiz: [
        {
          q: 'You made ten predictions at 90% confidence and five came true. You are:',
          options: ['Well calibrated', 'Underconfident', 'Overconfident', 'Unlucky, nothing more'],
          answer: 2,
          why: 'You expected about nine to come true. Five suggests your confidence ran well ahead of your accuracy.',
        },
        {
          q: 'You predicted something at 80% and it happened. What is the Brier score for this prediction?',
          options: ['0.04', '0.2', '0.8', '0.64'],
          answer: 0,
          why: '(0.8 − 1)² = 0.04.',
        },
        {
          q: 'Why write the prediction down before the outcome?',
          options: [
            'For legal reasons',
            'To beat hindsight bias, which rewrites memories of what you expected',
            'To share with your manager',
            'It doesn\'t matter when',
          ],
          answer: 1,
          why: 'Once you know the outcome, your memory of what you predicted shifts toward it.',
        },
      ],
      practice:
        'Log one real decision in the Decision Journal today, with a concrete prediction, a confidence percentage and a review date.',
      cards: [
        { id: 'c-dm-ca-1', front: 'What does "well calibrated" mean?', back: 'Your stated confidence matches reality: your 70% predictions come true about 70% of the time.' },
        { id: 'c-dm-ca-2', front: 'Brier score?', back: 'Average of (confidence − outcome)² across predictions. 0 is perfect; always saying 50% scores 0.25.' },
        { id: 'c-dm-ca-3', front: 'Key fields of a decision journal entry?', back: 'Decision, options, reasoning, prediction, confidence, your state, review date, and later the outcome and lessons.' },
      ],
    },
    {
      id: 'dm-weighted-matrix',
      unit: 'Learning',
      title: 'Weighted decision matrices',
      minutes: 6,
      summary: 'Compare options against explicit, weighted criteria to make trade-offs visible.',
      body: `
When choosing between several options on several criteria (frameworks, job offers, vendors), it's easy to fixate on one factor or let a gut feeling pick and then rationalise. A **weighted decision matrix** makes the trade-offs explicit.

## How it works

1. **List the options.**
2. **List the criteria** that actually matter, decided before you score, so you can't tilt them toward a favourite.
3. **Weight each criterion** by importance (e.g. 1 to 5).
4. **Score each option** on each criterion (e.g. 1 to 5).
5. Multiply scores by weights and sum per option.

**Example**: choosing a state management approach.

- Criteria and weights: team familiarity (5), learning curve (3), ecosystem (2), boilerplate (3).
- Context + useReducer: 5, 5, 3, 4 gives 25 + 15 + 6 + 12 = **58**
- Redux Toolkit: 3, 3, 5, 3 gives 15 + 9 + 10 + 9 = **43**

## Use it as a thinking tool

- The value is in the **conversation about criteria and weights**, not in the final number.
- If the result surprises you and feels wrong, that's information. Maybe a criterion is missing, or a weight is off. Revisit it honestly rather than fudging the scores.
- Run a **sensitivity check**: would a small change in weights flip the winner? If so, the options are close, so pick one and move on (it's probably a two-way door).

> Try the Decision Matrix tool in this app with a real choice you face.
`,
      takeaways: [
        'Fix criteria and weights before scoring options.',
        'Score × weight, summed per option.',
        'A surprising result means look for a missing criterion.',
        'If small weight changes flip the result, the options are close: pick and move on.',
      ],
      quiz: [
        {
          q: 'Why decide criteria and weights before scoring options?',
          options: [
            'It is faster',
            'To prevent unconsciously tailoring criteria to a favourite',
            'Tools require it',
            'Weights don\'t matter',
          ],
          answer: 1,
          why: 'Setting criteria first reduces motivated reasoning.',
        },
        {
          q: 'Option A scores 3 (weight 4) and 5 (weight 2). What is its total?',
          options: ['8', '16', '22', '30'],
          answer: 2,
          why: '3×4 + 5×2 = 12 + 10 = 22.',
        },
      ],
      practice: 'Use the Decision Matrix tool for a real choice you\'re weighing, even a small one.',
      cards: [
        { id: 'c-dm-wm-1', front: 'Steps of a weighted decision matrix?', back: 'List options and criteria, weight criteria, score options, multiply and sum.' },
        { id: 'c-dm-wm-2', front: 'What does a sensitivity check tell you?', back: 'Whether small weight changes flip the winner. If they do, the options are close.' },
      ],
    },
  ],
}
