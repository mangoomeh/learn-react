import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ProgressProvider } from './core/store/ProgressStore'
import { ModulesProvider } from './core/modules'
import { modules } from './app/modules'
import App from './app/App'
import './core/styles/base.css'
import './app/app.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ModulesProvider modules={modules}>
        <ProgressProvider modules={modules}>
          <App />
        </ProgressProvider>
      </ModulesProvider>
    </HashRouter>
  </StrictMode>,
)
