import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout'
import Login from '../modules/auth/Login'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        {/* write other routes here */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes