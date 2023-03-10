import { BrowserRouter as Router } from 'react-router-dom'
import { Suspense } from 'react'
import PrivateRoutes from './privates.routes'
import PublicRoutes from './public.routes'
import { useAuth } from '@/contexts/AuthContext'

export default () => {
  const { status, userId } = useAuth()

  console.log({ status })

  return (
    <Router basename='/da-pay-web'>
      <Suspense fallback={<div>loading...</div>}>
        {(status === 'authenticated' && userId) ? <PrivateRoutes /> : <PublicRoutes />}
      </Suspense>
    </Router>
  )
}
