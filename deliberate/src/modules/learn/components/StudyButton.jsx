import { useDispatch } from '../../../core/store/ProgressStore'
import { studying } from '../../../subjects/index.js'
import { toggleStudying } from '../api'

// Adds a subject to your daily plan, or removes it.
export default function StudyButton({ subject, following, compact = false }) {
  const dispatch = useDispatch()
  const on = studying(following).includes(subject.id)
  return (
    <button
      type="button"
      className={on ? 'btn btn-quiet' : 'btn'}
      aria-pressed={on}
      aria-label={compact ? `${on ? 'Remove' : 'Add'} ${subject.title} ${on ? 'from' : 'to'} your daily plan` : undefined}
      onClick={() => dispatch(toggleStudying(following, subject.id))}
    >
      {on ? (compact ? '✓ Daily' : '✓ In your daily plan · remove') : compact ? '+ Add to daily' : '+ Add to daily plan'}
    </button>
  )
}
