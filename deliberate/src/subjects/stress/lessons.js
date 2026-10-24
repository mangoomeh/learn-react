// Sources were checked in October 2026.
const SRC = {
  gross: { title: 'Gross (2002): Emotion regulation, affective, cognitive and social consequences', url: 'https://doi.org/10.1017/S0048577201393198' },
  jamieson: { title: 'Jamieson et al. (2012): Mind over matter, reappraising arousal improves responses to stress', url: 'https://doi.org/10.1037/a0025719' },
  lieberman: { title: 'Lieberman et al. (2007): Putting feelings into words', url: 'https://doi.org/10.1111/j.1467-9280.2007.01916.x' },
  balban: { title: 'Balban et al. (2023): Brief structured respiration practices enhance mood and reduce physiological arousal', url: 'https://doi.org/10.1016/j.xcrm.2022.100895' },
  holt: { title: 'Holt-Lunstad, Smith & Layton (2010): Social relationships and mortality risk, a meta-analytic review', url: 'https://doi.org/10.1371/journal.pmed.1000316' },
  nolen: { title: 'Nolen-Hoeksema, Wisco & Lyubomirsky (2008): Rethinking rumination', url: 'https://doi.org/10.1111/j.1745-6924.2008.00088.x' },
  mcgowan: { title: 'McGowan & Behar (2013): A preliminary investigation of stimulus control training for worry', url: 'https://doi.org/10.1177/0145445512455661' },
  neff: { title: 'Neff (2003): Self-compassion, an alternative conceptualization of a healthy attitude toward oneself', url: 'https://doi.org/10.1080/15298860309032' },
  whoMental: { title: 'WHO fact sheet: Mental health', url: 'https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response' },
  helpline: { title: 'Find A Helpline: free, confidential support lines by country', url: 'https://findahelpline.com/' },
}

export const lessons = [
  {
    id: 'str-what',
    unit: 'Understanding stress',
    title: 'What stress is',
    summary: 'Stress is your body preparing for a challenge. It helps in bursts and harms when it never switches off.',
    ideas: ['The stress response', 'Acute vs chronic stress', 'Control what you can'],
    body: `
> This subject teaches well-established ideas for everyday stress. It isn't therapy or medical advice. If you're struggling, the last lesson covers when and how to get help.

## The stress response

When you face a challenge, such as a deadline, an argument or a near-miss in traffic, your body prepares to act. Stress hormones like adrenaline and cortisol raise your heart rate, sharpen attention and release energy. This **stress response** evolved to help you deal with threats, and it still helps: it's why you can focus intensely before an exam or react fast in an emergency.

Stress is your body's reaction; a **stressor** is the thing causing it. Different people react differently to the same stressor, depending on how they see it and what resources they have.

## Acute vs chronic stress

- **Acute stress** is short-lived: a presentation, a tough workout, a close deadline. The response rises, you deal with it, and your body recovers. In moderate doses this is normal and can even help performance.
- **Chronic stress** is ongoing: months of overwork, money worries, caring for someone, conflict at home. The response never fully switches off.

Chronic stress is linked to poor sleep, headaches, digestive problems, high blood pressure, low mood, anxiety and irritability. The aim isn't a stress-free life, which is impossible; it's **recovery between stressful periods**.

## Control what you can

A useful first step with any stressor is sorting it:

- **What can I change?** Act on it: make the call, ask for help, plan the first step.
- **What can't I change?** Work on how you respond to it, using the tools in the next lessons.

Spending energy fighting what you can't control, while avoiding what you can, is one of the most common ways stress builds up.
`,
    takeaways: [
      'The stress response prepares you to meet a challenge and is useful in bursts.',
      'Chronic stress without recovery is what causes harm.',
      'Act on what you can change; work on your response to what you can\'t.',
    ],
    quiz: [
      {
        q: 'Which is acute stress?',
        options: ['Months of money worries', 'Nerves before a job interview', 'Long-term conflict at home', 'Years of overwork'],
        answer: 1,
        why: 'It\'s short-lived and passes once the challenge is over.',
      },
      {
        q: 'Why is chronic stress harmful when acute stress often isn\'t?',
        options: ['Chronic stress hormones are different', 'The response never fully switches off, so there\'s no recovery', 'Acute stress is always pleasant', 'It isn\'t'],
        answer: 1,
        why: 'Harm comes from ongoing activation without recovery.',
      },
      {
        q: 'You\'re stressed about a looming deadline and a colleague\'s mood. What\'s a good first step?',
        options: ['Worry about both equally', 'Sort what you can change (plan the deadline work) from what you can\'t (their mood)', 'Ignore both', 'Work all night'],
        answer: 1,
        why: 'Act on the controllable; adjust your response to the rest.',
      },
    ],
    practice: 'List three things stressing you right now. Mark each as "can change" or "can\'t change". Write one action for each "can change".',
    cards: [
      { id: 'c-str-what-1', front: 'Stress vs stressor?', back: 'The stressor is the cause; stress is your body\'s and mind\'s reaction.' },
      { id: 'c-str-what-2', front: 'Acute vs chronic stress?', back: 'Acute: short-lived, followed by recovery. Chronic: ongoing, with no recovery, and linked to health problems.' },
    ],
  },
  {
    id: 'str-reappraise',
    unit: 'Tools',
    title: 'Reappraisal',
    summary: 'How you interpret a situation shapes how you feel about it, and you can change the interpretation.',
    ideas: ['Reappraise, don\'t suppress', 'Stress can be fuel'],
    body: `
## Reappraise, don't suppress

Psychologist James Gross studied two common ways people handle emotions:

- **Suppression**: hiding or pushing down the feeling. Keeping a straight face while furious.
- **Reappraisal**: changing how you **interpret** the situation, so the emotion itself changes. "My manager's blunt email probably reflects their stressful week, not a verdict on me."

Gross's research found that reappraisal **reduced** negative feelings, while suppression didn't reduce them and even **increased** physical stress responses and impaired memory for the conversation. People who habitually reappraise tend to report better wellbeing and relationships than people who habitually suppress.

Reappraisal isn't pretending everything's fine. It's looking for an interpretation that is **also true** and more useful:

- "I'm going to fail" → "This is hard, and I've prepared more than I think."
- "They ignored me" → "They might not have seen my message."
- "This is a disaster" → "This is a setback I can recover from."

## Stress can be fuel

You can also reappraise the stress response itself. In a 2012 study, Jamieson and colleagues told some participants, before a stressful public-speaking task, that a racing heart and fast breathing **help** performance by delivering oxygen to the brain. Compared with others, these participants showed a healthier cardiovascular response, more like readiness than threat, and paid less attention to threatening cues.

Before a presentation, instead of telling yourself "calm down", try **"I'm excited, my body is getting ready."** The arousal stays; its meaning changes.
`,
    takeaways: [
      'Reappraisal changes how you interpret a situation, which changes the emotion.',
      'Suppression doesn\'t reduce feelings and increases physical stress.',
      'Seeing arousal as helpful led to a healthier stress response.',
    ],
    quiz: [
      {
        q: 'What is reappraisal?',
        options: ['Hiding your emotions', 'Changing how you interpret a situation so the emotion changes', 'Avoiding the situation', 'Venting loudly'],
        answer: 1,
        why: 'It targets the interpretation, which drives the feeling.',
      },
      {
        q: 'What did Gross find about suppression?',
        options: ['It eliminates negative feelings', 'It didn\'t reduce the feelings and increased physical stress responses', 'It improves memory', 'It\'s the best strategy'],
        answer: 1,
        why: 'Hiding a feeling leaves it intact and costs you physiologically.',
      },
      {
        q: 'Your heart is racing before a talk. Which thought follows Jamieson et al. (2012)?',
        options: ['I must calm down immediately', 'My body is getting ready to perform', 'I\'m about to panic', 'I should leave'],
        answer: 1,
        why: 'Treating arousal as helpful led to a healthier stress response.',
      },
    ],
    practice: 'Think of something that annoyed or worried you this week. Write your first interpretation, then two other interpretations that could also be true.',
    cards: [
      { id: 'c-str-reappraise-1', front: 'Reappraisal vs suppression?', back: 'Reappraisal changes your interpretation and reduces the emotion; suppression hides it without reducing it, and raises physical stress.' },
      { id: 'c-str-reappraise-2', front: 'What did Jamieson et al. (2012) find?', back: 'Telling people that stress arousal helps performance led to healthier cardiovascular responses under stress.' },
    ],
    related: ['str-traps'],
    sources: [SRC.gross, SRC.jamieson],
  },
  {
    id: 'str-naming',
    unit: 'Tools',
    title: 'Name it to tame it',
    summary: 'Putting a feeling into words can turn down its intensity.',
    ideas: ['Affect labelling', 'Be precise'],
    body: `
## Affect labelling

Strong emotions can feel overwhelming and vague: a churning sense that something is wrong. Simply **naming** the emotion can help.

In a 2007 brain-imaging study, Matthew Lieberman and colleagues showed people pictures of emotional faces. When participants **labelled the emotion** ("angry", "scared") rather than matching faces by gender or picking a name, activity dropped in the amygdala, a region involved in threat responses, and rose in a prefrontal region associated with regulating emotion. This is called **affect labelling**.

You don't need to analyse or fix the feeling. Just notice it and name it: "I'm feeling anxious." "That's frustration." Some people find it helps to add distance: "I notice I'm feeling anxious."

Writing about feelings works in a similar way. A few minutes of writing what you feel and why, even if nobody reads it, can make a swirl of emotion feel more manageable.

## Be precise

"Stressed" and "bad" cover a lot. People who can tell their emotions apart more finely, which psychologists call **emotional granularity**, tend to cope better, partly because a precise label points to a response.

- **Disappointed** → something didn't meet expectations. What did you hope for?
- **Overwhelmed** → too much at once. What can be dropped or delayed?
- **Anxious** → worried about what might happen. What's the actual risk?
- **Lonely** → missing connection. Who could you contact?
- **Resentful** → feeling treated unfairly. Is there a conversation to have?

Next time you feel "stressed", ask: what exactly is this?
`,
    takeaways: [
      'Naming an emotion can reduce its intensity (affect labelling).',
      'Writing about feelings works in a similar way.',
      'Precise labels point to useful responses.',
    ],
    quiz: [
      {
        q: 'What did Lieberman et al. (2007) find when people labelled emotions in faces?',
        options: ['More amygdala activity', 'Less amygdala activity and more activity in a regulating prefrontal region', 'No brain change', 'Labelling made people angrier'],
        answer: 1,
        why: 'Putting feelings into words dampened the threat response.',
      },
      {
        q: 'Which is affect labelling?',
        options: ['"I notice I\'m feeling frustrated"', 'Ignoring the feeling', 'Shouting', 'Asking someone else to fix it'],
        answer: 0,
        why: 'Noticing and naming the emotion.',
      },
      {
        q: 'Why does being precise about emotions help?',
        options: ['It sounds clever', 'A precise label points to a specific response', 'All emotions are the same', 'It makes feelings disappear'],
        answer: 1,
        why: '"Overwhelmed" suggests dropping something; "lonely" suggests reaching out.',
      },
    ],
    practice: 'Three times today, pause and name exactly what you\'re feeling in one or two words. Write them down.',
    cards: [
      { id: 'c-str-naming-1', front: 'What is affect labelling?', back: 'Putting a feeling into words, which can reduce its intensity.' },
      { id: 'c-str-naming-2', front: 'What is emotional granularity?', back: 'The ability to distinguish emotions precisely, which tends to help coping.' },
    ],
    sources: [SRC.lieberman],
  },
  {
    id: 'str-traps',
    unit: 'Tools',
    title: 'Thinking traps',
    summary: 'Some thinking patterns make stress worse. Learning to spot them is the first step to loosening them.',
    ideas: ['Common thinking traps', 'Question the thought'],
    body: `
## Common thinking traps

Cognitive behavioural therapy (CBT), one of the best-researched approaches for anxiety and depression, teaches people to notice **thinking traps**: habitual distortions that make situations feel worse than they are. Everyone falls into them sometimes, especially when tired or stressed.

- **Catastrophising**: jumping to the worst case. "If I make a mistake in this presentation, my career is over."
- **All-or-nothing thinking**: no middle ground. "If it isn't perfect, it's a failure."
- **Mind reading**: assuming you know what others think. "They didn't reply, so they must be annoyed with me."
- **Overgeneralising**: one event becomes a rule. "I always mess these up."
- **Should statements**: rigid rules for yourself or others. "I should be able to handle this without help."
- **Discounting the positive**: dismissing good things. "They only said that to be nice."

## Question the thought

Once you spot a trap, examine the thought like a fair judge rather than accepting it as fact:

1. **What's the evidence** for and against it?
2. **What would I say to a friend** who had this thought?
3. **What's the most likely outcome**, not the worst?
4. **If the worst happened, how would I cope?**
5. **Is there a more balanced way** to see it?

> "I always mess these up" → "I made a mistake in the last one. Two before that went fine. I'll prepare the part that tripped me up."

This is reappraisal with structure. The goal isn't forced positivity; it's **accuracy**. Thoughts are guesses, not facts.

Writing the thought down and answering these questions on paper is often more effective than doing it in your head.
`,
    takeaways: [
      'Thinking traps include catastrophising, all-or-nothing, mind reading and overgeneralising.',
      'Examine thoughts like a fair judge: evidence, a friend\'s view, likely outcomes.',
      'Aim for accuracy, not forced positivity.',
    ],
    quiz: [
      {
        q: '"They haven\'t replied to my message, so they must be angry with me." Which trap is this?',
        options: ['Catastrophising', 'Mind reading', 'Should statements', 'Discounting the positive'],
        answer: 1,
        why: 'It assumes knowledge of what someone else is thinking.',
      },
      {
        q: '"If I don\'t get top marks, I\'ve failed." Which trap?',
        options: ['All-or-nothing thinking', 'Mind reading', 'Overgeneralising', 'None'],
        answer: 0,
        why: 'It allows only two outcomes, perfect or failure.',
      },
      {
        q: 'What is the aim of questioning a thought?',
        options: ['Forced positivity', 'A more accurate, balanced view', 'Proving yourself right', 'Avoiding the situation'],
        answer: 1,
        why: 'The goal is accuracy; thoughts are guesses, not facts.',
      },
    ],
    practice: 'Write down one stressful thought you\'ve had recently. Name the trap, then answer the five questions in writing.',
    cards: [
      { id: 'c-str-traps-1', front: 'What is catastrophising?', back: 'Jumping to the worst possible outcome.' },
      { id: 'c-str-traps-2', front: 'What is mind reading (thinking trap)?', back: 'Assuming you know what others think, usually negatively, without evidence.' },
      { id: 'c-str-traps-3', front: 'Five questions to test a thought?', back: 'Evidence? What would I tell a friend? Most likely outcome? How would I cope with the worst? A more balanced view?' },
    ],
    related: ['str-reappraise', 'ct-biases-judgement'],
  },
  {
    id: 'str-worry',
    unit: 'Tools',
    title: 'Worry and rumination',
    summary: 'Thinking about a problem helps only if it moves you towards action.',
    ideas: ['Problem solving vs rumination', 'Worry time'],
    body: `
## Problem solving vs rumination

Thinking hard about a problem can be useful. But there's a kind of repetitive thinking that goes round in circles:

- **Rumination** dwells on the past: "Why did I say that? Why does this always happen to me?"
- **Worry** loops about the future: "What if it goes wrong? What if they say no?"

Research reviewed by Susan Nolen-Hoeksema and colleagues found that rumination tends to **worsen and prolong low mood**, impairs problem solving and pushes away social support. It feels like it should help, as if you're working it out, but it rarely leads anywhere new.

A quick test: **after ten minutes of thinking, do you have a next step?**

- Yes → that's problem solving. Take the step.
- No, just the same thoughts again → that's rumination or worry. Switch to something else.

Good switches are absorbing activities: a conversation, exercise, a task that needs attention, a walk outside.

## Worry time

Telling yourself "stop worrying" rarely works. A better-tested approach is **worry postponement**:

1. Set a daily **worry time**, say 15 minutes at 6pm, not close to bedtime.
2. When a worry comes up during the day, **write it down** and tell yourself you'll deal with it at worry time.
3. At worry time, go through the list. For each item: is there something I can do? If so, plan it. If not, practise letting it go.

In a 2013 study by McGowan and Behar, people with high levels of worry who postponed worries in this way for four weeks reported **less worry and anxiety** than a comparison group. Many people find that by worry time, half the items no longer seem important.
`,
    takeaways: [
      'Rumination and worry loop without progress and can worsen mood.',
      'Test: after ten minutes, do you have a next step? If not, switch activity.',
      'Postpone worries to a set daily worry time, writing them down meanwhile.',
    ],
    quiz: [
      {
        q: 'What\'s the difference between problem solving and rumination?',
        options: ['There is none', 'Problem solving leads to a next step; rumination repeats the same thoughts', 'Rumination is faster', 'Problem solving is only for work'],
        answer: 1,
        why: 'Useful thinking moves towards action.',
      },
      {
        q: 'What did research on rumination find?',
        options: ['It reliably solves problems', 'It tends to worsen and prolong low mood and impair problem solving', 'It has no effect', 'It improves relationships'],
        answer: 1,
        why: 'Rumination feels productive but usually isn\'t.',
      },
      {
        q: 'How does worry postponement work?',
        options: ['Never think about worries', 'Write worries down and deal with them at a set daily time', 'Worry all day to get it over with', 'Worry just before bed'],
        answer: 1,
        why: 'Containing worry to a set time reduced worry and anxiety in a study.',
      },
    ],
    practice: 'Try worry time for a week: choose a time, keep a worry list during the day, and review it only at that time.',
    cards: [
      { id: 'c-str-worry-1', front: 'Rumination vs worry?', back: 'Rumination dwells on the past; worry loops about the future. Both repeat without progress.' },
      { id: 'c-str-worry-2', front: 'Ten-minute test for repetitive thinking?', back: 'After ten minutes, do you have a next step? If not, switch to an absorbing activity.' },
      { id: 'c-str-worry-3', front: 'What is worry postponement?', back: 'Writing worries down and dealing with them only at a set daily worry time.' },
    ],
    related: ['str-traps'],
    sources: [SRC.nolen, SRC.mcgowan],
  },
  {
    id: 'str-body',
    unit: 'Tools',
    title: 'Calming the body',
    summary: 'When stress is running high, working through the body is often faster than arguing with your thoughts.',
    ideas: ['Slow breathing and long exhales', 'Movement and sleep'],
    body: `
## Slow breathing and long exhales

Breathing is one part of the stress response you can control directly. Slow breathing with **longer exhales than inhales** tends to calm the body's arousal.

In a 2023 study by Balban and colleagues, 111 people practised one of several five-minute techniques daily for a month, or did mindfulness meditation. **Cyclic sighing** produced the largest improvement in mood and the largest drop in breathing rate:

1. Breathe in through your nose.
2. Take a second, short inhale on top to fully fill your lungs.
3. Breathe out slowly and fully through your mouth.
4. Repeat for a few minutes.

Other simple patterns also help, such as breathing in for four counts and out for six. Breathing techniques are especially useful in the moment: before a difficult meeting, after an argument, when you can't sleep.

## Movement and sleep

**Exercise** is one of the most reliable stress relievers. It uses up the energy the stress response mobilises, improves mood, and over time makes your body react less strongly to stress. Even a ten-minute brisk walk can take the edge off.

**Sleep** and stress affect each other in a loop: stress makes it harder to sleep, and poor sleep makes you more reactive to stress the next day. Protecting sleep during stressful periods, rather than sacrificing it to get more done, often makes the period easier.

Other things that tend to help the body recover: time outdoors, limiting caffeine when anxious, and reducing alcohol, which may relax you in the moment but worsens sleep and next-day anxiety.
`,
    takeaways: [
      'Slow breathing with long exhales calms arousal; cyclic sighing improved mood in a 2023 study.',
      'Exercise is a reliable stress reliever, even in short doses.',
      'Protect sleep during stressful periods.',
    ],
    quiz: [
      {
        q: 'What is cyclic sighing?',
        options: ['Holding your breath', 'A double inhale through the nose, then a long, slow exhale through the mouth', 'Fast breathing', 'Breathing only through the mouth'],
        answer: 1,
        why: 'It emphasises a long exhale after fully filling the lungs.',
      },
      {
        q: 'In Balban et al. (2023), which practice improved mood most?',
        options: ['Mindfulness meditation', 'Cyclic sighing', 'Box breathing', 'Doing nothing'],
        answer: 1,
        why: 'Cyclic sighing produced the largest mood improvement and drop in breathing rate.',
      },
      {
        q: 'Why is cutting sleep during a stressful week often a bad idea?',
        options: ['Sleep is wasted time', 'Poor sleep makes you more reactive to stress the next day', 'It isn\'t', 'You only need sleep on weekends'],
        answer: 1,
        why: 'Stress and sleep feed each other in a loop.',
      },
    ],
    practice: 'Practise cyclic sighing for three minutes today, and again the next time you notice stress rising. Note how you feel before and after.',
    cards: [
      { id: 'c-str-body-1', front: 'How do you do cyclic sighing?', back: 'Inhale through the nose, add a second short inhale, then exhale slowly and fully through the mouth. Repeat for a few minutes.' },
      { id: 'c-str-body-2', front: 'Why does slow breathing calm you?', back: 'Long exhales tend to reduce the body\'s stress arousal.' },
    ],
    related: ['hea-sleep-habits', 'hea-activity'],
    sources: [SRC.balban],
  },
  {
    id: 'str-support',
    unit: 'Tools',
    title: 'Connection and self-compassion',
    summary: 'Other people, and how you talk to yourself, are some of the strongest buffers against stress.',
    ideas: ['Relationships protect health', 'Treat yourself like a friend'],
    body: `
## Relationships protect health

Social connection is one of the strongest predictors of wellbeing. A 2010 meta-analysis by Holt-Lunstad and colleagues combined 148 studies with over 300,000 people. Those with stronger social relationships had about a **50% higher likelihood of survival** over the study periods, an effect comparable to well-known risk factors like smoking.

For stress specifically, support helps in several ways: practical help, a different perspective, and simply feeling less alone with a problem.

When stressed, many people withdraw, which is the opposite of what helps. Try:

- Telling one trusted person what's going on, even briefly.
- Asking for specific help: "Could you take the kids on Saturday morning?"
- Keeping small social contact going: a walk with a friend, a call, a chat with a colleague.

## Treat yourself like a friend

Many people are far harsher with themselves than they'd ever be with a friend. "You idiot, you always get this wrong."

Psychologist Kristin Neff describes **self-compassion** as having three parts:

1. **Kindness** to yourself instead of harsh judgement.
2. **Common humanity**: remembering everyone struggles and makes mistakes; you're not uniquely flawed.
3. **Mindfulness**: acknowledging the pain without exaggerating or ignoring it.

Self-compassion isn't letting yourself off the hook. People high in self-compassion tend to take responsibility for mistakes and try again, partly because failing feels less threatening. Harsh self-criticism, by contrast, tends to increase anxiety and avoidance.

A simple practice: when you're struggling, ask **"What would I say to a friend in this situation?"**, then say it to yourself.
`,
    takeaways: [
      'Strong relationships were linked to about 50% higher survival likelihood in a large meta-analysis.',
      'When stressed, reach out rather than withdraw, and ask for specific help.',
      'Self-compassion is kindness, common humanity and mindfulness, not letting yourself off the hook.',
    ],
    quiz: [
      {
        q: 'What did Holt-Lunstad et al. (2010) find?',
        options: ['Relationships don\'t affect health', 'Stronger social relationships were linked to about 50% higher likelihood of survival', 'Only family matters', 'Introverts live longer'],
        answer: 1,
        why: 'The effect was comparable to major risk factors.',
      },
      {
        q: 'Which is one of Neff\'s three parts of self-compassion?',
        options: ['Ignoring your mistakes', 'Remembering that everyone struggles (common humanity)', 'Comparing yourself to others', 'Avoiding feelings'],
        answer: 1,
        why: 'Kindness, common humanity and mindfulness.',
      },
      {
        q: 'Does self-compassion make people less accountable?',
        options: ['Yes, always', 'No; self-compassionate people tend to take responsibility and try again', 'It makes them lazy', 'Only at work'],
        answer: 1,
        why: 'Mistakes feel less threatening, making it easier to own them.',
      },
    ],
    practice: 'Message one person you haven\'t talked to in a while. Separately, write what you\'d say to a friend facing your current biggest stressor.',
    cards: [
      { id: 'c-str-support-1', front: 'Social relationships and survival (Holt-Lunstad 2010)?', back: 'Stronger relationships were linked to about 50% higher likelihood of survival across 148 studies.' },
      { id: 'c-str-support-2', front: 'Neff\'s three parts of self-compassion?', back: 'Self-kindness, common humanity and mindfulness.' },
    ],
    related: ['foc-procrastination'],
    sources: [SRC.holt, SRC.neff],
  },
  {
    id: 'str-help',
    unit: 'Tools',
    title: 'When to get help',
    summary: 'Self-help has limits. Knowing the signs that you need more support is part of looking after yourself.',
    ideas: ['Signs it\'s more than everyday stress', 'Where to get help'],
    body: `
## Signs it's more than everyday stress

Everyone has hard days and stressful weeks. Mental health problems are also common: the WHO says **more than a billion people** worldwide live with a mental health condition, roughly one in eight. They're treatable, and getting help early tends to make recovery easier.

Consider talking to a professional if, for **more than two weeks**:

- You feel low, hopeless or empty most of the day.
- You've lost interest or pleasure in things you used to enjoy.
- Anxiety or worry is hard to control and interferes with work, study or relationships.
- Your sleep, appetite or energy have changed a lot.
- You're relying on alcohol, drugs or other habits to cope.
- You find it hard to get through daily tasks.

**Get help immediately** if you have thoughts of harming yourself or ending your life, or if you're worried you might act on them. This is an emergency: contact local emergency services, a crisis line, or someone you trust right away.

## Where to get help

- **A doctor or primary care provider** is often the first step. They can assess you, suggest treatment and refer you.
- **Psychological therapies** like CBT have strong evidence for anxiety and depression.
- **Workplace or student support**: many employers offer confidential counselling through an employee assistance programme; universities have counselling services.
- **Helplines**: free, confidential support. Find A Helpline lists services by country.

Asking for help isn't weakness or failure. You'd see a doctor for a broken leg; this is no different. If a friend shows these signs, ask directly and kindly how they're doing, listen, and help them find support.
`,
    takeaways: [
      'Mental health problems are common and treatable; early help makes recovery easier.',
      'Persistent low mood, anxiety or changes in sleep and appetite over two weeks warrant professional help.',
      'Thoughts of self-harm are an emergency: contact emergency services or a crisis line now.',
    ],
    quiz: [
      {
        q: 'Roughly how many people worldwide live with a mental health condition, according to WHO?',
        options: ['About 10 million', 'More than a billion', 'Almost everyone', 'Almost none'],
        answer: 1,
        why: 'More than a billion people, roughly one in eight, so it\'s common.',
      },
      {
        q: 'Which is a sign to seek professional help?',
        options: ['One bad day after an argument', 'Feeling low and losing interest in things most days for over two weeks', 'Nerves before a presentation', 'Being tired after a workout'],
        answer: 1,
        why: 'Persistent symptoms that affect daily life are worth getting assessed.',
      },
      {
        q: 'A friend mentions thoughts of ending their life. What should you do?',
        options: ['Change the subject', 'Take it seriously: stay with them and help them contact emergency services or a crisis line now', 'Wait to see if it passes', 'Tell them to cheer up'],
        answer: 1,
        why: 'This is an emergency that needs immediate support.',
      },
    ],
    cards: [
      { id: 'c-str-help-1', front: 'When should you seek professional help for mood or anxiety?', back: 'When symptoms persist for more than two weeks and affect daily life, or immediately if you have thoughts of self-harm.' },
      { id: 'c-str-help-2', front: 'Where can you start getting help?', back: 'A doctor, psychological therapy, workplace or student counselling, or a helpline (findahelpline.com).' },
    ],
    sources: [SRC.whoMental, SRC.helpline],
  },
]
