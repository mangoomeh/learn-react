import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useWholeState } from '../core/store/ProgressStore'
import { useModules } from '../core/modules'
import { currentStreak, dayKey } from '../core/lib/dates'
import { levelFor } from '../core/lib/levels'

function Icon({ path }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-icon">
      <path d={path} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

const TODAY = { to: '/', label: 'Today', icon: 'M4 5h16v15H4zM4 9h16M9 3v4M15 3v4', end: true }
const STATS = { to: '/stats', label: 'Stats', icon: 'M4 20V10 M10 20V4 M16 20v-7 M22 20H2' }

export default function Layout() {
  const state = useWholeState()
  const modules = useModules()
  const { pathname } = useLocation()
  const today = dayKey()
  const streak = currentStreak(state.core.activity, today)
  const { level } = levelFor(state.core.xp)
  const items = [TODAY, ...modules.map((m) => ({ ...m.nav, badge: m.badge?.(state[m.id], { today }) })), STATS]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">D</span>
          <span className="brand-name">Deliberate</span>
        </div>
        <nav className="nav" aria-label="Main">
          {items.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className="nav-link">
              <Icon path={item.icon} />
              <span className="nav-label">{item.label}</span>
              {item.badge > 0 && <span className="nav-badge">{item.badge}</span>}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-foot">
          <div>
            <span className="foot-num">{streak}</span>
            <span className="foot-label">day streak</span>
          </div>
          <div>
            <span className="foot-num">{level}</span>
            <span className="foot-label">level</span>
          </div>
        </div>
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
