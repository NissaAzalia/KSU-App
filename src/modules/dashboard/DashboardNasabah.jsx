import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faUserGear, faSackDollar, faCar, faBoxesPacking } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"


const DasboardNasabah = () => {
    const [showFormServis, setShowFormServis] = useState(false);
    const [showFormBeliBarang, setShowFormBeliBarang] = useState(false);
    const [showFormPinjamMobil, setShowFormPinjamMobil] = useState(false);
    const [showFormPinjamUang, setShowFormPinjamUang] = useState(false);

    return (
        <div className="w-full md:w-full h-auto bg-[#F4F4F4] ">

            <div className=" flex justify-between md:w-[95%] w-[85%]  ">
                <div className="logo flex md:ml-[30px] ml-[30px] justify-between md:w-[200px] w-[170px]       ">
                    <img src="src/assets/logoKSU.png" alt="" className=" w-[40px] md:w-[45px] md:pt-[10px] pt-[15px]  md:ml-[20px]   " />
                    <h1 className="  md:pt-[17px] pt-[22px]  font-bold">Teknika Mandiri</h1>
                </div>
                <div className="md:pt-[17px] pt-[22px] font-semibold">
                    <button>Logout</button>
                </div>
            </div>

            <div className="md:ml-[20px]  ">

                <div className="rounded-xl  h-[80px] md:w-[95%] w-[85%] md:mx-[30px] mx-[30px]    bg-gradient-to-r from-[#2C6975] to-[#52C5DB]" >

                    <div className="mx-[30px] md:mx-[30px] py-[13px] mt-[25px] md:py-[10px]">
                        <h2 className="text-white font-normal text-xl md:text-2xl">Halo,</h2>
                        <p className="text-white font-thin text-sm md:text-base">Selamat Datang Di Koperasi Teknika Mandiri</p>
                    </div>
                </div>

            </div>

            <div className="simpanan">
                <div className="md:ml-[50px] mx-[30px]">
                    <h1 className="text-2xl md:text-3xl text-[#2C6975] mt-[30px]   font-bold">Info Simpanan & Sisa Hutang</h1>
                    <h2 className="text-xl md:text-2xl text-black font-semibold md:mt-[40px] pt-[20px] md:mb-[25px] mb-[10px]   ">Simpanan</h2>
                </div>

                <div className="flex  flex-col md:flex-row gap-[10px] md:gap-[50px] md:mx-[50px] mx-[30px]   ">

                    <div className="1   rounded-[8px] md:w-[250px] w-[350px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                        <div className="flex ">
                            <div className="bg-[#2D5275] w-[75px] h-[75px] "><FontAwesomeIcon className="pt-[12px] w-[50px] h-[50px]" icon={faHandHoldingDollar} style={{ color: "#fafafa", }} /> </div>
                            <div className="flex flex-col text-left text-xl gap-[15px] ml-[25px]">
                                <span>Pokok</span>
                                <span className="font-bold">Rp.200,000</span>
                            </div>
                        </div>
                    </div>

                    <div className="1  rounded-[8px] md:w-[250px] w-[350px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                        <div className="flex ">
                            <div className="bg-[#37808F] w-[75px] h-[75px] "><FontAwesomeIcon className="pt-[12px] w-[50px] h-[50px]" icon={faHandHoldingDollar} style={{ color: "#fafafa", }} /> </div>
                            <div className="flex flex-col text-left text-xl gap-[15px] ml-[25px]">
                                <span>Wajib</span>
                                <span className="font-bold">Rp.200,000</span>
                            </div>
                        </div>
                    </div>

                    <div className="1  rounded-[8px] md:w-[250px] w-[350px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                        <div className="flex ">
                            <div className="bg-[#439FB1] w-[75px] h-[75px] "><FontAwesomeIcon className="pt-[12px] w-[50px] h-[50px]" icon={faHandHoldingDollar} style={{ color: "#fafafa", }} /> </div>
                            <div className="flex flex-col text-left text-xl gap-[15px] ml-[25px]">
                                <span>Sukarela</span>
                                <span className="font-bold">Rp.200,000</span>
                            </div>
                        </div>
                    </div>

                    <div className="1  rounded-[8px] md:w-[250px] w-[350px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
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
                    <h2 className="text-xl md:text-2xl text-black font-semibold mt-[40px]    md:ml-[50px] ml-[30px] md:mb-[25px] mb-[10px] ">Informasi</h2>

                    <div className="2 rounded-[8px] w-[85%] md:w-[95%] md:h-[90px] md:mx-[50px] mx-[30px]  px-[30px] py-[8px] flex flex-col gap-[20px]  shadow-2xl bg-[#439FB1]  md:bg-[#439FB1] ">
                        <h2 className="text-white text-xl ">Sisa hutang dari pinjaman</h2>
                        <span className="text-white text-xl">Rp. 300,000</span>
                    </div>
                </div>
            </div>

            <div className="layanan">
                <div className="md:ml-[50px] ml-[30px]">
                    <h1 className="text-2xl md:text-3xl text-[#2C6975] mt-[60px]  font-bold">Daftar Layanan</h1>
                </div>

                <div className="h-auto md:pb-[50px] pb-[30px]">
                    <h2 className="text-xl md:text-2xl text-black font-semibold md:mt-[40px] mt-[20px] mb-[25px] md:ml-[50px] ml-[30px] ">Layanan</h2>

                    <div className="flex  flex-col md:flex-row md:gap-[50px] gap-[10px] md:mx-[50px] mx-[30px]  ">

                    {showFormServis && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px] ">
                            <button
                                className=" top-1 left-1 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowFormServis(false)}
                            >
                                X
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Servis</h1>
    

                        <div className="flex flex-col gap-6 ">
                            <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="text" placeholder="Jenis Barang" />
                            <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="text" placeholder="Alamat" />
                            <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="number" placeholder="Tanggal" />
                            <button className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                )}

                        <div   onClick={() => setShowFormServis(!showFormServis)} className="1 rounded-[8px] md:w-[250px] w-[350px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-[#2D5275] ">
                            <div className="flex gap-[25px] ">
                                <FontAwesomeIcon className=" mt-[10px] ml-[10px] h-[50px]" icon={faUserGear} style={{ color: "#ffff", }} />
                                <span className="text-white md:text-3xl text-2xl  mt-[14px] cursor-pointer  hover:text-[#439FB1]">Servis</span>
                            </div>
                        </div>



                        {showFormBeliBarang && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px] ">
                            <button
                                className=" top-1 left-1 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowFormBeliBarang(false)}
                            >
                                X
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Beli Barang</h1>
    

                        <div className="flex flex-col gap-6 ">
                            <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="text" placeholder="Jenis Barang" />
                            <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="text" placeholder="Alamat" />
                            <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="number" placeholder="Tanggal" />
                            <button className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                )}

                        <div  onClick={() => setShowFormBeliBarang(!showFormBeliBarang)}  className="1 rounded-[8px] md:w-[250px] w-[350px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-[#307280] ">
                            <div className="flex gap-[25px] text-left">
                                <FontAwesomeIcon className=" mt-[10px] ml-[10px] h-[50px]" icon={faBoxesPacking} style={{ color: "#ffff", }} />
                                <span  className="text-white md:text-2xl text-2xl  md:mt-[1px] mt-[20px] cursor-pointer hover:text-[#439FB1]">Pembelian Barang</span>
                            </div>
                        </div>

                        {showFormPinjamMobil && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px] ">
                            <button
                                className=" top-1 left-1 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowFormPinjamMobil(false)}
                            >
                                X
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Pinjam Mobil</h1>
    

                        <div  className="flex flex-col gap-6 ">
                            <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="text" placeholder="waktu" />
                            <select className="border-solid border-[1px] border-[#2C6975] rounded   w-[600px] h-[40px] px-[15px]">
                                <option disabled selected>Sopir</option>
                                <option>Pakai</option>
                                <option>Tidak</option>

                            </select>
                            <button className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                )}


                        <div  onClick={() => setShowFormPinjamMobil(!showFormPinjamMobil)}  className="1 rounded-[8px] md:w-[250px] w-[350px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-[#439FB1] ">
                            <div className="flex gap-[25px] text-left">
                                {/* <div className="bg-[#687D87]  w-[90px] h-[65px] rounded-full   "> */}
                                <FontAwesomeIcon className="mt-[10px] ml-[10px] h-[50px]" icon={faCar} style={{ color: "#ffff", }} />
                                {/* </div> */}
                                <span  className="text-white text-2xl  md:mt-[1px] mt-[20px] cursor-pointer hover:text-[#439FB1]">Pinjaman Mobil</span>
                            </div>
                        </div>


                        {showFormPinjamUang && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px] ">
                            <button
                                className=" top-1 left-1 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowFormPinjamUang(false)}
                            >
                                X
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Pinjam Mobil</h1>
    

                        <div  className="flex flex-col gap-6 ">
                            <input className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" type="text" placeholder="waktu" />
                            <div>
                            <select className="border-solid border-[1px] border-[#2C6975] rounded   w-[600px] h-[40px] px-[15px]">
                                <option disabled selected>Jenis Pinjaman</option>
                                <option>Biasa</option>
                                <option>Talangan</option>

                            </select>
                        </div>
                            <button className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                )}

                        <div onClick={()=> setShowFormPinjamUang(!showFormPinjamUang)} className="1 rounded-[8px] md:w-[250px] w-[350px] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-[#50BDD3] ">
                            <div className="flex gap-[25px] text-left">
                                <FontAwesomeIcon className=" mt-[10px] ml-[10px] h-[50px] " icon={faSackDollar} style={{ color: "#ffff", }} />
                                <span className="text-white text-2xl  md:mt-[1px] mt-[20px] cursor-pointer hover:text-[#439FB1]">Pinjaman Uang</span>
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