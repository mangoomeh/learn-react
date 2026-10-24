// Sources were checked in October 2026.
const SRC = {
  dunlosky: { title: 'Dunlosky et al. (2013): Improving students\' learning with effective learning techniques (APS summary)', url: 'https://www.psychologicalscience.org/news/releases/which-study-strategies-make-the-grade.html' },
  roediger: { title: 'Roediger & Karpicke (2006): Test-enhanced learning', url: 'https://psychology.ecu.edu/wp-content/pv-uploads/sites/216/2019/03/Roediger-Karpicke-2006.pdf' },
  cepeda: { title: 'Cepeda et al. (2008): Spacing effects in learning, a temporal ridgeline of optimal retention', url: 'https://pubmed.ncbi.nlm.nih.gov/19076480/' },
  kornell: { title: 'Kornell & Bjork (2008): Learning concepts and categories: is spacing the "enemy of induction"?', url: 'https://doi.org/10.1111/j.1467-9280.2008.02127.x' },
  pashler: { title: 'Pashler et al. (2008): Learning styles, concepts and evidence', url: 'https://digitalcommons.usf.edu/psy_facpub/1765/' },
  bjork: { title: 'APS Observer: Desirable difficulties', url: 'https://www.psychologicalscience.org/observer/desirable-difficulties' },
  sweller: { title: 'Sweller (1988): Cognitive load during problem solving, effects on learning', url: 'https://doi.org/10.1207/s15516709cog1202_4' },
  sleep: { title: 'Walker & Stickgold (2004): Sleep-dependent learning and memory consolidation', url: 'https://pubmed.ncbi.nlm.nih.gov/15450165/' },
}

export const lessons = [
  {
    id: 'lrn-illusions',
    unit: 'What works',
    title: 'Why rereading feels like learning',
    summary: 'The study habits that feel most productive are often the least effective. Here\'s why.',
    ideas: ['Familiarity is not recall', 'Fluency fools your judgement'],
    body: `
## Familiarity is not recall

Reread a chapter and it feels easier the second time. The words look familiar, so it feels like you know them. But **recognising** something when it's in front of you is a much weaker kind of memory than **recalling** it from nothing.

An exam, a job interview or a real problem asks you to recall. Nobody hands you the page.

> Test yourself: close this lesson in a week and try to write down its two ideas. If you can only say "it was about rereading", that's familiarity, not learning.

## Fluency fools your judgement

Psychologists call the ease of processing something **fluency**. We use fluency as a signal of how well we know something, and it's a poor one. Material that's clear, well formatted and recently seen feels well learned whether it is or not.

This explains why the popular habits rank so low. In a large 2013 review of ten study techniques, Dunlosky and colleagues rated **rereading, highlighting and summarising as low utility**: they feel productive but do little for long-term memory. The two techniques rated **high utility** were **practice testing** and **spacing study out over time**, both of which feel harder.

That's the pattern to remember: **how a study session feels is a bad guide to how much you learned**. A session that feels smooth often isn't working; a session where you struggle to remember is often doing the most good.
`,
    takeaways: [
      'Recognising material is far easier than recalling it, and recall is what you need.',
      'Feeling fluent is a poor signal of learning.',
      'Rereading and highlighting feel productive but rate low; testing and spacing rate high.',
    ],
    quiz: [
      {
        q: 'After reading a chapter twice, it feels very familiar. What does that tell you?',
        options: ['You\'ve learned it well', 'You can recognise it, which doesn\'t mean you can recall it', 'You should read it a third time', 'You should highlight it'],
        answer: 1,
        why: 'Familiarity comes from recognition. Recall, retrieving it without the page, is the stronger and more useful memory.',
      },
      {
        q: 'Which pair did the 2013 Dunlosky review rate as high utility?',
        options: ['Rereading and highlighting', 'Summarising and mnemonics', 'Practice testing and spaced (distributed) practice', 'Highlighting and spacing'],
        answer: 2,
        why: 'Practice testing and distributed practice were the only two rated high utility.',
      },
      {
        q: 'Why is "this session felt easy" a poor sign of learning?',
        options: ['Easy sessions are always useless', 'Fluency, how easily material is processed, feels like knowing it even when it isn\'t', 'Hard sessions are always better', 'Memory doesn\'t depend on study'],
        answer: 1,
        why: 'Ease of processing is mistaken for mastery. Some difficulty during study is often a good sign.',
      },
    ],
    practice: 'Think of something you studied recently. Without looking, write down everything you can recall. How does it compare with how well you thought you knew it?',
    cards: [
      { id: 'c-lrn-illusions-1', front: 'Recognition vs recall?', back: 'Recognition: knowing something when you see it. Recall: producing it from memory. Recall is harder and is what real tasks need.' },
      { id: 'c-lrn-illusions-2', front: 'Which study techniques did Dunlosky et al. (2013) rate high utility?', back: 'Practice testing and distributed (spaced) practice.' },
      { id: 'c-lrn-illusions-3', front: 'What is the fluency illusion?', back: 'Mistaking how easily material is processed for how well you know it.' },
    ],
    inTheWild: [
      'Rereading notes the night before an exam',
      'Watching a tutorial and feeling you could do it yourself',
    ],
    sources: [SRC.dunlosky],
  },
  {
    id: 'lrn-retrieval',
    unit: 'What works',
    title: 'Retrieval practice',
    summary: 'Pulling information out of your memory strengthens it more than putting it in again.',
    ideas: ['Testing is a learning tool, not just a measurement', 'How to practise retrieval'],
    body: `
## Testing is a learning tool, not just a measurement

We usually think of tests as checking what's already learned. But the act of **retrieving** something from memory changes the memory: it makes it stronger and easier to find next time. This is called the **testing effect**, or retrieval practice.

In a well-known 2006 study, Roediger and Karpicke had students read short passages. Some then **restudied** the passage; others took **recall tests** on it, writing down what they remembered without feedback. Five minutes later, the restudy group did slightly better. But **two days and one week later, the tested group remembered much more**. Restudying wins the short game; retrieval wins the long one.

## How to practise retrieval

Anything that makes you produce the answer before seeing it counts:

- **Flashcards**, answered out loud or in your head before you flip.
- **Blank-page recall**: after reading, close the book and write down everything you remember, then check what you missed.
- **Practice questions** and past papers, done before looking at the solution.
- **Explaining it** to someone without notes.

Three tips make it work better:

1. **Retrieve first, check second.** Looking at the answer early turns it back into rereading.
2. **Get feedback.** Check your answer afterwards so mistakes don't stick.
3. **Keep it low stakes.** The point is the effort of recalling, not the score.

This app is built on the idea: every lesson ends with a quiz, and the flashcards in Review ask you to recall before you reveal.
`,
    takeaways: [
      'Retrieving information strengthens memory more than rereading it.',
      'Restudy can look better after minutes; retrieval wins after days.',
      'Produce the answer first, then check it.',
    ],
    quiz: [
      {
        q: 'In Roediger and Karpicke (2006), which group remembered more after a week?',
        options: ['Students who restudied the passages', 'Students who took recall tests', 'Both remembered the same', 'Students who highlighted'],
        answer: 1,
        why: 'The tested group remembered much more after two days and one week, though restudy looked better at five minutes.',
      },
      {
        q: 'You finish a chapter. Which is the best retrieval practice?',
        options: ['Reread your highlights', 'Close the book and write down everything you remember, then check', 'Copy out the summary', 'Watch a video on the same topic'],
        answer: 1,
        why: 'Blank-page recall makes you produce the material, then checking gives you feedback.',
      },
      {
        q: 'Why should you avoid peeking at the answer on a flashcard?',
        options: ['It\'s cheating', 'It turns retrieval back into rereading, losing the benefit of the effort', 'Flashcards don\'t work', 'You\'ll remember it too well'],
        answer: 1,
        why: 'The strengthening comes from the effort of recall. Peeking skips it.',
      },
    ],
    practice: 'Pick a topic you\'re learning. Spend five minutes writing everything you remember about it from memory, then check your notes and mark what you missed.',
    cards: [
      { id: 'c-lrn-retrieval-1', front: 'What is the testing effect?', back: 'Retrieving information from memory strengthens it more than restudying it.' },
      { id: 'c-lrn-retrieval-2', front: 'Name two forms of retrieval practice.', back: 'Flashcards, blank-page recall, practice questions, explaining without notes.' },
      { id: 'c-lrn-retrieval-3', front: 'Retrieval practice: answer first or check first?', back: 'Answer first, then check for feedback.' },
    ],
    inTheWild: [
      'Language apps that ask you to produce the word, not just recognise it',
      'Doctors and pilots drilling procedures from memory',
    ],
    related: ['lrn-illusions', 'lrn-spacing'],
    sources: [SRC.roediger, SRC.dunlosky],
  },
  {
    id: 'lrn-spacing',
    unit: 'What works',
    title: 'Spacing',
    summary: 'The same study time, spread out, beats one long session. Here\'s how to space it.',
    ideas: ['We forget fast, then slower', 'Spread practice out', 'How big the gaps should be'],
    body: `
## We forget fast, then slower

Memory fades quickly at first and then more slowly. You lose a lot of a new idea within a day or two, and what survives fades gradually after that. Each time you successfully retrieve it, the memory becomes more durable and fades more slowly.

## Spread practice out

**Spaced** (or distributed) practice means splitting study into several sessions with gaps between them, rather than **massing** it into one block. Three 20-minute sessions on different days beat one hour-long session, even though the total time is the same.

Cramming does work for tomorrow: massed study can get you through a test the next morning. It just doesn't last. If you want to still know it next month, space it.

The gaps matter because you forget a little in between. Retrieving something you've partly forgotten takes more effort, and that effort is what strengthens the memory.

## How big the gaps should be

A large 2008 study by Cepeda and colleagues tested gaps of up to 3.5 months with final tests up to a year later. The best gap **depended on how long you need to remember**: longer retention needed longer gaps. As a rough guide from their results, aim for a gap of about **10–20% of how long you want to remember** something:

- Exam in 10 days: review again after about a day or two.
- Want it in a year: review after a few weeks to a month or two.

You don't need to calculate this. **Expanding gaps** handle it for you: review after a day, then a few days, then a week, then a few weeks. That's how spaced-repetition flashcard systems, including this app's Review, schedule cards.
`,
    takeaways: [
      'Forgetting is fast at first; each successful retrieval slows it.',
      'Several spaced sessions beat one long one for the same total time.',
      'Longer retention needs longer gaps; expanding intervals handle this automatically.',
    ],
    quiz: [
      {
        q: 'You have three hours to learn material for a test in one month. What\'s best?',
        options: ['One three-hour session the night before', 'One three-hour session today', 'Several shorter sessions spread across the month', 'It makes no difference'],
        answer: 2,
        why: 'Same total time, spread out, gives far better retention.',
      },
      {
        q: 'Why do gaps between sessions help?',
        options: ['They give you a rest', 'Retrieving partly forgotten material takes effort, which strengthens it', 'You learn while sleeping', 'They don\'t help'],
        answer: 1,
        why: 'A little forgetting makes the next retrieval harder, and that effort builds durability.',
      },
      {
        q: 'According to Cepeda et al. (2008), how should the gap change if you want to remember for longer?',
        options: ['It should be shorter', 'It should be longer', 'It doesn\'t matter', 'You should cram'],
        answer: 1,
        why: 'The optimal gap grew with the retention interval.',
      },
    ],
    practice: 'Pick one thing you want to remember for months. Schedule four short reviews on your calendar with expanding gaps (for example after 1 day, 4 days, 2 weeks and 6 weeks).',
    cards: [
      { id: 'c-lrn-spacing-1', front: 'Spaced vs massed practice?', back: 'Spaced: study split into sessions with gaps. Massed: one long block (cramming). Spaced lasts longer.' },
      { id: 'c-lrn-spacing-2', front: 'Rough rule for the size of a review gap?', back: 'About 10–20% of how long you want to remember it; longer retention needs longer gaps.' },
      { id: 'c-lrn-spacing-3', front: 'What does a spaced-repetition system do?', back: 'Schedules reviews at expanding intervals, lengthening the gap each time you recall successfully.' },
    ],
    inTheWild: [
      'Anki and other flashcard apps',
      'Revision timetables that revisit topics over weeks',
    ],
    related: ['lrn-retrieval'],
    sources: [SRC.cepeda, SRC.dunlosky],
  },
  {
    id: 'lrn-interleaving',
    unit: 'What works',
    title: 'Interleaving',
    summary: 'Mixing different kinds of problems feels messier but teaches you to tell them apart.',
    ideas: ['Blocked vs interleaved practice', 'Why mixing helps'],
    body: `
## Blocked vs interleaved practice

**Blocked** practice means doing one type of problem over and over: twenty area-of-a-circle questions, then twenty volume questions. **Interleaved** practice mixes them: circle, volume, triangle, volume, circle, in an unpredictable order.

Most textbooks and courses are blocked. Each chapter's exercises use only that chapter's method, so you always know which method to use before you start.

## Why mixing helps

In real life, problems don't come labelled. The hard part is often **choosing the right approach**, and blocked practice never trains that, because the choice is made for you.

Interleaving forces you to notice what makes each problem different. In a 2008 study, Kornell and Bjork showed people paintings by twelve artists. Paintings by some artists were shown all together (blocked); others were mixed in with other artists (interleaved). On a test with **new** paintings, people identified the interleaved artists' styles better. Yet most participants believed blocking had helped them more.

That last part is typical. Interleaving feels harder and slower, and you make more mistakes while practising. That's the point: you're learning to discriminate, not just to repeat.

**How to use it:**

- Once you've understood each method on its own, mix practice problems from several topics.
- Shuffle flashcards across subjects instead of studying one deck at a time.
- In skills like sport or music, vary drills instead of repeating one move for an hour.

Learn a new method blocked at first, until you understand it. Then interleave.
`,
    takeaways: [
      'Blocked practice repeats one problem type; interleaved practice mixes types.',
      'Mixing trains you to choose the right method, which real problems require.',
      'Interleaving feels harder and people underrate it, but it transfers better.',
    ],
    quiz: [
      {
        q: 'What does interleaved practice train that blocked practice doesn\'t?',
        options: ['Speed on a single method', 'Choosing which method a problem needs', 'Memorising formulas', 'Handwriting'],
        answer: 1,
        why: 'In blocked practice the method is given. Interleaving makes you identify it.',
      },
      {
        q: 'In Kornell and Bjork (2008), what did most participants believe?',
        options: ['Interleaving helped more', 'Blocking helped more, even though interleaving did', 'Neither helped', 'Paintings can\'t be learned'],
        answer: 1,
        why: 'Interleaving worked better but felt worse. People misjudged it.',
      },
      {
        q: 'When is blocked practice still useful?',
        options: ['Never', 'When first learning how a new method works', 'Only for experts', 'For flashcards'],
        answer: 1,
        why: 'Learn a method on its own first; then mix it with others.',
      },
    ],
    practice: 'Take practice problems from three topics you\'ve studied. Shuffle them, then solve them in random order. Note which ones made you stop to think about which method to use.',
    cards: [
      { id: 'c-lrn-interleaving-1', front: 'Blocked vs interleaved practice?', back: 'Blocked: one problem type repeatedly. Interleaved: types mixed in random order.' },
      { id: 'c-lrn-interleaving-2', front: 'Why does interleaving help?', back: 'It trains you to tell problem types apart and choose the right method.' },
      { id: 'c-lrn-interleaving-3', front: 'Why do learners underrate interleaving?', back: 'It feels harder and produces more mistakes during practice, though it works better later.' },
    ],
    inTheWild: [
      'A mixed revision paper instead of chapter-by-chapter exercises',
      'Coding katas drawn from different problem types',
    ],
    related: ['lrn-spacing', 'lrn-desirable'],
    sources: [SRC.kornell, SRC.dunlosky],
  },
  {
    id: 'lrn-desirable',
    unit: 'What works',
    title: 'Desirable difficulties',
    summary: 'Some struggle helps you learn. Here\'s how to tell useful difficulty from the useless kind.',
    ideas: ['What makes a difficulty desirable', 'Generate before you\'re told'],
    body: `
## What makes a difficulty desirable

Robert and Elizabeth Bjork coined the term **desirable difficulties** for conditions that make learning feel harder and slower but improve long-term memory and transfer. Retrieval practice, spacing and interleaving are all examples.

Not all difficulty is desirable, though. The test is whether the struggle is **about the thing you're trying to learn**:

- **Desirable**: trying to recall a formula before looking it up; solving a problem before seeing the worked solution; mixing problem types.
- **Undesirable**: a confusing explanation, a noisy room, a textbook missing a step, a problem so far beyond you that you can't make any progress.

Difficulty helps when you **can** succeed with effort. If you have no foothold at all, you need more teaching first, not more struggle.

## Generate before you're told

The **generation effect**: information you produce yourself is remembered better than information you just read. Even attempting an answer that turns out wrong helps, as long as you then see the right one.

You can use this in several ways:

- **Pretest yourself.** Before reading a chapter, try to answer its end-of-chapter questions. You'll get many wrong, and you'll remember the answers better when you find them.
- **Predict.** Before running code or reading a result, write down what you expect.
- **Fill in the gap.** Before reading how an expert solved a problem, sketch your own approach.

Wrong guesses feel unproductive, which is exactly why people skip this step. Make the guess, then check.
`,
    takeaways: [
      'Desirable difficulties feel harder but improve long-term learning.',
      'Struggle helps when it\'s about the material and success is possible with effort.',
      'Attempting an answer before being told, even wrongly, improves memory.',
    ],
    quiz: [
      {
        q: 'Which is a desirable difficulty?',
        options: ['A textbook with a printing error', 'Studying in a noisy café', 'Trying to solve a problem before seeing the worked solution', 'A topic far beyond your current knowledge'],
        answer: 2,
        why: 'The struggle is about the material and success is possible. The others are just obstacles.',
      },
      {
        q: 'What is the generation effect?',
        options: ['Younger people learn faster', 'Information you produce yourself is remembered better than information you read', 'Generating notes by hand', 'AI-generated summaries help'],
        answer: 1,
        why: 'Producing an answer, even a wrong one followed by feedback, strengthens memory.',
      },
      {
        q: 'A learner can\'t make any progress at all on a problem set. What should change?',
        options: ['Push on; struggle is good', 'They need more teaching or easier steps first', 'Interleave more', 'Stop studying'],
        answer: 1,
        why: 'Difficulty helps only when success is possible with effort.',
      },
    ],
    practice: 'Before your next reading or lesson, write answers to three questions you think it will answer. Check them afterwards.',
    cards: [
      { id: 'c-lrn-desirable-1', front: 'What are desirable difficulties?', back: 'Conditions that make learning feel harder but improve long-term retention, such as retrieval, spacing and interleaving.' },
      { id: 'c-lrn-desirable-2', front: 'When is difficulty not desirable?', back: 'When it isn\'t about the material (bad explanations, noise) or when success isn\'t possible yet.' },
      { id: 'c-lrn-desirable-3', front: 'What is pretesting?', back: 'Trying to answer questions before studying the material; it improves later learning even when you get them wrong.' },
    ],
    related: ['lrn-retrieval', 'lrn-interleaving'],
    sources: [SRC.bjork],
  },
  {
    id: 'lrn-elaboration',
    unit: 'Understanding deeply',
    title: 'Ask why and explain it',
    summary: 'Connecting new ideas to what you already know turns facts into understanding.',
    ideas: ['Elaborative interrogation', 'Self-explanation', 'Explain it simply'],
    body: `
## Elaborative interrogation

Memory works by connection. A fact linked to many things you already know is easier to find than an isolated one. **Elaborative interrogation** means asking **"why is this true?"** and **"how does it work?"** about what you're learning, and answering it.

"Hot air rises" is a fact. "Hot air rises because heating makes air expand, so it's less dense than the cooler air around it" connects it to density, which you already understand. Now you can work out related things, like why hot-air balloons fly.

## Self-explanation

**Self-explanation** means explaining each step to yourself as you study: why this step follows from the last, what it's doing, how it relates to an example you know. It's especially useful when working through solved problems or code.

> "This line sorts the list first. Why? Because the search after it only works on sorted data."

Dunlosky's 2013 review rated both techniques **moderate utility**: good evidence, though less broad than testing and spacing. They pair well with them: retrieve, then ask why.

## Explain it simply

Try to explain the idea in plain words, as if to someone new to it, without notes. Wherever you reach for jargon or get vague, you've found a gap. Go back to the source, fill it, and try again.

This is often called the **Feynman technique**, after the physicist known for clear explanations. It combines retrieval (no notes) with elaboration (explaining why).

A caution: asking why works best when you have some knowledge to connect to. For a completely new area, start with the basics before expecting good answers.
`,
    takeaways: [
      'Ask "why is this true?" and "how does it work?" to connect new facts to what you know.',
      'Explain each step of a worked example to yourself.',
      'Explaining simply without notes exposes gaps in your understanding.',
    ],
    quiz: [
      {
        q: 'Which question is elaborative interrogation?',
        options: ['What page was that on?', 'Why is this true, given what I already know?', 'How many facts are in this chapter?', 'Can I highlight this?'],
        answer: 1,
        why: 'Asking and answering why connects the new fact to existing knowledge.',
      },
      {
        q: 'You\'re reading a solved maths problem. What is self-explanation?',
        options: ['Copying out the solution', 'Explaining to yourself why each step follows from the last', 'Skipping to the answer', 'Reading it aloud'],
        answer: 1,
        why: 'Explaining each step builds understanding of the method, not just the answer.',
      },
      {
        q: 'While explaining an idea simply, you keep reaching for a jargon term you can\'t define. What does that show?',
        options: ['You know it well', 'A gap in your understanding to go back and fill', 'Jargon is always necessary', 'You should stop'],
        answer: 1,
        why: 'Vagueness and borrowed jargon mark the places you don\'t really understand yet.',
      },
    ],
    practice: 'Choose a concept from your work or studies. Explain it in writing in under 150 words, with no jargon, as if to a curious 14-year-old. Mark where you got stuck.',
    cards: [
      { id: 'c-lrn-elaboration-1', front: 'What is elaborative interrogation?', back: 'Asking and answering "why is this true?" to connect new facts to existing knowledge.' },
      { id: 'c-lrn-elaboration-2', front: 'What is self-explanation?', back: 'Explaining to yourself why each step of a solution or process works.' },
      { id: 'c-lrn-elaboration-3', front: 'What is the Feynman technique?', back: 'Explain an idea simply without notes; where you struggle, go back and fill the gap.' },
    ],
    related: ['lrn-examples'],
    sources: [SRC.dunlosky],
  },
  {
    id: 'lrn-examples',
    unit: 'Understanding deeply',
    title: 'Worked examples and limited memory',
    summary: 'Your working memory holds only a few things at once. Good learning respects that.',
    ideas: ['Working memory is small', 'Worked examples for beginners', 'Words and pictures together'],
    body: `
## Working memory is small

**Working memory** is where you hold and juggle information while thinking. It's tiny: a handful of new items at once, held for seconds. **Long-term memory** is vast, and knowledge stored there doesn't strain working memory. An expert sees "a for-loop over a list"; a beginner sees a dozen unfamiliar symbols.

Cognitive load theory, developed by John Sweller, says good teaching avoids overloading working memory with things that don't help learning.

## Worked examples for beginners

Beginners learn more from studying **worked examples**, problems solved step by step, than from solving the same problems unaided. Solving from scratch eats working memory with searching for an approach, leaving little for noticing how the solution works.

As you improve, the benefit reverses: experts learn more from solving. A good progression **fades** the help:

1. Study a full worked example.
2. Complete a partly worked one: fill in the missing steps.
3. Solve on your own.

This doesn't contradict desirable difficulties. Struggle helps when you have enough foundation to make progress; worked examples build that foundation.

## Words and pictures together

A diagram plus a short explanation often beats either alone, because they use different channels and support each other. This is sometimes called **dual coding**.

But extra material can also overload: a diagram with the same words written beside it, or decorative images, make you split attention. Put labels on the diagram itself, and cut what doesn't help.

Note this is different from "learning styles": everyone benefits from good words-plus-pictures, as the next lesson explains.
`,
    takeaways: [
      'Working memory holds only a few new items; knowledge in long-term memory frees it up.',
      'Beginners learn more from worked examples; fade the help as skill grows.',
      'Combine words and pictures, but avoid redundant or decorative material.',
    ],
    quiz: [
      {
        q: 'Why do beginners learn more from worked examples than unaided problem solving?',
        options: ['Worked examples are shorter', 'Searching for an approach overloads working memory, leaving little for learning how the solution works', 'Beginners are lazy', 'Problems are never useful'],
        answer: 1,
        why: 'Unaided search uses up the limited working memory a beginner needs for understanding.',
      },
      {
        q: 'What is a good progression for learning a new kind of problem?',
        options: ['Solve hard problems immediately', 'Full worked example, then partly worked, then solve alone', 'Only read theory', 'Only watch videos'],
        answer: 1,
        why: 'Fading the guidance moves you from studying to doing as your knowledge grows.',
      },
      {
        q: 'Which design overloads learners?',
        options: ['A diagram with labels placed on it', 'A diagram with the same long text repeated beside it', 'A short explanation with one clear diagram', 'A worked example'],
        answer: 1,
        why: 'Redundant text splits attention between two copies of the same information.',
      },
    ],
    cards: [
      { id: 'c-lrn-examples-1', front: 'What does cognitive load theory say?', back: 'Working memory is limited, so good instruction avoids loading it with things that don\'t help learning.' },
      { id: 'c-lrn-examples-2', front: 'Worked example effect?', back: 'Beginners learn more by studying solved examples than by solving unaided; the benefit fades with expertise.' },
      { id: 'c-lrn-examples-3', front: 'What is faded guidance?', back: 'Moving from full worked examples to partly worked ones to independent solving.' },
    ],
    related: ['lrn-desirable', 'lrn-elaboration'],
    sources: [SRC.sweller],
  },
  {
    id: 'lrn-myths',
    unit: 'Understanding deeply',
    title: 'Learning myths and sleep',
    summary: 'Some popular beliefs about learning have little evidence behind them. Sleep has plenty.',
    ideas: ['Learning styles', 'Sleep consolidates memory'],
    body: `
## Learning styles

Many people believe they're a "visual", "auditory" or "kinaesthetic" learner, and learn best when taught in that style. It's one of the most widespread beliefs in education.

The evidence doesn't support it. A 2008 review by Pashler and colleagues set out what a fair test would need: assess people's style, teach them in matching and mismatching styles, and see whether matching helps. Very few studies used that design, and those that did **mostly found no benefit** from matching.

People do have preferences, and some content suits a format: geography suits maps, music suits sound. But the best format depends on **the material**, not the learner. Time spent tailoring to your "style" is better spent on retrieval and spacing.

Other myths to drop:

- **"We only use 10% of our brains."** Brain imaging shows activity across the whole brain.
- **"Left-brained and right-brained people."** Both hemispheres work together on almost everything.

## Sleep consolidates memory

Sleep isn't just rest. During sleep, the brain **consolidates** recent memories, stabilising them and linking them with existing knowledge. Research reviewed by Walker and Stickgold found that sleep after learning improves both fact memory and skill learning, and that sleep deprivation also harms your ability to take in new information the next day.

Practical consequences:

- An all-nighter before an exam trades long-term memory for a few extra hours of shallow study.
- Studying something in the evening and sleeping on it is a good pattern.
- Spacing practice across days gives you several nights of consolidation.
`,
    takeaways: [
      'Matching teaching to a "learning style" has little evidence; match the format to the material.',
      'The 10% brain and left/right-brain ideas are myths.',
      'Sleep consolidates memories; cutting it to study usually backfires.',
    ],
    quiz: [
      {
        q: 'What did Pashler et al. (2008) conclude about learning styles?',
        options: ['Matching instruction to style strongly helps', 'Well-designed tests mostly found no benefit from matching', 'Only visual learners exist', 'Styles change every year'],
        answer: 1,
        why: 'Few studies used a proper design, and those that did mostly found no benefit.',
      },
      {
        q: 'What should decide whether to use a diagram, audio or text?',
        options: ['The learner\'s preferred style', 'The material: some content suits a particular format', 'Whatever is cheapest', 'Always use video'],
        answer: 1,
        why: 'Maps suit geography and sound suits music, for everyone.',
      },
      {
        q: 'Why is an all-nighter before an exam a poor trade?',
        options: ['You get bored', 'You lose sleep-based consolidation and impair learning', 'Exams are at night', 'Sleep makes you forget'],
        answer: 1,
        why: 'Sleep stabilises memories and supports the next day\'s learning.',
      },
    ],
    cards: [
      { id: 'c-lrn-myths-1', front: 'Is matching teaching to learning styles supported by evidence?', back: 'Mostly no: properly designed studies largely found no benefit. Match the format to the content.' },
      { id: 'c-lrn-myths-2', front: 'What does sleep do for learning?', back: 'Consolidates recent memories and prepares the brain to learn the next day.' },
    ],
    related: ['lrn-spacing'],
    sources: [SRC.pashler, SRC.sleep],
  },
  {
    id: 'lrn-system',
    unit: 'Study habits that stick',
    title: 'Build a study system',
    summary: 'Put the techniques together into a routine you can actually keep.',
    ideas: ['A session that works', 'Judge what you know by testing it', 'Plan in small, regular sessions'],
    body: `
## A session that works

A strong study session combines the techniques in this subject:

1. **Warm up with retrieval.** Spend five minutes recalling last session's material without notes.
2. **Learn something new.** Read or watch actively: pretest first, ask why, explain steps to yourself.
3. **Close with retrieval.** Close the material and write what you learned. Check it.
4. **Make a few flashcards** for things you'll need to recall later, written as questions.

## Judge what you know by testing it

**Metacognition** is knowing what you know. People are bad at judging it by feel, as the fluency illusion showed. So don't ask "do I know this?"; **test it**. Answer a question, explain it aloud, or do a problem cold. Then spend your time on what you got wrong, not on what feels comfortable.

A useful habit: before checking an answer, rate how confident you are. Over time you'll see where you're overconfident.

## Plan in small, regular sessions

Short, regular sessions beat occasional long ones, because they give you spacing and sleep between them for free. Twenty minutes a day for a month is about ten hours, spread across thirty nights of consolidation.

- **Schedule it**: same time, same place, so it becomes routine.
- **Mix topics** across sessions, revisiting old ones.
- **Keep a list of what you got wrong** and revisit it.
- **Expect it to feel hard.** That usually means it's working.

This app's daily rhythm is designed this way: one short lesson, a few flashcards and a drill each day.
`,
    takeaways: [
      'Start and end sessions with retrieval; make question-style flashcards.',
      'Test your knowledge instead of trusting how it feels.',
      'Short daily sessions give spacing and sleep for free.',
    ],
    quiz: [
      {
        q: 'What\'s a good way to start a study session?',
        options: ['Reread last session\'s notes', 'Recall last session\'s material from memory, then check', 'Highlight a new chapter', 'Watch a summary video'],
        answer: 1,
        why: 'Retrieval at the start strengthens old material and shows what needs work.',
      },
      {
        q: 'How should you decide what to study next?',
        options: ['Whatever feels least familiar', 'Test yourself and focus on what you get wrong', 'Whatever you enjoy most', 'Start at page one again'],
        answer: 1,
        why: 'Testing gives honest feedback; feelings of familiarity mislead.',
      },
      {
        q: 'Why do short daily sessions beat a weekly marathon of the same total time?',
        options: ['They\'re less boring', 'They build in spacing and nights of sleep between reviews', 'Long sessions are forbidden', 'They don\'t'],
        answer: 1,
        why: 'Spreading time across days gives spacing and consolidation automatically.',
      },
    ],
    practice: 'Plan next week\'s study: when, where, how long, and what you\'ll retrieve at the start of each session. Put it in your calendar.',
    cards: [
      { id: 'c-lrn-system-1', front: 'What is metacognition?', back: 'Awareness of what you know and don\'t; best judged by testing rather than feel.' },
      { id: 'c-lrn-system-2', front: 'Structure of an effective study session?', back: 'Retrieve old material, learn new material actively, retrieve again, make flashcards.' },
    ],
    related: ['lrn-retrieval', 'lrn-spacing', 'lrn-illusions'],
  },
]
