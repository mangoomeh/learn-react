import { useDispatch } from '../../../core/store/ProgressStore'
import { studying } from '../../../subjects/index.js'
import { toggleStudying } from '../api'

// Adds a subject to the ones you're studying, or removes it.
export default function StudyButton({ subject, following, compact = false }) {
  const dispatch = useDispatch()
  const on = studying(following).includes(subject.id)
  return (
    <button
      type="button"
      className={on ? 'btn btn-quiet' : 'btn'}
      aria-pressed={on}
      aria-label={compact ? `${on ? 'Stop studying' : 'Study'} ${subject.title}` : undefined}
      onClick={() => dispatch(toggleStudying(following, subject.id))}
    >
      {on ? (compact ? '✓ Studying' : '✓ Studying · remove') : '+ Study this'}
    </button>
  )
}
