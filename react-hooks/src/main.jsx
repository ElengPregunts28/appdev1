import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FetchPosts from './FetchPosts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchPosts />
  </StrictMode>,
)
