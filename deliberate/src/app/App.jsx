import { Route, Routes } from 'react-router-dom'
import { useModules } from '../core/modules'
import Layout from './Layout'
import Today from './pages/Today'
import Stats from './pages/Stats'

export default function App() {
  const modules = useModules()
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Today />} />
        {modules.flatMap((m) => m.routes.map(({ path, Component }) => <Route key={path} path={path} Component={Component} />))}
        <Route path="stats" element={<Stats />} />
        <Route path="*" element={<Today />} />
      </Route>
    </Routes>
  )
}
