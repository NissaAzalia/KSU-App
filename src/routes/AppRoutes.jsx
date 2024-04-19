import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout'
import Login from '../modules/auth/Login'
import LoginAdmin from '../modules/auth/LoginAdmin'
import DasboardInputSimpanan from '../modules/dasboard/DasboardInputSimpanan'
import DashboardAdmin from '../modules/dashboard/DashboardAdmin'
import DashboardNasabah from '../modules/dashboard/DashboardNasabah'
import { useState } from 'react'

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
              <Route path='/login/admin' element={<LoginAdmin />} />
              <Route path='*' element={<Navigate to={"/"} />} />
            </Route>
            :
            <Route element={<MainLayout />}>
              <Route path='/dashboard' element={<DasboardInputSimpanan />} />
              <Route path='/dashboard/adminn' element={<DashboardAdmin />} />
              <Route path='/dashboard/nasabah' element={<DashboardNasabah />} />
              <Route path='*' element={<Navigate to={"/dashboard"} />} />
            </Route>
        }

        {/* write other routes here */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes