// Sources were checked in October 2026.
const SRC = {
  ericsson: { title: 'Ericsson, Krampe & Tesch-Römer (1993): The role of deliberate practice in the acquisition of expert performance', url: 'https://doi.org/10.1037/0033-295X.100.3.363' },
  macnamara: { title: 'Macnamara, Hambrick & Oswald (2014): Deliberate practice and performance, a meta-analysis', url: 'https://doi.org/10.1177/0956797614535810' },
  granovetter: { title: 'Granovetter (1973): The strength of weak ties', url: 'https://doi.org/10.1086/225469' },
  rajkumar: { title: 'Rajkumar et al. (2022): A causal test of the strength of weak ties', url: 'https://doi.org/10.1126/science.abl4476' },
  sackett: { title: 'Sackett et al. (2022): Revisiting meta-analytic estimates of validity in personnel selection', url: 'https://doi.org/10.1037/apl0000994' },
}

export const lessons = [
  {
    id: 'car-skills',
    unit: 'Building a career',
    title: 'Skills that compound',
    summary: 'Rare and valuable skills give you options. Build them deliberately.',
    ideas: ['Career capital', 'Depth plus breadth', 'Skills that transfer'],
    body: `
## Career capital

In *So Good They Can't Ignore You*, Cal Newport argues that "follow your passion" is weak career advice. Passion often comes **after** you get good at something and gain control over your work. What gives you that control is **career capital**: skills that are **rare and valuable**.

Rare and valuable skills give you leverage: better pay, more interesting work, more autonomy, the ability to choose. Like compound interest, they build on themselves. Each skill makes the next easier to learn and each good project leads to better ones.

Ask regularly:

- What skills does my field value most that are hard to find?
- Am I getting meaningfully better each year, or doing the same year again?
- What would make me hard to replace?

## Depth plus breadth

A useful shape is the **T-shaped** person:

- **Depth** in one area (the vertical bar): real expertise that makes you valuable.
- **Breadth** across neighbouring areas (the horizontal bar): enough understanding to collaborate, see connections and spot opportunities.

A software engineer deep in backend systems who also understands product, design and the business can do more than one who knows only their code. Combining two areas, such as data science and healthcare, or design and engineering, can make you rarer than being excellent at either alone.

## Skills that transfer

Some skills pay off in almost any role and compound over a whole career:

- **Clear writing and communication.**
- **Learning quickly** (see How to Learn).
- **Working well with people**: feedback, negotiation, leadership.
- **Good judgement**: critical thinking and decision making.
- **Understanding how businesses make money.**

These are often underinvested in because they're less visible than technical skills, which is exactly why they're rare.
`,
    takeaways: [
      'Rare and valuable skills (career capital) give you leverage and options.',
      'Aim for a T shape: depth in one area, breadth around it; combinations can be rare.',
      'Communication, learning, people skills and judgement transfer to any role.',
    ],
    quiz: [
      {
        q: 'What is career capital, in Newport\'s sense?',
        options: ['Savings for retirement', 'Rare and valuable skills that give you leverage over your work', 'A large network', 'Years of experience'],
        answer: 1,
        why: 'It\'s skill that others value and can\'t easily find.',
      },
      {
        q: 'What does a T-shaped skill set mean?',
        options: ['Expertise in everything', 'Depth in one area plus broad understanding of related areas', 'Only general skills', 'Only one deep skill'],
        answer: 1,
        why: 'Depth makes you valuable; breadth helps you collaborate and connect.',
      },
      {
        q: 'Why are skills like clear writing often undervalued?',
        options: ['They don\'t matter', 'They\'re less visible than technical skills, so fewer people invest in them', 'They can\'t be learned', 'Everyone already has them'],
        answer: 1,
        why: 'Underinvestment makes them rare and valuable.',
      },
    ],
    practice: 'Write down your deepest skill, two neighbouring areas you could broaden into, and one transferable skill to improve this year.',
    cards: [
      { id: 'c-car-skills-1', front: 'What is career capital?', back: 'Rare and valuable skills that give you leverage and options (Cal Newport).' },
      { id: 'c-car-skills-2', front: 'What is a T-shaped person?', back: 'Deep expertise in one area plus broad knowledge across related areas.' },
    ],
    related: ['bus-moats', 'car-practice'],
  },
  {
    id: 'car-practice',
    unit: 'Building a career',
    title: 'Getting better on purpose',
    summary: 'Experience alone doesn\'t make you better. Deliberate practice does, within limits.',
    ideas: ['Deliberate practice', 'What the evidence really says', 'Practising at work'],
    body: `
## Deliberate practice

Many people do the same job for years without getting much better. Psychologist Anders Ericsson studied how experts develop and described **deliberate practice**: effortful practice designed to improve specific weaknesses, with immediate feedback, just beyond your current ability.

His 1993 study of violinists found that the best students had accumulated far more hours of solitary, focused practice than less accomplished ones. Deliberate practice is:

- **Targeted** at specific skills you're weak at, not things you can already do.
- **Challenging**: just beyond your comfort zone.
- **With feedback**, ideally immediate, from results or a coach.
- **Repeated** and refined.

## What the evidence really says

Popular books turned this into "10,000 hours makes anyone an expert". The evidence is more modest. A 2014 meta-analysis by Brooke Macnamara and colleagues found deliberate practice explained about **26%** of performance differences in games like chess, **21%** in music, **18%** in sports, **4%** in education, and **less than 1%** in professions.

Practice clearly matters, especially in structured fields with clear feedback. But it's not the whole story: starting age, natural ability, the quality of teaching and opportunity all play a part. And in most jobs, the feedback is slower and messier, so you have to create it.

## Practising at work

Work rarely has built-in deliberate practice, so build it:

- **Pick one skill** to improve at a time: running meetings, estimating, writing design docs.
- **Seek fast feedback**: ask a respected colleague to review your work, record a presentation, compare your estimates with actual times.
- **Study experts**: read great examples, then try to reproduce them.
- **Volunteer for stretch work** that's just beyond your current level.
- **Reflect**: after each project, what went well and what would you do differently?
`,
    takeaways: [
      'Deliberate practice is targeted, challenging, with feedback, and repeated.',
      'A 2014 meta-analysis found practice explained 26% of performance differences in games but under 1% in professions.',
      'At work, create your own feedback loops and stretch assignments.',
    ],
    quiz: [
      {
        q: 'Which is deliberate practice?',
        options: ['Playing pieces you already know well', 'Repeating a difficult passage slowly with a teacher\'s feedback until it\'s right', 'Working your normal shift', 'Watching experts'],
        answer: 1,
        why: 'Targeted, challenging, with feedback.',
      },
      {
        q: 'What did Macnamara et al. (2014) find?',
        options: ['Practice explains everything', 'Practice explained a meaningful share of differences in games, music and sport, but very little in professions', 'Practice doesn\'t matter', '10,000 hours guarantees expertise'],
        answer: 1,
        why: 'Practice matters, but less than popular accounts claim, especially in professions.',
      },
      {
        q: 'Why does experience at work often not lead to improvement?',
        options: ['Work is too easy', 'Feedback is slow or missing and people repeat what they already do', 'People are lazy', 'It always leads to improvement'],
        answer: 1,
        why: 'Without targeted challenge and feedback, experience plateaus.',
      },
    ],
    practice: 'Choose one work skill to improve this month. Write how you\'ll practise it and where you\'ll get feedback.',
    cards: [
      { id: 'c-car-practice-1', front: 'Four features of deliberate practice?', back: 'Targeted at weaknesses, challenging, with feedback, repeated.' },
      { id: 'c-car-practice-2', front: 'How much does practice explain (Macnamara 2014)?', back: 'About 26% of variance in games, 21% music, 18% sport, 4% education, <1% professions.' },
    ],
    related: ['lrn-desirable', 'car-skills'],
    sources: [SRC.ericsson, SRC.macnamara],
  },
  {
    id: 'car-network',
    unit: 'Building a career',
    title: 'Your network',
    summary: 'Opportunities often come through acquaintances, not close friends. Build relationships before you need them.',
    ideas: ['The strength of weak ties', 'Build relationships by giving'],
    body: `
## The strength of weak ties

In 1973, sociologist Mark Granovetter found that people often heard about new jobs through **acquaintances** rather than close friends. He called this **the strength of weak ties**. Close friends tend to know the same people and hear the same news as you. Acquaintances move in different circles, so they bring **new information**.

In 2022, researchers ran a causal test using LinkedIn's "People You May Know" experiments across about 20 million users over five years. **Moderately weak ties**, people you share some connections with but aren't close to, were the most helpful for job mobility. The strongest ties were less helpful, and so were the very weakest.

Your network isn't just about job hunting. It brings advice, introductions, collaborators, perspectives and early warnings.

## Build relationships by giving

Networking feels uncomfortable when it's transactional: meeting people only to ask for something. It works better as **building relationships** over time, mostly by being helpful:

- **Stay in touch** with former colleagues and classmates. A short message when you see something relevant to them keeps the connection alive.
- **Help first**: make introductions, share useful articles, give feedback, recommend people.
- **Be visible**: share what you learn through talks, posts or internal write-ups, so people know what you're good at.
- **Join communities** in your field: meetups, conferences, online groups, open-source projects.
- **Be curious about people**: ask about their work and challenges, and follow up.

When you need help, such as a job, advice or an introduction, ask specifically: "Would you be open to a 20-minute call about what it's like working on your team?" is easier to say yes to than "Can you help me find a job?"

Build your network **before** you need it. Reaching out only when job hunting is much harder.
`,
    takeaways: [
      'Weak ties bring new information; moderately weak ties helped job mobility most in a large LinkedIn study.',
      'Build relationships over time by helping, staying in touch and being visible.',
      'Ask for specific, small things, and build your network before you need it.',
    ],
    quiz: [
      {
        q: 'Why are weak ties often more useful for finding new jobs than close friends?',
        options: ['They\'re more powerful', 'They move in different circles and bring new information', 'Close friends don\'t want to help', 'They\'re more numerous'],
        answer: 1,
        why: 'Close friends often know the same things you do.',
      },
      {
        q: 'What did the 2022 LinkedIn study find?',
        options: ['Strongest ties helped most', 'Moderately weak ties helped job mobility most', 'Networks don\'t matter', 'Only very weak ties helped'],
        answer: 1,
        why: 'The benefit peaked with moderately weak ties.',
      },
      {
        q: 'Which request is most likely to get a yes?',
        options: ['"Can you get me a job?"', '"Would you be open to a 20-minute call about your team\'s work?"', '"Please forward my CV to everyone."', '"Can we be friends?"'],
        answer: 1,
        why: 'Small, specific asks are easier to agree to.',
      },
    ],
    practice: 'Message three people you haven\'t spoken to in over six months, with something genuinely useful or a sincere question about their work.',
    cards: [
      { id: 'c-car-network-1', front: 'What is the strength of weak ties?', back: 'Acquaintances bring new information and opportunities more often than close friends (Granovetter, 1973).' },
      { id: 'c-car-network-2', front: 'How to network without being transactional?', back: 'Help first, stay in touch, be visible, join communities, and make specific asks.' },
    ],
    related: ['str-support'],
    sources: [SRC.granovetter, SRC.rajkumar],
  },
  {
    id: 'car-choose',
    unit: 'Building a career',
    title: 'Choosing between opportunities',
    summary: 'Weigh learning, people and impact alongside pay, and treat most career moves as reversible.',
    ideas: ['What to weigh', 'Most moves are two-way doors'],
    body: `
## What to weigh

When comparing jobs, people often focus on salary and title, because they're easy to compare. Other factors often matter more over a career:

- **Learning**: will you get noticeably better? Is there challenging work and people to learn from? Early in a career, this compounds the most.
- **People**: especially your manager. A good manager accelerates your growth; a bad one can make any job miserable. Talk to people on the team before accepting.
- **Impact and scope**: will your work matter, and will you have responsibility?
- **Trajectory**: is the company or field growing? Growing organisations create opportunities.
- **Pay and conditions**: fair pay matters, as does flexibility, location and stability.
- **Fit with your life**: hours, commute, values.

A **weighted decision matrix**, covered in Decision Making, helps: list what matters, weight it, and score each option. It forces you to make trade-offs explicit.

Ask good questions in interviews to gather this information: "What would success look like in the first six months?" "How do people here learn and grow?" "Why did the last person in this role leave?"

## Most moves are two-way doors

Career decisions feel permanent, which makes people freeze. But most aren't. If a job turns out badly, you can usually leave after a year or two, with new skills and contacts. That's a **two-way door**: reversible, so worth deciding faster and with less certainty.

Some choices are harder to reverse, such as a long retraining, relocating a family, or leaving a field for many years. Those deserve more care.

Jeff Bezos has described using a **regret minimisation** frame: imagining yourself at 80, which choice would you regret not making? It's a useful counterweight to fear of the unfamiliar.
`,
    takeaways: [
      'Weigh learning, people (especially your manager), impact and trajectory alongside pay.',
      'Use a weighted matrix and ask probing interview questions.',
      'Most career moves are reversible two-way doors; decide faster on those.',
    ],
    quiz: [
      {
        q: 'Early in a career, which factor often compounds the most?',
        options: ['Job title', 'Learning and skill growth', 'Office location', 'Company logo'],
        answer: 1,
        why: 'Skills built early pay off for decades.',
      },
      {
        q: 'Why talk to future teammates before accepting an offer?',
        options: ['To negotiate salary', 'To learn about the manager and team, which strongly shape your experience', 'It\'s required', 'To make friends'],
        answer: 1,
        why: 'People, especially your manager, matter enormously.',
      },
      {
        q: 'Why are most job moves "two-way doors"?',
        options: ['You can never leave', 'If it doesn\'t work out, you can usually move on with new skills and contacts', 'They\'re always permanent', 'Doors are irrelevant'],
        answer: 1,
        why: 'Reversible decisions deserve less agonising.',
      },
    ],
    practice: 'Think about your current role or a possible move. Score it from 1 to 5 on learning, people, impact, trajectory, pay and life fit. What stands out?',
    cards: [
      { id: 'c-car-choose-1', front: 'Six factors when choosing a job?', back: 'Learning, people (manager), impact, trajectory, pay and conditions, life fit.' },
      { id: 'c-car-choose-2', front: 'Regret minimisation framework?', back: 'Imagine yourself at 80: which choice would you regret not making?' },
    ],
    related: ['dm-reversibility', 'dm-weighted-matrix'],
  },
  {
    id: 'car-resume',
    unit: 'Getting hired',
    title: 'CVs that get interviews',
    summary: 'Show results, not duties, and tailor every application.',
    ideas: ['Results, not responsibilities', 'Tailor and make it skimmable'],
    body: `
## Results, not responsibilities

Most CVs list duties: "Responsible for the company blog." "Managed social media." That tells the reader what you were supposed to do, not whether you did it well.

Instead, show **results**. A common formula, popularised by Google's former head of people operations Laszlo Bock: **"Accomplished X, as measured by Y, by doing Z."**

- Weak: "Responsible for improving website performance."
- Strong: "Cut page load time from 4.2s to 1.1s by introducing image compression and caching, increasing sign-ups 18%."

- Weak: "Led a team."
- Strong: "Led a team of 5 to launch a mobile app in 4 months, reaching 50,000 users in the first quarter."

Use **numbers** where you can: money, time, users, percentages, team size. If you don't have exact figures, honest estimates ("about 30%") are fine. Start bullets with strong verbs: built, cut, launched, grew, led, designed.

## Tailor and make it skimmable

Recruiters often spend only seconds on a first scan. Make it easy:

- **Tailor** each application. Reorder and rewrite bullets to match what the job description emphasises. Use its key terms where they honestly apply; many companies use applicant tracking systems that search for them.
- **Put the most relevant and impressive things first**, both in sections and within each role.
- **Keep it short**: one page early in a career, two at most for most people.
- **Simple formatting**: clear headings, consistent dates, no dense paragraphs, no fancy layouts that break tracking software.
- **Cut** outdated or irrelevant items, generic skills like "Microsoft Word", and clichés like "hard-working team player". Show those qualities through results instead.
- **Proofread** carefully, and ask someone else to check it.

Your CV's job is to get you an interview, not to tell your whole story.
`,
    takeaways: [
      'Show results, not duties: "Accomplished X, as measured by Y, by doing Z."',
      'Use numbers and strong verbs.',
      'Tailor each application, put the best first, keep it short and skimmable.',
    ],
    quiz: [
      {
        q: 'Which CV bullet is strongest?',
        options: ['"Responsible for customer support"', '"Handled customer emails"', '"Reduced average response time from 24h to 4h by introducing templates and triage, raising satisfaction from 72% to 89%"', '"Excellent communicator"'],
        answer: 2,
        why: 'It shows a measurable result and how it was achieved.',
      },
      {
        q: 'Why tailor your CV to each job?',
        options: ['To make it longer', 'To match what each role values, and help it pass keyword searches', 'Recruiters require it', 'It isn\'t necessary'],
        answer: 1,
        why: 'Relevance gets attention, from people and tracking software.',
      },
      {
        q: 'What\'s the main purpose of a CV?',
        options: ['To tell your full life story', 'To get you an interview', 'To list every job', 'To show your personality'],
        answer: 1,
        why: 'It needs to earn the next step, not cover everything.',
      },
    ],
    practice: 'Rewrite three bullets on your CV using "accomplished X, as measured by Y, by doing Z".',
    cards: [
      { id: 'c-car-resume-1', front: 'The XYZ CV formula?', back: '"Accomplished X, as measured by Y, by doing Z."' },
      { id: 'c-car-resume-2', front: 'Three rules for a skimmable CV?', back: 'Most relevant first, short, simple formatting with clear headings.' },
    ],
    related: ['com-plain'],
  },
  {
    id: 'car-interview',
    unit: 'Getting hired',
    title: 'Interviewing well',
    summary: 'Prepare stories with STAR, practise out loud, and interview them back.',
    ideas: ['Prepare stories with STAR', 'Ask good questions'],
    body: `
## Prepare stories with STAR

Many interviews include **behavioural questions**: "Tell me about a time you disagreed with a colleague." Structured interviews built on questions like these are among the better predictors of job performance, according to a 2022 review of selection methods by Paul Sackett and colleagues. So they're worth preparing for.

Answer with **STAR**:

1. **Situation**: brief context. "Our team was two weeks from launch…"
2. **Task**: your responsibility. "I was in charge of the payment integration…"
3. **Action**: what **you** did, in detail. This should be the longest part. Say "I", not "we", for your own contribution.
4. **Result**: the outcome, ideally measurable, and what you learned.

Prepare **six to eight stories** that cover common themes: a success, a failure and what you learned, a conflict, leading or influencing without authority, a tough decision, handling pressure. One good story can often answer several questions.

**Practise out loud**, ideally with someone else. Aim for answers of about two minutes. Research the company, the role and the interviewers. Have a crisp answer to "Tell me about yourself": a 60–90 second story of where you've been, what you're good at, and why this role.

## Ask good questions

An interview is two-way: you're assessing them too. Good questions show interest and get information you need:

- "What would success look like in the first six months?"
- "What's the biggest challenge facing the team right now?"
- "How do you support people's growth?"
- "What do you enjoy most about working here, and what would you change?"
- "Why is this role open?"

Afterwards, send a short thank-you note mentioning something specific from the conversation. And when an offer comes, remember: most employers expect you to negotiate.
`,
    takeaways: [
      'Structured, behavioural interviews predict performance well; prepare for them.',
      'Answer with STAR, focusing on your actions and measurable results.',
      'Prepare six to eight stories, practise aloud, and ask probing questions.',
    ],
    quiz: [
      {
        q: 'What does STAR stand for?',
        options: ['Skills, talents, abilities, results', 'Situation, task, action, result', 'Start, think, answer, review', 'Strengths, targets, achievements, roles'],
        answer: 1,
        why: 'A structure for behavioural interview answers.',
      },
      {
        q: 'Which part of a STAR answer should usually be longest?',
        options: ['Situation', 'Task', 'Action', 'Result'],
        answer: 2,
        why: 'Interviewers want to hear what you actually did.',
      },
      {
        q: 'Why say "I" rather than "we" when describing actions?',
        options: ['It sounds more confident', 'Interviewers need to know your specific contribution', 'Teams don\'t matter', 'It\'s shorter'],
        answer: 1,
        why: 'They\'re assessing you, not the team.',
      },
    ],
    practice: 'Write one STAR story about a time you solved a hard problem. Time yourself telling it out loud and trim it to about two minutes.',
    cards: [
      { id: 'c-car-interview-1', front: 'STAR method?', back: 'Situation, task, action (longest, your part), result (ideally measurable).' },
      { id: 'c-car-interview-2', front: 'How many interview stories to prepare?', back: 'Six to eight, covering success, failure, conflict, influence, decisions and pressure.' },
      { id: 'c-car-interview-3', front: 'Two good questions to ask an interviewer?', back: '"What would success look like in six months?" and "What\'s the team\'s biggest challenge right now?"' },
    ],
    related: ['neg-salary', 'com-talks'],
    sources: [SRC.sackett],
  },
  {
    id: 'car-promotion',
    unit: 'Growing at work',
    title: 'Getting promoted',
    summary: 'Promotions go to visible impact at the next level, agreed with your manager in advance.',
    ideas: ['Know what the next level means', 'Make your impact visible'],
    body: `
## Know what the next level means

Many people assume promotion comes from working harder at their current job. Usually, it comes from showing you can already work **at the next level**, which often means different work, not more of the same: wider scope, more independence, leading others, handling ambiguity.

Find out what that means where you work:

- Read your organisation's **career framework** or level descriptions, if it has one.
- Ask your manager directly: **"What would I need to show to be ready for the next level? What gaps do you see?"**
- Agree on a few **specific goals** and revisit them regularly. This turns a vague hope into a shared plan.
- Ask what the **process** is: who decides, when, and based on what evidence.

Your manager usually needs to argue your case to others. Make it easy for them to be your advocate.

## Make your impact visible

Good work that nobody knows about rarely gets rewarded. Visibility isn't bragging; it's making sure decision-makers have the information they need.

- **Focus on impact**: work that matters to the team's goals, not just busy work. Ask which problems matter most.
- **Keep a record of achievements** as you go, sometimes called a **brag document**: what you did, the result, and the evidence, such as metrics or feedback. You'll forget otherwise, and it makes reviews and promotion cases much easier.
- **Share progress**: brief updates to your manager, demos, write-ups of what you learned.
- **Help others**: mentoring, reviewing, unblocking colleagues. It shows next-level behaviour and builds advocates.
- **Get feedback from peers** and senior people you work with, since they may be asked about you.

If, after a fair effort, the path seems blocked, that's useful information too. Sometimes growth means a move elsewhere.
`,
    takeaways: [
      'Promotion usually requires showing next-level work, not just more of the current job.',
      'Ask your manager what\'s needed, agree specific goals, and learn the process.',
      'Keep a record of your impact and make it visible.',
    ],
    quiz: [
      {
        q: 'What usually leads to promotion?',
        options: ['Working longer hours at the same tasks', 'Demonstrating you already work at the next level', 'Time in the role alone', 'Asking repeatedly'],
        answer: 1,
        why: 'Promotions recognise next-level scope and impact.',
      },
      {
        q: 'What\'s the best question to ask your manager about promotion?',
        options: ['"When do I get promoted?"', '"What would I need to show to be ready for the next level, and what gaps do you see?"', '"Why haven\'t I been promoted?"', '"Who else is getting promoted?"'],
        answer: 1,
        why: 'It turns a vague hope into concrete, agreed goals.',
      },
      {
        q: 'Why keep a record of your achievements?',
        options: ['To show off', 'You\'ll forget details, and it gives your manager evidence for your case', 'It\'s required', 'To compare with colleagues'],
        answer: 1,
        why: 'Evidence makes reviews and promotion cases much stronger.',
      },
    ],
    practice: 'Start a brag document today. Add three things you achieved in the last three months, with their results.',
    cards: [
      { id: 'c-car-promotion-1', front: 'What does promotion usually require?', back: 'Showing you already work at the next level: wider scope, independence, leading others.' },
      { id: 'c-car-promotion-2', front: 'What is a brag document?', back: 'A running record of what you did, the results and evidence, used for reviews and promotion cases.' },
    ],
    related: ['car-manager', 'fbk-receiving'],
  },
  {
    id: 'car-manager',
    unit: 'Growing at work',
    title: 'Working with your manager',
    summary: 'Understand their goals, avoid surprises, and bring solutions, not just problems.',
    ideas: ['Understand their world', 'No surprises', 'Bring options'],
    body: `
## Understand their world

Your manager is one of the biggest influences on your work life. "Managing up" isn't flattery; it's working **with** your manager effectively.

Start by understanding their situation:

- **What are they measured on?** What does their own manager expect?
- **What are their biggest worries** this quarter?
- **How do they like to communicate?** Some prefer written updates, others quick chats; some want detail, others the headline.

When your work helps them hit their goals, they're more likely to give you interesting work, support and recognition.

## No surprises

Managers hate being blindsided, especially if they hear about a problem from their boss or a customer first. Tell them early when:

- A deadline is at risk.
- Something went wrong.
- You're blocked or need a decision.

Bad news delivered early is a problem to solve together. Bad news delivered late is a crisis and a hit to trust. Pair it with what you're doing about it: "The integration is a week behind because the vendor's API changed. I've asked them for a fix and can cut the reporting feature to hold the date. Which would you prefer?"

## Bring options

When you raise a problem, come with **options and a recommendation**:

> "We can either A (faster but costs more) or B (cheaper but slips a week). I'd recommend A because the launch date is fixed. What do you think?"

This saves your manager time, shows judgement, and often gets a quicker decision.

Also take ownership of your own development: come to one-on-ones with topics, ask for feedback, and say clearly what you want, such as a new project, a skill to build or a promotion. Managers aren't mind readers.
`,
    takeaways: [
      'Understand what your manager is measured on, worried about and how they like to communicate.',
      'No surprises: raise risks early, with what you\'re doing about them.',
      'Bring options and a recommendation, and own your development.',
    ],
    quiz: [
      {
        q: 'A deadline is slipping. When should you tell your manager?',
        options: ['After it\'s missed', 'As soon as you see the risk, with what you\'re doing about it', 'Only if they ask', 'Never'],
        answer: 1,
        why: 'Early bad news is a problem to solve; late bad news is a crisis.',
      },
      {
        q: 'Which is the best way to raise a problem?',
        options: ['"We have a problem."', '"Here\'s the problem, two options with trade-offs, and my recommendation."', '"It\'s not my fault."', 'Wait for them to notice'],
        answer: 1,
        why: 'Options plus a recommendation show judgement and speed decisions.',
      },
      {
        q: 'What does "managing up" mean?',
        options: ['Flattering your boss', 'Working effectively with your manager by understanding their goals and communicating well', 'Taking your manager\'s job', 'Avoiding your manager'],
        answer: 1,
        why: 'It\'s about a productive working relationship.',
      },
    ],
    practice: 'Write down what you think your manager\'s top three priorities are this quarter. In your next one-on-one, check whether you\'re right.',
    cards: [
      { id: 'c-car-manager-1', front: 'Three principles of managing up?', back: 'Understand their goals and style, no surprises, bring options with a recommendation.' },
      { id: 'c-car-manager-2', front: 'How to deliver bad news to your manager?', back: 'Early, with the cause, what you\'re doing about it, and options.' },
    ],
    related: ['led-1on1', 'car-promotion'],
  },
]
