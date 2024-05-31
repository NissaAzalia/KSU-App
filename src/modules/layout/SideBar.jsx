import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faBars, faXmark, faArrowRightFromBracket, faMoneyCheck, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
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


            <div className="sidebar1 flex fixed my-[-15px] mx-[25px] bg-[#ffffff] w-[100%] ml-[-1px] shadow-sm">
                <div className="flex items-center m-[20px] mb-[10px] gap-5">
                    {!bar && (
                        <span onClick={() => setBar(!bar)} className="text-[#222a] flex items-center justify-center align-middle cursor-pointer  hover:text-[#7D7D7D]"><FontAwesomeIcon className="h-[25px] " icon={faBars} /></span>
                    )}  <div className="flex items-center gap-5">
                        <img src="src/assets/logoKSU.png" alt="" className="h-10 w-10 wml-[20px]" />
                        <p className="  font-bold ">KOPERASI Konsumen <br /><span className="text-[15px] text-[#797979]"> KSU TEKNIKA MANDIRI</span> </p>
                    </div>

                </div>
            </div>

            {bar && (

                <div className="flex flex-col bg-[#f4f4f4] w-[340px] mr-[25px] overflow-hidden h-screen pb-[25px] " >p</div>
            )}


            {bar && (

                <div className="flex fixed flex-col bg-[#fafafa] w-[300px] overflow-hidden h-screen pb-[25px] border-r-[3px] border-gray-200 " >
                    <div className="flex justify-between pl-[15px] pt-[10px] pr-[15px]">
                        <div className="flex">
                            <img src="src/assets/logoKSU.png" alt="" className="w-[50px] h-[50px] mt-[10px]" />
                            <h1 className="pl-[20px] pt-[13px] font-bold text-[15px] "> Koperasi Konsumen <span className="text-[13px] text-[#797979]"> KSU TEKNIKA MANDIRI</span> </h1>
                        </div>
                        <button className="top-1 left-1 text-gray-500 hover:text-gray-700 pl-[30px]" onClick={closeBar}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                    <div className="flex flex-col justify-between text-center bg-[#fafafa] min-w-[274px] h-screen pb-[50px] p-[25px]">
                        <div className="flex flex-col mt-[20px] gap-3 overflow-x-hidden">
                            <div className="flex items-start mb-[5px]">
                                <h1 className="text-gray-500 font-bold font-sans font-sm">MAIN MENU</h1>
                            </div>
                            <NavLink
                                to="/daftar-anggota"
                                className={({ isActive }) =>
                                    `animate w-[250px] flex rounded-md ${isActive ? 'bg-[#47a3b6] text-white' : 'hover:bg-[#47a4b674] text-[#626262] hover:text-white'} gap-[10px] h-[45px] pt-[10px] pl-[10px]`
                                }
                            >
                                <FontAwesomeIcon icon={faUserGroup} className="pt-[5px]" />
                                Daftar Anggota
                            </NavLink>
                            <NavLink
                                to="/daftar-simpanan"
                                className={({ isActive }) =>
                                    `animate w-[250px] flex rounded-md ${isActive ? 'bg-[#47a3b6] text-white' : 'hover:bg-[#47a4b682] text-[#626262] hover:text-white'} gap-[10px] h-[45px] pt-[10px] pl-[10px]`
                                }
                            >
                               
                                <FontAwesomeIcon icon={faMoneyCheck} style={{ marginTop:'-5px'}} className="pt-[5px]" />
                                Daftar Simpanan
                            </NavLink>
                            <NavLink
                                to="/info"
                                className={({ isActive }) =>
                                    `animate w-[250px] flex rounded-md ${isActive ? 'bg-[#47a3b6] text-white' : 'hover:bg-[#47a4b682] text-[#626262] hover:text-white'} gap-[10px] h-[45px] pt-[10px] pl-[10px]`
                                }
                            >
                             
                                <FontAwesomeIcon icon={faMoneyBillTransfer}  style={{ marginTop:'-5px'}} className="pt-[5px]" />
                                Info Pinjaman
                            </NavLink>
                        </div>
                        <NavLink to="/">
                            <div className="border-gray-400 border-t-[1px] "><p className="text-white">.</p></div>
                            <div
                                className="animate flex bg-[#2C6975] rounded-md hover:bg-[#419aab] text-white gap-[10px] h-[45px] pt-[10px] px-[130px] ml-[0] pl-[85px]"
                                onClick={() => doLogout()}
                            >
                                <h2>Logout</h2>
                                <FontAwesomeIcon icon={faArrowRightFromBracket} size='md' style={{ marginTop:'4px', color: "#f4f4f4", transform: "scaleX(-1)" }} />
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