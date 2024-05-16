import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout'
import Login from '../modules/auth/Login'
import DashboardAdmin from '../modules/dashboard/DashboardAdmin'
import DashboardNasabah from '../modules/dashboard-nasabah/DashboardNasabah'
import InfoDashboard from '../modules/dashboard/InfoDashboard'
import LoginNasabah from '../modules/auth/LoginNasabah'
import { useAuth } from '../modules/auth/Auth'
import { DasboardNasabahProvider } from '../modules/dashboard-nasabah/DashboardNasabahProvider'

const AppRoutes = () => {

  const {authority, isLoggedin,doLogout} = useAuth();


  const handleLogout = () => {
    doLogout()
  }

  return (
    <BrowserRouter>
      <Routes>
        {
          isLoggedin !== true ?
            // jika belum login
            <Route>
              <Route path='admin' element={<Login  />} />
              <Route path='login' element={<LoginNasabah />} />
              <Route path='*' element={<Navigate to={"/login"} />} />
            </Route>

            :
            // jika sudah login
            <Route>
              {
                authority === 'Admin' ?
                  // jika yang login adalah admin
                  <Route element={<MainLayout />}>
                    <Route path='daftar-anggota' element={<DashboardAdmin />} />
                    {/* <Route path='/input-simpanan' element={<DasboardInputSimpanan />} /> */}
                    <Route path='info' element={<InfoDashboard />} />
                    {/* <Route path='/input-tambah' element={<InputTambah />} /> */}
                    <Route path='*' element={<Navigate to={"/daftar-anggota"} />} />
                  </Route>

                  :
                  // jika yang login bukan admin
                  <Route>
                    <Route path='nasabah' element={
                      <DasboardNasabahProvider>
                        <DashboardNasabah doLogout={handleLogout}/>
                      </DasboardNasabahProvider>
                      } />
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
