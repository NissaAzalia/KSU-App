import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faArrowLeft, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useAuth } from "../auth/Auth";

const SideBar = () => {
    const { doLogout } = useAuth()
    const [bar, setBar] = useState(false);

    const closeBar = () => {
        setBar(false);
    }

    return (
        <>
        
        {!bar && (
            <div onClick={() => setBar(!bar)} className="flex absolute fixed mx-[50px]">
                <div className="flex gap-[25px]">
                    <span className="text-[#222a] md:text-2xl text-2xl md:mt-[70%] mt-[7%] cursor-pointer hover:text-[#7D7D7D]"><FontAwesomeIcon icon={faBars} /></span>
                </div>
            </div>
            )}

            {bar && (
                <div className="flex flex-col text-center bg-[#fafafa] min-w-[274px] h-screen pb-25px]">
                    <div className="flex pl-[15px] pt-[10px] pr-[15px]">
                        <div className="flex">
                            <img src="src/assets/logoKSU.png" alt="" className="w-[50px]" />
                            <h1 className="pl-[15px] pt-[13px] font-bold">Teknika Mandiri</h1>
                        </div>
                        <button className="top-1 left-1 text-gray-500 hover:text-gray-700 pl-[30px]" onClick={closeBar}><FontAwesomeIcon icon={faXmark} size="xl" /></button>
                    </div>
                    <div className="flex flex-col justify-between text-center bg-[#fafafa] min-w-[274px] h-screen pb-[50px]">
                        <div className="mt-[40px]">
                            <NavLink to="/daftar-anggota" className="animate w-[274px] flex hover:bg-[#2C6975] text-[#626262] hover:text-white gap-[10px] h-[50px] pt-[10px] pl-[30px]">
                                <FontAwesomeIcon icon={faUserGroup} className="pt-[5px]" />
                                Daftar Anggota
                            </NavLink>
                            <NavLink to="/info" className="animate w-[274px] flex hover:bg-[#2C6975] text-[#626262] hover:text-white gap-[10px] h-[50px] pt-[10px] pl-[30px]">
                                <FontAwesomeIcon icon={faUserGroup} className="pt-[5px]" />
                                Info Pinjaman
                            </NavLink>
                        </div>
                        <NavLink to="/">
                            <div
                             className="animate flex hover:bg-[#2C6975] hover:text-white gap-[10px] h-[50px] pt-[10px] px-[100px]"
                             onClick={ () => doLogout() }
                             >
                                <FontAwesomeIcon className="mt-[5px]" icon={faArrowLeft} />
                                <h2>Logout</h2>
                            </div>
                        </NavLink>
                    </div>
                </div>
            )}

              <Outlet />
        </>
    );
    
         
         
}

export default SideBar;