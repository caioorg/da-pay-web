import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@/routes'
import { AuthContextProvider } from '@/contexts/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  </React.StrictMode>,
)
