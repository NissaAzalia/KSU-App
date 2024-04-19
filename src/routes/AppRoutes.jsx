import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout'
import Login from '../modules/auth/Login'
import LoginAdmin from '../modules/auth/LoginAdmin'
import DasboardInputSimpanan from '../modules/dasboard/dasboardInputSimpanan'
import DashboardAdmin from '../modules/dashboard/DashboardAdmin'
import DashboardNasabah from '../modules/dashboard/DashboardNasabah'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/admin' element={<LoginAdmin />} />
        <Route element={<MainLayout />}>
          <Route path='/dashboard' element={<DasboardInputSimpanan />} />
          <Route path='/dashboard/admin' element={<DashboardAdmin />} />
          <Route path='/dashboard/nasabah' element={<DashboardNasabah />} />
        </Route>



        {/* write other routes here */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes