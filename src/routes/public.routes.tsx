import {  Routes, Route } from 'react-router-dom'
import { lazy } from 'react'

const SignIn = lazy(() => import('@/pages/SignIn'))
const SingUp = lazy(() => import('@/pages/SignUp'))

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/criar-conta' element={<SingUp />} />
    </Routes>
  )
}

export default PublicRoutes;
