// Sources were checked in October 2026.
const SRC = {
  edmondson: { title: 'Edmondson (1999): Psychological safety and learning behavior in work teams', url: 'https://doi.org/10.2307/2666999' },
  dewit: { title: 'de Wit, Greer & Jehn (2012): The paradox of intragroup conflict, a meta-analysis', url: 'https://doi.org/10.1037/a0024844' },
  amazon: { title: 'Amazon: 2016 letter to shareholders (disagree and commit)', url: 'https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders' },
  sdt: { title: 'Ryan & Deci (2000): Self-determination theory and the facilitation of intrinsic motivation', url: 'https://doi.org/10.1037/0003-066X.55.1.68' },
  meetings: { title: 'Perlow, Hadley & Eun (2017): Stop the meeting madness (Harvard Business Review)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
}

export const lessons = [
  {
    id: 'led-safety',
    unit: 'Teams',
    title: 'Psychological safety',
    summary: 'Teams learn and perform better when people feel safe to speak up, ask and admit mistakes.',
    ideas: ['What psychological safety is', 'How to build it'],
    body: `
## What psychological safety is

In the 1990s, Amy Edmondson studied hospital teams and found something odd: the best-performing teams appeared to **make more errors**. It turned out they didn't make more; they **reported more**. On those teams, people felt safe to admit mistakes, so problems were caught and fixed. On others, errors were hidden.

Edmondson defined **psychological safety** as a shared belief that the team is **safe for interpersonal risk-taking**: you can ask a question, admit a mistake, raise a concern or offer a half-formed idea without being punished or humiliated. In her 1999 study of manufacturing teams, psychological safety predicted **learning behaviour**, such as asking for feedback, discussing errors and seeking help, which in turn predicted performance.

Google's internal Project Aristotle, studying its own teams in the 2010s, also found psychological safety to be the most important factor among the dynamics it identified.

Psychological safety is **not** about being nice or avoiding disagreement. It's what makes candid disagreement possible. High standards plus high safety is the goal.

## How to build it

Leaders set the tone, but anyone can contribute:

- **Frame work as learning**: "This is new for all of us; we'll get things wrong, and I need to hear about problems early."
- **Admit your own mistakes and uncertainty**: "I'm not sure. What do others think?" "I got that wrong."
- **Ask questions and invite input**, especially from quieter people: "What are we missing?"
- **Respond well when people speak up.** Thank them for raising a problem, even if it's bad news or you disagree. How you react to the first bad news decides whether you hear the next.
- **Separate mistakes from blame**: run blameless reviews of failures, focusing on causes, not culprits.
`,
    takeaways: [
      'Psychological safety: the shared belief it\'s safe to take interpersonal risks.',
      'It predicts learning behaviour and performance; it\'s not the same as niceness.',
      'Build it by framing work as learning, admitting mistakes, inviting input and responding well to bad news.',
    ],
    quiz: [
      {
        q: 'Why did Edmondson\'s best hospital teams appear to make more errors?',
        options: ['They were less skilled', 'They reported more errors, because people felt safe to admit them', 'They had more patients', 'They were measured wrongly'],
        answer: 1,
        why: 'Safety led to openness about errors, so problems got caught.',
      },
      {
        q: 'Which statement about psychological safety is true?',
        options: ['It means avoiding disagreement', 'It makes candid disagreement and admitting mistakes possible', 'It means lowering standards', 'It only matters for leaders'],
        answer: 1,
        why: 'Safety and high standards go together.',
      },
      {
        q: 'A team member raises a problem that makes your plan look bad. What builds psychological safety?',
        options: ['Point out they should have raised it earlier', 'Thank them for raising it and explore it together', 'Ignore it', 'Ask who else agrees with them'],
        answer: 1,
        why: 'Reactions to bad news determine whether people speak up next time.',
      },
    ],
    practice: 'In your next meeting, admit one uncertainty and explicitly invite a quieter person\'s view. Notice what happens.',
    cards: [
      { id: 'c-led-safety-1', front: 'What is psychological safety (Edmondson)?', back: 'A shared belief that the team is safe for interpersonal risk-taking: asking, admitting mistakes, raising concerns.' },
      { id: 'c-led-safety-2', front: 'Is psychological safety about being nice?', back: 'No. It enables candid disagreement; pair it with high standards.' },
      { id: 'c-led-safety-3', front: 'Three ways to build psychological safety?', back: 'Frame work as learning, admit your own mistakes, respond appreciatively to bad news.' },
    ],
    inTheWild: [
      'Blameless incident post-mortems',
      'Aviation crew resource management, where juniors are trained to challenge captains',
    ],
    sources: [SRC.edmondson],
  },
  {
    id: 'led-clarity',
    unit: 'Teams',
    title: 'Clear goals, roles and decisions',
    summary: 'Many team problems come from people not knowing what matters, who does what or who decides.',
    ideas: ['Clear goals and why they matter', 'Who owns what', 'Who decides'],
    body: `
## Clear goals and why they matter

Teams work best when everyone can answer: **What are we trying to achieve, and why does it matter?** Without that, people optimise for different things and effort scatters.

- State a few goals, ideally measurable: "Cut checkout drop-off from 30% to 20% by June."
- Explain the **why**: "Drop-off is our biggest source of lost revenue." People make better small decisions when they understand the purpose.
- Repeat goals more often than feels necessary. Leaders tend to assume everyone remembers; they usually don't.

## Who owns what

Unclear ownership leads to work falling through the cracks ("I thought you were doing it") or being duplicated. For every important task or area, there should be **one named owner**: the person who makes sure it happens, even if many people help.

"The team will look into it" usually means nobody will. "Sam owns this; Ana and Lee will help" means it gets done.

## Who decides

Arguments often drag on because nobody knows **who makes the final call**. Before a big decision, agree:

- **Who decides** (one person, ideally).
- **Who gives input** and should be consulted.
- **Who needs to be told** afterwards.
- **By when**.

Frameworks like **RACI** (responsible, accountable, consulted, informed) or **DACI** (driver, approver, contributors, informed) formalise this. You don't need the acronyms; you need the clarity. Having one decider doesn't mean ignoring others: a good decider gathers input widely, then decides and explains why.
`,
    takeaways: [
      'Set a few clear goals, explain why, and repeat them.',
      'Give every important task one named owner.',
      'Before big decisions, agree who decides, who\'s consulted, who\'s informed, and by when.',
    ],
    quiz: [
      {
        q: 'Why explain why a goal matters, not just what it is?',
        options: ['It sounds better', 'People make better everyday decisions when they understand the purpose', 'It\'s required by HR', 'It isn\'t needed'],
        answer: 1,
        why: 'Purpose guides the many small choices no plan covers.',
      },
      {
        q: '"The team will look into the outage." What\'s the problem?',
        options: ['Nothing', 'No single owner, so it may fall through the cracks', 'Too many people', 'It\'s too formal'],
        answer: 1,
        why: 'Shared responsibility often becomes no responsibility.',
      },
      {
        q: 'A debate has gone on for three weeks. What\'s most likely missing?',
        options: ['More data', 'Clarity on who makes the final decision and by when', 'A longer meeting', 'More people'],
        answer: 1,
        why: 'Without a decider and deadline, debates drag on.',
      },
    ],
    practice: 'Pick a project you\'re on. Write its goal and why it matters, the owner of each main piece, and who decides the next big open question.',
    cards: [
      { id: 'c-led-clarity-1', front: 'Why one named owner per task?', back: 'Shared ownership leads to dropped or duplicated work.' },
      { id: 'c-led-clarity-2', front: 'Four things to agree before a big decision?', back: 'Who decides, who is consulted, who is informed, and by when.' },
      { id: 'c-led-clarity-3', front: 'What is RACI?', back: 'Responsible, accountable, consulted, informed: a way of clarifying roles.' },
    ],
    related: ['led-safety', 'dm-reversibility'],
  },
  {
    id: 'led-conflict',
    unit: 'Teams',
    title: 'Healthy conflict',
    summary: 'Disagreeing about ideas can help a team. Personal conflict almost never does.',
    ideas: ['Task vs relationship conflict', 'Disagree and commit'],
    body: `
## Task vs relationship conflict

Researchers distinguish two kinds of team conflict:

- **Task conflict**: disagreements about the work: ideas, plans, priorities, interpretations of data.
- **Relationship conflict**: personal friction: dislike, irritation, clashing personalities.

A 2012 meta-analysis by de Wit, Greer and Jehn found that **relationship conflict** was consistently linked to **worse** team outcomes: lower trust, satisfaction and performance. **Task conflict** had a more mixed relationship with performance, and could be beneficial in some situations, particularly when it was **not** accompanied by relationship conflict.

The lesson: aim for teams that argue about ideas without it becoming personal. Some ways to keep it there:

- **Debate the idea, not the person**: "I'm worried this approach won't scale" rather than "Your idea is naive."
- **Ask someone to argue the other side** deliberately, so dissent is a role, not a personal stance.
- **Steelman** other views before criticising them.
- **Watch for task conflict turning personal**, and address it early, privately.

## Disagree and commit

Debate can't go on forever. Once a decision is made, a team needs everyone to support it, including those who argued against it. Amazon's Jeff Bezos described this in his 2016 shareholder letter as **"disagree and commit"**: you can say "I disagree, and I'll commit to making this work."

For this to work:

- People must have been **genuinely heard** before the decision.
- The decider explains the reasoning.
- Once decided, people **don't undermine** it by dragging their feet or relitigating it.
- You agree when you'll **review** it, so new evidence can change course.
`,
    takeaways: [
      'Relationship conflict harms teams; task conflict can help when it stays impersonal.',
      'Debate ideas, not people; assign devil\'s advocates; steelman.',
      'Disagree and commit: be heard, then support the decision fully.',
    ],
    quiz: [
      {
        q: 'According to de Wit et al. (2012), which kind of conflict was consistently linked to worse team outcomes?',
        options: ['Task conflict', 'Relationship conflict', 'Neither', 'Both equally'],
        answer: 1,
        why: 'Personal friction consistently hurt outcomes; task conflict was mixed.',
      },
      {
        q: 'Which comment keeps disagreement on the task?',
        options: ['"That\'s a ridiculous idea."', '"I\'m worried this design won\'t handle peak traffic. Can we look at the numbers?"', '"You always overcomplicate things."', '"Typical of your team."'],
        answer: 1,
        why: 'It targets the idea with a specific concern.',
      },
      {
        q: 'What does "disagree and commit" require?',
        options: ['Never disagreeing', 'Being heard, then fully supporting the decision once it\'s made', 'Undermining decisions you dislike', 'Unanimous agreement'],
        answer: 1,
        why: 'Voice first, then commitment.',
      },
    ],
    cards: [
      { id: 'c-led-conflict-1', front: 'Task vs relationship conflict?', back: 'Task: about the work. Relationship: personal friction. Relationship conflict consistently harms teams.' },
      { id: 'c-led-conflict-2', front: 'What is "disagree and commit"?', back: 'Voice disagreement during debate, then fully support the decision once it\'s made.' },
    ],
    related: ['ct-steelman', 'fbk-curiosity'],
    sources: [SRC.dewit, SRC.amazon],
  },
  {
    id: 'led-motivation',
    unit: 'Leading people',
    title: 'What motivates people',
    summary: 'Beyond fair pay, people are driven by autonomy, growing competence and connection.',
    ideas: ['Autonomy, competence, relatedness', 'Pay matters, but differently'],
    body: `
## Autonomy, competence, relatedness

**Self-determination theory**, developed by psychologists Edward Deci and Richard Ryan over decades of research, proposes three basic psychological needs. When they're met, people tend to be more motivated, perform better and feel better:

1. **Autonomy**: feeling you have choice and control over how you do your work, not just being told what to do.
2. **Competence**: feeling effective and growing in skill.
3. **Relatedness**: feeling connected to and cared for by others.

What this means for leading people:

- **Autonomy**: agree on the outcome and the constraints, then let people choose how. Explain the reasons behind requests. Involve people in decisions that affect them.
- **Competence**: give work that stretches people slightly beyond their current level, with support. Give specific feedback. Make progress visible.
- **Relatedness**: know your team as people. Notice and appreciate contributions. Build a team where people help each other.

## Pay matters, but differently

Pay is not irrelevant: being paid unfairly is a strong demotivator, and people need enough money to not worry about it. But beyond fair pay, extra money tends to be a weaker everyday motivator for complex, creative work than autonomy, competence and relatedness.

Rewards can also backfire. Self-determination research has found that tangible rewards made **contingent** on doing a task people already enjoy can reduce their intrinsic interest: the task starts to feel like something done for the reward.

So: pay fairly and transparently, then focus on the things money can't buy.
`,
    takeaways: [
      'Self-determination theory: autonomy, competence and relatedness drive motivation.',
      'Agree outcomes and let people choose how; stretch them with support; connect as people.',
      'Pay fairly; beyond that, contingent rewards can undermine intrinsic interest.',
    ],
    quiz: [
      {
        q: 'What are the three basic needs in self-determination theory?',
        options: ['Money, status, power', 'Autonomy, competence, relatedness', 'Safety, food, shelter', 'Speed, quality, cost'],
        answer: 1,
        why: 'Meeting these needs supports motivation and wellbeing.',
      },
      {
        q: 'Which supports autonomy?',
        options: ['Specifying every step of a task', 'Agreeing the outcome and constraints, then letting the person decide how', 'Monitoring every hour', 'Making all decisions yourself'],
        answer: 1,
        why: 'Choice over how to work is the core of autonomy.',
      },
      {
        q: 'What did self-determination research find about rewards for tasks people already enjoy?',
        options: ['They always increase motivation', 'Contingent tangible rewards can reduce intrinsic interest', 'They have no effect', 'Only cash works'],
        answer: 1,
        why: 'The task can start to feel like it\'s done for the reward.',
      },
    ],
    practice: 'Think of someone you work with. Write one way you could increase their autonomy, competence or sense of connection this week.',
    cards: [
      { id: 'c-led-motivation-1', front: 'Three needs in self-determination theory?', back: 'Autonomy, competence, relatedness.' },
      { id: 'c-led-motivation-2', front: 'Can rewards undermine motivation?', back: 'Yes: contingent tangible rewards for enjoyable tasks can reduce intrinsic interest.' },
    ],
    sources: [SRC.sdt],
  },
  {
    id: 'led-delegation',
    unit: 'Leading people',
    title: 'Delegating well',
    summary: 'Delegate outcomes with context and the right level of authority, then step back.',
    ideas: ['What to delegate', 'Delegate outcomes with context', 'Agree the level of authority'],
    body: `
## What to delegate

People promoted for being good at the work often struggle to hand it over: "It's faster if I do it myself." That may be true once, but it doesn't scale, and it denies others the chance to grow.

Good candidates for delegation:

- Tasks someone else can do **well enough**, even if not exactly as you would.
- Tasks that would **stretch and develop** someone.
- Recurring tasks, where teaching once pays off many times.

Keep the tasks only you can do: setting direction, some key relationships, decisions that can't be passed on.

## Delegate outcomes with context

Weak delegation hands over a list of steps. Strong delegation hands over an **outcome** with the **context** needed to make good decisions:

- **What** success looks like: "A one-page proposal the leadership team can decide from."
- **Why** it matters: "We need to decide on the vendor before the budget freeze."
- **Constraints**: budget, deadline, things to avoid.
- **Resources**: who can help, where to find information.

Then let the person decide how. Their approach may differ from yours and still be fine, or better.

## Agree the level of authority

Confusion often comes from unclear authority. Agree it upfront, for example:

1. **Look into it and report back**; I'll decide.
2. **Recommend** an option; I'll approve.
3. **Decide**, and tell me what you did.
4. **Decide**; no need to tell me.

Start lower for new people or high-stakes work, and move up as trust grows. Agree **check-in points** ("let's review the outline on Wednesday") rather than hovering, and resist taking the task back at the first problem.
`,
    takeaways: [
      'Delegate tasks others can do well enough, that develop them, or that recur.',
      'Hand over the outcome, why it matters, constraints and resources, not steps.',
      'Agree the level of authority and check-in points, then step back.',
    ],
    quiz: [
      {
        q: 'Why delegate tasks you could do faster yourself?',
        options: ['To avoid work', 'It scales your impact and develops others; teaching once pays off repeatedly', 'Faster is always worse', 'You shouldn\'t'],
        answer: 1,
        why: 'Short-term speed costs long-term capacity.',
      },
      {
        q: 'Which is the strongest delegation?',
        options: ['"Do steps 1 to 12 exactly."', '"We need a one-page vendor recommendation by Friday so leadership can decide before the budget freeze; budget is under £50k. Your call on approach."', '"Handle the vendor thing."', '"Check with me before every step."'],
        answer: 1,
        why: 'It gives the outcome, why, constraints and freedom on how.',
      },
      {
        q: 'Why agree the level of authority upfront?',
        options: ['It\'s bureaucratic', 'It prevents confusion about whether the person should decide, recommend or just report', 'Authority doesn\'t matter', 'To limit people'],
        answer: 1,
        why: 'Unclear authority leads to stalled work or overstepping.',
      },
    ],
    practice: 'Choose one task you do regularly that someone else could take on. Write how you\'d delegate it: outcome, why, constraints, resources and authority level.',
    cards: [
      { id: 'c-led-delegation-1', front: 'What should a delegation brief include?', back: 'The outcome, why it matters, constraints, resources and the level of authority.' },
      { id: 'c-led-delegation-2', front: 'Four levels of delegated authority?', back: 'Report back; recommend; decide and tell me; decide.' },
    ],
    related: ['led-motivation'],
  },
  {
    id: 'led-1on1',
    unit: 'Leading people',
    title: 'One-on-ones and coaching',
    summary: 'Regular one-on-ones are where trust, growth and early warnings happen.',
    ideas: ['Their meeting, not yours', 'Coach with questions'],
    body: `
## Their meeting, not yours

A **one-on-one** is a regular private conversation between a manager and each team member, often weekly or every other week for 30 minutes. Done well, it's where problems surface early, people grow, and trust builds.

The most common mistake is turning it into a status update. Status can go in a shared document. A good one-on-one is mostly **the team member's agenda**:

- What's on your mind?
- What's getting in your way?
- What would you like to learn or work on next?
- How are you finding the workload?
- What could I do differently to help you?

Some practical points:

- **Keep them regular.** Repeatedly cancelling one-on-ones tells people they're not a priority.
- **Listen more than you talk.**
- **Take notes and follow up** on what you promised.
- **Ask for feedback on yourself**, with specific questions.

## Coach with questions

When someone brings a problem, the instinct is to solve it. Sometimes that's right. But often, helping them think it through builds their ability and confidence more than giving the answer.

The **GROW** model, from coach John Whitmore, is a simple structure:

1. **Goal**: "What would you like to happen?"
2. **Reality**: "What's happening now? What have you tried?"
3. **Options**: "What could you do? What else?"
4. **Will** (way forward): "What will you do, and when?"

Ask "What else?" at least once: the first idea is rarely the best. Save your own suggestion for after they've explored theirs, and offer it as one option, not the answer.
`,
    takeaways: [
      'One-on-ones are mostly the team member\'s agenda, not status updates.',
      'Keep them regular, listen more than you talk, and follow up.',
      'Coach with GROW: goal, reality, options, will.',
    ],
    quiz: [
      {
        q: 'What\'s the most common mistake in one-on-ones?',
        options: ['Making them too long', 'Turning them into status updates', 'Asking questions', 'Holding them weekly'],
        answer: 1,
        why: 'Status can be shared elsewhere; the time is for the person.',
      },
      {
        q: 'What does GROW stand for?',
        options: ['Goal, reality, options, will', 'Grow, reach, own, win', 'Give, receive, offer, wait', 'Goals, results, outcomes, wins'],
        answer: 0,
        why: 'A simple coaching structure from John Whitmore.',
      },
      {
        q: 'A team member asks how to handle a tricky client. When coaching, what should you do first?',
        options: ['Tell them exactly what to say', 'Ask what outcome they want and what they\'ve tried', 'Take over the client', 'Change the subject'],
        answer: 1,
        why: 'Start with their goal and reality before options.',
      },
    ],
    practice: 'Next time someone brings you a problem, use the four GROW questions before offering any advice.',
    cards: [
      { id: 'c-led-1on1-1', front: 'Purpose of a one-on-one?', back: 'The team member\'s agenda: obstacles, growth, wellbeing and feedback, not status updates.' },
      { id: 'c-led-1on1-2', front: 'The GROW coaching model?', back: 'Goal, reality, options, will (way forward).' },
    ],
    related: ['com-listening', 'led-motivation'],
  },
  {
    id: 'led-meetings',
    unit: 'Running work',
    title: 'Better meetings',
    summary: 'Many meetings could be shorter, smaller, or an email. The rest need a purpose and an outcome.',
    ideas: ['Does it need to be a meeting?', 'Purpose, agenda and the right people', 'End with decisions and owners'],
    body: `
## Does it need to be a meeting?

Research cited by Leslie Perlow and colleagues in Harvard Business Review estimates that executives spend **nearly 23 hours a week** in scheduled meetings, up from under 10 in the 1960s. Every hour in a meeting is an hour not spent on deep work.

Before calling one, ask whether it could be:

- **A written update** people read in their own time.
- **A shared document** for comments.
- **A quick message** to the one person who needs to decide.

Meetings are best for discussion, decisions that need debate, relationship-building and sensitive topics. They're poor for one-way information sharing.

## Purpose, agenda and the right people

If it does need to be a meeting:

- **State the purpose** in the invite: "Decide which vendor to pick" is better than "Vendor discussion".
- **Share an agenda** and any reading in advance, so time goes on discussion, not presenting.
- **Invite only who's needed**: people who'll decide, contribute or must be there. Others can read the notes. Smaller meetings tend to be more candid and faster.
- **Default to shorter**: 25 or 50 minutes instead of 30 or 60 gives people a break between meetings.
- **Start on time**, and end early if you're done.

## End with decisions and owners

A meeting that ends without clarity produces another meeting. In the last few minutes:

- **Summarise decisions** made.
- **List actions**, each with **one owner** and a date.
- **Note open questions** and who'll resolve them.

Send these notes to attendees and anyone affected, the same day.

Review recurring meetings every few months: do they still need to exist, with these people, at this length?
`,
    takeaways: [
      'Executives spend nearly 23 hours a week in meetings; many could be written instead.',
      'Give meetings a clear purpose, an agenda, pre-reading and only the needed people.',
      'End with decisions, owned actions with dates, and notes sent the same day.',
    ],
    quiz: [
      {
        q: 'Which is best handled without a meeting?',
        options: ['A tense conversation about performance', 'A weekly one-way status update', 'A decision with real disagreement', 'Brainstorming a new strategy'],
        answer: 1,
        why: 'One-way information is better written and read asynchronously.',
      },
      {
        q: 'Which meeting invite is strongest?',
        options: ['"Catch-up"', '"Vendor discussion"', '"Decide between vendors A and B; read the comparison doc beforehand"', '"Sync"'],
        answer: 2,
        why: 'It states the purpose and prepares people.',
      },
      {
        q: 'What should every meeting end with?',
        options: ['A date for the next meeting', 'Decisions, actions with single owners and dates, and open questions', 'A round of thanks', 'Nothing in particular'],
        answer: 1,
        why: 'Clear outcomes stop the need for follow-up meetings.',
      },
    ],
    practice: 'Review your recurring meetings. Pick one to shorten, make smaller, turn into a written update, or cancel.',
    cards: [
      { id: 'c-led-meetings-1', front: 'Three alternatives to a meeting?', back: 'A written update, a shared document for comments, a direct message to the decider.' },
      { id: 'c-led-meetings-2', front: 'What should a meeting invite include?', back: 'A clear purpose (ideally a decision), agenda and pre-reading.' },
      { id: 'c-led-meetings-3', front: 'How should a meeting end?', back: 'Decisions summarised, actions with one owner and a date each, open questions noted.' },
    ],
    related: ['foc-deep', 'led-clarity'],
    sources: [SRC.meetings],
  },
]
