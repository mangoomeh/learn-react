export const engineering = {
  id: 'engineering',
  tagline: 'Write code that is correct, readable, and easy to change.',
  lessons: [
    {
      id: 'eng-readable-code',
      unit: 'Craft',
      title: 'Readable code',
      minutes: 8,
      summary: 'Code is read far more often than it is written. Optimise for the next reader.',
      body: `
Most of a codebase's cost comes after the first version: reading it, debugging it, changing it. Readable code lowers that cost for everyone, including you in six months.

## Names carry the design

A good name tells the reader **what** something is and **why** it exists, so they don't have to read the body.

- Prefer \`elapsedMs\` over \`t\`, \`unpaidInvoices\` over \`list2\`.
- Booleans read as questions: \`isExpired\`, \`hasAccess\`, \`canRetry\`.
- Functions are verbs that describe the result: \`calculateTax()\`, not \`doTax()\` or \`process()\`.
- If you can't name it, the abstraction is probably wrong. Split it until each piece has an obvious name.

## Small functions, one job

A function should do one thing at one level of abstraction. Mixing "fetch the user", "format the date string" and "decide the discount" in one block forces the reader to hold all three in their head.

\`\`\`js
// Hard to follow: three levels of detail interleaved
function checkout(cart) {
  let t = 0
  for (const i of cart.items) t += i.price * i.qty
  if (cart.user.tier === 'gold' && t > 100) t *= 0.9
  return Math.round(t * 100) / 100
}

// Each step has a name
function checkout(cart) {
  const subtotal = sumItems(cart.items)
  const total = applyDiscount(subtotal, cart.user)
  return roundToCents(total)
}
\`\`\`

## Make the happy path obvious

Use **guard clauses** to handle edge cases early and return, so the main logic isn't buried three levels deep in \`if\` blocks.

\`\`\`js
function sendReminder(user) {
  if (!user.email) return
  if (user.unsubscribed) return
  mailer.send(user.email, reminderTemplate(user))
}
\`\`\`

## Comments explain why, not what

The code already says what it does. Comments are for what the code can't say: the business rule, the workaround for a library bug, the reason the obvious approach doesn't work.

> A comment that repeats the code goes stale and starts lying. A comment that explains a decision stays useful.
`,
      takeaways: [
        'Names should make the body unnecessary to read.',
        'One function, one job, one level of abstraction.',
        'Guard clauses keep the happy path flat and visible.',
        'Comment the why; let the code say the what.',
      ],
      quiz: [
        {
          q: 'Which is the best name for a boolean that tracks whether a session has timed out?',
          options: ['timeout', 'sessionFlag', 'isSessionExpired', 'checkSession'],
          answer: 2,
          why: 'Boolean names read best as a yes/no question. `checkSession` sounds like a function, and `timeout` could be a number.',
        },
        {
          q: 'Which comment adds the most value?',
          options: [
            '// increment i by 1',
            '// loop over users',
            '// Stripe retries webhooks for 3 days, so we dedupe by event id',
            '// TODO',
          ],
          answer: 2,
          why: 'It records a fact about the outside world that the code cannot express on its own. The others repeat the code or say nothing.',
        },
        {
          q: 'What is the main benefit of guard clauses?',
          options: [
            'They make code run faster',
            'They keep the main logic un-nested and easy to find',
            'They remove the need for tests',
            'They reduce the number of functions',
          ],
          answer: 1,
          why: 'Early returns deal with edge cases up front so the core logic reads top to bottom without deep nesting.',
        },
      ],
      practice:
        'Open a file you wrote recently. Find one function that does more than one thing and write down how you would split it, with a name for each piece.',
      cards: [
        { id: 'c-eng-rc-1', front: 'What should a good name tell the reader?', back: 'What the thing is and why it exists, so the reader can skip the body.' },
        { id: 'c-eng-rc-2', front: 'What is a guard clause?', back: 'An early return that handles an edge case first, keeping the happy path un-nested.' },
        { id: 'c-eng-rc-3', front: 'What belongs in a code comment?', back: 'The why: business rules, constraints, workarounds and decisions the code cannot express.' },
      ],
    },
    {
      id: 'eng-complexity',
      unit: 'Foundations',
      title: 'Big-O and complexity',
      minutes: 10,
      summary: 'Estimate how code behaves as inputs grow, before it surprises you in production.',
      body: `
Big-O describes how the work an algorithm does **grows** as the input grows. It ignores constants and focuses on the shape of the curve. That shape is what decides whether code that's fine with 100 rows falls over with 1,000,000.

## The common shapes

- **O(1)** constant: array index, hash map lookup.
- **O(log n)** logarithmic: binary search; each step halves the problem.
- **O(n)** linear: one pass over the data.
- **O(n log n)**: good comparison sorts (merge sort, the sort built into most languages).
- **O(n²)** quadratic: a loop inside a loop over the same data.
- **O(2ⁿ)** exponential: trying every subset. Unusable past small n.

## Spotting accidental O(n²)

The most common performance bug is a hidden nested loop. \`includes\`, \`indexOf\` and \`find\` are loops.

\`\`\`js
// O(n * m): for each order, scan every user
orders.map(o => users.find(u => u.id === o.userId))

// O(n + m): build a lookup once, then each access is O(1)
const byId = new Map(users.map(u => [u.id, u]))
orders.map(o => byId.get(o.userId))
\`\`\`

With 10,000 orders and 10,000 users, the first version does up to 100,000,000 comparisons. The second does about 20,000 operations.

## Space matters too

The \`Map\` above trades **memory** for **time**. That's usually a good trade, but it is a trade. Always ask: what does this cost in memory, and is the data big enough to care?

## Rules of thumb

- Drop constants and lower terms: O(2n + 5) is O(n).
- Sequential steps add: O(n) + O(n) = O(n).
- Nested steps multiply: O(n) inside O(n) = O(n²).
- Measure before optimising. Big-O tells you where to look; a profiler tells you what's actually slow.
`,
      takeaways: [
        'Big-O is about growth, not exact speed.',
        'includes / find / indexOf inside a loop is a nested loop.',
        'A hash map turns repeated O(n) lookups into O(1).',
        'Profile before optimising.',
      ],
      quiz: [
        {
          q: 'What is the time complexity of checking `arr.includes(x)` for every x in `arr`?',
          options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
          answer: 2,
          why: '`includes` is a linear scan, and it runs once per element, so n × n.',
        },
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
          why: 'Drop constants and lower-order terms. The n² term dominates as n grows.',
        },
      ],
      practice:
        'Find a loop in your code that calls find, includes, filter or indexOf inside it. Write down its complexity and how a Map or Set could change it.',
      cards: [
        { id: 'c-eng-bo-1', front: 'Complexity of binary search?', back: 'O(log n). Each step halves the search space.' },
        { id: 'c-eng-bo-2', front: 'Why is `list.find()` inside `map()` often slow?', back: 'find is O(n), so inside a loop it becomes O(n·m). Precompute a Map for O(1) lookups.' },
        { id: 'c-eng-bo-3', front: 'Sequential vs nested steps in Big-O?', back: 'Sequential steps add (O(n)+O(n)=O(n)); nested steps multiply (O(n)·O(n)=O(n²)).' },
        { id: 'c-eng-bo-4', front: 'Typical complexity of a good general-purpose sort?', back: 'O(n log n).' },
      ],
    },
    {
      id: 'eng-data-structures',
      unit: 'Foundations',
      title: 'Choosing data structures',
      minutes: 9,
      summary: 'The right structure makes the algorithm obvious. The wrong one makes everything awkward.',
      body: `
"Show me your data structures and I won't need your code." Picking the structure that matches how you **access** data usually matters more than clever algorithms.

## Ask how the data will be used

Before choosing, list the operations you need and how often: lookup by key? check membership? keep sorted? take the smallest? add to the end? remove from the front?

## The everyday toolkit

- **Array / list**: ordered, fast index access, fast append. Slow to search (O(n)) and slow to insert at the front.
- **Hash map (Map, dict, object)**: key → value with O(1) average lookup, insert and delete. Use it when you find yourself searching a list by id.
- **Set**: membership tests in O(1) and automatic de-duplication. \`new Set(arr).size\` counts unique values.
- **Stack** (last in, first out): undo history, matching brackets, depth-first search.
- **Queue** (first in, first out): job processing, breadth-first search. Note: \`array.shift()\` is O(n) in JavaScript; for big queues use an index pointer or a real deque.
- **Heap / priority queue**: get the min or max in O(log n). Use it for schedulers, "top k" problems and Dijkstra's algorithm.
- **Tree**: hierarchies (file systems, DOM, org charts) and, when balanced, sorted data with O(log n) operations.
- **Graph**: anything with relationships: dependencies, networks, routes.

## Example

You need to show the 10 most-viewed articles from a stream of millions of view events.

- Count views with a **hash map** (articleId → count).
- Keep the top 10 with a **min-heap** of size 10: O(n log 10), effectively O(n).
- Sorting everything would be O(n log n) and needs all items in memory at once.

> When code feels clumsy, check the data structure before you rewrite the logic.
`,
      takeaways: [
        'Choose a structure by listing the operations you need.',
        'Searching a list by key means you probably wanted a Map.',
        'Sets give O(1) membership and de-duplication.',
        'Heaps solve "top k" and scheduling problems.',
      ],
      quiz: [
        {
          q: 'You need to check, many times per second, whether a username is already taken. Best choice?',
          options: ['Array', 'Set', 'Stack', 'Sorted array'],
          answer: 1,
          why: 'Set membership is O(1) on average. An array check is O(n).',
        },
        {
          q: 'Which structure naturally models an undo history?',
          options: ['Queue', 'Stack', 'Heap', 'Hash map'],
          answer: 1,
          why: 'Undo reverses the most recent action first, which is last in, first out.',
        },
        {
          q: 'Which structure is best for always processing the most urgent job next?',
          options: ['Priority queue (heap)', 'Plain queue', 'Set', 'Linked list'],
          answer: 0,
          why: 'A heap gives the highest-priority item in O(log n), even as jobs keep arriving.',
        },
      ],
      practice:
        'Pick one feature you have built. List the operations it performs on its main data, then say whether the structure you used was the best fit.',
      cards: [
        { id: 'c-eng-ds-1', front: 'When should a list become a Map?', back: 'When you repeatedly look items up by a key (like id). Map lookups are O(1) instead of O(n).' },
        { id: 'c-eng-ds-2', front: 'Stack vs queue?', back: 'Stack: last in, first out (undo, DFS). Queue: first in, first out (jobs, BFS).' },
        { id: 'c-eng-ds-3', front: 'Best structure for "top k of a stream"?', back: 'A min-heap of size k. O(n log k).' },
      ],
    },
    {
      id: 'eng-debugging',
      unit: 'Craft',
      title: 'Debugging systematically',
      minutes: 9,
      summary: 'Treat bugs as experiments. Guessing is slow; narrowing is fast.',
      body: `
Debugging is the scientific method on a small scale. The engineers who debug fastest aren't better at guessing. They are disciplined about **reducing the search space**.

## The loop

1. **Reproduce** it reliably. If you can't trigger the bug on demand, you can't confirm a fix.
2. **Observe** the actual behaviour precisely. Read the full error message and stack trace; the answer is often in it.
3. **Hypothesise** one specific cause that explains everything you've seen.
4. **Test** the hypothesis with the cheapest experiment that could prove it wrong.
5. **Fix**, then add a test that would have caught it.

## Narrowing techniques

- **Binary search the cause.** Comment out half the code path, or use \`git bisect\` to find the commit that introduced the bug in about log₂(n) steps.
- **Minimal reproduction.** Strip away everything unrelated until the bug disappears; the last thing you removed is involved.
- **Check your assumptions.** Log or inspect the values you're "sure" about. The bug usually lives in something you assumed.
- **Diff working vs broken.** Another environment, another input, another version: what's different?
- **Rubber duck.** Explaining the problem out loud, line by line, exposes the step you skipped in your head.

## Anti-patterns

- Changing several things at once, so you don't know which one fixed it.
- "Fixing" a symptom (adding a null check) without understanding why the value was null.
- Debugging for two hours before asking for help. Timebox it, then write up what you've ruled out and ask.

> Every bug is a gap between what you think the code does and what it actually does. Find the gap.
`,
      takeaways: [
        'Reproduce first. No repro, no confidence in the fix.',
        'Form one hypothesis and test it cheaply.',
        'Bisect: halve the search space each step.',
        'After fixing, add a test that would have caught it.',
      ],
      quiz: [
        {
          q: 'A bug appeared somewhere in the last 128 commits. With git bisect, about how many test runs will you need?',
          options: ['7', '32', '64', '128'],
          answer: 0,
          why: 'Bisect halves the range each time: log₂(128) = 7.',
        },
        {
          q: 'You add a null check and the crash goes away. What is the main risk?',
          options: [
            'Null checks are slow',
            'You treated a symptom; whatever produced the null is still broken',
            'It makes the code less readable',
            'There is no risk',
          ],
          answer: 1,
          why: 'Unless you know why the value was null, the underlying bug can still corrupt data or fail somewhere else.',
        },
        {
          q: 'What is the first step when you get a bug report?',
          options: ['Rewrite the module', 'Reproduce the bug reliably', 'Add logging everywhere', 'Ask who wrote the code'],
          answer: 1,
          why: 'Without a reliable repro you cannot test hypotheses or confirm a fix.',
        },
      ],
      practice:
        'Think of the last bug that took you a long time. Write down which step of the loop you skipped or rushed, and what you would do differently.',
      cards: [
        { id: 'c-eng-db-1', front: 'The debugging loop?', back: 'Reproduce, observe, hypothesise, test, fix (and add a regression test).' },
        { id: 'c-eng-db-2', front: 'What does git bisect do?', back: 'Binary-searches commit history to find the commit that introduced a bug in about log₂(n) steps.' },
        { id: 'c-eng-db-3', front: 'Why make a minimal reproduction?', back: 'Removing unrelated code isolates the cause; the last removal that makes the bug vanish points to it.' },
      ],
    },
    {
      id: 'eng-testing',
      unit: 'Craft',
      title: 'Testing that pays off',
      minutes: 9,
      summary: 'Good tests let you change code without fear. Bad tests make every change painful.',
      body: `
Tests exist to give you **confidence to change code**. A test suite that breaks on every refactor, or passes while the product is broken, fails at that job.

## Test behaviour, not implementation

Assert on what a user or caller can observe: outputs, rendered text, side effects. Avoid asserting on private details like internal state or which helper got called. Then you can refactor freely, and the tests only fail when behaviour actually changes.

\`\`\`js
// Brittle: tied to internal state
expect(component.state.items.length).toBe(3)

// Robust: tied to what the user sees
expect(screen.getAllByRole('listitem')).toHaveLength(3)
\`\`\`

## The testing pyramid

- **Many unit tests**: fast, focused on pure logic (calculations, parsers, reducers).
- **Some integration tests**: modules working together (API + database, component + store).
- **A few end-to-end tests**: critical user journeys through the real app (sign up, checkout).

Higher layers give more confidence per test but are slower and flakier, so spend them on what matters most.

## What to test

- The happy path, and the **edges**: empty input, one item, maximum size, invalid data, boundaries (off-by-one lives here).
- Every bug you fix: write the failing test first, then fix it.
- Not trivial getters or third-party library behaviour.

## Arrange, Act, Assert

Structure each test in three visible parts: set up the inputs, run the thing, check the result. One behaviour per test, with a name that reads like a spec: \`"applies 10% discount for gold users over $100"\`.

> Coverage percentage measures which lines ran, not whether you checked anything meaningful.
`,
      takeaways: [
        'Tests should fail when behaviour changes, not when you refactor.',
        'Many unit tests, some integration, few E2E.',
        'Test the edges: empty, one, max, invalid, boundaries.',
        'Every bug fix starts with a failing test.',
      ],
      quiz: [
        {
          q: 'A refactor that does not change behaviour breaks 40 tests. What does this suggest?',
          options: [
            'The refactor was wrong',
            'The tests are coupled to implementation details',
            'You need more tests',
            'Coverage is too low',
          ],
          answer: 1,
          why: 'Behaviour-focused tests survive refactors. Mass breakage means they assert on internals.',
        },
        {
          q: 'Which input is most likely to reveal an off-by-one bug?',
          options: ['A typical mid-sized input', 'Inputs exactly at the boundary', 'Random input', 'Very large input'],
          answer: 1,
          why: 'Off-by-one errors sit at boundaries: first and last element, exactly the limit, zero.',
        },
        {
          q: '100% line coverage guarantees:',
          options: ['No bugs', 'Every line executed during tests', 'All edge cases tested', 'Correct behaviour'],
          answer: 1,
          why: 'Coverage only says the line ran. It says nothing about whether the result was checked.',
        },
      ],
      practice:
        'Write the names of five tests for a function you own, covering at least two edge cases. Write the names only, as spec sentences.',
      cards: [
        { id: 'c-eng-ts-1', front: 'Why test behaviour rather than implementation?', back: 'So tests survive refactors and only fail when observable behaviour changes.' },
        { id: 'c-eng-ts-2', front: 'The testing pyramid?', back: 'Many fast unit tests, fewer integration tests, a handful of end-to-end tests for critical journeys.' },
        { id: 'c-eng-ts-3', front: 'AAA in testing?', back: 'Arrange (set up), Act (run it), Assert (check the result).' },
      ],
    },
    {
      id: 'eng-system-design',
      unit: 'Systems',
      title: 'System design basics',
      minutes: 12,
      summary: 'Requirements, bottlenecks and trade-offs: the questions behind every architecture.',
      body: `
System design isn't about memorising architectures. It's a way of reasoning: **clarify requirements, estimate load, find the bottleneck, choose trade-offs deliberately.**

## Start with requirements

- **Functional**: what must it do? ("Users can shorten a URL and be redirected.")
- **Non-functional**: how well? Latency, availability, consistency, scale, cost.
- **Estimate**: requests per second, read/write ratio, data size per year. A system with 100 users and one with 100 million need very different designs.

## Latency numbers to remember

- Memory read: ~100 ns
- SSD read: ~100 µs (1,000× memory)
- Same-datacentre round trip: ~0.5 ms
- Cross-continent round trip: ~150 ms

So: avoid network calls in loops, cache hot data in memory, and put data close to users.

## The core building blocks

- **Load balancer**: spreads requests across identical servers, so you can scale horizontally.
- **Cache** (e.g. Redis, CDN): serves repeated reads from memory. Hard part: **invalidation**, keeping the cache from serving stale data.
- **Database**: SQL for relationships and transactions; NoSQL for flexible schemas or very large scale. **Indexes** make reads fast and writes slower.
- **Replication**: copies data for read scale and fault tolerance. **Sharding**: splits data across machines when one can't hold it.
- **Queue**: decouples producers from consumers, absorbs traffic spikes, enables retries.

## Trade-offs are the point

- **Consistency vs availability**: during a network partition, a distributed system must choose between refusing requests and possibly serving stale data (the CAP theorem).
- **Latency vs cost**: more caches and regions are faster and more expensive.
- **Simplicity vs scale**: don't build for 100M users on day one. A single well-indexed database goes much further than people expect.

> A good design answer names its trade-offs. "It depends" is fine when followed by "...on these things, and here's what I'd choose."
`,
      takeaways: [
        'Clarify functional and non-functional requirements, then estimate load.',
        'Network round trips cost far more than memory access.',
        'Caches are easy to add and hard to invalidate.',
        'Every design is a set of trade-offs. Name them.',
      ],
      quiz: [
        {
          q: 'Your app makes 50 sequential database calls per page load, each ~1 ms round trip. What is the most effective fix?',
          options: ['Faster CPUs', 'Batch the calls into one or a few queries', 'Add more servers', 'Switch to NoSQL'],
          answer: 1,
          why: 'Round-trip latency dominates. Batching removes 49 trips; more servers don\'t make one request faster.',
        },
        {
          q: 'What is the hardest part of caching?',
          options: ['Choosing a cache library', 'Invalidation: keeping cached data fresh', 'Memory cost', 'Serialization'],
          answer: 1,
          why: 'Deciding when cached data is stale, and making sure every writer updates or evicts it, is where the bugs are.',
        },
        {
          q: 'Adding a database index usually:',
          options: [
            'Speeds up reads and slows down writes',
            'Speeds up both',
            'Slows down both',
            'Only reduces storage',
          ],
          answer: 0,
          why: 'Reads use the index to avoid full scans; every write must also update the index.',
        },
      ],
      practice:
        'Sketch the design of a URL shortener in a few lines: requirements, estimated load, components, and one trade-off you made on purpose.',
      cards: [
        { id: 'c-eng-sd-1', front: 'Memory vs SSD vs cross-continent latency (rough)?', back: '~100 ns, ~100 µs, ~150 ms.' },
        { id: 'c-eng-sd-2', front: 'Replication vs sharding?', back: 'Replication copies all data (read scale, fault tolerance); sharding splits data across machines (capacity).' },
        { id: 'c-eng-sd-3', front: 'What does CAP say in practice?', back: 'During a network partition, a distributed system must choose between consistency and availability.' },
        { id: 'c-eng-sd-4', front: 'Why put a queue between services?', back: 'It decouples them, absorbs spikes, and allows retries without the producer waiting.' },
      ],
    },
    {
      id: 'eng-code-review',
      unit: 'Collaboration',
      title: 'Code review and communication',
      minutes: 7,
      summary: 'Reviews spread knowledge and catch bugs, as long as they stay kind, specific and focused.',
      body: `
Code review is one of the fastest ways to grow as an engineer, in both directions. Reviewing teaches you to read code critically. Being reviewed shows you blind spots you can't see yourself.

## As an author

- **Keep PRs small.** Under ~400 lines gets real review; 2,000 lines gets "LGTM".
- **Write a description** with what changed, why, how you tested it, and what reviewers should look at closely.
- **Review your own diff first.** You'll catch the stray console.log and the unclear name.
- Treat feedback as being about the code, not about you.

## As a reviewer, in priority order

1. **Correctness**: does it do what it claims? Edge cases, error handling, concurrency.
2. **Design**: is this the right place and the right abstraction? Will it be easy to change?
3. **Readability**: will the next person understand it?
4. **Style**: leave this to linters and formatters wherever possible.

## Comment well

- Ask questions instead of making accusations: "What happens if \`items\` is empty here?" works better than "This is broken."
- Be specific and suggest an alternative.
- Label severity: **blocking**, **suggestion**, **nit**. It tells the author what must change.
- Praise good work too. It reinforces what to keep doing.

> The goal of review is better code and a stronger team, not winning an argument.
`,
      takeaways: [
        'Small PRs with clear descriptions get better reviews.',
        'Review for correctness, then design, then readability.',
        'Automate style with linters.',
        'Ask questions and label severity.',
      ],
      quiz: [
        {
          q: 'Which review comment is most effective?',
          options: [
            'This is wrong.',
            'Why would you do it this way?',
            'What happens if the API returns an empty list here? Maybe guard with an early return. (blocking)',
            'nit',
          ],
          answer: 2,
          why: 'It is specific, explains the risk, suggests a fix and states severity.',
        },
        {
          q: 'What should reviewers prioritise first?',
          options: ['Formatting', 'Variable naming', 'Correctness', 'Comment grammar'],
          answer: 2,
          why: 'A beautifully named bug is still a bug. Correctness comes first.',
        },
      ],
      practice:
        'Review a recent PR (yours or a teammate\'s) using the priority list. Write down one correctness question and one design question you would ask.',
      cards: [
        { id: 'c-eng-cr-1', front: 'Code review priority order?', back: 'Correctness, then design, then readability, then style (automated where possible).' },
        { id: 'c-eng-cr-2', front: 'Why label review comments by severity?', back: 'So the author knows what must change (blocking) and what is optional (suggestion, nit).' },
      ],
    },
    {
      id: 'eng-git',
      unit: 'Collaboration',
      title: 'Version control habits',
      minutes: 6,
      summary: 'Small, focused commits with clear messages turn history into documentation.',
      body: `
Git history is a record of **why** the code is the way it is. Good habits make that record useful when you're hunting a bug at 2 a.m.

## Commit habits

- **One logical change per commit.** Don't mix a refactor, a bug fix and a formatting pass. Each should be revertable on its own.
- **Commit often** on your branch; tidy up before merging if your team prefers clean history.
- **Never commit secrets.** If you do, rotate the secret: removing it from history isn't enough.

## Messages

\`\`\`text
Fix double charge when payment webhook is retried

Stripe can deliver the same event more than once. We now store
processed event ids and skip duplicates.
\`\`\`

- Summary line: imperative mood ("Fix", "Add"), about 50 characters.
- Body: **why** the change was needed and anything surprising.

## Branching

- Short-lived feature branches that merge back quickly reduce painful conflicts.
- Pull or rebase from main often.
- Feature flags let you merge unfinished work safely without exposing it.

## Useful commands

- \`git log -p path/to/file\`: how did this file evolve?
- \`git blame\`: who changed this line, and in which commit (read the commit for the why).
- \`git bisect\`: find the commit that introduced a bug.
- \`git stash\`: set work aside for a moment.
`,
      takeaways: [
        'One logical change per commit.',
        'Messages explain why, in the imperative mood.',
        'Short-lived branches avoid merge pain.',
        'Leaked secrets must be rotated.',
      ],
      quiz: [
        {
          q: 'Which commit message is best?',
          options: ['fixed stuff', 'WIP', 'Fix timezone bug in invoice due dates', 'Changes to invoice.js'],
          answer: 2,
          why: 'It says what changed and where, in the imperative mood. The others say nothing.',
        },
        {
          q: 'You accidentally pushed an API key. What must you do?',
          options: [
            'Delete the file in a new commit',
            'Rewrite history to remove it',
            'Rotate (revoke and replace) the key',
            'Make the repo private',
          ],
          answer: 2,
          why: 'Once pushed, assume it has been copied. Only rotating the key removes the risk.',
        },
      ],
      practice: 'Look at your last ten commits. Rewrite the weakest message so it explains the why.',
      cards: [
        { id: 'c-eng-git-1', front: 'Good commit summary line?', back: 'Imperative mood, about 50 characters, says what changed, e.g. "Fix double charge on webhook retry".' },
        { id: 'c-eng-git-2', front: 'What to do if a secret is committed?', back: 'Rotate it immediately. Removing it from history is not enough.' },
      ],
    },
  ],
}
