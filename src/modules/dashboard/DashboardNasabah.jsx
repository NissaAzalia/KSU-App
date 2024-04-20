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

            <div>
                <h2 className="text-xl text-black mt-[15px] ml-[100px] ">Simpanan</h2>

                <div className="flex mr-[5px] ">
                    <div className="1 rounded-3xl w-[250px] h-[250px] mt-[50px] mx-[50px]   flex flex-col items-center  shadow-2xl bg-white ">
                        <div className="2 rounded-3xl w-[250px] h-[250px] mt-[50px] mx-[50px]   flex flex-col items-center  shadow-2xl bg-white"></div>
                        <div className="3 rounded-3xl w-[250px] h-[250px] mt-[50px] mx-[50px]   flex flex-col items-center  shadow-2xl bg-white"></div>
                        <div className="4 rounded-3xl w-[250px] h-[250px] mt-[50px] mx-[50px]   flex flex-col items-center  shadow-2xl bg-white"></div>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default DasboardNasabah