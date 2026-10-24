// Sources were checked in October 2026.
const SRC = {
  wood2002: { title: 'Wood, Quinn & Kashy (2002): Habits in everyday life', url: 'https://doi.org/10.1037/0022-3514.83.6.1281' },
  wood2016: { title: 'Wood & Rünger (2016): Psychology of habit', url: 'https://doi.org/10.1146/annurev-psych-122414-033417' },
  lally: { title: 'Lally et al. (2010): How are habits formed? Modelling habit formation in the real world', url: 'https://doi.org/10.1002/ejsp.674' },
  gollwitzer: { title: 'Gollwitzer & Sheeran (2006): Implementation intentions and goal achievement, a meta-analysis', url: 'https://doi.org/10.1016/S0065-2601(06)38002-1' },
  hagger: { title: 'Hagger et al. (2016): A multilab preregistered replication of the ego-depletion effect', url: 'https://doi.org/10.1177/1745691616652873' },
  ent: { title: 'Ent, Baumeister & Tice (2015): Trait self-control and the avoidance of temptation', url: 'https://doi.org/10.1016/j.paid.2014.09.031' },
  dai: { title: 'Dai, Milkman & Riis (2014): The fresh start effect', url: 'https://doi.org/10.1287/mnsc.2014.1901' },
  verplanken: { title: 'Verplanken & Roy (2016): Testing the habit discontinuity hypothesis in a field experiment', url: 'https://doi.org/10.1016/j.jenvp.2015.11.008' },
}

export const lessons = [
  {
    id: 'hab-what',
    unit: 'How habits work',
    title: 'What a habit is',
    summary: 'Habits are actions triggered by context, not by decisions. That changes how you build them.',
    ideas: ['Cue, routine, reward', 'Habits run without deciding', 'Intentions vs habits'],
    body: `
## Cue, routine, reward

A habit is a behaviour that has become **automatic in a particular context**. It forms through repetition:

1. A **cue**: a place, time, preceding action or feeling. Getting into the car, finishing dinner, feeling bored.
2. A **routine**: the behaviour. Putting on the seatbelt, washing up, opening a social app.
3. A **reward**: something that makes the behaviour worth repeating. Comfort, a clean kitchen, a bit of novelty.

Repeat the routine after the same cue enough times and the cue starts to trigger the behaviour by itself.

## Habits run without deciding

Much of daily life is habitual. In a 2002 diary study, Wendy Wood and colleagues found that about **43% of the actions people recorded** were performed almost daily in the same context, often while thinking about something else.

Once a habit forms, it no longer depends on your goals in the moment. That's the good news and the bad news: a good habit happens even when you're tired or unmotivated; a bad one happens even when you've decided to stop.

## Intentions vs habits

When intentions and habits conflict, habits often win, especially under stress, time pressure or tiredness, when we fall back on autopilot.

So "I'll be more motivated" is a weak plan. Motivation gets you started, but it rises and falls. Lasting change comes from **repeating a behaviour in a stable context** until it runs without needing motivation. The rest of this subject is about how to do that.
`,
    takeaways: [
      'A habit is a behaviour triggered automatically by a context cue.',
      'About 43% of daily actions in one study were habitual.',
      'Under stress, habits beat intentions; build behaviour into stable contexts.',
    ],
    quiz: [
      {
        q: 'What triggers a well-formed habit?',
        options: ['A conscious decision each time', 'A context cue, such as a place, time or preceding action', 'Reading about it', 'Rewards only'],
        answer: 1,
        why: 'Repetition links the behaviour to a cue so the cue triggers it automatically.',
      },
      {
        q: 'In Wood et al. (2002), roughly what share of recorded daily actions were habitual?',
        options: ['About 5%', 'About 43%', 'About 90%', 'None'],
        answer: 1,
        why: 'Around 43% were done almost daily in the same context.',
      },
      {
        q: 'Why is "I\'ll just be more motivated" a weak plan for change?',
        options: ['Motivation doesn\'t exist', 'Motivation fluctuates, and under stress habits override intentions', 'Motivation is too strong', 'It isn\'t weak'],
        answer: 1,
        why: 'Lasting change comes from repetition in a stable context, not from motivation alone.',
      },
    ],
    practice: 'List three habits you do every day without thinking. For each, write its cue and its reward.',
    cards: [
      { id: 'c-hab-what-1', front: 'Three parts of a habit loop?', back: 'Cue (context), routine (behaviour), reward (why it\'s repeated).' },
      { id: 'c-hab-what-2', front: 'What share of daily behaviour is habitual (Wood et al., 2002)?', back: 'About 43% of recorded actions.' },
      { id: 'c-hab-what-3', front: 'When do habits most often override intentions?', back: 'Under stress, time pressure or tiredness.' },
    ],
    sources: [SRC.wood2002, SRC.wood2016],
  },
  {
    id: 'hab-time',
    unit: 'How habits work',
    title: 'How long habits take',
    summary: 'Forget "21 days". Habits take weeks to months, and missing a day is fine.',
    ideas: ['The 21-day myth', 'What the research found', 'Missing a day doesn\'t reset you'],
    body: `
## The 21-day myth

You've probably heard that it takes 21 days to form a habit. The number traces back to a 1960 self-help book by a plastic surgeon who observed that patients took **at least** about 21 days to adjust to a new appearance. Over time, "at least" was dropped and the figure was applied to habits in general.

## What the research found

In a 2010 study by Phillippa Lally and colleagues, volunteers picked a new daily behaviour, such as drinking water with lunch or running before dinner, and rated each day how automatic it felt.

Automaticity rose quickly at first, then levelled off, following a curve. The time to reach the plateau varied hugely:

- The **median was 66 days**.
- The range was **18 to 254 days**.
- Simple behaviours (drinking a glass of water) became automatic faster than harder ones (50 sit-ups).

So expect a new habit to take **two to three months**, longer for complex behaviours, and don't be discouraged when day 22 still feels effortful.

## Missing a day doesn't reset you

Lally's study also found that **missing a single opportunity didn't meaningfully affect** the habit's progress. What mattered was overall consistency.

This matters because the belief "I broke my streak, so I've failed" makes people give up. A useful rule many people follow: **never miss twice**. One miss is a blip; two in a row is the start of a new pattern.
`,
    takeaways: [
      'The 21-day figure is a myth from a misquoted book.',
      'Lally et al. (2010): median 66 days to automaticity, range 18–254.',
      'Missing one day doesn\'t matter; aim to never miss twice.',
    ],
    quiz: [
      {
        q: 'In Lally et al. (2010), what was the median time for a behaviour to become automatic?',
        options: ['7 days', '21 days', '66 days', '365 days'],
        answer: 2,
        why: 'The median was 66 days, with a range from 18 to 254.',
      },
      {
        q: 'Which habits became automatic faster?',
        options: ['Complex ones', 'Simple ones, such as drinking a glass of water', 'Ones started in winter', 'There was no difference'],
        answer: 1,
        why: 'Simpler behaviours reached automaticity sooner.',
      },
      {
        q: 'You missed your new habit yesterday. What does the research suggest?',
        options: ['Start again from day one', 'One miss barely matters; get back on track today', 'Give up', 'Double up today'],
        answer: 1,
        why: 'Single misses didn\'t meaningfully affect habit formation.',
      },
    ],
    cards: [
      { id: 'c-hab-time-1', front: 'How long do habits take to form (Lally et al., 2010)?', back: 'Median 66 days, ranging from 18 to 254 depending on the person and behaviour.' },
      { id: 'c-hab-time-2', front: 'Does missing one day ruin a habit?', back: 'No. Overall consistency matters; aim to never miss twice.' },
    ],
    related: ['hab-what'],
    sources: [SRC.lally],
  },
  {
    id: 'hab-intentions',
    unit: 'Building habits',
    title: 'If-then plans',
    summary: 'Deciding exactly when and where you\'ll act makes you far more likely to follow through.',
    ideas: ['Implementation intentions', 'How well they work', 'Plan for obstacles too'],
    body: `
## Implementation intentions

A goal says **what** you want: "I want to exercise more." An **implementation intention**, a term from psychologist Peter Gollwitzer, adds **when, where and how**, in the form of an if-then plan:

> "**If** it's Monday, Wednesday or Friday at 7am, **then** I'll put on my running shoes and run around the park."

The "if" names a specific cue. When the cue arrives, the action is already decided, so you don't have to weigh it up again in the moment. In effect, you're borrowing the structure of a habit before the habit exists.

## How well they work

A 2006 meta-analysis by Gollwitzer and Sheeran combined 94 studies with over 8,000 participants. Forming implementation intentions had a **medium-to-large effect** on reaching goals (an effect size of about d = 0.65), across areas like health, study and the environment.

That's a large benefit for something that takes a minute. The key is specificity: "I'll study more" does little; "after dinner on weekdays, I'll sit at my desk and do 20 minutes of flashcards" does a lot.

## Plan for obstacles too

You can use the same format for predictable obstacles:

- "If I'm too tired to run, then I'll walk for 10 minutes instead."
- "If someone offers me a cigarette, then I'll say I've quit and ask about their weekend."
- "If it's raining, then I'll do the indoor workout video."

Think about where your plan usually breaks down, and write an if-then for each.
`,
    takeaways: [
      'An implementation intention is an if-then plan: when, where and how you\'ll act.',
      'A meta-analysis of 94 studies found a medium-to-large effect (d ≈ 0.65).',
      'Write if-then plans for likely obstacles too.',
    ],
    quiz: [
      {
        q: 'Which is an implementation intention?',
        options: ['I want to read more', 'I\'ll read more this year', 'If I get into bed, then I\'ll read ten pages before turning on my phone', 'Reading is important'],
        answer: 2,
        why: 'It names a specific cue and the action to take.',
      },
      {
        q: 'Why do if-then plans help?',
        options: ['They add pressure', 'The decision is made in advance, so the cue triggers the action without deliberation', 'They replace effort', 'They make goals smaller'],
        answer: 1,
        why: 'Pre-deciding links the action to a cue, like a habit.',
      },
      {
        q: 'Which if-then plan handles an obstacle?',
        options: ['If it\'s 6pm, then I\'ll cook', 'If I\'m too tired to cook, then I\'ll make the 10-minute omelette instead of ordering takeaway', 'I will cook every day', 'Cooking is healthy'],
        answer: 1,
        why: 'It anticipates a common failure point and sets a fallback.',
      },
    ],
    practice: 'Choose one goal. Write one if-then plan for doing it and two if-then plans for the obstacles most likely to get in the way.',
    cards: [
      { id: 'c-hab-intentions-1', front: 'What is an implementation intention?', back: 'An if-then plan specifying when, where and how you\'ll act: "If X, then I\'ll do Y."' },
      { id: 'c-hab-intentions-2', front: 'How effective are implementation intentions (Gollwitzer & Sheeran, 2006)?', back: 'Medium-to-large effect on goal attainment, about d = 0.65 across 94 studies.' },
      { id: 'c-hab-intentions-3', front: 'How do you plan for obstacles?', back: 'Write an if-then for each likely obstacle: "If I\'m too tired, then I\'ll do the short version."' },
    ],
    related: ['hab-tiny'],
    sources: [SRC.gollwitzer],
  },
  {
    id: 'hab-environment',
    unit: 'Building habits',
    title: 'Design your environment',
    summary: 'Make good habits easy and obvious, and bad ones hard and hidden.',
    ideas: ['Change the cues', 'Adjust friction', 'Use moments of change'],
    body: `
## Change the cues

Since habits are triggered by context, changing the context is one of the most reliable ways to change behaviour.

- Want to practise guitar? Leave it on a stand in the living room, not in its case in a cupboard.
- Want to eat more fruit? Put a bowl on the counter where you see it.
- Want to snack less? Keep snacks out of sight, or out of the house.

What you see shapes what you do, often without your noticing.

## Adjust friction

Small amounts of effort have outsized effects. Wendy Wood's research on habits highlights **friction**: the time and steps between you and a behaviour.

- **Reduce friction for good habits**: lay out gym clothes the night before; keep a water bottle on your desk; save a workout video as a bookmark.
- **Add friction to bad habits**: log out of apps after each use; move them off your home screen; leave your credit card in another room when online shopping.

Twenty seconds of extra effort can be enough to tip a borderline decision.

## Use moments of change

Old habits are tied to old contexts, so moments when your context changes anyway are good times to start new ones. Verplanken and Roy (2016) found that people who had **recently moved house** were more responsive to an intervention encouraging sustainable habits than people who hadn't. The old cues were gone, so new behaviours had room to take hold.

A new job, a move, a new term, even a rearranged room: use them deliberately to set up the habits you want.
`,
    takeaways: [
      'Put cues for good habits in plain sight and hide cues for bad ones.',
      'Small friction changes have large effects; lower it for good habits, raise it for bad.',
      'Life changes disrupt old cues and are good times to start new habits.',
    ],
    quiz: [
      {
        q: 'You want to read more. Which environment change helps most?',
        options: ['Buying a bookshelf', 'Leaving a book on your pillow and charging your phone in another room', 'Downloading more apps', 'Joining a forum'],
        answer: 1,
        why: 'It makes the good cue obvious and adds friction to the competing habit.',
      },
      {
        q: 'What\'s an example of adding friction to a bad habit?',
        options: ['Putting snacks at eye level', 'Logging out of a social app after each use', 'Keeping your phone by your bed', 'Saving your card details'],
        answer: 1,
        why: 'Having to log in again creates a pause before automatic use.',
      },
      {
        q: 'Why are moments like moving house good for starting habits?',
        options: ['People have more free time', 'Old context cues are disrupted, so new behaviours face less competition', 'Moving is relaxing', 'They aren\'t'],
        answer: 1,
        why: 'Verplanken and Roy found recent movers were more responsive to habit change.',
      },
    ],
    practice: 'Pick one habit to build and one to break. Make one environment change for each today.',
    cards: [
      { id: 'c-hab-environment-1', front: 'Environment design for habits?', back: 'Make good cues visible and easy; hide bad cues and add friction.' },
      { id: 'c-hab-environment-2', front: 'What is friction in habit change?', back: 'The time and steps between you and a behaviour. Small changes have large effects.' },
      { id: 'c-hab-environment-3', front: 'Habit discontinuity hypothesis?', back: 'Life changes (like moving) disrupt old cues, making it easier to form new habits.' },
    ],
    related: ['hab-breaking', 'foc-distractions'],
    sources: [SRC.wood2016, SRC.verplanken],
  },
  {
    id: 'hab-tiny',
    unit: 'Building habits',
    title: 'Start small and stack',
    summary: 'A habit too small to skip beats an ambitious one you abandon.',
    ideas: ['Make it tiny', 'Habit stacking', 'Make it satisfying'],
    body: `
## Make it tiny

Ambitious starts often fail: an hour at the gym every day, a chapter a night. On a bad day the habit feels too big, you skip it, and soon it's gone.

Since repetition is what builds the habit, start with a version **so small it's hard to skip**:

- One push-up, not fifty.
- Floss one tooth.
- Write one sentence.
- Put on running shoes and step outside.

Once the routine is automatic, grow it. A tiny habit that happens every day beats a big one that happens twice.

## Habit stacking

A good cue for a new habit is **something you already do every day**. Attach the new behaviour straight after it:

> "After I pour my morning coffee, I'll write down my top priority for the day."
> "After I brush my teeth at night, I'll do two minutes of stretching."

The existing habit is a reliable, specific cue, which makes this a kind of if-then plan. Choose an anchor that happens at the right time and place for the new behaviour.

## Make it satisfying

Habits form faster when the behaviour is rewarding **right away**. The long-term benefits of exercise or saving are real but distant, so add something immediate:

- Tick it off on a visible tracker.
- Pair it with something you enjoy: a podcast only while walking, a favourite tea while studying.
- Notice how you feel straight after.

Over time, the behaviour itself often becomes the reward.
`,
    takeaways: [
      'Start with a version too small to skip, then grow it.',
      'Attach new habits to existing daily routines.',
      'Add an immediate reward, since long-term benefits feel distant.',
    ],
    quiz: [
      {
        q: 'Why start a new habit very small?',
        options: ['Small habits are more important', 'Repetition builds the habit, and a tiny version gets done even on bad days', 'Big habits are impossible', 'It\'s less tiring forever'],
        answer: 1,
        why: 'Consistency matters more than size at first.',
      },
      {
        q: 'Which is habit stacking?',
        options: ['Doing five habits at once', 'After I start the dishwasher, I\'ll wipe the counter', 'Stacking books', 'Tracking habits in an app'],
        answer: 1,
        why: 'It attaches a new behaviour to an existing daily routine.',
      },
      {
        q: 'Why add an immediate reward to a new habit?',
        options: ['Rewards are required', 'Long-term benefits feel distant; immediate satisfaction reinforces repetition', 'It makes the habit longer', 'It doesn\'t help'],
        answer: 1,
        why: 'Behaviour that\'s satisfying right away is more likely to be repeated.',
      },
    ],
    practice: 'Write one habit stack: "After I [existing habit], I will [tiny new habit]." Do it tomorrow and tick it off.',
    cards: [
      { id: 'c-hab-tiny-1', front: 'Why start habits tiny?', back: 'A version too small to skip gets repeated on bad days; repetition is what builds the habit.' },
      { id: 'c-hab-tiny-2', front: 'What is habit stacking?', back: 'Attaching a new habit right after an existing one: "After I X, I will Y."' },
      { id: 'c-hab-tiny-3', front: 'Temptation bundling?', back: 'Pairing a habit with something you enjoy, such as a podcast only while exercising.' },
    ],
    related: ['hab-intentions', 'foc-procrastination'],
  },
  {
    id: 'hab-willpower',
    unit: 'Breaking and sustaining',
    title: 'Willpower is overrated',
    summary: 'People who seem disciplined mostly avoid temptation rather than resist it.',
    ideas: ['Ego depletion didn\'t hold up', 'Self-control is mostly avoidance'],
    body: `
## Ego depletion didn't hold up

A famous idea in psychology was **ego depletion**: willpower is a limited resource, like a muscle that tires, so resisting one temptation leaves you weaker against the next. It was supported by many studies in the 1990s and 2000s.

Then, in 2016, Hagger and colleagues ran a **preregistered replication across 23 labs** with over 2,000 participants. The effect was **close to zero**. Later large replications also found little or no effect. The idea that you "run out" of willpower in a simple, fixed way is now widely doubted.

You do get tired, of course, and tiredness, stress and hunger make lapses more likely. But the model of a fuel tank that empties with each act of self-control isn't well supported.

## Self-control is mostly avoidance

If not superior willpower, what makes some people good at self-control? A 2015 study by Ent, Baumeister and Tice found that people high in trait self-control reported **fewer temptations** in the first place. They didn't resist more; they set up their lives so they needed to resist less.

They tend to:

- Keep temptations out of the house and out of view.
- Build routines so good behaviours happen automatically.
- Plan ahead for risky situations.

In other words, they use the tools from the last few lessons: habits, environment design and if-then plans. If you think of yourself as having "no willpower", that's good news. You don't need more of it. You need fewer situations that demand it.
`,
    takeaways: [
      'A 23-lab replication found the ego-depletion effect close to zero.',
      'People high in self-control experience fewer temptations, not better resistance.',
      'Design routines and environments so less willpower is needed.',
    ],
    quiz: [
      {
        q: 'What did the 2016 multi-lab replication of ego depletion find?',
        options: ['A large effect', 'An effect close to zero', 'Willpower increases with use', 'It was never tested'],
        answer: 1,
        why: 'Across 23 labs and over 2,000 participants, the effect was near zero.',
      },
      {
        q: 'According to Ent et al. (2015), how do people high in self-control mostly succeed?',
        options: ['They resist temptations more forcefully', 'They encounter fewer temptations, by structuring their lives to avoid them', 'They are less hungry', 'They have more free time'],
        answer: 1,
        why: 'Avoiding temptation is more effective than resisting it.',
      },
      {
        q: 'Someone says, "I have no willpower, so I can\'t change." What\'s a better approach?',
        options: ['Try harder', 'Change routines and surroundings so the change needs less willpower', 'Give up', 'Wait for motivation'],
        answer: 1,
        why: 'Habits and environment design reduce how much self-control you need.',
      },
    ],
    cards: [
      { id: 'c-hab-willpower-1', front: 'Did ego depletion replicate?', back: 'A 2016 23-lab preregistered replication found an effect close to zero.' },
      { id: 'c-hab-willpower-2', front: 'How do people high in self-control succeed (Ent et al., 2015)?', back: 'Mostly by encountering fewer temptations, not by resisting harder.' },
    ],
    related: ['hab-environment'],
    sources: [SRC.hagger, SRC.ent],
  },
  {
    id: 'hab-breaking',
    unit: 'Breaking and sustaining',
    title: 'Breaking a bad habit',
    summary: 'You can\'t just delete a habit. Remove its cue or replace what it does for you.',
    ideas: ['Find the cue', 'Replace, don\'t just remove', 'Make it inconvenient'],
    body: `
## Find the cue

Bad habits feel like they happen "for no reason", but they have cues like any other habit. For a week, each time you do the habit, note:

- **Where** were you?
- **When** was it?
- **Who** was around?
- **What were you feeling**?
- **What did you just do**?

Patterns appear quickly: phone scrolling right after waking, snacking when stuck on a task, smoking with coffee.

## Replace, don't just remove

A habit exists because it gives you something: relief from boredom, a break, comfort, social connection. If you remove it without replacing that, the need remains and the habit tends to return.

So keep the cue and the reward, and **swap the routine**:

- Bored at your desk and reaching for your phone? → Stand up and get water.
- Stressed in the evening and reaching for wine? → Take a short walk or call a friend.
- Nail biting when anxious? → Keep a stress ball or fidget object in your hand.

An if-then plan helps: "If I feel the urge to check my phone while working, then I'll take three slow breaths and write down what I was about to do."

## Make it inconvenient

Add friction to the old routine. Delete the app instead of just closing it. Don't keep cigarettes at home. Unsubscribe from shopping emails. Ask a friend to hold you accountable.

Expect urges to continue for a while: the cue-response link fades gradually. Each time the cue arrives and you don't act on it, the link weakens a little.
`,
    takeaways: [
      'Log when, where, with whom and how you felt to find a habit\'s cues.',
      'Keep the cue and the reward, but swap in a new routine.',
      'Add friction to the old behaviour; urges fade gradually.',
    ],
    quiz: [
      {
        q: 'Why log the context each time you do a bad habit?',
        options: ['To feel guilty', 'To find its cues, which you can then change or plan around', 'Logging stops habits by itself', 'It\'s required'],
        answer: 1,
        why: 'Habits have cues; identifying them is the first step.',
      },
      {
        q: 'Why does simply stopping a habit often fail?',
        options: ['Habits are permanent', 'The habit meets a need; without a replacement, the need pulls you back', 'Stopping is illegal', 'It doesn\'t fail'],
        answer: 1,
        why: 'Replace the routine with one that meets the same need.',
      },
      {
        q: 'You snack whenever you\'re stuck on a task. Which replacement best keeps the reward?',
        options: ['Ban all snacks and keep working', 'Take a short walk or stretch for two minutes when stuck', 'Snack more', 'Work longer hours'],
        answer: 1,
        why: 'It gives the same break and relief through a different routine.',
      },
    ],
    practice: 'Choose a habit you want to break. Note its cue and the need it meets, then write an if-then plan with a replacement routine.',
    cards: [
      { id: 'c-hab-breaking-1', front: 'First step in breaking a habit?', back: 'Find its cues: where, when, who with, what feeling, what just happened.' },
      { id: 'c-hab-breaking-2', front: 'Replace vs remove a habit?', back: 'Keep the cue and reward, swap the routine, so the underlying need is still met.' },
    ],
    related: ['hab-environment', 'hab-intentions'],
  },
  {
    id: 'hab-lapses',
    unit: 'Breaking and sustaining',
    title: 'Lapses and fresh starts',
    summary: 'Slipping up is normal. What matters is what you do next.',
    ideas: ['The what-the-hell effect', 'Fresh starts', 'Track progress, not perfection'],
    body: `
## The what-the-hell effect

You're on a diet, eat one biscuit, think "I've blown it today anyway", and eat the packet. Researchers have nicknamed this the **what-the-hell effect**: a small lapse, seen as total failure, leads to a much bigger one.

It comes from all-or-nothing thinking. The fix is to treat a lapse as **data, not a verdict**:

- What led to it? A cue you didn't plan for? Tiredness? A social situation?
- What if-then plan would handle it next time?
- Then get back on track at the next opportunity, not "on Monday".

## Fresh starts

Dai, Milkman and Riis (2014) found that people are more likely to start aspirational behaviour after **temporal landmarks**: the start of a week, month or year, birthdays, and holidays. Gym visits and searches for "diet" rose at these points.

Landmarks help because they create a feeling of a clean slate, separating you from past failures. You can use this deliberately: start a new habit on a Monday or the first of the month, or treat a birthday as a reset.

But don't wait for a landmark to recover from a lapse. Tomorrow morning is a fine fresh start.

## Track progress, not perfection

A simple record, such as a calendar with ticks, shows your progress and makes a lapse look like what it is: one gap in a mostly full row.

Measure what you control (did I do the routine?) rather than only outcomes (weight, savings), which bounce around for reasons outside your control. Look at trends over weeks, not individual days.
`,
    takeaways: [
      'Treat a lapse as information, not proof you\'ve failed.',
      'Temporal landmarks like Mondays and birthdays make fresh starts easier.',
      'Track the routine you control, and look at trends over weeks.',
    ],
    quiz: [
      {
        q: 'What is the what-the-hell effect?',
        options: ['Forgetting your goal', 'A small lapse, seen as total failure, triggering a bigger one', 'Swearing more when stressed', 'A gym technique'],
        answer: 1,
        why: 'All-or-nothing thinking turns a slip into a binge.',
      },
      {
        q: 'What did Dai, Milkman and Riis (2014) find?',
        options: ['People start aspirational behaviour more often after temporal landmarks like new weeks, months and birthdays', 'Fresh starts never work', 'Only New Year matters', 'Landmarks reduce motivation'],
        answer: 0,
        why: 'Landmarks create a clean-slate feeling that motivates new beginnings.',
      },
      {
        q: 'What\'s the best thing to track for a new exercise habit?',
        options: ['Daily weight only', 'Whether you did the routine each day', 'How others are doing', 'Nothing'],
        answer: 1,
        why: 'The routine is in your control; outcomes fluctuate for many reasons.',
      },
    ],
    cards: [
      { id: 'c-hab-lapses-1', front: 'What is the what-the-hell effect?', back: 'A small lapse, seen as total failure, leading to a bigger lapse.' },
      { id: 'c-hab-lapses-2', front: 'The fresh start effect (Dai et al., 2014)?', back: 'People are more likely to start aspirational behaviour after temporal landmarks like Mondays, new months and birthdays.' },
      { id: 'c-hab-lapses-3', front: 'What should you track for a habit?', back: 'Whether you did the routine (in your control), looking at trends over weeks.' },
    ],
    related: ['hab-time'],
    sources: [SRC.dai],
  },
]
