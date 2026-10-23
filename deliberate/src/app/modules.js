import learn from '../modules/learn'
import guide from '../modules/guide'
import review from '../modules/review'
import drills from '../modules/drills'
import decide from '../modules/decide'
import journal from '../modules/journal'

// Every feature is a module. Order here is the order of the nav bar, Today's reps and Stats.
// To add a feature, create src/modules/<id>/index.js (see src/modules/README.md) and list it here.
export const modules = [learn, guide, review, drills, decide, journal]
