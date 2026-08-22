import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CharacterCounter.css'
import App from './CharacterCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
