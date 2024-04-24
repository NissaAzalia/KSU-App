import { faMagnifyingGlass, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DashboardAdmin = () => {
    return (
        <div className="bg-[#F4F4F4] w-screen h-auto ">
            <div className="rounded-s-xl rounded-e-xl h-[80px] ml-[50px] w-[850px] bg-[#2C6975]   " >

                <div className="mx-[30px] py-[5px] mt-[25px]  ">
                    <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
                </div>
            </div>

            <div className="ml-[100px] mt-[50px]">
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Daftar Anggota Koperasi</h2>
                <div className=" mx-[10px] pt-[10px] flex">
                    <div className="flex">
                        <input className="rounded-xl w-[600px] h-[40px] border-solid border-[1px]  shadow-lg" type="text" placeholder="" />
                        <div className="ml-[-30px] mt-[8px]">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="ml-[100px] mt-[50px]">
                <table cellPadding={10} className="mb-10  ">
                    <tr className=''>
                        <th className="border border-gray-600 border-b-0" colspan="1"><div className="mt-[40px]  w-[170px]">Nama</div></th>
                        <th className="border border-gray-600" colspan="4">Simpanan</th>
                        <th className="border border-gray-600 border-b-0 "><div className="mt-[40px]  w-[170px]">Action</div></th>
                    </tr>
                    <tr className="">
                        <th className=" border border-[#7D7D7D] border-t-0"></th>
                        <th className="border border-[#7D7D7D]">Pokok</th>
                        <th className=" border border-[#7D7D7D]">Wajib</th>
                        <th className=" border border-[#7D7D7D]">Sukarela</th>
                        <th className=" border border-[#7D7D7D]">Hari Raya</th>
                        <th className=" border border-[#7D7D7D] border-t-0"></th>
                    </tr>
                    <tr>
                        <td className=" py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className=" py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="py-[20px] border border-[#7D7D7D] bg-white">
                            <div className='flex'>
                                <div className="bg-[#D9D9D9] ml-[35px] w-[40px] h-[40px] rounded-lg ">
                                    <FontAwesomeIcon icon={faTrashCan} size="xl" style={{ color: "#626262", }} className="pl-[10px] pt-[8px]" />
                                </div>
                                <div className='bg-[#D9D9D9] ml-[20px] w-[40px] h-[40px] rounded-lg'>
                                    <FontAwesomeIcon icon={faPenToSquare} size="xl" style={{ color: "#626262", }} className="pl-[10px] pt-[8px]" />
                                </div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td className="px-[100px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                    </tr>
                    <tr>
                        <td className="px-[100px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                        <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                    </tr>

                </table>
            </div>
        </div>
    )

}
export default DashboardAdmin