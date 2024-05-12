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
import { useTransition } from 'react'

const AppRoutes = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [otority,setOtority] = useState(null);

  function handleLogin(val) {
    setIsLoggedIn(val)
  }

  function handleOtority(val){
    setOtority(val);
  }

  console.log(otority)

  return (
    <BrowserRouter>
      <Routes>
        {
          isLoggedIn !== true ?

            <Route>
              <Route path='admin' element={<Login Oty={handleOtority} login={handleLogin} />} />
              <Route path='login' element={<LoginNasabah Oty={handleOtority} login={handleLogin}/>} />
              <Route path='*' element={<Navigate to={"/login"} />} />
            </Route>
            :
            <Route>
              {
                otority === 'Admin' ? 

                <Route element={<MainLayout />}>
                <Route path='daftar-anggota' element={<DashboardAdmin />} />
                {/* <Route path='/input-simpanan' element={<DasboardInputSimpanan />} /> */}
                <Route path='info' element={<InfoDashboard />} />
                {/* <Route path='/input-tambah' element={<InputTambah />} /> */}
                <Route path='*' element={<Navigate to={"/daftar-anggota"} />} />
              </Route>

              :
              <Route>
              <Route path='nasabah' element={<DashboardNasabah />} />
              <Route path='*' element={<Navigate to={"/nasabah"} />} />
            </Route>
              }
            </Route>

        }
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
