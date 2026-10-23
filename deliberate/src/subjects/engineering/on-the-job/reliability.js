export const reliability = [
  {
    id: 'fg-health-checks',
    title: 'Health checks: liveness and readiness',
    summary: 'The endpoints that tell the platform whether your service can do its job, and what the platform does with the answer.',
    ideas: ['Liveness: restart if stuck', 'Readiness: stop traffic, keep running', 'Startup: give slow starters time'],
    body: `
A **health check** is a cheap request that another system makes to your service, over and over, to decide what to do with it. Load balancers, Kubernetes, Docker, ECS and uptime monitors all use them. Usually it's an HTTP endpoint like \`GET /healthz\` that returns **200** when healthy and **503** when not.

The checks ask three different questions, and the platform reacts differently to each.

## Liveness: restart if stuck

"Is this process stuck?" If liveness fails several times in a row, the platform **kills and restarts** the process.

Only fail it for problems a restart would actually fix: a deadlock, a frozen event loop, a corrupted in-memory state.

## Readiness: stop traffic, keep running

"Should this instance get traffic right now?" If readiness fails, the platform **stops routing requests** to it but leaves it running.

Fail readiness while the instance is warming up its caches, while it's shutting down, or when it's overloaded and needs a breather. When it passes again, traffic comes back.

## Startup: give slow starters time

"Has it finished booting?" Some apps take a minute to load data or connect to things. A **startup check** holds off the other checks until boot finishes, so a slow starter isn't restarted for being slow.

\`\`\`js
app.get('/healthz', (req, res) => res.sendStatus(200)) // liveness: can I respond at all?
app.get('/readyz', (req, res) => res.sendStatus(isReady ? 200 : 503)) // readiness
\`\`\`
`,
    takeaways: [
      'Liveness failure restarts the process; only fail it when a restart would help.',
      'Readiness failure removes the instance from traffic but keeps it running.',
      'A startup check protects slow-booting apps from being restarted too early.',
    ],
    quiz: [
      {
        q: 'Your service\'s readiness check fails. What does the platform do?',
        options: ['Restarts the process', 'Stops sending it traffic but leaves it running', 'Deletes the container image', 'Nothing until liveness fails too'],
        answer: 1,
        why: 'Readiness controls traffic. Only a failing liveness check leads to a restart.',
      },
      {
        q: 'Which problem should make a liveness check fail?',
        options: ['The database is down', 'The process\'s event loop is frozen', 'A downstream API is slow', 'Traffic is high'],
        answer: 1,
        why: 'A restart fixes a frozen process. It does nothing for a database outage except add restarts.',
      },
      {
        q: 'An app takes 90 seconds to load its data on boot and keeps getting restarted. What helps?',
        options: ['Remove all health checks', 'A startup check that holds off liveness until boot finishes', 'A deeper liveness check', 'A bigger server'],
        answer: 1,
        why: 'The startup check stops the platform judging the app before it has finished starting.',
      },
    ],
    inTheWild: ['Kubernetes livenessProbe, readinessProbe and startupProbe', 'AWS load balancer target health checks', 'Docker HEALTHCHECK'],
    related: ['fg-health-check-design', 'fg-graceful-shutdown'],
    cards: [
      { id: 'c-fg-hc-1', front: 'Liveness vs readiness check?', back: 'Liveness failure restarts the process. Readiness failure removes it from traffic but keeps it running.' },
      { id: 'c-fg-hc-3', front: 'What HTTP status should an unhealthy check return?', back: '503 Service Unavailable (200 when healthy).' },
      { id: 'c-fg-hc-4', front: 'What is a startup check for?', back: 'Holding off other checks until a slow-booting app has started, so it isn\'t restarted for being slow.' },
    ],
  },
  {
    id: 'fg-health-check-design',
    title: 'Health checks that don\'t cause outages',
    summary: 'Badly designed checks can turn a small blip into a full outage. Here\'s how to avoid it.',
    ideas: ['Shallow vs deep checks', 'Shared dependencies fail everywhere at once', 'Fast checks, several failures before acting'],
    body: `
## Shallow vs deep checks

- A **shallow** check only proves the process can answer: return 200 immediately. Use this for liveness.
- A **deep** check also tests dependencies: can we reach the database, the cache, the queue? It's tempting for readiness, but it needs care.

## Shared dependencies fail everywhere at once

The classic outage goes like this:

> Every instance's readiness check pings the shared database. The database has a five-second hiccup. **Every** instance reports not-ready at the same moment, and the load balancer has nowhere to send traffic. A five-second blip becomes a full outage, and users see errors from the load balancer instead of a slightly slow page.

Liveness checks that depend on the database are worse: the platform restarts every instance at once, they all try to reconnect together, and the database gets hammered just as it recovers.

So: **never** make liveness depend on another service, and only fail readiness for dependencies an instance truly can't work without. Often it's better to keep serving and fail only the features that need the broken dependency.

## Fast checks, several failures before acting

- Keep checks **fast and cheap**. They run every few seconds on every instance. Always give dependency calls a short timeout, such as 500 ms.
- Act only after **several consecutive failures**, not one, so a single slow response doesn't pull a healthy instance out of service.
- Don't expose sensitive details (versions, hostnames, stack traces) on public health endpoints.
`,
    takeaways: [
      'Shallow checks for liveness; use deep checks sparingly for readiness.',
      'Checks on a shared dependency fail on every instance at once.',
      'Keep checks fast with short timeouts, and require several failures before acting.',
    ],
    quiz: [
      {
        q: 'Every instance\'s readiness check pings a shared database, which has a 5-second blip. What happens?',
        options: ['Only one instance is affected', 'Every instance turns unready at once, so the load balancer has nowhere to send traffic', 'Requests queue in the database', 'Nothing'],
        answer: 1,
        why: 'A deep check on a shared dependency fails everywhere at the same moment.',
      },
      {
        q: 'Which liveness check is safest?',
        options: ['Ping the database and fail if it\'s down', 'Call two downstream services', 'Return 200 as long as the process can respond', 'Run an end-to-end test'],
        answer: 2,
        why: 'Liveness should only fail for problems a restart fixes.',
      },
      {
        q: 'Why act only after several consecutive failures?',
        options: ['To save money', 'So one slow response doesn\'t pull a healthy instance out of service', 'Platforms require it', 'To slow down deploys'],
        answer: 1,
        why: 'Single failures are often noise; acting on them causes needless churn.',
      },
    ],
    inTheWild: ['failureThreshold and timeoutSeconds in Kubernetes probes', 'Load balancer healthy and unhealthy thresholds'],
    related: ['fg-health-checks', 'fg-circuit-breakers'],
    cards: [
      { id: 'c-fg-hc-2', front: 'Why is a deep readiness check on a shared database risky?', back: 'A brief database blip makes every instance unready at once, so the load balancer has nowhere to send traffic.' },
      { id: 'c-fg-hcd-1', front: 'Should liveness depend on other services?', back: 'No. A restart won\'t fix them, and mass restarts hammer the dependency as it recovers.' },
    ],
  },
  {
    id: 'fg-heartbeats',
    title: 'Heartbeats and dead man\'s switches',
    summary: 'When nothing can ask a job whether it\'s healthy, make it check in, and alert when it goes quiet.',
    ideas: ['Pull vs push monitoring', 'The dead man\'s switch', 'Start, success and fail pings'],
    body: `
## Pull vs push monitoring

Health checks are **pull** monitoring: something asks your service "are you OK?". That works for servers, but not for things nothing can call: a nightly cron job, a worker behind a firewall, a script on someone's laptop.

**Heartbeats** flip it around to **push** monitoring. The job sends a small "I'm alive" ping on a schedule, and the monitor **alerts when the pings stop**.

## The dead man's switch

This is one of the most useful patterns you've probably never been taught:

1. Register a check with an expected interval: "every 24 hours, with a 1-hour grace period."
2. At the **end** of your job, after it succeeds, ping a URL: \`curl -fsS https://monitor.example/ping/abc123\`.
3. If no ping arrives in time, the monitor alerts you.

Why it matters: a job that **silently stops running** produces no error to alert on. The crontab got wiped, the server was replaced, the container never started. Error alerts catch jobs that fail; only a dead man's switch catches jobs that **don't run at all**.

> A nightly backup stopped running three months ago when the server was rebuilt. Nobody noticed until they needed a restore.

## Start, success and fail pings

Two useful additions:

- Ping a **start** URL when the job begins, as well as the success URL at the end. Now you can alert on jobs that start but hang, and you get run durations for free.
- Ping a **fail** URL from your error handler, so you hear about failures immediately instead of waiting for the grace period to run out.
`,
    takeaways: [
      'Pull monitoring asks; push monitoring (heartbeats) waits to be told.',
      'A dead man\'s switch alerts on silence, catching jobs that never ran.',
      'Ping on start and success to catch hangs and measure durations; ping on failure for speed.',
    ],
    quiz: [
      {
        q: 'A nightly backup job silently stopped running a month ago. Which monitoring would have caught it?',
        options: ['An alert on job errors', 'A health check endpoint', 'A dead man\'s switch expecting a ping every 24 hours', 'CPU monitoring'],
        answer: 2,
        why: 'A job that never runs produces no error. Only alerting on a missing ping catches it.',
      },
      {
        q: 'Where should the "success" heartbeat ping go?',
        options: ['At the very start', 'At the end, after the work succeeds', 'In a separate cron job', 'Anywhere'],
        answer: 1,
        why: 'Pinging at the end means the ping proves the job finished.',
      },
      {
        q: 'Why also send a ping when a job starts?',
        options: ['It\'s required', 'To detect jobs that start but hang, and to measure how long runs take', 'To make the job faster', 'To replace the success ping'],
        answer: 1,
        why: 'A start with no matching success means the job is stuck; the gap between them is the duration.',
      },
    ],
    inTheWild: ['Healthchecks.io, Cronitor, Dead Man\'s Snitch', 'Heartbeat monitors in Better Stack and Grafana OnCall'],
    related: ['fg-heartbeats-systems', 'fg-cron'],
    cards: [
      { id: 'c-fg-hb-1', front: 'Pull vs push monitoring?', back: 'Pull: the monitor asks the service (health checks). Push: the service checks in (heartbeats) and the monitor alerts on silence.' },
      { id: 'c-fg-hb-2', front: 'What failure does only a dead man\'s switch catch?', back: 'A job that silently never runs, so it produces no error to alert on.' },
    ],
  },
  {
    id: 'fg-heartbeats-systems',
    title: 'Heartbeats inside systems',
    summary: 'The same "check in or be presumed dead" idea keeps workers, clusters and connections honest.',
    ideas: ['Workers check in; silence means dead', 'Keeping connections alive', 'Choosing an interval'],
    body: `
## Workers check in; silence means dead

In systems with many workers, each one periodically records "last seen at" in a shared place (a database row, a registry like etcd or Consul). A supervisor treats any worker that hasn't checked in for a while as dead, and hands its work to someone else.

Clusters use the same idea with **leases**: the leader holds a lease it must renew every few seconds. If it stops renewing (it crashed, or the network cut it off), the lease expires and another node takes over. "Online now" dots in chat apps are the same thing: heartbeats from clients with a short expiry.

## Keeping connections alive

Proxies, load balancers and firewalls quietly drop connections they think are idle, and often neither side notices until it tries to send something and fails.

- **WebSockets** send small ping/pong frames every 20–30 seconds. The traffic keeps the connection open, and a missing pong tells you the other side is gone.
- **TCP keepalive** does the same at the network level, but its default interval is often two hours, so applications usually add their own.

## Choosing an interval

The interval sets how quickly you **detect** a failure. The number of missed beats you tolerate sets how many **false alarms** you get.

> Heartbeat every 10 seconds, declared dead after 3 missed beats: failures detected within about 30 seconds, and a single dropped packet doesn't trigger anything.

Shorter intervals detect faster but add traffic and false positives from brief network blips. Three missed beats is a common rule of thumb.
`,
    takeaways: [
      'Workers and leaders check in regularly; going quiet means presumed dead.',
      'WebSocket pings keep idle connections open and reveal dead peers.',
      'Interval sets detection speed; missed beats allowed sets false-alarm rate.',
    ],
    quiz: [
      {
        q: 'A cluster leader stops renewing its lease. What happens?',
        options: ['Nothing', 'The lease expires and another node can take over', 'The cluster shuts down', 'All data is lost'],
        answer: 1,
        why: 'Leases let the cluster replace a leader that has crashed or been cut off.',
      },
      {
        q: 'Why do apps send WebSocket ping frames every 20–30 seconds?',
        options: ['To measure bandwidth', 'Proxies drop idle connections silently; pings keep them open and detect dead peers', 'Browsers require it', 'To encrypt the connection'],
        answer: 1,
        why: 'Without traffic, intermediaries may close the connection without either side noticing.',
      },
      {
        q: 'Heartbeats every 10 s, dead after 3 missed. Roughly how long until a crash is detected?',
        options: ['10 seconds', 'About 30 seconds', '3 minutes', 'Instantly'],
        answer: 1,
        why: 'Three missed 10-second beats is about 30 seconds.',
      },
    ],
    inTheWild: ['Kubernetes node heartbeats and Lease objects', 'etcd and Consul sessions', 'WebSocket ping/pong frames', 'Sidekiq and Celery worker heartbeats'],
    related: ['fg-heartbeats', 'fg-workers'],
    cards: [
      { id: 'c-fg-hb-3', front: 'Why do WebSockets send ping/pong frames?', back: 'Proxies drop idle connections silently; regular pings keep them open and detect dead peers.' },
      { id: 'c-fg-hbs-1', front: 'What is a lease in a cluster?', back: 'A claim (e.g. leadership) that must be renewed regularly; if renewals stop, it expires and another node takes over.' },
      { id: 'c-fg-hbs-2', front: 'Heartbeat interval vs missed beats allowed?', back: 'The interval sets detection speed; the number of missed beats tolerated controls false alarms.' },
    ],
  },
  {
    id: 'fg-graceful-shutdown',
    title: 'Graceful shutdown',
    summary: 'Every deploy stops your processes. Doing it gracefully means no dropped requests and no half-finished work.',
    ideas: ['SIGTERM, then SIGKILL', 'The shutdown sequence', 'Make sure your app hears the signal'],
    body: `
Your service is stopped far more often than you might think: every deploy, every scale-down, every server replacement. If it dies mid-request, users see errors; if it dies mid-job, work is lost or done twice.

## SIGTERM, then SIGKILL

On Linux, platforms first send **SIGTERM**, a polite "please stop". After a **grace period** (30 seconds by default in Kubernetes) they send **SIGKILL**, which can't be caught or ignored and ends the process instantly. Your job is to finish up in between.

## The shutdown sequence

1. **Stop taking new work.** Fail the readiness check so the load balancer stops sending requests, and stop pulling new jobs from the queue.
2. **Wait a few seconds** for the load balancer to notice. Requests can still arrive meanwhile.
3. **Finish in-flight work**, with a deadline shorter than the grace period.
4. **Release resources**: close database connections, flush logs and metrics.
5. **Exit** with code 0.

\`\`\`js
process.on('SIGTERM', async () => {
  shuttingDown = true            // readiness now returns 503
  await sleep(5000)              // let the load balancer stop routing to us
  server.close()                 // stop accepting connections, finish open ones
  await worker.stop({ timeoutMs: 15000 })
  await db.end()
  process.exit(0)
})
\`\`\`

## Make sure your app hears the signal

In containers, the first process (PID 1) receives the signal. If your app is started by a shell (\`sh -c "node app.js"\`), the shell may get SIGTERM and not pass it on. Your app never hears it and is killed mid-request. Use the exec form (\`CMD ["node", "app.js"]\`) or a tiny init process like tini.

Jobs longer than the grace period can't finish in time. Make them **resumable** (save progress as you go) or **safe to retry**, and let the queue hand them out again.
`,
    takeaways: [
      'SIGTERM first; SIGKILL after the grace period.',
      'Stop new work, wait for the load balancer, finish in-flight work, clean up, exit.',
      'In containers, make sure the signal reaches your app; make long jobs resumable.',
    ],
    quiz: [
      {
        q: 'What happens if your process ignores SIGTERM?',
        options: ['It runs forever', 'After the grace period it gets SIGKILL and stops mid-work', 'The deploy is cancelled', 'SIGTERM is retried forever'],
        answer: 1,
        why: 'SIGKILL can\'t be caught. Anything unfinished at that point is lost or half-done.',
      },
      {
        q: 'What should a server do first when it receives SIGTERM?',
        options: ['Exit immediately', 'Close the database connection', 'Stop accepting new work, e.g. by failing readiness', 'Flush the logs'],
        answer: 2,
        why: 'Stop new work arriving first, then finish what\'s in flight, then clean up.',
      },
      {
        q: 'Your container starts the app with `sh -c "node app.js"` and it always gets killed at shutdown. A likely cause?',
        options: ['Node can\'t handle signals', 'The shell receives SIGTERM and doesn\'t forward it', 'The grace period is too long', 'The image is too large'],
        answer: 1,
        why: 'The shell is PID 1. Use the exec form or a small init like tini.',
      },
    ],
    inTheWild: ['Kubernetes terminationGracePeriodSeconds and preStop hooks', 'Node\'s server.close()', 'tini and dumb-init in Docker images'],
    related: ['fg-health-checks', 'fg-queue-delivery'],
    cards: [
      { id: 'c-fg-gs-1', front: 'SIGTERM vs SIGKILL?', back: 'SIGTERM asks the process to stop and can be handled. SIGKILL ends it immediately and cannot be caught.' },
      { id: 'c-fg-gs-2', front: 'Steps of a graceful shutdown?', back: 'Fail readiness, wait for the load balancer, finish in-flight work, release resources, exit.' },
    ],
  },
  {
    id: 'fg-timeouts',
    title: 'Timeouts and what to retry',
    summary: 'Networks fail constantly. Decide how long to wait, and which failures deserve another try.',
    ideas: ['Always set a timeout', 'Retry transient errors only', 'Only retry what\'s safe to repeat'],
    body: `
## Always set a timeout

Many HTTP clients and database drivers default to **no timeout**, or a very long one. Then one slow dependency ties up all your threads or connections, and your whole service hangs waiting for it.

Set an explicit timeout on **every** network call, based on what the caller can actually wait for. A page that must load in 2 seconds can't give one backend call 30.

## Retry transient errors only

Some failures are **transient**: they'll probably work if you try again shortly.

- Timeouts and dropped connections.
- **502**, **503** and **504** (bad gateway, unavailable, gateway timeout).
- **429** Too Many Requests, after waiting as long as the server asks.

Others are **permanent**: retrying gives the same answer. Don't retry **400** Bad Request, **401** Unauthorized, **403** Forbidden, **404** Not Found or validation errors. Fix the request instead.

## Only retry what's safe to repeat

A timeout doesn't mean the request failed. The server may have done the work and the response got lost on the way back.

> A "charge the card" request times out. Retrying it blindly might charge the customer twice.

Reading data (GET) is safe to retry. Changing data is only safe to retry if the operation is **idempotent**, meaning doing it twice has the same effect as once. The next lessons cover how to make it so.
`,
    takeaways: [
      'Give every network call an explicit timeout.',
      'Retry timeouts, 429, 502, 503 and 504; not 4xx errors like 400, 401, 403 or 404.',
      'A timeout may hide a success; only retry operations that are safe to repeat.',
    ],
    quiz: [
      {
        q: 'Which error is usually worth retrying?',
        options: ['400 Bad Request', '404 Not Found', '503 Service Unavailable', '403 Forbidden'],
        answer: 2,
        why: '503 is often temporary. The others will fail the same way every time.',
      },
      {
        q: 'Why is "no timeout" dangerous on a call to another service?',
        options: ['It uses more bandwidth', 'One slow dependency can tie up all your connections and hang your whole service', 'Timeouts are required by HTTP', 'It makes logs noisy'],
        answer: 1,
        why: 'Requests pile up waiting, and nothing else can be served.',
      },
      {
        q: 'A payment request times out. Why not just retry it?',
        options: ['Retries are slow', 'The first attempt may have succeeded, so a retry could charge twice', 'Payments can\'t time out', 'The server will reject it'],
        answer: 1,
        why: 'A timeout only means you didn\'t hear back, not that nothing happened.',
      },
    ],
    inTheWild: ['Timeout settings in fetch (AbortSignal.timeout), axios, requests and database drivers', 'AWS SDK retry modes'],
    related: ['fg-circuit-breakers', 'fg-idempotency'],
    cards: [
      { id: 'c-fg-rt-2', front: 'Which HTTP statuses are usually worth retrying?', back: 'Timeouts, 429 (after waiting), 502, 503, 504. Not 4xx errors like 400, 401, 403, 404.' },
      { id: 'c-fg-to-1', front: 'Why does every network call need a timeout?', back: 'Without one, a slow dependency ties up your threads or connections and hangs your service.' },
    ],
  },
  {
    id: 'fg-circuit-breakers',
    title: 'Backoff, jitter and circuit breakers',
    summary: 'Retrying well recovers from blips. Retrying badly turns a blip into an outage.',
    ideas: ['Exponential backoff with jitter', 'Retry at one layer', 'Circuit breakers fail fast'],
    body: `
## Exponential backoff with jitter

Retrying immediately, in a tight loop, hammers a struggling service just when it needs relief. Instead, wait longer after each attempt: 100 ms, 200 ms, 400 ms, 800 ms, up to a cap.

Then add **jitter**: a random part of the wait. Without it, a thousand clients that failed at the same moment all retry at the same moment, again and again, in synchronised waves called the **thundering herd**.

\`\`\`js
const ceiling = Math.min(capMs, baseMs * 2 ** attempt)
await sleep(Math.random() * ceiling) // "full jitter"
\`\`\`

## Retry at one layer

If the browser retries 3 times, the API retries 3 times and the service behind it retries 3 times, one user action can become **3 × 3 × 3 = 27** requests to the bottom service, exactly when it's overloaded.

Retry at **one** layer, usually the one closest to the user, or the one that knows the operation is safe to repeat. Other layers should fail fast and pass the error up.

## Circuit breakers fail fast

When a dependency is clearly down, waiting for every call to time out wastes time and resources. A **circuit breaker** wraps calls to it:

- **Closed** (normal): calls go through, failures are counted.
- **Open**: after too many recent failures, calls are rejected immediately for a cooldown period, without touching the dependency.
- **Half-open**: after the cooldown, a few test calls go through. If they succeed, it closes again; if not, it reopens.

Users get a fast error or a fallback instead of a slow timeout, and the broken service gets room to recover.
`,
    takeaways: [
      'Back off exponentially and add jitter to avoid the thundering herd.',
      'Retry at one layer only; nested retries multiply load.',
      'A circuit breaker rejects calls to a failing dependency, then tests whether it has recovered.',
    ],
    quiz: [
      {
        q: 'Why add random jitter to exponential backoff?',
        options: ['To make retries faster', 'So clients that failed together don\'t retry together in synchronised waves', 'To reduce logs', 'HTTP requires it'],
        answer: 1,
        why: 'Without jitter, many clients retry at the same instants: the thundering herd.',
      },
      {
        q: 'The browser, the API and the service behind it each retry 3 times. How many requests can one action cause at the bottom?',
        options: ['3', '9', '27', '81'],
        answer: 2,
        why: '3 × 3 × 3 = 27. Nested retries multiply load.',
      },
      {
        q: 'A circuit breaker is "open". What happens to new calls?',
        options: ['They queue until the dependency recovers', 'They\'re rejected immediately without calling the dependency', 'They\'re retried 3 times', 'They go to a backup database'],
        answer: 1,
        why: 'An open breaker fails fast, giving the dependency room to recover.',
      },
    ],
    inTheWild: ['Resilience4j (Java), Polly (.NET), opossum (Node)', 'Envoy and Istio outlier detection', 'AWS architecture guidance on backoff and jitter'],
    related: ['fg-timeouts', 'fg-rate-limit-clients'],
    cards: [
      { id: 'c-fg-rt-1', front: 'Why add jitter to backoff?', back: 'So clients that failed together don\'t retry together in synchronised waves (thundering herd).' },
      { id: 'c-fg-rt-4', front: 'Why retry at only one layer?', back: 'Retries multiply: 3 retries at each of 3 layers can turn one action into 27 requests.' },
      { id: 'c-fg-rt-3', front: 'What does a circuit breaker do?', back: 'After repeated failures it fails calls immediately for a cooldown, then tests whether the dependency recovered.' },
    ],
  },
  {
    id: 'fg-idempotency',
    title: 'Idempotency',
    summary: 'In real systems things happen twice. Idempotent operations make that harmless.',
    ideas: ['What idempotent means', 'Everything happens twice eventually', 'Idempotent HTTP methods'],
    body: `
## What idempotent means

An operation is **idempotent** if doing it twice has the same effect as doing it once.

- "Set the order status to shipped": idempotent. Run it again and the status is still shipped.
- "Add $10 to the balance": not idempotent. Run it again and the customer has $20 more.
- "Send a welcome email": not idempotent. Run it again and they get two.

## Everything happens twice eventually

In distributed systems, duplicates aren't rare edge cases. They're normal:

- A client retries after a timeout, but the first request had actually succeeded.
- A queue hands a message to a second worker because the first crashed before confirming it.
- A webhook provider resends an event it thinks you didn't receive.
- A user double-clicks the submit button.

Most queues and webhook systems promise **at-least-once delivery**: you'll get every message, possibly more than once. Guaranteeing "exactly once" across a network is very hard, so the practical answer is **at-least-once delivery plus idempotent handlers**.

## Idempotent HTTP methods

HTTP defines which methods should be idempotent:

- **GET**, **PUT** and **DELETE** should be idempotent. Getting a page twice changes nothing; putting the same value twice leaves the same value; deleting twice leaves it deleted.
- **POST** is not. Two POSTs to "create an order" create two orders.

That's why browsers, proxies and client libraries feel free to retry GETs but not POSTs, and why POST endpoints that create things benefit most from the techniques in the next lesson.
`,
    takeaways: [
      'Idempotent: doing it twice has the same effect as once.',
      'Duplicates are normal; design handlers for at-least-once delivery.',
      'GET, PUT and DELETE should be idempotent; POST is not.',
    ],
    quiz: [
      {
        q: 'Which operation is idempotent?',
        options: ['Add $10 to the balance', 'Send a welcome email', 'Set the order status to "shipped"', 'Append a row to a log'],
        answer: 2,
        why: 'Setting a value to the same thing twice has the same effect as once.',
      },
      {
        q: 'A queue promises "at-least-once" delivery. What must your handler tolerate?',
        options: ['Messages arriving twice', 'Messages never arriving', 'Encrypted messages', 'Nothing special'],
        answer: 0,
        why: 'At-least-once means duplicates are possible.',
      },
      {
        q: 'Which HTTP method is not expected to be idempotent?',
        options: ['GET', 'PUT', 'DELETE', 'POST'],
        answer: 3,
        why: 'Each POST to a "create" endpoint usually creates something new.',
      },
    ],
    inTheWild: ['SQS, RabbitMQ and Kafka at-least-once delivery', 'HTTP semantics (RFC 9110)'],
    related: ['fg-idempotency-techniques', 'fg-timeouts'],
    cards: [
      { id: 'c-fg-id-1', front: 'What makes an operation idempotent?', back: 'Doing it twice has the same effect as doing it once.' },
      { id: 'c-fg-id-3', front: 'Why is "exactly once" delivery rarely relied on?', back: 'It\'s very hard across networks. The practical approach is at-least-once delivery plus idempotent handlers.' },
    ],
  },
  {
    id: 'fg-idempotency-techniques',
    title: 'Making operations idempotent',
    summary: 'Three practical ways to make a repeated request or message harmless.',
    ideas: ['Idempotency keys', 'Let the database reject duplicates', 'Absolute and conditional updates'],
    body: `
## Idempotency keys

The client generates a unique key for each **logical** operation (not each attempt) and sends it with the request, often in an \`Idempotency-Key\` header. The server stores the key with the result. If the same key arrives again, the server returns the stored result instead of doing the work again.

> A checkout page creates key \`k_83f2\` when the user clicks Pay. The request times out and the client retries with the same key. The server sees \`k_83f2\` already succeeded and returns the original receipt. One charge.

Payment APIs like Stripe work this way.

## Let the database reject duplicates

The database can enforce "only once" for you:

- A **unique constraint** on \`payments(order_id)\` makes a second insert fail instead of creating a second payment.
- A **processed-events table** records each message or event ID you've handled. Check it, and record new IDs, in the same transaction as the work.

\`\`\`js
await db.transaction(async (tx) => {
  const isNew = await tx.insertIgnoreDuplicate('processed_events', { id: event.id })
  if (!isNew) return // seen it before
  await tx.update('orders', { id: event.orderId }, { status: 'paid' })
})
\`\`\`

## Absolute and conditional updates

- Prefer **absolute** updates: \`SET status = 'paid'\` is safe to repeat; \`SET balance = balance + 10\` is not. When you need an increment, combine it with a processed-ID check.
- Use **conditional** updates that only succeed from the expected state: \`UPDATE orders SET status = 'shipped' WHERE id = ? AND status = 'packed'\`. The second attempt matches no rows and changes nothing.
`,
    takeaways: [
      'An idempotency key lets the server spot a retry and return the stored result.',
      'Unique constraints and processed-ID tables make the database refuse duplicates.',
      'Use absolute values and state-checked updates instead of blind increments.',
    ],
    quiz: [
      {
        q: 'A payment POST times out and the client retries. What prevents a double charge?',
        options: ['A longer timeout', 'An idempotency key, so the server returns the stored result for a repeated key', 'Retrying faster', 'Using GET'],
        answer: 1,
        why: 'The key lets the server recognise the retry and skip the work.',
      },
      {
        q: 'Which update is safe to run twice?',
        options: ['SET balance = balance + 10', "SET status = 'paid'", 'INSERT a new payment row', 'Send an email'],
        answer: 1,
        why: 'Setting an absolute value has the same effect however many times it runs.',
      },
      {
        q: 'How should a client generate idempotency keys?',
        options: ['A new key for every attempt', 'One key per logical operation, reused for its retries', 'The same key for every request', 'From the current time in seconds'],
        answer: 1,
        why: 'Retries must carry the same key, or the server can\'t tell they\'re repeats.',
      },
    ],
    inTheWild: ['Stripe\'s Idempotency-Key header', 'Database unique indexes and upserts (INSERT ... ON CONFLICT)', 'The outbox and inbox patterns'],
    related: ['fg-idempotency', 'fg-webhooks-handling'],
    cards: [
      { id: 'c-fg-id-2', front: 'What is an idempotency key?', back: 'A client-generated ID per logical operation; the server stores the result and returns it for repeats instead of redoing the work.' },
      { id: 'c-fg-idt-1', front: 'Two database tools for idempotency?', back: 'Unique constraints (reject duplicate rows) and a processed-events table checked in the same transaction.' },
      { id: 'c-fg-idt-2', front: 'What is a conditional update?', back: 'An update that only applies from an expected state (WHERE status = \'packed\'), so a repeat changes nothing.' },
    ],
  },
]
