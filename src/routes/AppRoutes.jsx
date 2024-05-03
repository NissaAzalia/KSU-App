import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout'
import Login from '../modules/auth/Login'
import DasboardInputSimpanan from '../modules/dashboard/DasboardInputSimpanan '
import DashboardAdmin from '../modules/dashboard/DashboardAdmin'
import DashboardNasabah from '../modules/dashboard/DashboardNasabah'
import { useState } from 'react'
import SideBar from '../modules/layout/SideBar'
import InfoDashboard from '../modules/dashboard/InfoDashboard'
import PinjamMobil from '../modules/layout/PinjamMobil'
import BeliBarang from '../modules/layout/BeliBarang'
import Servis from '../modules/layout/Servis'
// import InputTambah from '../modules/dashboard/InputTambah'
import LoginNasabah from '../modules/auth/LoginNasabah'
import PinjamUang from '../modules/layout/PinjamUang'
import InputPinjam from '../modules/dashboard/InputPinjam'

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
              <Route path='/login-nasabah' element={<LoginNasabah />} />
              <Route path='*' element={<Navigate to={"/"} />} />
            </Route>
            :
            <Route element={<MainLayout />}>
              <Route path='/daftar-anggota' element={<DashboardAdmin />} />
              {/* <Route path='/input-simpanan' element={<DasboardInputSimpanan />} /> */}
              <Route path='/info' element={<InfoDashboard />} />
              {/* <Route path='/input-tambah' element={<InputTambah />} /> */}
              <Route path='*' element={<Navigate to={"/daftar-anggota"} />} />
            </Route>
            

        }
        <Route path='nasabah' element={<DashboardNasabah/>} />
        <Route path='pinjaman-uang' element={<PinjamUang/>} />
        <Route path='pinjam-mobil' element={<PinjamMobil/>} />
        <Route path='beli-barang' element={<BeliBarang/>} />
        <Route path='servis' element={<Servis/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes