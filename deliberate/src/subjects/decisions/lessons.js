export const lessons = [
  {
    id: 'dm-reversibility',
    unit: 'Framing',
    title: 'One-way and two-way doors',
    summary: 'Match the effort you put into a decision to how hard it is to undo.',
    ideas: ['One-way vs two-way doors', 'Turn one-way doors into two-way ones', 'Decide with about 70% of the information'],
    body: `
Not every decision deserves the same care. A useful first question: **how hard is this to undo?**

## One-way vs two-way doors

- A **two-way door** can be walked back through: trying a library in one module, a UI change behind a flag, a new meeting format. **Decide quickly**, often alone, and learn from what happens.
- A **one-way door** is irreversible or very costly to reverse: your primary database, a public API that customers build on, a hire. **Slow down**: get input, consider alternatives, write the reasoning down.

The common mistake is treating every decision as a one-way door, which leads to weeks of debate over things you could try in a day.

## Turn one-way doors into two-way ones

Good engineering often means making a decision **reversible** before you make it:

- Ship behind a **feature flag**, so you can switch it off.
- Roll out **gradually** to 1%, then 10%, then everyone.
- Put an **abstraction** around a vendor you might replace.
- Make database changes **backwards-compatible**.
- Agree on a **time-boxed trial**: "we'll try this for two sprints, then review."

## Decide with about 70% of the information

Waiting for certainty is itself a decision, and usually an expensive one. For most decisions, especially two-way doors, act when you have about **70%** of the information you'd like. Being wrong and correcting quickly often costs less than being slow.

> When stuck, ask: "What does being wrong cost here, and how quickly would we find out?"
`,
    takeaways: [
      'Ask first how reversible a decision is.',
      'Two-way doors: decide fast. One-way doors: slow down and write it down.',
      'Make doors two-way with flags, gradual rollouts and trials, then act on about 70% of the information.',
    ],
    quiz: [
      {
        q: 'Which is most like a one-way door?',
        options: ['Changing a button label', 'Trying a new standup format for two weeks', 'Publishing a public API that customers will build on', 'Renaming an internal variable'],
        answer: 2,
        why: 'Once customers depend on a public API, changing it breaks them.',
      },
      {
        q: 'A team has debated for three weeks which charting library to use for an internal dashboard. What is going wrong?',
        options: ['They need more criteria', 'They are treating a two-way door as a one-way door', 'They should vote', 'Nothing'],
        answer: 1,
        why: 'An internal dashboard\'s library is easy to swap later. A quick choice plus a review would cost far less.',
      },
      {
        q: 'Which turns a risky launch into a two-way door?',
        options: ['Launching to everyone at once', 'Shipping behind a feature flag with a gradual rollout', 'Writing a longer spec', 'Launching on a Friday'],
        answer: 1,
        why: 'A flag and gradual rollout let you stop or undo the launch cheaply.',
      },
    ],
    practice:
      'List three decisions you\'re facing. Label each as a one-way or two-way door, and note whether you\'re spending the right amount of time on it.',
    cards: [
      { id: 'c-dm-rv-1', front: 'One-way vs two-way door decisions?', back: 'One-way: irreversible or costly to undo, so go slowly. Two-way: reversible, so decide fast and learn.' },
      { id: 'c-dm-rv-2', front: 'How do you turn a one-way door into a two-way door?', back: 'Feature flags, gradual rollouts, abstraction layers, backwards-compatible changes, time-boxed trials.' },
      { id: 'c-dm-rv-3', front: 'The "70% rule"?', back: 'Most decisions should be made with about 70% of the information you\'d like; waiting for more is usually too slow.' },
    ],
  },
  {
    id: 'dm-second-order',
    unit: 'Framing',
    title: 'Second-order thinking',
    summary: 'Ask "and then what?" to see the consequences of the consequences.',
    ideas: ['Ask "and then what?"', 'Targets change behaviour (Goodhart\'s law)', 'Later effects are often the opposite'],
    body: `
## Ask "and then what?"

First-order thinking asks what happens if you do something. Second-order thinking keeps going: **"and then what?"**

> Hire four contractors to hit a deadline. First order: more hands. And then what? Current staff spend weeks onboarding them, communication overhead grows, and the late project gets later. (This is **Brooks's law**: adding people to a late software project makes it later.)

To practise, write the decision and its immediate effect, then ask "and then what?" at least twice, for each group affected: users, teammates, other teams, and future you.

## Targets change behaviour (Goodhart's law)

People adapt to whatever you measure and reward. **Goodhart's law**: when a measure becomes a target, it stops being a good measure.

> Target: "Close 50 tickets a week." First order: more tickets closed. Then: tickets get split into tiny pieces, closed without being fixed, and hard problems get avoided.

Whenever a decision introduces a metric, a reward or a rule, ask: **"How will people change their behaviour because of this?"**

## Later effects are often the opposite

Second-order effects are often **delayed** and point the **opposite way** from the first-order ones:

- Skipping tests: faster this week, slower every week after.
- Writing tests and paying down tech debt: slower this week, faster later.
- One "hero" who fixes every incident: great today, but knowledge concentrates, nobody else learns, and the hero burns out.

Looking at effects over 10 minutes, 10 months and 10 years is a quick way to see them.
`,
    takeaways: [
      'Keep asking "and then what?" for everyone affected.',
      'Goodhart: when a measure becomes a target, people game it.',
      'Short-term gains often bring long-term costs, and the reverse.',
    ],
    quiz: [
      {
        q: 'Brooks\'s law says:',
        options: ['Software always ships late', 'Adding people to a late software project makes it later', 'Code size doubles every year', 'Bugs grow with team size'],
        answer: 1,
        why: 'New people need onboarding and add communication overhead, slowing the team down in the short term.',
      },
      {
        q: 'Management starts rewarding developers per bug fixed. A likely second-order effect?',
        options: ['Fewer bugs', 'Less incentive to prevent bugs in the first place', 'No change', 'Faster code review'],
        answer: 1,
        why: 'The reward changes behaviour: preventing bugs no longer pays, fixing them does (Goodhart\'s law).',
      },
      {
        q: 'Which is the best example of a delayed effect that runs opposite to the first-order one?',
        options: ['Adding a cache makes pages faster', 'Skipping tests speeds up this sprint but slows every sprint after', 'A bigger server handles more traffic', 'A bug fix removes a bug'],
        answer: 1,
        why: 'The immediate gain turns into an ongoing cost later.',
      },
    ],
    practice:
      'Take a change your team is considering. Write the first-order effect, then ask "and then what?" three times. Note one effect nobody has mentioned.',
    cards: [
      { id: 'c-dm-so-3', front: 'Second-order thinking in one question?', back: '"And then what?"' },
      { id: 'c-dm-so-1', front: 'Goodhart\'s law?', back: 'When a measure becomes a target, it ceases to be a good measure.' },
      { id: 'c-dm-so-2', front: 'Brooks\'s law?', back: 'Adding people to a late software project makes it later.' },
    ],
  },
  {
    id: 'dm-opportunity-cost',
    unit: 'Framing',
    title: 'Opportunity cost',
    summary: 'Every yes is a no to something else. Make that trade-off visible.',
    ideas: ['The real cost is the best alternative', 'Say no by naming the trade-off'],
    body: `
## The real cost is the best alternative

The real cost of anything is **the best alternative you gave up**. A week spent polishing an internal tool doesn't just cost a week's salary; it costs the feature you didn't build, the thing you didn't learn, or the rest you didn't get.

Many "good ideas" only look good in isolation. Compared with the alternatives, they often lose:

> "Should we build a custom admin panel?" Sounds useful. "Should we build a custom admin panel **instead of** fixing checkout, our biggest source of lost revenue?" Different answer.

**Ask:** "If I do this, what am I *not* doing?"

## Say no by naming the trade-off

Because time is limited, saying yes to everything means saying no by accident: things just don't get done, or get done badly. Saying no clearly is kinder and more useful.

- **Make the trade-off visible**: "I can do X this week if we push Y back. Which matters more?" This puts the decision with the person who knows the priorities.
- **"Not now" or "not like this"** often works better than a flat no: "I can't take on the redesign, but I can review the plan on Thursday."
- **Keep a short list of real priorities.** If everything is "high priority", nothing is.

> Opportunity cost applies to you too. An evening of scrolling has a cost: the book, the walk or the sleep you didn't get.
`,
    takeaways: [
      'The real cost of a choice is the best alternative you give up.',
      'Compare ideas against alternatives, not in isolation.',
      'Say no by naming the trade-off and letting the right person choose.',
    ],
    quiz: [
      {
        q: 'What is the opportunity cost of spending a sprint on a nice-to-have feature?',
        options: ['The engineers\' salaries', 'The most valuable other thing the team could have done that sprint', 'Nothing, if the feature ships', 'The cost of the servers'],
        answer: 1,
        why: 'Opportunity cost is the best alternative given up, not the money spent.',
      },
      {
        q: 'Your manager asks you to take on a new project. The most effective reply?',
        options: [
          '"Sure!" and work weekends',
          '"No."',
          '"Happy to. That would push the migration back about two weeks; which should come first?"',
          'Ignore it',
        ],
        answer: 2,
        why: 'It makes the trade-off visible and lets the person who owns the priorities decide.',
      },
    ],
    practice:
      'Pick one thing you said yes to recently. Write down what it pushed out. Was it worth it?',
    cards: [
      { id: 'c-dm-pr-1', front: 'Opportunity cost?', back: 'The value of the best alternative you give up by making a choice.' },
      { id: 'c-dm-oc-1', front: 'How do you say no well?', back: 'Name the trade-off ("I can do X if Y moves; which first?") or offer "not now" / "not like this".' },
    ],
  },
  {
    id: 'dm-prioritising',
    unit: 'Framing',
    title: 'Prioritising work',
    summary: 'Two simple grids for deciding what to do first, and what not to do at all.',
    ideas: ['Urgent vs important (Eisenhower)', 'Impact vs effort'],
    body: `
## Urgent vs important (Eisenhower)

Sort each task by two questions: is it **urgent** (it needs attention now) and is it **important** (it matters for your goals)?

- **Important and urgent:** do it now. A production incident, a deadline tomorrow.
- **Important, not urgent:** schedule it and protect the time. Learning, refactoring, mentoring, planning, health.
- **Urgent, not important:** delegate, batch or decline. Many messages, some meetings, other people's small requests.
- **Neither:** drop it.

The trap: urgent things shout, important things don't. Most people spend their days on the urgent row, and the important-but-not-urgent work, which drives long-term growth, never gets done. Put it in your calendar like a meeting.

## Impact vs effort

For a backlog of ideas, roughly estimate each one's **impact** and **effort**, high or low:

- **High impact, low effort:** quick wins. Do these first.
- **High impact, high effort:** big bets. Plan them deliberately and do a few at a time.
- **Low impact, low effort:** fill-ins, for spare moments.
- **Low impact, high effort:** avoid.

Rough guesses are fine. The value is in comparing items side by side instead of doing whatever was mentioned most recently.

> Example: speeding up the slowest page (high impact, low effort) beats a full redesign (high impact, high effort) as the next task, and both beat custom animations (low impact, high effort).
`,
    takeaways: [
      'Protect time for important-but-not-urgent work; urgent work will take care of itself.',
      'Delegate or decline what is urgent but not important.',
      'Rank ideas by impact and effort; start with quick wins and avoid low-impact, high-effort work.',
    ],
    quiz: [
      {
        q: 'Where do learning and refactoring usually belong in the Eisenhower matrix?',
        options: ['Urgent and important', 'Important but not urgent', 'Urgent but not important', 'Neither'],
        answer: 1,
        why: 'They rarely feel urgent but drive long-term results, which is why they need protected time.',
      },
      {
        q: 'Which item should usually come first?',
        options: ['Low impact, high effort', 'High impact, high effort', 'High impact, low effort', 'Low impact, low effort'],
        answer: 2,
        why: 'Quick wins deliver the most value for the least work.',
      },
    ],
    practice:
      'List everything on your plate this week and put each item in an Eisenhower quadrant. Pick one item to drop or delegate.',
    cards: [
      { id: 'c-dm-pr-2', front: 'Eisenhower quadrants?', back: 'Urgent+important: do. Important only: schedule. Urgent only: delegate. Neither: drop.' },
      { id: 'c-dm-pw-1', front: 'Impact vs effort: what to do first and what to avoid?', back: 'First: high impact, low effort (quick wins). Avoid: low impact, high effort.' },
    ],
  },
  {
    id: 'dm-expected-value',
    unit: 'Uncertainty',
    title: 'Expected value',
    summary: 'Weigh each possible outcome by how likely it is, and put rough numbers on your assumptions.',
    ideas: ['Calculating expected value', 'Rough numbers expose assumptions'],
    body: `
Every decision under uncertainty is a bet. You can't control the outcome, only how well you weigh the possibilities.

## Calculating expected value

**Expected value (EV)**: multiply each outcome's value by its probability, add them up, and subtract the cost.

> Should you spend a week on a performance project?
> - 60% chance it works and saves $50k a year in servers.
> - 40% chance it doesn't help: $0 saved.
> - Cost: one engineer-week, about $5k.
>
> EV = 0.6 × $50k + 0.4 × $0 − $5k = **$25k**.

It's a good bet, even though it fails 40% of the time. A decision can be wise and still not work out; what matters is that, made many times, it comes out ahead.

## Rough numbers expose assumptions

You'll rarely have exact numbers, and that's fine. Writing down a rough probability ("I'd say 60%") forces you to state assumptions that otherwise stay vague, and makes disagreements concrete.

> Two people disagree about the project. Ask each for their numbers. One says 60% chance of success, the other 20%. Now the real question is clear: **why** do you see the odds so differently? That conversation is far more useful than arguing "good idea" vs "bad idea".

If the decision looks the same across a range of reasonable guesses (EV is positive whether success is 40% or 70%), you can decide without more research.
`,
    takeaways: [
      'EV = the sum of (probability × value), minus the cost.',
      'A good bet can still fail; judge it over many repetitions.',
      'Rough numbers turn vague disagreements into specific questions.',
    ],
    quiz: [
      {
        q: 'A bet has a 25% chance to win $400 and costs $80 to play. What is its expected value?',
        options: ['+$20', '+$100', '−$20', '+$320'],
        answer: 0,
        why: '0.25 × $400 = $100 expected winnings, minus the $80 cost, = +$20.',
      },
      {
        q: 'Two colleagues disagree about a project. What is the most useful next step?',
        options: [
          'Vote',
          'Ask each for their rough probability of success and discuss why they differ',
          'Let the more senior person decide',
          'Wait for more data',
        ],
        answer: 1,
        why: 'Numbers make the disagreement specific, so you can discuss the assumptions behind it.',
      },
    ],
    practice:
      'Pick a decision you face this month. Write two or three outcomes with rough probabilities and values, and calculate the expected value.',
    cards: [
      { id: 'c-dm-ev-1', front: 'Expected value formula?', back: 'Sum over outcomes of (probability × value), minus the cost.' },
      { id: 'c-dm-ex-1', front: 'Why put rough numbers on a decision?', back: 'They force assumptions into the open and turn vague disagreements into specific questions.' },
    ],
  },
  {
    id: 'dm-beyond-ev',
    unit: 'Uncertainty',
    title: 'Beyond expected value',
    summary: 'Three things the average leaves out: ruin, variance and options.',
    ideas: ['Avoid the risk of ruin', 'Variance: same average, different ride', 'Optionality'],
    body: `
Expected value tells you which bet wins **on average**. But you live through one outcome, not the average.

## Avoid the risk of ruin

Never take a bet where a bad outcome is **unrecoverable**, however good the EV looks. If you're wiped out, you never get to enjoy the long-run average.

> A deploy process that's usually fine but has a 1% chance of losing all customer data isn't worth the time it saves. That's why you keep backups you've actually tested restoring.

Personal versions: savings you can't afford to lose, health, reputation. **Ask:** "What's the worst case, and could I recover from it?"

## Variance: same average, different ride

Two options can have the same expected value and feel completely different.

> Option A: a guaranteed $10k. Option B: a 10% chance of $100k, otherwise nothing.

Both average $10k. If you need the money for rent, A is clearly better. If it's spare money and you can take many such bets, B might be fine. **Variance** (how spread out the outcomes are) matters most when you can't afford a bad result.

## Optionality

Some choices **keep more doors open** than others, and that flexibility has value in itself.

> Choosing a widely used, well-documented database over an exotic one keeps more future options open: hiring, tooling, migration paths.

When two options are close, prefer the one that leaves you more choices later, especially when you're uncertain about the future.
`,
    takeaways: [
      'Never risk an unrecoverable loss, whatever the expected value.',
      'Equal averages can hide very different risks; variance matters when you can\'t afford a bad outcome.',
      'When options are close, prefer the one that keeps future choices open.',
    ],
    quiz: [
      {
        q: 'An investment has strongly positive expected value but a 5% chance of bankrupting you. A sound response:',
        options: ['Take it; EV is positive', 'Avoid it or shrink it: ruin is unrecoverable', 'Flip a coin', 'EV doesn\'t apply'],
        answer: 1,
        why: 'You can\'t benefit from good long-run averages if one bad outcome ends the game.',
      },
      {
        q: 'A guaranteed $10k vs a 10% chance at $100k. When should you strongly prefer the guaranteed $10k?',
        options: ['Never; they\'re equal', 'When you need the money and can\'t afford to get nothing', 'When you\'re feeling lucky', 'Only if the odds are worse'],
        answer: 1,
        why: 'Same expected value, but the risky option\'s variance matters when a bad result would hurt you.',
      },
      {
        q: 'Two job offers look equally good. One builds widely transferable skills; the other is very niche. Optionality suggests:',
        options: ['The niche one', 'The transferable one, since it keeps more future choices open', 'Whichever pays more this year', 'Neither'],
        answer: 1,
        why: 'When options are close, the one that keeps more doors open is usually worth more.',
      },
    ],
    practice:
      'For a decision you\'re weighing, write the worst realistic outcome of each option, and whether you could recover from it.',
    cards: [
      { id: 'c-dm-ev-3', front: 'Why avoid risk of ruin even with positive EV?', back: 'An unrecoverable loss ends the game; you never get the long-run average.' },
      { id: 'c-dm-be-1', front: 'Why does variance matter if the expected value is the same?', back: 'You live one outcome. A wide spread of outcomes hurts when you can\'t afford a bad result.' },
      { id: 'c-dm-be-2', front: 'Optionality?', back: 'The value of keeping future choices open. When options are close, prefer the more flexible one.' },
    ],
  },
  {
    id: 'dm-resulting',
    unit: 'Uncertainty',
    title: 'Judging decisions, not outcomes',
    summary: 'A good decision can turn out badly and a bad one can get lucky. Learn from the decision, not the dice.',
    ideas: ['Resulting', 'Separate decision quality from outcome'],
    body: `
## Resulting

**Resulting** (a term from poker player Annie Duke) means judging a decision by how it turned out.

> You deployed on Friday night without running the tests, and nothing broke. "See, it was fine."

It wasn't a good decision; it got lucky. The reverse also happens:

> A well-researched launch flopped because a competitor unexpectedly released something similar the same week. "That was a terrible decision."

It may have been a good decision with a bad outcome. If you learn only from outcomes, you'll repeat lucky mistakes and abandon unlucky good choices.

## Separate decision quality from outcome

Every result is a mix of **decision quality** and **luck**. To learn from one, separate them by asking:

1. **What did I know at the time?** Not what I know now.
2. **Was the reasoning sound,** given that information?
3. **Could I reasonably have found out more,** and was it worth the time?
4. **How much of the result was luck?** Would the same decision usually work?

A simple grid helps:

- **Good decision, good outcome:** deserved success. Keep doing it.
- **Good decision, bad outcome:** bad luck. Don't overreact.
- **Bad decision, good outcome:** dumb luck. Don't repeat it.
- **Bad decision, bad outcome:** a lesson. Fix the process.

Writing your reasoning down **before** you know the result (see Decision journals) is what makes this honest.
`,
    takeaways: [
      'Resulting is judging a decision only by its outcome.',
      'Outcomes mix decision quality with luck.',
      'Review what you knew and how you reasoned at the time, not just what happened.',
    ],
    quiz: [
      {
        q: 'You skipped code review, deployed, and nothing broke. Concluding "skipping review is fine" is an example of:',
        options: ['Expected value', 'Resulting', 'Anchoring', 'Steelmanning'],
        answer: 1,
        why: 'It judges the decision by one lucky outcome rather than by its risk.',
      },
      {
        q: 'A careful, well-reasoned bet loses because of something nobody could have predicted. What should you do?',
        options: ['Never make that kind of bet again', 'Treat it as bad luck and keep the process, unless you find a real flaw', 'Blame whoever proposed it', 'Ignore it completely'],
        answer: 1,
        why: 'A good decision can have a bad outcome. Change the process only if the reasoning was actually flawed.',
      },
    ],
    practice:
      'Pick a past decision that turned out badly. Using the four questions, decide: was it a bad decision, or bad luck?',
    cards: [
      { id: 'c-dm-ev-2', front: 'What is "resulting"?', back: 'Judging a decision\'s quality by its outcome, ignoring luck and the information available at the time.' },
      { id: 'c-dm-rs-1', front: 'Good decision, bad outcome: what should you do?', back: 'Treat it as bad luck and keep the process, unless you find a genuine flaw in the reasoning.' },
    ],
  },
  {
    id: 'dm-premortem',
    unit: 'Uncertainty',
    title: 'Pre-mortems',
    summary: 'Imagine the project has already failed, then work out why, before it starts.',
    ideas: ['Imagine it has already failed', 'Write risks independently first', 'Turn the top risks into actions'],
    body: `
## Imagine it has already failed

Before starting a project, gather the team and say: **"It's six months from now, and this project has failed badly. What went wrong?"**

Two things make this work better than asking "what could go wrong?":

- It makes raising concerns **safe**. The failure is a given, so pointing out risks isn't being negative; it's the task.
- Imagining a definite outcome produces more **specific** reasons than vague worrying does.

## Write risks independently first

Ask everyone to write their reasons **alone, in silence**, for a few minutes before anyone speaks. Otherwise the first risk mentioned anchors the discussion and quieter people's concerns never come up.

> A pre-mortem for a new payments flow might produce:
> - "The provider rate-limited us on launch day."
> - "Rounding errors in currency conversion caused wrong refunds."
> - "Support wasn't trained, so tickets piled up for a week."

## Turn the top risks into actions

Collect the reasons, group duplicates, and pick the few most likely or most damaging. For each, decide to **prevent** it, **reduce** it, **monitor** it, or consciously **accept** it:

- Rate limits → load-test against the provider's sandbox, and ask them about launch-day limits.
- Rounding → add tests for currency edge cases.
- Support → a one-hour briefing and a help article before launch.

A pre-mortem takes 30 minutes and regularly finds the problem that would have sunk the project.
`,
    takeaways: [
      'A pre-mortem assumes the project failed and asks why.',
      'Write reasons alone first to avoid groupthink and anchoring.',
      'Turn the top risks into specific actions: prevent, reduce, monitor or accept.',
    ],
    quiz: [
      {
        q: 'Why does a pre-mortem start from "it has already failed"?',
        options: ['To lower morale', 'It makes raising concerns safe and prompts specific reasons', 'To assign blame', 'To shorten the meeting'],
        answer: 1,
        why: 'With failure as a given, naming risks is the task, and a concrete outcome produces concrete reasons.',
      },
      {
        q: 'Why should people write their reasons independently before discussing?',
        options: ['To save time', 'To avoid groupthink and anchoring on the first risk mentioned', 'For record keeping', 'It doesn\'t matter'],
        answer: 1,
        why: 'Independent writing captures more varied concerns before the group converges.',
      },
      {
        q: 'What should happen to the top risks a pre-mortem finds?',
        options: ['Record them and move on', 'Decide for each whether to prevent, reduce, monitor or accept it', 'Cancel the project', 'Assign them to the newest team member'],
        answer: 1,
        why: 'A pre-mortem is only useful if the top risks lead to actions.',
      },
    ],
    practice:
      'Run a two-minute pre-mortem on something you\'re working on: "It\'s three months from now and this failed. Why?" Write five reasons and one action for the biggest.',
    cards: [
      { id: 'c-dm-pm-1', front: 'What is a pre-mortem?', back: 'Imagining a project has failed and listing why, before it starts, to find and address risks.' },
      { id: 'c-dm-pmt-1', front: 'Why write pre-mortem reasons alone first?', back: 'To avoid groupthink and anchoring on the first risk someone mentions.' },
    ],
  },
  {
    id: 'dm-inversion',
    unit: 'Uncertainty',
    title: 'Inversion',
    summary: 'Instead of asking how to succeed, ask how you would guarantee failure, then avoid that.',
    ideas: ['Invert the question', 'Avoiding mistakes beats chasing brilliance'],
    body: `
## Invert the question

"Invert, always invert" was the advice of the mathematician Carl Jacobi, later popularised by investor Charlie Munger. Instead of asking **how to achieve** something, ask **how you would make sure it fails**, then avoid those things.

> **Goal:** a codebase that's easy to maintain.
> **Inverted:** how would I make it impossible to maintain?
> No tests, huge functions, clever one-liners, no documentation, every change touching ten files, nobody reviewing anything.
> Now you have a concrete list of what to avoid.

It works because failure is often easier to picture than success. "How do I become a great engineer?" is vague. "How would I make sure I never improve?" gets clear answers fast: never read other people's code, avoid hard tasks, never ask for feedback, never write anything down.

## Avoiding mistakes beats chasing brilliance

Inversion reflects a broader point: **consistently avoiding big mistakes often beats occasionally being brilliant.** In many areas, results come mostly from not doing the dumb things.

- In investing: not losing money matters more than finding the next big winner.
- In engineering: a team with good habits (tests, reviews, small deploys) outperforms a team of geniuses who skip them.
- In health: not smoking and sleeping enough beat any clever supplement.

When planning anything, add a short "how could we make this fail?" section. It's quick, and it often catches what optimistic planning misses.
`,
    takeaways: [
      'Ask how you would guarantee failure, then avoid those things.',
      'Failure is often easier to picture concretely than success.',
      'Reliably avoiding big mistakes often beats occasional brilliance.',
    ],
    quiz: [
      {
        q: 'Inversion means:',
        options: ['Doing the opposite of others', 'Asking how you\'d guarantee failure, then avoiding that', 'Reversing a decision', 'Planning from the end date backwards'],
        answer: 1,
        why: 'It approaches a goal by identifying and avoiding the paths to failure.',
      },
      {
        q: 'Why is inversion often useful?',
        options: [
          'Failure is easier to picture concretely than success',
          'It guarantees success',
          'It removes the need for planning',
          'It is faster than any other method',
        ],
        answer: 0,
        why: '"How would this fail?" produces specific answers where "how do we succeed?" stays vague.',
      },
    ],
    practice:
      'Pick a goal you have. Write five ways you could guarantee failing at it. Circle the one you\'re closest to doing.',
    cards: [
      { id: 'c-dm-pm-2', front: 'Inversion?', back: 'Ask how you would guarantee failure, then avoid those things.' },
      { id: 'c-dm-in-1', front: 'Why does avoiding mistakes often beat brilliance?', back: 'In many areas results come mostly from not doing the dumb things, consistently.' },
    ],
  },
  {
    id: 'dm-journal',
    unit: 'Learning',
    title: 'Decision journals',
    summary: 'Write decisions down before you know the outcome, then review them honestly.',
    ideas: ['Write it down before the outcome', 'What to record', 'Review the process, not just the result'],
    body: `
## Write it down before the outcome

Memory rewrites history. Once you know how something turned out, **hindsight bias** makes it feel predictable ("I knew it"), and **resulting** makes you grade the decision by luck. The fix is simple: **record the decision before you know the result.**

## What to record

For any meaningful decision (a technical approach, a hire, a priority call, a career move), note:

- **The decision** and the **options** you considered.
- **Your reasoning** and the key information you had.
- **A specific prediction**: "the migration will be done by March 1 with no customer-facing incidents", not "it'll go fine".
- **How confident you are**, as a percentage.
- **Your state**: rested, rushed, stressed? It matters more than we admit.
- **A date to review it.**

It takes five minutes. A decision a week is plenty.

## Review the process, not just the result

On the review date, record what actually happened, then ask:

- Did the prediction come true?
- Was the **process** good, given what I knew then? (Score it separately from the outcome.)
- What would I do differently?

The insight comes from **patterns across many entries**: "I'm overconfident about timelines", "my rushed decisions go worse", "I underweight what users say." A single entry rarely teaches much; twenty do.

> The Decision Journal in this app (Reflect → Decisions) is built around exactly these fields.
`,
    takeaways: [
      'Record decisions and predictions before outcomes are known.',
      'Write a specific prediction, a confidence level, your state and a review date.',
      'Review your reasoning separately from the result, and look for patterns over many entries.',
    ],
    quiz: [
      {
        q: 'Why write the prediction down before the outcome?',
        options: ['For legal reasons', 'To beat hindsight bias, which rewrites what you remember expecting', 'To share with your manager', 'It doesn\'t matter when'],
        answer: 1,
        why: 'Once you know the outcome, your memory of what you predicted shifts toward it.',
      },
      {
        q: 'Which prediction is best for a decision journal?',
        options: ['"The launch will go well"', '"Signups will rise"', '"At least 500 new signups in the first 30 days"', '"Users will like it"'],
        answer: 2,
        why: 'It is specific and checkable, so you can tell later whether it came true.',
      },
      {
        q: 'Where does most of the value of a decision journal come from?',
        options: ['Any single entry', 'Patterns across many reviewed entries', 'Writing long entries', 'Sharing them publicly'],
        answer: 1,
        why: 'Habits like overconfidence or rushed choices only show up across many decisions.',
      },
    ],
    practice:
      'Log one real decision in the app\'s Decision Journal today, with a specific prediction, a confidence percentage and a review date.',
    cards: [
      { id: 'c-dm-ca-3', front: 'Key fields of a decision journal entry?', back: 'Decision, options, reasoning, a specific prediction, confidence, your state, review date; later the outcome and lessons.' },
      { id: 'c-dm-dj-1', front: 'Why review the process separately from the outcome?', back: 'Outcomes include luck. Judging the reasoning tells you what to keep or change.' },
    ],
  },
  {
    id: 'dm-calibration',
    unit: 'Learning',
    title: 'Calibration',
    summary: 'Find out whether your "70% sure" really comes true 70% of the time, and put a number on it.',
    ideas: ['What calibration means', 'Most people are overconfident', 'The Brier score'],
    body: `
## What calibration means

You're **well calibrated** if things you say you're 70% sure of happen about 70% of the time, and your 90% predictions come true about 90% of the time.

Calibration is different from being right. A forecaster who says "30% chance of rain" on days when it rains 30% of the time is perfectly calibrated, even though on most of those days it didn't rain.

## Most people are overconfident

When people say they're 90% sure, they're typically right much less often than 90%. In software this shows up as estimates that are almost always too short, and "this will definitely work" fixes that don't.

The good news: calibration improves with **feedback**. Make predictions with a percentage, check them, and adjust. The calibration practice in this app (Reflect → Decisions → Calibration) gives you fast feedback with true/false statements.

## The Brier score

The **Brier score** turns calibration into a single number. For each prediction:

> score = (confidence − outcome)², where outcome is 1 if it happened and 0 if not.

Then average over all your predictions. **Lower is better.**

> You say 80% and it happens: (0.8 − 1)² = **0.04**. Good.
> You say 80% and it doesn't: (0.8 − 0)² = **0.64**. Costly.
> Always saying 50% scores **0.25**, so beating 0.25 means your confidence carries real information.

The score punishes confident mistakes hard, which is exactly the habit worth breaking.
`,
    takeaways: [
      'Calibrated: your 70% predictions come true about 70% of the time.',
      'Most people are overconfident; feedback on recorded predictions fixes it.',
      'Brier score: average of (confidence − outcome)². Lower is better; 0.25 is the "always 50%" baseline.',
    ],
    quiz: [
      {
        q: 'You made ten predictions at 90% confidence and five came true. You are:',
        options: ['Well calibrated', 'Underconfident', 'Overconfident', 'Unlucky, nothing more'],
        answer: 2,
        why: 'You\'d expect about nine to come true. Five suggests your confidence ran ahead of your accuracy.',
      },
      {
        q: 'A forecaster says "30% chance of rain" on many days, and it rains on about 30% of them. They are:',
        options: ['Wrong most of the time', 'Well calibrated', 'Overconfident', 'Underconfident'],
        answer: 1,
        why: 'Calibration means stated probabilities match how often things happen.',
      },
      {
        q: 'You predicted something at 80% and it happened. What is the Brier score for that prediction?',
        options: ['0.04', '0.2', '0.8', '0.64'],
        answer: 0,
        why: '(0.8 − 1)² = 0.04.',
      },
    ],
    practice:
      'Do ten statements in the app\'s calibration practice. Note whether your misses came mostly at high confidence.',
    cards: [
      { id: 'c-dm-ca-1', front: 'What does "well calibrated" mean?', back: 'Your stated confidence matches reality: your 70% predictions come true about 70% of the time.' },
      { id: 'c-dm-ca-2', front: 'Brier score?', back: 'Average of (confidence − outcome)² across predictions. 0 is perfect; always saying 50% scores 0.25.' },
    ],
  },
  {
    id: 'dm-weighted-matrix',
    unit: 'Learning',
    title: 'Weighted decision matrices',
    summary: 'Compare options against explicit, weighted criteria to make trade-offs visible.',
    ideas: ['Set criteria and weights first', 'Score, multiply and sum', 'Check how sensitive the result is'],
    body: `
When choosing between several options on several criteria (frameworks, job offers, vendors), it's easy to fixate on one factor, or to let a gut feeling pick and then rationalise it. A **weighted decision matrix** makes the trade-offs explicit.

## Set criteria and weights first

List the **criteria** that actually matter and give each a **weight** for importance (1 to 5), **before** you score any option. If you score first, it's tempting to pick criteria that favour the option you already like.

## Score, multiply and sum

Score each option on each criterion (1 to 5), multiply by the weight, and add up.

> Choosing state management. Criteria and weights: team familiarity (5), learning curve (3), ecosystem (2), little boilerplate (3).
> - Context + useReducer: 5, 5, 3, 4 → 25 + 15 + 6 + 12 = **58**
> - Redux Toolkit: 3, 3, 5, 3 → 15 + 9 + 10 + 9 = **43**

The value is mostly in the **conversation** about criteria and weights; the final number is a summary. If the result surprises you and feels wrong, that's information: a criterion is probably missing or mis-weighted. Revisit it honestly rather than nudging scores until the "right" option wins.

## Check how sensitive the result is

Change each weight by one point up or down. **Does the winner change?**

- If not, the result is robust. Go with it.
- If small changes flip it, the options are close. Pick one and move on; it's probably a two-way door, and the time saved is worth more than the difference.

> Try the Matrix tool in this app (Reflect → Decisions → Matrix). It runs this sensitivity check for you.
`,
    takeaways: [
      'Fix criteria and weights before scoring options.',
      'Score × weight, summed per option; a surprising result means look for a missing criterion.',
      'If small weight changes flip the result, the options are close: pick and move on.',
    ],
    quiz: [
      {
        q: 'Why decide criteria and weights before scoring the options?',
        options: ['It is faster', 'To avoid tailoring criteria to a favourite', 'The tool requires it', 'Weights don\'t matter'],
        answer: 1,
        why: 'Setting criteria first reduces motivated reasoning.',
      },
      {
        q: 'Option A scores 3 on a criterion weighted 4, and 5 on a criterion weighted 2. What is its total?',
        options: ['8', '16', '22', '30'],
        answer: 2,
        why: '3×4 + 5×2 = 12 + 10 = 22.',
      },
      {
        q: 'Changing one weight by a single point flips the winner. What does that tell you?',
        options: ['The matrix is broken', 'The options are close, so pick one and move on', 'You need more criteria', 'Choose the loser'],
        answer: 1,
        why: 'When the result is that sensitive, the difference between options is small.',
      },
    ],
    practice: 'Use the Matrix tool for a real choice you\'re weighing, even a small one, and check whether the result is robust.',
    cards: [
      { id: 'c-dm-wm-1', front: 'Steps of a weighted decision matrix?', back: 'Set criteria and weights, score each option, multiply and sum, then check sensitivity.' },
      { id: 'c-dm-wm-2', front: 'What does a sensitivity check tell you?', back: 'Whether small weight changes flip the winner. If they do, the options are close.' },
    ],
  },
]
