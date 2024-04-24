import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout'
import Login from '../modules/auth/Login'
import LoginAdmin from '../modules/auth/LoginAdmin'
import DasboardInputSimpanan from '../modules/dashboard/DasboardInputSimpanan '
import DashboardAdmin from '../modules/dashboard/DashboardAdmin'
import DashboardNasabah from '../modules/dashboard/DashboardNasabah'
import { useState } from 'react'
import SideBar from '../modules/layout/SideBar'
import InfoDashboard from '../modules/dashboard/InfoDashboard'
import PinjamBiasa from '../modules/layout/PinjamBiasa'
import PinjamTalangan from '../modules/layout/PinjamTalangan'
import PinjamMobil from '../modules/layout/PinjamMobil'
import BeliBarang from '../modules/layout/BeliBarang'
import Servis from '../modules/layout/Servis'

const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogin(val) {
    setIsLoggedIn(val)
  }

  return (
    <BrowserRouter>
      <Routes>
        {
          isLoggedIn !== true?

            <Route>
              <Route path='/' element={<Login login={handleLogin} />} />
              <Route path='/Login' element={<Login login={handleLogin}/>} />
              <Route path='/login-admin' element={<LoginAdmin />} />
              <Route path='*' element={<Navigate to={"/"} />} />
            </Route>
            :
            <Route element={<MainLayout />}>
              <Route path='/daftar-anggota' element={<DashboardAdmin />} />
              <Route path='/input-simpanan' element={<DasboardInputSimpanan />} />
              <Route path='/info' element={<InfoDashboard />} />
              <Route path='*' element={<Navigate to={"/daftar-anggota"} />} />
            </Route>
        }
        <Route path='nasabah1' element={<DashboardNasabah/>} />
        <Route path='biasa' element={<PinjamBiasa/>} />
        <Route path='talangan' element={<PinjamTalangan/>} />
        <Route path='mobil' element={<PinjamMobil/>} />
        <Route path='barang' element={<BeliBarang/>} />
        <Route path='servis' element={<Servis/>} />


        





        {/* write other routes here */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes