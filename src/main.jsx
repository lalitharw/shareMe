import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Provider
import { GoogleUserDataProvider } from './context/context.jsx'

// react router dom
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleUserDataProvider>
      <App />
    </GoogleUserDataProvider>
    </BrowserRouter>
  </StrictMode>,
)
