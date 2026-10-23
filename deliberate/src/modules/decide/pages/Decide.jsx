import { NavLink, Route, Routes } from 'react-router-dom'
import { PageHeader } from '../../../core/components/ui'
import DecisionJournal from './DecisionJournal'
import DecisionMatrix from './DecisionMatrix'
import Calibration from './Calibration'

export default function Decide() {
  return (
    <div className="stack-lg">
      <PageHeader eyebrow="Decision making" title="Decisions">
        Record decisions before you know how they turn out, compare options with explicit trade-offs, and see how well your confidence matches reality.
      </PageHeader>
      <nav className="tabs" aria-label="Decision tools">
        <NavLink to="/decide" end className="tab">Log</NavLink>
        <NavLink to="/decide/matrix" className="tab">Matrix</NavLink>
        <NavLink to="/decide/calibration" className="tab">Calibration</NavLink>
      </nav>
      <Routes>
        <Route index element={<DecisionJournal />} />
        <Route path="matrix" element={<DecisionMatrix />} />
        <Route path="calibration" element={<Calibration />} />
      </Routes>
    </div>
  )
}
