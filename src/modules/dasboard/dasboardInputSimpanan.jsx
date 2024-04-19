const DasboardInputSimpanan = () => {
    return (
        <div className="bg-[#E0ECDE]">
            <div className="pt-[25px]">
                <div className="rounded-s-xl rounded-e-xl h-[80px] w-[700px] bg-[#2C6975] mx-[500px]  " >
                    <div className="mx-[30px] ">
                        <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                        <p className="text-white font-thin">Selamat Datang Di Koprasi Teknika Mandiri</p>
                    </div>
                    <div className="my-[35px]">
                        <div>
                            <h1 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Input Simpanan</h1>
                        </div>
                        <div className="bg-white border-solid border-[1px] rounded-3xl w-[700px] py-7 h-auto flex flex-col items-center justify-center shadow-2xl">
                        <h1 className=" text-center text-2xl font-bold text-[#2C6975] mb-[30px]">Simpanan</h1>
                            <div className="flex flex-col gap-6">
                                <div className="">
                                    <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="text" placeholder="Nama" />
                                </div>
                                <div className="">
                                    <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="number" placeholder="Nominal" />
                                </div>
                                <div>
                                <select className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]">
                                    <option placeholder="Pilih Opsi Simpanan" disabled></option>
                                    <option value="">Simpanan Pokok</option>
                                    <option value="">Simpanan Wajib</option>
                                    <option value="">Simpanan Sukarela</option>
                                    <option value="">Simpanan Hari Raya</option>
                                </select>
                                </div>
                                <button className="rounded bg-[#2C6975] text-white  w-[600px] h-[40px] ">Kirim</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default DasboardInputSimpanan