// "On the job": practical topics that rarely appear in a CS curriculum, grouped into sections.
// Each section becomes an optional unit of the Software Engineering subject.
import { reliability } from './reliability.js'
import { background } from './background.js'
import { observability } from './observability.js'
import { shipping } from './shipping.js'
import { apis } from './apis.js'

export const sections = [
  {
    id: 'reliability',
    title: 'Keeping services alive',
    blurb: 'How production systems know they are healthy, survive failures and shut down cleanly.',
    lessons: reliability,
  },
  {
    id: 'background',
    title: 'Background work',
    blurb: 'Everything that runs outside the request: jobs, queues, schedules and long-running workers.',
    lessons: background,
  },
  {
    id: 'observability',
    title: 'Knowing what is happening',
    blurb: 'Logs, metrics, traces and alerts: how you find out something is wrong before users tell you.',
    lessons: observability,
  },
  {
    id: 'shipping',
    title: 'Shipping changes safely',
    blurb: 'Config, secrets, feature flags, migrations and deploys: getting code to production without drama.',
    lessons: shipping,
  },
  {
    id: 'apis',
    title: 'APIs and data in practice',
    blurb: 'The details every real API has to get right: limits, paging and time.',
    lessons: apis,
  },
]
