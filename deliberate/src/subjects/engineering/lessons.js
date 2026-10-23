export const lessons = [
  {
    id: 'eng-naming',
    unit: 'Craft',
    title: 'Names that explain',
    summary: 'Good names let the next reader skip the body. Bad ones force them to read everything.',
    ideas: ['Names say what and why', 'Booleans ask, functions do', 'Hard to name means wrong shape'],
    body: `
Code is read far more often than it's written: in reviews, while debugging, when changing it months later. Names are the cheapest way to make all of that faster.

## Names say what and why

A good name tells the reader **what** something is and **why** it exists, so they don't have to read the code that uses it.

- \`elapsedMs\` instead of \`t\` (and the unit is in the name).
- \`unpaidInvoices\` instead of \`list2\`.
- \`MAX_LOGIN_ATTEMPTS\` instead of a bare \`5\` in the middle of an \`if\`.

Short names are fine for tiny scopes: \`i\` in a three-line loop is clear. The wider a name is used, the more it should say.

## Booleans ask, functions do

- **Booleans** read as yes/no questions: \`isExpired\`, \`hasAccess\`, \`canRetry\`. Then \`if (canRetry)\` reads like a sentence.
- **Functions** are verbs that describe the result: \`calculateTax()\`, \`sendReminder()\`. Avoid vague verbs like \`process()\`, \`handle()\` or \`doStuff()\` that could mean anything.

## Hard to name means wrong shape

If you can't find a good name for a function, that's a signal, not a vocabulary problem. Usually it's doing several unrelated things. The only honest name is \`validateAndSaveAndEmail()\`, which suggests it should be three functions: \`validate()\`, \`save()\` and \`sendWelcomeEmail()\`.

The same goes for variables called \`data\`, \`info\` or \`temp\`: either the thing has no clear purpose, or you haven't decided what it is yet.
`,
    takeaways: [
      'A good name makes the body unnecessary to read; wider scope deserves a fuller name.',
      'Booleans read as questions; functions are specific verbs.',
      'If something is hard to name, it\'s probably doing too much.',
    ],
    quiz: [
      {
        q: 'Which is the best name for a boolean tracking whether a session has timed out?',
        options: ['timeout', 'sessionFlag', 'isSessionExpired', 'checkSession'],
        answer: 2,
        why: 'Boolean names read best as yes/no questions. `checkSession` sounds like a function, and `timeout` could be a number.',
      },
      {
        q: 'Which function name is best?',
        options: ['process(order)', 'handleData(order)', 'calculateShippingCost(order)', 'doOrder(order)'],
        answer: 2,
        why: 'It says exactly what the function produces. The others could mean anything.',
      },
      {
        q: 'The only accurate name you can find is `parseAndValidateAndStore()`. What does that suggest?',
        options: ['Use a shorter name', 'The function does too much and should be split', 'Add a comment instead', 'Nothing; long names are fine'],
        answer: 1,
        why: 'A name full of "and" is a sign of several jobs in one function.',
      },
    ],
    practice:
      'Open a file you wrote recently. Find three names that make you read the code to understand them, and write better ones.',
    cards: [
      { id: 'c-eng-rc-1', front: 'What should a good name tell the reader?', back: 'What the thing is and why it exists, so the reader can skip the body.' },
      { id: 'c-eng-nm-1', front: 'How should booleans be named?', back: 'As yes/no questions: isExpired, hasAccess, canRetry.' },
      { id: 'c-eng-nm-2', front: 'What does it mean if a function is hard to name?', back: 'It probably does several jobs and should be split.' },
    ],
  },
  {
    id: 'eng-functions',
    unit: 'Craft',
    title: 'Small functions and guard clauses',
    summary: 'Give each function one job, keep the main path flat, and use comments for the why.',
    ideas: ['One job per function', 'Guard clauses keep the main path flat', 'Comments explain why, not what'],
    body: `
## One job per function

A function should do one thing at one level of detail. Mixing "add up the items", "apply the discount" and "round to cents" in one block makes the reader hold all three in their head at once.

\`\`\`js
function checkout(cart) {
  const subtotal = sumItems(cart.items)
  const total = applyDiscount(subtotal, cart.user)
  return roundToCents(total)
}
\`\`\`

Each step now has a name. The function that calls them is still "one job": its job is the bigger outcome, turning a cart into a total. Name it after that outcome (\`checkout\`), not after its steps.

## Guard clauses keep the main path flat

Handle the edge cases first and return early, so the main logic isn't buried under layers of \`if\`:

\`\`\`js
function sendReminder(user) {
  if (!user.email) return
  if (user.unsubscribed) return
  mailer.send(user.email, reminderTemplate(user))
}
\`\`\`

The reader sees immediately when nothing happens, then reads the real work without nesting.

## Comments explain why, not what

The code already says **what** it does. Comments are for what the code can't say: the business rule, the workaround for a library bug, the reason the obvious approach doesn't work.

\`\`\`js
// Stripe retries webhooks for up to 3 days, so we dedupe by event id.
if (await alreadyProcessed(event.id)) return
\`\`\`

A comment that repeats the code ("increment i") goes stale and starts lying. A comment that records a decision stays useful.
`,
    takeaways: [
      'One job at one level of detail; name the caller after the overall outcome.',
      'Return early for edge cases so the main path reads top to bottom.',
      'Comment the reasons and constraints the code can\'t express.',
    ],
    quiz: [
      {
        q: 'You split a long function into `sumItems`, `applyDiscount` and `roundToCents`. What should the function that calls them be named?',
        options: ['runAll()', 'sumApplyRound()', 'After the overall outcome, e.g. checkout()', 'main()'],
        answer: 2,
        why: 'The caller\'s job is the bigger outcome. A name listing its steps breaks whenever a step changes.',
      },
      {
        q: 'What is the main benefit of guard clauses?',
        options: ['Faster code', 'They keep the main logic un-nested and easy to find', 'They remove the need for tests', 'Fewer functions'],
        answer: 1,
        why: 'Early returns deal with edge cases up front so the core logic reads top to bottom.',
      },
      {
        q: 'Which comment adds the most value?',
        options: ['// increment i by 1', '// loop over users', '// The API returns dates in local time, so convert to UTC before saving', '// TODO'],
        answer: 2,
        why: 'It records a fact about the outside world that the code can\'t express on its own.',
      },
    ],
    practice:
      'Find one function you wrote that does more than one thing. Write how you would split it, with a name for each piece and for the function that calls them.',
    cards: [
      { id: 'c-eng-rc-2', front: 'What is a guard clause?', back: 'An early return that handles an edge case first, keeping the main path un-nested.' },
      { id: 'c-eng-rc-3', front: 'What belongs in a code comment?', back: 'The why: business rules, constraints, workarounds and decisions the code cannot express.' },
      { id: 'c-eng-fn-1', front: 'How should a function that coordinates other functions be named?', back: 'After the overall outcome it produces (e.g. checkout), not after its steps.' },
    ],
  },
  {
    id: 'eng-debugging',
    unit: 'Craft',
    title: 'Debugging systematically',
    summary: 'Treat bugs as experiments. Guessing is slow; a disciplined loop is fast.',
    ideas: ['The debugging loop', 'Change one thing at a time', 'Fix the cause, then add a test'],
    body: `
The engineers who debug fastest aren't better at guessing. They follow a loop and narrow down the problem step by step.

## The debugging loop

1. **Reproduce** it reliably. If you can't trigger the bug on demand, you can't confirm a fix.
2. **Observe** precisely. Read the whole error message and stack trace; the answer is often right there.
3. **Hypothesise** one specific cause that explains everything you've seen.
4. **Test** it with the cheapest experiment that could prove it wrong: a log line, a breakpoint, a one-line change.
5. **Repeat** until a hypothesis survives.

> "Checkout fails for some users." Reproduce: it fails for users with a saved address in Canada. Hypothesis: postcode validation rejects Canadian postcodes. Test: call the validator with "K1A 0B1". It fails. Found it.

## Change one thing at a time

If you change three things and the bug disappears, you don't know which change fixed it, or whether the other two broke something else. Make one change, check, then decide. It feels slower and is much faster.

Timebox it too: if you've been stuck for an hour or two, write down what you've ruled out and ask someone. Explaining it often reveals the answer on its own.

## Fix the cause, then add a test

Adding a null check that makes a crash go away often just hides the problem. Ask **why** the value was null in the first place; that's the real bug.

Once you've fixed it, add a test that fails without your fix. It proves the fix works and stops the bug coming back.
`,
    takeaways: [
      'Reproduce, observe, hypothesise, test, repeat.',
      'Change one thing at a time; ask for help after a timebox.',
      'Fix why it happened, not just the symptom, and add a regression test.',
    ],
    quiz: [
      {
        q: 'What is the first step when you get a bug report?',
        options: ['Rewrite the module', 'Reproduce the bug reliably', 'Add logging everywhere', 'Ask who wrote the code'],
        answer: 1,
        why: 'Without a reliable reproduction you can\'t test hypotheses or confirm a fix.',
      },
      {
        q: 'You change three settings and the bug disappears. What is the problem?',
        options: ['None', 'You don\'t know which change fixed it, or whether the others broke something', 'It took too long', 'Settings can\'t fix bugs'],
        answer: 1,
        why: 'Changing one thing at a time is what lets you learn the cause.',
      },
      {
        q: 'You add a null check and the crash stops. What is the main risk?',
        options: ['Null checks are slow', 'Whatever produced the null is still broken', 'It\'s less readable', 'No risk'],
        answer: 1,
        why: 'Unless you know why the value was null, the underlying bug can surface elsewhere.',
      },
    ],
    practice:
      'Think of the last bug that took you a long time. Which step of the loop did you skip or rush?',
    cards: [
      { id: 'c-eng-db-1', front: 'The debugging loop?', back: 'Reproduce, observe, hypothesise, test, repeat. Then fix the cause and add a regression test.' },
      { id: 'c-eng-dbg-1', front: 'Why change one thing at a time while debugging?', back: 'So you know which change mattered and don\'t introduce new problems unnoticed.' },
    ],
  },
  {
    id: 'eng-narrowing',
    unit: 'Craft',
    title: 'Narrowing down bugs',
    summary: 'Three techniques that cut the search space in half, again and again.',
    ideas: ['Binary search with git bisect', 'Make a minimal reproduction', 'Check what you\'re "sure" about'],
    body: `
## Binary search with git bisect

If something worked last week and doesn't now, the bug is in one of the commits in between. **git bisect** finds it by binary search: you mark a known good commit and a known bad one, git checks out the middle, you test and mark it good or bad, and it halves the range each time.

\`\`\`text
git bisect start
git bisect bad            # current commit is broken
git bisect good v2.3.0    # this release was fine
# test, then: git bisect good   or   git bisect bad
\`\`\`

128 commits take only about **7** steps (2⁷ = 128). The same halving idea works without git: comment out half of a code path, or turn off half of the config, and see which half the bug is in.

## Make a minimal reproduction

Strip away everything unrelated until the bug disappears. The last thing you removed is involved. Then put it back and keep removing other things.

You end up with the smallest code that still shows the bug, often ten lines instead of a whole app. Small repros make the cause obvious, and they're what library maintainers ask for when you report a bug.

## Check what you're "sure" about

Bugs usually live in an assumption you didn't check: "this function is definitely called", "the config is definitely loaded", "the user ID is definitely a number". Print or inspect those values.

Two quick tricks:

- **Diff working vs broken**: another environment, another input, another version. What's different?
- **Rubber duck**: explain the code line by line, out loud or in writing. You'll often hear yourself skip the step that's wrong.
`,
    takeaways: [
      'git bisect finds a breaking commit in about log₂(n) steps.',
      'Shrink the problem until it\'s a minimal reproduction.',
      'Verify your assumptions; compare working and broken cases.',
    ],
    quiz: [
      {
        q: 'A bug appeared somewhere in the last 128 commits. With git bisect, about how many tests will you need?',
        options: ['7', '32', '64', '128'],
        answer: 0,
        why: 'Bisect halves the range each time: log₂(128) = 7.',
      },
      {
        q: 'While building a minimal reproduction, the bug disappears after you remove the caching layer. What does that tell you?',
        options: ['The bug is fixed', 'The caching layer is involved in the bug', 'Caching is always buggy', 'Nothing'],
        answer: 1,
        why: 'The last thing you removed before the bug vanished is part of the cause.',
      },
      {
        q: 'The code works in staging but not in production. What is the most useful first step?',
        options: ['Rewrite it', 'Compare what\'s different between the two environments', 'Restart production', 'Add more servers'],
        answer: 1,
        why: 'Diffing a working case against a broken one narrows the cause quickly.',
      },
    ],
    practice:
      'Next time you\'re stuck on a bug, write down three things you\'re assuming are true, then check each one.',
    cards: [
      { id: 'c-eng-db-2', front: 'What does git bisect do?', back: 'Binary-searches commit history to find the commit that introduced a bug in about log₂(n) steps.' },
      { id: 'c-eng-db-3', front: 'Why make a minimal reproduction?', back: 'Removing unrelated code isolates the cause; the last removal that makes the bug vanish points to it.' },
    ],
  },
  {
    id: 'eng-testing-behaviour',
    unit: 'Craft',
    title: 'Tests that survive refactors',
    summary: 'Good tests let you change code without fear. Bad tests make every change painful.',
    ideas: ['Test behaviour, not implementation', 'Arrange, act, assert'],
    body: `
Tests exist to give you **confidence to change code**. A suite that breaks on every refactor, or passes while the product is broken, fails at that job.

## Test behaviour, not implementation

Check what a caller or user can **observe**: return values, rendered text, saved records, emails sent. Avoid checking private details like internal state or which helper got called. Then you can restructure the code freely, and tests fail only when behaviour actually changes.

\`\`\`js
// Brittle: tied to internal state
expect(component.state.items.length).toBe(3)

// Robust: tied to what the user sees
expect(screen.getAllByRole('listitem')).toHaveLength(3)
\`\`\`

> A sign you're testing implementation: a refactor that changes no behaviour breaks dozens of tests.

## Arrange, act, assert

Structure each test in three visible parts:

\`\`\`js
test('gold users get 10% off orders over $100', () => {
  const cart = makeCart({ tier: 'gold', items: [{ price: 120 }] }) // arrange
  const total = checkout(cart)                                     // act
  expect(total).toBe(108)                                          // assert
})
\`\`\`

- **One behaviour per test**, so a failure tells you exactly what broke.
- **Name it like a specification**: "gold users get 10% off orders over $100", not "test checkout 2". The list of test names becomes documentation of what the code does.
`,
    takeaways: [
      'Assert on observable behaviour so refactors don\'t break tests.',
      'Arrange, act, assert: one behaviour per test.',
      'Name tests as specifications of what the code does.',
    ],
    quiz: [
      {
        q: 'A refactor that changes no behaviour breaks 40 tests. What does this suggest?',
        options: ['The refactor was wrong', 'The tests are coupled to implementation details', 'You need more tests', 'Coverage is too low'],
        answer: 1,
        why: 'Behaviour-focused tests survive refactors. Mass breakage means they check internals.',
      },
      {
        q: 'Which test name is best?',
        options: ['test1', 'checkout works', 'applies 10% discount for gold users over $100', 'testCheckoutFunctionCorrectly'],
        answer: 2,
        why: 'It states exactly which behaviour is expected, so a failure is self-explanatory.',
      },
    ],
    practice:
      'Pick one of your tests. Would it still pass after a refactor that changed no behaviour? If not, rewrite its assertion.',
    cards: [
      { id: 'c-eng-ts-1', front: 'Why test behaviour rather than implementation?', back: 'So tests survive refactors and only fail when observable behaviour changes.' },
      { id: 'c-eng-ts-3', front: 'AAA in testing?', back: 'Arrange (set up), Act (run it), Assert (check the result). One behaviour per test.' },
    ],
  },
  {
    id: 'eng-testing-scope',
    unit: 'Craft',
    title: 'What and how much to test',
    summary: 'Where to spend testing effort, which inputs matter most, and what coverage doesn\'t tell you.',
    ideas: ['The testing pyramid', 'Test the edges', 'Coverage isn\'t confidence'],
    body: `
## The testing pyramid

- **Many unit tests**: fast and focused on pure logic, like calculations, parsers and reducers.
- **Some integration tests**: pieces working together, like your API with a real database.
- **A few end-to-end tests**: critical journeys through the real app, like signing up or checking out.

Higher layers give more confidence per test but are slower, flakier and harder to debug, so save them for what matters most.

## Test the edges

Most bugs live at the boundaries, not in the typical case. For any function, think about:

- **Empty** input: an empty list, an empty string.
- **One** item, and the **maximum** allowed.
- **Boundaries**: exactly the limit, one under, one over. Off-by-one bugs live here.
- **Invalid** data: wrong types, negative numbers, missing fields.

> \`average([])\` returns \`NaN\`, because 0 / 0. The happy-path test with \`[2, 4, 6]\` never finds that.

And every time you fix a bug, write the failing test first. Bugs cluster, and that test keeps it fixed.

## Coverage isn't confidence

Line coverage tells you which lines **ran** during tests, not whether anything **checked** the result. A test that calls a function and asserts nothing gives 100% coverage of it.

Use coverage to find code with **no** tests at all. Don't chase a percentage; aim for confidence that the important behaviours and edges are checked.
`,
    takeaways: [
      'Many unit tests, some integration tests, a few end-to-end tests.',
      'Test empty, one, max, boundaries and invalid input.',
      'Coverage shows what ran, not what was checked.',
    ],
    quiz: [
      {
        q: 'Which kind of test should you have the most of?',
        options: ['End-to-end', 'Integration', 'Unit', 'Manual'],
        answer: 2,
        why: 'Unit tests are fast and precise, so they form the base of the pyramid.',
      },
      {
        q: 'Which input is most likely to reveal an off-by-one bug?',
        options: ['A typical mid-sized input', 'Inputs exactly at the boundary', 'Random input', 'A very large input'],
        answer: 1,
        why: 'Off-by-one errors sit at boundaries: the first or last item, exactly the limit, zero.',
      },
      {
        q: '100% line coverage guarantees:',
        options: ['No bugs', 'Every line ran during the tests', 'All edge cases are tested', 'Correct behaviour'],
        answer: 1,
        why: 'Coverage only says a line ran. It says nothing about whether the result was checked.',
      },
    ],
    practice:
      'Write the names of five tests for a function you own, including at least two edge cases. Names only, as specifications.',
    cards: [
      { id: 'c-eng-ts-2', front: 'The testing pyramid?', back: 'Many fast unit tests, fewer integration tests, a handful of end-to-end tests for critical journeys.' },
      { id: 'c-eng-tsc-1', front: 'Which inputs should every function\'s tests cover?', back: 'Empty, one, maximum, boundaries (one under/at/over the limit) and invalid input.' },
      { id: 'c-eng-tsc-2', front: 'What does code coverage measure?', back: 'Which lines ran during tests, not whether their results were checked.' },
    ],
  },
  {
    id: 'eng-big-o',
    unit: 'Foundations',
    title: 'Big-O: how code grows',
    summary: 'Estimate how the work grows as inputs grow, before it surprises you in production.',
    ideas: ['What Big-O describes', 'The common shapes', 'Simplifying Big-O'],
    body: `
## What Big-O describes

Big-O describes how the work an algorithm does **grows** as the input grows. It ignores exact speeds and constants and focuses on the shape of the curve. That shape decides whether code that's fine with 100 rows falls over with a million.

## The common shapes

- **O(1)**, constant: the same work whatever the size. Reading \`array[5]\`, a hash map lookup.
- **O(log n)**, logarithmic: each step halves the problem. Binary search finds an item among 1,000,000 sorted ones in about 20 steps.
- **O(n)**, linear: one pass over the data. Summing a list.
- **O(n log n)**: good general-purpose sorting, like the sort built into most languages.
- **O(n²)**, quadratic: a loop inside a loop over the same data. Comparing every pair. 10,000 items means about 100,000,000 operations.
- **O(2ⁿ)**, exponential: trying every subset. Unusable beyond small n.

## Simplifying Big-O

- **Drop constants and smaller terms:** O(3n² + 100n + 7) is just O(n²), because the n² part dominates as n grows.
- **Steps one after another add:** O(n) then O(n) is O(n + n), which is still O(n).
- **Nested steps multiply:** an O(n) loop inside an O(n) loop is O(n²).
`,
    takeaways: [
      'Big-O is about how work grows, not exact speed.',
      'Know the shapes: 1, log n, n, n log n, n², 2ⁿ.',
      'Drop constants; sequential steps add, nested steps multiply.',
    ],
    quiz: [
      {
        q: 'Binary search on a sorted array of 1,000,000 items needs roughly how many steps?',
        options: ['20', '1,000', '500,000', '1,000,000'],
        answer: 0,
        why: 'log₂(1,000,000) ≈ 20. Each step halves the remaining range.',
      },
      {
        q: 'O(3n² + 100n + 7) simplifies to:',
        options: ['O(3n²)', 'O(n²)', 'O(n)', 'O(100n)'],
        answer: 1,
        why: 'Drop constants and smaller terms. The n² term dominates as n grows.',
      },
      {
        q: 'A loop over n users contains a loop over the same n users. Its complexity is:',
        options: ['O(n)', 'O(2n)', 'O(n²)', 'O(log n)'],
        answer: 2,
        why: 'Nested steps multiply: n × n.',
      },
    ],
    practice:
      'Pick three functions in your codebase and write down their Big-O. Which one would hurt first if the data grew 100 times?',
    cards: [
      { id: 'c-eng-bo-1', front: 'Complexity of binary search?', back: 'O(log n). Each step halves the search space.' },
      { id: 'c-eng-bo-3', front: 'Sequential vs nested steps in Big-O?', back: 'Sequential steps add (O(n)+O(n)=O(n)); nested steps multiply (O(n)·O(n)=O(n²)).' },
      { id: 'c-eng-bo-4', front: 'Typical complexity of a good general-purpose sort?', back: 'O(n log n).' },
    ],
  },
  {
    id: 'eng-slow-code',
    unit: 'Foundations',
    title: 'Spotting slow code',
    summary: 'The most common performance bug is a loop you can\'t see. Here\'s how to find it and fix it.',
    ideas: ['Hidden loops', 'Trade memory for time', 'Measure before optimising'],
    body: `
## Hidden loops

\`includes\`, \`indexOf\`, \`find\` and \`filter\` all look like single operations, but each one is a loop over the whole array. Put one inside another loop and you have O(n²) without writing a nested loop.

\`\`\`js
// For each order, scan every user: O(n × m)
orders.map(o => users.find(u => u.id === o.userId))
\`\`\`

With 10,000 orders and 10,000 users, that's up to 100,000,000 comparisons. It's fast in development with 20 rows and painfully slow in production.

Watch for array methods inside loops, and for **database queries or API calls inside loops**, which are even worse because each one is a network round trip.

## Trade memory for time

The usual fix: build a lookup structure once, then use it.

\`\`\`js
// Build a Map once (O(m)), then each lookup is O(1): O(n + m) overall
const byId = new Map(users.map(u => [u.id, u]))
orders.map(o => byId.get(o.userId))
\`\`\`

Now it's about 20,000 operations instead of 100,000,000. The Map costs extra **memory**, which is almost always worth it, but it is a trade. For database loops, the equivalent is one query that fetches everything at once instead of one query per item.

## Measure before optimising

Big-O tells you where to **look**. A profiler tells you what's **actually** slow. Before rewriting anything, time it or profile it with realistic data. Code that's O(n²) over a list that never has more than 10 items is fine; the slow part is often somewhere you didn't expect.
`,
    takeaways: [
      'find, includes, indexOf and queries inside a loop are hidden nested loops.',
      'Build a Map or Set once to turn repeated O(n) lookups into O(1).',
      'Measure with realistic data before optimising.',
    ],
    quiz: [
      {
        q: 'What is the time complexity of calling `arr.includes(x)` for every x in `arr`?',
        options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
        answer: 2,
        why: '`includes` is a linear scan, and it runs once per element: n × n.',
      },
      {
        q: 'How do you usually speed up repeated lookups by id inside a loop?',
        options: ['Sort the array each time', 'Build a Map from id to item once, before the loop', 'Use a for loop instead of map', 'Add more servers'],
        answer: 1,
        why: 'A Map lookup is O(1), so the total drops from O(n × m) to O(n + m).',
      },
      {
        q: 'A function is O(n²) but n is never more than 10. What should you do?',
        options: ['Rewrite it immediately', 'Probably nothing; measure before optimising', 'Add caching', 'Split it into two functions'],
        answer: 1,
        why: 'Big-O matters as n grows. With tiny n, the cost is negligible.',
      },
    ],
    practice:
      'Search your code for find, includes, filter or a database call inside a loop. Write down its complexity and how a Map, a Set or a single query could change it.',
    cards: [
      { id: 'c-eng-bo-2', front: 'Why is `list.find()` inside `map()` often slow?', back: 'find is O(n), so inside a loop it becomes O(n·m). Precompute a Map for O(1) lookups.' },
      { id: 'c-eng-sc-1', front: 'Why measure before optimising?', back: 'Big-O shows where to look; a profiler with realistic data shows what\'s actually slow.' },
    ],
  },
  {
    id: 'eng-ds-everyday',
    unit: 'Foundations',
    title: 'Lists, maps and sets',
    summary: 'The three structures you\'ll use every day, and how to choose between them.',
    ideas: ['Choose by how you\'ll use the data', 'Lists vs maps', 'Sets for membership'],
    body: `
## Choose by how you'll use the data

Picking the structure that matches how you **access** data usually matters more than clever algorithms. Before choosing, list the operations you need and how often: look up by key? check membership? keep order? add to the end? remove from the front?

## Lists vs maps

- An **array (list)** keeps items **in order**, with fast access by position and fast adding to the end. Searching it for a value is O(n): it checks every item.
- A **hash map** (\`Map\`, a Python \`dict\`, an object) stores **key → value** pairs with O(1) average lookup, insert and delete.

> If you find yourself writing \`items.find(i => i.id === id)\` over and over, you wanted a map keyed by id.

Use a list when order matters or you mostly loop over everything. Use a map when you mostly look things up by a key.

## Sets for membership

A **set** stores unique values and answers "is this in here?" in O(1).

\`\`\`js
const taken = new Set(['alice', 'bob'])
taken.has('alice')   // true, instantly, however big the set is
\`\`\`

Sets also remove duplicates for free: \`new Set(emails).size\` is the number of unique emails. Use one whenever you'd otherwise check \`array.includes(x)\` repeatedly.
`,
    takeaways: [
      'List the operations you need, then pick the structure that makes them fast.',
      'Lists for order and iteration; maps for lookup by key.',
      'Sets for fast membership checks and de-duplication.',
    ],
    quiz: [
      {
        q: 'You need to check, many times a second, whether a username is already taken. Best choice?',
        options: ['Array', 'Set', 'Sorted array', 'String'],
        answer: 1,
        why: 'Set membership is O(1) on average; an array check is O(n).',
      },
      {
        q: 'You keep looking up products by their SKU. Which structure fits best?',
        options: ['An array of products', 'A map from SKU to product', 'A set of SKUs', 'A string of SKUs'],
        answer: 1,
        why: 'A map gives O(1) lookup by key.',
      },
      {
        q: 'What is the simplest way to count unique values in an array?',
        options: ['Sort it and count', 'new Set(arr).size', 'A nested loop', 'arr.length'],
        answer: 1,
        why: 'A set keeps only unique values.',
      },
    ],
    practice:
      'Pick one feature you\'ve built. List the operations it performs on its main data, and check whether the structure you used fits them.',
    cards: [
      { id: 'c-eng-ds-1', front: 'When should a list become a Map?', back: 'When you repeatedly look items up by a key (like id). Map lookups are O(1) instead of O(n).' },
      { id: 'c-eng-dse-1', front: 'What is a Set good for?', back: 'O(1) membership checks ("is this in here?") and removing duplicates.' },
    ],
  },
  {
    id: 'eng-ds-specialised',
    unit: 'Foundations',
    title: 'Stacks, queues, heaps and trees',
    summary: 'Structures for when order, priority or relationships matter.',
    ideas: ['Stacks and queues', 'Heaps for "most urgent" and "top k"', 'Trees and graphs for relationships'],
    body: `
## Stacks and queues

- A **stack** is last in, first out, like a pile of plates. Uses: undo history, matching brackets, the call stack, depth-first search.
- A **queue** is first in, first out, like a line at a shop. Uses: processing jobs in arrival order, breadth-first search.

> In JavaScript, \`array.shift()\` (removing from the front) is O(n), because every other item moves. For a large queue, keep an index of the front instead, or use a proper queue structure.

## Heaps for "most urgent" and "top k"

A **heap** (priority queue) always gives you the smallest (or largest) item in O(log n), even as new items keep arriving. Uses: job schedulers ("run the most urgent next"), Dijkstra's shortest path, and "top k" problems.

> **Top 10 articles from millions of views:** count views per article in a map, then keep a min-heap of size 10 as you go. Each new article is compared with the smallest of the current top 10. That's O(n log 10), effectively O(n), and it never has to sort everything.

## Trees and graphs for relationships

- A **tree** models hierarchies: file systems, the DOM, org charts, nested comments. Balanced search trees also keep data **sorted** with O(log n) inserts and lookups (database indexes use a relative, the B-tree).
- A **graph** models any relationships between things: social networks, route maps, dependencies between packages or tasks. "What do I need to build first?" is a graph problem (a topological sort).
`,
    takeaways: [
      'Stack: last in, first out. Queue: first in, first out.',
      'A heap keeps the most urgent item on top; it solves "top k" without a full sort.',
      'Trees for hierarchies and sorted data; graphs for relationships and dependencies.',
    ],
    quiz: [
      {
        q: 'Which structure naturally models an undo history?',
        options: ['Queue', 'Stack', 'Heap', 'Hash map'],
        answer: 1,
        why: 'Undo reverses the most recent action first: last in, first out.',
      },
      {
        q: 'Which structure is best for always processing the most urgent job next, as jobs keep arriving?',
        options: ['Priority queue (heap)', 'Plain queue', 'Set', 'Array sorted once'],
        answer: 0,
        why: 'A heap returns the highest-priority item in O(log n), even as items are added.',
      },
      {
        q: 'Working out the order to build packages that depend on each other is a problem on which structure?',
        options: ['Stack', 'Set', 'Graph', 'Heap'],
        answer: 2,
        why: 'Dependencies form a graph; ordering them is a topological sort.',
      },
    ],
    practice:
      'Find one place in software you use daily that behaves like a stack, one like a queue, and one like a tree.',
    cards: [
      { id: 'c-eng-ds-2', front: 'Stack vs queue?', back: 'Stack: last in, first out (undo, DFS). Queue: first in, first out (jobs, BFS).' },
      { id: 'c-eng-ds-3', front: 'Best structure for "top k of a stream"?', back: 'A min-heap of size k. O(n log k).' },
      { id: 'c-eng-dss-1', front: 'Tree vs graph?', back: 'Tree: a hierarchy (file system, DOM). Graph: any relationships (networks, dependencies).' },
    ],
  },
  {
    id: 'eng-design-start',
    unit: 'Systems',
    title: 'Starting a system design',
    summary: 'Before drawing boxes, pin down what the system must do and how much load it faces.',
    ideas: ['Functional and non-functional requirements', 'Estimate the load', 'Latency numbers to remember'],
    body: `
System design isn't about memorising architectures. It's a way of reasoning, and it starts with questions, not boxes.

## Functional and non-functional requirements

- **Functional**: what must it do? "Users can shorten a URL and be redirected when they visit it."
- **Non-functional**: how well? How fast, how available, how consistent, how cheap, how secure.

> A URL shortener's non-functional requirements might be: redirects in under 50 ms, 99.9% availability, links never change once created. Each of these shapes the design.

## Estimate the load

Rough numbers decide the design. A system for 100 users and one for 100 million need very different architectures.

> 10 million new links a month is about **4 per second** (a month is about 2.6 million seconds). If each link is visited 100 times, that's about **400 redirects per second**, with peaks several times higher.
> Storage: 10 million links × about 500 bytes ≈ 5 GB a month.

Work out requests per second, the read/write ratio (here 100:1, so reads dominate), and data growth per year.

## Latency numbers to remember

- Reading from memory: about **100 nanoseconds**.
- Reading from an SSD: about **100 microseconds** (1,000 times slower).
- A round trip within one data centre: about **0.5 milliseconds**.
- A round trip across a continent: about **150 milliseconds**.

So: keep hot data in memory, avoid network calls inside loops, and put data close to the users who need it.
`,
    takeaways: [
      'Clarify what it must do and how well before designing.',
      'Estimate requests per second, read/write ratio and data growth.',
      'Memory is ~1,000× faster than disk; networks are slower still.',
    ],
    quiz: [
      {
        q: 'Which is a non-functional requirement?',
        options: ['Users can upload photos', 'Users can delete their account', 'Pages load in under 200 ms', 'Admins can ban users'],
        answer: 2,
        why: 'Non-functional requirements describe how well the system works, not what it does.',
      },
      {
        q: 'A service gets 50 million requests a day. Roughly how many per second on average?',
        options: ['50', '600', '50,000', '5 million'],
        answer: 1,
        why: 'A day is about 86,400 seconds; 50,000,000 / 86,400 ≈ 580.',
      },
      {
        q: 'Your app makes 50 sequential database calls per page, each about 1 ms. What helps most?',
        options: ['Faster CPUs', 'Batching them into one or a few queries', 'More servers', 'Switching database'],
        answer: 1,
        why: 'Round trips dominate. Batching removes most of them; more servers don\'t make one request faster.',
      },
    ],
    practice:
      'For an app you use daily, write two functional requirements, two non-functional ones, and a rough requests-per-second estimate.',
    cards: [
      { id: 'c-eng-sd-1', front: 'Memory vs SSD vs cross-continent latency (rough)?', back: '~100 ns, ~100 µs, ~150 ms.' },
      { id: 'c-eng-dsn-1', front: 'Functional vs non-functional requirements?', back: 'Functional: what the system does. Non-functional: how well (speed, availability, cost, security).' },
      { id: 'c-eng-dsn-2', front: 'Seconds in a day and a month (rough)?', back: 'About 86,400 a day (call it 100k) and about 2.6 million a month.' },
    ],
  },
  {
    id: 'eng-scaling-app',
    unit: 'Systems',
    title: 'Load balancers and caches',
    summary: 'How to serve more traffic: run more copies, and avoid repeating work.',
    ideas: ['Scale out behind a load balancer', 'Cache repeated reads', 'Cache invalidation'],
    body: `
## Scale out behind a load balancer

When one server can't keep up, you can buy a bigger one (**vertical scaling**) or run several identical copies (**horizontal scaling**). Horizontal scaling goes much further and survives a server dying.

A **load balancer** sits in front of the copies and spreads requests between them. It also uses health checks to stop sending traffic to unhealthy instances.

For this to work, the servers should be **stateless**: no user sessions or uploaded files kept only in one server's memory or disk. Put that state in a shared database, cache or file store, so any copy can handle any request.

## Cache repeated reads

A **cache** keeps the results of expensive work (a database query, an API call, a rendered page) in fast storage, usually memory, so repeated requests skip the work.

> A product page queries the database on every view, and prices change a few times a day. Caching each product for five minutes in Redis turns thousands of queries a minute into a handful.

Caches live at many levels: in the browser, at a **CDN** close to users, in a shared store like Redis, or in each server's memory.

## Cache invalidation

The hard part of caching is knowing when cached data is **stale**. Common approaches:

- **Expire it after a time (TTL).** Simple. Data can be stale for up to that long.
- **Delete or update it when the data changes.** Fresher, but every code path that changes the data must remember to do it.

Decide how stale is acceptable for each kind of data. A product description can be minutes old; an account balance usually can't.
`,
    takeaways: [
      'Scale horizontally behind a load balancer; keep servers stateless.',
      'Cache expensive, repeated reads close to where they\'re needed.',
      'Choose how stale data may be, then expire or invalidate accordingly.',
    ],
    quiz: [
      {
        q: 'Why should servers behind a load balancer be stateless?',
        options: ['It saves memory', 'So any server can handle any request, and losing one loses no user state', 'Load balancers require it by law', 'It makes code shorter'],
        answer: 1,
        why: 'If state lives on one server, requests routed elsewhere break, and the state disappears with the server.',
      },
      {
        q: 'What is the hardest part of caching?',
        options: ['Choosing a library', 'Invalidation: keeping cached data fresh', 'Memory cost', 'Serialisation'],
        answer: 1,
        why: 'Deciding when data is stale, and making sure every change updates or evicts it, is where the bugs are.',
      },
      {
        q: 'Which data is least suitable for a long cache time?',
        options: ['A blog post', 'A company logo', 'A user\'s account balance', 'A product description'],
        answer: 2,
        why: 'Stale balances cause real errors. The others can safely be minutes old.',
      },
    ],
    practice:
      'Pick a slow page or endpoint you know. What would you cache, where, and how stale could it safely be?',
    cards: [
      { id: 'c-eng-sa-1', front: 'Vertical vs horizontal scaling?', back: 'Vertical: a bigger server. Horizontal: more identical servers behind a load balancer.' },
      { id: 'c-eng-sa-2', front: 'Two ways to keep a cache fresh?', back: 'Expire entries after a time (TTL), or delete/update them whenever the data changes.' },
    ],
  },
  {
    id: 'eng-scaling-data',
    unit: 'Systems',
    title: 'Scaling the database',
    summary: 'The database is usually the first real bottleneck. Three tools for when it is.',
    ideas: ['Indexes', 'Replication', 'Sharding'],
    body: `
App servers are easy to copy. The database holds the data, so scaling it takes more thought. Try these roughly in this order.

## Indexes

An **index** is a sorted lookup structure on one or more columns, like the index at the back of a book. Without one, finding \`WHERE email = 'a@b.com'\` scans every row; with one, it's a few steps.

The trade-off: indexes make **reads faster** and **writes slower**, because every insert and update also updates each index. Add indexes for the queries you actually run often, and check slow queries with your database's \`EXPLAIN\`.

> A single, well-indexed database goes much further than most people expect. Many products never need anything more.

## Replication

**Replication** keeps copies of the whole database on other machines. Typically one **primary** takes all writes and several **replicas** serve reads.

- More read capacity: send reads to replicas.
- Fault tolerance: if the primary fails, a replica can take over.
- The catch: replicas lag slightly behind. A user might save a change and not see it on the next page if that read hits a replica. Read your own writes from the primary when it matters.

## Sharding

When one machine can't hold the data or handle the writes, **sharding** splits the data across several databases, for example customers A–M on one and N–Z on another, or by a hash of the user ID.

It's powerful and complicated: queries across shards get hard, rebalancing is painful, and every piece of code must know where data lives. Treat it as a last resort, after indexes, caching and replication.
`,
    takeaways: [
      'Indexes speed up reads and slow down writes; add them for real queries.',
      'Replication copies all data for read capacity and failover; replicas lag slightly.',
      'Sharding splits data across machines; powerful but a last resort.',
    ],
    quiz: [
      {
        q: 'Adding a database index usually:',
        options: ['Speeds up reads and slows down writes', 'Speeds up both', 'Slows down both', 'Only reduces storage'],
        answer: 0,
        why: 'Reads use the index to avoid full scans; every write must also update it.',
      },
      {
        q: 'A user updates their profile and the next page shows the old version. With read replicas, the likely cause?',
        options: ['A bug in the index', 'Replication lag: the read hit a replica that hadn\'t caught up', 'The cache is too big', 'Sharding'],
        answer: 1,
        why: 'Replicas trail the primary slightly. Reading your own writes from the primary avoids this.',
      },
      {
        q: 'Replication vs sharding?',
        options: [
          'They are the same',
          'Replication copies all data to more machines; sharding splits the data between machines',
          'Sharding copies data; replication splits it',
          'Both only apply to caches',
        ],
        answer: 1,
        why: 'Replication scales reads and adds fault tolerance; sharding scales capacity and writes.',
      },
    ],
    practice:
      'Find the slowest query in an app you work on (or imagine one). Which index would help it, and what would it cost on writes?',
    cards: [
      { id: 'c-eng-sd-2', front: 'Replication vs sharding?', back: 'Replication copies all data (read scale, fault tolerance); sharding splits data across machines (capacity).' },
      { id: 'c-eng-sdb-1', front: 'What does a database index cost?', back: 'Slower writes and extra storage, since every insert and update must also update the index.' },
      { id: 'c-eng-sdb-2', front: 'What is replication lag?', back: 'Replicas trail the primary slightly, so a read right after a write may see old data.' },
    ],
  },
  {
    id: 'eng-design-tradeoffs',
    unit: 'Systems',
    title: 'Design trade-offs',
    summary: 'Every architecture gives something up. Good designs name what, and why.',
    ideas: ['Consistency vs availability (CAP)', 'Latency vs cost', 'Simplicity vs scale'],
    body: `
There's rarely a "best" design, only trade-offs that fit your requirements. A good design answer names them. "It depends" is fine, if it's followed by "on these things, and here's what I'd choose."

## Consistency vs availability (CAP)

When parts of a distributed system can't talk to each other (a **network partition**), each part must choose:

- **Refuse requests** until it can be sure the data is correct (consistency), or
- **Keep answering**, possibly with stale data (availability).

This is the **CAP theorem**. In practice: a bank transfer should refuse rather than risk being wrong; a social media like counter can safely be a few seconds out of date. Decide per feature, not once for the whole system.

## Latency vs cost

Faster usually costs more: more caches, more servers in more regions, more memory, more engineering time.

> Serving users in Asia from a US server adds about 150–200 ms to every round trip. A second region fixes that, and roughly doubles your infrastructure and operational work.

Ask what latency your users actually need, and what it's worth to them.

## Simplicity vs scale

Designing for 100 million users on day one adds complexity you pay for every day: more services, more failure modes, slower development. Most products never reach that scale.

Start with the simplest design that meets the requirements you can see, plus a plan for what you'd change first if load grew 10×. A single well-indexed database and a few app servers carry a lot of products a very long way.
`,
    takeaways: [
      'During a partition, choose per feature between refusing requests and serving stale data.',
      'Lower latency costs money and effort; match it to real needs.',
      'Build for the scale you can see, with a plan for the next 10×.',
    ],
    quiz: [
      {
        q: 'What does the CAP theorem say in practice?',
        options: [
          'Systems can be fast, cheap and correct',
          'During a network partition, a distributed system must choose between consistency and availability',
          'Caches always improve performance',
          'Databases must be sharded',
        ],
        answer: 1,
        why: 'When parts can\'t communicate, you either refuse requests or risk serving stale data.',
      },
      {
        q: 'Which feature should favour consistency over availability?',
        options: ['A post\'s like counter', 'Recommended videos', 'Transferring money between accounts', 'A "users online" count'],
        answer: 2,
        why: 'Being briefly unavailable is better than moving money incorrectly. The others can be slightly stale.',
      },
      {
        q: 'A three-person startup plans a 15-service architecture "to scale". The main problem?',
        options: [
          'Too few services',
          'It pays a large complexity cost now for scale it may never need',
          'Microservices are always wrong',
          'It will be too fast',
        ],
        answer: 1,
        why: 'Start simple, with a plan for growth, rather than paying for complexity up front.',
      },
    ],
    practice:
      'Sketch a URL shortener in a few lines: requirements, load estimate, components, and one trade-off you\'d make on purpose.',
    cards: [
      { id: 'c-eng-sd-3', front: 'What does CAP say in practice?', back: 'During a network partition, a distributed system must choose between consistency and availability.' },
      { id: 'c-eng-dt-1', front: 'How should you approach scale in a new design?', back: 'Build the simplest thing that meets visible requirements, with a plan for what you\'d change at 10× load.' },
    ],
  },
  {
    id: 'eng-code-review',
    unit: 'Collaboration',
    title: 'Code review',
    summary: 'Reviews spread knowledge and catch bugs, as long as they stay small, focused and kind.',
    ideas: ['As an author: small PRs with context', 'As a reviewer: correctness first', 'Comment with questions and severity'],
    body: `
## As an author: small PRs with context

- **Keep pull requests small.** Under about 400 lines gets a real review; 2,000 lines gets "looks good to me".
- **Write a description**: what changed, why, how you tested it, and where reviewers should look closely.
- **Review your own diff first.** You'll catch the leftover \`console.log\` and the unclear name before anyone else has to.
- Take feedback as being about the code, not about you.

## As a reviewer: correctness first

Review in priority order:

1. **Correctness**: does it do what it claims? Edge cases, error handling, security.
2. **Design**: is this the right place and the right shape? Will it be easy to change?
3. **Readability**: will the next person understand it?
4. **Style**: leave formatting and lint rules to automated tools.

A beautifully named bug is still a bug, so spend your attention top-down.

## Comment with questions and severity

- **Ask, don't accuse.** "What happens if \`items\` is empty here?" lands better than "this is broken", and sometimes the author has a good answer.
- **Be specific and suggest an alternative.**
- **Label severity** so the author knows what must change: *blocking*, *suggestion*, *nit*.
- **Say what's good**, too. It tells people what to keep doing.

> "What happens if the API returns an empty list here? Maybe return early. (blocking)" is specific, explains the risk, suggests a fix and states the severity.
`,
    takeaways: [
      'Small PRs with clear descriptions get better reviews.',
      'Review correctness, then design, then readability; automate style.',
      'Ask questions, suggest fixes, and label severity.',
    ],
    quiz: [
      {
        q: 'What should reviewers prioritise first?',
        options: ['Formatting', 'Variable naming', 'Correctness', 'Comment grammar'],
        answer: 2,
        why: 'Correctness matters most; style is best left to tools.',
      },
      {
        q: 'Which review comment is most effective?',
        options: [
          'This is wrong.',
          'Why would you do it this way?',
          'What happens if the list is empty here? Maybe return early. (blocking)',
          'nit',
        ],
        answer: 2,
        why: 'It is specific, explains the risk, suggests a fix and states the severity.',
      },
      {
        q: 'Why keep pull requests small?',
        options: ['Git limits their size', 'Reviewers can actually understand and check them', 'They deploy faster', 'Small PRs never have bugs'],
        answer: 1,
        why: 'Large diffs get skimmed. Small ones get real attention.',
      },
    ],
    practice:
      'Review a recent PR (yours or a teammate\'s) using the priority list. Write one correctness question and one design question.',
    cards: [
      { id: 'c-eng-cr-1', front: 'Code review priority order?', back: 'Correctness, then design, then readability, then style (automated where possible).' },
      { id: 'c-eng-cr-2', front: 'Why label review comments by severity?', back: 'So the author knows what must change (blocking) and what is optional (suggestion, nit).' },
    ],
  },
  {
    id: 'eng-git',
    unit: 'Collaboration',
    title: 'Version control habits',
    summary: 'Small, focused commits with clear messages turn your history into documentation.',
    ideas: ['One logical change per commit', 'Messages that explain why', 'Short-lived branches'],
    body: `
Git history records **why** the code is the way it is. Good habits make that record useful when you're hunting a bug months later.

## One logical change per commit

Don't mix a refactor, a bug fix and a formatting pass in one commit. When each commit does one thing, you can review it, revert it or bisect to it on its own.

And **never commit secrets**. If one slips in, rotate it immediately; deleting it in a later commit isn't enough, because history keeps it.

## Messages that explain why

\`\`\`text
Fix double charge when payment webhook is retried

Stripe can deliver the same event more than once. We now store
processed event ids and skip duplicates.
\`\`\`

- **Summary line**: imperative mood ("Fix", "Add", "Remove"), about 50 characters, saying what changed.
- **Body**: why the change was needed and anything surprising. The diff already shows what; only the message can say why.

"fixed stuff" and "WIP" tell your future self nothing.

## Short-lived branches

Long-running feature branches drift away from main and end in painful merges. Instead:

- Merge small pieces back to main often (daily, ideally).
- Pull or rebase from main regularly.
- Use **feature flags** to merge unfinished work safely without exposing it.

Useful commands for reading history: \`git log -p path/to/file\` (how did this file evolve?), \`git blame\` (which commit last changed this line; read that commit's message for the why), and \`git bisect\` (which commit broke it?).
`,
    takeaways: [
      'One logical change per commit; never commit secrets.',
      'Summary in the imperative; body explains why.',
      'Merge small pieces often; hide unfinished work behind flags.',
    ],
    quiz: [
      {
        q: 'Which commit message is best?',
        options: ['fixed stuff', 'WIP', 'Fix timezone bug in invoice due dates', 'Changes to invoice.js'],
        answer: 2,
        why: 'It says what changed and where, in the imperative mood.',
      },
      {
        q: 'You accidentally pushed an API key. What must you do?',
        options: ['Delete the file in a new commit', 'Rewrite history to remove it', 'Rotate the key: revoke it and issue a new one', 'Make the repo private'],
        answer: 2,
        why: 'Once pushed, assume it has been copied. Only rotating the key removes the risk.',
      },
      {
        q: 'Why prefer short-lived branches?',
        options: ['Git limits branch age', 'They avoid long drift from main and painful merges', 'They make commits smaller', 'They\'re required for CI'],
        answer: 1,
        why: 'The longer a branch lives, the more main moves on, and the harder the merge.',
      },
    ],
    practice: 'Look at your last ten commits. Rewrite the weakest message so it explains why.',
    cards: [
      { id: 'c-eng-git-1', front: 'Good commit summary line?', back: 'Imperative mood, about 50 characters, says what changed, e.g. "Fix double charge on webhook retry".' },
      { id: 'c-eng-git-2', front: 'What to do if a secret is committed?', back: 'Rotate it immediately. Removing it from history is not enough.' },
    ],
  },
]
