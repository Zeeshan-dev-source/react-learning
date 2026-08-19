import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ColorChanger.css'
import App from './ColorChanger.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
