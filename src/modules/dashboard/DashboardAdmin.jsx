const DashboardAdmin = () => {
    return (
        <div className="bg-[#E0ECDE] w-screen h-screen ">


            <div className="rounded-s-xl rounded-e-xl h-[80px] ml-[50px] w-[850px] bg-[#2C6975]   " >

                <div className="mx-[30px] py-[5px] mt-[25px]  ">
                    <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
                </div>
            </div>

            <div className="ml-[100px] mt-[50px]">
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Daftar Anggota Koperasi</h2>
                <div className=" mx-[5px] pt-[10px]">
                    <input className="rounded-xl w-[600px] h-[40px] border-solid border-[1px]  shadow-lg" type="text" placeholder="" />
                </div>
            </div>

            <div className="mx-[100px] pt-[20px]">
                    <table>
                        <tbody className="rounded-lg">
                            <tr>
                                <td className="px-[100px] py-[20px] border border-[#7D7D7D]"></td>
                                <td className="px-[100px] py-[20px] border border-[#7D7D7D]"></td>
                                <td className="px-[100px] py-[20px] border border-[#7D7D7D]"></td>
                                <td className="px-[100px] py-[20px] border border-[#7D7D7D]"></td>
                            </tr>
                            <tr>
                                <td className="px-[100px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className="px-[100px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className="px-[100px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className="px-[100px] py-[20px] border border-[#7D7D7D]"></td>
                            </tr>
                            <tr>
                                <td className="px-[100px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className="px-[100px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className="px-[100px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className="px-[100px] py-[20px] border border-[#7D7D7D]"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

        </div>
    )

}
export default DashboardAdmin