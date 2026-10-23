export const shipping = [
  {
    id: 'fg-config',
    title: 'Configuration and environment variables',
    summary: 'Keep what changes between environments out of the code, and catch missing settings before they bite.',
    ideas: ['Config lives in the environment', 'Validate at startup', 'Frontend variables are public'],
    body: `
The same code runs on your laptop, in CI, in staging and in production. What differs is **configuration**: database URLs, API keys, feature settings, log levels.

## Config lives in the environment

The widely followed **twelve-factor app** guidance says to keep config in **environment variables**, not in the code. Then one build can be promoted from staging to production unchanged, and only the environment differs.

- Give each setting **one** source, with sensible defaults for local development.
- Keep a \`.env.example\` in the repo listing every variable with a dummy value; keep the real \`.env\` out of git.

## Validate at startup

Read all config **once, at startup**, check it, and **fail fast** with a clear message if something required is missing:

\`\`\`js
function required(name) {
  const value = process.env[name]
  if (!value) throw new Error(\`Missing required environment variable \${name}\`)
  return value
}

const config = {
  port: Number(process.env.PORT ?? 3000),
  databaseUrl: required('DATABASE_URL'),
}
\`\`\`

A service that refuses to start with "Missing DATABASE_URL" is easy to fix. One that starts fine and fails on the first real request at 3 a.m. is not.

## Frontend variables are public

Variables like \`VITE_API_URL\` or \`NEXT_PUBLIC_*\` are **compiled into the JavaScript** that users download. Anyone can read them in the browser's developer tools.

Only put public values there (an API's address, a public analytics key). Anything secret must stay on a server, with the frontend calling the server instead.
`,
    takeaways: [
      'Keep config in environment variables so one build runs everywhere.',
      'Read and validate config at startup; fail fast with a clear message.',
      'Frontend environment variables end up in the bundle; never put secrets there.',
    ],
    quiz: [
      {
        q: 'Why read and validate configuration at startup?',
        options: ['It makes the app faster', 'A missing setting fails immediately and clearly, not on the first request in production', 'Environment variables expire', 'Node requires it'],
        answer: 1,
        why: 'Failing fast at boot is far easier to diagnose than a failure hours later.',
      },
      {
        q: 'Is `VITE_STRIPE_SECRET` in a frontend build safe?',
        options: ['Yes, environment variables are always secret', 'No: frontend variables are compiled into the bundle users download', 'Yes, if the name contains SECRET', 'Only in production'],
        answer: 1,
        why: 'Anything in client-side code is public.',
      },
      {
        q: 'What belongs in the repo for configuration?',
        options: ['The real .env file', 'A .env.example listing every variable with dummy values', 'Production passwords', 'Nothing'],
        answer: 1,
        why: 'It documents what\'s needed without exposing real values.',
      },
    ],
    inTheWild: ['The Twelve-Factor App (12factor.net)', 'dotenv, direnv', 'Schema validators like zod or envalid for config'],
    related: ['fg-secrets', 'fg-feature-flags'],
    cards: [
      { id: 'c-fg-cf-1', front: 'Why validate config at startup?', back: 'A missing setting fails immediately with a clear message, instead of breaking the first request in production.' },
      { id: 'c-fg-cf-2', front: 'Are frontend environment variables secret?', back: 'No. They are compiled into the bundle users download, so only public values belong there.' },
    ],
  },
  {
    id: 'fg-secrets',
    title: 'Keeping secrets secret',
    summary: 'API keys and passwords need more care than ordinary config. Three rules cover most of it.',
    ideas: ['Never commit secrets; rotate leaks', 'Store them in a secret manager', 'Separate, least-privilege credentials'],
    body: `
## Never commit secrets; rotate leaks

Never put API keys, passwords or signing keys in the repository, not even "temporarily". Git keeps history forever, and bots scan public repositories for keys within **minutes** of a push.

If a secret does leak, **rotate it**: revoke the old one and issue a new one. Deleting it in a later commit, or even rewriting history, isn't enough; assume it was copied the moment it was pushed.

Turn on **secret scanning** (GitHub offers it) and add a pre-commit scanner so mistakes are caught before they leave your machine.

## Store them in a secret manager

Keep secrets in a dedicated store and inject them into the app at runtime:

- Cloud secret managers (AWS Secrets Manager, Google Secret Manager, Azure Key Vault).
- HashiCorp Vault, Doppler, 1Password.
- Your platform's encrypted variables (GitHub Actions secrets, Vercel or Heroku config).

These control who can read each secret, log access, and make rotation easy.

## Separate, least-privilege credentials

Give each environment and each service **its own** credentials, with only the permissions it needs.

> If staging and production share a database password, a leak from a developer's staging setup exposes customer data. With separate credentials, the damage stops at staging.

A service that only reads from a bucket shouldn't hold a key that can delete it. And keep secrets out of logs, error messages and anything sent to the browser.
`,
    takeaways: [
      'Never commit secrets; if one leaks, rotate it immediately.',
      'Store secrets in a secret manager and inject them at runtime.',
      'Separate credentials per environment and service, with the least privilege needed.',
    ],
    quiz: [
      {
        q: 'You committed an API key to a public repo and deleted it in the next commit. What now?',
        options: ['Nothing; it\'s deleted', 'Make the repo private', 'Rotate the key: revoke it and issue a new one', 'Rewrite history and carry on'],
        answer: 2,
        why: 'Bots scan public repos within minutes. Assume the key was copied.',
      },
      {
        q: 'Why give staging and production separate credentials?',
        options: ['It\'s faster', 'A leak in staging then can\'t expose production data', 'Databases require it', 'To save money'],
        answer: 1,
        why: 'Separation limits the damage of any single leak.',
      },
      {
        q: 'A service only needs to read files from a storage bucket. What key should it have?',
        options: ['An admin key', 'A key that can only read that bucket', 'The same key as every other service', 'No key'],
        answer: 1,
        why: 'Least privilege: the key should allow only what the service needs.',
      },
    ],
    inTheWild: ['GitHub secret scanning and push protection', 'gitleaks, trufflehog', 'AWS Secrets Manager, HashiCorp Vault, Doppler'],
    related: ['fg-config', 'fg-logs'],
    cards: [
      { id: 'c-fg-sc-1', front: 'What must you do when a secret leaks?', back: 'Rotate it: revoke the old one and issue a new one. Deleting it from git isn\'t enough.' },
      { id: 'c-fg-sc-2', front: 'Least privilege for credentials?', back: 'Each service and environment gets its own credentials, allowing only what it needs.' },
    ],
  },
  {
    id: 'fg-feature-flags',
    title: 'Feature flags',
    summary: 'Separate deploying code from releasing features, so you can ship continuously and switch things off instantly.',
    ideas: ['Deploy is not release', 'Rollouts, kill switches and experiments', 'Flag debt'],
    body: `
## Deploy is not release

A **feature flag** is a runtime switch around new behaviour:

\`\`\`js
if (flags.isEnabled('new-checkout', { userId: user.id })) {
  return renderNewCheckout()
}
return renderOldCheckout()
\`\`\`

The key idea: **deploying** code and **releasing** a feature become separate steps. You can merge unfinished work to main and deploy it hidden behind a flag, then release it later with a switch instead of a deploy. Teams use this to merge small changes every day instead of keeping long-lived branches.

## Rollouts, kill switches and experiments

- **Gradual rollout**: turn a feature on for staff, then 1% of users, then 10%, then everyone, watching errors and metrics at each step.
- **Kill switch**: if the feature misbehaves, turn it off in seconds. No emergency deploy, no rollback.
- **Experiments**: show variants to different users and compare results (A/B tests).
- **Targeting**: enable features per customer, plan or region.

Make percentage rollouts **sticky**: base them on a hash of the user ID, so the same person sees the same version every visit.

## Flag debt

Every flag doubles the paths through that code. Old flags pile up, nobody remembers whether \`enable_v2_pricing\` is still needed, and tests cover only one side.

- Give each **release** flag an owner and an expiry date, and delete it (and the old code path) once it's fully rolled out.
- Keep flag checks near the edges (a route or a component), not scattered through deep logic.
- Keep testing the "off" path while the flag exists: it's your rollback.
`,
    takeaways: [
      'Flags let you deploy code dark and release it later with a switch.',
      'Use them for gradual, sticky rollouts, kill switches and experiments.',
      'Release flags are temporary: owner, expiry, then delete.',
    ],
    quiz: [
      {
        q: 'What is the main benefit of feature flags?',
        options: ['Faster code', 'They separate deploying code from releasing a feature', 'They replace testing', 'Fewer branches in code'],
        answer: 1,
        why: 'You can deploy dark, roll out gradually, and turn a feature off instantly.',
      },
      {
        q: 'A new checkout misbehaves after reaching 10% of users. The quickest safe response?',
        options: ['Emergency deploy', 'Turn the flag off', 'Roll back the database', 'Wait for the next release'],
        answer: 1,
        why: 'A flag works as a kill switch: seconds, no deploy.',
      },
      {
        q: 'What keeps flags from turning into "flag debt"?',
        options: ['Never removing them', 'An owner and expiry for each release flag, deleting it after full rollout', 'Putting checks deep in logic', 'Only testing the "on" path'],
        answer: 1,
        why: 'Each flag doubles the code paths until it\'s removed.',
      },
    ],
    inTheWild: ['LaunchDarkly, Unleash, Flagsmith, GrowthBook', 'OpenFeature (vendor-neutral standard)', 'Simple database- or config-backed flags built in-house'],
    related: ['fg-deploy-strategies', 'fg-migrations'],
    cards: [
      { id: 'c-fg-ff-1', front: 'What is the main benefit of feature flags?', back: 'They separate deploying code from releasing a feature, enabling gradual rollouts and instant kill switches.' },
      { id: 'c-fg-ff-2', front: 'What is flag debt?', back: 'Old flags that were never removed, multiplying code paths and confusion. Give release flags owners and expiry dates.' },
    ],
  },
  {
    id: 'fg-migrations',
    title: 'Zero-downtime migrations',
    summary: 'Change a database schema while old and new versions of your code are both running against it.',
    ideas: ['Old and new code run at the same time', 'Expand and contract'],
    body: `
A **migration** is a versioned script that changes the database schema: add a table, add a column, create an index. Migration tools record which scripts have run, so every environment ends up with the same schema in the same order.

## Old and new code run at the same time

During a deploy, **old and new versions of your code run side by side**: some servers have the new version, some still have the old one, often for several minutes. Any schema change has to work with **both**.

> You rename \`name\` to \`full_name\` in one migration. The moment it runs, every server still on the old version starts failing with "column name does not exist", until the deploy finishes. If the deploy fails and you roll back, the old code fails everywhere.

## Expand and contract

Make breaking changes in several small, safe deploys:

1. **Expand**: add the new thing alongside the old. Add the \`full_name\` column; leave \`name\`.
2. **Write to both**: deploy code that writes both columns but still reads \`name\`.
3. **Backfill**: copy existing data into \`full_name\`, in batches.
4. **Switch reads**: deploy code that reads \`full_name\`.
5. **Contract**: deploy code that stops writing \`name\`, then drop it in a later migration.

It's slower than one big change, but every step works while traffic flows, and every step can be rolled back. The same pattern works for renaming tables, splitting columns and changing types.
`,
    takeaways: [
      'During deploys, old and new code share the database; changes must suit both.',
      'Expand, write both, backfill, switch reads, then contract.',
      'Each small step is safe to run live and safe to roll back.',
    ],
    quiz: [
      {
        q: 'Why can\'t you rename a column in a single migration during a rolling deploy?',
        options: ['Databases don\'t support renames', 'Old code still running expects the old name and starts failing', 'Renames lose data', 'Migrations can\'t run during deploys'],
        answer: 1,
        why: 'Old and new code run side by side, so the schema must work with both.',
      },
      {
        q: 'What is the first step of expand and contract?',
        options: ['Drop the old column', 'Add the new column alongside the old one', 'Backfill the data', 'Switch reads'],
        answer: 1,
        why: 'Expand first, so both versions keep working. Dropping comes last.',
      },
    ],
    inTheWild: ['Flyway, Liquibase, Alembic, Prisma Migrate, Rails and Django migrations', 'strong_migrations (Rails) and squawk (Postgres migration linting)'],
    related: ['fg-migrations-big-tables', 'fg-rollbacks'],
    cards: [
      { id: 'c-fg-mg-1', front: 'Why can\'t you rename a column in one step during a live deploy?', back: 'Old code still running expects the old name and starts failing the moment the migration runs.' },
      { id: 'c-fg-mg-2', front: 'The expand-and-contract steps?', back: 'Add the new column, write to both, backfill, switch reads, stop writing the old one, then drop it.' },
    ],
  },
  {
    id: 'fg-migrations-big-tables',
    title: 'Migrations on big tables',
    summary: 'On large tables, innocent-looking changes can lock everything for minutes. Here\'s how to avoid that.',
    ideas: ['Some changes lock the table', 'Backfill in batches', 'Set a lock timeout'],
    body: `
## Some changes lock the table

On a table with millions of rows, some operations take a lock that blocks reads or writes until they finish, which can be minutes. To your users, that's an outage.

- **Creating an index** normally blocks writes for as long as it takes to build. In PostgreSQL, use \`CREATE INDEX CONCURRENTLY\`, which builds it without blocking (it's slower, and can't run inside a transaction).
- **Changing a column's type**, and on some databases and versions **adding a column with a default**, can rewrite the entire table. Check your database's documentation for each change.

Test risky migrations on a copy of production-sized data first. A migration that takes 50 ms on your laptop's 100 rows can take 20 minutes on 200 million.

## Backfill in batches

Filling a new column for every row with one \`UPDATE\` holds locks for the whole run and floods the database's logs and replicas.

Update in **batches** of a few thousand rows, with a short pause between batches, so normal traffic keeps flowing:

\`\`\`sql
UPDATE users SET full_name = name
WHERE id IN (SELECT id FROM users WHERE full_name IS NULL LIMIT 5000);
-- repeat until no rows change
\`\`\`

Keep backfills separate from schema migrations, so a slow backfill doesn't hold up a deploy.

## Set a lock timeout

Even a quick change needs a lock. If a long-running query already holds the table, the migration waits, and every new query queues behind the waiting migration. A two-second change can freeze the table.

Set a **lock timeout** for migrations (for example \`SET lock_timeout = '5s'\` in PostgreSQL), so a blocked migration fails fast and can be retried, instead of freezing everything.
`,
    takeaways: [
      'Index concurrently, and check which changes rewrite or lock large tables.',
      'Backfill in small batches, separately from schema changes.',
      'Use a lock timeout so a blocked migration fails instead of freezing the table.',
    ],
    quiz: [
      {
        q: 'How do you add an index to a large PostgreSQL table without blocking writes?',
        options: ['CREATE INDEX', 'CREATE INDEX CONCURRENTLY', 'Add it at night', 'You can\'t'],
        answer: 1,
        why: 'The concurrent build avoids holding a write-blocking lock.',
      },
      {
        q: 'How should you backfill 50 million rows?',
        options: ['One big UPDATE', 'In batches of a few thousand rows with short pauses', 'Only during a planned outage', 'Recreate the table'],
        answer: 1,
        why: 'A single huge update holds locks and overloads the database.',
      },
      {
        q: 'Why set a lock timeout on migrations?',
        options: ['To make them faster', 'So a migration waiting for a lock fails fast instead of making every other query queue behind it', 'It\'s required by SQL', 'To skip failed migrations'],
        answer: 1,
        why: 'A waiting migration blocks new queries; a timeout limits the damage.',
      },
    ],
    inTheWild: ['PostgreSQL CREATE INDEX CONCURRENTLY and lock_timeout', 'gh-ost and pt-online-schema-change for MySQL', 'strong_migrations and squawk'],
    related: ['fg-migrations'],
    cards: [
      { id: 'c-fg-mg-3', front: 'How do you add an index in Postgres without blocking writes?', back: 'CREATE INDEX CONCURRENTLY.' },
      { id: 'c-fg-mbt-1', front: 'Why set a lock timeout on migrations?', back: 'A migration waiting for a lock makes every new query queue behind it; a timeout makes it fail fast instead.' },
    ],
  },
  {
    id: 'fg-deploy-strategies',
    title: 'Deployment strategies',
    summary: 'Three ways to replace running code, with different costs and different ways to undo.',
    ideas: ['Rolling deploys', 'Blue-green deploys', 'Canary releases'],
    body: `
Most incidents start with a change. How you roll out a change decides how many users a bad one reaches, and how quickly you can undo it.

## Rolling deploys

Replace instances **a few at a time**: start some new ones, wait for them to pass health checks, stop some old ones, repeat.

- Cheap: no extra capacity needed. It's the default in Kubernetes and most platforms.
- Old and new versions serve traffic together for a while, so they must be compatible (with each other and with the database).
- Undoing it means rolling everything back the same way.

## Blue-green deploys

Run the new version (**green**) next to the current one (**blue**), test it, then switch **all** traffic over at once.

- Rollback is instant: switch traffic back to blue, which is still running.
- Costs double the capacity during the deploy.

## Canary releases

Send a **small share** of real traffic to the new version (1%, then 10%, then 50%), compare its error rate and latency with the old version, and continue only if it looks healthy.

> A new version has a bug that only appears with real customer data. As a canary at 1%, it affects 1 in 100 users for a few minutes before the error rate comparison stops the rollout.

Canaries can be **automated**: the rollout tool watches the metrics and rolls back by itself. Feature flags complement all three strategies: deploy the code dark, then release the feature gradually.
`,
    takeaways: [
      'Rolling: replace gradually; cheap, but old and new run together.',
      'Blue-green: switch all traffic at once; instant rollback, double capacity.',
      'Canary: send a small share first and expand only if metrics look healthy.',
    ],
    quiz: [
      {
        q: 'Which strategy sends a small share of traffic to the new version first and expands only if it looks healthy?',
        options: ['Rolling', 'Blue-green', 'Canary', 'Big bang'],
        answer: 2,
        why: 'A canary limits the blast radius while you compare metrics.',
      },
      {
        q: 'What is the main advantage of blue-green deploys?',
        options: ['They\'re the cheapest', 'Rollback is instant: switch traffic back to the old environment', 'They need no testing', 'They avoid databases'],
        answer: 1,
        why: 'The old version is still running, ready to take traffic.',
      },
      {
        q: 'During a rolling deploy, what must be true?',
        options: ['Only one version runs at a time', 'Old and new versions can run side by side safely', 'All users switch at once', 'The database is offline'],
        answer: 1,
        why: 'Both versions serve traffic while the rollout progresses.',
      },
    ],
    inTheWild: ['Kubernetes rolling updates', 'Argo Rollouts and Flagger (automated canaries)', 'AWS CodeDeploy and ECS blue/green'],
    related: ['fg-rollbacks', 'fg-feature-flags'],
    cards: [
      { id: 'c-fg-dp-1', front: 'Rolling vs blue-green vs canary?', back: 'Rolling: replace instances gradually. Blue-green: switch all traffic to a parallel environment. Canary: send a small share first and expand if healthy.' },
      { id: 'c-fg-ds-1', front: 'Why are canary releases safer?', back: 'A bad version reaches only a small share of users, and metrics comparisons can stop or reverse it automatically.' },
    ],
  },
  {
    id: 'fg-rollbacks',
    title: 'Rollbacks and deploy habits',
    summary: 'Being able to undo quickly matters more than never making mistakes. Habits of teams that deploy calmly.',
    ideas: ['Practise the rollback', 'Rollbacks must work with the database', 'Small, frequent, automated deploys'],
    body: `
## Practise the rollback

Know exactly how to roll back **before** you need to, and practise it. In an incident you want one command or button, not a debate over which steps to take.

"Rolling forward" (deploying a fix) is sometimes the better option, but only once you understand the problem. Under pressure, roll back first.

## Rollbacks must work with the database

Rolling back code doesn't roll back the database.

> A deploy included a migration that dropped the \`legacy_id\` column. The new code has a bug, so you roll back. The old code reads \`legacy_id\`, which no longer exists, and now nothing works at all.

This is why destructive schema changes come **last** in expand-and-contract, in their own deploy, after the code that needed them is long gone. Every deploy should be safe to undo.

## Small, frequent, automated deploys

Teams that deploy calmly share some habits:

- **Deploy small and often.** A deploy with one change is easy to understand and easy to undo. A deploy with fifty changes is neither.
- **Automate it.** The same pipeline every time: build, test, deploy to staging, deploy to production. No hand-run steps to forget.
- **Build once, promote the same artifact.** The exact image tested in staging is the one that goes to production; only configuration differs.
- **Watch after deploying.** Have dashboards showing errors and latency by version, and look at them for a few minutes.
- **Mind the timing.** Avoid big deploys right before you leave, or when nobody is around to respond.
`,
    takeaways: [
      'Know and practise the rollback; under pressure, roll back first.',
      'Code rollbacks don\'t undo destructive migrations; keep every deploy reversible.',
      'Deploy small changes often through one automated pipeline, promoting a single build.',
    ],
    quiz: [
      {
        q: 'You roll back the code, but the deploy\'s migration dropped a column. What happens?',
        options: ['The column comes back', 'The old code may fail because the column is gone', 'The rollback is blocked', 'Nothing'],
        answer: 1,
        why: 'Code rollbacks don\'t undo destructive migrations.',
      },
      {
        q: 'Why "build once, promote the same artifact"?',
        options: ['It saves disk space', 'Production runs exactly what was tested in staging', 'Builds are slow', 'Docker requires it'],
        answer: 1,
        why: 'Rebuilding for production can pull in different dependencies and produce something untested.',
      },
      {
        q: 'Why deploy small changes often?',
        options: ['It looks busy', 'Each deploy is easy to understand and to undo', 'It\'s required by Git', 'It uses fewer servers'],
        answer: 1,
        why: 'When something breaks, a small deploy points straight at the cause.',
      },
    ],
    inTheWild: ['GitHub Actions and GitLab CI pipelines', 'Vercel and Netlify instant rollbacks', 'The DORA metrics (deploy frequency, change failure rate, time to restore)'],
    related: ['fg-deploy-strategies', 'fg-migrations', 'fg-incidents'],
    cards: [
      { id: 'c-fg-dp-2', front: 'Why "build once, promote the same artifact"?', back: 'What runs in production is exactly what was tested in staging; nothing differs but configuration.' },
      { id: 'c-fg-rb-1', front: 'Why can a code rollback still fail?', back: 'If the deploy\'s migration destroyed something the old code needs (e.g. dropped a column).' },
    ],
  },
]
