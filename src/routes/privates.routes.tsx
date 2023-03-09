import {  Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import Layout from '@/common/components/Layout'

const DashBoard = lazy(() => import('@/pages/Dashboard'))
const Entry = lazy(() => import('@/pages/Entry'))


const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<DashBoard />} />
        <Route path='/lancamento' element={<Entry />} />
      </Route>
    </Routes>
  )
}

export default PrivateRoutes;
