export const background = [
  {
    id: 'fg-background-jobs',
    title: 'Background jobs and queues',
    summary: 'Move slow or unreliable work out of the request, so users get a fast answer and the work still gets done.',
    ideas: ['Take slow work out of the request', 'Queue plus workers', 'Absorb spikes, scale separately'],
    body: `
## Take slow work out of the request

Some work shouldn't happen while a user waits: sending email, generating a PDF, resizing images, calling a slow third-party API, rebuilding a report. If any of it is slow or fails, the user's request is slow or fails too.

> Signup sends the welcome email inside the request. The email provider has a slow afternoon, signups start timing out, and you lose customers over an email.

## Queue plus workers

A **background job** splits the work in two:

\`\`\`text
web request ──► put a job on the queue ──► respond "202 Accepted" straight away
                     │
                   queue  (Redis, SQS, RabbitMQ, or a database table)
                     │
                 worker(s) ──► do the work, retry if it fails
\`\`\`

The request only records **what needs doing** and returns. Separate **worker** processes take jobs off the queue and do them, retrying with backoff if something fails. The email still goes out, a few seconds later, even if the provider was down for a minute.

## Absorb spikes, scale separately

Queues also smooth out bursts and let each part grow on its own:

- **Spikes**: 10,000 photo uploads in a minute just make the queue longer; workers get through them at a steady pace instead of the servers falling over.
- **Scaling**: when the queue grows, add workers, without touching the web servers. When it's empty, run fewer.
- **Isolation**: a heavy job can't slow down page loads, because it runs on different machines.
`,
    takeaways: [
      'Slow or unreliable work in a request makes the request slow or unreliable.',
      'The request enqueues a job and returns; workers do the work with retries.',
      'Queues absorb spikes and let workers scale independently of web servers.',
    ],
    quiz: [
      {
        q: 'Why send the welcome email from a background job instead of during signup?',
        options: ['Emails are illegal in requests', 'Signup stays fast, and the email can retry if the provider is slow or down', 'It uses less memory', 'Background jobs never fail'],
        answer: 1,
        why: 'Moving it out of the request protects the user from the provider\'s problems.',
      },
      {
        q: 'What does the web request do in the queue pattern?',
        options: ['Does all the work', 'Records the job on a queue and responds immediately', 'Waits for the worker to finish', 'Starts a new server'],
        answer: 1,
        why: 'The request only says what needs doing; workers do it.',
      },
      {
        q: '10,000 uploads arrive in one minute. With a queue, what happens?',
        options: ['The site crashes', 'The queue grows and workers process the uploads at a steady pace', 'Uploads are rejected', 'The database deletes old data'],
        answer: 1,
        why: 'The queue absorbs the burst instead of the servers.',
      },
    ],
    inTheWild: ['Sidekiq (Ruby), Celery (Python), BullMQ (Node), Hangfire (.NET)', 'AWS SQS, RabbitMQ, Google Pub/Sub', 'Postgres-backed queues like pg-boss and Oban'],
    related: ['fg-queue-delivery', 'fg-workers'],
    cards: [
      { id: 'c-fg-bj-5', front: 'Why move work into a background job?', back: 'Users get a fast response, and slow or unreliable work can retry without failing the request.' },
      { id: 'c-fg-bj-6', front: 'Two operational benefits of a queue?', back: 'It absorbs traffic spikes, and workers can scale independently of the web servers.' },
    ],
  },
  {
    id: 'fg-queue-delivery',
    title: 'How queues deliver jobs',
    summary: 'Jobs can arrive twice, out of order, or never succeed. Here\'s what a queue actually guarantees.',
    ideas: ['Leases and acknowledgements', 'Duplicates and order', 'Dead-letter queues'],
    body: `
## Leases and acknowledgements

Most queues hand a job to a worker and **hide** it from other workers for a while (a "visibility timeout" or "lease"). Then:

- If the worker **acknowledges** the job (says "done"), it's deleted.
- If the worker crashes, or the lease runs out first, the job **becomes visible again** and another worker gets it.

That's how queues survive worker crashes. But it has a catch:

> A job takes 10 minutes and the lease is 5 minutes. At minute 5 the job reappears and a second worker starts it while the first is still working. Set the lease longer than your slowest job, or extend it periodically while working.

## Duplicates and order

Because of leases and retries, assume:

- Jobs can run **more than once**, so make them **idempotent**.
- Jobs can run **out of order**. Don't assume "update profile" runs after "create profile" unless the queue explicitly guarantees ordering (some offer it per key, like SQS FIFO message groups or Kafka partitions).

## Dead-letter queues

Retry failed jobs with backoff, but **cap the attempts**. After the last one, move the job to a **dead-letter queue** (DLQ) instead of retrying forever.

> A "poison" job with malformed data fails every time. Without a cap, workers spend all day retrying it while real work waits.

Alert when the DLQ grows, and give yourself a way to inspect those jobs, fix the cause, and replay them.
`,
    takeaways: [
      'Unacknowledged jobs reappear when their lease expires; set leases above your slowest job.',
      'Jobs may run twice or out of order: make them idempotent and order-independent.',
      'Cap retries and send failures to a dead-letter queue you monitor.',
    ],
    quiz: [
      {
        q: 'A job takes 10 minutes but the visibility timeout is 5 minutes. What happens?',
        options: ['The job is cancelled', 'It becomes visible again and a second worker starts it while the first is running', 'The queue extends the timeout automatically', 'Nothing'],
        answer: 1,
        why: 'Unacknowledged jobs reappear after the timeout.',
      },
      {
        q: 'Which assumption is safest about jobs on a typical queue?',
        options: ['Each runs exactly once, in order', 'They may run more than once and out of order', 'They never fail', 'They run instantly'],
        answer: 1,
        why: 'Leases and retries cause duplicates, and parallel workers break ordering.',
      },
      {
        q: 'What is a dead-letter queue for?',
        options: ['Deleting old jobs', 'Holding jobs that exhausted their retries, so they can be inspected and replayed', 'Speeding up the main queue', 'Storing completed jobs'],
        answer: 1,
        why: 'It stops poison jobs blocking workers while keeping them for investigation.',
      },
    ],
    inTheWild: ['SQS visibility timeout and redrive policy', 'RabbitMQ acknowledgements and dead-letter exchanges', 'Sidekiq retries and the "Dead" set'],
    related: ['fg-background-jobs', 'fg-idempotency', 'fg-enqueue-safely'],
    cards: [
      { id: 'c-fg-bj-1', front: 'What is a visibility timeout (lease)?', back: 'How long a delivered job stays hidden; if it isn\'t acknowledged in time, it\'s redelivered to another worker.' },
      { id: 'c-fg-bj-2', front: 'What is a dead-letter queue?', back: 'Where jobs go after exhausting their retries, so poison messages don\'t block the queue and can be inspected later.' },
    ],
  },
  {
    id: 'fg-enqueue-safely',
    title: 'Enqueueing jobs safely',
    summary: 'Three habits that prevent the most common background-job bugs.',
    ideas: ['Enqueue after the commit', 'Pass IDs, not objects', 'Watch queue depth and job age'],
    body: `
## Enqueue after the commit

A worker can pick up a job **before** the database transaction that created it has committed.

> The request inserts an order and enqueues "send confirmation" in the same transaction. The worker grabs the job in a few milliseconds, looks up the order, and it isn't there yet. Or the transaction rolls back, and the customer gets a confirmation for an order that doesn't exist.

Enqueue **after** the commit succeeds. For full safety, use the **outbox pattern**: write the job into an \`outbox\` table in the **same** transaction as the order, and have a separate process move outbox rows onto the queue. The job exists if and only if the order does.

## Pass IDs, not objects

Put **IDs** in the job, not copies of whole records:

\`\`\`js
jobs.enqueue('send-receipt', { orderId: 'o_42' })         // good
jobs.enqueue('send-receipt', { order: wholeOrderObject }) // risky
\`\`\`

By the time the job runs (seconds or hours later), the record may have changed. Loading it fresh gives the job current data, and keeps payloads small.

## Watch queue depth and job age

Two numbers tell you whether background work is healthy:

- **Queue depth**: how many jobs are waiting. Steadily growing means workers can't keep up.
- **Age of the oldest job**: how long the oldest has waited. A queue of 10 jobs is fine; 10 jobs that have waited an hour is not.

Alert on these, not just on job errors. A stuck or under-powered worker fleet produces no errors at all.
`,
    takeaways: [
      'Enqueue after the commit, or use an outbox table in the same transaction.',
      'Put IDs in job payloads and load fresh data when the job runs.',
      'Alert on queue depth and the age of the oldest job.',
    ],
    quiz: [
      {
        q: 'Why enqueue a job only after the database transaction commits?',
        options: ['Queues are slower than databases', 'Otherwise a worker may run before the row exists, or for a row that gets rolled back', 'It saves money', 'Transactions block queues'],
        answer: 1,
        why: 'The worker can be faster than the commit. The outbox pattern makes this robust.',
      },
      {
        q: 'Why put an order ID in a job instead of the whole order?',
        options: ['IDs are more secure', 'The order may change before the job runs; loading it fresh uses current data', 'Queues reject objects', 'It\'s faster to type'],
        answer: 1,
        why: 'Jobs can run much later than they were queued.',
      },
      {
        q: 'Workers are stuck but no errors are logged. Which alert would catch it?',
        options: ['Error rate', 'CPU usage', 'Age of the oldest job in the queue', 'Disk space'],
        answer: 2,
        why: 'Stuck workers produce no errors, but jobs keep waiting longer and longer.',
      },
    ],
    inTheWild: ['Transactional outbox pattern', 'after_commit hooks (Rails), transaction.on_commit (Django)', 'Queue dashboards in Sidekiq, BullMQ and CloudWatch'],
    related: ['fg-queue-delivery', 'fg-workers-health'],
    cards: [
      { id: 'c-fg-bj-3', front: 'Why enqueue a job after the transaction commits?', back: 'Otherwise a worker may run before the data exists, or for data that gets rolled back. The outbox pattern makes this robust.' },
      { id: 'c-fg-bj-4', front: 'Two queue metrics worth alerting on?', back: 'Queue depth (backlog size) and age of the oldest job.' },
      { id: 'c-fg-es-1', front: 'Why put IDs, not objects, in job payloads?', back: 'Records can change before the job runs; loading fresh data by ID keeps jobs correct and payloads small.' },
    ],
  },
  {
    id: 'fg-cron',
    title: 'Cron and scheduled tasks',
    summary: 'Run work on a timetable: how to read cron expressions, and when a schedule should hand off to a queue.',
    ideas: ['Reading cron expressions', 'Schedules start work; queues do it'],
    body: `
Scheduled tasks run on a timetable instead of in response to a request: nightly reports, cleaning up expired sessions, reminder emails, syncing with a partner's API, renewing certificates.

## Reading cron expressions

Nearly every scheduler uses the five-field **cron expression**:

\`\`\`text
┌ minute (0–59)
│ ┌ hour (0–23)
│ │ ┌ day of month (1–31)
│ │ │ ┌ month (1–12)
│ │ │ │ ┌ day of week (0–6, Sunday = 0)
* * * * *

*/15 * * * *    every 15 minutes
0 2 * * *       every day at 02:00
30 8 * * 1-5    08:30, Monday to Friday
0 0 1 * *       midnight on the 1st of each month
\`\`\`

\`*\` means "every", \`*/15\` means "every 15th", and \`1-5\` is a range. Sites like crontab.guru translate expressions into plain English. Check every one you write; cron typos are easy to make and hard to notice.

## Schedules start work; queues do it

A schedule decides **when** work starts. It isn't good at doing large amounts of work reliably: if a nightly job processing 50,000 accounts crashes at account 30,000, what happens to the rest?

For anything big, the scheduled task should just **enqueue** many small jobs ("recalculate account 1", "recalculate account 2", ...) and let workers process them with retries and backoff. The schedule stays tiny and fast, and failures affect one account, not the whole run.
`,
    takeaways: [
      'Cron fields: minute, hour, day of month, month, day of week.',
      'Check every expression with a tool like crontab.guru.',
      'For big work, have the schedule enqueue small jobs for workers to process.',
    ],
    quiz: [
      {
        q: 'What does `30 8 * * 1-5` mean?',
        options: ['Every 30 minutes from 8 a.m.', '08:30 on weekdays', '08:30 on the 1st to 5th of each month', '30 seconds past 8, daily'],
        answer: 1,
        why: 'Minute 30, hour 8, any day of month, any month, days of week 1–5 (Monday to Friday).',
      },
      {
        q: 'What does `*/15 * * * *` mean?',
        options: ['At 15 minutes past each hour', 'Every 15 minutes', 'Every 15 hours', 'On the 15th of each month'],
        answer: 1,
        why: '`*/15` in the minute field means every 15th minute.',
      },
      {
        q: 'A nightly job must recalculate 50,000 accounts. What\'s the most robust design?',
        options: ['One long loop in the cron job', 'The cron job enqueues one job per account for workers to process', 'Run it every minute', 'Do it in the web request'],
        answer: 1,
        why: 'Small queued jobs retry independently, so one failure doesn\'t ruin the whole run.',
      },
    ],
    inTheWild: ['crontab and systemd timers', 'Kubernetes CronJob', 'AWS EventBridge Scheduler, Google Cloud Scheduler', 'crontab.guru'],
    related: ['fg-cron-pitfalls', 'fg-cron-time', 'fg-heartbeats'],
    cards: [
      { id: 'c-fg-cr-1', front: 'What does `0 2 * * *` mean?', back: 'Every day at 02:00.' },
      { id: 'c-fg-cr-2', front: 'What does `*/15 * * * *` mean?', back: 'Every 15 minutes.' },
      { id: 'c-fg-cn-1', front: 'Cron vs queue?', back: 'The schedule decides when work starts; for big work it should enqueue small jobs that workers run with retries.' },
    ],
  },
  {
    id: 'fg-cron-pitfalls',
    title: 'Scheduled job pitfalls',
    summary: 'Overlapping runs, duplicate schedulers and silent failures: the three classic cron bugs.',
    ideas: ['Overlapping runs', 'One schedule, many servers', 'Silent failure'],
    body: `
## Overlapping runs

A job scheduled every 5 minutes that occasionally takes 7 will start a second copy while the first is still running. Two copies processing the same data can double-send emails or corrupt totals.

**Fix:** take a **lock** at the start, so a run skips (or waits) if the previous one is still going. Options: a database advisory lock, a Redis key with an expiry, or the scheduler's own setting (Kubernetes CronJob has \`concurrencyPolicy: Forbid\`).

## One schedule, many servers

> The crontab is installed on all three web servers. Every night, the invoice job runs three times and customers get three invoices.

This happens constantly when cron lives on application servers that get scaled out. **Fix:** run schedules from **one place** (a dedicated scheduler, a Kubernetes CronJob, a cloud scheduler), or take a lock so that only one instance actually does the work.

## Silent failure

Cron jobs fail quietly. Their output often goes nowhere, and a job that stops running produces no error at all.

- **Log** every run with its start, end and result.
- **Alert** on failures, not just in the log.
- Add a **heartbeat** (dead man's switch) so you hear about jobs that didn't run at all.

> A useful test: if this job hadn't run for a week, how would you find out? If the answer is "a customer would tell us", add a heartbeat.
`,
    takeaways: [
      'Lock so a slow run can\'t overlap with the next one.',
      'Run each schedule from one place, or lock so only one server does the work.',
      'Log, alert and heartbeat every scheduled job.',
    ],
    quiz: [
      {
        q: 'A job runs every 5 minutes and sometimes takes 7. What should you add?',
        options: ['A longer schedule', 'A lock, so a run skips or waits while the previous one is going', 'More servers', 'Nothing'],
        answer: 1,
        why: 'A lock prevents two copies working on the same data at once.',
      },
      {
        q: 'A crontab is copied onto each of three web servers. What goes wrong?',
        options: ['Nothing', 'The job runs three times', 'The job never runs', 'Cron refuses to start'],
        answer: 1,
        why: 'Each server runs its own copy. Schedule from one place, or lock.',
      },
      {
        q: 'What catches a scheduled job that silently stopped running?',
        options: ['Error alerts', 'A heartbeat that expects a ping after each run', 'Log rotation', 'CPU monitoring'],
        answer: 1,
        why: 'A job that never runs logs no errors; only a missing heartbeat reveals it.',
      },
    ],
    inTheWild: ['Kubernetes CronJob concurrencyPolicy: Forbid', 'Postgres advisory locks (pg_try_advisory_lock)', 'Redis SET NX with an expiry', 'Healthchecks.io and Cronitor'],
    related: ['fg-cron', 'fg-heartbeats'],
    cards: [
      { id: 'c-fg-cr-3', front: 'How do you stop a scheduled job overlapping itself?', back: 'Take a lock (DB advisory lock, Redis key with expiry) or set the scheduler to forbid concurrent runs.' },
      { id: 'c-fg-cp-1', front: 'Why do cron jobs sometimes run several times?', back: 'The same schedule is installed on several servers. Run it from one place or lock.' },
    ],
  },
  {
    id: 'fg-cron-time',
    title: 'Scheduling across time',
    summary: 'Daylight saving and downtime make schedules misfire. Design jobs that do the right thing anyway.',
    ideas: ['Schedule in UTC', 'Decide what happens to missed runs', 'Catch up instead of repeating'],
    body: `
## Schedule in UTC

A job scheduled for **02:30 local time** is a time bomb in places with daylight saving:

- The night clocks go **forward**, 02:30 doesn't exist. The job may be skipped.
- The night clocks go **back**, 02:30 happens twice. The job may run twice.

Schedule in **UTC** unless the business rule is genuinely local ("send the digest at 9 a.m. in the customer's own time zone"). When it is local, store the time zone name with the schedule and test the daylight-saving nights.

## Decide what happens to missed runs

If the scheduler was down at 02:00, does the job run when it comes back, or wait until tomorrow? Schedulers differ (Kubernetes CronJob has \`startingDeadlineSeconds\`; plain cron simply skips). Decide which behaviour you want for each job, and check the setting rather than assuming.

## Catch up instead of repeating

The most robust design makes the timetable matter less. Instead of "send today's reminders", write "send **every reminder that's due and hasn't been sent**":

\`\`\`js
async function sendDueReminders(now = new Date()) {
  const due = await db.reminders.findAll({ dueAt: { lte: now }, sentAt: null })
  for (const r of due) {
    await mailer.send(r)
    await db.reminders.update(r.id, { sentAt: now }) // never sent twice
  }
}
\`\`\`

Now a missed run is caught up next time, a double run does nothing extra, and you can safely run it by hand. Store a **high-water mark** (last processed ID or timestamp) for jobs that work through a log of events.
`,
    takeaways: [
      'Local-time schedules can skip or repeat on daylight-saving nights; use UTC.',
      'Choose and configure what happens to runs missed during downtime.',
      'Process "everything due and not yet done", so missed and repeated runs are harmless.',
    ],
    quiz: [
      {
        q: 'Why is a job scheduled for 02:30 local time risky?',
        options: ['Servers are busy at night', 'On daylight-saving changes, 02:30 may be skipped or happen twice', 'Cron can\'t run before 03:00', 'Logs rotate then'],
        answer: 1,
        why: 'Clocks jumping forward skip 02:30; falling back repeats it.',
      },
      {
        q: 'The scheduler was down at the job\'s scheduled time. What happens?',
        options: ['It always runs when the scheduler returns', 'It depends on the scheduler and its settings, so check them', 'It always waits until the next scheduled time', 'The job is deleted'],
        answer: 1,
        why: 'Schedulers handle missed runs differently; don\'t assume.',
      },
      {
        q: 'Which reminder job design is most robust?',
        options: ['Send today\'s reminders', 'Send every reminder that is due and not yet marked sent', 'Send all reminders every run', 'Send reminders created in the last 24 hours'],
        answer: 1,
        why: 'It catches up after missed runs and does nothing extra on repeated ones.',
      },
    ],
    inTheWild: ['CRON_TZ and time zone settings in schedulers', 'Kubernetes CronJob startingDeadlineSeconds', 'High-water marks in data pipelines'],
    related: ['fg-cron', 'fg-time-bugs'],
    cards: [
      { id: 'c-fg-cr-4', front: 'Why schedule jobs in UTC?', back: 'Local times can be skipped or repeated when daylight saving starts or ends.' },
      { id: 'c-fg-ct-1', front: 'How do you make a scheduled job safe to miss or repeat?', back: 'Have it process everything due and not yet done, marking each item as it finishes.' },
    ],
  },
  {
    id: 'fg-workers',
    title: 'Background services',
    summary: 'Long-running processes with nobody watching: their basic loop, and what keeps them running.',
    ideas: ['The worker loop', 'Supervisors and crash loops', 'Long polling, not busy polling'],
    body: `
A **background service** (also called a daemon, worker or consumer) is a process that runs continuously without serving users directly: queue workers, event consumers, schedulers, sync processes.

## The worker loop

Almost every worker is the same loop:

\`\`\`js
while (!shuttingDown) {
  const job = await queue.receive({ waitSeconds: 20 })
  if (!job) continue
  try {
    await handle(job)
    await queue.ack(job)
  } catch (err) {
    log.error({ err, jobId: job.id }, 'job failed')
    await queue.retryLater(job)
  }
}
\`\`\`

Receive, handle, acknowledge, and on failure log and retry later. One bad job must never crash the loop. What makes a worker production-ready is everything around this loop.

## Supervisors and crash loops

Processes crash. Something must notice and restart them: a **supervisor** such as systemd on a Linux server, Kubernetes or the container runtime, or PM2 for Node apps.

Good supervisors restart with **increasing delays**. Otherwise a process that crashes right after starting (say, because of a bad config value) restarts thousands of times a minute: a **crash loop**, spamming logs and hammering whatever it connects to.

## Long polling, not busy polling

A loop that asks "any work?" every 10 ms burns CPU and floods the queue with requests. **Long polling** asks the queue to hold the request open until a job arrives or a timeout passes (the \`waitSeconds: 20\` above). The worker sleeps until there's something to do, and still reacts instantly when there is.
`,
    takeaways: [
      'A worker is a loop: receive, handle, acknowledge; one bad job must not stop it.',
      'A supervisor restarts crashed workers, with backoff to avoid crash loops.',
      'Long polling waits for work instead of asking constantly.',
    ],
    quiz: [
      {
        q: 'What should restart a background worker when it crashes?',
        options: ['A developer', 'A supervisor like systemd, PM2 or Kubernetes', 'The worker itself', 'The database'],
        answer: 1,
        why: 'A supervisor watches the process and restarts it.',
      },
      {
        q: 'A worker crashes on startup because of a bad config value. What stops it restarting thousands of times a minute?',
        options: ['Nothing', 'The supervisor\'s increasing delay between restarts', 'Long polling', 'A bigger server'],
        answer: 1,
        why: 'Restart backoff turns a crash loop into occasional retries.',
      },
      {
        q: 'Why use long polling instead of checking the queue every 10 ms?',
        options: ['It\'s more secure', 'The worker waits for work instead of burning CPU and flooding the queue', 'Queues require it', 'It keeps jobs in order'],
        answer: 1,
        why: 'The queue holds the request open until a job is available.',
      },
    ],
    inTheWild: ['systemd services, supervisord, PM2', 'Kubernetes Deployments and CrashLoopBackOff', '.NET BackgroundService, Spring @Scheduled', 'SQS long polling (WaitTimeSeconds)'],
    related: ['fg-workers-health', 'fg-graceful-shutdown'],
    cards: [
      { id: 'c-fg-bs-1', front: 'What is a crash loop and how do supervisors handle it?', back: 'A process that crashes right after starting, over and over. Supervisors restart with increasing backoff.' },
      { id: 'c-fg-bs-2', front: 'Why long poll instead of busy polling?', back: 'The queue holds the request open until work arrives, so the worker isn\'t burning CPU checking constantly.' },
    ],
  },
  {
    id: 'fg-workers-health',
    title: 'Keeping workers healthy',
    summary: 'Workers fail quietly. How to notice, how to scale them, and why they live apart from the web app.',
    ideas: ['Alive is not the same as working', 'Limit concurrency', 'Run workers apart from the web app'],
    body: `
## Alive is not the same as working

Background services have no users to complain, so problems are quiet. A worker can be **alive but stuck**: waiting forever on a call with no timeout, or spinning on one job. Its process exists, so a simple "is it running?" check passes.

- Base liveness on **progress**: "the loop completed an iteration in the last 60 seconds."
- Track **throughput** (jobs per minute), **error rate**, **processing time** and **queue lag** (how far behind the worker is).
- Add a heartbeat if nothing else observes it.

## Limit concurrency

Running more worker instances processes more work in parallel; queues share jobs between competing workers automatically. But each worker also needs a **concurrency limit**: how many jobs it handles at once.

> Without a limit, a burst of 500 jobs makes one worker open 500 database connections. The database refuses connections and every job fails.

Set the limit from what the worker's resources and its dependencies can handle, then add instances to go faster.

Some work must happen in order, or one at a time per thing (all events for one account, say). Use per-key ordering (Kafka partitions, SQS FIFO message groups) or a lock per entity.

## Run workers apart from the web app

Run workers as **separate processes** from your web servers, even if they share code:

- A CPU-heavy job can't slow down page loads.
- A crashing worker can't take the website down.
- Each can be scaled, deployed and restarted on its own.
`,
    takeaways: [
      'A running process can still be stuck; check progress, lag and throughput.',
      'Cap concurrency per worker; add instances for more throughput.',
      'Keep workers in separate processes from the web app.',
    ],
    quiz: [
      {
        q: 'A worker process is running but has processed nothing for an hour. How should you detect this?',
        options: ['Check the process exists', 'A liveness signal based on progress, plus queue lag', 'Watch CPU', 'Wait for complaints'],
        answer: 1,
        why: 'A stuck process is still alive. Only progress-based signals show it has stopped working.',
      },
      {
        q: 'A burst of jobs makes a worker open hundreds of database connections and everything fails. What was missing?',
        options: ['More workers', 'A concurrency limit per worker', 'A bigger queue', 'Long polling'],
        answer: 1,
        why: 'A limit caps how much one worker takes on at once.',
      },
      {
        q: 'Why run workers separately from the web servers?',
        options: ['It\'s cheaper', 'Heavy jobs can\'t slow page loads, and a crashing worker can\'t take the site down', 'Frameworks require it', 'Workers can\'t use the database otherwise'],
        answer: 1,
        why: 'Separation isolates failures and lets each part scale on its own.',
      },
    ],
    inTheWild: ['Sidekiq and BullMQ concurrency settings', 'Kafka consumer groups and partitions', 'Kubernetes HorizontalPodAutoscaler and KEDA (scale on queue length)'],
    related: ['fg-workers', 'fg-enqueue-safely'],
    cards: [
      { id: 'c-fg-bs-3', front: 'How do you detect a worker that is alive but stuck?', back: 'A liveness signal based on progress, such as the time of the last loop iteration, plus queue lag metrics.' },
      { id: 'c-fg-wh-1', front: 'Why set a concurrency limit per worker?', back: 'So a burst of jobs can\'t overwhelm the worker or its dependencies (e.g. database connections).' },
    ],
  },
  {
    id: 'fg-webhooks',
    title: 'Receiving webhooks securely',
    summary: 'Webhooks let other services call you. Your endpoint is public, so prove each call is genuine.',
    ideas: ['What a webhook is', 'Verify the signature', 'Reject replays'],
    body: `
## What a webhook is

A **webhook** is an HTTP request another service sends **to you** when something happens: a payment succeeded, a pull request was opened, a message arrived. Instead of you asking "anything new?" every minute, they push the event to a URL you registered.

> You register \`https://yourapp.com/webhooks/payments\` with your payment provider. When a payment succeeds, they POST the details there.

## Verify the signature

That URL is public. Anyone who finds it can send fake "payment succeeded" events. So providers **sign** each request: usually an **HMAC-SHA256** of the raw request body, computed with a secret only you and they know, sent in a header.

On every request:

1. Recompute the signature from the **raw** body bytes with your secret. (Parsing the JSON and re-serialising it can change the bytes, and the signature won't match.)
2. Compare it with the header using a **constant-time** comparison, which doesn't leak information through timing.
3. Reject anything that doesn't match with **401**.

Most providers' SDKs include a function that does this for you. Use it.

## Reject replays

A valid signed request could be captured and sent again later. Most providers include a **timestamp** in what they sign. Reject requests whose timestamp is more than a few minutes old, so a captured request can't be replayed.

For local development, providers can't reach \`localhost\`. Use the provider's CLI to forward events, or a tunnel such as ngrok or cloudflared.
`,
    takeaways: [
      'A webhook is the provider calling your URL when an event happens.',
      'Verify the HMAC signature over the raw body, with a constant-time comparison.',
      'Reject stale timestamps to stop replayed requests.',
    ],
    quiz: [
      {
        q: 'How do you check that a webhook really came from the provider?',
        options: ['Check the IP address only', 'Recompute the HMAC signature of the raw body with the shared secret and compare it', 'Look for a User-Agent header', 'Trust it if the JSON parses'],
        answer: 1,
        why: 'The signature proves the request came from someone who knows the secret.',
      },
      {
        q: 'Signature checks fail even though the secret is correct. A likely cause?',
        options: ['The provider is down', 'The signature is computed over parsed and re-serialised JSON instead of the raw body', 'The URL is too long', 'HTTPS is enabled'],
        answer: 1,
        why: 'Re-serialising can change whitespace or key order, so the bytes differ.',
      },
      {
        q: 'Why reject signed webhooks with old timestamps?',
        options: ['They\'re less important', 'To stop someone replaying a captured valid request', 'To save storage', 'Providers require it'],
        answer: 1,
        why: 'The signature alone stays valid forever; the timestamp limits how long it can be reused.',
      },
    ],
    inTheWild: ['Stripe, GitHub, Slack and Shopify webhook signatures', 'Stripe CLI and ngrok for local testing', 'Standard Webhooks specification'],
    related: ['fg-webhooks-handling', 'fg-secrets'],
    cards: [
      { id: 'c-fg-wh-1b', front: 'How do you verify a webhook is genuine?', back: 'Recompute the HMAC signature of the raw body with the shared secret, compare in constant time, and reject stale timestamps.' },
      { id: 'c-fg-whs-1', front: 'Why must webhook signatures be checked against the raw body?', back: 'Parsing and re-serialising JSON can change the bytes, so the signature wouldn\'t match.' },
    ],
  },
  {
    id: 'fg-webhooks-handling',
    title: 'Handling webhook deliveries',
    summary: 'Webhooks arrive late, twice and out of order. Handle them so none of that matters.',
    ideas: ['Acknowledge fast, work later', 'Expect duplicates', 'Expect events out of order'],
    body: `
## Acknowledge fast, work later

Providers wait only a few seconds for your response, then treat the delivery as failed and retry. So your endpoint should:

1. Verify the signature.
2. Store or enqueue the event.
3. Return **2xx** immediately.

Do the real work (updating orders, sending emails) in a **background job**.

\`\`\`js
app.post('/webhooks/payments', rawBody, async (req, res) => {
  if (!verifySignature(req.rawBody, req.headers['x-signature'], SECRET)) return res.sendStatus(401)
  const event = JSON.parse(req.rawBody)
  await jobs.enqueue('process-payment-event', { eventId: event.id })
  res.sendStatus(200)
})
\`\`\`

## Expect duplicates

Providers retry on any timeout or error, and sometimes deliver twice even when you answered. **Deduplicate on the event ID**: record each ID you process, and skip ones you've already seen. Make the handler idempotent anyway.

## Expect events out of order

> "Subscription updated" arrives before "subscription created".

Delivery order isn't guaranteed, especially once retries are involved. Options:

- Compare the event's **timestamp** or version with what you have, and ignore older ones.
- Treat the event as a **nudge** and fetch the latest state from the provider's API, rather than trusting the payload.

If you **send** webhooks yourself, the same rules apply the other way round: sign every request, include an event ID and timestamp, retry with backoff over hours or days, and give customers a delivery log with a way to replay failures.
`,
    takeaways: [
      'Verify, enqueue, return 2xx fast; process in the background.',
      'Deduplicate on the event ID.',
      'Don\'t trust arrival order; check timestamps or fetch current state.',
    ],
    quiz: [
      {
        q: 'Your webhook handler takes 30 seconds to process an event. What will likely happen?',
        options: ['Nothing', 'The provider times out and resends it, so you process it again', 'The provider waits', 'The event is lost'],
        answer: 1,
        why: 'Acknowledge fast with a 2xx, then process in a background job.',
      },
      {
        q: 'What is the simplest protection against duplicate webhook deliveries?',
        options: ['Ignore all retries', 'Record processed event IDs and skip repeats', 'Return an error the second time', 'Process them twice'],
        answer: 1,
        why: 'Every event has an ID; dedupe on it.',
      },
      {
        q: '"Subscription updated" arrives before "subscription created". What should you assume?',
        options: ['The provider is broken', 'Events can arrive out of order; check timestamps or fetch the latest state', 'Drop the first event', 'It can\'t happen again'],
        answer: 1,
        why: 'Delivery order isn\'t guaranteed, especially with retries.',
      },
    ],
    inTheWild: ['Stripe event IDs and the Events API', 'GitHub webhook redelivery', 'Svix and Hookdeck (webhook infrastructure)'],
    related: ['fg-webhooks', 'fg-idempotency-techniques', 'fg-background-jobs'],
    cards: [
      { id: 'c-fg-wh-2', front: 'Why respond to webhooks quickly?', back: 'Providers time out and retry. Store or enqueue the event, return 2xx, and process it in the background.' },
      { id: 'c-fg-whh-1', front: 'How should you handle out-of-order webhooks?', back: 'Ignore events older than what you have (by timestamp or version), or fetch the latest state from the provider.' },
    ],
  },
]
