import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout'
import LoginAdmin from '../modules/auth/LoginAdmin'
import DasboardInputSimpanan from '../modules/dasboard/dasboardInputSimpanan'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginAdmin />} />
        <Route path='/LoginAdmin' element={<LoginAdmin/>}/>
        <Route path='/dashboard' element={<DasboardInputSimpanan/>}/>
        <Route path='/input' element={<DasboardInputSimpanan/>}/>
        {/* write other routes here */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes