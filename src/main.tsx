import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QRProviderWrapper } from './contexts/QRData.context.tsx'
import { AuthProviderWrapper } from './contexts/auth.context.tsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProviderWrapper>
      <QRProviderWrapper>
        <Router>
          <App />
        </Router>
      </QRProviderWrapper>
    </AuthProviderWrapper>
  </StrictMode>,
)
