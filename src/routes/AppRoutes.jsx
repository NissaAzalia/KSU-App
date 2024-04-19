import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout'
import Login from '../modules/auth/Login'
import DashboardAdmin from '../modules/dashboard/DashboardAdmin'
import DashboardNasabah from '../modules/dashboard/DashboardNasabah'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/dashboard/admin' element={<DashboardAdmin />} />
        <Route path='/dashboard/nasabah' element={<DashboardNasabah />} />
        
        {/* write other routes here */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes