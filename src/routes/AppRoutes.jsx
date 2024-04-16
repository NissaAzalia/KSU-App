import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../modules/layout/MainLayout'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />} />
        {/* write other routes here */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes