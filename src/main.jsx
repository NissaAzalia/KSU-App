import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import LoginAdmin from './modules/auth/LoginAdmin.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
