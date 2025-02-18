/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faUserGear, faSackDollar, faCar, faBoxesPacking, faXmark, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useDashboardNasabah } from "./DashboardNasabahProvider"
import emailjs from 'emailjs-com';
import Swal from "sweetalert2"
import { useAuth } from '../auth/Auth';

const DasboardNasabah = ({ doLogout, name }) => {
    const [showFormServis, setShowFormServis] = useState(false);
    const [showFormBeliBarang, setShowFormBeliBarang] = useState(false);
    const [showFormPinjamMobil, setShowFormPinjamMobil] = useState(false);
    const [showFormPinjamUang, setShowFormPinjamUang] = useState(false);
    const [bar, setBar] = useState(false);
    const [jenisBarang, setJenisBarang] = useState("");
    const [alamat, setAlamat] = useState("");
    const [jenisKerusakan, setjenisKerusakan] = useState("");
    const [jumlah, setJumlah] = useState("");
    const [tenor, setTenor] = useState("");
    const [nama_barang, setNama_barang] = useState("");
    const [jumlah_barang, setJumlah_barang] = useState("");
    const [nama, setNama] = useState('')
    const [tanggal, setTanggal] = useState("");
    const [gunakanSopir, setGunakanSopir] = useState(Boolean);
    const { simpanan, pinjaman, doServis, doBeliBarang, doPinjamMobil, doPinjamUang, loadingSimpanan, loadingPinjaman, loadingServis, loadingBeliBarang, loadingPinjamMobil, loadingUang } = useDashboardNasabah()

    const openServisForm = () => {
        setShowFormServis(true);
        setShowFormBeliBarang(false);
        setShowFormPinjamMobil(false);
        setShowFormPinjamUang(false);
    };

    const openBeliBarangForm = () => {
        setShowFormServis(false);
        setShowFormBeliBarang(true);
        setShowFormPinjamMobil(false);
        setShowFormPinjamUang(false);
    };

    const openPinjamMobilForm = () => {
        setShowFormServis(false);
        setShowFormBeliBarang(false);
        setShowFormPinjamMobil(true);
        setShowFormPinjamUang(false);
    };

    const openPinjamUangForm = () => {
        setShowFormServis(false);
        setShowFormBeliBarang(false);
        setShowFormPinjamMobil(false);
        setShowFormPinjamUang(true);
    };

    const handleClickServis = async () => {

        try {
            await doServis(jenisBarang, alamat, jenisKerusakan);
            setJenisBarang('');
            setAlamat('');
            setjenisKerusakan('');
            setShowFormServis(false);

        } catch (error) {
            Swal.fire({
                text: 'inputan tidak boleh kosong',
                confirmButtonText: 'OK'
            });
        }


    }

    const handleClickBeliBarang = async () => {


        try {
            await doBeliBarang(nama_barang, alamat, jumlah_barang);
            setNama_barang('');
            setAlamat('');
            setJumlah_barang('');
            setShowFormBeliBarang(false);
        } catch (error) {
            Swal.fire({
                text: 'inputan tidak boleh kosong',
                confirmButtonText: 'OK'
            });
        }

    }

    const handleClickPinjamMobil = async () => {
        if (!tanggal) {
            Swal.fire({
                text: 'inputan tidak boleh kosong'
            })
            return;
        } else {
            try {
                await doPinjamMobil(tanggal, gunakanSopir);
                setTanggal('');
                setGunakanSopir('');
                setShowFormPinjamMobil(false);
            } catch (error) {
                Swal.fire({
                    text: 'inputan tidak boleh kosong',
                    confirmButtonText: 'OK'
                });
            }
        }
    }

    const handleClickPinjamUang = async () => {
        try {
            await doPinjamUang(jumlah, tenor);
            setJumlah('');
            setTenor('');
            setShowFormPinjamUang(false);
        } catch (error) {
            Swal.fire({
                text: 'inputan tidak boleh kosong',
                confirmButtonText: 'OK'
            });
        }
    }

    return (
        <div className="w-100% md:w-full  h-auto bg-[#F4F4F4] ">

            <div className=" flex justify-between fixed bg-white w-[100%] top-[0px] pt-[10px] pb-[10px] shadow-sm">

                <div className="logo flex md:ml-[50px] ml-[10px]  md:w-[430px] w-[260px] ">
                    <img src="src/assets/logoKSU.png" alt="" className="md:fixed h-[50px] w-[50px]    " />
                    <h1 className="md:ml-[65px] ml-[10px] md:text-1xl font-bold "> KOPERASI Konsumen <br /><span className='text-[15px] text-[#616161]'>KSU TEKNIKA MANDIRI</span></h1>
                </div>

                <div onClick={doLogout} className=" font-semibold flex text-center mr-[25px] gap-3">
                    <button className="text-[#616161] text-lg text-center hidden md:block" >Logout</button>
                    <span  className="text center mt-[12px] mr-[10px] h-[25px] cursor-pointer  hover:text-[#797979]">
                    <FontAwesomeIcon icon={faArrowRightFromBracket}  style={{color: "#616161",}} />
                    </span>
                </div>
            </div>

            <div className="mt-[100px] md:ml-[20px] ">

                <div className="rounded-xl  h-[80px] xl:w-[97%] lg:w-[95%] md:[80%]  md:mx-[30px] mx-[30px] bg-gradient-to-r from-[#2C6975] to-[#52C5DB]" >

                    <div className="md:mx-[3%] mx-[6%] py-[6px] mt-[25px] md:py-[10px]">
                        <h2 className="text-white font-normal text-1xl md:text-2xl">Halo, {name}</h2>
                        <p className="text-white font-light text-sm md:text-base">Selamat Datang Di Koperasi Konsumen KSU TEKNIKA MANDIRI</p>
                    </div>
                </div>

            </div>

            <div className="simpanan">
                <div className="md:ml-[4%] mx-[30px]">
                    <h1 className="text-2xl md:text-3xl text-[#2C6975] mt-[30px] font-bold">Informasi</h1>
                    <h2 className="text-xl md:text-2xl text-black font-semibold md:mt-[4%] mt-[20px] mb-[25px] md:ml-[1px] ml-[1%]">Simpanan</h2>
                </div>

                <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-[10px] md:gap-[50px] md:mx-[50px] mx-[30px]   ">

                    <div className="rounded-[8px] md:w-[45%] lg:flex-grow h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                        <div className="flex gap-[15px] ">
                            <div className="bg-[#2D5275]  w-[70px] h-[70px] "><FontAwesomeIcon className="pt-[12px] w-[50px] h-[50px]" icon={faHandHoldingDollar} style={{ color: "#fafafa", }} /> </div>
                            <div className="flex flex-col text-left text-xl md:gap-[15px]">
                                <span>Pokok</span>
                                <span className="font-bold">
                                    {loadingSimpanan ?
                                        <>
                                            Loading
                                        </>
                                        :
                                        <>
                                            Rp {simpanan ? simpanan.simpanan_pokok.toLocaleString() : 0}
                                        </>
                                    }

                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[8px] md:w-[45%] lg:flex-grow h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                        <div className="flex gap-[15px] ">
                            <div className="bg-[#37808F] w-[70px] h-[70px] "><FontAwesomeIcon className="pt-[12px] w-[50px] h-[50px]" icon={faHandHoldingDollar} style={{ color: "#fafafa", }} /> </div>
                            <div className="flex flex-col text-left text-xl md:gap-[15px]  ">
                                <span>Wajib</span>
                                <span className="font-bold">
                                    {loadingSimpanan ?
                                        <>
                                            Loading

                                        </>
                                        :
                                        <>
                                            Rp {simpanan ? simpanan.simpanan_wajib.toLocaleString() : 0}
                                        </>
                                    }
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[8px] md:w-[45%] lg:flex-grow h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                        <div className="flex gap-[15px] ">
                            <div className="bg-[#439FB1] w-[75px] h-[75px] ">
                                <FontAwesomeIcon className="pt-[12px] w-[50px] h-[50px]" icon={faHandHoldingDollar} style={{ color: "#fafafa", }} />
                            </div>

                            <div className="flex flex-col text-left text-xl md:gap-[15px]  ">
                                <span>Sukarela</span>
                                <span className="font-bold">
                                    {loadingSimpanan ?
                                        <>
                                            Loading
                                        </>
                                        :
                                        <>
                                            Rp {simpanan ? simpanan.simpanan_sukarela.toLocaleString() : 0}
                                        </>
                                    }
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[8px] md:w-[45%] lg:flex-grow w-[99%] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-white ">
                        <div className="flex gap-[15px] ">
                            <div className="bg-[#50BDD3] w-[70px] h-[70px] "><FontAwesomeIcon className="pt-[12px] w-[50px] h-[50px]" icon={faHandHoldingDollar} style={{ color: "#fafafa", }} /> </div>
                            <div className="flex flex-col text-left text-xl md:gap-[15px]   ">
                                <span className=''>Hari Raya</span>
                                <span className="font-bold">
                                    {loadingSimpanan ?
                                        <>
                                            Loading
                                        </>
                                        :
                                        <>
                                            Rp {simpanan ? simpanan.simpanan_hariraya.toLocaleString() : 0}
                                        </>
                                    }
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <h2 className="text-xl md:text-2xl text-black font-semibold md:mt-[4%] mt-[10%] mb-[25px] md:ml-[50px] ml-[30px] ">Sisa Hutang</h2>

                    <div className="rounded-xl h-[80px] xl:w-[97%] lg:w-[95%] md:[80%]  md:mx-[30px] mx-[30px]   px-[30px] py-[8px] flex flex-col gap-[5px]  shadow-2xl bg-[#439FB1]  md:bg-[#439FB1] ">
                        <h2 className="text-white text-xl ">Sisa Pokok Hutang</h2>
                        <span className="text-white text-xl">
                            {loadingPinjaman ?
                                <>
                                    Loading
                                </>
                                :
                                <>
                                    Rp {pinjaman ? pinjaman.sisa_hutang.toLocaleString() : 0}
                                </>
                            }
                        </span>
                    </div>
                </div>
            </div>

            <div className="layanan">
                <div className="md:ml-[50px] ml-[30px]">
                    <h1 className="text-2xl md:text-3xl text-[#2C6975] mt-[60px]  font-bold">Daftar Layanan</h1>
                </div>

                <div className="h-auto md:pb-[50px] pb-[30px] flex flex-col">
                    <h2 className="text-xl md:text-2xl text-black font-semibold md:mt-[4%] mt-[20px] mb-[25px] md:ml-[50px] ml-[30px] ">Layanan</h2>

                    <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-[10px] md:gap-[50px] md:mx-[50px] mx-[30px]">

                        {showFormServis ? (
                            <div className='fixed overlay bg-[#000000] bg-opacity-50 w-screen h-screen bottom-[1px] right-[-2px]'>
                                <div className="absolute top-[55%] left-[55%] transform md:-translate-x-[400px] -translate-x-[167px] md:-translate-y-[250px] -translate-y-[230px] bg-white rounded-3xl border-[#2C6975] md:w-[700px] w-[300px]    flex flex-col items-center shadow-2xl">
                                    <div className="md:w-[600px] ">
                                        <button
                                            className=" mt-[10px] mr-[260px] text-gray-500 hover:text-gray-700"
                                            onClick={() => setShowFormServis(false)}
                                        >
                                            <FontAwesomeIcon icon={faXmark} size="lg" />
                                        </button>
                                    </div>

                                    <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Servis</h1>


                                    <div className="flex flex-col gap-2 ">

                                        <input value={jenisBarang} onChange={(e) => setJenisBarang(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[270px]  h-[40px] px-[15px]" type="text" placeholder="Jenis Barang" />

                                        <input value={alamat} onChange={(e) => setAlamat(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[270px]  h-[40px] px-[15px]" type="text" placeholder="Alamat" />
                                        <textarea
                                            className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[270px] md:h-[80px] h-[40px] px-[15px] pt-[5px]"
                                            placeholder="Jenis Kerusakan"
                                            value={jenisKerusakan}
                                            onChange={(e) => setjenisKerusakan(e.target.value)}
                                            rows="2"
                                        ></textarea>

                                        <div className="border border-gray-300 pl-[10px] md:h-[120px] h-[130px] pt-[10px] pb-[10px] md:w-[600px] w-[270px] bg-[#fcf7f6]">
                                            <p className="text-gray-600">contoh pengisian form :</p>
                                            <p className="font-light text-gray-600 md:text-[16px] text-sm mb-1">
                                                Jenis barang : mesin cuci
                                            </p>
                                            <p className="font-light text-gray-600 md:text-[16px] text-sm mb-1">
                                                Alamat : Kab, Kec, Ds, Dk, RT/RW
                                            </p>
                                            <p className="font-light text-gray-600 md:text-[16px] text-sm mb-1">
                                                Kerusakan : mesin cuci tidak berputar
                                            </p>


                                        </div>

                                        <button
                                            onClick={handleClickServis}
                                            className="rounded bg-[#2C6975] hover:bg-[#358595] text-white md:w-[600px] w-[270px] h-[40px] mb-[20px]"
                                            disabled={loadingServis}
                                        >
                                            {loadingServis ? (

                                                <div>
                                                    <p>Pengajuan sedang diproses</p>

                                                </div>
                                            ) : (

                                                "Kirim"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        <div onClick={openServisForm} className="1 flex rounded-[8px] md:w-[45%] lg:flex-grow w-[99%] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-[#2D5275] ">
                            <div className="flex gap-[25px] ">
                                <FontAwesomeIcon className="ml-[10px] h-[50px]" icon={faUserGear} style={{ color: "#ffff", }} />
                                <span onClick={openServisForm} className="text-white md:text-2xl text-2xl flex items-center cursor-pointer hover:text-[#7D7D7D]">Servis</span>
                            </div>
                        </div>



                        {showFormBeliBarang ? (
                            <div className='fixed overlay bg-[#000000] bg-opacity-50 w-screen h-screen bottom-[1px] right-[-2px]'>
                                <div className="absolute top-[55%] left-[55%] transform md:-translate-x-[400px] -translate-x-[167px] md:-translate-y-[225px] -translate-y-[230px] bg-white rounded-3xl border-[#2C6975] md:w-[700px] w-[300px] flex flex-col items-center shadow-2xl">
                                    <div className="md:w-[600px] w-[50px] md:mr-[0px] mr-[200px]  ">
                                        <button
                                            className=" mt-[10px] mr-[260px] text-gray-500 hover:text-gray-700"
                                            onClick={() => setShowFormBeliBarang(false)}
                                        >
                                            <FontAwesomeIcon icon={faXmark} size="lg" />
                                        </button>
                                    </div>

                                    <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Beli Barang</h1>


                                    <div className="flex flex-col gap-2 ">

                                        <textarea value={nama_barang} onChange={(e) => setNama_barang(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[20270px0px] md:h-[80px] h-[40px] px-[15px] pt-[5px] " type="string" placeholder="Jenis Barang & Spesifikasi"></textarea>
                                        <input value={alamat} onChange={(e) => setAlamat(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[270px] h-[40px] px-[15px]" type="text" placeholder="Alamat Kirim" />
                                        <input value={jumlah_barang} onChange={(e) => setJumlah_barang(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[270px] h-[40px] px-[15px]" type="number" placeholder="Jumlah Barang" />
                                        <div className="border border-gray-300 pl-[10px] pt-[10px] pb-[10px] md:h-[120px] h-[130px] md:w-[600px] w-[270px] bg-[#fcf7f6]">
                                            <p className="text-gray-600 md:text-[16px] text-sm ">contoh pengisian form :</p>

                                            <p className="font-light text-gray-600 md:text-[16px] text-sm mb-1">
                                                Jenis Barang & Spesifikasi : TV (Polytron)
                                            </p>
                                            <p className="font-light text-gray-600 md:text-[16px] text-sm mb-1">
                                                Alamat Kirim: Kab, Kec, Ds, Dk, RT/RW
                                            </p>
                                            <p className="font-light text-gray-600 md:text-[16px] text-sm mb-1">
                                                Jumlah Barang : 1
                                            </p>

                                        </div>
                                        <button
                                            onClick={handleClickBeliBarang}
                                            className="rounded bg-[#2C6975] hover:bg-[#358595] text-white md:w-[600px] w-[270px] h-[40px] mb-[20px]"
                                            disabled={loadingBeliBarang}
                                        >
                                            {loadingServis ? (

                                                <div>
                                                    <p>Pengajuan sedang diproses</p>

                                                </div>
                                            ) : (

                                                "Kirim"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        <div onClick={openBeliBarangForm} className="1 flex rounded-[8px] md:w-[45%] lg:flex-grow w-[100%] h-[100px] text-center items-center p-[12px]  shadow-2xl bg-[#307280] ">
                            <div className="flex gap-[25px] text-left">
                                <FontAwesomeIcon className="h-[50px]" icon={faBoxesPacking} style={{ color: "#ffff", }} />
                                <span onClick={openBeliBarangForm} className="text-white md:text-2xl text-2xl flex items-center cursor-pointer hover:text-[#7D7D7D]">Pembelian Barang</span>
                            </div>
                        </div>

                        {showFormPinjamMobil ? (
                            <div className='fixed overlay bg-[#000000] bg-opacity-50 w-screen h-screen bottom-[1px] right-[-2px]'>
                                <div className="absolute top-[55%] left-[55%] transform md:-translate-x-[400px] -translate-x-[167px] md:-translate-y-[250px] -translate-y-[200px] bg-white rounded-3xl border-[#2C6975] md:w-[700px] w-[300px]    flex flex-col items-center shadow-2xl">
                                    <div className="md:w-[600px] ">
                                        <button
                                            className=" mt-[10px] mr-[260px] text-gray-500 hover:text-gray-700"
                                            onClick={() => setShowFormPinjamMobil(false)}
                                        >
                                            <FontAwesomeIcon icon={faXmark} size="lg" />
                                        </button>
                                    </div>

                                    <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Pinjam Mobil</h1>


                                    <div className="flex flex-col gap-2 ">
                                        <input value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[200px] h-[40px] px-[15px]" type="text" placeholder="Tanggal" />
                                        <div className="flex flex-col gap/[10px] mb-[5px]">

                                            <label className="text-md font-medium text-[#2C6975]">Menggunakan Sopir:</label>
                                            <div className="flex items-center pt-[10px]">
                                                <input type="radio" id="sopir_ya" name="sopir"  onChange={() => setGunakanSopir(true)} className="mr-[10px]" required />                                            <label htmlFor="sopir_ya" className="mr-[20px]">Ya</label>
                                                <input type="radio" id="sopir_tidak" name="sopir"  onChange={() => setGunakanSopir(false)} className="mr-[10px]" required />                                            <label htmlFor="sopir_tidak">Tidak</label>
                                            </div>
                                        </div>


                                        <div className="border border-gray-300 pl-[10px] pt-[10px] pb-[10px] md:w-[600px] w-[200px] bg-[#fcf7f6]">
                                            <p className="text-gray-600">contoh pengisian form :</p>
                                            <p className="font-light text-gray-600 text"> Tanggal :  2 - 3 Mei
                                            </p>
                                            <p className="font-light text-gray-600 text">
                                                Menggunakan Sopir : Ya </p>
                                        </div>
                                        <button
                                            onClick={handleClickPinjamMobil}
                                            className="rounded bg-[#2C6975] hover:bg-[#358595] text-white md:w-[600px] w-[200px] h-[40px] mb-[20px]"
                                            disabled={loadingPinjamMobil}
                                        >
                                            {loadingPinjamMobil ? (
                                                <div>
                                                    <p>Pengajuan sedang diproses</p>
                                                </div>
                                            ) : (
                                                "kirim"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        <div onClick={openPinjamMobilForm} className="1 flex rounded-[8px] md:w-[45%] lg:flex-grow w-[99%] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-[#439FB1] ">
                            <div className="flex gap-[25px] text-left">
                                <FontAwesomeIcon className="ml-[10px] h-[50px]" icon={faCar} style={{ color: "#ffff", }} />
                                <span onClick={openPinjamMobilForm} className="text-white flex items-center md:text-2xl text-2xl cursor-pointer hover:text-[#7D7D7D]">Pinjaman Mobil</span>
                            </div>
                        </div>

                        {showFormPinjamUang ? (
                            <div className='fixed overlay bg-[#000000] bg-opacity-50 w-screen h-screen bottom-[1px] right-[-2px]'>
                                <div className="absolute top-[55%] left-[55%] transform md:-translate-x-[400px] -translate-x-[167px] md:-translate-y-[210px] -translate-y-[210px] bg-white rounded-3xl border-[#2C6975] md:w-[700px] w-[300px]    flex flex-col items-center shadow-2xl">
                                    <div className="md:w-[600px] ">
                                        <button
                                            className=" mt-[10px] mr-[260px] text-gray-500 hover:text-gray-700"
                                            onClick={() => setShowFormPinjamUang(false)}
                                        >
                                            <FontAwesomeIcon icon={faXmark} size="lg" />
                                        </button>
                                    </div>

                                    <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Pinjam Uang</h1>

                                    <div className="flex flex-col gap-2 ">

                                        <input value={jumlah} onChange={(e) => setJumlah(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[200px] h-[40px] px-[15px]" type="number" placeholder="Nominal" />

                                        <textarea
                                            className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[200px] h-[80px] px-[15px] pt-[5px] "
                                            placeholder="Tenor"
                                            value={tenor}
                                            onChange={(e) => setTenor(e.target.value)}
                                            rows="2"
                                        ></textarea>

                                        <div className="border border-gray-300 pl-[10px] pt-[10px] pb-[10px] md:w-[600px] w-[200px] bg-[#fcf7f6]">
                                            <p className="text-gray-600">contoh pengisian form :</p>
                                            <p className="font-light text-gray-600 text mb-1">
                                                Nominal : Rp100.000
                                            </p>
                                            <p className="font-light text-gray-600 text mb-1">
                                                Tenor : Diangsur 6 kali
                                            </p>

                                        </div>

                                        <button
                                            onClick={handleClickPinjamUang}
                                            className="rounded bg-[#2C6975] hover:bg-[#358595] text-white md:w-[600px] w-[200px] h-[40px] mb-[20px]"
                                            disabled={loadingUang}
                                        >
                                            {loadingUang ? (

                                                <div>
                                                    <p>Pengajuan sedang diproses</p>

                                                </div>
                                            ) : (

                                                "Kirim"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        <div onClick={openPinjamUangForm} className="1 flex rounded-[8px] md:w-[45%] lg:flex-grow w-[99%] h-[100px] text-center  items-center p-[12px]  shadow-2xl bg-[#50BDD3] ">
                            <div className="flex gap-[25px] text-left ">
                                <FontAwesomeIcon className=" mt-[10px] ml-[10px] h-[50px] " icon={faSackDollar} style={{ color: "#ffff", }} />
                                <span onClick={openPinjamUangForm} className="text-white md:text-2xl text-2xl flex items-center cursor-pointer hover:text-[#7D7D7D]">Pinjam Uang</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default DasboardNasabah