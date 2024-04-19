import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import LoginAdmin from './modules/auth/LoginAdmin.jsx'
import Login from './modules/auth/Login.jsx'
import DashboardAdmin from './modules/dashboard/DashboardAdmin.jsx'
import DashboardNasabah from './modules/dashboard/DashboardAdmin.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
    {/* <AppRoutes /> */}
    <DashboardAdmin/>
   <DashboardNasabah/>

  </React.StrictMode>,
)
