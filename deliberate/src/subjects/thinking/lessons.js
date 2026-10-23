export const lessons = [
  {
    id: 'ct-arguments',
    unit: 'Reasoning',
    title: 'Anatomy of an argument',
    minutes: 8,
    summary: 'Break any claim into premises and a conclusion, then test each part.',
    body: `
An argument is a set of reasons (**premises**) offered in support of a claim (**conclusion**). Most disagreements get easier once you lay the argument out explicitly.

## Find the parts

> "We should rewrite the service in Go. It's slow, and Go is fast."

- Premise 1: The service is slow.
- Premise 2: Go is fast.
- Conclusion: We should rewrite the service in Go.

Laid out like this, the gaps show. Is the slowness caused by the language? It might be the database. What would the rewrite cost? There's a **hidden premise**: "the language is the cause of the slowness."

## Validity and soundness

- **Valid**: *if* the premises were true, the conclusion would have to follow. This is about structure.
- **Sound**: valid **and** the premises are actually true.

"All birds can fly. Penguins are birds. So penguins can fly." This is valid but not sound, because premise 1 is false.

## Deductive vs inductive

- **Deductive** arguments aim for certainty: if the premises are true, the conclusion must be.
- **Inductive** arguments aim for probability: "Every deploy on Friday this quarter caused an incident, so the next one probably will." Strength depends on sample size and representativeness.

Most real-world reasoning (engineering included) is inductive. The right question is "how strong is this?", not "is it proven?"

## Questions to ask any argument

1. What exactly is the conclusion?
2. What reasons support it?
3. What unstated assumptions does it rely on?
4. Are the premises true? How do we know?
5. Does the conclusion actually follow, or could the premises be true and the conclusion false?
`,
    takeaways: [
      'Arguments are premises plus a conclusion. Write them out.',
      'Hunt for hidden premises; that is where weak arguments hide.',
      'Valid means good structure; sound means valid with true premises.',
      'Most real reasoning is inductive: judge its strength, not proof.',
    ],
    quiz: [
      {
        q: '"All cats are mammals. My pet is a mammal. So my pet is a cat." This argument is:',
        options: ['Valid and sound', 'Valid but not sound', 'Invalid', 'Inductive and strong'],
        answer: 2,
        why: 'The premises can both be true while the conclusion is false (the pet could be a dog). The structure fails.',
      },
      {
        q: '"Our competitor added dark mode and their signups rose, so we should add dark mode." What is the main hidden premise?',
        options: [
          'Dark mode is easy to build',
          'Dark mode caused their signups to rise',
          'Users like dark colours',
          'Competitors are always right',
        ],
        answer: 1,
        why: 'The argument assumes cause and effect from a single coincidence in time.',
      },
      {
        q: 'A sound argument is one that is:',
        options: ['Persuasive', 'Valid with true premises', 'Based on statistics', 'Agreed on by experts'],
        answer: 1,
        why: 'Soundness requires both correct structure and true premises.',
      },
    ],
    practice:
      'Take a strong opinion you hold about technology or work. Write it as numbered premises and a conclusion. Mark the weakest premise.',
    cards: [
      { id: 'c-ct-ar-1', front: 'Valid vs sound?', back: 'Valid: the conclusion follows if the premises are true. Sound: valid and the premises really are true.' },
      { id: 'c-ct-ar-2', front: 'Deductive vs inductive argument?', back: 'Deductive aims at certainty; inductive aims at probability and is judged by strength.' },
      { id: 'c-ct-ar-3', front: 'What is a hidden premise?', back: 'An unstated assumption an argument needs in order to work. Often its weakest point.' },
    ],
  },
  {
    id: 'ct-fallacies',
    unit: 'Reasoning',
    title: 'Common logical fallacies',
    minutes: 10,
    summary: 'Recognise the reasoning patterns that feel convincing but don\'t hold up.',
    body: `
A fallacy is a pattern of reasoning that **seems** persuasive but doesn't support its conclusion. Naming them helps you notice them in others and, more importantly, in yourself.

## Attacking the wrong target

- **Ad hominem**: attacking the person instead of the argument. "You're junior, so your design is wrong."
- **Straw man**: misrepresenting a position to make it easier to attack. "You want tests? So you want us to spend months writing tests instead of shipping?"
- **Tu quoque** ("you too"): deflecting criticism by pointing at the critic's behaviour.

## Faulty structure

- **False dilemma**: presenting two options when more exist. "Either we rewrite it or we live with it forever."
- **Slippery slope**: claiming one step will inevitably lead to an extreme without showing why.
- **Circular reasoning**: the conclusion is assumed in a premise. "This library is the best because it's superior to the others."
- **Hasty generalisation**: a broad conclusion from a tiny sample. "I tried pair programming once; it doesn't work."

## Misusing evidence

- **Post hoc** (false cause): "B happened after A, so A caused B." "We changed the button colour and revenue went up."
- **Appeal to authority**: treating a claim as true because someone important said it, especially outside their expertise.
- **Appeal to popularity** (bandwagon): "Everyone uses X, so it must be right for us."
- **Appeal to nature / tradition**: "We've always done it this way."
- **Moving the goalposts**: changing the criteria after they've been met.

## Use them carefully

Shouting the name of a fallacy rarely wins anyone over, and an argument containing a fallacy can still have a **true conclusion** (assuming otherwise is called the *fallacy fallacy*). Use these names as private checks. Ask, "Is there a better reason for this?"
`,
    takeaways: [
      'Ad hominem and straw man attack the wrong target.',
      'False dilemmas hide the third option.',
      'Correlation in time is not causation (post hoc).',
      'A fallacious argument can still have a true conclusion.',
    ],
    quiz: [
      {
        q: '"If we allow remote work on Fridays, soon nobody will ever come to the office and the company will fall apart." Which fallacy?',
        options: ['Straw man', 'Slippery slope', 'Ad hominem', 'Circular reasoning'],
        answer: 1,
        why: 'It asserts a chain of escalating consequences without evidence that each step follows.',
      },
      {
        q: '"We can either ship on Friday with bugs or delay by three months." Which fallacy?',
        options: ['False dilemma', 'Post hoc', 'Bandwagon', 'Tu quoque'],
        answer: 0,
        why: 'Other options exist: ship a smaller scope, ship behind a flag, delay by a week.',
      },
      {
        q: 'Someone argues for a conclusion using a fallacy. What follows?',
        options: [
          'The conclusion is false',
          'The conclusion is true',
          'The argument fails to support the conclusion, which may still be true or false',
          'The person is dishonest',
        ],
        answer: 2,
        why: 'Bad reasoning doesn\'t prove the opposite. Assuming it does is the fallacy fallacy.',
      },
    ],
    practice:
      'Over the next day, notice one fallacy in a meeting, article or your own thinking. Write down what it was and what a stronger version of the argument would look like.',
    cards: [
      { id: 'c-ct-fa-1', front: 'Straw man?', back: 'Misrepresenting someone\'s position to make it easier to attack.' },
      { id: 'c-ct-fa-2', front: 'Post hoc ergo propter hoc?', back: '"After this, therefore because of this." Assuming that because B followed A, A caused B.' },
      { id: 'c-ct-fa-3', front: 'False dilemma?', back: 'Presenting only two options when more exist.' },
      { id: 'c-ct-fa-4', front: 'Fallacy fallacy?', back: 'Concluding a claim is false because the argument for it was fallacious.' },
      { id: 'c-ct-fa-5', front: 'Ad hominem?', back: 'Attacking the person making the argument rather than the argument itself.' },
    ],
  },
  {
    id: 'ct-biases',
    unit: 'Mind',
    title: 'Cognitive biases',
    minutes: 10,
    summary: 'Your brain takes shortcuts. Knowing the common ones helps you catch them.',
    body: `
Cognitive biases are systematic errors that come from mental shortcuts. They aren't signs of low intelligence; everyone has them. Knowing about them doesn't make you immune, but it lets you build **habits and processes** that compensate.

## The big ones

- **Confirmation bias**: seeking, noticing and remembering evidence that supports what you already believe. *Counter:* ask "what would change my mind?" and look for that.
- **Anchoring**: over-relying on the first number you hear. The first estimate in a planning meeting pulls everyone toward it. *Counter:* estimate independently before discussing (planning poker exists for this reason).
- **Availability heuristic**: judging likelihood by how easily examples come to mind. A recent outage makes outages feel more likely than they are. *Counter:* look at base rates and data.
- **Sunk cost fallacy**: continuing because of what you've already invested. "We've spent six months on this framework, we can't switch now." *Counter:* ask, "Knowing what I know now, would I start this today?"
- **Survivorship bias**: studying only the successes. "These famous startups all used microservices." What about the thousands that failed with them? *Counter:* ask what's missing from the sample.
- **Overconfidence**: being more sure than your accuracy justifies. Engineers routinely underestimate tasks. *Counter:* track your predictions and compare them to results (see the Decision Journal).
- **Hindsight bias**: "I knew it all along." Outcomes feel predictable after the fact. *Counter:* write down predictions before you know the outcome.
- **Fundamental attribution error**: blaming others' mistakes on character ("they're careless") but your own on circumstances ("I was rushed"). *Counter:* assume good intent and look at the system (blameless post-mortems).

## Debiasing is about process

Willpower doesn't fix biases. Structures do: checklists, independent estimates, pre-mortems, written predictions, devil's advocates, and decision journals.
`,
    takeaways: [
      'Biases are systematic and universal; knowing them is not immunity.',
      'Ask what evidence would change your mind.',
      'Estimate independently to avoid anchoring.',
      'Fix biases with processes, not willpower.',
    ],
    quiz: [
      {
        q: 'A team keeps funding a failing project because "we\'ve already put $2M into it." Which bias?',
        options: ['Anchoring', 'Sunk cost fallacy', 'Availability', 'Hindsight'],
        answer: 1,
        why: 'Past spending can\'t be recovered and shouldn\'t drive the decision. Only future costs and benefits matter.',
      },
      {
        q: 'In estimation, the tech lead says "this feels like 2 weeks" first, and everyone lands near 2 weeks. Which bias?',
        options: ['Confirmation', 'Anchoring', 'Survivorship', 'Overconfidence'],
        answer: 1,
        why: 'The first number becomes an anchor. Independent estimates avoid this.',
      },
      {
        q: 'What is the most reliable way to reduce the impact of biases?',
        options: [
          'Try harder to be objective',
          'Learn the list of biases',
          'Use processes like independent estimates and written predictions',
          'Trust your gut',
        ],
        answer: 2,
        why: 'Biases operate below conscious awareness, so external structures work better than willpower.',
      },
    ],
    practice:
      'Pick a belief you hold strongly about your work. Write down what evidence would convince you it\'s wrong, then spend five minutes looking for it.',
    cards: [
      { id: 'c-ct-bi-1', front: 'Confirmation bias, and a counter?', back: 'Favouring evidence that supports existing beliefs. Counter: ask what would change your mind and seek it.' },
      { id: 'c-ct-bi-2', front: 'Sunk cost fallacy, and a counter?', back: 'Continuing because of past investment. Counter: "Would I start this today, knowing what I know?"' },
      { id: 'c-ct-bi-3', front: 'Survivorship bias?', back: 'Drawing conclusions only from successes while ignoring the failures you can\'t see.' },
      { id: 'c-ct-bi-4', front: 'Availability heuristic?', back: 'Judging likelihood by how easily examples come to mind rather than by base rates.' },
      { id: 'c-ct-bi-5', front: 'Fundamental attribution error?', back: 'Blaming others\' failures on character but your own on circumstances.' },
    ],
  },
  {
    id: 'ct-evidence',
    unit: 'Evidence',
    title: 'Evidence and statistics',
    minutes: 11,
    summary: 'Correlation, base rates, sample sizes: the tools for not being fooled by numbers.',
    body: `
Numbers feel objective, but they are easy to misread. A handful of concepts will protect you from most statistical mistakes.

## Correlation is not causation

Two things moving together might mean:
- A causes B,
- B causes A,
- a third factor C causes both (a **confounder**),
- or it's coincidence.

Ice cream sales and drownings both rise in summer; heat drives both. Teams that write more tests ship fewer bugs, but maybe experienced teams do both. To establish causation you need experiments (A/B tests) or very careful analysis.

## Base rates

Always ask: **how common is this in general?**

A test for a rare condition (1 in 1,000 people) is 99% accurate. You test positive. What's the chance you have it? Out of 100,000 people, 100 have it and 99 test positive. Of the 99,900 who don't, 1% (about 999) also test positive. So only 99 of about 1,098 positives are real: **roughly 9%**.

Ignoring the base rate (here, rarity) is one of the most common reasoning errors. It applies to alerts and monitoring too: a "99% accurate" alert on a rare event will mostly fire false alarms.

## Samples

- **Small samples are noisy.** A feature that converts 3/10 vs 1/10 doesn't prove much.
- **Selection bias**: is the sample representative? Survey responses come from people who chose to respond.
- **Regression to the mean**: extreme results tend to be followed by more ordinary ones. The team that had a record week will probably have a more normal next week, with or without your intervention.

## Read numbers critically

- **Relative vs absolute**: "Doubles your risk" might mean going from 1 in a million to 2 in a million.
- **Averages hide distributions**: an average latency of 100 ms can hide a p99 of 5 seconds. Look at percentiles.
- **Ask for the denominator**: "500 bugs fixed!" Out of how many? Over what time?
`,
    takeaways: [
      'Correlation can come from causation, reverse causation, a confounder, or chance.',
      'Always start from the base rate.',
      'Small and self-selected samples mislead.',
      'Percentiles and absolute numbers beat averages and relative changes.',
    ],
    quiz: [
      {
        q: 'Cities with more firefighters have more fire damage. The best explanation?',
        options: [
          'Firefighters cause damage',
          'A confounder: bigger cities have both more fires and more firefighters',
          'Coincidence',
          'Reverse causation is impossible here',
        ],
        answer: 1,
        why: 'City size (and the number of fires) drives both variables.',
      },
      {
        q: 'An alert is "95% accurate" for a failure that happens on 1 in 1,000 checks. When it fires, the failure is most likely:',
        options: ['Real (95% likely)', 'Real (about 50% likely)', 'A false alarm', 'Impossible to say anything'],
        answer: 2,
        why: 'Per 1,000 checks: about 1 true positive vs about 50 false positives (5% of 999). Most alerts are false.',
      },
      {
        q: 'Average API latency is 80 ms. What should you also look at?',
        options: ['The median only', 'p95 / p99 percentiles', 'The minimum', 'Nothing more'],
        answer: 1,
        why: 'Averages hide tail latency. The p99 is what your unluckiest users experience.',
      },
    ],
    practice:
      'Find a statistic in a news article, a vendor pitch or a dashboard you use. Ask: what is the denominator, what is the base rate, and could a confounder explain it?',
    cards: [
      { id: 'c-ct-ev-1', front: 'Four explanations for a correlation?', back: 'A causes B, B causes A, a confounder causes both, or chance.' },
      { id: 'c-ct-ev-2', front: 'Base rate neglect?', back: 'Ignoring how common something is in general when interpreting specific evidence.' },
      { id: 'c-ct-ev-3', front: 'Regression to the mean?', back: 'Extreme results tend to be followed by more average ones, regardless of any intervention.' },
      { id: 'c-ct-ev-4', front: 'Why prefer percentiles to averages for latency?', back: 'Averages hide the tail; p95/p99 show what slow requests actually look like.' },
    ],
  },
  {
    id: 'ct-first-principles',
    unit: 'Mind',
    title: 'First-principles thinking',
    minutes: 7,
    summary: 'Break a problem down to what you know is true, then reason up from there.',
    body: `
Most of the time we reason by **analogy**: "this is like that, so do what worked there." That's efficient, and usually right. But it carries over the assumptions of the original situation, and it can't produce answers that are genuinely new.

**First-principles thinking** means breaking a problem into its most basic known truths and rebuilding a solution from them.

## How to do it

1. **State the problem and the current assumption.** "Builds take 20 minutes; that's just how CI is."
2. **Break it down.** What actually happens in those 20 minutes? Install dependencies (8 min), compile (4), test (7), upload (1).
3. **Question each part.** Must dependencies be reinstalled every time? Must every test run on every change? Why serially?
4. **Rebuild from the fundamentals.** Cache dependencies, run only affected tests, parallelise: now it's 4 minutes.

## The "five whys"

A simple tool for getting below the surface. Ask "why?" repeatedly:

- The site went down. *Why?* The database ran out of connections.
- *Why?* A new job opened connections without closing them.
- *Why?* The connection helper doesn't close on error.
- *Why?* It has no tests for the error path.
- *Why?* We have no standard for testing failure modes.

The fix moves from "restart the database" to "change how we test failure paths."

## When to use it

First principles is slow and effortful. Use it for important problems, problems where the conventional answer is clearly failing, and when you hear "that's just how it is." For everything else, analogy and convention are fine.
`,
    takeaways: [
      'Analogy is efficient but inherits hidden assumptions.',
      'Decompose into fundamentals, question each, rebuild.',
      'Five whys moves fixes from symptoms to root causes.',
      'Save first principles for problems that deserve it.',
    ],
    quiz: [
      {
        q: 'What is the main weakness of reasoning purely by analogy?',
        options: [
          'It is slow',
          'It carries over assumptions that may not apply',
          'It requires maths',
          'It never works',
        ],
        answer: 1,
        why: 'Analogy assumes the new situation matches the old one, including constraints that may no longer exist.',
      },
      {
        q: 'The purpose of the "five whys" is to:',
        options: ['Assign blame', 'Find a root cause behind a symptom', 'Produce five solutions', 'Delay decisions'],
        answer: 1,
        why: 'Each "why" goes one level deeper, from what happened toward the systemic cause.',
      },
    ],
    practice:
      'Pick one "that\'s just how it is" in your workflow (slow builds, long meetings, flaky tests). Break it into parts and question each one.',
    cards: [
      { id: 'c-ct-fp-1', front: 'First-principles thinking?', back: 'Breaking a problem into basic known truths and rebuilding a solution from them, rather than copying by analogy.' },
      { id: 'c-ct-fp-2', front: 'The five whys?', back: 'Asking "why?" repeatedly to move from a symptom to its root cause.' },
    ],
  },
  {
    id: 'ct-steelman',
    unit: 'Mind',
    title: 'Steelmanning and intellectual humility',
    minutes: 6,
    summary: 'Engage with the strongest version of views you disagree with.',
    body: `
The opposite of a straw man is a **steelman**: restating the other side's position in its strongest, most charitable form, ideally so well that they say "yes, that's exactly what I mean."

## Why it matters

- You might be wrong. Steelmanning is how you find out.
- If you're right, defeating the strong version is far more convincing than defeating a weak one.
- People listen to you once they feel understood.

## How to steelman

1. **Restate** their position in your own words and check: "So your concern is...?"
2. **Find the best reasons** someone smart and well-meaning would hold it.
3. **Acknowledge** what's true or valuable in it.
4. **Then** explain where and why you disagree.

> Rapoport's rules: restate the other view so clearly they wish they'd put it that way, list points of agreement, mention anything you learned, and only then rebut.

## Intellectual humility

- Hold beliefs with **degrees of confidence**, not all-or-nothing. "I'm about 70% sure" is more honest, and easier to update, than "I'm right."
- Separate your **identity** from your ideas. Being wrong about a technical choice says nothing about your worth.
- Say "I don't know" and "I changed my mind" out loud. On good teams, this builds trust.
- **Strong opinions, loosely held**: commit to a view so you can act and test it, and update quickly when evidence arrives.
`,
    takeaways: [
      'Steelman: restate the opposing view in its strongest form.',
      'Defeating the strongest version is what actually persuades.',
      'Hold beliefs with explicit confidence levels.',
      'Changing your mind on good evidence is a strength.',
    ],
    quiz: [
      {
        q: 'A colleague wants to adopt TypeScript; you think it adds overhead. Which response is a steelman?',
        options: [
          '"You just like new shiny things."',
          '"So you\'re saying we should spend months rewriting everything?"',
          '"Your concern is that we keep shipping type bugs that tests miss, and types would catch them earlier and make refactors safer. Is that right?"',
          '"TypeScript is popular, so fine."',
        ],
        answer: 2,
        why: 'It states the strongest reasons for their view and checks understanding before disagreeing.',
      },
      {
        q: '"I\'m about 70% confident" is better than "I\'m sure" because:',
        options: [
          'It sounds less arrogant',
          'It is more accurate and makes updating on new evidence easier',
          'It avoids responsibility',
          'Numbers are always better',
        ],
        answer: 1,
        why: 'Calibrated confidence reflects uncertainty honestly and makes it natural to adjust.',
      },
    ],
    practice:
      'Pick a technical or work debate where you have a firm view. Write the strongest possible case for the other side, one the other side would agree with.',
    cards: [
      { id: 'c-ct-sm-1', front: 'What is steelmanning?', back: 'Restating an opposing view in its strongest, most charitable form before responding.' },
      { id: 'c-ct-sm-2', front: '"Strong opinions, loosely held"?', back: 'Commit to a view so you can act and test it, but update quickly when evidence contradicts it.' },
    ],
  },
]
