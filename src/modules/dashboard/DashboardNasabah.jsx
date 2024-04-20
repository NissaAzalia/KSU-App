const DasboardNasabah = () => {
    return (
        <div className="h-auto bg-[#E0ECDE] ">

            <div className="logo flex ml-[55px]  ">
                <img src="src/assets/logoKSU.png" alt="" className="w-[50px]  pl-[15px] pt-[10px] " />
                <h1 className=" pl-[15px] pt-[13px]  font-bold">Teknika Mandiri</h1>
            </div>

            <div className="ml-[50px] b  ">
                <div className="rounded-s-xl rounded-e-xl h-[90px] w-[95%]  bg-[#2C6975]  " >

                    <div className="mx-[30px] py-[5px] mt-[25px]   ">
                        <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                        <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
                    </div>
                </div>
                <h1 className="text-2xl text-[#2C6975] mt-[20px] ml-[50px] font-bold">Info Simpanan</h1>
            </div>

            <div className="simpanan">
                <h2 className="text-xl text-black mt-[15px] ml-[100px] ">Simpanan</h2>
                <div className="flex  ">
                    <div className="1 rounded-3xl w-[250px] h-[250px] mt-[50px] mx-[50px] mr-[5px]   flex flex-col items-center  shadow-2xl bg-white "></div>
                    <div className="2 rounded-3xl w-[250px] h-[250px] mt-[50px] mx-[50px] mr-[5px]   flex flex-col items-center  shadow-2xl bg-white"></div>
                    <div className="2 rounded-3xl w-[250px] h-[250px] mt-[50px] mx-[50px] mr-[5px]   flex flex-col items-center  shadow-2xl bg-white"></div>
                    <div className="2 rounded-3xl w-[250px] h-[250px] mt-[50px] mx-[50px] mr-[5px]   flex flex-col items-center  shadow-2xl bg-white"></div>
                </div>
            </div>

            <div className="layanan">
                <div className="ml-[50px]">
                    <h1 className="text-2xl text-[#2C6975] mt-[20px] ml-[50px] font-bold">Info Simpanan</h1>
                    <h2 className="text-xl text-black mt-[15px] ml-[100px] ">Informasi</h2>
                </div>


                <div className="flex ">
                    <div className="2 rounded-[10px] w-[400px] h-[80px] mt-[50px] mx-[50px] mr-[5px] p-[10px] flex flex-col items-center shadow-2xl bg-white">
                        <h3>Sisa hutang dari pinjaman biasa </h3>

                    </div>

                    <div className="2 rounded-[10px] w-[400px] h-[80px] mt-[50px] mx-[50px] mr-[5px] p-[10px]  flex flex-col items-center  shadow-2xl bg-white">
                        <h3>Sisa hutang dari pinjaman talangan </h3>
                    </div>
                </div>

                <div className="">
                    <h2 className="text-xl text-black mt-[15px] ml-[100px] ">Layanan</h2>

                    <div className="flex  ">
                        <div className="1 rounded-3xl w-[250px] h-[250px] mt-[50px] mx-[50px] mr-[5px]   flex flex-col items-center  shadow-2xl bg-white "></div>
                        <div className="2 rounded-3xl w-[250px] h-[250px] mt-[50px] mx-[50px] mr-[5px]   flex flex-col items-center  shadow-2xl bg-white"></div>
                        <div className="2 rounded-3xl w-[250px] h-[250px] mt-[50px] mx-[50px] mr-[5px]   flex flex-col items-center  shadow-2xl bg-white"></div>
                        <div className="2 rounded-3xl w-[250px] h-[250px] mt-[50px] mx-[50px] mr-[5px]   flex flex-col items-center  shadow-2xl bg-white"></div>
                        <div className="2 rounded-3xl w-[250px] h-[250px] mt-[50px] mx-[50px] mr-[5px]   flex flex-col items-center  shadow-2xl bg-white"></div>

                    </div>
                </div>
            </div>



        </div>
    )
}
export default DasboardNasabah