import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToggleButton from './ToggleButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleButton />
  </StrictMode>,
)
