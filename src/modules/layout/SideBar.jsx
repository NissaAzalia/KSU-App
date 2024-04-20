import { Link, Outlet } from "react-router-dom"
import DasboardInputSimpanan from "../dasboard/DasboardInputSimpanan"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {


    return (
        <>
            <div className="text-center bg-white w-[300px] h-screen  ">

                <div className="flex">
                    <img src="src/assets/logoKSU.png" alt="" className="w-[50px]  pl-[15px] pt-[10px] " />
                    <h1 className=" pl-[15px] pt-[13px]  font-bold">Teknika Mandiri</h1>
                </div>

                <Link to={"/daftar-anggota"}>
                    <div className="flex hover:bg-[#2C6975] hover:text-white text-[#626262] w-screen gap-[10px] h-[50px] pt-[10px] pl-[30px] mt-[50px]">
                        <FontAwesomeIcon icon={faUserGroup} className="mt-[5px]" />
                        <Link to={"/daftar-anggota"}><h2 >Daftar Anggota</h2></Link>

                    </div>
                </Link>



                <Link to={"/input-simpanan"} ><div
                    className=" flex hover:bg-[#2C6975] text-[#626262] hover:text-white  w-screen gap-[10px] h-[50px] pt-[10px] pl-[30px] ">
                    <FontAwesomeIcon icon={faUserGroup} className="mt-[5px]" />
                    <h2>Input Simpanan</h2>

                </div></Link>


                <Link to={"/info"}>
                    <div
                        className="flex hover:bg-[#2C6975] hover:text-white text-[#626262]  w-screen gap-[10px] h-[50px] pt-[10px] pl-[30px] ">
                        <FontAwesomeIcon className="mt-[5px]" icon={faUserGroup} />
                        <h2>Info Pinjaman Anggota</h2>
                    </div>
                </Link>


                <Link to={"/"}>
                    <div
                        className=" flex hover:bg-[#2C6975] hover:text-white  w-screen gap-[10px] h-[50px] pt-[10px] px-[100px] mt-[257px] ">
                        <FontAwesomeIcon className="mt-[5px] " icon={faArrowLeft} />
                        <h2>Logout</h2>
                    </div>

                </Link>
            </div>
            <Outlet />



        </>
    )
}

export default SideBar