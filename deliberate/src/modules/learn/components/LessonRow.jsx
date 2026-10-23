import { Link } from 'react-router-dom'
import { lessonPath } from '../catalog'

// One lesson in a list: title and summary, with its length or best score.
// `label` (e.g. the subject in search results) is shown above the title when given.
export default function LessonRow({ lesson, record, label }) {
  return (
    <Link to={lessonPath(lesson)} className={`lesson-row ${label ? '' : 'no-label'} ${record ? 'is-done' : ''}`} data-subject={lesson.subjectId}>
      {label && <span className="lesson-unit">{label}</span>}
      <span className="lesson-main">
        <span className="lesson-title">{lesson.title}</span>
        <span className="lesson-summary">{lesson.summary}</span>
      </span>
      <span className="lesson-meta num">{record ? `✓ ${record.score}/${record.total}` : `${lesson.minutes} min`}</span>
    </Link>
  )
}
