// Saved progress lives in localStorage, with each module's slice under its own key.
const KEY = 'deliberate'

export function loadSaved() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function save(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // Storage can be unavailable (private mode, blocked site data); the app still works in-memory.
  }
}

// Turns saved or imported data (or nothing) into full state for the given slices.
// Slices missing from the saved data start fresh, so adding a module never breaks a save.
export function hydrate(saved, slices) {
  const state = {}
  for (const [id, slice] of Object.entries(slices)) state[id] = { ...slice.initial, ...saved?.[id] }
  return state
}

export function isBackup(data) {
  return typeof data === 'object' && data !== null && typeof data.core?.xp === 'number'
}
