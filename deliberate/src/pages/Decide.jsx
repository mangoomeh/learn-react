import { NavLink, Route, Routes } from 'react-router-dom'
import { PageHeader } from '../components/ui'
import DecisionJournal from './decide/DecisionJournal'
import DecisionMatrix from './decide/DecisionMatrix'
import Calibration from './decide/Calibration'

export default function Decide() {
  return (
    <div className="stack-lg">
      <PageHeader eyebrow="Decision making" title="Decide">
        Record decisions before you know how they turn out, compare options with explicit trade-offs, and see how well your confidence matches reality.
      </PageHeader>
      <nav className="tabs" aria-label="Decision tools">
        <NavLink to="/decide" end className="tab">Journal</NavLink>
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
