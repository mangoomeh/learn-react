export const apis = [
  {
    id: 'fg-rate-limiting',
    title: 'Rate limiting',
    summary: 'Cap how much any one client can ask for, to protect your service and keep it fair.',
    ideas: ['Why limit', 'Fixed window, sliding window, token bucket', 'Answer with 429 and Retry-After'],
    body: `
## Why limit

**Rate limiting** caps how many requests a client can make in a period, for example 100 requests per minute per API key. It:

- **Protects capacity** from overload, whether accidental (a buggy script in a tight loop) or deliberate (an attack).
- **Keeps it fair**, so one heavy user can't slow down everyone else.
- **Controls cost**, especially when each request costs you money.

Limits are usually counted in a shared store like **Redis**, so all your servers agree, and keyed by API key, user ID or IP address.

## Fixed window, sliding window, token bucket

- **Fixed window**: count requests per calendar minute, resetting at :00. Simple, but a client can send a full allowance at 12:00:59 and another at 12:01:00: double the intended rate in two seconds.
- **Sliding window**: count requests over the last 60 seconds at every moment. Smoother and fairer, slightly more work.
- **Token bucket**: a bucket holds up to N tokens and refills at a steady rate; each request spends one. It allows short **bursts** up to N while enforcing an average rate. This is the most common choice in practice.

## Answer with 429 and Retry-After

When a client is over its limit, respond with **429 Too Many Requests**, and tell it how to behave:

\`\`\`text
HTTP/1.1 429 Too Many Requests
Retry-After: 30
RateLimit-Limit: 100
RateLimit-Remaining: 0
\`\`\`

Clear limits and headers turn "your API is broken" support tickets into clients that slow down on their own.
`,
    takeaways: [
      'Rate limits protect capacity, fairness and cost; count them in a shared store.',
      'Token buckets allow bursts while enforcing an average rate.',
      'Return 429 with Retry-After and limit headers.',
    ],
    quiz: [
      {
        q: 'What is the weakness of a fixed-window limit of 100 requests per minute?',
        options: ['Too much memory', 'A client can send 100 at 12:00:59 and 100 more at 12:01:00', 'It can\'t use Redis', 'It blocks all traffic'],
        answer: 1,
        why: 'Counts reset at the boundary. Sliding windows and token buckets smooth this out.',
      },
      {
        q: 'Which algorithm allows short bursts while enforcing an average rate?',
        options: ['Fixed window', 'Token bucket', 'Round robin', 'First in, first out'],
        answer: 1,
        why: 'The bucket holds up to N tokens for a burst and refills steadily.',
      },
      {
        q: 'Which status code means a client is over its rate limit?',
        options: ['401', '403', '429', '503'],
        answer: 2,
        why: '429 Too Many Requests, ideally with a Retry-After header.',
      },
    ],
    inTheWild: ['API gateways (Kong, AWS API Gateway, Cloudflare)', 'nginx limit_req', 'Redis-based limiters', 'GitHub and Stripe rate limit headers'],
    related: ['fg-rate-limit-clients', 'fg-circuit-breakers'],
    cards: [
      { id: 'c-fg-rl-1', front: 'How does a token bucket rate limiter work?', back: 'A bucket of up to N tokens refills at a steady rate; each request spends a token. Allows bursts, enforces an average.' },
      { id: 'c-fg-rl-2', front: 'Status code and header for a rate-limited request?', back: '429 Too Many Requests, with Retry-After saying how long to wait.' },
    ],
  },
  {
    id: 'fg-rate-limit-clients',
    title: 'Calling rate-limited APIs',
    summary: 'Most APIs you\'ll use limit you. How to be a good client, and other ways services protect themselves.',
    ideas: ['Honour the limits', 'Batch, cache and pace your requests', 'Quotas, concurrency limits and load shedding'],
    body: `
## Honour the limits

Most third-party APIs you'll call (payment, email, maps, AI models, GitHub) are rate-limited. Being a good client keeps your integration working:

- **Read the limit headers** and slow down **before** you hit the limit, not after.
- On a **429**, wait as long as \`Retry-After\` says (or back off with jitter) instead of retrying immediately. Hammering a limited API usually extends the penalty.

## Batch, cache and pace your requests

- **Batch**: many APIs accept several items per request ("create 100 contacts" instead of 100 calls).
- **Cache** responses you'll ask for again, like exchange rates or product details.
- **Pace bulk work through a queue** with a fixed number of workers, so you stay under the limit by design:

> Importing 50,000 customers into a CRM limited to 10 requests per second: put each customer on a queue and run workers that together make at most 10 calls per second. It takes about 1.5 hours and never trips the limit, instead of failing after the first few hundred.

## Quotas, concurrency limits and load shedding

Rate limits have relatives you'll also meet:

- **Quotas** cap totals over long periods: 10,000 calls a month on a given plan.
- **Concurrency limits** cap how many requests can be **in flight at once**, regardless of rate. Useful for slow, expensive requests.
- **Load shedding**: when overloaded, a service rejects low-priority work early so high-priority work still succeeds. Expect occasional 503s from busy services, and treat them as "try again later".
`,
    takeaways: [
      'Watch limit headers and slow down early; on 429, wait for Retry-After.',
      'Batch, cache, and pace bulk work through a queue.',
      'Expect quotas, concurrency limits and load shedding from busy services.',
    ],
    quiz: [
      {
        q: 'An API answers 429 with `Retry-After: 30`. What should your client do?',
        options: ['Retry immediately', 'Retry in a loop until it works', 'Wait 30 seconds before retrying', 'Give up permanently'],
        answer: 2,
        why: 'The server told you exactly how long to wait.',
      },
      {
        q: 'You must send 50,000 records to an API limited to 10 requests per second. Best approach?',
        options: ['Send them all at once', 'Queue them and process with workers capped at 10 calls per second', 'Split across many API keys', 'Retry failures immediately'],
        answer: 1,
        why: 'Pacing by design avoids the limit instead of fighting it.',
      },
      {
        q: 'A concurrency limit caps:',
        options: ['Requests per month', 'Requests in flight at the same time', 'Requests per second', 'Total data stored'],
        answer: 1,
        why: 'It limits simultaneous requests, regardless of how quickly they arrive.',
      },
    ],
    inTheWild: ['GitHub, Stripe and OpenAI rate limit headers', 'p-limit and Bottleneck (Node)', 'Batch endpoints in most SaaS APIs'],
    related: ['fg-rate-limiting', 'fg-background-jobs'],
    cards: [
      { id: 'c-fg-rlc-1', front: 'How do you stay under an API\'s rate limit during bulk work?', back: 'Queue the work and process it with workers capped at the allowed rate; batch and cache where possible.' },
      { id: 'c-fg-rlc-2', front: 'Quota vs rate limit vs concurrency limit?', back: 'Quota: total over a long period. Rate limit: requests per time window. Concurrency limit: requests in flight at once.' },
    ],
  },
  {
    id: 'fg-pagination',
    title: 'Pagination',
    summary: 'Return long lists in pages, and why cursors beat page numbers at scale.',
    ideas: ['Offset pagination and its problems', 'Cursor pagination', 'Habits for paginated APIs'],
    body: `
Any list that can grow (orders, messages, users, logs) must be returned in **pages**. Returning everything works in development with 20 rows and falls over in production with 2 million.

## Offset pagination and its problems

\`\`\`sql
SELECT * FROM orders ORDER BY created_at DESC LIMIT 20 OFFSET 40;  -- page 3
\`\`\`

Easy to build, and it supports "jump to page 7". But:

- **It gets slow.** \`OFFSET 1000000\` makes the database read and discard a million rows first.
- **It skips and repeats items.** If a new order arrives while someone is on page 1, everything shifts down one place, and page 2 repeats the last item of page 1. Deletions make items get skipped.

## Cursor pagination

Instead of "skip 40 rows", ask for "the rows **after** the last one I saw":

\`\`\`sql
SELECT * FROM orders
WHERE (created_at, id) < ('2026-10-01T12:00:00Z', 'o_981')
ORDER BY created_at DESC, id DESC
LIMIT 20;
\`\`\`

The API returns an opaque **cursor** encoding that last position, and the client sends it back for the next page. It's fast at any depth (with an index on the sort columns) and stable while data changes. It can't jump to an arbitrary page number, which feeds and infinite scroll don't need anyway.

Always include a **unique tiebreaker** like \`id\` in the sort. Without it, rows with identical timestamps can be skipped or repeated across pages.

## Habits for paginated APIs

- Set a default page size and a **maximum** (say 100), so nobody can request a million rows at once.
- Make cursors **opaque** (base64-encode them) so clients don't depend on their format.
- Say clearly whether **more results** exist, instead of making clients guess from a short page.
`,
    takeaways: [
      'Offset pagination slows down at depth and skips or repeats items when data changes.',
      'Cursor pagination is fast and stable; include a unique tiebreaker.',
      'Cap page sizes, keep cursors opaque, and say whether there are more results.',
    ],
    quiz: [
      {
        q: 'Why does `OFFSET 1000000` get slow?',
        options: ['The database reads and discards a million rows first', 'Offsets can\'t use indexes by law', 'It returns more data', 'It doesn\'t'],
        answer: 0,
        why: 'Offset pagination scans past every skipped row.',
      },
      {
        q: 'New orders arrive while a user pages through offset-paginated results. What can happen?',
        options: ['Nothing', 'Items shift, so the next page repeats or skips items', 'The query fails', 'The page size changes'],
        answer: 1,
        why: 'Inserts push rows down a position. Cursors avoid this.',
      },
      {
        q: 'Why include a unique column like `id` in a cursor\'s sort?',
        options: ['Security', 'Rows with the same timestamp could otherwise be skipped or repeated', 'Databases require it', 'Shorter cursors'],
        answer: 1,
        why: 'A unique tiebreaker gives every row an exact position.',
      },
    ],
    inTheWild: ['Stripe (starting_after), Slack and GitHub GraphQL cursors', 'Relay-style GraphQL connections', 'Infinite-scroll feeds'],
    related: ['fg-rate-limiting'],
    cards: [
      { id: 'c-fg-pg-1', front: 'Two problems with offset pagination?', back: 'Large offsets are slow, and inserts or deletes between requests cause skipped or repeated items.' },
      { id: 'c-fg-pg-2', front: 'Why add a unique tiebreaker to cursor pagination?', back: 'Rows with identical sort values could otherwise be skipped or repeated between pages.' },
    ],
  },
  {
    id: 'fg-time',
    title: 'Storing dates and times',
    summary: 'Store moments in UTC, keep calendar dates as dates, and record time zones by name.',
    ideas: ['Moments in UTC, sent as ISO 8601', 'Not everything is a moment', 'Time zones are names, not offsets'],
    body: `
Time is one of the most reliable sources of bugs in software. A few rules prevent most of them.

## Moments in UTC, sent as ISO 8601

For **moments in time** (when an order was placed, when a token expires), store **UTC** in a proper timestamp type (\`timestamptz\` in PostgreSQL), and convert to the user's local time only when **displaying** it. Servers, databases and logs should all agree on UTC.

Send times over APIs as **ISO 8601** with an explicit offset: \`2026-10-23T14:30:00Z\` (the Z means UTC) or \`2026-10-23T22:30:00+08:00\`. Never send something like \`10/11/12\`, which means different dates in different countries.

## Not everything is a moment

- A **calendar date** (a birthday, a public holiday, an invoice due date) is not a moment. Store it as a date, \`2026-10-23\`, not as a midnight timestamp.

> Store a birthday as midnight UTC and display it to a user in New York: it shows as the evening of the **previous** day.

- A **future local event** ("the meeting is at 9:00 in New York on 3 March") should be stored as the local time **plus the time zone name**, not converted to UTC now. Governments change daylight-saving rules, sometimes with little notice, and the UTC moment can move.

## Time zones are names, not offsets

\`+08:00\` is an **offset**: the difference from UTC at one moment. \`Asia/Singapore\` or \`America/New_York\` is a **time zone**: a set of rules, including when daylight saving starts and how offsets changed historically.

New York is \`-05:00\` in winter and \`-04:00\` in summer. Store the **zone name** for users and places, and work out offsets when you need them.
`,
    takeaways: [
      'Store moments in UTC; send them as ISO 8601 with an offset.',
      'Calendar dates and future local events aren\'t moments; store them differently.',
      'Store time zone names, not offsets.',
    ],
    quiz: [
      {
        q: 'How should you store the moment an order was placed?',
        options: ['Local time as text', 'UTC in a proper timestamp type', 'The user\'s offset only', 'Unix time in a string column'],
        answer: 1,
        why: 'Store instants in UTC and convert to local time only for display.',
      },
      {
        q: 'Why not store a birthday as a midnight UTC timestamp?',
        options: ['It uses too much space', 'It\'s a calendar date, not a moment; in local time it can show on the wrong day', 'Timestamps can\'t be before 1970', 'Birthdays are private'],
        answer: 1,
        why: 'For users west of UTC, midnight UTC is the previous evening.',
      },
      {
        q: 'Why store `America/New_York` rather than `-05:00` for a user?',
        options: ['It\'s shorter', 'The zone includes daylight-saving rules; the offset changes during the year', 'Offsets are deprecated', 'Databases require names'],
        answer: 1,
        why: 'New York\'s offset is -05:00 in winter and -04:00 in summer.',
      },
    ],
    inTheWild: ['ISO 8601 and RFC 3339', 'The IANA time zone database (tzdata)', 'PostgreSQL timestamptz and date'],
    related: ['fg-time-bugs', 'fg-cron-time'],
    cards: [
      { id: 'c-fg-tm-1', front: 'How should you store a moment in time?', back: 'As UTC in a proper timestamp type, converting to local time only for display.' },
      { id: 'c-fg-tm-2', front: 'Why not store a birthday as a midnight UTC timestamp?', back: 'It\'s a calendar date, not a moment; converted to local time it can show on the wrong day.' },
      { id: 'c-fg-tm-3', front: 'Offset vs time zone?', back: 'An offset (+08:00) is fixed at one moment. A zone (Asia/Singapore) has rules, including daylight saving and history.' },
    ],
  },
  {
    id: 'fg-time-bugs',
    title: 'Avoiding time bugs',
    summary: 'Daylight saving, jumping clocks and untestable code: the time bugs that catch everyone, and the habits that prevent them.',
    ideas: ['Daylight-saving traps', 'Measure durations with a monotonic clock', 'Pass "now" in, and use real date libraries'],
    body: `
## Daylight-saving traps

Where clocks change for daylight saving:

- Some local times **don't exist**: clocks jump from 02:00 to 03:00, so 02:30 never happens that night.
- Some local times happen **twice**: clocks fall back from 02:00 to 01:00, so 01:30 occurs twice.
- A "day" isn't always 24 hours. **Adding 24 hours** and **adding one calendar day** give different answers across a change.

> A reminder set for "same time tomorrow" by adding 24 hours fires an hour early or late on the day clocks change.

Do calendar arithmetic ("one day later", "next month") with a date library in the right time zone, not by adding seconds.

## Measure durations with a monotonic clock

Wall-clock time (\`Date.now()\`) can **jump**: the system corrects its clock from the network, or someone changes it. Measure a duration with it and you can get a negative or wildly wrong result.

Use a **monotonic** clock for timing, one that only ever moves forward: \`performance.now()\` in JavaScript, \`time.monotonic()\` in Python.

## Pass "now" in, and use real date libraries

Code that reads the clock internally is hard to test: how do you check what happens on 29 February, or at midnight on 31 December? Pass the current time in as a parameter (\`isExpired(token, now)\`), so tests can supply any moment they like.

And don't hand-roll date maths. Use your platform's modern tools: \`Temporal\` (or date-fns, Luxon) in JavaScript, \`java.time\`, Python's \`zoneinfo\`. Test with time zones far from your own, and around daylight-saving changes, month ends and leap days.
`,
    takeaways: [
      'Some local times don\'t exist and some repeat; "one day" isn\'t always 24 hours.',
      'Time durations with a monotonic clock, not wall-clock time.',
      'Pass "now" in for testability, and use proper date libraries.',
    ],
    quiz: [
      {
        q: 'Which clock should measure how long a request took?',
        options: ['The wall clock (Date.now())', 'A monotonic clock (performance.now())', 'The database clock', 'The user\'s clock'],
        answer: 1,
        why: 'Wall-clock time can jump when the system clock is corrected.',
      },
      {
        q: '"Same time tomorrow" is calculated by adding 24 hours. When does it go wrong?',
        options: ['Never', 'On days when daylight saving starts or ends', 'On weekends', 'Only in UTC'],
        answer: 1,
        why: 'Those days are 23 or 25 hours long in local time.',
      },
      {
        q: 'Why pass the current time into a function like `isExpired(token, now)`?',
        options: ['It\'s faster', 'Tests can check any moment, like leap days or midnight, without changing the clock', 'Clocks are unreliable', 'It\'s required by JavaScript'],
        answer: 1,
        why: 'Injecting "now" makes time-dependent logic testable.',
      },
    ],
    inTheWild: ['JavaScript Temporal, date-fns-tz, Luxon', 'performance.now() and process.hrtime', 'Python zoneinfo and time.monotonic()'],
    related: ['fg-time', 'fg-cron-time'],
    cards: [
      { id: 'c-fg-tm-4', front: 'Which clock measures durations?', back: 'A monotonic clock (e.g. performance.now()), since wall-clock time can jump.' },
      { id: 'c-fg-tb-1', front: 'Why is "add 24 hours" not "add one day"?', back: 'On daylight-saving changes a local day is 23 or 25 hours long.' },
    ],
  },
]
