import { dayKey } from '../lib/dates'

// The only state shared by every module: total XP and XP earned per day (streaks, heatmap).
export const coreSlice = {
  initial: { xp: 0, activity: {} },
  reducer(state, action) {
    switch (action.type) {
      case 'core/earn': {
        const today = dayKey()
        return {
          xp: state.xp + action.amount,
          activity: { ...state.activity, [today]: (state.activity[today] || 0) + action.amount },
        }
      }
      default:
        throw new Error(`Unknown action: ${action.type}`)
    }
  },
  fromV1: (old) => ({ xp: old.xp ?? 0, activity: old.activity ?? {} }),
}

// Modules award XP by including this in the actions they dispatch.
export const earn = (amount) => ({ type: 'core/earn', amount })
