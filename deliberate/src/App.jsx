import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Today from './pages/Today'
import Learn from './pages/Learn'
import Lesson from './pages/Lesson'
import Review from './pages/Review'
import Drills from './pages/Drills'
import Journal from './pages/Journal'
import Decide from './pages/Decide'
import Stats from './pages/Stats'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Today />} />
        <Route path="learn" element={<Learn />} />
        <Route path="learn/:lessonId" element={<Lesson />} />
        <Route path="review" element={<Review />} />
        <Route path="drills" element={<Drills />} />
        <Route path="journal" element={<Journal />} />
        <Route path="decide/*" element={<Decide />} />
        <Route path="stats" element={<Stats />} />
        <Route path="*" element={<Today />} />
      </Route>
    </Routes>
  )
}
