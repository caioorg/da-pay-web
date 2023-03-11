import { BrowserRouter as Router } from 'react-router-dom'
import { Suspense } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import Loading from '@/common/components/Loading'
import PrivateRoutes from './privates.routes'
import PublicRoutes from './public.routes'


export default () => {
  const { status, userId } = useAuth()

  return (
    <Router basename='/da-pay-web'>
      <Suspense fallback={<Loading />}>
        {(status === 'authenticated' && userId) ? <PrivateRoutes /> : <PublicRoutes />}
      </Suspense>
    </Router>
  )
}
