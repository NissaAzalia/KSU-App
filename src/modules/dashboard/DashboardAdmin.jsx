import { faMagnifyingGlass, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';


const DashboardAdmin = () => {

    const [showForm, setShowForm] = useState(false);
    
    return (
        <div className="bg-[#F4F4F4] w-screen h-full ">
            <div className="rounded-xl h-[80px] ml-[50px] w-[850px] bg-gradient-to-r from-[#2C6975] to-[#52C5DB]  " >

                <div className="mx-[30px] py-[5px] mt-[25px]  ">
                    <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
                </div>
            </div>

            <div className="ml-[50px] mt-[50px]">
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Daftar Anggota Koperasi</h2>

                <div className="flex  pt-[10px] mb-[25px]">
                    <input className="rounded-l w-[600px] h-[40px] border-solid border-[1px]  shadow-lg" type="text" placeholder="" />
                    <div className="ml-[-30px] mt-[8px]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>

                {showForm && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px] ">
                            <button
                                className=" top-1 left-1 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowForm(false)}
                            >
                                X
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Simpanan</h1>
                        <div className="flex flex-col gap-6 ">
                            <input type="text" placeholder="Nama" className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" />
                            <input type="number" placeholder="Nominal" className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" />
                            <div>
                                <select className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]">
                                    <option disabled selected value="">Pilih Simpanan</option>
                                    <option value="pokok">Simpanan Pokok</option>
                                    <option value="wajib">Simpanan Wajib</option>
                                    <option value="sukarela">Simpanan Sukarela</option>
                                    <option value="hari raya">Simpanan Hari Raya</option>
                                </select>
                            </div>
                            <button className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                )}
                <div className=" mb-[30px]  ">
                    <button
                        className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px] mb-[20px]"
                        onClick={() => setShowForm(!showForm)}
                    >
                        {showForm ? '' : 'Input Simpanan'}
                    </button>
                </div>

            </div>

            <div className="ml-[50px] mt-[30px]">
                <table cellPadding={10} className="mb-10  ">
                    <tr className=''>
                        <th className="border border-gray-600  border-b-0" colspan="1"><div className="mt-[40px]  w-[170px]">Nama</div></th>
                        <th className="border border-gray-600 " colspan="4">Simpanan</th>
                        <th className="border border-gray-600 border-b-0 "><div className="mt-[40px]  w-[170px]">Action</div></th>
                    </tr>
                    <tr className="">
                        <th className=" border border-[#7D7D7D] border-t-0"></th>
                        <th className="border border-[#7D7D7D] px-[30px]">Pokok</th>
                        <th className=" border border-[#7D7D7D] px-[30px]">Wajib</th>
                        <th className=" border border-[#7D7D7D] px-[30px]">Sukarela</th>
                        <th className=" border border-[#7D7D7D] px-[30px]">Hari Raya</th>
                        <th className=" border border-[#7D7D7D] border-t-0"></th>
                    </tr>
                    <tr>
                        <td className="border border-[#7D7D7D] bg-white"></td>
                        <td className="border border-[#7D7D7D] bg-white"></td>
                        <td className="border border-[#7D7D7D] bg-white"></td>
                        <td className="border border-[#7D7D7D] bg-white"></td>
                        <td className="border border-[#7D7D7D] bg-white"></td>
                        <td className="border border-[#7D7D7D] bg-white">

                            <div className='flex'>
                                <div className="bg-[#D9D9D9] mx-[65px] w-[40px] h-[40px] rounded-lg ">
                                    <FontAwesomeIcon icon={faTrashCan} size="xl" style={{ color: "#626262", }} className="px-[10px] pt-[8px]" />
                                </div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td className=" border border-[#7D7D7D] bg-white"></td>
                        <td className=" border border-[#7D7D7D] bg-white"></td>
                        <td className=" border border-[#7D7D7D] bg-white"></td>
                        <td className=" border border-[#7D7D7D] bg-white"></td>
                        <td className=" border border-[#7D7D7D] bg-white"></td>
                        <td className=" border border-[#7D7D7D] bg-white"></td>
                    </tr>
                    <tr>
                        <td className="border border-[#7D7D7D] bg-white"></td>
                        <td className=" border border-[#7D7D7D] bg-white"></td>
                        <td className=" border border-[#7D7D7D] bg-white"></td>
                        <td className=" border border-[#7D7D7D] bg-white"></td>
                        <td className=" border border-[#7D7D7D] bg-white"></td>
                        <td className=" border border-[#7D7D7D] bg-white"></td>
                    </tr>

                </table>
            </div>
        </div>
    )

}
export default DashboardAdmin