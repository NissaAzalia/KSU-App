import { Link, Outlet } from "react-router-dom"
import DasboardInputSimpanan from "../dashboard/dasboardInputSimpanan"
import SideBar from "./SideBar"

const MainLayout = () => {
  return (
    <>
      
    <div className="flex">
    <SideBar/>
    </div>
    </>
  )
}

export default MainLayout