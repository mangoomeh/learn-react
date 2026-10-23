import { createContext, useContext, useEffect, useReducer } from 'react'
import { coreSlice } from './core'
import { hydrate, loadSaved, save } from './persistence'

// The store knows nothing about individual features. Each module registers a slice
// ({ initial, reducer }) under its id, and owns the actions prefixed with that id,
// e.g. 'learn/complete'. A dispatched array is applied in order as one update, which is how
// a module combines its own action with another module's public action (see each api.js).
function createRootReducer(slices) {
  return function reduce(state, action) {
    if (Array.isArray(action)) return action.reduce(reduce, state)
    if (action.type === 'app/import') return hydrate(action.state, slices)
    if (action.type === 'app/reset') return hydrate(null, slices)
    const owner = action.type.split('/')[0]
    const slice = slices[owner]
    if (!slice) throw new Error(`No module handles action "${action.type}"`)
    const next = slice.reducer(state[owner], action)
    return next === state[owner] ? state : { ...state, [owner]: next }
  }
}

const StoreContext = createContext(null)

export function ProgressProvider({ modules, children }) {
  const slices = { core: coreSlice, ...Object.fromEntries(modules.filter((m) => m.slice).map((m) => [m.id, m.slice])) }
  const [state, dispatch] = useReducer(createRootReducer(slices), slices, (s) => hydrate(loadSaved(), s))

  useEffect(() => {
    save(state)
  }, [state])

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('Store hooks must be used inside <ProgressProvider>')
  return ctx
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDispatch() {
  return useStore().dispatch
}

// A module reads only its own slice: useSlice('learn').
// eslint-disable-next-line react-refresh/only-export-components
export function useSlice(id) {
  return useStore().state[id]
}

// Whole-state access is for the app shell (dashboards, backup), not for modules.
// eslint-disable-next-line react-refresh/only-export-components
export function useWholeState() {
  return useStore().state
}
