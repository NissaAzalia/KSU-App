import { NavLink, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {


    return (
        <>
            <div className="text-center  bg-white w-[350px] h-screen  ">

                <div className="flex fixed">
                    <img src="src/assets/logoKSU.png" alt="" className="w-[50px]  pl-[15px] pt-[10px] " />
                    <h1 className=" pl-[15px] pt-[13px]  font-bold">Teknika Mandiri</h1>
                </div>

                <div className=" mt-[80px] fixed">
                    <NavLink to={"/daftar-anggota"} className="animate w-[274px] flex hover:bg-[#2C6975] text-[#626262] hover:text-white gap-[10px] h-[50px] pt-[10px] pl-[30px] "
                        style={({ isActive }) => ({
                            background: isActive ? "#2C6975" : "transparent",
                            color: isActive ? "white" : "#626262"
                        })}>
                        <FontAwesomeIcon icon={faUserGroup} className="mt-[5px]" />
                        Daftar Anggota
                    </NavLink>

                    <NavLink to={"/input-simpanan"} className="animate w-[274px] flex hover:bg-[#2C6975] text-[#626262] hover:text-white gap-[10px] h-[50px] pt-[10px] pl-[30px] "
                        style={({ isActive }) => ({
                            background: isActive ? "#2C6975" : "transparent",
                            color: isActive ? "white" : "#626262"
                        })}>
                        <FontAwesomeIcon icon={faUserGroup} className="mt-[5px]" />
                        Input Simpanan
                    </NavLink>

                    <NavLink to={"/info"} className="animate w-[271px] flex hover:bg-[#2C6975] text-[#626262] hover:text-white gap-[10px] h-[50px] pt-[10px] pl-[30px] " style={({ isActive }) => ({
                        background: isActive ? "#2C6975" : "transparent",
                        color: isActive ? "white" : "#626262"
                    })}>
                        <FontAwesomeIcon icon={faUserGroup} className="mt-[5px]" />
                        Info Pinjaman 
                    </NavLink>
                </div>

                <NavLink to={"/"}>
                    <div
                        className="animate w-[274px] fixed  flex hover:bg-[#2C6975] hover:text-white gap-[10px]  h-screen pt-[10px] px-[100px] mt-[500px] ">
                        <FontAwesomeIcon className="mt-[5px] " icon={faArrowLeft} />
                        <h2>Logout</h2>
                    </div>
                </NavLink>
            </div>

            <Outlet />
        </>
    )
}

export default SideBar