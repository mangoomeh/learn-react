import { createContext, useContext, useEffect, useReducer } from 'react'
import { dayKey } from '../lib/dates'
import { newCard, schedule } from '../lib/srs'
import { XP } from '../lib/xp'

const STORAGE_KEY = 'deliberate:v1'

const initialState = {
  version: 1,
  xp: 0,
  activity: {}, // { 'YYYY-MM-DD': xpEarnedThatDay }
  lessons: {}, // { lessonId: { completedOn, score, total } }
  cards: {}, // { cardId: srs state } — a card enters the deck when its lesson is completed
  challenges: {}, // { 'YYYY-MM-DD': [{ id, correct, rating }] }
  reflections: [], // [{ id, date, prompt, text, source }]
  decisions: [], // [{ id, date, title, options, choice, reasoning, expected, confidence, reversible, reviewOn, outcome? }]
  calibration: [], // [{ id, date, confidence, correct }] from the calibration quiz
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return initialState
    return { ...initialState, ...JSON.parse(raw) }
  } catch {
    return initialState
  }
}

function earn(state, amount) {
  const today = dayKey()
  return {
    ...state,
    xp: state.xp + amount,
    activity: { ...state.activity, [today]: (state.activity[today] || 0) + amount },
  }
}

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36)

function reducer(state, action) {
  switch (action.type) {
    case 'completeLesson': {
      const { lessonId, score, total, cardIds } = action
      const first = !state.lessons[lessonId]
      const prev = state.lessons[lessonId]
      const cards = { ...state.cards }
      for (const id of cardIds) if (!cards[id]) cards[id] = newCard()
      const next = {
        ...state,
        cards,
        lessons: {
          ...state.lessons,
          [lessonId]: {
            completedOn: prev?.completedOn || dayKey(),
            score: Math.max(score, prev?.score || 0),
            total,
          },
        },
      }
      // Retaking a lesson only pays for improvements, so XP can't be farmed.
      const gained = (first ? XP.lesson : 0) + Math.max(0, score - (prev?.score || 0)) * XP.quizCorrect
      return gained ? earn(next, gained) : next
    }
    case 'gradeCard': {
      const card = state.cards[action.cardId] || newCard()
      return earn(
        { ...state, cards: { ...state.cards, [action.cardId]: schedule(card, action.grade) } },
        XP.card,
      )
    }
    case 'logChallenge': {
      const today = dayKey()
      const log = state.challenges[today] || []
      if (log.some((c) => c.id === action.id)) return state
      const entry = { id: action.id, correct: action.correct, rating: action.rating }
      return earn(
        { ...state, challenges: { ...state.challenges, [today]: [...log, entry] } },
        XP.challenge,
      )
    }
    case 'addReflection': {
      const entry = { id: uid(), date: dayKey(), prompt: action.prompt, text: action.text, source: action.source }
      return earn({ ...state, reflections: [entry, ...state.reflections] }, XP.reflection)
    }
    case 'deleteReflection':
      return { ...state, reflections: state.reflections.filter((r) => r.id !== action.id) }
    case 'addDecision': {
      const entry = { id: uid(), date: dayKey(), ...action.decision }
      return earn({ ...state, decisions: [entry, ...state.decisions] }, XP.decision)
    }
    case 'reviewDecision': {
      const decisions = state.decisions.map((d) =>
        d.id === action.id ? { ...d, outcome: { ...action.outcome, reviewedOn: dayKey() } } : d,
      )
      return earn({ ...state, decisions }, XP.review)
    }
    case 'deleteDecision':
      return { ...state, decisions: state.decisions.filter((d) => d.id !== action.id) }
    case 'logCalibration': {
      const entry = { id: action.id, date: dayKey(), confidence: action.confidence, correct: action.correct }
      return earn({ ...state, calibration: [...state.calibration, entry] }, XP.calibration)
    }
    case 'import':
      return { ...initialState, ...action.state }
    case 'reset':
      return initialState
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, load)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Storage can be unavailable (private mode, blocked site data); the app still works in-memory.
    }
  }, [state])

  return <ProgressContext.Provider value={{ state, dispatch }}>{children}</ProgressContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used inside <ProgressProvider>')
  return ctx
}
