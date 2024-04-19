import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout'
import Login from '../modules/auth/Login'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/dashboard' element={<MainLayout/>} />
        <Route path='/Layout' element={<MainLayout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes