export const observability = [
  {
    id: 'fg-logs',
    title: 'Logs that help',
    summary: 'Once code is in production you can\'t attach a debugger. Logs are what you\'ll have, so make them useful.',
    ideas: ['Structured logs', 'Levels that mean something', 'A request ID on every line, and no secrets'],
    body: `
**Observability** is being able to answer "what is happening, and why?" from the outside. It rests on three kinds of data: logs, metrics and traces. Logs come first: records of individual events.

## Structured logs

Write logs as **structured** data (usually JSON with named fields), not free text:

\`\`\`text
{"level":"error","msg":"payment failed","orderId":"o_42","provider":"stripe","ms":3012}
\`\`\`

instead of \`"Error!!! payment broke for o_42"\`. Structured logs can be searched and filtered ("all payment failures from Stripe slower than 2 seconds") and counted. Free text can only be grepped and hoped over.

## Levels that mean something

- **error**: something failed and needs attention.
- **warn**: unexpected, but handled.
- **info**: key business events (an order placed, a user signed up).
- **debug**: detail for development, usually off in production.

If everything is logged as an error, nothing is. Keep error for things someone should look at.

## A request ID on every line, and no secrets

Give each incoming request an ID, put it on **every** log line produced while handling it, and pass it to other services in a header. Then you can pull every line for one request across the whole system, even when thousands are interleaved.

And **never log secrets or personal data**: passwords, tokens, full card numbers, private messages. Logs are copied to many places and kept for a long time. Redact before writing.
`,
    takeaways: [
      'Log structured JSON with fields, not free text.',
      'Use levels consistently; keep error for things that need attention.',
      'Attach a request ID to every line and pass it on; never log secrets.',
    ],
    quiz: [
      {
        q: 'Which log line is most useful in production?',
        options: [
          '"Error!!! something broke"',
          '{"level":"error","msg":"payment failed","orderId":"o_42","requestId":"r_9"}',
          '"payment failed for o_42"',
          'A full dump of the request including the card number',
        ],
        answer: 1,
        why: 'Structured fields can be searched, the request ID links related lines, and it holds no secrets.',
      },
      {
        q: 'What is a correlation (request) ID for?',
        options: ['Encrypting logs', 'Finding every log line for one request across services', 'Counting users', 'Rotating log files'],
        answer: 1,
        why: 'It ties together everything that happened for a single request.',
      },
      {
        q: 'Which should never appear in logs?',
        options: ['Order IDs', 'Response times', 'Users\' passwords and API tokens', 'Error messages'],
        answer: 2,
        why: 'Logs are widely copied and kept for a long time; secrets in them leak.',
      },
    ],
    inTheWild: ['pino and winston (Node), structlog (Python), Serilog (.NET)', 'Loki, Elasticsearch/OpenSearch, Datadog Logs', 'The W3C traceparent header'],
    related: ['fg-metrics', 'fg-traces'],
    cards: [
      { id: 'c-fg-ob-2', front: 'Why use structured (JSON) logs?', back: 'Fields can be searched, filtered and aggregated; free text can\'t, reliably.' },
      { id: 'c-fg-ob-3', front: 'What is a correlation (request) ID?', back: 'An ID attached to every log line for one request and passed between services, so you can follow it end to end.' },
    ],
  },
  {
    id: 'fg-metrics',
    title: 'Metrics',
    summary: 'Numbers over time: cheap to keep, great for dashboards and alerts, and easy to get subtly wrong.',
    ideas: ['RED and USE: what to measure', 'Percentiles, not averages', 'Watch cardinality'],
    body: `
**Metrics** are numbers aggregated over time: requests per second, error rate, latency, queue depth, memory used. Where logs describe single events, metrics show trends that individual events hide.

## RED and USE: what to measure

Two checklists cover most needs:

- **RED**, for anything that serves requests: **R**ate (requests per second), **E**rrors (failed requests), **D**uration (how long they take).
- **USE**, for resources like CPU, memory, disks and connection pools: **U**tilisation (how busy), **S**aturation (how much work is queued waiting), **E**rrors.

> A dashboard with RED for each service and USE for its database answers most "is something wrong?" questions at a glance.

## Percentiles, not averages

Measure latency as **percentiles**:

- **p50** (median): half of requests are faster than this.
- **p95**, **p99**: 95% or 99% are faster; the rest are the slow tail.

An average of 100 ms can hide a p99 of 5 seconds. One user in a hundred waiting 5 seconds on every page is a real problem that the average never shows.

## Watch cardinality

Metrics are stored once per unique combination of **labels**. A label like \`status\` with 5 values is cheap. A label like \`userId\` creates a separate series for every user, and can multiply your storage and bill by millions. That's called high **cardinality**.

Keep metric labels to small, fixed sets (endpoint, status code, region). Put high-cardinality details like user or order IDs in logs and traces instead.
`,
    takeaways: [
      'RED (rate, errors, duration) for services; USE (utilisation, saturation, errors) for resources.',
      'Measure latency with p50, p95 and p99, not averages.',
      'Keep labels to small fixed sets; IDs belong in logs and traces.',
    ],
    quiz: [
      {
        q: 'What are the RED metrics for a service?',
        options: ['Requests, Errors, Disk', 'Rate, Errors, Duration', 'Reads, Edits, Deletes', 'Retries, Exceptions, Downtime'],
        answer: 1,
        why: 'Request rate, error rate and latency describe how a service is doing for its callers.',
      },
      {
        q: 'Average latency is 80 ms. What else should you look at?',
        options: ['The minimum', 'p95 and p99', 'Only the median', 'Nothing'],
        answer: 1,
        why: 'Averages hide the slow tail.',
      },
      {
        q: 'Why not add a `userId` label to a request metric?',
        options: ['It\'s private', 'It creates a separate series per user, exploding storage and cost', 'Labels can\'t be strings', 'It slows requests'],
        answer: 1,
        why: 'High-cardinality labels multiply the number of stored series.',
      },
    ],
    inTheWild: ['Prometheus and Grafana', 'Datadog, New Relic, CloudWatch metrics', 'OpenTelemetry metrics'],
    related: ['fg-logs', 'fg-alerting'],
    cards: [
      { id: 'c-fg-ob-1', front: 'What are RED metrics?', back: 'Rate, Errors, Duration: the core metrics for a request-serving service.' },
      { id: 'c-fg-mt-1', front: 'What are USE metrics?', back: 'Utilisation, Saturation, Errors: the core metrics for a resource like CPU, disk or a connection pool.' },
      { id: 'c-fg-ob-4', front: 'What is metric cardinality and why does it matter?', back: 'The number of unique label combinations. High-cardinality labels like userId create huge numbers of series and cost.' },
    ],
  },
  {
    id: 'fg-traces',
    title: 'Traces',
    summary: 'Follow one request through every service it touches, and see exactly where the time went.',
    ideas: ['Spans and traces', 'Logs, metrics and traces together'],
    body: `
## Spans and traces

When a request passes through several services, a slow response could be anywhere. A **distributed trace** records the whole journey as a tree of timed steps called **spans**:

\`\`\`text
GET /checkout                      420 ms
├─ auth service: verify token        12 ms
├─ orders service: create order     390 ms
│  ├─ database: insert order         15 ms
│  └─ payments API: charge card     360 ms   ← here
└─ email: enqueue receipt             3 ms
\`\`\`

The slow hop is obvious at a glance. Without the trace, you'd be comparing timestamps across several services' logs by hand.

Tracing works by giving each request a **trace ID** and passing it between services in a header (the standard is W3C \`traceparent\`). Each service records its spans with that ID, and a tracing tool stitches them together. Libraries like OpenTelemetry add this to common frameworks and HTTP clients with little code.

## Logs, metrics and traces together

Each answers a different question:

- **Metrics**: is something wrong, and how much? (Error rate jumped to 4%.)
- **Traces**: where in the system? (Requests failing in the payments call.)
- **Logs**: what exactly happened? (The provider returned "card network timeout".)

A typical investigation moves in that order, so connect them: put the trace ID in every log line, and link dashboards to example traces. Then you can jump from an alert to the trace to the exact log line in a minute.
`,
    takeaways: [
      'A trace is a tree of timed spans for one request across services.',
      'A shared trace ID, passed in headers, ties the spans together.',
      'Metrics say something\'s wrong, traces say where, logs say what; link them with IDs.',
    ],
    quiz: [
      {
        q: 'A request is slow and passes through five services. Which tool shows which hop is responsible?',
        options: ['A CPU graph', 'A distributed trace', 'The first service\'s error log', 'An uptime check'],
        answer: 1,
        why: 'A trace records a timed span for each step the request takes.',
      },
      {
        q: 'How do services in a trace know they\'re part of the same request?',
        options: ['They share a database', 'A trace ID is passed between them in a header', 'They run on the same server', 'Timestamps are compared'],
        answer: 1,
        why: 'The propagated trace ID links all the spans.',
      },
      {
        q: 'An alert says error rate is up. What is a sensible order of investigation?',
        options: ['Logs, then metrics', 'Metrics to see the scale, traces to find where, logs to see exactly what', 'Restart everything first', 'Traces only'],
        answer: 1,
        why: 'Each type of data narrows the problem further.',
      },
    ],
    inTheWild: ['OpenTelemetry', 'Jaeger, Grafana Tempo, Honeycomb, Datadog APM', 'The W3C Trace Context standard'],
    related: ['fg-logs', 'fg-metrics'],
    cards: [
      { id: 'c-fg-tr-1', front: 'What is a span in a trace?', back: 'One timed step of a request (e.g. a database query or API call); a trace is the tree of spans.' },
      { id: 'c-fg-tr-2', front: 'Metrics vs traces vs logs?', back: 'Metrics: is something wrong? Traces: where? Logs: what exactly happened?' },
    ],
  },
  {
    id: 'fg-alerting',
    title: 'Alerts worth waking up for',
    summary: 'Alert on what users feel, keep alerts few and actionable, and make reliability a target you can measure.',
    ideas: ['Alert on symptoms, not causes', 'Fight alert fatigue', 'SLOs and error budgets'],
    body: `
## Alert on symptoms, not causes

An alert that wakes someone up should mean **users are affected, or soon will be**, and that a human needs to act.

Good alerts watch **symptoms**: checkout error rate above 2% for 5 minutes, p99 latency above 2 seconds, the oldest job in the queue waiting over 30 minutes.

Alerts on **causes**, like CPU at 85% or one restarted pod, are mostly noise. High CPU that users don't notice isn't an emergency. Put causes on dashboards to help diagnose problems, not on the pager.

## Fight alert fatigue

If an alert fires often and nothing needs doing, people learn to ignore it, and then they ignore it the one time it matters.

- Every page must be **actionable**. If the response is "wait and see", it shouldn't page.
- Link each alert to a **runbook**: what it means and what to check first.
- After each on-call shift, **fix or delete** every alert that paged without needing action.

## SLOs and error budgets

A **service level objective (SLO)** sets a concrete reliability target, for example "99.9% of checkout requests succeed over 30 days."

That leaves an **error budget**: 0.1% of requests may fail, about **43 minutes** of full downtime a month. The budget turns arguments into decisions:

- Burning through it too fast? Alert, and slow down risky changes.
- Plenty left? It's safe to ship faster and experiment.
`,
    takeaways: [
      'Page on user-facing symptoms; keep causes on dashboards.',
      'Every page should be actionable, with a runbook; prune noisy alerts.',
      'An SLO sets the target; the error budget decides how much risk you can take.',
    ],
    quiz: [
      {
        q: 'Which alert should wake someone up at 3 a.m.?',
        options: ['CPU at 85% on one server', 'One pod restarted', 'Checkout error rate above 5% for 5 minutes', 'Disk 60% full'],
        answer: 2,
        why: 'Page on symptoms users feel; causes belong on dashboards.',
      },
      {
        q: 'An alert fires most nights and the response is always "it recovers by itself". What should you do?',
        options: ['Keep it; better safe than sorry', 'Fix or remove it, since an alert people learn to ignore is dangerous', 'Page more people', 'Lower the threshold'],
        answer: 1,
        why: 'Non-actionable pages cause alert fatigue.',
      },
      {
        q: 'A 99.9% monthly availability SLO leaves an error budget of roughly how much full downtime?',
        options: ['4 minutes', '43 minutes', '7 hours', '3 days'],
        answer: 1,
        why: '0.1% of 30 days is about 43 minutes.',
      },
    ],
    inTheWild: ['PagerDuty, Opsgenie, incident.io, Grafana OnCall', 'Prometheus Alertmanager', 'The Google SRE books (free online)'],
    related: ['fg-incidents', 'fg-metrics'],
    cards: [
      { id: 'c-fg-al-1', front: 'Symptom vs cause alerts?', back: 'Symptom alerts (error rate, latency) reflect user impact and should page. Cause alerts (CPU, restarts) belong on dashboards.' },
      { id: 'c-fg-al-2', front: 'What is an error budget?', back: 'The failure allowed by an SLO, e.g. 0.1% for 99.9% (about 43 minutes a month). Used to balance reliability and shipping speed.' },
    ],
  },
  {
    id: 'fg-incidents',
    title: 'Handling incidents',
    summary: 'When production breaks: communicate early, stop the damage first, and learn without blame.',
    ideas: ['Run the incident: acknowledge, assess, communicate', 'Mitigate first, find the cause later', 'Blameless post-mortems'],
    body: `
## Run the incident: acknowledge, assess, communicate

When an alert fires:

1. **Acknowledge** it, so others know someone is on it.
2. **Assess the impact**: who is affected, and how badly?
3. **Communicate early**: open an incident channel, name one **incident lead** to coordinate, and post short status updates on a regular rhythm, even if the update is "still investigating."

A lead and a single channel stop five people debugging the same thing in five different places.

## Mitigate first, find the cause later

The first goal is to **stop the damage**, not to understand it:

- Roll back the last deploy.
- Turn off the feature flag.
- Fail over to another region, or scale up.

> Checkout errors started 10 minutes after a deploy. Roll back first, confirm errors drop, and then dig into why. Debugging live while customers fail to pay is the expensive way round.

Keep a **timeline** of what you saw and tried as you go. You'll need it afterwards.

## Blameless post-mortems

Afterwards, write up what happened: impact, timeline, contributing causes and follow-up actions. Make it **blameless**: assume everyone acted reasonably with what they knew, and ask how the **system** allowed the failure.

"Why could a bad config reach every region at once?" leads to fixes like staged rollouts. "Who pushed the bad config?" leads to people hiding mistakes next time. Track the follow-up actions to completion; an unread post-mortem prevents nothing.
`,
    takeaways: [
      'Acknowledge, assess impact, and communicate in one channel with one lead.',
      'Mitigate first (roll back, disable, fail over); root-cause later.',
      'Post-mortems ask how the system allowed it, and their actions get done.',
    ],
    quiz: [
      {
        q: 'During an incident caused by a deploy, what comes first?',
        options: ['Find the root cause', 'Write the post-mortem', 'Mitigate, e.g. by rolling back', 'Identify who made the change'],
        answer: 2,
        why: 'Stop the impact first; investigate once users are safe.',
      },
      {
        q: 'Why name a single incident lead?',
        options: ['To assign blame later', 'So one person coordinates and people don\'t duplicate or contradict each other', 'It\'s a legal requirement', 'To reduce costs'],
        answer: 1,
        why: 'Coordination stops parallel, conflicting efforts.',
      },
      {
        q: 'Which post-mortem question leads to better fixes?',
        options: ['Who pushed the bad config?', 'How did our process let a bad config reach every region at once?', 'Why wasn\'t the engineer more careful?', 'Who approved it?'],
        answer: 1,
        why: 'Asking how the system allowed it leads to changes that prevent repeats.',
      },
    ],
    inTheWild: ['incident.io, FireHydrant, PagerDuty incident response', 'Status pages (Atlassian Statuspage, Instatus)', 'Public post-mortems from companies like Cloudflare and GitHub'],
    related: ['fg-alerting', 'fg-rollbacks'],
    cards: [
      { id: 'c-fg-al-3', front: 'First priority in an incident?', back: 'Mitigate (roll back, disable the flag, fail over). Root cause comes after users are safe.' },
      { id: 'c-fg-in-1', front: 'What makes a post-mortem blameless?', back: 'It assumes people acted reasonably and asks how the system allowed the failure, so fixes target the system.' },
    ],
  },
]
