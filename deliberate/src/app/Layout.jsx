import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useWholeState } from '../core/store/ProgressStore'
import { useModules } from '../core/modules'
import { currentStreak, dayKey } from '../core/lib/dates'
import { levelFor } from '../core/lib/levels'
import { sections } from './modules'

function Icon({ path }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-icon">
      <path d={path} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

const TODAY_ICON = 'M4 5h16v15H4zM4 9h16M9 3v4M15 3v4'

const owns = (to, pathname) => pathname === to || pathname.startsWith(`${to}/`)

export default function Layout() {
  const state = useWholeState()
  const modules = useModules()
  const { pathname } = useLocation()
  const today = dayKey()
  const streak = currentStreak(state.core.activity, today)
  const { level } = levelFor(state.core.xp)

  const byId = Object.fromEntries(modules.map((m) => [m.id, m]))
  const groups = sections.map((s) => {
    const members = s.modules.map((id) => byId[id]).filter(Boolean)
    return {
      ...s,
      members,
      to: members[0].nav.to,
      active: members.some((m) => owns(m.nav.to, pathname)),
      badge: members.reduce((n, m) => n + (m.badge?.(state[m.id], { today }) || 0), 0),
    }
  })
  const current = groups.find((g) => g.active)

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
          <NavLink to="/" end className="nav-link">
            <Icon path={TODAY_ICON} />
            <span className="nav-label">Today</span>
          </NavLink>
          {groups.map((g) => (
            <Link key={g.id} to={g.to} className={`nav-link ${g.active ? 'active' : ''}`} aria-current={g.active ? 'page' : undefined}>
              <Icon path={g.icon} />
              <span className="nav-label">{g.label}</span>
              {g.badge > 0 && <span className="nav-badge">{g.badge}</span>}
            </Link>
          ))}
        </nav>
        <Link to="/stats" className="sidebar-foot" aria-label={`Stats: ${streak} day streak, level ${level}`}>
          <div>
            <span className="foot-num">{streak}</span>
            <span className="foot-label">day streak</span>
          </div>
          <div>
            <span className="foot-num">{level}</span>
            <span className="foot-label">level</span>
          </div>
        </Link>
      </aside>
      <main className="main">
        {current && current.members.length > 1 && (
          <nav className="subnav" aria-label={current.label}>
            {current.members.map((m) => {
              const badge = m.badge?.(state[m.id], { today }) || 0
              return (
                <NavLink key={m.id} to={m.nav.to} className="subnav-link">
                  {m.nav.label}
                  {badge > 0 && <span className="subnav-badge">{badge}</span>}
                </NavLink>
              )
            })}
          </nav>
        )}
        <Outlet />
      </main>
    </div>
  )
}
