import {  Routes, Route } from 'react-router-dom'
import { lazy } from 'react'

const DashBoard = lazy(() => import('@/pages/Dashboard'))


const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<DashBoard />} />
    </Routes>
  )
}

export default PrivateRoutes;
