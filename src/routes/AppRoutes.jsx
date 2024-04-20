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
        {/* <Route path='' element={<DashboardNasabah/>} /> */}

        {/* write other routes here */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes