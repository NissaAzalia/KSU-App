import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout'
import Login from '../modules/auth/Login'
import LoginAdmin from '../modules/auth/LoginAdmin'
import DasboardInputSimpanan from '../modules/dasboard/dasboardInputSimpanan'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/dashboard' element={<MainLayout/>} />
        <Route path='/Layout' element={<MainLayout/>} />
        <Route path='/admin' element={<LoginAdmin />} />
        <Route path='/LoginAdmin' element={<LoginAdmin/>}/>
        <Route path='/dashboard' element={<DasboardInputSimpanan/>}/>
        <Route path='/input' element={<DasboardInputSimpanan/>}/>
        {/* write other routes here */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes