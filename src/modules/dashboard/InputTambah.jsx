const InputTambah = () => {
    return (
        <div className=" bg-[#F4F4F4] w-screen h-screen   ">

            <div className="rounded-s-xl rounded-e-xl h-[80px] ml-[50px] w-[850px] bg-gradient-to-r from-[#2C6975] to-[#52C5DB]  " >

                <div className="mx-[30px] py-[5px] mt-[25px]  ">
                    <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
                </div>
            </div>

            <div className="ml-[50px] mt-[50px]">
                <h1 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Input Tambah Nasabah</h1>

                <div className="  ">
                    <div className=" border-solid border-[1px] rounded-3xl w-[700px] py-[10px] h-[320px] flex flex-col items-center  shadow-2xl bg-white">
                        <h1 className=" text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Tambah Nasabah</h1>
                        <div className="flex flex-col gap-6 ">
                            <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="text" placeholder="Nama" />
                            <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="password" placeholder="Password" />
                            <button className="rounded bg-[#2C6975] hover:bg-[#23545d] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                </div>
    
            </div>

        </div>


    )

}
export default InputTambah