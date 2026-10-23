// Saved progress lives in localStorage. Version 1 was one flat object shared by every
// feature; version 2 stores each module's slice under its own key.
const KEY_V1 = 'deliberate:v1'
const KEY_V2 = 'deliberate:v2'

export function loadSaved() {
  try {
    const raw = localStorage.getItem(KEY_V2) ?? localStorage.getItem(KEY_V1)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function save(state) {
  try {
    localStorage.setItem(KEY_V2, JSON.stringify({ version: 2, ...state }))
  } catch {
    // Storage can be unavailable (private mode, blocked site data); the app still works in-memory.
  }
}

const isV1 = (saved) => saved.version === 1 || (saved.version === undefined && 'xp' in saved)

// Turns anything saved or imported (v1, v2, or nothing) into full state for the given slices.
// Slices missing from the saved data start fresh, so adding a module never breaks old saves.
export function hydrate(saved, slices) {
  const state = {}
  for (const [id, slice] of Object.entries(slices)) {
    if (!saved) state[id] = slice.initial
    else if (isV1(saved)) state[id] = slice.fromV1 ? slice.fromV1(saved) : slice.initial
    else state[id] = { ...slice.initial, ...saved[id] }
  }
  return state
}

export function isBackup(data) {
  return typeof data === 'object' && data !== null && (data.version === 2 || isV1(data))
}
