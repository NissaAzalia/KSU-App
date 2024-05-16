/* eslint-disable react/prop-types */
import { useState } from "react"

const DasboardInputSimpanan = ({onTambahSimpanan}) => {
    const [simpanan, setSimpanan] = useState([]);
    const [nama, setNama] = useState('');
    const [nominal, setNominal] = useState('');
    const [jenisSimpanan, setJenisSimpanan] = useState('')
    

    const tambahSimpanan = () =>{
        const newData = {
            nama: nama,
            pinjaman: nominal,
            jenisSimpanan: jenisSimpanan
        };
        onTambahSimpanan(newData);

        setSimpanan([...simpanan, newData]);

        setNama('');
        setNominal('');
        setJenisSimpanan('')
    };

    return (
        <div className=" bg-[#F4F4F4] w-screen h-screen   ">

            <div className="rounded-s-xl mb-[50px] mr-[50px] rounded-e-xl h-[80px] ml-[50px] w-[screen]] bg-gradient-to-r from-[#2C6975] to-[#52C5DB]  " >

                <div className="mx-[30px] py-[5px] mt-[25px]  ">
                    <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
                </div>
            </div>

            <div className="ml-[50px] mt-[50px]">
                <h1 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Input Simpanan</h1>

                <div className="  ">
                    <div className="  mx-[10%] border-solid border-[1px] rounded-3xl w-[700px] py-[10px] h-[320px] flex flex-col items-center  shadow-2xl bg-white">
                        <h1 className=" text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Simpanan</h1>
                        <div className="flex flex-col gap-6 ">
                            <input type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" />
                            <input type="number" placeholder="Nominal" value={nominal} onChange={(e) => setNominal(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" />
                            <div>
                                <select value={jenisSimpanan} onChange={(e) => setJenisSimpanan(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]">
                                    <option disabled selected value="">Pilih Simpanan</option>
                                    <option value="pokok">Simpanan Pokok</option>
                                    <option value="wajib">Simpanan Wajib</option>
                                    <option value="sukarela">Simpanan Sukarela</option>
                                    <option value="hari raya">Simpanan Hari Raya</option>
                                </select>
                            </div>
                            <button onClick={tambahSimpanan} className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                </div>
    
            </div>

        </div>


    )

}
export default DasboardInputSimpanan