import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faUserGear, faSackDollar, faCar, faBoxesPacking } from '@fortawesome/free-solid-svg-icons'


const DasboardNasabah = () => {
    const Navigate = useNavigate()

    const PinjamUang = async () => {
        Navigate('/pinjaman-uang')
    }

    const PinjamMobil = async () => {
        Navigate('/pinjam-mobil')
    }

    const BeliBarang = async () => {
        Navigate('/beli-barang')
    }

    const Servis = async () => {
        Navigate('/servis')
    }

    return (
        <div className="w-full h-auto bg-[#F4F4F4] ">

            <div className="logo flex ml-[55px]  ">
                <img src="src/assets/logoKSU.png" alt="" className="w-[50px]  pl-[15px] pt-[10px] " />
                <h1 className=" pl-[15px] pt-[13px]  font-bold">Teknika Mandiri</h1>
            </div>

            <div className="ml-[50px] ">
                <div className="rounded-s-xl rounded-e-xl h-[90px] w-[95%]  bg-gradient-to-r from-[#2C6975] to-[#52C5DB]   " >

                    <div className="mx-[30px] py-[5px] mt-[25px]   ">
                        <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                        <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
                    </div>
                </div>

            </div>

            <div className="simpanan">
                <div className="ml-[50px]">
                    <h1 className="text-3xl text-[#2C6975] mt-[30px]  font-bold">Info Simpanan</h1>
                    <h2 className="text-2xl text-black font-semibold mt-[40px] mb-[25px] bg  ">Simpanan</h2>
                </div>

                <div className="flex gap-[50px] mx-[50px] ">

                    <div className="1 rounded-xl w-[250px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                        <div className="flex ">
                            <div className="bg-[#2D5275] w-[75px] h-[75px] "><FontAwesomeIcon className="pt-[12px] w-[50px] h-[50px]" icon={faHandHoldingDollar} style={{ color: "#fafafa", }} /> </div>
                            <div className="flex flex-col text-left text-xl gap-[15px] ml-[25px]">
                                <span>Pokok</span>
                                <span className="font-bold">Rp.200,000</span>
                            </div>
                        </div>
                    </div>

                    <div className="1 rounded-xl w-[250px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                        <div className="flex ">
                            <div className="bg-[#37808F] w-[75px] h-[75px] "><FontAwesomeIcon className="pt-[12px] w-[50px] h-[50px]" icon={faHandHoldingDollar} style={{ color: "#fafafa", }} /> </div>
                            <div className="flex flex-col text-left text-xl gap-[15px] ml-[25px]">
                                <span>Wajib</span>
                                <span className="font-bold">Rp.200,000</span>
                            </div>
                        </div>
                    </div>

                    <div className="1 rounded-xl w-[250px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                        <div className="flex ">
                            <div className="bg-[#439FB1] w-[75px] h-[75px] "><FontAwesomeIcon className="pt-[12px] w-[50px] h-[50px]" icon={faHandHoldingDollar} style={{ color: "#fafafa", }} /> </div>
                            <div className="flex flex-col text-left text-xl gap-[15px] ml-[25px]">
                                <span>Sukarela</span>
                                <span className="font-bold">Rp.200,000</span>
                            </div>
                        </div>
                    </div>

                    <div className="1 rounded-xl w-[250px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                        <div className="flex ">
                            <div className="bg-[#50BDD3] w-[75px] h-[75px] "><FontAwesomeIcon className="pt-[12px] w-[50px] h-[50px]" icon={faHandHoldingDollar} style={{ color: "#fafafa", }} /> </div>
                            <div className="flex flex-col text-left text-xl gap-[15px] ml-[25px]">
                                <span>Hari Raya</span>
                                <span className="font-bold">Rp.200,000</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <h2 className="text-2xl text-black font-semibold mt-[40px] ml-[50px] mb-[25px] ">Informasi</h2>

                    <div className="2 rounded-[10px] w-[400px] h-[90px] mx-[50px]  mr-[5px] px-[20px] py-[10px] flex flex-col gap-[20px]  shadow-2xl  bg-gradient-to-r from-[#2C6975] to-[#52C5DB] ">
                        <span className="text-white ">Sisa hutang dari pinjaman</span>
                        <span className="text-white text-xl">Rp. 300,000</span>
                    </div>
                </div>
            </div>

            <div className="layanan">
                <div className="ml-[50px]">
                    <h1 className="text-3xl text-[#2C6975] mt-[60px]  font-bold">Daftar Layanan</h1>
                </div>

                <div className="h-auto pb-[50px]">
                    <h2 className="text-2xl text-black font-semibold mt-[70px] mb-[25px] ml-[50px] ">Layanan</h2>
                    <div className="flex gap-[50px] mx-[50px] ">

                        <div className="1 rounded-xl w-[250px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                            <div className="flex gap-[25px] ">
                                <FontAwesomeIcon className=" mt-[10px] ml-[10px] h-[50px]" icon={faUserGear} style={{ color: "#687D87", }} />
                                <span onClick={Servis} className="text-[#626262] text-3xl  mt-[14px] cursor-pointer hover:text-[#2C6975]">Servis</span>
                            </div>
                        </div>

                        <div className="1 rounded-xl w-[250px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                            <div className="flex gap-[25px] text-left">
                                <FontAwesomeIcon className=" mt-[10px] ml-[10px] h-[50px]" icon={faBoxesPacking} style={{ color: "#687D87", }} />
                                <span onClick={BeliBarang} className="text-[#626262] text-2xl  mt-[1px] cursor-pointer hover:text-[#2C6975]">Pembelian Barang</span>
                            </div>
                        </div>

                        <div className="1 rounded-xl w-[250px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                            <div className="flex gap-[25px] text-left">
                                {/* <div className="bg-[#687D87]  w-[90px] h-[65px] rounded-full   "> */}
                                <FontAwesomeIcon className="h-[45px] mt-[15px] ml-[10px]" icon={faCar} style={{ color: "#687D87", }} />
                                {/* </div> */}
                                <span onClick={PinjamMobil} className="text-[#626262] text-2xl  mt-[1px] cursor-pointer hover:text-[#2C6975]">Pinjaman Mobil</span>
                            </div>
                        </div>

                        <div className="1 rounded-xl w-[250px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                            <div className="flex gap-[25px] text-left">
                            <FontAwesomeIcon className=" mt-[10px] ml-[10px] h-[50px] " icon={faSackDollar} style={{ color: "#687D87", }} />
                                <span onClick={ PinjamUang} className="text-[#626262] text-2xl  mt-[1px] cursor-pointer hover:text-[#2C6975]">Pinjaman Uang</span>
                            </div>
                        </div>






                    </div>

                    {/* <div className="flex flex-row flex-wrap gap-[50px] mx-[50px] mb-[50px]  ">

                        <div className="1 rounded-3xl w-[250px] h-[150px]  flex flex-col p-[20px] items-center   shadow-2xl bg-white ">
                            <span className="text">Pinjaman Biasa</span>
                            <div className="ajukan ">

                                <button onClick={PinjamBiasa} className="bg-[#2C6975] hover:bg-[#23545d] text-white rounded-xl w-[120px] h-[35px] p-auto">
                                    Ajukan</button>

                            </div>
                        </div>

                        <div className="2 rounded-3xl w-[250px] h-[150px]  flex flex-col p-[20px] items-center  shadow-2xl bg-white">
                            <span className="text">Pinjaman Talangan</span>
                            <div className="ajukan ">
                                <button onClick={PinjamTalangan} className="bg-[#2C6975] hover:bg-[#23545d] text-white rounded-xl w-[120px] h-[35px] p-auto  ">Ajukan</button>
                            </div>
                        </div>

                        <div className="2 rounded-3xl w-[250px] h-[150px]  flex flex-col p-[20px] items-center  shadow-2xl bg-white">
                            <span className="text">Pinjaman Mobil</span>
                            <div className="ajukan ">
                                <button onClick={PinjamMobil} className="bg-[#2C6975] hover:bg-[#23545d] text-white rounded-xl w-[120px] h-[35px] p-auto  ">Ajukan</button>
                            </div>
                        </div>

                        <div className="2 rounded-3xl w-[250px] h-[150px]  flex flex-col p-[20px] items-center  shadow-2xl bg-white">
                            <span className="text">Pembelian Barang</span>
                            <div className="ajukan ">
                                <button onClick={BeliBarang} className="bg-[#2C6975] hover:bg-[#23545d] text-white rounded-xl  w-[120px] h-[35px] p-auto  ">Ajukan</button>
                            </div>
                        </div>

                        <div className="2 rounded-3xl w-[250px] h-[150px]  flex flex-col p-[20px] items-center  shadow-2xl bg-white">
                            <span className="text">Servis</span>
                            <div className="ajukan ">
                                <button onClick={Servis} className="bg-[#2C6975] hover:bg-[#23545d] text-white rounded-xl w-[120px] h-[35px] p-auto  ">Ajukan</button>
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>



        </div>
    )
}
export default DasboardNasabah