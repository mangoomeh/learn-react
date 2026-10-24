// Sources were checked in October 2026.
const SRC = {
  apa: { title: 'American Psychological Association: Multitasking, switching costs', url: 'https://www.apa.org/topics/research/multitasking' },
  leroy: { title: 'Leroy (2009): Why is it so hard to do my work? The challenge of attention residue', url: 'https://doi.org/10.1016/j.obhdp.2009.04.002' },
  braindrain: { title: 'BPS Research Digest: Revisiting the "brain drain" effect', url: 'https://www.bps.org.uk/research-digest/revisiting-brain-drain-effect' },
  masicampo: { title: 'Masicampo & Baumeister (2011): Consider it done! Plan making can eliminate the cognitive effects of unfulfilled goals', url: 'https://doi.org/10.1037/a0024192' },
  buehler: { title: 'Buehler, Griffin & Ross (1994): Exploring the planning fallacy', url: 'https://doi.org/10.1037/0022-3514.67.3.366' },
  sirois: { title: 'Sirois & Pychyl (2013): Procrastination and the priority of short-term mood regulation', url: 'https://doi.org/10.1111/spc3.12011' },
  wohl: { title: 'Wohl, Pychyl & Bennett (2010): I forgive myself, now I can study', url: 'https://doi.org/10.1016/j.paid.2010.01.029' },
}

export const lessons = [
  {
    id: 'foc-attention',
    unit: 'Attention',
    title: 'Attention is limited',
    summary: 'Multitasking is mostly fast switching, and every switch has a cost.',
    ideas: ['Switching costs', 'Attention residue'],
    body: `
## Switching costs

For anything that needs thought, the brain doesn't really do two things at once. What feels like multitasking is **rapid switching** between tasks, and each switch costs time while you drop one set of goals and rules and load another.

In experiments by Rubinstein, Meyer and Evans (2001), people lost time every time they switched between tasks such as solving maths problems and classifying shapes. The cost grew with task complexity and was bigger when switching to less familiar tasks. Meyer has estimated that these small losses can add up to as much as **40% of productive time**. That's an upper-end estimate for complex work rather than a measured average, but the direction is clear.

Habitual tasks are the exception: you can walk and talk at the same time. The trouble starts when both tasks need deliberate thinking, like writing a report while following a chat.

## Attention residue

Switching has a second cost that lasts longer. Sophie Leroy (2009) found that when people moved from an unfinished task to a new one, part of their attention **stayed on the old task**. She called this **attention residue**. The harder it was to let go of the first task, the worse people did on the second.

That's why a "quick look" at email in the middle of deep work is expensive. The look takes a minute; the residue of an unanswered message can follow you for much longer.

Leroy also found that finishing the first task, or reaching a clear stopping point, reduced the residue. Before switching, **write down where you are and what's next**. It gives your mind permission to let go.
`,
    takeaways: [
      'Multitasking on thinking tasks is really switching, and each switch costs time.',
      'Switching costs grow with complexity and unfamiliarity.',
      'Attention residue lingers after a switch; note where you stopped to reduce it.',
    ],
    quiz: [
      {
        q: 'What happens when you "multitask" on two thinking tasks?',
        options: ['Both get done in parallel at full speed', 'You switch rapidly between them, losing time at each switch', 'You become faster with practice at any task pair', 'Nothing; attention is unlimited'],
        answer: 1,
        why: 'For tasks that need thought, the brain switches rather than doing both, and switches cost time.',
      },
      {
        q: 'What is attention residue?',
        options: ['Notes left on your desk', 'Attention that stays on a previous unfinished task after you switch', 'Tiredness after lunch', 'A type of notification'],
        answer: 1,
        why: 'Leroy found part of your attention lingers on the task you left, hurting performance on the next.',
      },
      {
        q: 'You must stop a report mid-way to join a meeting. What reduces attention residue?',
        options: ['Leave it exactly as it is', 'Quickly note where you are and the next step before switching', 'Check email first', 'Think about the report during the meeting'],
        answer: 1,
        why: 'A clear stopping point and a note of the next step help your mind let go.',
      },
    ],
    practice: 'For one working day, tally every time you switch tasks or check messages. At the end, look at the total and the longest unbroken stretch you managed.',
    cards: [
      { id: 'c-foc-attention-1', front: 'Why is multitasking costly?', back: 'On thinking tasks you switch rather than work in parallel, and each switch costs time; costs grow with complexity.' },
      { id: 'c-foc-attention-2', front: 'What is attention residue (Leroy, 2009)?', back: 'Part of your attention staying on an unfinished previous task after you switch, reducing performance.' },
      { id: 'c-foc-attention-3', front: 'How do you reduce attention residue when you must switch?', back: 'Reach a stopping point and write down where you are and what\'s next.' },
    ],
    inTheWild: [
      'Answering chat messages while writing code',
      'Checking email between meetings',
    ],
    sources: [SRC.apa, SRC.leroy],
  },
  {
    id: 'foc-deep',
    unit: 'Attention',
    title: 'Deep work in blocks',
    summary: 'Hard, valuable work needs long stretches without interruption. Protect them on purpose.',
    ideas: ['Deep vs shallow work', 'Time blocks', 'Batch the shallow work'],
    body: `
## Deep vs shallow work

Writer Cal Newport popularised a useful split:

- **Deep work**: demanding tasks that need full concentration and create most of the value, such as writing, designing, solving hard problems or learning a difficult skill.
- **Shallow work**: logistical tasks you can do while distracted, such as most email, scheduling, routine updates and admin.

Shallow work isn't bad; it has to be done. The trouble is that it expands to fill every gap, because it's easier and gives quick feedback. Deep work only happens if you make room for it.

## Time blocks

A **time block** is a stretch on your calendar reserved for one task, treated like a meeting you can't move.

- Make blocks **long enough to get going**: often 60–120 minutes for hard work, since it takes a while to load a problem into your head.
- Put them at your **best time of day**. Many people think best in the morning, but notice your own pattern.
- Decide the **specific task** in advance. "Work on the proposal" is weaker than "draft sections 2 and 3".
- Close chat and email during the block, and let people know when you'll be back.

## Batch the shallow work

Rather than letting shallow tasks interrupt all day, **batch** them: answer messages at set times, say late morning and late afternoon. Most messages can wait an hour or two; few people expect an instant reply even if they're used to getting one.

If your role needs fast responses, you can still shorten the gaps rather than remove them: check every 30 minutes instead of every 3.
`,
    takeaways: [
      'Deep work creates most of the value but gets crowded out by shallow work.',
      'Reserve long, specific time blocks for deep work at your best time of day.',
      'Batch shallow tasks like messages into set times.',
    ],
    quiz: [
      {
        q: 'Which is deep work?',
        options: ['Replying to routine emails', 'Booking meeting rooms', 'Designing the architecture for a new feature', 'Updating a status spreadsheet'],
        answer: 2,
        why: 'It needs full concentration and creates real value.',
      },
      {
        q: 'What makes a time block effective?',
        options: ['Ten minutes long, any time', 'Long enough to get going, at your best time, with a specific task decided in advance', 'Scheduled only when free', 'Shared with chat open'],
        answer: 1,
        why: 'Hard work needs warm-up time, focus and a clear target.',
      },
      {
        q: 'Why batch email instead of answering as it arrives?',
        options: ['Email is unimportant', 'Constant checking fragments your attention; most messages can wait an hour or two', 'It looks busier', 'Batching is faster to type'],
        answer: 1,
        why: 'Batching keeps shallow work from breaking up deep work.',
      },
    ],
    practice: 'Look at your calendar for next week. Book two 90-minute deep-work blocks and name the exact task for each.',
    cards: [
      { id: 'c-foc-deep-1', front: 'Deep vs shallow work?', back: 'Deep: demanding, valuable, needs full focus. Shallow: logistical, can be done distracted.' },
      { id: 'c-foc-deep-2', front: 'Three rules for a deep-work time block?', back: 'Long enough (often 60–120 min), at your best time, with a specific task decided in advance.' },
      { id: 'c-foc-deep-3', front: 'What is batching?', back: 'Grouping shallow tasks, such as messages, into set times instead of handling them as they arrive.' },
    ],
    related: ['foc-attention', 'foc-distractions'],
  },
  {
    id: 'foc-distractions',
    unit: 'Attention',
    title: 'Design out distractions',
    summary: 'Willpower loses to a buzzing phone. Change your surroundings instead.',
    ideas: ['Friction beats willpower', 'Notifications are interruptions', 'Be sceptical of neat findings'],
    body: `
## Friction beats willpower

Resisting a distraction every few minutes is tiring and you'll eventually give in. It's easier to make distractions **harder to reach**, so that giving in takes effort:

- Put your phone in another room, or in a drawer, during focused work.
- Log out of social sites, or use a site blocker during work hours.
- Keep only the window you need open, full screen.
- Clear your desk of unrelated tasks.

A few seconds of friction is often enough to break the automatic reach.

## Notifications are interruptions

Every notification is someone else deciding when you switch tasks. Most apps default to notifying you about everything, because your attention is how they make money.

- Turn off all notifications except those from people who need to reach you urgently.
- Use do-not-disturb or focus modes during deep-work blocks.
- Turn off email notifications entirely and check on your own schedule.

## Be sceptical of neat findings

You may have heard that the **mere presence** of your phone, even face down and silent, drains your thinking. That came from a 2017 study by Ward and colleagues, and it spread widely. But preregistered direct replications have **failed to find the effect**, while a later meta-analysis reported support. The honest summary is that the evidence is **mixed**.

The practical advice doesn't depend on it: a phone that can buzz or tempt you will interrupt you, so moving it away is still sensible. But notice the pattern. A surprising, tidy finding that spreads fast deserves a check for replications before you repeat it.
`,
    takeaways: [
      'Make distractions harder to reach instead of relying on willpower.',
      'Notifications are interruptions; turn off all but the truly urgent.',
      'The "phone presence drains your brain" finding has mixed replication evidence.',
    ],
    quiz: [
      {
        q: 'Why is moving your phone to another room better than resisting it on your desk?',
        options: ['Phones are bad for you', 'Adding friction stops automatic reaching without spending willpower', 'Rooms block signals', 'It isn\'t better'],
        answer: 1,
        why: 'Friction breaks the habit loop more reliably than repeated self-control.',
      },
      {
        q: 'What\'s the best default for app notifications?',
        options: ['On for everything, so you don\'t miss anything', 'Off except for people who need to reach you urgently', 'On, with sound', 'Off only at night'],
        answer: 1,
        why: 'Each notification is an interruption you didn\'t choose.',
      },
      {
        q: 'What\'s the current state of evidence for the "brain drain" effect of a phone\'s mere presence?',
        options: ['Firmly established', 'Mixed: direct replications failed, a meta-analysis reported support', 'Proven false and retracted', 'Never studied'],
        answer: 1,
        why: 'The original finding hasn\'t reliably replicated, though some studies support it.',
      },
    ],
    practice: 'Change three things in your environment today to add friction to your top distractions. Write down what you changed.',
    cards: [
      { id: 'c-foc-distractions-1', front: 'Friction vs willpower for distractions?', back: 'Make distractions harder to reach; friction works more reliably than repeated self-control.' },
      { id: 'c-foc-distractions-2', front: 'Best notification setting?', back: 'Off for everything except people who need to reach you urgently.' },
      { id: 'c-foc-distractions-3', front: 'Is the phone "brain drain" effect established?', back: 'No: direct replications failed, though a meta-analysis reported support. Evidence is mixed.' },
    ],
    related: ['foc-deep'],
    sources: [SRC.braindrain],
  },
  {
    id: 'foc-capture',
    unit: 'Planning',
    title: 'Capture everything',
    summary: 'Unfinished tasks nag at you until they\'re written in a place you trust.',
    ideas: ['Open loops occupy your mind', 'A trusted list', 'Next actions'],
    body: `
## Open loops occupy your mind

Unfinished tasks tend to pop into your head at random moments: in the shower, in a meeting, at 3am. In a 2011 series of studies, Masicampo and Baumeister found that unfinished goals caused intrusive thoughts and hurt performance on unrelated tasks. But when people **made a specific plan** for the goal, the interference disappeared, even though the task wasn't done yet.

Your mind doesn't need the task finished to let go of it. It needs to trust that it's handled.

## A trusted list

That's the core of David Allen's **Getting Things Done** method: get every commitment out of your head into an external system you trust.

- **Capture** anything that has your attention as soon as it appears: a note app, a notebook, an inbox.
- **Have one place**, or very few. Tasks scattered across sticky notes, emails and memory don't feel handled.
- **Review it** regularly, so you trust nothing is being forgotten. A list you never look at doesn't free your mind.

## Next actions

Items like "taxes" or "plan holiday" sit on lists for weeks because they aren't actions; they're projects with no obvious first step. Write the **next physical action** instead:

- "Taxes" becomes "find last year's tax summary in email".
- "Plan holiday" becomes "text Sam to ask which weeks they're free".

A concrete next action is easier to start and easier to fit into a spare ten minutes. If something will take **under two minutes**, Allen suggests doing it right away rather than recording it.
`,
    takeaways: [
      'Making a plan for an unfinished task reduces intrusive thoughts about it.',
      'Capture commitments in one trusted place and review it regularly.',
      'Write the next physical action, not a vague project name.',
    ],
    quiz: [
      {
        q: 'What did Masicampo and Baumeister (2011) find reduced the intrusive thoughts caused by unfinished goals?',
        options: ['Finishing every task immediately', 'Making a specific plan for the goal', 'Ignoring the goal', 'Drinking coffee'],
        answer: 1,
        why: 'Planning was enough to remove the interference, even before the task was done.',
      },
      {
        q: 'Why does a capture system need regular review?',
        options: ['To keep it tidy', 'So you trust nothing is forgotten, which is what lets your mind let go', 'Reviews are required by GTD law', 'It doesn\'t'],
        answer: 1,
        why: 'Trust comes from knowing you\'ll look at it.',
      },
      {
        q: 'Which is a next action?',
        options: ['Website redesign', 'Car', 'Email Priya to ask for the brand colour codes', 'Fitness'],
        answer: 2,
        why: 'It\'s concrete and physical: you know exactly what to do.',
      },
    ],
    practice: 'Spend ten minutes writing down every task, worry and commitment on your mind into one list. Rewrite the top three as next physical actions.',
    cards: [
      { id: 'c-foc-capture-1', front: 'Why capture tasks in a trusted system?', back: 'Unfinished goals cause intrusive thoughts; a specific plan in a trusted place lets your mind let go.' },
      { id: 'c-foc-capture-2', front: 'What is a next action?', back: 'The next concrete, physical step on something, such as "email X about Y", not a vague project name.' },
      { id: 'c-foc-capture-3', front: 'The two-minute rule (GTD)?', back: 'If something takes under two minutes, do it now instead of recording it.' },
    ],
    related: ['foc-plan'],
    sources: [SRC.masicampo],
  },
  {
    id: 'foc-plan',
    unit: 'Planning',
    title: 'Plan the day and the week',
    summary: 'A short daily plan and a weekly review keep you working on what matters.',
    ideas: ['Pick a few priorities', 'Plan the day the night before', 'The weekly review'],
    body: `
## Pick a few priorities

A long to-do list doesn't tell you what to do first, so you tend to pick the easiest or most recent item. Each day, choose **one to three priorities**: the tasks that would make the day a success even if nothing else got done. Do at least one of them before the shallow work starts.

Be honest about capacity. After meetings, messages and interruptions, many people have only **three or four hours** of real focus time a day.

## Plan the day the night before

Spend five minutes at the end of each day:

1. Look at tomorrow's calendar.
2. Choose your priorities and put them in time blocks.
3. Write the next action for each, so you can start without deciding.

Starting the morning already knowing what to do skips the decision fatigue of a fresh list. It also closes today's open loops.

## The weekly review

Once a week, spend 30 minutes stepping back:

- **Clear** your inboxes and capture anything loose.
- **Look back**: what got done, what slipped and why?
- **Look ahead**: what's coming in the next two weeks? Any deadlines that need work starting now?
- **Choose** the most important outcomes for the week and block time for them.

The weekly review is what keeps a task system trustworthy. Without it, lists go stale and you drift back to working on whatever is loudest.

If you're unsure what counts as important, the Decision Making subject's lesson on prioritising covers urgent-versus-important and impact-versus-effort.
`,
    takeaways: [
      'Choose one to three daily priorities and do one before shallow work.',
      'Plan tomorrow at the end of today, with next actions.',
      'A weekly review keeps your system trusted and your week pointed at what matters.',
    ],
    quiz: [
      {
        q: 'What\'s a daily priority?',
        options: ['Every task due this week', 'A task that would make the day a success even if nothing else got done', 'The easiest task', 'Whatever the latest email asks'],
        answer: 1,
        why: 'Picking one to three such tasks focuses the day.',
      },
      {
        q: 'Why plan tomorrow at the end of today?',
        options: ['It\'s more relaxing', 'You start the morning knowing what to do, skipping a fresh round of decisions', 'Plans made in the morning don\'t count', 'Calendars update overnight'],
        answer: 1,
        why: 'Deciding in advance means the morning goes straight into work.',
      },
      {
        q: 'What does a weekly review protect against?',
        options: ['Meetings', 'Stale lists and drifting into whatever is loudest', 'Learning', 'Sleep'],
        answer: 1,
        why: 'Regular review keeps the system trusted and current.',
      },
    ],
    practice: 'Tonight, choose tomorrow\'s one to three priorities, block time for them, and write the first action for each.',
    cards: [
      { id: 'c-foc-plan-1', front: 'How many daily priorities?', back: 'One to three: tasks that would make the day a success even if nothing else got done.' },
      { id: 'c-foc-plan-2', front: 'Four steps of a weekly review?', back: 'Clear inboxes, look back, look ahead, choose the week\'s key outcomes and block time.' },
    ],
    related: ['foc-capture', 'dm-prioritising', 'foc-deep'],
  },
  {
    id: 'foc-estimates',
    unit: 'Planning',
    title: 'Estimating time honestly',
    summary: 'Everyone underestimates how long their own tasks take. Here\'s how to correct for it.',
    ideas: ['The planning fallacy', 'Use the outside view', 'Add buffers and break it down'],
    body: `
## The planning fallacy

People consistently underestimate how long their own tasks will take, even when they know similar tasks ran late before. Kahneman and Tversky named this the **planning fallacy**.

In a 1994 study, Buehler, Griffin and Ross asked students when they'd finish their theses. On average they predicted about 34 days. Asked for a worst-case estimate, they said about 49 days. The actual average was about **55 days**, longer than even their worst case. Only around 30% finished by their predicted date.

The reason: when estimating, we picture the task going smoothly step by step, and ignore interruptions, mistakes, waiting on others and everything else that usually goes wrong.

## Use the outside view

Instead of imagining this task's plan (the **inside view**), ask how long **similar tasks actually took** (the **outside view**):

- "Last time I wrote a report like this it took two weeks, though I'd planned one."
- "Our last three features each took about 1.5 times the estimate."

Keep a simple record of estimates against actual times. After a few weeks you'll know your personal multiplier.

## Add buffers and break it down

- **Break big tasks into small pieces** and estimate each. Smaller pieces are easier to picture realistically, and you'll notice steps you'd forgotten.
- **Add a buffer** based on your track record, often 30–50% for unfamiliar work.
- **Commit to the realistic date**, not the hopeful one. Delivering early is pleasant; repeatedly delivering late costs trust.

When someone asks "how long will it take?", it's fine to give a range: "probably three days, up to five if the data's messy."
`,
    takeaways: [
      'We underestimate our own tasks by picturing the smooth path.',
      'Base estimates on how long similar tasks actually took.',
      'Break tasks down, add buffers and give ranges.',
    ],
    quiz: [
      {
        q: 'In Buehler et al. (1994), how did students\' actual thesis times compare with their worst-case predictions?',
        options: ['Much shorter', 'About the same', 'Longer than even the worst case', 'They never finished'],
        answer: 2,
        why: 'The average actual time (about 55 days) exceeded the average worst-case estimate (about 49).',
      },
      {
        q: 'What is the outside view?',
        options: ['Estimating from how long similar tasks actually took', 'Asking someone outside the company', 'Working outdoors', 'Ignoring past experience'],
        answer: 0,
        why: 'Past outcomes for similar tasks correct for the optimism of picturing this one.',
      },
      {
        q: 'Why break a big task into smaller pieces before estimating?',
        options: ['Smaller tasks are less important', 'Small pieces are easier to picture realistically and reveal forgotten steps', 'It makes the total smaller', 'Managers prefer lists'],
        answer: 1,
        why: 'Decomposition exposes hidden work.',
      },
    ],
    practice: 'For the next five tasks you do, write your time estimate before starting and the actual time after. Work out your average ratio.',
    cards: [
      { id: 'c-foc-estimates-1', front: 'What is the planning fallacy?', back: 'Underestimating how long your own tasks will take, even knowing similar tasks overran.' },
      { id: 'c-foc-estimates-2', front: 'Inside view vs outside view?', back: 'Inside: imagining this task\'s plan. Outside: how long similar tasks actually took.' },
      { id: 'c-foc-estimates-3', front: 'Three fixes for optimistic estimates?', back: 'Use the outside view, break tasks down, add a buffer based on your track record.' },
    ],
    related: ['ct-biases-judgement'],
    sources: [SRC.buehler],
  },
  {
    id: 'foc-procrastination',
    unit: 'Getting it done',
    title: 'Procrastination is about feelings',
    summary: 'Putting things off is usually avoiding a bad feeling, not bad time management.',
    ideas: ['Mood repair now, cost later', 'Shrink the first step', 'Be kind to your future self'],
    body: `
## Mood repair now, cost later

Procrastination isn't laziness, and it usually isn't a lack of planning. Researchers Fuschia Sirois and Tim Pychyl describe it as **putting short-term mood repair ahead of long-term goals**. A task makes you feel bored, anxious, confused or afraid of doing it badly. Avoiding it brings instant relief. The cost lands on your future self.

That's why better calendars rarely fix it. The question to ask is: **what feeling am I avoiding?**

- Unclear what to do? → Confusion. Define the next action.
- Afraid it won't be good? → Perfectionism. Lower the bar for a first draft.
- Boring? → Pair it with something pleasant, or make it shorter.
- Too big? → Overwhelm. Shrink it.

## Shrink the first step

Starting is usually the hardest part; once underway, the bad feeling often fades. So make starting tiny:

- Commit to just **five minutes**. You're allowed to stop after that, and often you won't.
- Make the first step physical and obvious: "open the document and write one sentence".
- Leave yourself an easy re-entry point at the end of each session, such as a half-finished sentence or a note saying what's next.

## Be kind to your future self

Harsh self-criticism after procrastinating tends to make the next round worse, because it adds more bad feeling to the task. Studies of students have found that those who **forgave themselves** for procrastinating on one exam procrastinated less on the next.

Treat your future self as someone you're doing favours for: "Future me will be glad this is started."
`,
    takeaways: [
      'Procrastination trades short-term mood relief for long-term cost.',
      'Name the feeling you\'re avoiding and address that.',
      'Make the first step tiny, and forgive yourself rather than criticise.',
    ],
    quiz: [
      {
        q: 'According to Sirois and Pychyl, procrastination is best understood as:',
        options: ['Poor time management', 'Prioritising short-term mood repair over long-term goals', 'A lack of intelligence', 'Having too few tasks'],
        answer: 1,
        why: 'Avoiding the task relieves a bad feeling now, at a cost to your future self.',
      },
      {
        q: 'You keep avoiding a report because you don\'t know where to start. What helps most?',
        options: ['Wait for motivation', 'Define a tiny concrete next action, like writing the section headings', 'Set a stricter deadline', 'Criticise yourself'],
        answer: 1,
        why: 'The avoided feeling is confusion; a clear small step removes it.',
      },
      {
        q: 'What tends to reduce future procrastination after you\'ve procrastinated?',
        options: ['Harsh self-criticism', 'Forgiving yourself and moving on', 'Avoiding the task longer', 'Nothing'],
        answer: 1,
        why: 'Self-forgiveness removes extra bad feeling from the task.',
      },
    ],
    practice: 'Pick one task you\'ve been putting off. Write the feeling you\'re avoiding, then a five-minute first step. Do that step today.',
    cards: [
      { id: 'c-foc-procrastination-1', front: 'What is procrastination, according to emotion-regulation research?', back: 'Choosing short-term mood repair (avoiding a bad feeling) over long-term goals.' },
      { id: 'c-foc-procrastination-2', front: 'The five-minute rule?', back: 'Commit to working for just five minutes; starting is the hardest part.' },
      { id: 'c-foc-procrastination-3', front: 'Self-criticism vs self-forgiveness after procrastinating?', back: 'Self-forgiveness tends to reduce later procrastination; criticism adds bad feeling to the task.' },
    ],
    related: ['hab-tiny'],
    sources: [SRC.sirois, SRC.wohl],
  },
  {
    id: 'foc-energy',
    unit: 'Getting it done',
    title: 'Breaks and energy',
    summary: 'Focus is a resource that runs down. Rest is part of the work.',
    ideas: ['Work in sprints with real breaks', 'Stop at a good place', 'Sleep is the foundation'],
    body: `
## Work in sprints with real breaks

Concentration fades over a long stretch. Short breaks restore it, especially breaks that are genuinely different from the work: a walk, stretching, looking out a window, a chat.

The **Pomodoro technique** is a simple structure: 25 minutes of focused work, 5 minutes of break, and a longer break after four rounds. The exact numbers don't matter; many people prefer 50 and 10 for deep work. What matters is that:

- the work stretch has **one task** and no checking,
- the break is **real**: scrolling a news feed is more input, not rest,
- you **stop for breaks** even when you feel you could push on, so you don't hit a wall later.

## Stop at a good place

Ernest Hemingway said he'd stop writing for the day when he knew what would happen next. It sounds backwards, but it makes the next start easy: you sit down and continue, instead of facing a blank page.

End each session with an easy re-entry point: a note of the next step, a failing test that shows what to fix, a half-written paragraph. This also reduces the attention residue you carry into the evening.

## Sleep is the foundation

No productivity system makes up for chronic short sleep. Sleep loss impairs attention, working memory and judgement, and people are poor at noticing how impaired they are. Trading sleep for extra working hours usually loses more in quality than it gains in time.

The Health Basics subject covers sleep in more detail.
`,
    takeaways: [
      'Work in focused sprints with real breaks that differ from the work.',
      'End sessions at an easy re-entry point.',
      'Short sleep undermines every other productivity habit.',
    ],
    quiz: [
      {
        q: 'Which break restores focus best?',
        options: ['Scrolling social media', 'Reading news', 'A short walk away from the screen', 'Checking email'],
        answer: 2,
        why: 'A break that\'s different from the work actually rests your attention; more input doesn\'t.',
      },
      {
        q: 'Why stop a session when you know what comes next?',
        options: ['To finish early', 'It makes restarting easy and reduces lingering attention', 'Hemingway was lazy', 'It doesn\'t help'],
        answer: 1,
        why: 'An easy re-entry point removes the hardest part of the next session: starting.',
      },
      {
        q: 'Why is cutting sleep to work longer usually a bad trade?',
        options: ['Sleep is boring', 'Sleep loss impairs attention and judgement, and people underestimate the impairment', 'Work is less important', 'It isn\'t'],
        answer: 1,
        why: 'The quality lost outweighs the extra hours.',
      },
    ],
    cards: [
      { id: 'c-foc-energy-1', front: 'The Pomodoro technique?', back: 'Focused work for 25 minutes, a 5-minute break, a longer break after four rounds. Numbers can vary.' },
      { id: 'c-foc-energy-2', front: 'What makes a break restorative?', back: 'It\'s different from the work: movement, rest or people, not more screen input.' },
      { id: 'c-foc-energy-3', front: 'Why end a session at an easy re-entry point?', back: 'Restarting is easier, and it reduces attention residue.' },
    ],
    related: ['foc-attention', 'hea-sleep-need'],
  },
]
