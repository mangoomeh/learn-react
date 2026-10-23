import learn from '../modules/learn'
import guide from '../modules/guide'
import review from '../modules/review'
import drills from '../modules/drills'
import decide from '../modules/decide'
import journal from '../modules/journal'

// Every feature is a module. Order here is the order of Today's reps and the Stats figures.
// To add a feature, create src/modules/<id>/index.js (see src/modules/README.md) and list it here.
export const modules = [learn, guide, review, drills, decide, journal]

// The bottom bar (sidebar on desktop) groups modules into a few sections, so it stays short.
// Inside a section, a switcher at the top of the page moves between its modules, in this order.
export const sections = [
  { id: 'learn', label: 'Learn', modules: ['learn', 'guide'], icon: 'M4 5.5C7 4 10 4 12 6c2-2 5-2 8-.5V19c-3-1.5-6-1.5-8 .5-2-2-5-2-8-.5z M12 6v13.5' },
  { id: 'practice', label: 'Practice', modules: ['review', 'drills'], icon: 'M5 7h11v12H5z M8 4h11v12' },
  { id: 'reflect', label: 'Reflect', modules: ['journal', 'decide'], icon: 'M6 3h10l3 3v15H6z M9 9h7 M9 13h7 M9 17h4' },
]
