import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useProgress } from '../store/ProgressContext'
import { currentStreak, dayKey } from '../lib/dates'
import { isDue } from '../lib/srs'
import { levelFor } from '../lib/xp'

const icon = {
  today: 'M4 5h16v15H4zM4 9h16M9 3v4M15 3v4',
  learn: 'M4 5.5C7 4 10 4 12 6c2-2 5-2 8-.5V19c-3-1.5-6-1.5-8 .5-2-2-5-2-8-.5z M12 6v13.5',
  guide: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M15.5 8.5l-2 5-5 2 2-5z',
  review: 'M5 7h11v12H5z M8 4h11v12',
  drills: 'M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z',
  decide: 'M12 3v18 M12 7l-7 3 7 3 7-3z M5 10v4 M19 10v4',
  journal: 'M6 3h10l3 3v15H6z M9 9h7 M9 13h7 M9 17h4',
  stats: 'M4 20V10 M10 20V4 M16 20v-7 M22 20H2',
}

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-icon">
      <path d={icon[name]} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

const NAV = [
  { to: '/', label: 'Today', icon: 'today', end: true },
  { to: '/learn', label: 'Learn', icon: 'learn' },
  { to: '/guide', label: 'Guide', icon: 'guide' },
  { to: '/review', label: 'Review', icon: 'review' },
  { to: '/drills', label: 'Drills', icon: 'drills' },
  { to: '/decide', label: 'Decide', icon: 'decide' },
  { to: '/journal', label: 'Journal', icon: 'journal' },
  { to: '/stats', label: 'Stats', icon: 'stats' },
]

export default function Layout() {
  const { state } = useProgress()
  const { pathname } = useLocation()
  const today = dayKey()
  const due = Object.values(state.cards).filter((c) => isDue(c, today)).length
  const streak = currentStreak(state.activity, today)
  const { level } = levelFor(state.xp)

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
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className="nav-link">
              <Icon name={item.icon} />
              <span className="nav-label">{item.label}</span>
              {item.icon === 'review' && due > 0 && <span className="nav-badge">{due}</span>}
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
