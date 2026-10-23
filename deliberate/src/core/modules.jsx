import { createContext, useContext } from 'react'

// The list of registered modules (see src/app/modules.js), provided by the app shell.
// Pages that aggregate across modules (Today, Stats, Review) read contributions from it
// instead of importing other modules directly.
const ModulesContext = createContext([])

export function ModulesProvider({ modules, children }) {
  return <ModulesContext.Provider value={modules}>{children}</ModulesContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModules() {
  return useContext(ModulesContext)
}
