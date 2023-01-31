import { BrowserRouter as Router } from 'react-router-dom'
import { Suspense } from 'react'
import PrivateRoutes from './privates.routes'
import PublicRoutes from './public.routes'
import { useAuth } from '@/contexts/AuthContext'

export default () => {
  const { isAuthenticated } = useAuth()

  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        {!isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
      </Suspense>
    </Router>
  )
}
