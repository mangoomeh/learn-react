import { dayKey } from '../lib/dates'

// The only state shared by every module: total XP, XP earned per day (streaks, heatmap) and
// which subjects are in your daily plan (null until you choose; see studying() in src/subjects/index.js).
export const coreSlice = {
  initial: { xp: 0, activity: {}, following: null },
  reducer(state, action) {
    switch (action.type) {
      case 'core/earn': {
        const today = dayKey()
        return {
          ...state,
          xp: state.xp + action.amount,
          activity: { ...state.activity, [today]: (state.activity[today] || 0) + action.amount },
        }
      }
      case 'core/follow':
        return { ...state, following: action.ids }
      default:
        throw new Error(`Unknown action: ${action.type}`)
    }
  },
}

// Modules award XP by including this in the actions they dispatch.
export const earn = (amount) => ({ type: 'core/earn', amount })

// Set the subjects you're studying (a list of subject ids).
export const follow = (ids) => ({ type: 'core/follow', ids })
