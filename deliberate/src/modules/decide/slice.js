import { dayKey } from '../../core/lib/dates'

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36)

// {
//   decisions: [{ id, date, title, options, choice, reasoning, expected, confidence, reversible, state, reviewOn, outcome? }],
//   calibration: [{ id, date, confidence, correct }] from the calibration practice quiz
// }
export const slice = {
  initial: { decisions: [], calibration: [] },
  reducer(state, action) {
    switch (action.type) {
      case 'decide/add':
        return { ...state, decisions: [{ id: uid(), date: dayKey(), ...action.decision }, ...state.decisions] }
      case 'decide/review':
        return {
          ...state,
          decisions: state.decisions.map((d) =>
            d.id === action.id ? { ...d, outcome: { ...action.outcome, reviewedOn: dayKey() } } : d,
          ),
        }
      case 'decide/delete':
        return { ...state, decisions: state.decisions.filter((d) => d.id !== action.id) }
      case 'decide/calibrate': {
        const entry = { id: action.id, date: dayKey(), confidence: action.confidence, correct: action.correct }
        return { ...state, calibration: [...state.calibration, entry] }
      }
      default:
        throw new Error(`Unknown action: ${action.type}`)
    }
  },
  fromV1: (old) => ({ decisions: old.decisions ?? [], calibration: old.calibration ?? [] }),
}

export const decisionsDue = (s, today = dayKey()) => s.decisions.filter((d) => !d.outcome && d.reviewOn && d.reviewOn <= today)
