// Sources were checked in October 2026.
const SRC = {
  kluger: { title: 'Kluger & DeNisi (1996): The effects of feedback interventions on performance, a meta-analysis', url: 'https://doi.org/10.1037/0033-2909.119.2.254' },
  sbi: { title: 'Mind Tools: The Situation-Behavior-Impact feedback tool (from the Center for Creative Leadership)', url: 'https://prime.mindtools.com/pages/article/situation-behavior-impact-feedback.htm' },
  mueller: { title: 'Mueller & Dweck (1998): Praise for intelligence can undermine children\'s motivation and performance', url: 'https://doi.org/10.1037/0022-3514.75.1.33' },
  lewicki: { title: 'Lewicki, Polin & Lount (2016): An exploration of the structure of effective apologies', url: 'https://doi.org/10.1111/ncmr.12073' },
  osu: { title: 'Ohio State University: The 6 elements of an effective apology, according to science', url: 'https://news.osu.edu/the-6-elements-of-an-effective-apology-according-to-science/' },
}

export const lessons = [
  {
    id: 'fbk-why',
    unit: 'Feedback',
    title: 'Why feedback often fails',
    summary: 'Feedback helps on average, but often backfires. The difference is where it points attention.',
    ideas: ['A third of feedback makes things worse', 'Point at the task, not the person'],
    body: `
## A third of feedback makes things worse

It seems obvious that feedback improves performance. In 1996, Avraham Kluger and Angelo DeNisi analysed 131 studies of feedback at work and in labs. On average, feedback did help. But in **more than a third of cases, it made performance worse**, and this wasn't explained by whether the feedback was positive or negative.

So feedback isn't automatically good. How it's given matters a great deal.

## Point at the task, not the person

Kluger and DeNisi's explanation: feedback works when it keeps attention on the **task**, meaning what was done and how to do it better. It tends to backfire when it shifts attention to the **self**: "Am I good enough? Does my boss think I'm incompetent?"

Once people feel their identity or status is threatened, they get defensive, anxious or demotivated, and the useful information gets lost.

Compare:

> **Self-focused**: "You're careless with details."
> **Task-focused**: "The report had three wrong figures in the summary table. Could you add a check against the source data before sending?"

The first is a judgement about who someone is. The second describes what happened and what to do next. The second is easier to hear, harder to argue with, and tells the person exactly what to change.

Good feedback is:

- **Specific**: about a particular piece of work or behaviour.
- **Actionable**: it points to what to do differently.
- **Timely**: soon enough that the situation is fresh.
- **About behaviour**, not personality.

The next lesson gives a simple structure for doing this.
`,
    takeaways: [
      'In a major meta-analysis, over a third of feedback interventions reduced performance.',
      'Feedback works when it focuses attention on the task, and backfires when it threatens the self.',
      'Make feedback specific, actionable, timely and about behaviour.',
    ],
    quiz: [
      {
        q: 'What did Kluger and DeNisi (1996) find?',
        options: ['Feedback always improves performance', 'Feedback helped on average, but over a third of interventions made performance worse', 'Only positive feedback works', 'Feedback has no effect'],
        answer: 1,
        why: 'Feedback is often helpful but frequently backfires.',
      },
      {
        q: 'According to their theory, when does feedback tend to backfire?',
        options: ['When it\'s about the task', 'When it shifts attention to the person\'s self and identity', 'When it\'s written', 'When it\'s brief'],
        answer: 1,
        why: 'Threats to the self trigger defensiveness and distract from the task.',
      },
      {
        q: 'Which feedback is task-focused?',
        options: ['"You\'re not a team player."', '"You missed two of the three stand-ups this week; can you let us know in advance if you can\'t make it?"', '"You\'re lazy."', '"You always do this."'],
        answer: 1,
        why: 'It describes specific behaviour and a next step.',
      },
    ],
    cards: [
      { id: 'c-fbk-why-1', front: 'Kluger & DeNisi (1996) feedback finding?', back: 'Feedback helped on average, but over a third of feedback interventions reduced performance.' },
      { id: 'c-fbk-why-2', front: 'When does feedback backfire?', back: 'When it shifts attention from the task to the self (identity, status).' },
      { id: 'c-fbk-why-3', front: 'Four qualities of good feedback?', back: 'Specific, actionable, timely, about behaviour not personality.' },
    ],
    sources: [SRC.kluger],
  },
  {
    id: 'fbk-giving',
    unit: 'Feedback',
    title: 'Giving useful feedback',
    summary: 'Situation, behaviour, impact: a simple structure that keeps feedback clear and fair.',
    ideas: ['Situation, behaviour, impact', 'Make it a conversation'],
    body: `
## Situation, behaviour, impact

The Center for Creative Leadership's **SBI** model gives feedback a clear shape:

1. **Situation**: when and where. "In yesterday's client meeting…"
2. **Behaviour**: what the person actually did, described as a camera would record it, without judgement. "…you interrupted the client three times while they were explaining their budget…"
3. **Impact**: the effect it had, on you, the team, the client or the work. "…and they stopped sharing details. We left without the numbers we needed."

SBI works for positive feedback too, which makes praise more useful:

> "In this morning's incident call, you summarised the timeline every ten minutes. It kept everyone aligned, and we fixed it faster."

**Behaviour, not interpretation**: "You rolled your eyes" is behaviour; "you were disrespectful" is interpretation. "You arrived 20 minutes late" is behaviour; "you don't care" is a guess about motives.

## Make it a conversation

After the impact, **stop and ask**, rather than lecturing:

- "How did it look from your side?"
- "What was going on for you?"

CCL suggests this adds a fourth element: the person's **intent**. Often there's context you didn't know: they were nervous, or misread what the client wanted. Then agree together on what to do next time.

Some practical points:

- **Give critical feedback in private**, and soon, while details are fresh.
- **Ask first** if it's unsolicited: "Can I give you some feedback on the meeting?"
- **Keep it to one or two points**; a long list overwhelms.
- **Give positive feedback often**, so critical feedback isn't the only kind people hear from you.
`,
    takeaways: [
      'SBI: describe the situation, the observable behaviour and its impact.',
      'Describe what a camera would see, not your interpretation of motives.',
      'Then ask for their view and agree on next steps together.',
    ],
    quiz: [
      {
        q: 'What does SBI stand for?',
        options: ['Situation, behaviour, impact', 'Summary, background, ideas', 'Strengths, blind spots, improvement', 'Say, believe, insist'],
        answer: 0,
        why: 'A three-part structure from the Center for Creative Leadership.',
      },
      {
        q: 'Which is a behaviour, rather than an interpretation?',
        options: ['"You were rude."', '"You looked at your phone while Sam was presenting."', '"You don\'t respect the team."', '"You\'re unprofessional."'],
        answer: 1,
        why: 'It describes what anyone could observe, without guessing at motives.',
      },
      {
        q: 'After giving SBI feedback, what should you do?',
        options: ['Leave immediately', 'Ask for their perspective and agree next steps together', 'Repeat it louder', 'List more problems'],
        answer: 1,
        why: 'Their intent and context often change the picture; a conversation leads to agreement.',
      },
    ],
    practice: 'Write SBI feedback for one thing a colleague or friend did well recently, and one thing you\'d like them to do differently.',
    cards: [
      { id: 'c-fbk-giving-1', front: 'The SBI feedback model?', back: 'Situation (when and where), behaviour (what was observable), impact (the effect).' },
      { id: 'c-fbk-giving-2', front: 'Behaviour vs interpretation in feedback?', back: 'Behaviour is what a camera would record; interpretation guesses at motives or character.' },
    ],
    related: ['fbk-why'],
    sources: [SRC.sbi],
  },
  {
    id: 'fbk-praise',
    unit: 'Feedback',
    title: 'Praise that helps',
    summary: 'Specific praise for effort and approach teaches more than "you\'re so smart".',
    ideas: ['Praise the process', 'Be specific'],
    body: `
## Praise the process

In a series of studies in 1998, Claudia Mueller and Carol Dweck gave children a set of problems and then praised them in one of two ways:

- **Ability praise**: "You must be smart at this."
- **Effort praise**: "You must have worked hard at this."

Then all the children got a much harder set they did poorly on. Children praised for ability were more likely to **choose easy tasks** afterwards, **enjoyed** the problems less, **persisted less** and **performed worse** on a final set. Children praised for effort did the opposite. Praise for ability seemed to teach that failure means you aren't smart, so challenges became threats.

The same principle applies to adults at work. Praising **what someone did**, such as their approach, effort, choices and persistence, tells them what to keep doing. Praising a fixed trait gives them nothing to act on and can make them wary of tasks where they might fail.

- Instead of "You're a natural presenter" → "Opening with the customer story got everyone's attention."
- Instead of "You're brilliant" → "Testing those edge cases first caught the bug before release."

## Be specific

Vague praise like "great job" is pleasant but forgettable, and over time can sound automatic. Specific praise is more credible and more useful, because it shows you actually noticed, and it reinforces the exact behaviour.

Use the same SBI shape as critical feedback: the situation, what they did, and the impact. And say it publicly when appropriate: recognition in front of the team often means more than in private.
`,
    takeaways: [
      'In Mueller and Dweck\'s studies, ability praise led children to avoid challenge and persist less.',
      'Praise approach, effort and choices, which people can repeat.',
      'Specific praise is more credible and reinforces the right behaviour.',
    ],
    quiz: [
      {
        q: 'In Mueller and Dweck (1998), how did children praised for intelligence respond to later difficulty?',
        options: ['They persisted more', 'They chose easier tasks, enjoyed problems less and performed worse', 'No different', 'They asked for harder tasks'],
        answer: 1,
        why: 'Ability praise made failure feel like a verdict on their intelligence.',
      },
      {
        q: 'Which praise focuses on process?',
        options: ['"You\'re so talented."', '"You\'re a genius."', '"Breaking the problem into smaller cases really helped you find the bug."', '"Great job."'],
        answer: 2,
        why: 'It names the approach, which they can repeat.',
      },
      {
        q: 'Why is "great job" less effective than specific praise?',
        options: ['It\'s rude', 'It\'s vague: it doesn\'t show what you noticed or what to repeat', 'It\'s too long', 'It\'s too specific'],
        answer: 1,
        why: 'Specific praise is credible and reinforces the exact behaviour.',
      },
    ],
    practice: 'Today, give one person specific praise about something they did, naming the action and its effect.',
    cards: [
      { id: 'c-fbk-praise-1', front: 'Ability vs effort praise (Mueller & Dweck, 1998)?', back: 'Ability praise led children to avoid challenges and persist less; effort praise did the opposite.' },
      { id: 'c-fbk-praise-2', front: 'What makes praise useful?', back: 'It\'s specific and about the process (approach, effort, choices), so people know what to repeat.' },
    ],
    related: ['fbk-giving'],
    sources: [SRC.mueller],
  },
  {
    id: 'fbk-receiving',
    unit: 'Feedback',
    title: 'Receiving feedback',
    summary: 'Feedback is hard to hear for predictable reasons. Spot your trigger, then look for what\'s useful.',
    ideas: ['Three triggers', 'Ask for it, specifically'],
    body: `
## Three triggers

In *Thanks for the Feedback*, Douglas Stone and Sheila Heen describe three things that make feedback hard to take:

1. **Truth triggers**: the feedback seems wrong or unfair. "That's not what happened." Our instinct is to look for the parts that are wrong and dismiss the rest.
2. **Relationship triggers**: it's about **who** said it. "Who are they to tell me that?" We react to the giver instead of the message.
3. **Identity triggers**: it threatens how we see ourselves. "I'm a careful person; I can't have made that error." It can feel overwhelming, out of proportion to the issue.

Notice which one is firing. Then separate it from the content:

- **Truth**: before deciding whether it's right, make sure you **understand** it. Ask what they saw and what they suggest. Even feedback that's 80% wrong may hold a useful 20%.
- **Relationship**: handle the two topics separately. "I want to hear your point about the deadline. Separately, I'd like to talk about how this was raised in front of everyone."
- **Identity**: keep it in proportion. One mistake doesn't define you. Ask: "What's one thing I can take from this?"

## Ask for it, specifically

"Any feedback?" usually gets "No, all good". People rarely volunteer criticism. Make it easy for them:

- Ask a **specific** question: "What's one thing I could have done better in that presentation?"
- Ask **regularly**, so it's routine rather than a big event.
- **Thank them** and don't argue on the spot, even if you disagree. You can think it over later.
- **Act on it** visibly, so they'll tell you again.
`,
    takeaways: [
      'Truth, relationship and identity triggers make feedback hard to hear.',
      'Name your trigger, then understand the feedback before judging it.',
      'Ask specific questions regularly, thank people and act on it.',
    ],
    quiz: [
      {
        q: '"Who is she to criticise my code? Her own is messy." Which trigger is this?',
        options: ['Truth trigger', 'Relationship trigger', 'Identity trigger', 'None'],
        answer: 1,
        why: 'The reaction is to the person giving the feedback, not the content.',
      },
      {
        q: 'Feedback seems mostly wrong to you. What\'s the best first step?',
        options: ['Explain why they\'re wrong', 'Make sure you understand what they saw and suggest before judging it', 'Ignore it', 'Complain to someone else'],
        answer: 1,
        why: 'Understanding comes first; there may be a useful part.',
      },
      {
        q: 'Which request is most likely to get honest feedback?',
        options: ['"Any feedback?"', '"Was that okay?"', '"What\'s one thing I could have done better in that meeting?"', '"I did well, right?"'],
        answer: 2,
        why: 'A specific question makes it easier to give a real answer.',
      },
    ],
    practice: 'Ask one person a specific feedback question this week. Write down what they said and which trigger, if any, you felt.',
    cards: [
      { id: 'c-fbk-receiving-1', front: 'Three feedback triggers (Stone & Heen)?', back: 'Truth (it seems wrong), relationship (it\'s about who said it), identity (it threatens how you see yourself).' },
      { id: 'c-fbk-receiving-2', front: 'How to ask for feedback?', back: 'Ask a specific question regularly, thank them, don\'t argue on the spot, and act on it.' },
    ],
    related: ['fbk-why'],
  },
  {
    id: 'fbk-prepare',
    unit: 'Hard conversations',
    title: 'Preparing a hard conversation',
    summary: 'Know your purpose, separate facts from stories, and open from a neutral starting point.',
    ideas: ['Three conversations in one', 'Know your purpose', 'Start from the third story'],
    body: `
## Three conversations in one

In *Difficult Conversations*, Douglas Stone, Bruce Patton and Sheila Heen from the Harvard Negotiation Project argue that every hard conversation is really three:

1. **The "what happened?" conversation**: disagreement about facts, who's right and who's to blame.
2. **The feelings conversation**: anger, hurt, disappointment, often unspoken but driving everything.
3. **The identity conversation**: what this says about us. "Am I a good manager? Am I competent? Am I being treated fairly?"

People usually focus only on the first and wonder why it goes badly. Before the conversation, think through all three, for yourself and for the other person.

## Know your purpose

Ask: **what do I want to come out of this?** Good purposes are things you can achieve together: understanding each other's view, sharing your perspective, solving a problem. Bad purposes depend on the other person: making them admit they were wrong, making them feel bad.

Sometimes, after thinking it through, you'll decide the conversation isn't needed, or that it's really about something you need to handle yourself. That's fine too.

## Start from the third story

Each person has their own story about what happened, and each thinks theirs is the truth. Opening with yours ("You never do your share") starts a fight.

Instead, open with the **third story**: how a neutral observer would describe the difference between you.

> "I'd like to talk about how we split the work on the project. I think we see it differently, and I'd like to understand how it looks from your side and share mine."

It describes the problem as something you share, invites them in, and signals you want to understand, not just win.
`,
    takeaways: [
      'Hard conversations involve what happened, feelings and identity.',
      'Choose a purpose you can achieve together, not one that depends on them giving in.',
      'Open with the "third story": a neutral description of the difference.',
    ],
    quiz: [
      {
        q: 'Which of the three conversations is about what the situation says about us?',
        options: ['What happened', 'Feelings', 'Identity', 'Logistics'],
        answer: 2,
        why: 'The identity conversation is about competence, goodness and worth.',
      },
      {
        q: 'Which is a good purpose for a difficult conversation?',
        options: ['Make them admit they were wrong', 'Understand each other\'s view and agree how to split work in future', 'Make them feel bad', 'Win the argument'],
        answer: 1,
        why: 'It\'s achievable together and doesn\'t depend on them giving in.',
      },
      {
        q: 'Which opening uses the third story?',
        options: ['"You never pull your weight."', '"I think we see the workload differently, and I\'d like to understand your view and share mine."', '"We need to talk about your attitude."', '"Everyone agrees with me."'],
        answer: 1,
        why: 'It describes the difference neutrally and invites both perspectives.',
      },
    ],
    practice: 'Think of a conversation you\'ve been avoiding. Write notes on all three conversations from both sides, your purpose, and a third-story opening line.',
    cards: [
      { id: 'c-fbk-prepare-1', front: 'Three conversations in every difficult conversation?', back: 'What happened, feelings, identity.' },
      { id: 'c-fbk-prepare-2', front: 'What is the "third story"?', back: 'A neutral description of the difference between you, as an observer would put it.' },
      { id: 'c-fbk-prepare-3', front: 'Good purpose for a hard conversation?', back: 'Something you can achieve together, like mutual understanding or solving a problem.' },
    ],
    related: ['fbk-curiosity'],
  },
  {
    id: 'fbk-curiosity',
    unit: 'Hard conversations',
    title: 'Curiosity, not blame',
    summary: 'Separate intent from impact, and look at how everyone contributed instead of who\'s to blame.',
    ideas: ['Intent is not impact', 'Contribution, not blame', 'Stay curious'],
    body: `
## Intent is not impact

When someone hurts us, we tend to assume they meant to. When we hurt someone, we judge ourselves by our good intentions. Both create trouble.

- **Don't assume their intent from the impact on you.** "When you moved the meeting without asking, I felt sidelined. I'm not sure what was behind it." That's very different from "You deliberately cut me out."
- **Don't defend your intent while ignoring your impact.** "I didn't mean to upset you" may be true, but it doesn't address that they **were** upset. Acknowledge the impact first: "I can see that really affected you."

## Contribution, not blame

**Blame** asks who's at fault and looks backwards, seeking punishment. It makes everyone defensive. **Contribution** asks how each of you contributed to the situation and looks forward, to change.

In most difficult situations, both sides contributed something: one person missed a deadline, but the other gave vague instructions and didn't check in. Naming your own contribution first ("I wasn't clear about the deadline") makes it much easier for the other person to acknowledge theirs.

This is the same idea as **blameless post-mortems** in engineering: focus on how the system allowed the failure, so people share information freely instead of hiding it.

## Stay curious

The most useful stance in a hard conversation is curiosity: **"What am I missing?"** Treat the other person's view as information, not an attack.

- "Help me understand how you see it."
- "What's most important to you here?"
- Reflect back what you hear before responding.

You don't have to agree. Understanding someone's view isn't the same as accepting it, but it's almost always needed before you can solve anything together.
`,
    takeaways: [
      'Don\'t infer intent from impact, and don\'t hide behind your intent when you\'ve had an impact.',
      'Ask how each person contributed rather than who\'s to blame; name your part first.',
      'Stay curious: understanding a view isn\'t the same as agreeing with it.',
    ],
    quiz: [
      {
        q: 'A colleague was hurt by your comment. Which response separates intent from impact well?',
        options: ['"I didn\'t mean it, so it\'s fine."', '"I can see that really hurt. That wasn\'t my intention, and I\'m sorry it landed that way."', '"You\'re too sensitive."', '"Everyone jokes like that."'],
        answer: 1,
        why: 'It acknowledges the impact before explaining intent.',
      },
      {
        q: 'What\'s the difference between blame and contribution?',
        options: ['They\'re the same', 'Blame seeks fault and punishment; contribution asks how each person played a part, to change things', 'Contribution is about money', 'Blame is more honest'],
        answer: 1,
        why: 'Contribution looks forward and lowers defensiveness.',
      },
      {
        q: 'Why name your own contribution first?',
        options: ['To take all the blame', 'It makes it easier for the other person to acknowledge theirs', 'It ends the conversation', 'It isn\'t useful'],
        answer: 1,
        why: 'Owning your part models the openness you hope for.',
      },
    ],
    practice: 'Think of a recent conflict. Write down what you contributed to it, and the impact the other person\'s actions had on you, without guessing their intent.',
    cards: [
      { id: 'c-fbk-curiosity-1', front: 'Intent vs impact?', back: 'Don\'t assume others\' intent from their impact on you; don\'t excuse your impact with your intent.' },
      { id: 'c-fbk-curiosity-2', front: 'Blame vs contribution?', back: 'Blame seeks fault; contribution asks how each person played a part, so you can change things.' },
    ],
    related: ['com-listening', 'fbk-prepare'],
  },
  {
    id: 'fbk-no',
    unit: 'Hard conversations',
    title: 'Saying no',
    summary: 'A good no protects what matters to you and keeps the relationship intact.',
    ideas: ['No starts with a yes', 'Offer what you can'],
    body: `
## No starts with a yes

Many people struggle to say no. They either give in and resent it, or refuse bluntly and damage the relationship. William Ury, co-founder of the Harvard Program on Negotiation, suggests a **positive no** with three parts:

1. **Yes** to what matters to you: your priorities or values. "I'm committed to getting the launch out on time…"
2. **No** to the request, clearly. "…so I can't take on the report this week."
3. **Yes** to the relationship, with a constructive option. "I could review a draft next Wednesday, or suggest someone who has capacity now."

Grounding the no in what you're saying yes to makes it less personal. You're not rejecting them; you're protecting something important.

## Offer what you can

Rather than a flat refusal, look for what you **can** offer:

- **Less**: "I can't write the whole thing, but I can do the summary."
- **Later**: "Not this week, but I could after the 15th."
- **Someone else**: "Priya knows this area better than me."
- **A trade**: "If I take this on, what should I drop?" (This is especially useful with a manager.)

A few more tips:

- **Be clear.** "I'll try" or "maybe" when you mean no creates false hope and a worse conversation later.
- **Keep reasons short.** A long justification invites negotiation over each point.
- **Buy time** if you need it: "Let me check my commitments and get back to you by tomorrow."

The Decision Making subject covers the logic behind this: every yes is a no to something else.
`,
    takeaways: [
      'A positive no: yes to your priority, a clear no, then yes to the relationship.',
      'Offer less, later, someone else or a trade.',
      'Be clear, keep reasons short, and buy time when needed.',
    ],
    quiz: [
      {
        q: 'What are the three parts of Ury\'s positive no?',
        options: ['No, no, no', 'Yes to your priorities, no to the request, yes to the relationship', 'Maybe, later, never', 'Apologise, explain, give in'],
        answer: 1,
        why: 'It grounds the refusal in what matters and keeps the relationship intact.',
      },
      {
        q: 'Your manager asks you to take on a big new task when you\'re already full. Which response is best?',
        options: ['"Sure!" (then work weekends)', '"No."', '"I\'d like to help. If I take this on, which of my current projects should I pause?"', '"I\'ll try."'],
        answer: 2,
        why: 'A trade makes the cost visible and lets your manager prioritise.',
      },
      {
        q: 'Why avoid saying "I\'ll try" when you mean no?',
        options: ['It\'s too formal', 'It creates false hope and a harder conversation later', 'It\'s too short', 'It\'s always fine'],
        answer: 1,
        why: 'Clarity now is kinder than disappointment later.',
      },
    ],
    practice: 'Think of something you\'ve agreed to recently but wish you hadn\'t. Write how you could have said a positive no.',
    cards: [
      { id: 'c-fbk-no-1', front: 'Ury\'s positive no?', back: 'Yes (to your priority), no (to the request), yes (to the relationship, with an option).' },
      { id: 'c-fbk-no-2', front: 'Four alternatives to a flat no?', back: 'Less, later, someone else, or a trade.' },
    ],
    related: ['dm-opportunity-cost'],
  },
  {
    id: 'fbk-apology',
    unit: 'Hard conversations',
    title: 'Apologising well',
    summary: 'An effective apology takes responsibility and offers to fix things. Here\'s what research says matters most.',
    ideas: ['The parts of an apology', 'What to avoid'],
    body: `
## The parts of an apology

In a 2016 study, Roy Lewicki and colleagues tested how people responded to apologies containing different combinations of six elements:

1. Expression of regret: "I'm sorry."
2. Explanation of what went wrong.
3. **Acknowledgement of responsibility**: "It was my fault. I made a mistake."
4. Declaration of repentance: "It won't happen again."
5. **Offer of repair**: "I'll fix it" or "Here's what I'll do to make it right."
6. Request for forgiveness: "Will you forgive me?"

Apologies with more elements were rated as more effective. But two mattered most: **acknowledging responsibility** was the most important, and an **offer of repair** came second. Requesting forgiveness mattered least.

> "I'm sorry I missed the deadline. That was my fault: I didn't flag early enough that I was behind. I've finished the draft now and blocked tomorrow morning to make the revisions you need. I'll check in with you earlier next time."

## What to avoid

- **Non-apologies** that shift responsibility: "I'm sorry **if** you were offended" or "I'm sorry you feel that way." They apologise for the other person's reaction, not your action.
- **"But"**: "I'm sorry, but you also…" cancels the apology. Raise their part in a separate conversation, later.
- **Over-explaining**: a brief explanation helps; a long one sounds like an excuse.
- **Passive voice**: "Mistakes were made." Who made them?
- **Repeating the behaviour**: an apology followed by the same mistake loses credibility fast. The repair and the change are what make it real.
`,
    takeaways: [
      'Acknowledging responsibility is the most important part of an apology; offering repair is second.',
      'More elements generally made apologies more effective; asking forgiveness mattered least.',
      'Avoid "sorry if", "but", over-explaining and the passive voice.',
    ],
    quiz: [
      {
        q: 'According to Lewicki et al. (2016), what is the most important part of an apology?',
        options: ['Asking for forgiveness', 'Acknowledging responsibility', 'A long explanation', 'Saying it in person'],
        answer: 1,
        why: 'Admitting the fault mattered most, followed by an offer of repair.',
      },
      {
        q: 'Which is a non-apology?',
        options: ['"I was wrong to share that without asking you."', '"I\'m sorry if anyone was offended."', '"I\'ll correct the report today."', '"That was my mistake."'],
        answer: 1,
        why: 'It apologises for the reaction, not the action.',
      },
      {
        q: 'Why avoid "I\'m sorry, but…"?',
        options: ['It\'s too short', 'The "but" cancels the apology and shifts focus to the other person', 'It\'s too formal', 'It\'s fine'],
        answer: 1,
        why: 'Raise their part separately, later.',
      },
    ],
    practice: 'Think of a time you should have apologised, or apologised poorly. Write an apology that acknowledges responsibility and offers repair.',
    cards: [
      { id: 'c-fbk-apology-1', front: 'Two most important parts of an apology (Lewicki et al., 2016)?', back: 'Acknowledging responsibility, then offering repair.' },
      { id: 'c-fbk-apology-2', front: 'What makes "I\'m sorry if you were offended" a non-apology?', back: 'It apologises for their reaction rather than your action.' },
    ],
    related: ['fbk-curiosity'],
    sources: [SRC.lewicki, SRC.osu],
  },
]
