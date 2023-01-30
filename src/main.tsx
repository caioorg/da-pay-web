import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@/routes'
import { NotificationToastProvider } from '@/contexts/NotificationToast'
import { AuthContextProvider } from '@/contexts/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NotificationToastProvider>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </NotificationToastProvider>
  </React.StrictMode>,
)
