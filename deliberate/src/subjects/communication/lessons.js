// Sources were checked in October 2026.
const SRC = {
  camerer: { title: 'Camerer, Loewenstein & Weber (1989): The curse of knowledge in economic settings', url: 'https://doi.org/10.1086/261651' },
  army: { title: 'US Army Regulation 25-50: Preparing and managing correspondence', url: 'https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN31403-AR_25-50-000-WEB-1.pdf' },
  plain: { title: 'US Federal plain language guidelines', url: 'https://www.plainlanguage.gov/guidelines/' },
  govuk: { title: 'GOV.UK: Writing for GOV.UK', url: 'https://www.gov.uk/guidance/content-design/writing-for-gov-uk' },
  oppenheimer: { title: 'Oppenheimer (2006): Consequences of erudite vernacular utilized irrespective of necessity', url: 'https://doi.org/10.1002/acp.1178' },
  nng: { title: 'Nielsen Norman Group: How users read on the web', url: 'https://www.nngroup.com/articles/how-users-read-on-the-web/' },
  huang: { title: 'Huang et al. (2017): It doesn\'t hurt to ask, question-asking increases liking', url: 'https://doi.org/10.1037/pspi0000097' },
}

export const lessons = [
  {
    id: 'com-reader',
    unit: 'Clear writing',
    title: 'Write for the reader',
    summary: 'The hardest part of clear communication is remembering what your reader doesn\'t know.',
    ideas: ['The curse of knowledge', 'Know who you\'re writing for and why'],
    body: `
## The curse of knowledge

In a 1990 Stanford study, Elizabeth Newton asked people to tap out the rhythm of a well-known song, such as "Happy Birthday", on a table, while a listener tried to name it. Tappers predicted listeners would guess about **half** the songs. Listeners got about **one in forty**.

The tappers could hear the melody in their heads as they tapped. The listeners heard only knocking. Once you know something, it's very hard to imagine not knowing it. Economists Camerer, Loewenstein and Weber called this the **curse of knowledge**: better-informed people struggle to predict what less-informed people will think.

In writing, it shows up as:

- Jargon and acronyms you've stopped noticing ("we need to fix the P1s in the BFF before GA").
- Skipped steps that feel obvious to you.
- Context the reader never had ("as discussed", when they weren't there).

## Know who you're writing for and why

Before writing anything that matters, answer two questions:

1. **Who is the reader, and what do they already know?** A new team member, your manager, a customer and an expert colleague each need different things.
2. **What do I want them to know, decide or do** after reading?

Then write for that person. Define terms they may not know. Add the context they missed. Cut details they don't need, even if you found them interesting.

A useful check: ask someone outside the project to read your draft and tell you, in their own words, what it says and what you want from them. Wherever they stumble, the curse of knowledge was at work.
`,
    takeaways: [
      'Knowing something makes it hard to imagine not knowing it (the curse of knowledge).',
      'Decide who the reader is and what you want them to know, decide or do.',
      'Test drafts on someone without your context.',
    ],
    quiz: [
      {
        q: 'In Newton\'s tapping study, why did tappers overestimate how many songs listeners would guess?',
        options: ['Listeners weren\'t trying', 'Tappers heard the melody in their heads and couldn\'t imagine hearing only taps', 'The songs were obscure', 'Tapping is too quiet'],
        answer: 1,
        why: 'That\'s the curse of knowledge: it\'s hard to un-know what you know.',
      },
      {
        q: 'Which sentence most likely suffers from the curse of knowledge?',
        options: ['"The login page will be down from 2pm to 3pm on Friday."', '"Per the sync, we\'ll ship the P1 fix to the BFF pre-GA."', '"Please reply by Monday."', '"Thanks for your help."'],
        answer: 1,
        why: 'Jargon and references to a meeting the reader may not have attended.',
      },
      {
        q: 'What two questions should you answer before writing something important?',
        options: ['How long and how formal?', 'Who is the reader and what do they know; what should they know, decide or do?', 'Which font and colour?', 'Who else is copied?'],
        answer: 1,
        why: 'Audience and purpose shape everything else.',
      },
    ],
    practice: 'Take a recent message you sent about your work. Rewrite it for someone who has never heard of your project.',
    cards: [
      { id: 'c-com-reader-1', front: 'What is the curse of knowledge?', back: 'Once you know something, it\'s hard to imagine not knowing it, so you leave out what others need.' },
      { id: 'c-com-reader-2', front: 'Newton\'s tapping study result?', back: 'Tappers predicted listeners would name about half the songs; they named about 1 in 40.' },
      { id: 'c-com-reader-3', front: 'Two questions before writing?', back: 'Who is the reader and what do they know? What should they know, decide or do afterwards?' },
    ],
    inTheWild: [
      'Onboarding documents written by people who\'ve been there for years',
      'Error messages that only make sense to the developer',
    ],
    sources: [SRC.camerer],
  },
  {
    id: 'com-bluf',
    unit: 'Clear writing',
    title: 'Bottom line up front',
    summary: 'Put the conclusion or request first. Busy readers may never reach the end.',
    ideas: ['Answer first', 'Then support it'],
    body: `
## Answer first

At school we learn to build up to a conclusion: background, then analysis, then the point. At work, that structure fails, because readers are busy and skim. If the point is in the last paragraph, many will never reach it.

The US Army's correspondence rules put it bluntly: put the **bottom line up front** (**BLUF**), in the first sentence or two. State the conclusion, recommendation or request first.

Compare:

> **Buried**: "Last week we started looking at our cloud costs. We reviewed the bills for the last six months and noticed that storage has grown a lot. After investigating, it turns out old backups are never deleted. So we'd like approval to set up automatic deletion after 90 days."

> **BLUF**: "Can you approve automatically deleting backups older than 90 days? It would cut our cloud bill by about 15%. Old backups are never deleted today, and storage has tripled in six months."

The second version gets the decision in the first line. A reader who stops there can still act.

## Then support it

After the bottom line, give the reasons and evidence, in order of importance. Business writing guides often describe this as an **upside-down pyramid**: most important first, details later.

A simple template for many messages:

1. **The point**: decision, request, recommendation or answer.
2. **Why**: the two or three most important reasons.
3. **Details**: background, data, options considered, for those who want them.
4. **Next step**: who does what by when.

BLUF isn't rude. It respects the reader's time. If the news is sensitive, a sentence of context first is fine, but don't make people hunt for the point.
`,
    takeaways: [
      'Put the conclusion or request in the first sentence or two.',
      'Follow with the most important reasons, then details.',
      'End with the next step: who does what by when.',
    ],
    quiz: [
      {
        q: 'What does BLUF stand for?',
        options: ['Brief, light, useful, friendly', 'Bottom line up front', 'Begin last, unfold first', 'Background leads, understanding follows'],
        answer: 1,
        why: 'Put the conclusion or request first.',
      },
      {
        q: 'Why does building up to the conclusion work poorly at work?',
        options: ['It\'s too short', 'Busy readers skim and may never reach the point', 'Managers dislike background', 'It\'s grammatically wrong'],
        answer: 1,
        why: 'Putting the point last risks it never being read.',
      },
      {
        q: 'Which opening follows BLUF?',
        options: ['"I wanted to share some thoughts about our process."', '"Recommendation: move the launch to 12 May, because testing found two blocking bugs."', '"As you know, we\'ve been working hard."', '"Hope you\'re well!"'],
        answer: 1,
        why: 'It states the recommendation and the main reason immediately.',
      },
    ],
    practice: 'Find a long email or message you sent recently. Rewrite the first two sentences so they state the point or request.',
    cards: [
      { id: 'c-com-bluf-1', front: 'What is BLUF?', back: 'Bottom line up front: state the conclusion, recommendation or request first.' },
      { id: 'c-com-bluf-2', front: 'Four-part template for a work message?', back: 'The point, why (key reasons), details, next step.' },
    ],
    related: ['com-email'],
    sources: [SRC.army],
  },
  {
    id: 'com-plain',
    unit: 'Clear writing',
    title: 'Plain language',
    summary: 'Short words, short sentences and active verbs make you easier to understand, and more credible.',
    ideas: ['Short and familiar words', 'Active voice', 'Cut what doesn\'t help'],
    body: `
## Short and familiar words

Many people believe longer words sound smarter. Research suggests the opposite. In a 2006 study titled, deliberately, "Consequences of erudite vernacular utilized irrespective of necessity", Daniel Oppenheimer found that people rated writers as **less intelligent** when texts used needlessly complex words.

Government plain-language guides, such as those in the US and the UK, recommend the everyday word whenever it works:

- utilise → **use**
- commence → **start**
- in order to → **to**
- at this point in time → **now**
- facilitate → **help**

Keep sentences short: aim for an average of 15 to 20 words, and split anything that runs over 25.

## Active voice

In the **active voice**, the subject does the action: "The team fixed the bug." In the **passive voice**, the action is done to the subject: "The bug was fixed (by the team)."

Active is usually shorter, clearer and says who's responsible. Passive hides the actor, which is why it's popular in apologies: "Mistakes were made."

Use passive when the actor is unknown or unimportant ("The building was completed in 1920"), but default to active.

## Cut what doesn't help

Most drafts improve by getting shorter. Look for:

- **Throat-clearing**: "I just wanted to reach out to let you know that…" → start with the point.
- **Hedges**: "I think it might possibly be worth considering…" → "I suggest…".
- **Repetition**: saying the same thing twice in different words.
- **Intensifiers**: very, really, extremely, which usually add nothing.

Clear writing isn't dumbing down. Experts are often the clearest writers because they understand the subject well enough to say it simply.
`,
    takeaways: [
      'Needlessly complex words make writers seem less intelligent, not more.',
      'Prefer the active voice; it\'s shorter and shows who\'s responsible.',
      'Cut throat-clearing, hedges, repetition and intensifiers.',
    ],
    quiz: [
      {
        q: 'What did Oppenheimer (2006) find about needlessly complex words?',
        options: ['They make writers seem smarter', 'They make writers seem less intelligent', 'They have no effect', 'They improve memory'],
        answer: 1,
        why: 'Readers rated writers lower when texts used needlessly long words.',
      },
      {
        q: 'Which sentence is in the active voice?',
        options: ['The report was approved by the board.', 'The board approved the report.', 'Approval was given.', 'It has been decided.'],
        answer: 1,
        why: 'The subject (the board) performs the action.',
      },
      {
        q: 'Which edit best follows plain language?',
        options: ['"In order to facilitate the process" → "To help"', '"Use" → "Utilise"', '"Now" → "At this point in time"', '"Start" → "Commence"'],
        answer: 0,
        why: 'Shorter, familiar words are clearer.',
      },
    ],
    practice: 'Take a paragraph you wrote recently. Cut it by a third without losing meaning: swap long words, switch passive to active and remove hedges.',
    cards: [
      { id: 'c-com-plain-1', front: 'Active vs passive voice?', back: 'Active: the subject acts ("The team fixed it"). Passive: the action is done to the subject ("It was fixed").' },
      { id: 'c-com-plain-2', front: 'Recommended average sentence length?', back: 'About 15–20 words; split sentences over 25.' },
      { id: 'c-com-plain-3', front: 'Do complex words make you seem smarter?', back: 'No. Oppenheimer (2006) found they made writers seem less intelligent.' },
    ],
    related: ['com-editing'],
    sources: [SRC.oppenheimer, SRC.plain, SRC.govuk],
  },
  {
    id: 'com-structure',
    unit: 'Structure',
    title: 'Structuring an argument',
    summary: 'A clear claim, a few distinct reasons and evidence for each makes any case easier to follow.',
    ideas: ['Claim, reasons, evidence', 'Group and order your points', 'Signpost the structure'],
    body: `
## Claim, reasons, evidence

Whether you're writing a proposal or making a case in a meeting, a persuasive argument has three layers:

1. **The claim**: what you want people to believe or do. "We should hire a second support engineer."
2. **The reasons**: why. Usually two to four. "Response times have doubled. Customers are leaving. Engineers are being pulled off product work."
3. **The evidence** for each reason: data, examples, quotes. "Median first response went from 4 to 9 hours this quarter."

If you can't state your claim in one sentence, you're not ready to write.

## Group and order your points

A common structure, popularised by Barbara Minto as the **pyramid principle**, puts the main point at the top, supported by a small number of grouped reasons, each supported by details.

Make your reasons:

- **Distinct**: each one should make a different point. If two overlap, merge them.
- **Few**: three strong reasons beat seven weak ones. People remember three; a long list feels like padding.
- **Ordered**: strongest first, or in a logical sequence (problem, cause, solution; past, present, future).

Address the strongest objection directly. "This costs £60,000 a year, but losing even two enterprise customers would cost more." Ignoring an obvious objection makes readers suspect you haven't thought of it.

## Signpost the structure

Tell readers where they are:

- "There are three reasons."
- "First… Second… Finally…"
- Headings that state the point, not just the topic: "Response times have doubled" beats "Response times".

Readers who can see the shape of an argument follow it faster and remember it better.
`,
    takeaways: [
      'Every argument needs a one-sentence claim, a few reasons and evidence for each.',
      'Keep reasons distinct, few and well ordered; address the main objection.',
      'Signpost with counts, sequence words and headings that state the point.',
    ],
    quiz: [
      {
        q: 'What\'s the first thing to settle before writing a proposal?',
        options: ['The font', 'Your one-sentence claim', 'The number of pages', 'Who to copy in'],
        answer: 1,
        why: 'If you can\'t state the claim in a sentence, you\'re not ready to write.',
      },
      {
        q: 'You have seven reasons, several overlapping. What should you do?',
        options: ['Include all seven', 'Merge overlaps and keep the strongest few', 'Pick one at random', 'Put them in alphabetical order'],
        answer: 1,
        why: 'Distinct, few, strong reasons are more persuasive.',
      },
      {
        q: 'Which heading best signposts the argument?',
        options: ['"Costs"', '"Costs will fall 20% within a year"', '"Some thoughts"', '"Miscellaneous"'],
        answer: 1,
        why: 'Headings that state the point let skimmers get the argument.',
      },
    ],
    practice: 'Pick something you want to change at work or home. Write the claim in one sentence, three distinct reasons, one piece of evidence for each, and the main objection with your answer.',
    cards: [
      { id: 'c-com-structure-1', front: 'Three layers of an argument?', back: 'Claim, reasons, evidence for each reason.' },
      { id: 'c-com-structure-2', front: 'Three properties of good supporting reasons?', back: 'Distinct, few (around three), well ordered.' },
      { id: 'c-com-structure-3', front: 'What is the pyramid principle (Minto)?', back: 'Main point at the top, supported by grouped reasons, each supported by details.' },
    ],
    related: ['ct-arguments', 'com-bluf'],
  },
  {
    id: 'com-email',
    unit: 'Structure',
    title: 'Messages people act on',
    summary: 'Make it easy to see what you need, from whom, and by when.',
    ideas: ['People scan, so make it scannable', 'One clear ask with a deadline'],
    body: `
## People scan, so make it scannable

Most people don't read messages word by word. Research by the Nielsen Norman Group on web reading found most users **scan**, picking out headings, bold text, the first words of paragraphs and lists. Email and chat are read the same way, often on a phone, between other things.

So:

- **Subject lines that say what you need**: "Approval needed by Thu: Q3 budget" beats "Budget".
- **Short paragraphs**: one idea each, two or three sentences.
- **Lists** for steps, options or several items.
- **Bold** the key ask or date, sparingly.
- **Front-load** each paragraph: its first sentence should carry its point.

## One clear ask with a deadline

Vague messages get vague responses, or none. Compare:

> "Let me know what you think about the draft when you get a chance."

> "Could you review sections 2 and 3 of the draft by **Wednesday 5pm**? I mainly need to know whether the pricing is clear."

The second says **what**, **which part**, **by when**, and **what kind of feedback**. It's far more likely to get a useful reply on time.

More tips:

- **One message, one topic.** If you need two unrelated decisions, send two messages, so neither gets lost.
- **If several people are included, name who needs to do what.** "@Ana: numbers. @Ben: legal check." Otherwise each assumes someone else will.
- **Make replying easy**: offer options. "Does Tuesday or Thursday work?" beats "When are you free?"
- **Reread before sending** from the reader's point of view: could they act on this without asking anything?
`,
    takeaways: [
      'People scan: use clear subject lines, short paragraphs, lists and front-loaded sentences.',
      'Make one clear ask with what, by when and what kind of response.',
      'One topic per message; name who does what; offer options.',
    ],
    quiz: [
      {
        q: 'Which subject line is most effective?',
        options: ['"Quick question"', '"Hi"', '"Decision needed by Fri: choose venue for team offsite"', '"Update"'],
        answer: 2,
        why: 'It says what\'s needed and by when, so it can be prioritised from the inbox.',
      },
      {
        q: 'What makes this ask weak: "Thoughts on the doc whenever"?',
        options: ['It\'s too polite', 'No specific part, deadline or type of feedback', 'It\'s too long', 'Nothing'],
        answer: 1,
        why: 'Specific asks get specific, timely replies.',
      },
      {
        q: 'You email five people asking for help. What prevents everyone assuming someone else will do it?',
        options: ['Bold the whole message', 'Name who needs to do what', 'Add more people', 'Send it twice'],
        answer: 1,
        why: 'Assigning names removes ambiguity about responsibility.',
      },
    ],
    practice: 'Rewrite the last request you sent by email or chat so it has a clear subject, one ask, a deadline and the type of response you need.',
    cards: [
      { id: 'c-com-email-1', front: 'How do people read messages?', back: 'They scan: subject, headings, first words, bold text and lists.' },
      { id: 'c-com-email-2', front: 'Parts of a clear ask?', back: 'What, which part, by when, and what kind of response you need.' },
    ],
    related: ['com-bluf'],
    sources: [SRC.nng],
  },
  {
    id: 'com-editing',
    unit: 'Structure',
    title: 'Editing your own writing',
    summary: 'Good writing is mostly rewriting. A few passes catch most problems.',
    ideas: ['Draft fast, edit slow', 'Edit in passes', 'Read it aloud'],
    body: `
## Draft fast, edit slow

Trying to write a perfect first draft is slow and stressful: every sentence gets judged as it appears. It's easier to separate the two jobs:

1. **Draft** quickly to get the ideas down. Don't fix as you go.
2. **Take a break**, even ten minutes. Distance helps you read it as a reader would.
3. **Edit** carefully.

## Edit in passes

Trying to fix everything at once means missing things. Make separate passes, from big to small:

1. **Purpose**: is the main point clear and near the top? Does everything serve it? Delete sections that don't.
2. **Structure**: are the reasons in a sensible order? Would headings or a list help?
3. **Paragraphs**: does each have one idea, with its point in the first sentence?
4. **Sentences**: cut long ones, switch passive to active, replace jargon.
5. **Words**: remove filler, hedges and repetition; check names, numbers and dates.

Big changes first, because there's no point polishing a paragraph you're about to delete.

For anything important, a useful target is to **cut 10–20%** of the first draft. You'll rarely lose anything that mattered.

## Read it aloud

Reading aloud, or listening with text-to-speech, catches what your eyes skip: clumsy phrasing, missing words, sentences that run out of breath. If you stumble, your reader will too.

Finally, check the details that cost credibility when wrong: the recipient's name, figures, dates, links and attachments. For high-stakes messages, ask someone else to read it first.
`,
    takeaways: [
      'Draft quickly, take a break, then edit.',
      'Edit in passes from big (purpose, structure) to small (sentences, words).',
      'Read aloud to catch clumsy phrasing; check names, numbers and links.',
    ],
    quiz: [
      {
        q: 'Why separate drafting from editing?',
        options: ['Editing is optional', 'Judging every sentence as you write slows you down; distance helps you edit like a reader', 'Drafts are never used', 'It doesn\'t matter'],
        answer: 1,
        why: 'Different jobs, better done separately.',
      },
      {
        q: 'Which pass should come first?',
        options: ['Fixing commas', 'Checking the main point is clear and everything serves it', 'Choosing synonyms', 'Formatting'],
        answer: 1,
        why: 'Big changes first; don\'t polish what you\'ll delete.',
      },
      {
        q: 'What does reading aloud catch best?',
        options: ['Spelling of names', 'Clumsy phrasing and missing words', 'Wrong numbers', 'Broken links'],
        answer: 1,
        why: 'Your ear notices stumbles your eyes skip over.',
      },
    ],
    practice: 'Take a draft you\'re working on. Do the five passes in order, then read it aloud. Note how much shorter it got.',
    cards: [
      { id: 'c-com-editing-1', front: 'Five editing passes, big to small?', back: 'Purpose, structure, paragraphs, sentences, words.' },
      { id: 'c-com-editing-2', front: 'Why read your writing aloud?', back: 'It catches clumsy phrasing and missing words your eyes skip.' },
    ],
    related: ['com-plain'],
  },
  {
    id: 'com-listening',
    unit: 'Speaking and listening',
    title: 'Listening well',
    summary: 'Most communication problems start with not really listening. It\'s a skill you can practise.',
    ideas: ['Listen to understand, not to reply', 'Reflect back', 'Ask follow-up questions'],
    body: `
## Listen to understand, not to reply

In many conversations we're half-listening while preparing what to say next. The result: we miss what the other person meant, answer the wrong question, and they feel unheard.

Active listening means giving full attention:

- Put your phone away and look at the person.
- Don't interrupt, even to agree.
- Notice tone and emotion, not just words.
- Resist jumping to advice or your own story ("That happened to me too…").

## Reflect back

Before responding, **summarise what you heard** in your own words:

> "So the main problem is that the deadline moved but the scope didn't. Is that right?"

This does three things. It checks you understood correctly. It shows the other person you were listening. And it often helps them clarify their own thinking. If you got it wrong, they'll correct you, and you've avoided a misunderstanding.

You can also reflect feelings: "That sounds really frustrating." People often need to feel understood before they can move on to solutions.

## Ask follow-up questions

A 2017 study by Huang and colleagues analysed thousands of conversations, including speed dates, and found that people who asked more questions, especially **follow-up questions** that built on what the other person had said, were **liked more**.

Follow-ups show you heard and want to know more:

- "What happened next?"
- "What made that hard?"
- "How did you decide?"

Open questions (what, how, why) invite fuller answers than closed ones (did you, is it) that can be answered yes or no.
`,
    takeaways: [
      'Give full attention and resist preparing your reply or jumping to advice.',
      'Summarise what you heard to check understanding and show you listened.',
      'Follow-up questions increase liking and understanding.',
    ],
    quiz: [
      {
        q: 'What is the purpose of reflecting back what someone said?',
        options: ['To repeat them word for word', 'To check understanding and show you listened', 'To end the conversation', 'To give advice'],
        answer: 1,
        why: 'It catches misunderstandings and makes people feel heard.',
      },
      {
        q: 'What did Huang et al. (2017) find about follow-up questions?',
        options: ['They annoy people', 'People who asked more follow-up questions were liked more', 'They have no effect', 'Only experts should ask them'],
        answer: 1,
        why: 'Follow-ups signal real interest and listening.',
      },
      {
        q: 'Which is an open follow-up question?',
        options: ['"Did you like it?"', '"What made that so difficult?"', '"Was it Tuesday?"', '"Are you okay?"'],
        answer: 1,
        why: 'Open questions invite fuller answers.',
      },
    ],
    practice: 'In your next conversation, summarise what the other person said at least once before responding, and ask two follow-up questions.',
    cards: [
      { id: 'c-com-listening-1', front: 'Active listening includes?', back: 'Full attention, no interrupting, noticing emotion, holding back advice, reflecting back.' },
      { id: 'c-com-listening-2', front: 'Why reflect back?', back: 'To check understanding, show you listened, and help the speaker clarify.' },
      { id: 'c-com-listening-3', front: 'Effect of follow-up questions (Huang et al., 2017)?', back: 'People who asked more follow-up questions were liked more.' },
    ],
    related: ['fbk-curiosity'],
    sources: [SRC.huang],
  },
  {
    id: 'com-talks',
    unit: 'Speaking and listening',
    title: 'Giving a talk',
    summary: 'One clear message, a simple structure and plenty of practice beat clever slides.',
    ideas: ['One message', 'Structure for listeners', 'Practise out loud'],
    body: `
## One message

Listeners can't scroll back. They remember far less from a talk than readers do from a page. So decide the **one thing** you want the audience to remember or do, and build everything around it.

Test: can you say your message in one sentence? "We should move to weekly releases because it cuts the time customers wait for fixes from a month to a week."

## Structure for listeners

A simple, reliable structure:

1. **Hook**: a question, a surprising number or a short story that shows why this matters.
2. **The message**: say it early.
3. **Two or three points** supporting it, each with an example or story.
4. **The message again**, and what you want people to do.

Repetition that would be clumsy in writing helps in speech: "tell them what you'll tell them, tell them, tell them what you told them".

**Stories and concrete examples** stick far better than abstractions. "Last month, a customer waited 27 days for a one-line fix" lands harder than "release cadence affects customer outcomes".

**Slides** should support you, not be your script. One idea per slide, few words, big visuals. If people are reading your slides, they're not listening to you.

## Practise out loud

Thinking through a talk isn't the same as saying it. Practise **aloud, standing up, timing yourself**, at least two or three times. Record yourself once if you can bear it.

Nerves are normal, even for experienced speakers. Preparation reduces them; reframing the rest as energy helps too (see the Stress and Emotions subject). Know your first two sentences cold, so you start strong while your nerves settle.
`,
    takeaways: [
      'Build the talk around one message you can say in a sentence.',
      'Hook, message, two or three supported points, message again with a call to action.',
      'Use stories and simple slides, and practise aloud and timed.',
    ],
    quiz: [
      {
        q: 'Why should a talk centre on one message?',
        options: ['Talks must be short', 'Listeners can\'t re-read and remember little, so one clear point survives', 'Slides are limited', 'Audiences dislike detail'],
        answer: 1,
        why: 'Spoken information is easily lost; one message is memorable.',
      },
      {
        q: 'Which is the strongest opening?',
        options: ['"Today I\'ll talk about release cadence."', '"Last month a customer waited 27 days for a one-line fix."', '"Sorry, I\'m nervous."', '"Let me start with our agenda."'],
        answer: 1,
        why: 'A concrete story hooks attention and shows why it matters.',
      },
      {
        q: 'What\'s the best way to prepare?',
        options: ['Read the slides silently', 'Practise aloud, standing, timed, two or three times', 'Memorise every word', 'Wing it'],
        answer: 1,
        why: 'Saying it out loud reveals gaps and timing problems.',
      },
    ],
    practice: 'Write the one-sentence message for a talk you might give, plus a hook and three supporting points.',
    cards: [
      { id: 'c-com-talks-1', front: 'Structure for a short talk?', back: 'Hook, message, two or three supported points, message again with a call to action.' },
      { id: 'c-com-talks-2', front: 'Why do stories work in talks?', back: 'Concrete examples are far more memorable than abstractions.' },
    ],
    related: ['str-reappraise', 'com-structure'],
  },
]
