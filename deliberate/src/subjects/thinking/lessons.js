export const lessons = [
  {
    id: 'ct-arguments',
    unit: 'Reasoning',
    title: 'Anatomy of an argument',
    summary: 'Break any claim into its reasons and its conclusion, then look for what it quietly assumes.',
    ideas: ['Premises and a conclusion', 'Hidden premises'],
    body: `
Most disagreements get easier once you lay the argument out plainly. An argument is a set of reasons, called **premises**, offered in support of a claim, called the **conclusion**.

## Premises and a conclusion

Take this:

> "We should rewrite the service in Go. It's slow, and Go is fast."

Written out:

- Premise 1: The service is slow.
- Premise 2: Go is fast.
- Conclusion: We should rewrite the service in Go.

Find the conclusion first. Ask "what is this person trying to get me to believe or do?" Then ask "what reasons are they giving?" Words like **so**, **therefore** and **we should** usually point to the conclusion; **because** and **since** usually point to premises.

## Hidden premises

Laid out like that, there's a gap. Being slow and Go being fast doesn't get you to "rewrite it in Go" unless you also believe something unstated: **"the language is what's making it slow."**

That's a **hidden premise**: an assumption the argument needs but doesn't say. Hidden premises are where weak arguments usually hide, because nobody examines what nobody said. Here, the slowness might come from the database, and a rewrite would cost months.

To find one, ask: **"What else would have to be true for this conclusion to follow?"**
`,
    takeaways: [
      'An argument is premises (reasons) offered for a conclusion (the claim).',
      'Find the conclusion first, then the reasons given for it.',
      'Ask what else would have to be true. That unstated assumption is often the weak point.',
    ],
    quiz: [
      {
        q: '"Since our competitor added dark mode and their signups rose, we should add dark mode." What is the conclusion?',
        options: ['Our competitor added dark mode', 'Their signups rose', 'We should add dark mode', 'Dark mode is popular'],
        answer: 2,
        why: 'The conclusion is what the speaker wants you to accept or do. "Since" introduces the reasons.',
      },
      {
        q: 'In the same argument, what is the main hidden premise?',
        options: [
          'Dark mode is easy to build',
          'Dark mode caused their signups to rise',
          'Users like dark colours',
          'Competitors know best',
        ],
        answer: 1,
        why: 'Without assuming cause and effect, the competitor\'s signups say nothing about what dark mode would do for you.',
      },
      {
        q: 'Which question best uncovers a hidden premise?',
        options: [
          'Who is making this argument?',
          'What else would have to be true for the conclusion to follow?',
          'How many people agree?',
          'Is the conclusion popular?',
        ],
        answer: 1,
        why: 'A hidden premise is exactly the extra thing that must be true for the reasons to lead to the conclusion.',
      },
    ],
    practice:
      'Take an opinion you hold strongly about work or technology. Write it as numbered premises and a conclusion, then write the hidden premise it depends on.',
    cards: [
      { id: 'c-ct-ar-1', front: 'What are premises and a conclusion?', back: 'Premises are the reasons offered; the conclusion is the claim they are meant to support.' },
      { id: 'c-ct-ar-3', front: 'What is a hidden premise?', back: 'An unstated assumption an argument needs in order to work. Often its weakest point.' },
    ],
  },
  {
    id: 'ct-valid-sound',
    unit: 'Reasoning',
    title: 'Valid, sound and strong',
    summary: 'Separate whether an argument\'s structure works from whether its facts are true.',
    ideas: ['Validity: does the conclusion follow?', 'Soundness: valid, with true premises', 'Inductive strength: how likely, not proven'],
    body: `
Once an argument is laid out, there are two separate questions: **does the reasoning work**, and **are the reasons true**? Mixing them up is a common source of confusion.

## Validity

An argument is **valid** if, *assuming* the premises are true, the conclusion has to be true. Validity is only about structure.

"All cats are mammals. My pet is a mammal. So my pet is a cat." This is **invalid**: both premises can be true while the conclusion is false (your pet might be a dog).

## Soundness

An argument is **sound** if it is valid **and** its premises really are true.

"All birds can fly. Penguins are birds. So penguins can fly." This is valid (if the premises were true, the conclusion would follow) but **not sound**, because not all birds can fly.

So you can attack an argument in two places: show the conclusion doesn't follow, or show a premise is false.

## Inductive strength

Most real-world reasoning isn't about certainty. "Every Friday deploy this quarter caused an incident, so the next one probably will" doesn't *prove* anything. It's **inductive**: it makes the conclusion more or less **likely**.

For inductive arguments, ask **how strong** they are: how many cases, how representative, and whether something else could explain the pattern. Asking "is this proven?" usually gets "no" and stops the conversation; "how strong is this?" keeps it useful.
`,
    takeaways: [
      'Valid: if the premises were true, the conclusion would have to be.',
      'Sound: valid and the premises are actually true.',
      'Most everyday reasoning is inductive. Judge its strength, not whether it is proven.',
    ],
    quiz: [
      {
        q: '"All cats are mammals. My pet is a mammal. So my pet is a cat." This argument is:',
        options: ['Valid and sound', 'Valid but not sound', 'Invalid', 'Inductively strong'],
        answer: 2,
        why: 'The premises can both be true while the conclusion is false, so the structure fails.',
      },
      {
        q: '"All birds can fly. Penguins are birds. So penguins can fly." This argument is:',
        options: ['Invalid', 'Valid but not sound', 'Sound', 'Circular'],
        answer: 1,
        why: 'The conclusion follows from the premises, but the first premise is false.',
      },
      {
        q: '"Our last five releases with no QA pass each had a serious bug, so the next one probably will." This is best judged by:',
        options: ['Whether it is proven', 'Its inductive strength: sample size and other explanations', 'Whether it is valid', 'Who said it'],
        answer: 1,
        why: 'It predicts what is likely, so ask how strong the evidence is, not whether it is certain.',
      },
    ],
    practice:
      'Find an argument you heard this week. Was it meant to prove something (deductive) or make it likely (inductive)? Write one way it could be attacked.',
    cards: [
      { id: 'c-ct-ar-2', front: 'Valid vs sound?', back: 'Valid: the conclusion follows if the premises are true. Sound: valid and the premises really are true.' },
      { id: 'c-ct-vs-1', front: 'Deductive vs inductive argument?', back: 'Deductive aims at certainty; inductive makes a conclusion more likely and is judged by its strength.' },
      { id: 'c-ct-vs-2', front: 'Two places to attack an argument?', back: 'Show the conclusion doesn\'t follow (invalid), or show a premise is false (unsound).' },
    ],
  },
  {
    id: 'ct-fallacies-target',
    unit: 'Reasoning',
    title: 'Fallacies: attacking the wrong target',
    summary: 'Three ways arguments go after something other than the actual claim.',
    ideas: ['Ad hominem', 'Straw man', 'The fallacy fallacy'],
    body: `
A **fallacy** is a pattern of reasoning that feels convincing but doesn't support its conclusion. This group all have the same flaw: they attack something other than the claim itself.

## Ad hominem

Attacking the **person** instead of their argument.

> "You've only been here two weeks, so your design is wrong."

Tenure says nothing about whether the design works. A close cousin is **"you too"** (tu quoque): "You can't criticise our test coverage, your project has none." That may be true, and still says nothing about whether the criticism is right.

## Straw man

Misrepresenting someone's position as something weaker or more extreme, then attacking that.

> A: "We should add some integration tests."
> B: "So you want us to stop shipping for months to write tests?"

B is arguing against a claim A never made. **The fix:** restate the other person's view and check it with them before you respond.

## The fallacy fallacy

Concluding a claim is **false** because the argument for it was bad. Someone can argue badly for something true.

> "Your only reason for using TypeScript was 'everyone uses it', which is a bad reason. So TypeScript is a bad choice."

The reasoning offered was weak; the conclusion might still be right for other reasons. Spotting a fallacy tells you the argument doesn't support the claim. It doesn't tell you the claim is wrong. Use fallacy names as private checks, not as debate weapons.
`,
    takeaways: [
      'Ad hominem attacks the person; "you too" deflects onto the critic.',
      'A straw man argues against a distorted version of the claim.',
      'A bad argument doesn\'t make its conclusion false.',
    ],
    quiz: [
      {
        q: '"Our new hire suggested PostgreSQL, but they\'re junior, so we can ignore it." Which fallacy?',
        options: ['Straw man', 'Ad hominem', 'Fallacy fallacy', 'False dilemma'],
        answer: 1,
        why: 'The suggestion is dismissed because of who made it, not on its merits.',
      },
      {
        q: 'A: "Let\'s review PRs within a day." B: "So you want us to drop everything the moment a PR opens?" Which fallacy?',
        options: ['Ad hominem', 'Straw man', 'Slippery slope', 'Circular reasoning'],
        answer: 1,
        why: 'B replaces A\'s reasonable proposal with an extreme version that\'s easier to reject.',
      },
      {
        q: 'Someone argues for a true claim using a fallacy. What follows?',
        options: [
          'The claim is false',
          'The argument doesn\'t support the claim, but the claim may still be true',
          'The person is dishonest',
          'Nothing; fallacies don\'t matter',
        ],
        answer: 1,
        why: 'Bad reasoning fails to support a claim; it doesn\'t disprove it. Assuming otherwise is the fallacy fallacy.',
      },
    ],
    practice:
      'Think of a recent disagreement. Write the other person\'s view the way they would put it, and check whether you had been arguing against a straw man.',
    cards: [
      { id: 'c-ct-fa-5', front: 'Ad hominem?', back: 'Attacking the person making the argument rather than the argument itself.' },
      { id: 'c-ct-fa-1', front: 'Straw man?', back: 'Misrepresenting someone\'s position to make it easier to attack.' },
      { id: 'c-ct-fa-4', front: 'Fallacy fallacy?', back: 'Concluding a claim is false because the argument for it was fallacious.' },
    ],
  },
  {
    id: 'ct-fallacies-structure',
    unit: 'Reasoning',
    title: 'Fallacies: broken structure',
    summary: 'Arguments that hide options, invent chains of consequences, or assume what they set out to prove.',
    ideas: ['False dilemma', 'Slippery slope', 'Circular reasoning'],
    body: `
These fallacies don't attack anyone. The problem is in the shape of the argument itself.

## False dilemma

Presenting two options as the only ones, when more exist.

> "Either we rewrite the whole thing or we live with this mess forever."

There's usually a third option, and often several: refactor the worst module, put a new interface in front of the old code, rewrite one piece at a time. **The fix:** whenever you hear "either... or...", ask "what else could we do?"

## Slippery slope

Claiming one step will inevitably lead to an extreme outcome, without showing why each step would follow.

> "If we let people work from home on Fridays, soon nobody will come in and the company will fall apart."

Some chains of consequences are real, and thinking ahead is good (see second-order thinking). The fallacy is asserting the chain without evidence that each link holds. **The fix:** ask for the reasons behind each step, one at a time.

## Circular reasoning

The conclusion is assumed in one of the premises, so the argument goes in a circle.

> "This framework is the most reliable because it never fails, and it never fails because it's so reliable."

No new evidence enters the argument. Circular reasoning is easy to miss when the words change: "We should trust this vendor because they're trustworthy" can be rephrased many ways. **The fix:** ask "what independent evidence supports this?"
`,
    takeaways: [
      'False dilemma: two options offered when more exist.',
      'Slippery slope: an extreme chain of consequences asserted without evidence for each step.',
      'Circular reasoning: the conclusion is smuggled into the premises.',
    ],
    quiz: [
      {
        q: '"We can either ship on Friday with bugs or delay by three months." Which fallacy?',
        options: ['Slippery slope', 'False dilemma', 'Circular reasoning', 'Straw man'],
        answer: 1,
        why: 'Other options exist: ship less, ship behind a flag, delay by a week.',
      },
      {
        q: '"If we allow one exception to the code-review rule, soon nobody will review anything." Which fallacy?',
        options: ['Slippery slope', 'Ad hominem', 'False dilemma', 'Circular reasoning'],
        answer: 0,
        why: 'It asserts an escalating chain without showing why each step would follow.',
      },
      {
        q: '"We know the estimate is accurate because it came from our estimation process, which produces accurate estimates." Which fallacy?',
        options: ['Straw man', 'Circular reasoning', 'Slippery slope', 'False dilemma'],
        answer: 1,
        why: 'The process is trusted because it\'s accurate, and the estimate is accurate because of the process. No independent evidence.',
      },
    ],
    practice:
      'Write down a choice you\'re facing that feels like "A or B". List three more options, even ones you wouldn\'t pick.',
    cards: [
      { id: 'c-ct-fa-3', front: 'False dilemma?', back: 'Presenting only two options when more exist.' },
      { id: 'c-ct-fs-1', front: 'Slippery slope?', back: 'Claiming one step will lead to an extreme outcome without showing why each step would follow.' },
      { id: 'c-ct-fs-2', front: 'Circular reasoning?', back: 'The conclusion is assumed in the premises, so no independent evidence supports it.' },
    ],
  },
  {
    id: 'ct-fallacies-evidence',
    unit: 'Reasoning',
    title: 'Fallacies: misused evidence',
    summary: 'Arguments that lean on timing, popularity or shifting standards instead of real evidence.',
    ideas: ['False cause (post hoc)', 'Appeals to authority and popularity', 'Moving the goalposts'],
    body: `
These fallacies offer something that looks like evidence but isn't.

## False cause (post hoc)

"B happened after A, so A caused B." The Latin name is *post hoc ergo propter hoc*: "after this, therefore because of this".

> "We changed the button colour and revenue went up 8%."

Many things change at once: a seasonal sales bump, a marketing campaign, a competitor's outage. Timing alone can't separate them. **The fix:** ask "what else changed?" and, when it matters, run a proper experiment (more on this in the Evidence lessons).

## Appeals to authority and popularity

Treating a claim as true because **someone important** says so, or because **everyone** does it.

> "A famous engineer says microservices are the only way to scale."
> "Every big tech company uses Kubernetes, so our three-person startup should too."

Experts are worth listening to inside their field, but the reasons matter more than the name. And what suits a company with thousands of engineers may be a burden for a team of three. **The fix:** ask "what are the actual reasons, and do they apply to us?"

## Moving the goalposts

Changing the standard of proof after it has been met.

> "It's ready once tests pass." (They pass.) "Well, once QA signs off." (QA signs off.) "Actually, we need a security review too."

Each new requirement might be reasonable, but shifting them after the fact means no evidence could ever be enough. **The fix:** agree on the criteria up front, and write them down.
`,
    takeaways: [
      'Something happening after a change doesn\'t mean the change caused it.',
      'Authority and popularity aren\'t reasons; ask for the reasons and whether they fit you.',
      'Moving the goalposts makes any evidence insufficient. Agree on criteria first.',
    ],
    quiz: [
      {
        q: '"Since we started standups, velocity went up 20%. Standups made us faster." Which fallacy?',
        options: ['Appeal to authority', 'False cause (post hoc)', 'Moving the goalposts', 'Circular reasoning'],
        answer: 1,
        why: 'Velocity rose after standups began, but many other things changed too.',
      },
      {
        q: '"Everyone in the industry uses this framework, so it must be right for our project." Which fallacy?',
        options: ['Appeal to popularity', 'Straw man', 'False dilemma', 'Ad hominem'],
        answer: 0,
        why: 'Popularity says little about fit for your team, scale and constraints.',
      },
      {
        q: 'What is the best defence against moving the goalposts?',
        options: ['Win the argument quickly', 'Agree on the success criteria before the work starts', 'Ignore new requirements', 'Ask an expert'],
        answer: 1,
        why: 'Criteria fixed in advance can\'t be shifted once they\'re met.',
      },
    ],
    practice:
      'Recall a time a change "worked". List three other things that changed around the same time and could explain the result.',
    cards: [
      { id: 'c-ct-fa-2', front: 'Post hoc ergo propter hoc?', back: '"After this, therefore because of this." Assuming that because B followed A, A caused B.' },
      { id: 'c-ct-fe-1', front: 'Appeal to authority or popularity?', back: 'Treating a claim as true because someone important says it or because many people do it, instead of on its reasons.' },
      { id: 'c-ct-fe-2', front: 'Moving the goalposts?', back: 'Changing the standard of proof after it has been met. Fix: agree on criteria up front.' },
    ],
  },
  {
    id: 'ct-biases-evidence',
    unit: 'Mind',
    title: 'Biases in how we gather evidence',
    summary: 'Your brain is selective about what it notices. Three ways that skews the evidence you base judgements on.',
    ideas: ['Confirmation bias', 'The availability heuristic', 'Survivorship bias'],
    body: `
**Cognitive biases** are systematic errors that come from mental shortcuts. Everyone has them, and knowing about them doesn't make you immune. What helps is noticing the situations where they strike, and using habits that compensate.

These three distort what evidence you see in the first place.

## Confirmation bias

Seeking, noticing and remembering evidence that supports what you already believe, and skipping what doesn't.

> You're sure your service isn't the bottleneck. You open the dashboards, find one graph that agrees, and stop looking.

**Counter:** before looking, ask "what would I expect to see if I were **wrong**?" Then look for that specifically.

## The availability heuristic

Judging how likely something is by how easily examples come to mind. Recent, vivid or emotional events feel more common than they are.

> After one dramatic outage from a config change, the team wants a two-week freeze on all config changes, even though config caused one incident in three years.

**Counter:** look up the **base rate**: how often does this actually happen?

## Survivorship bias

Drawing conclusions only from the cases that "survived" to be seen, while the failures are invisible.

> "These ten famous startups all used microservices, so microservices lead to success."

Thousands of failed startups also used microservices; nobody writes case studies about them. **Counter:** ask "what's missing from this sample, and why?"
`,
    takeaways: [
      'Confirmation bias: look for what you\'d expect to see if you were wrong.',
      'Availability: vivid and recent events feel likelier than they are; check base rates.',
      'Survivorship: ask what\'s missing from the sample.',
    ],
    quiz: [
      {
        q: 'After a well-publicised plane crash, more people choose to drive, which is far riskier. Which bias?',
        options: ['Survivorship bias', 'The availability heuristic', 'Confirmation bias', 'Anchoring'],
        answer: 1,
        why: 'A vivid, recent event makes flying feel more dangerous than its actual base rate.',
      },
      {
        q: '"Every successful founder I\'ve read about dropped out of college, so dropping out helps." Which bias?',
        options: ['Survivorship bias', 'Availability', 'Hindsight bias', 'Sunk cost'],
        answer: 0,
        why: 'You only hear about the successes. The many dropouts who failed aren\'t interviewed.',
      },
      {
        q: 'What is the most useful counter to confirmation bias?',
        options: [
          'Collect more evidence that supports your view',
          'Ask what you\'d expect to see if you were wrong, and look for it',
          'Trust your first impression',
          'Ask someone who agrees with you',
        ],
        answer: 1,
        why: 'Deliberately seeking disconfirming evidence breaks the habit of only seeing what fits.',
      },
    ],
    practice:
      'Pick a belief you hold about your work. Write what you would expect to see if it were wrong, then spend five minutes looking for exactly that.',
    cards: [
      { id: 'c-ct-bi-1', front: 'Confirmation bias, and a counter?', back: 'Favouring evidence that supports existing beliefs. Counter: ask what you\'d see if you were wrong, and look for it.' },
      { id: 'c-ct-bi-4', front: 'Availability heuristic?', back: 'Judging likelihood by how easily examples come to mind rather than by base rates.' },
      { id: 'c-ct-bi-3', front: 'Survivorship bias?', back: 'Drawing conclusions only from successes while ignoring the failures you can\'t see.' },
    ],
  },
  {
    id: 'ct-biases-judgement',
    unit: 'Mind',
    title: 'Biases in how we judge',
    summary: 'Even with the right evidence, first numbers, confidence and hindsight bend our judgements.',
    ideas: ['Anchoring', 'Overconfidence', 'Hindsight bias'],
    body: `
These biases kick in when you weigh the evidence you have.

## Anchoring

Relying too heavily on the first number you hear. Later estimates get pulled toward it, even when it's arbitrary.

> In a planning meeting, the tech lead says "this feels like two weeks" first. Everyone's estimate lands near two weeks.

The same happens in salary negotiations, pricing and budgets. **Counter:** make estimates **independently** before anyone says a number. This is the reason planning poker has everyone reveal their cards at once.

## Overconfidence

Being more certain than your track record justifies. A classic finding: when people say they're 90% sure, they're right much less than 90% of the time. In software it shows up as estimates that are almost always too short.

> "I'm sure this migration will take a day." It takes a week, again.

**Counter:** write down predictions with a confidence level, then check them later. The Decision Journal and calibration practice in this app exist for this.

## Hindsight bias

After you know the outcome, it feels as if you knew it all along. "Of course that launch failed; it was obvious."

This makes past decisions look worse (or better) than they really were, and it stops you learning: if everything was obvious, there's nothing to learn. **Counter:** record what you expected **before** the outcome is known, then compare.
`,
    takeaways: [
      'Anchoring: the first number pulls everyone toward it. Estimate independently first.',
      'Overconfidence: our certainty runs ahead of our accuracy. Track predictions.',
      'Hindsight bias: outcomes feel predictable afterwards. Write expectations down beforehand.',
    ],
    quiz: [
      {
        q: 'A recruiter opens with a high salary figure, and your counter-offer ends up much higher than you planned. Which bias?',
        options: ['Overconfidence', 'Anchoring', 'Hindsight bias', 'Availability'],
        answer: 1,
        why: 'The first number becomes a reference point that pulls later judgements toward it.',
      },
      {
        q: 'You said you were 90% confident on ten predictions and five came true. This suggests:',
        options: ['Good calibration', 'Overconfidence', 'Underconfidence', 'Bad luck only'],
        answer: 1,
        why: 'At 90% confidence you\'d expect about nine to come true. Five means your certainty ran ahead of your accuracy.',
      },
      {
        q: 'What is the best protection against hindsight bias?',
        options: ['Ask an expert afterwards', 'Write down what you expect before the outcome is known', 'Avoid making predictions', 'Review only failures'],
        answer: 1,
        why: 'A written prediction can\'t be rewritten by memory once you know what happened.',
      },
    ],
    practice:
      'Before your next estimate or decision, write your prediction and how confident you are (as a percentage). Set a reminder to check it.',
    cards: [
      { id: 'c-ct-bj-1', front: 'Anchoring, and a counter?', back: 'Over-relying on the first number heard. Counter: estimate independently before anyone shares a number.' },
      { id: 'c-ct-bj-2', front: 'Overconfidence?', back: 'Being more certain than your accuracy justifies. Counter: record predictions with confidence levels and check them.' },
      { id: 'c-ct-bj-3', front: 'Hindsight bias?', back: '"I knew it all along." Outcomes feel predictable afterwards. Counter: write expectations down beforehand.' },
    ],
  },
  {
    id: 'ct-biases-people',
    unit: 'Mind',
    title: 'Biases about effort and people',
    summary: 'Why we keep investing in failing projects, judge others harshly, and why process beats willpower.',
    ideas: ['The sunk cost fallacy', 'Fundamental attribution error', 'Debias with process, not willpower'],
    body: `
## The sunk cost fallacy

Continuing something because of what you've already put in, rather than because of what it will bring from now on.

> "We've spent eight months on our custom auth system. It keeps failing security reviews, but we've come too far to switch to an off-the-shelf one."

The eight months are spent whichever path you choose. Only the **future** costs and benefits differ. **Counter:** ask, "Knowing what I know now, would I start this today?" If not, past effort isn't a reason to continue.

## Fundamental attribution error

Explaining other people's mistakes by their **character** ("they're careless") but your own by **circumstances** ("I was rushed").

> A colleague misses a deadline: "they're disorganised." You miss one the next week: "that sprint was chaos."

This damages teams, because it points blame at people instead of the system that made the mistake easy. **Counter:** assume good intent, and ask what about the situation made the mistake likely. Blameless post-mortems are built on this.

## Debias with process, not willpower

Biases work below conscious awareness, so "trying harder to be objective" barely helps. What works is **structure** that does the correcting for you:

- Estimate independently before discussing (against anchoring).
- Write predictions down (against hindsight and overconfidence).
- Assign someone to argue the other side (against confirmation bias).
- Run a pre-mortem before big projects (against overconfidence).
`,
    takeaways: [
      'Sunk cost: only future costs and benefits matter. Would you start this today?',
      'Attribution error: look at the situation before blaming the person.',
      'Counter biases with routines and checklists, not willpower.',
    ],
    quiz: [
      {
        q: 'A team keeps funding a failing project because "we\'ve already put $2M into it." Which bias?',
        options: ['Anchoring', 'Sunk cost fallacy', 'Hindsight bias', 'Availability'],
        answer: 1,
        why: 'The $2M is gone either way. The decision should rest on future costs and benefits.',
      },
      {
        q: 'You think a colleague who broke the build is careless, but when you break it you blame a flaky test. Which bias?',
        options: ['Fundamental attribution error', 'Confirmation bias', 'Survivorship bias', 'Overconfidence'],
        answer: 0,
        why: 'Others\' failures get attributed to character, your own to circumstances.',
      },
      {
        q: 'What is the most reliable way to reduce the effect of biases?',
        options: ['Learn the list of biases', 'Try harder to be objective', 'Use routines like independent estimates and written predictions', 'Trust your gut'],
        answer: 2,
        why: 'Biases operate below awareness, so external structure works better than willpower.',
      },
    ],
    practice:
      'Name one project or habit you continue mainly because of effort already spent. Answer honestly: would you start it today?',
    cards: [
      { id: 'c-ct-bi-2', front: 'Sunk cost fallacy, and a counter?', back: 'Continuing because of past investment. Counter: "Would I start this today, knowing what I know?"' },
      { id: 'c-ct-bi-5', front: 'Fundamental attribution error?', back: 'Blaming others\' failures on character but your own on circumstances.' },
      { id: 'c-ct-bp-1', front: 'Why debias with process rather than willpower?', back: 'Biases act below awareness; routines like independent estimates and written predictions correct for them automatically.' },
    ],
  },
  {
    id: 'ct-first-principles',
    unit: 'Mind',
    title: 'First-principles thinking',
    summary: 'Break a problem down to what you know is true, then reason up from there.',
    ideas: ['Analogy vs first principles', 'Decompose, question, rebuild', 'The five whys'],
    body: `
## Analogy vs first principles

Most of the time we reason by **analogy**: "this is like that, so do what worked there." It's fast and usually right. But it carries over the assumptions of the original situation, including ones that no longer apply.

**First-principles thinking** breaks a problem into basic facts you know are true, then builds a solution up from them. It's slower, so save it for important problems, or when you hear "that's just how it is."

## Decompose, question, rebuild

1. **State the problem and the assumption.** "CI takes 20 minutes; that's just how CI is."
2. **Break it down.** What actually happens? Install dependencies (8 min), compile (4), run all tests (7), upload (1).
3. **Question each part.** Must dependencies be reinstalled every time? Must every test run on every change? Why does everything run one after another?
4. **Rebuild.** Cache dependencies, run only the tests affected by the change, and run jobs in parallel: now it takes 4 minutes.

## The five whys

A simple way to get below the surface of a problem: keep asking "why?"

- The site went down. *Why?* The database ran out of connections.
- *Why?* A new job opened connections and didn't close them.
- *Why?* The connection helper doesn't close on errors.
- *Why?* Its error path was never tested.
- *Why?* We have no habit of testing failure paths.

The fix moves from "restart the database" to "start testing failure paths." Five is a rule of thumb; stop when you reach something you can change that prevents the whole class of problem.
`,
    takeaways: [
      'Analogy is efficient but inherits hidden assumptions.',
      'Decompose into parts, question each, then rebuild.',
      'Keep asking "why?" until you reach a cause you can fix at the root.',
    ],
    quiz: [
      {
        q: 'What is the main weakness of reasoning purely by analogy?',
        options: ['It is slow', 'It carries over assumptions that may not apply', 'It requires data', 'It never works'],
        answer: 1,
        why: 'Analogy assumes the new situation matches the old one, including constraints that may no longer exist.',
      },
      {
        q: 'In first-principles thinking, what comes right after breaking a problem into parts?',
        options: ['Copying a known solution', 'Questioning whether each part is really necessary', 'Picking the cheapest part', 'Asking for approval'],
        answer: 1,
        why: 'The insight comes from challenging each part instead of accepting it as given.',
      },
      {
        q: 'When should you stop asking "why?" in a five-whys analysis?',
        options: [
          'After exactly five questions',
          'When you reach a cause you can change that prevents the whole class of problem',
          'When you find someone to blame',
          'At the first technical cause',
        ],
        answer: 1,
        why: 'Five is a rule of thumb. The goal is a root cause worth fixing, not a fixed count.',
      },
    ],
    practice:
      'Pick one "that\'s just how it is" in your work: slow builds, long meetings, flaky tests. Break it into parts and question each one.',
    cards: [
      { id: 'c-ct-fp-1', front: 'First-principles thinking?', back: 'Breaking a problem into basic known truths and rebuilding a solution from them, rather than copying by analogy.' },
      { id: 'c-ct-fp-2', front: 'The five whys?', back: 'Asking "why?" repeatedly to move from a symptom to a root cause you can fix.' },
    ],
  },
  {
    id: 'ct-steelman',
    unit: 'Mind',
    title: 'Steelmanning and intellectual humility',
    summary: 'Engage with the strongest version of views you disagree with, and hold your own with honest confidence.',
    ideas: ['Steelmanning', 'Confidence levels, not certainty', 'Strong opinions, loosely held'],
    body: `
## Steelmanning

The opposite of a straw man. **Steelmanning** means restating the other side's view in its strongest, most charitable form, ideally so well that they say "yes, that's exactly what I mean."

A colleague wants to adopt TypeScript and you think it adds overhead. A steelman: "Your concern is that type bugs keep slipping past our tests, and types would catch them earlier and make big refactors safer. Is that right?"

Why bother? You might be wrong, and this is how you find out. And if you're right, beating the strong version is far more convincing. People also listen once they feel understood.

A useful order, from Rapoport's rules: restate their view, say what you agree with, mention anything you learned, and only then disagree.

## Confidence levels, not certainty

Hold beliefs with **degrees of confidence**. "I'm about 70% sure this is the bottleneck" is more honest than "this is the bottleneck", and much easier to update when new evidence arrives.

It also helps to separate your **identity** from your ideas. Being wrong about a technical choice says nothing about your worth, and saying "I changed my mind" out loud builds trust on good teams.

## Strong opinions, loosely held

You still have to act. Commit to a clear view so you can test it, and update quickly when the evidence turns. Indecision and stubbornness are both failures; the goal is to be **decisive and correctable**.
`,
    takeaways: [
      'Steelman: restate the other view so well they\'d agree with it, then respond.',
      'Hold beliefs with explicit confidence levels, and keep your identity out of them.',
      'Commit to a view to act on it, and change it when the evidence changes.',
    ],
    quiz: [
      {
        q: 'Which response is a steelman of "we should adopt TypeScript"?',
        options: [
          '"You just like new things."',
          '"So you want months of rewriting?"',
          '"Your concern is that type bugs slip past tests, and types would catch them earlier. Is that right?"',
          '"TypeScript is popular, so fine."',
        ],
        answer: 2,
        why: 'It states the strongest reasons for the view and checks understanding before disagreeing.',
      },
      {
        q: 'Why is "I\'m about 70% sure" often better than "I\'m sure"?',
        options: ['It sounds modest', 'It reflects uncertainty honestly and makes updating easier', 'It avoids responsibility', 'Numbers always win arguments'],
        answer: 1,
        why: 'Calibrated confidence describes what you actually know, and leaves room to change your mind.',
      },
      {
        q: '"Strong opinions, loosely held" means:',
        options: [
          'Never change your mind',
          'Avoid having opinions',
          'Commit to a view so you can act, and update it quickly when evidence changes',
          'Agree with whoever argues hardest',
        ],
        answer: 2,
        why: 'It combines decisiveness with openness to evidence.',
      },
    ],
    practice:
      'Pick a debate where you hold a firm view. Write the strongest case for the other side, one its supporters would sign.',
    cards: [
      { id: 'c-ct-sm-1', front: 'What is steelmanning?', back: 'Restating an opposing view in its strongest, most charitable form before responding.' },
      { id: 'c-ct-sm-2', front: '"Strong opinions, loosely held"?', back: 'Commit to a view so you can act and test it, but update quickly when evidence contradicts it.' },
    ],
  },
  {
    id: 'ct-causation',
    unit: 'Evidence',
    title: 'Correlation and causation',
    summary: 'Two things moving together can have four different explanations. Here\'s how to tell them apart.',
    ideas: ['Four explanations for a correlation', 'Confounders', 'Experiments test causes'],
    body: `
## Four explanations for a correlation

When two things rise and fall together, there are four possibilities:

1. **A causes B.**
2. **B causes A** (reverse causation).
3. **Something else causes both** (a confounder).
4. **Coincidence.** With enough data, some things line up by chance.

Your first instinct usually jumps to option 1. Make a habit of running through all four.

> Teams that write more tests ship fewer bugs. Do tests prevent bugs (1)? Or do teams that already care about quality write more tests (3)?

## Confounders

A **confounder** is a hidden factor that drives both things. Ice cream sales and drownings both rise in summer; hot weather drives both. Cities with more firefighters have more fire damage; bigger cities have more of both fires and firefighters.

To spot one, ask: **"What could cause both of these?"** Size, time of year, experience and money are common culprits.

## Experiments test causes

To know whether A causes B, change A on purpose and watch B, with everything else held equal. That's an **experiment**. In software, the common form is an **A/B test**: randomly show half of users the new version and half the old one. Random assignment spreads the confounders evenly, so a difference in results can be credited to the change.

When you can't experiment, be cautious: look for confounders, check whether the timing makes sense (the cause has to come first), and treat the conclusion as tentative.
`,
    takeaways: [
      'A correlation can come from A→B, B→A, a confounder, or chance.',
      'Ask "what could cause both?" to find confounders.',
      'Randomised experiments, like A/B tests, are the reliable way to establish cause.',
    ],
    quiz: [
      {
        q: 'Cities with more firefighters have more fire damage. The best explanation?',
        options: ['Firefighters cause damage', 'A confounder: bigger cities have more fires and more firefighters', 'Coincidence', 'Reverse causation'],
        answer: 1,
        why: 'City size drives both numbers.',
      },
      {
        q: 'People who use your app\'s advanced features renew more often. What should you consider before pushing everyone into advanced features?',
        options: [
          'Nothing; the features cause renewals',
          'That committed users may both use advanced features and renew (a confounder)',
          'That renewals are random',
          'That advanced features are expensive',
        ],
        answer: 1,
        why: 'Engagement could drive both. An experiment would tell you whether the features themselves help.',
      },
      {
        q: 'Why does random assignment in an A/B test matter?',
        options: [
          'It makes the test faster',
          'It spreads confounders evenly across groups, so differences can be credited to the change',
          'It guarantees a positive result',
          'It reduces server load',
        ],
        answer: 1,
        why: 'Without randomisation, the groups might differ in ways that explain the result.',
      },
    ],
    practice:
      'Find a claim of the form "X is linked to Y" (news, a dashboard, a meeting). Write one reverse-causation story and one confounder story for it.',
    cards: [
      { id: 'c-ct-ev-1', front: 'Four explanations for a correlation?', back: 'A causes B, B causes A, a confounder causes both, or chance.' },
      { id: 'c-ct-ca-1', front: 'What is a confounder?', back: 'A hidden factor that drives both correlated things, e.g. hot weather behind ice cream sales and drownings.' },
      { id: 'c-ct-ca-2', front: 'How do you establish causation?', back: 'A randomised experiment (e.g. an A/B test): change one thing on purpose with everything else equal.' },
    ],
  },
  {
    id: 'ct-base-rates',
    unit: 'Evidence',
    title: 'Base rates',
    summary: 'How common something is in general changes what a piece of evidence means. Work through it with real counts.',
    ideas: ['Start from the base rate', 'Count with natural frequencies', 'Rare events mean mostly false alarms'],
    body: `
## Start from the base rate

The **base rate** is how common something is in general, before you look at any specific evidence. Ignoring it is one of the most common reasoning errors there is.

> A test for a rare condition is 99% accurate. You test positive. How likely is it that you have it?

Most people say "99%". The real answer depends on how rare the condition is, and it's usually far lower.

## Count with natural frequencies

Percentages are hard to combine in your head. Imagine an actual crowd instead. Say the condition affects **1 in 1,000 people**, and picture 100,000 people:

- **100** have the condition. The test catches 99% of them: **99 true positives**.
- **99,900** don't have it. The test wrongly flags 1% of them: about **999 false positives**.

So about 1,098 people test positive, and only 99 of them are sick. The chance a positive is real is **99 ÷ 1,098, roughly 9%**.

The test is good. The condition is just so rare that false alarms from the huge healthy group outnumber the real cases. Whenever you face a "how likely, given this evidence?" question, turn it into counts like this.

## Rare events mean mostly false alarms

The same maths is everywhere in software. An alert that's "95% accurate" for a failure that happens once in 1,000 checks will fire about 50 times falsely for every real failure. That's why noisy alerts get ignored, and why fraud and spam filters for rare events need very low false-positive rates to be useful.
`,
    takeaways: [
      'Always ask how common something is before interpreting evidence.',
      'Turn percentages into counts of an imagined crowd to combine them correctly.',
      'For rare events, even accurate tests produce mostly false alarms.',
    ],
    quiz: [
      {
        q: 'A condition affects 1 in 1,000 people. A test catches 99% of cases and falsely flags 1% of healthy people. Roughly what share of positive results are real?',
        options: ['99%', 'About 50%', 'About 9%', 'About 1%'],
        answer: 2,
        why: 'Per 100,000 people: 99 true positives against about 999 false positives, so 99 out of about 1,098.',
      },
      {
        q: 'Why are natural frequencies (counts) helpful for problems like this?',
        options: [
          'They are more precise',
          'Counts of an imagined group are much easier to combine correctly than percentages',
          'They avoid needing a base rate',
          'They make the answer larger',
        ],
        answer: 1,
        why: 'Picturing how many people fall in each group makes the comparison visible.',
      },
      {
        q: 'An alert is "95% accurate" for a failure that happens on 1 in 1,000 checks. When it fires, the failure is most likely:',
        options: ['Real, 95% of the time', 'Real, about half the time', 'A false alarm', 'Impossible to say'],
        answer: 2,
        why: 'Per 1,000 checks: about 1 real failure caught against about 50 false alarms.',
      },
    ],
    practice:
      'Pick an alert or check you rely on. Estimate how often the real problem happens and how often the check misfires, then work out what share of its alarms are real.',
    cards: [
      { id: 'c-ct-ev-2', front: 'Base rate neglect?', back: 'Ignoring how common something is in general when interpreting specific evidence.' },
      { id: 'c-ct-br-1', front: 'What are natural frequencies?', back: 'Turning percentages into counts of an imagined group (e.g. 100,000 people) so they can be combined correctly.' },
      { id: 'c-ct-br-2', front: 'Why do alerts for rare events mostly fire falsely?', back: 'False positives from the huge "normal" group outnumber the few real cases, even for accurate checks.' },
    ],
  },
  {
    id: 'ct-samples',
    unit: 'Evidence',
    title: 'Samples: small, skewed and extreme',
    summary: 'Before trusting a result, check how much data it\'s based on, where it came from, and whether it was a fluke.',
    ideas: ['Small samples are noisy', 'Selection bias', 'Regression to the mean'],
    body: `
## Small samples are noisy

With little data, random chance produces big swings. Flip a fair coin ten times and getting seven heads isn't surprising at all.

> Variant B of a landing page got 6 signups from 40 visitors; variant A got 4 from 40. "B is 50% better!"

Two extra signups is well within normal noise at that size. The same goes for conclusions drawn from one or two experiences: "I tried pair programming once; it doesn't work" (a **hasty generalisation**). **Counter:** ask "how many cases is this based on?", and be most suspicious of big effects from small numbers.

## Selection bias

A sample that isn't representative of the group you care about gives misleading answers, however large it is.

> A survey of users says 90% love the product. But only users who still use the product could answer it; the ones who left never saw it.

Customer reviews, opt-in surveys, feedback from your most active users and data from only one region all have this problem. **Counter:** ask "who is missing from this data, and would they answer differently?"

## Regression to the mean

Extreme results tend to be followed by more ordinary ones, simply because extremes are partly luck.

> The worst-performing team last quarter got a new manager, and this quarter their numbers improved a lot.

Some of that improvement would probably have happened anyway. The same pattern fools people about "reward the best, punish the worst" schemes. **Counter:** compare with similar cases that didn't get the intervention.
`,
    takeaways: [
      'Big effects from small numbers are often noise.',
      'Ask who is missing from the data before trusting it.',
      'Extreme results drift back toward average on their own; compare with a control.',
    ],
    quiz: [
      {
        q: 'Variant B got 6 signups from 40 visitors and variant A got 4 from 40. What\'s the best conclusion?',
        options: ['Ship B: it\'s 50% better', 'The sample is too small to tell', 'Ship A', 'Average them'],
        answer: 1,
        why: 'A difference of two signups is within random noise at this size.',
      },
      {
        q: 'Feedback collected from your 50 most active users says the app is easy to use. What is the main problem?',
        options: ['Too few users', 'Selection bias: people who struggled are less likely to be active users', 'Users lie', 'Nothing'],
        answer: 1,
        why: 'The sample excludes the people most likely to disagree.',
      },
      {
        q: 'A salesperson has a record month and the next month is ordinary. The most likely explanation?',
        options: ['They stopped trying', 'Regression to the mean', 'Market collapse', 'Survivorship bias'],
        answer: 1,
        why: 'Record months involve some luck, so the next one tends to be closer to average.',
      },
    ],
    practice:
      'Think of a decision you made based on a few experiences ("that never works", "customers always..."). How many cases was it really based on?',
    cards: [
      { id: 'c-ct-sa-1', front: 'Why distrust big effects from small samples?', back: 'Random chance produces large swings when there is little data.' },
      { id: 'c-ct-sa-2', front: 'Selection bias?', back: 'Drawing conclusions from a sample that isn\'t representative, e.g. surveying only current users.' },
      { id: 'c-ct-ev-3', front: 'Regression to the mean?', back: 'Extreme results tend to be followed by more average ones, regardless of any intervention.' },
    ],
  },
  {
    id: 'ct-reading-numbers',
    unit: 'Evidence',
    title: 'Reading numbers critically',
    summary: 'Three questions that expose most misleading statistics.',
    ideas: ['Relative vs absolute change', 'Averages hide the spread', 'Ask for the denominator'],
    body: `
Numbers feel objective, but the way they're presented can make small things look huge and huge things look small.

## Relative vs absolute change

"Doubles your risk!" sounds alarming. But going from 1 in a million to 2 in a million also doubles the risk.

- **Relative** change: how much bigger or smaller, as a ratio ("50% fewer errors").
- **Absolute** change: the actual difference ("from 4 errors a day to 2").

Marketing and headlines love relative numbers because they sound bigger. **Ask:** "What were the actual numbers before and after?"

## Averages hide the spread

An average squeezes a whole distribution into one number. An API with an **average** latency of 100 ms might have most requests at 50 ms and a few at 5 seconds. Those slow ones are what your unluckiest users actually experience.

That's why engineers look at **percentiles**: p50 (the median), p95 and p99 show what typical and worst-case requests look like. The same applies to salaries, house prices and response times: **ask for the median and the spread, not just the average.**

## Ask for the denominator

"500 bugs fixed this quarter!" Out of how many reported? Over how many engineers? Compared with last quarter?

A number without a denominator can't be judged. 500 might be great or terrible. The same goes for "10,000 users affected" (out of how many?) and "3 incidents" (in how many deploys?).
`,
    takeaways: [
      'Ask for absolute numbers behind relative changes.',
      'Look at medians and percentiles, not just averages.',
      'A number without a denominator can\'t be judged.',
    ],
    quiz: [
      {
        q: '"Using our tool cuts your risk of a data breach in half!" What should you ask first?',
        options: ['What is the absolute risk before and after?', 'Who founded the company?', 'Is it open source?', 'How many customers do they have?'],
        answer: 0,
        why: 'Halving a 0.01% risk is very different from halving a 20% risk.',
      },
      {
        q: 'Average API latency is 80 ms. What else should you look at?',
        options: ['The minimum', 'p95 and p99 percentiles', 'Only the median', 'Nothing more'],
        answer: 1,
        why: 'Averages hide the slow tail that some users experience on every visit.',
      },
      {
        q: '"Our team closed 300 tickets this month." What is missing to judge this?',
        options: ['The team\'s names', 'A denominator: how many were opened, and compared with what', 'The ticket colours', 'Nothing'],
        answer: 1,
        why: 'Without knowing how many came in or what\'s normal, 300 can\'t be judged.',
      },
    ],
    practice:
      'Find one statistic on a dashboard or in an article you read this week. Ask the three questions: absolute or relative? average or spread? what\'s the denominator?',
    cards: [
      { id: 'c-ct-rn-1', front: 'Relative vs absolute change?', back: 'Relative: a ratio ("halves the risk"). Absolute: the actual difference ("from 2 in 1,000 to 1 in 1,000").' },
      { id: 'c-ct-ev-4', front: 'Why prefer percentiles to averages for latency?', back: 'Averages hide the tail; p95/p99 show what slow requests actually look like.' },
      { id: 'c-ct-rn-2', front: 'What should you ask of any raw count?', back: '"Out of how many?" A number without a denominator can\'t be judged.' },
    ],
  },
]
