// Field Guide: practical, on-the-job topics that rarely appear in a CS curriculum.
// Articles are read rather than quizzed; marking one as read adds its cards to the review deck.
export const guideSections = [
  {
    id: 'reliability',
    title: 'Keeping services alive',
    blurb: 'How production systems know they are healthy, survive failures and shut down cleanly.',
  },
  {
    id: 'background',
    title: 'Background work',
    blurb: 'Everything that runs outside the request: jobs, queues, schedules and long-running workers.',
  },
  {
    id: 'observability',
    title: 'Knowing what is happening',
    blurb: 'Logs, metrics, traces and alerts: how you find out something is wrong before users tell you.',
  },
  {
    id: 'shipping',
    title: 'Shipping changes safely',
    blurb: 'Config, feature flags, migrations and deploys: getting code to production without drama.',
  },
  {
    id: 'apis',
    title: 'APIs and data in practice',
    blurb: 'The details every real API has to get right: limits, paging and time.',
  },
]

export const articles = [
  {
    id: 'fg-health-checks',
    section: 'reliability',
    title: 'Health checks',
    minutes: 7,
    summary: 'An endpoint that tells the platform whether your service can do its job, and what the platform does with the answer.',
    body: `
A **health check** is a cheap request that some other system makes to your service, over and over, to decide whether to keep sending it traffic. Load balancers, Kubernetes, Docker, ECS and uptime monitors all use them. Usually it is an HTTP endpoint like \`GET /healthz\` that returns **200** when healthy and **503** when not.

## Three different questions

Kubernetes made these distinctions popular, but they apply everywhere:

- **Liveness**: "Is this process stuck?" If it fails repeatedly, the platform **kills and restarts** the process. Only fail it for problems a restart would fix, such as a deadlock or a wedged event loop.
- **Readiness**: "Should this instance get traffic right now?" If it fails, the platform **stops routing requests** to it but leaves it running. Fail it while warming caches, during shutdown, or when the instance is overloaded.
- **Startup**: "Has it finished booting?" Holds off the other checks so a slow-starting app isn't killed for being slow.

## Shallow vs deep checks

- A **shallow** check only proves the process can answer: return 200 straight away. Use this for liveness.
- A **deep** check also tests dependencies: can we reach the database, the cache, the queue? It's tempting for readiness, but be careful.

The classic outage: every instance's readiness check pings the database. The database has a brief hiccup, **every instance** reports not-ready at once, and the load balancer has nowhere to send traffic. A small blip becomes a full outage. Only fail readiness for dependencies the instance truly can't work without, and consider failing just the affected features instead.

## A typical endpoint

\`\`\`js
let shuttingDown = false

app.get('/healthz', (req, res) => res.sendStatus(200)) // liveness: am I alive?

app.get('/readyz', async (req, res) => {
  if (shuttingDown) return res.sendStatus(503)
  const dbOk = await db.ping({ timeoutMs: 500 }).then(() => true, () => false)
  res.status(dbOk ? 200 : 503).json({ db: dbOk })
})
\`\`\`

## Practical rules

- Keep checks **fast and cheap**. They run every few seconds on every instance. Always use a short timeout.
- Don't require authentication on them, but don't expose sensitive details (versions, hostnames, stack traces) to the public internet either.
- Tune the thresholds: fail after **several** consecutive failures, not one, so a single slow response doesn't restart a healthy instance.
- Never make liveness depend on another service. If the database is down, restarting your app won't fix it; it only adds a restart storm.
`,
    takeaways: [
      'Liveness failure restarts the process; readiness failure only stops traffic.',
      'Keep liveness shallow: only fail it when a restart would actually help.',
      'Deep readiness checks on shared dependencies can turn a blip into an outage.',
      'Fast, cheap, short timeouts, and several failures before acting.',
    ],
    inTheWild: ['Kubernetes livenessProbe / readinessProbe / startupProbe', 'AWS ALB target group health checks', 'Docker HEALTHCHECK', 'Uptime monitors like Pingdom or UptimeRobot'],
    related: ['fg-heartbeats', 'fg-graceful-shutdown', 'fg-deployments'],
    cards: [
      { id: 'c-fg-hc-1', front: 'Liveness vs readiness check?', back: 'Liveness failure restarts the process. Readiness failure removes it from traffic but keeps it running.' },
      { id: 'c-fg-hc-2', front: 'Why is a deep readiness check on the database risky?', back: 'A brief database blip makes every instance unready at once, so the load balancer has nowhere to send traffic.' },
      { id: 'c-fg-hc-3', front: 'What HTTP status should an unhealthy check return?', back: '503 Service Unavailable (200 when healthy).' },
    ],
  },
  {
    id: 'fg-heartbeats',
    section: 'reliability',
    title: 'Heartbeats and background pings',
    minutes: 6,
    summary: 'When the thing you need to monitor can\'t be asked, make it check in instead, and alert on silence.',
    body: `
Health checks are **pull** monitoring: something asks your service "are you OK?". That works for servers, but not for things nobody can call: a nightly cron job, a worker behind a firewall, a script on a laptop, a phone app.

A **heartbeat** flips it to **push** monitoring. The job sends a small "I'm alive" ping on a schedule, and the monitor **alerts when pings stop arriving**.

## Dead man's switch

This is the most useful pattern you've probably never been taught:

1. Register a check with an expected interval, e.g. "every 24 hours, with a 1 hour grace period".
2. At the **end** of your job, after it succeeds, send a ping: \`curl -fsS https://monitor.example/ping/abc123\`.
3. If no ping arrives in time, the monitor alerts you.

Why it matters: a job that **silently stops running** produces no error to alert on. The crontab got wiped, the server was replaced, the container never started. Error alerts catch jobs that fail; only a dead man's switch catches jobs that **don't run at all**.

Good variations:

- Ping a **start** URL when the job begins and a **success** URL when it ends. Now you can alert on jobs that start but hang, and you get run durations for free.
- Ping a **fail** URL from your error handler so you hear about failures immediately instead of waiting for the grace period.

## Heartbeats inside systems

The same idea appears everywhere under different names:

- **Workers** periodically write "last seen at" to a database or registry. A supervisor treats a worker that hasn't checked in for N intervals as dead and reassigns its work.
- **Leader election and clusters** (etcd, ZooKeeper, Consul) use heartbeats with **leases**: if the leader stops renewing its lease, another node takes over.
- **WebSockets** send ping/pong frames every 20–30 seconds. Without them, proxies and load balancers silently drop connections they think are idle, and neither side notices until it tries to send.
- **TCP keepalive** does the same at the network level, but its defaults are often hours, so applications usually add their own.
- **Presence** ("online now" dots) is just heartbeats from clients with a short expiry.

## Choosing intervals

The interval sets how fast you **detect** a failure; the number of missed beats you tolerate sets how many **false alarms** you get. A common rule: declare something dead after **3 missed heartbeats**. Faster detection means more traffic and more false positives from brief network blips.
`,
    takeaways: [
      'Pull monitoring asks; push monitoring (heartbeats) waits to be told.',
      'A dead man\'s switch alerts on silence, catching jobs that never ran.',
      'Ping on start and on success to detect hangs and measure durations.',
      'Declare failure after several missed beats, not one.',
    ],
    inTheWild: ['Healthchecks.io, Cronitor, Dead Man\'s Snitch', 'WebSocket ping/pong frames', 'Kubernetes node heartbeats and leases', 'etcd / Consul sessions'],
    related: ['fg-scheduled-tasks', 'fg-health-checks', 'fg-alerting'],
    cards: [
      { id: 'c-fg-hb-1', front: 'Pull vs push monitoring?', back: 'Pull: the monitor asks the service (health checks). Push: the service checks in (heartbeats) and the monitor alerts on silence.' },
      { id: 'c-fg-hb-2', front: 'What failure does only a dead man\'s switch catch?', back: 'A job that silently never runs, so it produces no error to alert on.' },
      { id: 'c-fg-hb-3', front: 'Why do WebSockets send ping/pong frames?', back: 'Proxies drop idle connections silently; regular pings keep them open and detect dead peers.' },
    ],
  },
  {
    id: 'fg-graceful-shutdown',
    section: 'reliability',
    title: 'Graceful shutdown',
    minutes: 6,
    summary: 'Every deploy stops your processes. Doing it gracefully means no dropped requests and no half-finished jobs.',
    body: `
Your service is stopped far more often than you think: every deploy, every autoscaling event, every node replacement. If it dies mid-request, users see errors; if it dies mid-job, work is lost or done twice.

## How processes are stopped

On Linux, platforms first send **SIGTERM**, a polite "please stop". After a **grace period** (30 seconds by default in Kubernetes) they send **SIGKILL**, which can't be caught or ignored. Your job is to finish up between the two.

## The shutdown sequence

1. **Stop accepting new work.** Fail the readiness check so the load balancer stops sending requests. Stop pulling new jobs from the queue.
2. **Wait briefly** for the load balancer to notice (a few seconds). Requests can still arrive during this window.
3. **Finish in-flight work.** Let current requests and jobs complete, with a deadline shorter than the grace period.
4. **Release resources.** Close database connections, flush logs and metrics, commit queue offsets.
5. **Exit** with code 0.

\`\`\`js
process.on('SIGTERM', async () => {
  shuttingDown = true // readiness now returns 503
  await sleep(5000) // let the load balancer stop routing to us
  server.close() // stop accepting connections, finish open ones
  await worker.stop({ timeoutMs: 15000 }) // finish the current job, take no more
  await db.end()
  process.exit(0)
})
\`\`\`

## Common traps

- **PID 1 in containers.** If your app runs under a shell script (\`sh -c "node app.js"\`), the shell may receive SIGTERM and not forward it. Your app never hears it and gets SIGKILLed. Use the exec form (\`CMD ["node", "app.js"]\`) or a tiny init like tini.
- **Long jobs.** A 10-minute job can't finish in a 30-second grace period. Make long jobs **resumable** (checkpoint progress) or **safe to retry** (idempotent), and let the queue redeliver them.
- **Keep-alive connections.** Clients may hold connections open; servers need to close idle ones during shutdown or they keep the process alive until it's killed.
`,
    takeaways: [
      'SIGTERM first, SIGKILL after the grace period.',
      'Stop new work, wait for the load balancer, finish in-flight work, clean up, exit.',
      'In containers, make sure your app actually receives the signal.',
      'Long jobs should be resumable or safe to retry.',
    ],
    inTheWild: ['Kubernetes terminationGracePeriodSeconds and preStop hooks', 'Node\'s server.close()', 'tini / dumb-init in Docker images'],
    related: ['fg-health-checks', 'fg-background-jobs', 'fg-deployments'],
    cards: [
      { id: 'c-fg-gs-1', front: 'SIGTERM vs SIGKILL?', back: 'SIGTERM asks the process to stop and can be handled. SIGKILL ends it immediately and cannot be caught.' },
      { id: 'c-fg-gs-2', front: 'Steps of a graceful shutdown?', back: 'Fail readiness, wait for the load balancer, finish in-flight work, release resources, exit.' },
    ],
  },
  {
    id: 'fg-retries',
    section: 'reliability',
    title: 'Timeouts, retries and backoff',
    minutes: 8,
    summary: 'Networks fail constantly. Retrying well recovers from it; retrying badly turns a blip into an outage.',
    body: `
Every network call can be slow or fail. Three tools handle this: **timeouts** stop you waiting forever, **retries** recover from brief failures, and **backoff** stops retries from making things worse.

## Always set a timeout

Many HTTP clients and database drivers default to **no timeout** or a very long one. One slow dependency then ties up all your threads or connections, and your whole service hangs. Set an explicit timeout on every outbound call, based on what the caller can actually wait for.

## Retry only what's safe and worth it

Retry **transient** failures: timeouts, connection resets, 502, 503, 504, and 429 (after waiting). Don't retry errors that will fail the same way again: 400, 401, 403, 404, validation errors.

And only retry operations that are **safe to repeat**. A GET is fine. A "charge the card" POST that timed out may have succeeded on the server; retrying it could charge twice. See the idempotency article.

## Exponential backoff with jitter

Retrying immediately, in a tight loop, hammers a struggling service just when it needs relief. Instead, wait longer after each attempt: 100 ms, 200 ms, 400 ms, 800 ms…

Then add **jitter** (randomness). Without it, a thousand clients that failed at the same moment all retry at the same moment, again and again, in synchronised waves (the **thundering herd**).

\`\`\`js
async function withRetry(fn, { attempts = 5, baseMs = 100, capMs = 5000 } = {}) {
  for (let i = 0; ; i++) {
    try {
      return await fn()
    } catch (err) {
      if (i >= attempts - 1 || !isTransient(err)) throw err
      const ceiling = Math.min(capMs, baseMs * 2 ** i)
      await sleep(Math.random() * ceiling) // "full jitter"
    }
  }
}
\`\`\`

## Don't multiply retries

If the browser retries 3 times, the API retries 3 times and the service behind it retries 3 times, one user action can become **27** requests to the bottom service, right when it's overloaded. Retry at **one layer**, usually the one closest to the user or the one that knows the operation is safe.

## Circuit breakers

When a dependency is clearly down, keep failing fast instead of waiting for timeouts. A **circuit breaker** counts recent failures; past a threshold it "opens" and rejects calls immediately for a cooldown period, then lets a few test calls through to see if the dependency has recovered.
`,
    takeaways: [
      'Set an explicit timeout on every network call.',
      'Retry transient errors only, and only safe-to-repeat operations.',
      'Exponential backoff plus jitter avoids the thundering herd.',
      'Retry at one layer; nested retries multiply load.',
    ],
    inTheWild: ['AWS SDK retry modes', 'gRPC retry policies', 'Resilience4j, Polly, opossum (circuit breakers)', 'Retry-After headers'],
    related: ['fg-idempotency', 'fg-rate-limiting', 'fg-background-jobs'],
    cards: [
      { id: 'c-fg-rt-1', front: 'Why add jitter to backoff?', back: 'So clients that failed together don\'t retry together in synchronised waves (thundering herd).' },
      { id: 'c-fg-rt-2', front: 'Which HTTP statuses are usually worth retrying?', back: 'Timeouts, 429 (after waiting), 502, 503, 504. Not 4xx errors like 400, 401, 403, 404.' },
      { id: 'c-fg-rt-3', front: 'What does a circuit breaker do?', back: 'After repeated failures it fails calls immediately for a cooldown, then tests whether the dependency recovered.' },
      { id: 'c-fg-rt-4', front: 'Why retry at only one layer?', back: 'Retries multiply: 3 retries at each of 3 layers can turn one action into 27 requests.' },
    ],
  },
  {
    id: 'fg-idempotency',
    section: 'reliability',
    title: 'Idempotency',
    minutes: 6,
    summary: 'Design operations so that doing them twice has the same effect as doing them once.',
    body: `
An operation is **idempotent** if running it twice has the same effect as running it once. "Set status to shipped" is idempotent. "Add $10 to the balance" is not.

This matters because in real systems **things happen twice**. A client retries after a timeout, but the first request actually succeeded. A queue delivers a message again because the worker crashed before acknowledging it. A webhook is resent. A user double-clicks.

Most queues and webhook providers promise **at-least-once** delivery: you'll get every message, possibly more than once. "Exactly once" is very hard to guarantee across a network, so the practical answer is **at-least-once delivery plus idempotent handlers**.

## Techniques

- **Idempotency keys.** The client generates a unique key per logical operation and sends it with the request (for example in an \`Idempotency-Key\` header). The server stores the key with the result; if it sees the same key again, it returns the stored result instead of doing the work again. Payment APIs work this way.
- **Unique constraints.** Let the database reject duplicates: a unique index on \`(order_id)\` in the payments table means a second insert fails instead of creating a second payment.
- **Record what you've processed.** Store processed message or event IDs and skip ones you've seen.
- **Use absolute updates, not relative ones.** \`SET status = 'paid'\` is safe to repeat; \`SET balance = balance + 10\` is not. When you need increments, combine them with a processed-ID check in the same transaction.
- **Conditional updates.** \`UPDATE orders SET status = 'shipped' WHERE id = ? AND status = 'packed'\` only succeeds once.

\`\`\`js
async function handlePaymentEvent(event) {
  await db.transaction(async (tx) => {
    const inserted = await tx.insertIgnoreDuplicate('processed_events', { id: event.id })
    if (!inserted) return // seen it before: do nothing
    await tx.update('orders', { id: event.orderId }, { status: 'paid' })
  })
}
\`\`\`

## HTTP methods

By definition GET, PUT and DELETE should be idempotent; POST is not. That's why clients and proxies feel free to retry GETs but not POSTs, and why POST endpoints that create things benefit most from idempotency keys.
`,
    takeaways: [
      'Idempotent: doing it twice has the same effect as once.',
      'Queues and webhooks are at-least-once, so handlers must tolerate duplicates.',
      'Idempotency keys, unique constraints and processed-ID tables prevent double effects.',
      'Prefer absolute updates over increments.',
    ],
    inTheWild: ['Stripe\'s Idempotency-Key header', 'SQS / Kafka at-least-once delivery', 'Database unique indexes and upserts'],
    related: ['fg-retries', 'fg-webhooks', 'fg-background-jobs'],
    cards: [
      { id: 'c-fg-id-1', front: 'What makes an operation idempotent?', back: 'Doing it twice has the same effect as doing it once.' },
      { id: 'c-fg-id-2', front: 'What is an idempotency key?', back: 'A client-generated ID per logical operation; the server stores the result and returns it for repeats instead of redoing the work.' },
      { id: 'c-fg-id-3', front: 'Why is "exactly once" delivery rarely relied on?', back: 'It\'s very hard across networks. The practical approach is at-least-once delivery plus idempotent handlers.' },
    ],
  },
  {
    id: 'fg-background-jobs',
    section: 'background',
    title: 'Background jobs and queues',
    minutes: 8,
    summary: 'Move slow or unreliable work out of the request so users get a fast response and the work still gets done.',
    body: `
Some work shouldn't happen while a user waits: sending email, generating a PDF, resizing images, calling a slow third-party API, recalculating reports. A **background job** puts that work on a **queue**; separate **worker** processes pick jobs up and do them.

\`\`\`text
web request ──► enqueue job ──► respond "202 Accepted" immediately
                    │
                  queue (Redis, SQS, RabbitMQ, a DB table…)
                    │
                worker(s) ──► do the work, retry on failure
\`\`\`

## Why it's worth it

- **Fast responses.** The request finishes in milliseconds instead of seconds.
- **Reliability.** If the email provider is down, the job retries later instead of the signup failing.
- **Smoothing spikes.** A burst of 10,000 uploads queues up; workers process them at a steady pace.
- **Independent scaling.** Add workers when the queue grows, without touching the web servers.

## How delivery actually works

Most queues hand a job to a worker and **hide** it for a while (a "visibility timeout" or "lease"). If the worker **acknowledges** it, it's deleted. If the worker crashes or the timeout passes, the job becomes visible again and another worker gets it.

Consequences you must design for:

- Jobs can run **more than once**, so make them **idempotent**.
- If a job takes longer than its visibility timeout, it gets handed to a second worker while the first is still working. Set the timeout above your slowest job, or extend the lease while working.
- Jobs can run **out of order**. Don't assume job B runs after job A unless the queue guarantees ordering.

## Failures and the dead-letter queue

Retry failed jobs with backoff, but cap the attempts. After the last attempt, move the job to a **dead-letter queue** (DLQ) instead of retrying forever. A poison message that always fails would otherwise clog the workers. Then alert on DLQ size and give yourself a way to inspect and replay those jobs.

## Practical tips

- Put **IDs** in the job payload, not whole objects. Load fresh data when the job runs; the object may have changed since it was queued.
- Enqueue jobs **after the database transaction commits**. Otherwise a worker can pick up a job for a row that doesn't exist yet (or never will, if the transaction rolls back). The **outbox pattern** solves this robustly: write the job into an outbox table in the same transaction, and have a relay move it to the queue.
- Monitor **queue depth** and **job age**. A growing queue or old jobs mean workers can't keep up.
`,
    takeaways: [
      'Queue slow or unreliable work; respond to the user immediately.',
      'Jobs can run more than once and out of order: make them idempotent.',
      'Cap retries and send failures to a dead-letter queue.',
      'Enqueue after commit (or use an outbox) and pass IDs, not objects.',
    ],
    inTheWild: ['Sidekiq (Ruby), Celery (Python), BullMQ (Node), Hangfire (.NET)', 'AWS SQS, RabbitMQ, Google Pub/Sub, Kafka', 'Postgres-based queues like pg-boss or Oban'],
    related: ['fg-idempotency', 'fg-scheduled-tasks', 'fg-background-services'],
    cards: [
      { id: 'c-fg-bj-1', front: 'What is a visibility timeout (lease)?', back: 'How long a delivered job stays hidden; if it isn\'t acknowledged in time, it\'s redelivered to another worker.' },
      { id: 'c-fg-bj-2', front: 'What is a dead-letter queue?', back: 'Where jobs go after exhausting their retries, so poison messages don\'t block the queue and can be inspected later.' },
      { id: 'c-fg-bj-3', front: 'Why enqueue a job after the transaction commits?', back: 'Otherwise a worker may run before the data exists, or for data that gets rolled back. The outbox pattern makes this robust.' },
      { id: 'c-fg-bj-4', front: 'Two queue metrics worth alerting on?', back: 'Queue depth (backlog size) and age of the oldest job.' },
    ],
  },
  {
    id: 'fg-scheduled-tasks',
    section: 'background',
    title: 'Scheduled tasks and cron',
    minutes: 8,
    summary: 'Run work on a timetable, and avoid the overlap, time zone and missed-run bugs that come with it.',
    body: `
Scheduled tasks run on a timetable rather than in response to a request: nightly reports, cleaning up expired sessions, sending reminder emails, syncing with a partner's API, renewing certificates.

## Cron syntax

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
30 8 * * 1-5    weekdays at 08:30
0 0 1 * *       midnight on the 1st of each month
\`\`\`

Sites like crontab.guru translate expressions into plain English. Use them; cron typos are easy to make and hard to notice.

## The problems you will meet

- **Overlapping runs.** A job scheduled every 5 minutes that sometimes takes 7 will start a second copy while the first is still running. Use a **lock** (a database advisory lock, a Redis key with an expiry, or the scheduler's "forbid concurrent" option) so a run skips or waits if the previous one is still going.
- **Many servers, many copies.** Put a crontab on each of three web servers and the job runs three times. Run schedules from **one place** (a dedicated scheduler, a Kubernetes CronJob, a cloud scheduler) or take a lock so only one instance does the work.
- **Time zones and daylight saving.** A job at 02:30 local time will be **skipped** on the night clocks go forward and may **run twice** when they go back. Schedule in **UTC** unless the business rule is truly local ("9 a.m. in the customer's time zone"), and then test the DST transitions.
- **Missed runs.** If the machine was down at 02:00, does the job run when it comes back, or wait until tomorrow? Different schedulers behave differently. Decide which you want and check the setting.
- **Silent failure.** Cron jobs fail quietly: output goes nowhere, and a job that stops running produces no error at all. Log every run, alert on failures, and use a heartbeat (dead man's switch) to catch jobs that never run.

## Make jobs catch up, not just repeat

A robust pattern is to make the job **process everything due since the last success**, instead of "today's batch". Store a high-water mark (the last processed timestamp or ID). Then a missed run, a double run or a manual re-run all do the right thing.

\`\`\`js
async function sendDueReminders(now = new Date()) {
  const due = await db.reminders.findAll({ dueAt: { lte: now }, sentAt: null })
  for (const r of due) {
    await mailer.send(r)
    await db.reminders.update(r.id, { sentAt: now }) // never sent twice
  }
}
\`\`\`

## Cron vs a queue

A schedule decides **when** work starts; a queue handles **doing** it reliably. For big jobs, the scheduled task often just **enqueues** many small jobs and lets workers process them with retries.
`,
    takeaways: [
      'Five cron fields: minute, hour, day of month, month, day of week.',
      'Guard against overlapping runs and duplicate schedulers with a lock.',
      'Schedule in UTC; local times break around daylight saving changes.',
      'Process everything due since the last success, and monitor with a heartbeat.',
    ],
    inTheWild: ['crontab and systemd timers', 'Kubernetes CronJob (concurrencyPolicy: Forbid)', 'AWS EventBridge Scheduler, Google Cloud Scheduler', 'Sidekiq-cron, Celery beat, node-cron'],
    related: ['fg-heartbeats', 'fg-background-jobs', 'fg-time'],
    cards: [
      { id: 'c-fg-cr-1', front: 'What does `0 2 * * *` mean?', back: 'Every day at 02:00.' },
      { id: 'c-fg-cr-2', front: 'What does `*/15 * * * *` mean?', back: 'Every 15 minutes.' },
      { id: 'c-fg-cr-3', front: 'How do you stop a scheduled job overlapping itself?', back: 'Take a lock (DB advisory lock, Redis key with expiry) or set the scheduler to forbid concurrent runs.' },
      { id: 'c-fg-cr-4', front: 'Why schedule jobs in UTC?', back: 'Local times can be skipped or repeated when daylight saving starts or ends.' },
    ],
  },
  {
    id: 'fg-background-services',
    section: 'background',
    title: 'Background services and workers',
    minutes: 7,
    summary: 'Long-running processes with no user in front of them: how they\'re run, supervised and kept healthy.',
    body: `
A **background service** (also called a daemon, worker or consumer) is a process that runs continuously without serving user requests directly. Queue workers, event consumers, schedulers, file watchers and sync processes are all background services.

## The shape of a worker

Almost every worker is the same loop:

\`\`\`js
async function main() {
  while (!shuttingDown) {
    const job = await queue.receive({ waitSeconds: 20 }) // long poll: wait for work
    if (!job) continue
    try {
      await handle(job)
      await queue.ack(job)
    } catch (err) {
      log.error({ err, jobId: job.id }, 'job failed')
      await queue.retryLater(job)
    }
  }
}
\`\`\`

What makes it production-ready is everything around that loop.

## Something must restart it

Processes crash. A **supervisor** watches the process and restarts it: systemd on a Linux server, the container runtime or Kubernetes in containers, PM2 for Node apps. Restart with a **backoff** so a process that crashes on startup doesn't restart thousands of times a minute ("crash loop").

## It needs its own health signals

Background services have no requests to fail, so problems are quieter:

- A worker can be **alive but stuck**, waiting forever on a call with no timeout. Expose a liveness signal that depends on the loop making progress (for example "last loop iteration within 60 seconds").
- Track **throughput** (jobs per minute), **error rate**, **queue lag** (how far behind it is) and **processing time**.
- Send a periodic heartbeat if nothing else can observe it.

## Scaling and concurrency

- Run more instances to process more work in parallel. Queues share jobs between competing consumers automatically.
- Some work must happen in order or on one instance at a time (for example, all events for one account). Use partitions or keys (Kafka partitions, SQS FIFO message groups) or a lock per entity.
- Limit **concurrency** per worker so it doesn't open more database connections or memory than it can handle.

## Long polling vs busy polling

A loop that checks "any work?" every 10 ms burns CPU and hammers the queue. **Long polling** asks the queue to hold the request open until work arrives (or a timeout passes), so the worker sleeps until there is something to do.

## Separate it from the web app

Run workers as **separate processes** from your web server, even if they share code. A CPU-heavy job then can't slow down user requests, a crashing worker can't take the website down, and you can scale each one independently.
`,
    takeaways: [
      'A background service is a supervised loop: receive, handle, acknowledge.',
      'Something must restart it, with backoff to avoid crash loops.',
      'Detect "alive but stuck" with progress-based liveness and lag metrics.',
      'Run workers separately from the web app and limit their concurrency.',
    ],
    inTheWild: ['systemd services, supervisord, PM2', 'Kubernetes Deployments for workers', '.NET BackgroundService / IHostedService, Spring @Scheduled', 'Kafka consumer groups'],
    related: ['fg-background-jobs', 'fg-graceful-shutdown', 'fg-observability'],
    cards: [
      { id: 'c-fg-bs-1', front: 'What is a crash loop and how do supervisors handle it?', back: 'A process that crashes right after starting, over and over. Supervisors restart with increasing backoff.' },
      { id: 'c-fg-bs-2', front: 'Why long poll instead of busy polling?', back: 'The queue holds the request open until work arrives, so the worker isn\'t burning CPU checking every few milliseconds.' },
      { id: 'c-fg-bs-3', front: 'How do you detect a worker that is alive but stuck?', back: 'A liveness signal based on progress, such as the time of the last loop iteration, plus queue lag metrics.' },
    ],
  },
  {
    id: 'fg-webhooks',
    section: 'background',
    title: 'Webhooks',
    minutes: 6,
    summary: 'How other services call you when something happens, and how to receive those calls safely.',
    body: `
A **webhook** is an HTTP request that another service sends **to you** when an event happens: a payment succeeded, a pull request was opened, a message arrived. Instead of you polling "anything new?" every minute, they push the event to a URL you registered.

## Receiving webhooks well

1. **Verify the signature.** Your endpoint is a public URL anyone can call. Providers sign each request, usually an **HMAC-SHA256** of the raw body using a shared secret, sent in a header. Recompute it, compare in constant time, and reject mismatches. Verify against the **raw** body bytes: parsing and re-serialising the JSON changes them.
2. **Reject old requests.** Most signatures include a timestamp. Reject requests older than a few minutes so a captured request can't be replayed later.
3. **Respond fast.** Providers time out after a few seconds and retry. Validate, store or enqueue the event, return **2xx** immediately, and do the real work in a background job.
4. **Expect duplicates and retries.** Providers retry on any failure or timeout, so you will get the same event more than once. Deduplicate on the event ID.
5. **Expect out-of-order events.** "Subscription updated" can arrive before "subscription created". Check timestamps or fetch the latest state from the provider's API instead of trusting the event payload blindly.

\`\`\`js
app.post('/webhooks/payments', rawBody, async (req, res) => {
  if (!verifySignature(req.rawBody, req.headers['x-signature'], SECRET)) return res.sendStatus(401)
  const event = JSON.parse(req.rawBody)
  await jobs.enqueue('process-payment-event', { eventId: event.id }) // idempotent handler
  res.sendStatus(200)
})
\`\`\`

## Sending webhooks

If your product sends webhooks, the same rules apply in reverse: sign every request, retry with exponential backoff over hours or days, include an event ID and timestamp, show customers a delivery log, and let them replay failed deliveries.

## Developing locally

Providers can't reach \`localhost\`. Use the provider's CLI to forward events, or a tunnelling tool (ngrok, cloudflared) to expose your local server temporarily.
`,
    takeaways: [
      'Verify the HMAC signature against the raw body; reject stale timestamps.',
      'Acknowledge fast and process in a background job.',
      'Deduplicate by event ID: providers retry.',
      'Don\'t assume events arrive in order.',
    ],
    inTheWild: ['Stripe, GitHub, Slack and Shopify webhooks', 'Stripe CLI / ngrok for local testing', 'Svix and Hookdeck (webhook infrastructure)'],
    related: ['fg-idempotency', 'fg-background-jobs', 'fg-retries'],
    cards: [
      { id: 'c-fg-wh-1', front: 'How do you verify a webhook is genuine?', back: 'Recompute the HMAC signature of the raw body with the shared secret and compare it in constant time; also reject stale timestamps.' },
      { id: 'c-fg-wh-2', front: 'Why respond to webhooks quickly?', back: 'Providers time out and retry. Store or enqueue the event, return 2xx, and process it in the background.' },
    ],
  },
  {
    id: 'fg-observability',
    section: 'observability',
    title: 'Logs, metrics and traces',
    minutes: 9,
    summary: 'The three ways to see inside a running system, and what each one is good for.',
    body: `
Once code is in production you can't attach a debugger. **Observability** is your ability to answer "what is happening and why?" from the outside. It rests on three kinds of data.

## Logs: what happened

Logs are records of individual events. Make them useful:

- **Structured**, as JSON with fields, not free text. \`{"level":"error","msg":"payment failed","orderId":"o_42","provider":"stripe","ms":3012}\` can be searched and filtered; \`"Error!!! payment broke for o_42"\` can't.
- **Levels** with meaning: **error** (something failed and needs attention), **warn** (unexpected but handled), **info** (key business events), **debug** (detail, usually off in production).
- A **request or correlation ID** on every line, passed between services, so you can pull every log line for one request across the whole system.
- **Never log secrets or personal data**: passwords, tokens, full card numbers. Scrub them before they leave the process.

## Metrics: how much and how fast

Metrics are numbers aggregated over time: request rate, error rate, latency, queue depth, CPU. They're cheap to store, great for dashboards and alerts, and show trends that individual logs hide.

Two checklists for what to measure:

- **RED** for services: **R**ate (requests per second), **E**rrors (failed requests), **D**uration (latency, as percentiles).
- **USE** for resources: **U**tilisation, **S**aturation (queued work), **E**rrors.

Measure latency as **percentiles** (p50, p95, p99), never just averages. And watch **cardinality**: a label like \`userId\` on a metric creates a separate series per user and can blow up your metrics bill. Put high-cardinality details in logs and traces instead.

## Traces: where the time went

A **distributed trace** follows one request through every service it touches, as a tree of timed **spans**: API gateway 220 ms → orders service 180 ms → database query 150 ms. When a request is slow, the trace shows exactly which hop is responsible. Tracing works by passing a trace ID in headers between services (the W3C \`traceparent\` header).

## How they fit together

A typical investigation: a **metric** alert fires (error rate up), a **trace** of a failing request shows which service is failing, and that service's **logs**, filtered by the trace ID, show the actual error. Link them with shared IDs so you can jump from one to the next.
`,
    takeaways: [
      'Logs: structured JSON, meaningful levels, a correlation ID, no secrets.',
      'Metrics: RED for services, USE for resources, latency as percentiles.',
      'Traces show which hop in a request was slow or failing.',
      'Connect all three with shared request and trace IDs.',
    ],
    inTheWild: ['OpenTelemetry (the standard for all three)', 'Prometheus + Grafana, Datadog, New Relic, Honeycomb', 'Loki, Elasticsearch / OpenSearch for logs', 'Jaeger, Tempo for traces'],
    related: ['fg-alerting', 'fg-background-services', 'fg-health-checks'],
    cards: [
      { id: 'c-fg-ob-1', front: 'What are RED metrics?', back: 'Rate, Errors, Duration: the core metrics for a request-serving service.' },
      { id: 'c-fg-ob-2', front: 'Why use structured (JSON) logs?', back: 'Fields can be searched, filtered and aggregated; free text can\'t, reliably.' },
      { id: 'c-fg-ob-3', front: 'What is a correlation (request) ID?', back: 'An ID attached to every log line for one request and passed between services, so you can follow it end to end.' },
      { id: 'c-fg-ob-4', front: 'What is metric cardinality and why does it matter?', back: 'The number of unique label combinations. High-cardinality labels like userId create huge numbers of series and cost.' },
    ],
  },
  {
    id: 'fg-alerting',
    section: 'observability',
    title: 'Alerting, on-call and incidents',
    minutes: 8,
    summary: 'Alert on what users feel, respond calmly when things break, and learn from every incident.',
    body: `
## Alert on symptoms, not causes

Every alert that wakes someone up should mean **users are affected, or soon will be**, and that a human needs to act. Good alerts watch **symptoms**: error rate above 2% for 5 minutes, p99 latency above 2 seconds, checkout success rate down, queue age over 30 minutes.

Alerts on **causes** (CPU at 85%, one pod restarted) are mostly noise. High CPU that users don't notice isn't an emergency. Put causes on dashboards to help diagnose, not on pagers.

**Alert fatigue** is the real enemy. If an alert fires often and people ignore it, they will also ignore it the one time it matters. Delete or fix noisy alerts ruthlessly. Every page should be actionable, and ideally link to a **runbook** saying what to check first.

## SLOs make it concrete

A **service level objective** sets a target, for example "99.9% of requests succeed over 30 days". That leaves an **error budget** of 0.1% (about 43 minutes of full downtime a month). Alert when you're burning the budget too fast, and use the remaining budget to decide whether it's safe to ship risky changes.

## During an incident

1. **Acknowledge** the alert so others know someone is on it.
2. **Assess impact**: who is affected and how badly?
3. **Communicate early**: open an incident channel, name an **incident lead**, post status updates on a regular rhythm.
4. **Mitigate first, fix later.** Roll back the deploy, turn off the feature flag, fail over, scale up. Stop the bleeding; find the root cause afterwards.
5. **Keep a timeline** of what you saw and tried. You'll need it later.

## After an incident: blameless post-mortems

Write up what happened, the impact, the timeline, the contributing causes and the follow-up actions. Make it **blameless**: assume everyone acted reasonably with the information they had, and ask how the **system** allowed the failure. "Why was it possible to deploy a broken config to all regions at once?" leads to fixes. "Who pushed the bad config?" leads to people hiding mistakes.

## On-call habits

- Hand over between shifts with notes on anything ongoing.
- Fix or delete every alert that paged you without needing action.
- Treat a heavy on-call week as a signal to invest in reliability, not as normal.
`,
    takeaways: [
      'Page on user-facing symptoms; put causes on dashboards.',
      'Noisy alerts get ignored. Make every page actionable, with a runbook.',
      'SLOs and error budgets turn reliability into a concrete target.',
      'Mitigate first, then run a blameless post-mortem.',
    ],
    inTheWild: ['PagerDuty, Opsgenie, incident.io', 'Grafana / Prometheus Alertmanager, Datadog monitors', 'Google SRE book (free online)', 'Status pages (Statuspage, Instatus)'],
    related: ['fg-observability', 'fg-heartbeats', 'fg-deployments'],
    cards: [
      { id: 'c-fg-al-1', front: 'Symptom vs cause alerts?', back: 'Symptom alerts (error rate, latency) reflect user impact and should page. Cause alerts (CPU, restarts) belong on dashboards.' },
      { id: 'c-fg-al-2', front: 'What is an error budget?', back: 'The failure allowed by an SLO, e.g. 0.1% for 99.9% (about 43 minutes a month). Used to balance reliability and shipping speed.' },
      { id: 'c-fg-al-3', front: 'First priority in an incident?', back: 'Mitigate (roll back, disable the flag, fail over). Root cause comes after users are safe.' },
    ],
  },
  {
    id: 'fg-config-secrets',
    section: 'shipping',
    title: 'Configuration, environment variables and secrets',
    minutes: 6,
    summary: 'Keep what changes between environments out of the code, and keep secrets out of everything.',
    body: `
The same code runs on your laptop, in CI, in staging and in production. What differs is **configuration**: database URLs, API keys, feature settings, log levels.

## Config in the environment

The widely followed **twelve-factor app** guidance says: store config in **environment variables**, not in code. Then one build artifact can be promoted from staging to production unchanged, with only the environment differing.

- Read config **once at startup**, validate it, and **fail fast** with a clear message if something required is missing. Crashing on boot is far better than failing on the first request at 3 a.m.
- Give each setting **one** source of truth and sensible defaults for local development.
- Keep a \`.env.example\` in the repo that lists every variable with a dummy value; keep the real \`.env\` out of git.

\`\`\`js
const config = {
  port: Number(process.env.PORT ?? 3000),
  databaseUrl: required('DATABASE_URL'),
  stripeKey: required('STRIPE_SECRET_KEY'),
}

function required(name) {
  const value = process.env[name]
  if (!value) throw new Error(\`Missing required environment variable \${name}\`)
  return value
}
\`\`\`

## Secrets are special

API keys, database passwords and signing keys need more care than ordinary config:

- **Never commit them.** Not even "temporarily". Git history is forever, and bots scan public repos for keys within minutes. Use pre-commit scanners and GitHub secret scanning.
- **If one leaks, rotate it.** Deleting the commit isn't enough; assume it's been copied.
- Store them in a **secret manager** (AWS Secrets Manager, GCP Secret Manager, Vault, your platform's encrypted variables) and inject them at runtime.
- Give each environment and service its **own** credentials with the **least privilege** it needs, so a leak in staging can't touch production.
- Keep them out of logs, error messages and client-side code. Anything in a frontend bundle is public.

## Frontend "env vars" are not secret

Variables like \`VITE_API_URL\` or \`NEXT_PUBLIC_*\` are baked into the JavaScript that users download. Only put public values there. Anything secret must stay on a server.
`,
    takeaways: [
      'Config lives in the environment; one build runs everywhere.',
      'Validate config at startup and fail fast.',
      'Never commit secrets; rotate any that leak.',
      'Frontend environment variables are public.',
    ],
    inTheWild: ['The Twelve-Factor App (12factor.net)', 'dotenv, direnv', 'AWS Secrets Manager, HashiCorp Vault, Doppler, 1Password CLI', 'GitHub Actions secrets and secret scanning'],
    related: ['fg-feature-flags', 'fg-deployments'],
    cards: [
      { id: 'c-fg-cf-1', front: 'Why validate config at startup?', back: 'A missing setting fails immediately with a clear message, instead of breaking the first request in production.' },
      { id: 'c-fg-cf-2', front: 'Are frontend environment variables secret?', back: 'No. They are compiled into the bundle users download, so only public values belong there.' },
    ],
  },
  {
    id: 'fg-feature-flags',
    section: 'shipping',
    title: 'Feature flags',
    minutes: 6,
    summary: 'Separate deploying code from releasing features, so you can ship continuously and turn things off instantly.',
    body: `
A **feature flag** is a runtime switch around new behaviour:

\`\`\`js
if (flags.isEnabled('new-checkout', { userId: user.id })) {
  return renderNewCheckout()
}
return renderOldCheckout()
\`\`\`

The key idea: **deploying** code and **releasing** a feature become separate steps. You can merge and deploy unfinished work, hidden behind a flag, and release it later with a switch instead of a deploy.

## What they enable

- **Trunk-based development.** Merge small changes to main daily instead of maintaining long-lived feature branches.
- **Gradual rollout.** Turn a feature on for staff, then 1% of users, then 10%, then everyone, watching errors and metrics at each step.
- **Kill switches.** If the new feature misbehaves, turn it off in seconds. No emergency deploy, no rollback.
- **Experiments.** Show variants to different users and compare results (A/B tests).
- **Targeting.** Enable features per customer, plan or region.

## Kinds of flags

- **Release flags**: temporary, removed once the feature is fully rolled out.
- **Operational flags / kill switches**: long-lived, for turning off expensive or risky functionality under load.
- **Permission or entitlement flags**: long-lived, for features tied to plans or customers.

## The cost: flag debt

Every flag doubles the paths through that code. Old flags pile up, nobody remembers whether \`enable_v2_pricing\` is still needed, and tests cover only one side. Habits that keep flags healthy:

- Give every release flag an **owner** and an **expiry date**, and remove it (and the old code path) once it's at 100%.
- Keep flag checks at the **edges** (a route or component), not scattered through deep logic.
- Make sure the "off" path still works and is tested. It's your rollback.
- Make percentage rollouts **sticky**: hash the user ID so the same user consistently gets the same experience.
`,
    takeaways: [
      'Flags separate deploying code from releasing features.',
      'Use them for gradual rollouts, kill switches and experiments.',
      'Release flags are temporary: give them an owner and remove them.',
      'Keep rollouts sticky per user and test the "off" path.',
    ],
    inTheWild: ['LaunchDarkly, Unleash, Flagsmith, GrowthBook', 'OpenFeature (vendor-neutral standard)', 'Simple DB- or config-backed flags in-house'],
    related: ['fg-deployments', 'fg-config-secrets', 'fg-migrations'],
    cards: [
      { id: 'c-fg-ff-1', front: 'What is the main benefit of feature flags?', back: 'They separate deploying code from releasing a feature, enabling gradual rollouts and instant kill switches.' },
      { id: 'c-fg-ff-2', front: 'What is flag debt?', back: 'Old flags that were never removed, multiplying code paths and confusion. Give release flags owners and expiry dates.' },
    ],
  },
  {
    id: 'fg-migrations',
    section: 'shipping',
    title: 'Database migrations without downtime',
    minutes: 8,
    summary: 'Change a schema while old and new versions of your code are both running against it.',
    body: `
A **migration** is a versioned script that changes the database schema: add a table, add a column, create an index. Migration tools record which scripts have run, so every environment ends up with the same schema, applied in the same order.

## The core problem

During a deploy, **old and new code run at the same time**. Some servers have the new version, some still have the old one. Any schema change must work with **both**. Rename a column in one step and every old server starts failing the moment the migration runs.

## Expand and contract

The safe way to make a breaking change is in several deploys:

1. **Expand**: add the new thing alongside the old one. For a rename, add the new column \`full_name\`, leaving \`name\` in place.
2. **Write to both**: deploy code that writes both columns and still reads the old one.
3. **Backfill**: copy existing data into the new column, in batches.
4. **Switch reads**: deploy code that reads from the new column.
5. **Contract**: once nothing uses the old column, deploy code that stops writing it, then drop it in a later migration.

It's slower than one big change, but every step is safe to run while traffic flows and easy to roll back.

## Changes that lock tables

On large tables, some operations lock the table and block every read or write for minutes:

- Creating an index normally blocks writes. In PostgreSQL use \`CREATE INDEX CONCURRENTLY\`.
- Adding a column with a default, or changing a column's type, can rewrite the whole table on some databases and versions. Check your database's documentation first.
- Big **backfills** in one \`UPDATE\` hold locks and bloat logs. Update in batches of a few thousand rows, with short pauses.

Set a **lock timeout** on migrations so a migration waiting on a lock fails quickly instead of queueing every other query behind it.

## Habits

- Never edit a migration that has already run in a shared environment; add a new one.
- Keep schema migrations and large data backfills separate.
- Test migrations against a copy of production-sized data before running them for real.
- Decide how you'd roll back **before** you run it. Dropping a column is not reversible: the data is gone.
`,
    takeaways: [
      'Old and new code run together during deploys; the schema must suit both.',
      'Expand, migrate data, switch, then contract, across several deploys.',
      'Beware operations that lock large tables; index concurrently, backfill in batches.',
      'Never edit applied migrations; plan the rollback first.',
    ],
    inTheWild: ['Flyway, Liquibase, Alembic, Prisma Migrate, Rails / Django migrations', 'gh-ost and pt-online-schema-change for MySQL', 'strong_migrations (Rails) and squawk (Postgres linting)'],
    related: ['fg-deployments', 'fg-feature-flags'],
    cards: [
      { id: 'c-fg-mg-1', front: 'Why can\'t you rename a column in one step during a live deploy?', back: 'Old code still running expects the old name and starts failing the moment the migration runs.' },
      { id: 'c-fg-mg-2', front: 'The expand-and-contract steps?', back: 'Add the new column, write to both, backfill, switch reads, stop writing the old one, then drop it.' },
      { id: 'c-fg-mg-3', front: 'How do you add an index in Postgres without blocking writes?', back: 'CREATE INDEX CONCURRENTLY.' },
    ],
  },
  {
    id: 'fg-deployments',
    section: 'shipping',
    title: 'Deployments and rollbacks',
    minutes: 7,
    summary: 'Rolling, blue-green and canary releases, and why being able to undo quickly matters most.',
    body: `
Most incidents start with a change. A good deployment process makes changes **small, gradual and quick to undo**.

## Common strategies

- **Rolling**: replace instances a few at a time. Old and new versions serve traffic together for a while. This is the default in Kubernetes and most platforms. Cheap, but rollback means rolling everything back again.
- **Blue-green**: run the new version ("green") next to the current one ("blue"), test it, then switch all traffic over at once. Rollback is instant: switch back. Costs double the capacity during the deploy.
- **Canary**: send a small share of traffic (1%, then 10%, then 50%) to the new version, compare its error rate and latency with the old version, and continue only if it looks healthy. Catches problems while they affect few users. Can be automated so a bad canary rolls itself back.

Feature flags complement all of these: deploy the code dark, then release the feature gradually.

## Rollbacks

- Know how to roll back **before** you need to, and practise it. In an incident you want one command or button, not a debate.
- Rollbacks must be compatible with the **database**. If a deploy included a migration that dropped a column, rolling back the code won't bring the column back. This is why migrations use expand and contract.
- "Roll forward" (deploy a fix) is sometimes better, but only once you understand the problem. Under pressure, roll back first.

## Habits of teams that deploy calmly

- **Deploy small and often.** A deploy with one change is easy to reason about and easy to undo. A deploy with fifty is neither.
- **Automate it.** The same pipeline every time: build, test, deploy to staging, deploy to production. No hand-run steps.
- **Build once, promote the same artifact.** The image tested in staging is byte-for-byte the one that goes to production.
- **Watch after deploying.** Have dashboards showing errors and latency by version, and keep an eye on them for a few minutes.
- **Be cautious with timing.** Avoid large deploys right before you leave, or when nobody is around to respond.
`,
    takeaways: [
      'Rolling is the cheap default; blue-green gives instant rollback; canary limits blast radius.',
      'Practise rollbacks before you need them.',
      'Code rollbacks don\'t undo destructive migrations.',
      'Small, frequent, automated deploys of a single promoted artifact.',
    ],
    inTheWild: ['Kubernetes rolling updates, Argo Rollouts, Flagger', 'AWS CodeDeploy, ECS blue/green', 'GitHub Actions / GitLab CI pipelines', 'Vercel / Netlify instant rollbacks'],
    related: ['fg-migrations', 'fg-feature-flags', 'fg-graceful-shutdown'],
    cards: [
      { id: 'c-fg-dp-1', front: 'Rolling vs blue-green vs canary?', back: 'Rolling: replace instances gradually. Blue-green: switch all traffic to a parallel environment. Canary: send a small share first and expand if healthy.' },
      { id: 'c-fg-dp-2', front: 'Why "build once, promote the same artifact"?', back: 'What runs in production is exactly what was tested in staging; nothing differs but configuration.' },
    ],
  },
  {
    id: 'fg-rate-limiting',
    section: 'apis',
    title: 'Rate limiting',
    minutes: 6,
    summary: 'Cap how much any one client can ask for, to protect your service and keep it fair.',
    body: `
**Rate limiting** caps how many requests a client can make in a period, for example 100 requests per minute per API key. It protects your service from overload (accidental or malicious), keeps one heavy user from slowing down everyone else, and controls cost.

## Common algorithms

- **Fixed window**: count requests per calendar minute and reset at :00. Simple, but a client can send a full allowance at 12:00:59 and another at 12:01:00, double the intended rate.
- **Sliding window**: count requests over the last 60 seconds at every moment. Smoother and fairer, slightly more work.
- **Token bucket**: a bucket holds up to N tokens and refills at a steady rate; each request spends one. It allows short **bursts** up to N while enforcing an average rate. This is the most common choice in practice.

Limits are usually counted in a shared store like **Redis** so all your servers agree, keyed by API key, user ID or IP address.

## Responding to limited clients

Return **429 Too Many Requests**, and tell clients how to behave:

\`\`\`text
HTTP/1.1 429 Too Many Requests
Retry-After: 30
RateLimit-Limit: 100
RateLimit-Remaining: 0
\`\`\`

## Calling rate-limited APIs

Most third-party APIs you'll use are rate-limited. Be a good client:

- Read the limit headers and slow down **before** you hit the limit.
- On a 429, wait for \`Retry-After\` (or back off with jitter) instead of retrying immediately.
- Batch requests where the API allows it, and cache responses you'll ask for again.
- For bulk work, push it through a queue with a fixed worker concurrency so you stay under the limit.

## Related tools

- **Quotas** limit totals over longer periods (10,000 calls per month per plan).
- **Concurrency limits** cap requests in flight at once rather than per second.
- **Load shedding**: when overloaded, reject low-priority work early so high-priority work still succeeds.
`,
    takeaways: [
      'Rate limits protect capacity and fairness.',
      'Token bucket allows bursts while enforcing an average rate.',
      'Return 429 with Retry-After; count in a shared store like Redis.',
      'As a client, honour limits, back off and batch.',
    ],
    inTheWild: ['API gateways (Kong, AWS API Gateway, Cloudflare)', 'nginx limit_req', 'Redis-based limiters', 'GitHub and Stripe API rate limit headers'],
    related: ['fg-retries', 'fg-background-jobs'],
    cards: [
      { id: 'c-fg-rl-1', front: 'How does a token bucket rate limiter work?', back: 'A bucket of up to N tokens refills at a steady rate; each request spends a token. Allows bursts, enforces an average.' },
      { id: 'c-fg-rl-2', front: 'Status code and header for a rate-limited request?', back: '429 Too Many Requests, with Retry-After saying how long to wait.' },
    ],
  },
  {
    id: 'fg-pagination',
    section: 'apis',
    title: 'Pagination',
    minutes: 5,
    summary: 'Return large lists in pages, and why cursors beat page numbers at scale.',
    body: `
Any list that can grow (orders, messages, users, logs) must be returned in **pages**. Returning everything works in development with 20 rows and falls over in production with 2 million.

## Offset pagination

\`\`\`sql
SELECT * FROM orders ORDER BY created_at DESC LIMIT 20 OFFSET 40;  -- page 3
\`\`\`

Easy to build, and supports "jump to page 7". Two problems:

- **It gets slow.** \`OFFSET 1000000\` makes the database read and throw away a million rows.
- **It skips and repeats items.** If a new order arrives while someone is on page 1, everything shifts down by one. Page 2 then repeats the last item of page 1. Deletions make items get skipped.

## Cursor (keyset) pagination

Instead of "skip 40 rows", say "give me the rows **after** the last one I saw":

\`\`\`sql
SELECT * FROM orders
WHERE (created_at, id) < ('2026-10-01T12:00:00Z', 'o_981')
ORDER BY created_at DESC, id DESC
LIMIT 20;
\`\`\`

The API returns an opaque **cursor** encoding that last position, and the client sends it back for the next page:

\`\`\`json
{ "data": [ ... ], "nextCursor": "eyJjIjoiMjAyNi0xMC0wMSIsImlkIjoib185ODEifQ" }
\`\`\`

- Fast at any depth, with an index on the sort columns.
- Stable while data changes: no duplicates or skips.
- Can't jump to an arbitrary page number, which infinite scroll and feeds don't need anyway.

Always include a **unique tiebreaker** (like \`id\`) in the sort, or rows with the same timestamp can be skipped or repeated across pages.

## API habits

- Set a default page size and a **maximum** (for example 100), so nobody can request a million rows.
- Make cursors **opaque** (base64-encode them) so clients don't depend on their format.
- Return whether more results exist, rather than making clients guess.
`,
    takeaways: [
      'Every growing list needs pagination with a maximum page size.',
      'Offset pagination slows down at depth and skips or repeats on changes.',
      'Cursor pagination is fast and stable; it needs a unique tiebreaker.',
      'Return opaque cursors and a "has more" signal.',
    ],
    inTheWild: ['Stripe (starting_after), Slack and GitHub GraphQL APIs use cursors', 'Relay-style GraphQL connections', 'Infinite-scroll feeds'],
    related: ['fg-rate-limiting', 'fg-time'],
    cards: [
      { id: 'c-fg-pg-1', front: 'Two problems with offset pagination?', back: 'Large offsets are slow, and inserts or deletes between requests cause skipped or repeated items.' },
      { id: 'c-fg-pg-2', front: 'Why add a unique tiebreaker to cursor pagination?', back: 'Rows with identical sort values could otherwise be skipped or repeated between pages.' },
    ],
  },
  {
    id: 'fg-time',
    section: 'apis',
    title: 'Dates, times and time zones',
    minutes: 7,
    summary: 'Store instants in UTC, convert at the edges, and respect the difference between a moment and a calendar date.',
    body: `
Time is one of the most reliable sources of bugs in software. A few rules prevent most of them.

## Store instants in UTC

For **moments in time** (when an order was placed, when a token expires), store **UTC** in a proper timestamp type (\`timestamptz\` in Postgres) and convert to the user's local time only when **displaying** it. Servers, databases and logs should all agree on UTC.

When sending times over an API, use **ISO 8601** with an explicit offset: \`2026-10-23T14:30:00Z\` or \`2026-10-23T22:30:00+08:00\`. Never send \`"10/11/12"\`, which means different dates in different countries.

## Not everything is an instant

- A **calendar date** (a birthday, a holiday, an invoice due date) is not a moment. Store it as a date (\`2026-10-23\`), not a midnight timestamp. Storing a birthday as midnight UTC shows it on the wrong day for users west of London.
- A **future local event** ("the meeting is at 9:00 in New York on 3 March") should be stored as the local time **plus the time zone name** (\`America/New_York\`), not converted to UTC now. Time zone rules change; governments adjust daylight saving with little notice, and the UTC moment may move.

## Time zones are names, not offsets

\`+08:00\` is an offset at one moment. \`Asia/Singapore\` and \`America/New_York\` are **zones**, with rules for daylight saving and history. Store the zone name for users and locations; derive offsets when you need them.

## Daylight saving traps

- Some local times **don't exist** (clocks jump from 02:00 to 03:00) and some happen **twice** (01:30 occurs twice when clocks go back).
- A "day" isn't always 24 hours. Adding 24 hours and adding "1 day" give different answers across a DST change.
- Scheduled jobs in local time can be skipped or run twice on those nights.

## Practical habits

- Use a proper date library or the platform's modern API (\`Temporal\` in JavaScript, \`java.time\`, Python's \`zoneinfo\`) instead of hand-written arithmetic.
- Measure **durations** with a monotonic clock (\`performance.now()\`), not wall-clock time, which can jump when the system clock is corrected.
- Pass "now" into functions instead of reading the clock inside them, so time-dependent logic can be tested.
- Test with users in time zones far from yours, and around DST changes and month ends.
`,
    takeaways: [
      'Store instants in UTC; convert to local time only for display.',
      'Calendar dates and future local events are not instants. Store them differently.',
      'Store time zone names, not offsets.',
      'Use real date libraries, monotonic clocks for durations, and injectable "now".',
    ],
    inTheWild: ['ISO 8601 / RFC 3339', 'The IANA time zone database (tzdata)', 'JavaScript Temporal, date-fns-tz, Luxon', 'Postgres timestamptz'],
    related: ['fg-scheduled-tasks', 'fg-pagination'],
    cards: [
      { id: 'c-fg-tm-1', front: 'How should you store a moment in time?', back: 'As UTC in a proper timestamp type, converting to local time only for display.' },
      { id: 'c-fg-tm-2', front: 'Why not store a birthday as a midnight UTC timestamp?', back: 'It\'s a calendar date, not a moment; converted to local time it can show on the wrong day.' },
      { id: 'c-fg-tm-3', front: 'Offset vs time zone?', back: 'An offset (+08:00) is fixed at one moment. A zone (Asia/Singapore) has rules, including daylight saving and history.' },
      { id: 'c-fg-tm-4', front: 'Which clock measures durations?', back: 'A monotonic clock (e.g. performance.now()), since wall-clock time can jump.' },
    ],
  },
]

export const articleById = Object.fromEntries(articles.map((a) => [a.id, a]))
