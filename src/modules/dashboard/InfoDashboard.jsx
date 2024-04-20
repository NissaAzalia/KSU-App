const InfoDashboard = () => {
    return (
        <div className="bg-[#E0ECDE] w-screen h-auto ">
            {/* <div className=" h-screen pt-[60px] bg-black"> */}

            <div className="rounded-s-xl rounded-e-xl h-[80px] ml-[50px] w-[850px] bg-[#2C6975]   " >

                <div className="mx-[30px] py-[5px] mt-[25px]  ">
                    <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
                </div>
            </div>

            <div className="ml-[100px] mt-[50px]">
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Info Pinjaman Anggota</h2>
                    <table cellPadding={10} className="mb-10  ">
                            <tr className="">
                                <th className=" border border-[#7D7D7D]">Nama</th>
                                <th className="border border-[#7D7D7D]">Jenis Pinjaman</th>
                                <th className=" border border-[#7D7D7D]">Pinjaman</th>
                                <th className=" border border-[#7D7D7D]">Sisa Hutang</th>
                                <th className=" border border-[#7D7D7D]">Action</th>
                            </tr>
                            <tr>
                                <td className=" py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className=" py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className="py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className="py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className=" py-[20px] border border-[#7D7D7D] bg-white"></td>
                            </tr>
                            <tr>
                                <td className="px-[100px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                                <td className="px-[70px] py-[20px] border border-[#7D7D7D] bg-white"></td>
                            </tr>
                    </table>

                <div className="  ">
                    <div className=" border-solid border-[1px] rounded-3xl w-[700px] py-[30px] h-[300px] flex flex-col items-center  shadow-2xl bg-white">
                        <h1 className=" text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Pinjaman Anggota</h1>
                        <div className="flex flex-col gap-6 ">
                            <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="text" placeholder="Nama" />
                            <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="number" placeholder="Nominal" />

                            <button className="rounded bg-[#2C6975] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )

}
export default InfoDashboard