import { NavLink, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const SideBar = () => {
    
    return (
        <>

            <div className=" text-center bg-white min-w-[274px] h-screen" >



                <div className="flex fixed justify-between  pl-[15px] pt-[10px] pr-[15px]">
                    <div className="flex">
                        <img src="src/assets/logoKSU.png" alt="" className="w-[50px]  " />
                        <h1 className=" pl-[15px] pt-[13px]  font-bold">Teknika Mandiri</h1>
                    </div>

                    <button className="ml-[40px] mt-[5px]">
                        <FontAwesomeIcon icon={faBars} size="lg" style={{ color: "#000000" }} />
                    </button>
                </div>

                <div className=" mt-[80px] fixed">
                    <NavLink to={"/daftar-anggota"} className="animate w-[274px] flex hover:bg-[#2C6975] text-[#626262] hover:text-white gap-[10px] h-[50px] pt-[10px] pl-[30px] "
                        style={({ isActive }) => ({
                            background: isActive ? "#2C6975" : "transparent",
                            color: isActive ? "white" : "#626262"
                        })}>
                        <FontAwesomeIcon icon={faUserGroup} className="pt-[5px]" />
                        Daftar Anggota
                    </NavLink>



                    <NavLink to={"/info"} className="animate w-[274px] flex hover:bg-[#2C6975] text-[#626262] hover:text-white gap-[10px] h-[50px] pt-[10px] pl-[30px] " style={({ isActive }) => ({
                        background: isActive ? "#2C6975" : "transparent",
                        color: isActive ? "white" : "#626262"
                    })}>
                        <FontAwesomeIcon icon={faUserGroup} className="pt-[5px]" />
                        Info Pinjaman
                    </NavLink>

                    {/* <NavLink to={"/input-tambah"} className="animate w-[274px] flex hover:bg-[#2C6975] text-[#626262] hover:text-white gap-[10px] h-[50px] pt-[10px] pl-[30px] " style={({ isActive }) => ({
                        background: isActive ? "#2C6975" : "transparent",
                        color: isActive ? "white" : "#626262"
                    })}>
                        <FontAwesomeIcon icon={faUserGroup} className="pt-[5px]" />
                        Tambah Anggota
                    </NavLink> */}
                </div>

                <NavLink to={"/"}>
                    <div
                        className="animate fixed  flex hover:bg-[#2C6975] hover:text-wh ite gap-[10px]  h-[50px] pt-[10px] px-[100px] mt-[500px] ">
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