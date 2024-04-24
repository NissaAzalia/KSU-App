import { useNavigate } from "react-router-dom"


const DasboardNasabah = () => {
    const Navigate = useNavigate()
    const PinjamBiasa = async () => {
        Navigate('/pinjaman-biasa')
    }
   
    return (
        <div className="w-screen h-auto bg-[#F4F4F4] ">

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

            </div>

            <div className="simpanan">
                <div className="ml-[50px]">
                    <h1 className="text-3xl text-[#2C6975] mt-[30px]  font-bold">Info Simpanan</h1>
                    <h2 className="text-2xl text-black mt-[40px] mb-[25px] bg  ">Simpanan</h2>
                </div>

                <div className="flex gap-[50px] mx-[50px] ">
                    <div className="1 rounded-3xl w-[250px] h-[150px] text-center flex flex-col items-center p-[20px]  shadow-2xl bg-white ">
                        <span className="text">Simpanan Pokok</span>
                        <span  className="pt-[50px]" >Rp. 300,000</span>
                    </div>
                    <div className="2 rounded-3xl w-[250px] h-[150px]  text-center flex flex-col items-center p-[20px] shadow-2xl bg-white">
                        <span className="text">Simpanan Wajib</span>
                        <span className="pt-[50px]">Rp. 300,000</span>
                    </div>
                    <div className="2 rounded-3xl w-[250px] h-[150px]  text-center flex flex-col items-center p-[20px] shadow-2xl bg-white">
                        <span className="text">Simpanan Sukarela</span>
                        <span className="pt-[50px]">Rp. 300,000</span>
                    </div>
                    <div className="2 rounded-3xl w-[250px] h-[150px]  text-center flex flex-col items-center p-[20px] shadow-2xl bg-white">
                        <span className="text">Simpanan Hari Raya</span>
                        <span className="pt-[50px]">Rp. 300,000</span>
                    </div>
                </div>
            </div>

            <div className="layanan">
                <div className="ml-[50px]">
                    <h1 className="text-3xl text-[#2C6975] mt-[60px]  font-bold">Daftar Layanan</h1>
                    <h2 className="text-2xl text-black mt-[40px] mb-[25px] ">Informasi</h2>
                </div>


                <div className="flex ">
                    <div className="2 rounded-[10px] w-[400px] h-[90px] mx-[50px] mr-[5px] p-[20px] flex flex-col  shadow-2xl bg-white">
                        <span className="text">Sisa hutang dari pinjaman biasa </span>
                        <span>Rp. 300,000</span>
                        

                    </div>

                    <div className="2 rounded-[10px] w-[400px] h-[90px] mx-[50px] mr-[5px] p-[20px]  flex flex-col   shadow-2xl bg-white">
                        <span className="text">Sisa hutang dari pinjaman talangan </span>
                        <span>Rp. 300,000</span>
                    </div>
                </div>

                <div className="h-screen">
                    <h2 className="text-2xl text-black mt-[70px] mb-[25px] ml-[50px] ">Layanan</h2>

                    <div className="flex flex-row flex-wrap gap-[50px] mx-[50px] mb-[50px]  ">

                        <div className="1 rounded-3xl w-[250px] h-[150px]  flex flex-col p-[20px] items-center   shadow-2xl bg-white ">
                            <span className="text">Pinjaman Biasa</span>
                            <div className="ajukan ">

                                <button onClick={PinjamBiasa} className="bg-[#2C6975] hover:bg-[#23545d] text-white rounded-xl w-[120px] h-[35px] p-auto   ">Ajukan</button>
                                
                            </div>
                        </div>

                        <div className="2 rounded-3xl w-[250px] h-[150px]  flex flex-col p-[20px] items-center  shadow-2xl bg-white">
                            <span className="text">Pinjaman Talangan</span>
                            <div className="ajukan ">
                                <button className="bg-[#2C6975] hover:bg-[#23545d] text-white rounded-xl w-[120px] h-[35px] p-auto  ">Ajukan</button>
                            </div>
                        </div>

                        <div className="2 rounded-3xl w-[250px] h-[150px]  flex flex-col p-[20px] items-center  shadow-2xl bg-white">
                            <span className="text">Pinjaman Mobil</span>
                            <div className="ajukan ">
                                <button className="bg-[#2C6975] hover:bg-[#23545d] text-white rounded-xl w-[120px] h-[35px] p-auto  ">Ajukan</button>
                            </div>
                        </div>

                        <div className="2 rounded-3xl w-[250px] h-[150px]  flex flex-col p-[20px] items-center  shadow-2xl bg-white">
                            <span className="text">Pembelian Barang</span>
                            <div className="ajukan ">
                                <button className="bg-[#2C6975] hover:bg-[#23545d] text-white rounded-xl  w-[120px] h-[35px] p-auto  ">Ajukan</button>
                            </div>
                        </div>

                        <div className="2 rounded-3xl w-[250px] h-[150px]  flex flex-col p-[20px] items-center  shadow-2xl bg-white">
                            <span className="text">Servis</span>
                            <div className="ajukan ">
                                <button className="bg-[#2C6975] hover:bg-[#23545d] text-white rounded-xl w-[120px] h-[35px] p-auto  ">Ajukan</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}
export default DasboardNasabah