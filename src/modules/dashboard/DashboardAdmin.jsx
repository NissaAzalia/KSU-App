import { faMagnifyingGlass, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';


const DashboardAdmin = () => {

    const [showFormSimpanan, setShowFormSimpanan] = useState(false);
    const [showFormTambah, setShowFormTambah] = useState(false);

    const [simpananAnggota, setSimpananAnggota] = useState([]);
    const [Anggota, setAnggota] = useState([]);

    const [nama, setNama] = useState('')
    const [password, setPassword] = useState('')
    const [jenisSimpanan, setJenisSimpanan] = useState('')
    const [nominal, setNominal] = useState('')

    const tambahAnggota = () => {
        const newData = {
            nama: nama,
            password: password,
            simpanan: nominal,
        };


        setAnggota([...Anggota, newData]);
        setNama('')
        setPassword('')
    };

    const tambahSimpanan = () => {
        const newData = {
            nama:nama,
            nominal:nominal,
            jenis:jenisSimpanan,
        };
        setAnggota([...Anggota,newData])
        setNama('')
        setNominal('')
    }






    return (
        <div className="bg-[#F4F4F4] w-screen h-full p-[50px] ">
            <div className="rounded-s-xl mb-[50px] rounded-e-xl h-[80px] bg-gradient-to-r from-[#2C6975] to-[#52C5DB] " >

                <div className="mx-[30px] py-[5px] mt-[25px]  ">
                    <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
                </div>
            </div>

            <div className="mt-[50px]">
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Daftar Anggota Koperasi</h2>

                <div className="flex  pt-[10px] mb-[25px]">
                    <input className="rounded-l w-[600px] h-[40px] border-solid border-[1px]  shadow-lg" type="text" placeholder="" />
                    <div className="ml-[-30px] mt-[8px]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>

                {showFormSimpanan && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px] ">
                            <button
                                className=" top-1 left-1 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowFormSimpanan(false)}
                            >
                                X
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Simpanan</h1>
                        <div className="flex flex-col gap-6 ">
                            <input 
                            type="text" placeholder="Nama" 
                            className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)} />
                            <input 
                            type="number" placeholder="Nominal"
                             className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"
                             value={nominal}
                             onChange={(e) => setNominal(e.target.value)}
                             />
                            <div>
                                <select value={jenisSimpanan} onChange={(e) => setJenisSimpanan(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]">
                                    <option disabled selected value="">Pilih Simpanan</option>
                                    <option value="pokok">Simpanan Pokok</option>
                                    <option value="wajib">Simpanan Wajib</option>
                                    <option value="sukarela">Simpanan Sukarela</option>
                                    <option value="hari raya">Simpanan Hari Raya</option>
                                </select>
                            </div>
                            <button onClick={tambahSimpanan}  className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                )}

                {showFormTambah && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px] ">
                            <button
                                className=" top-1 left-1 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowFormTambah(false)}
                            >
                                X
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Tambah Anggota Anggota</h1>
                        <div className="flex flex-col gap-6 ">
                            <div className="flex flex-col gap-6 ">
                                <input
                                    className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"
                                    type="text" placeholder="Nama"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)} />
                                <input
                                    className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"
                                    type="password" placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button onClick={tambahAnggota} className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                )}

                <div className="flex gap-5">
                    <div className=" mb-[30px]  ">
                        <button
                            className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px] mb-[20px]"
                            onClick={() => setShowFormSimpanan(!showFormSimpanan)}
                        >
                            {showFormSimpanan ? 'Input Simpanan Anggota' : 'Input Simpanan Anggota'}
                        </button>
                    </div>

                    <div className=" mb-[30px]  ">
                        <button
                            className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px] mb-[20px]"
                            onClick={() => setShowFormTambah(!showFormTambah)}
                        >
                            {showFormTambah ? 'Tambah Anggota' : 'Tambah Anggota'}
                        </button>
                    </div>
                </div>

            </div>

            <div className=" mt-[30px] mr-[100px] w-[100%] overflow-x-auto">
                <table className="table-auto w-full ">
                    <thead>
                        
                        <tr>
                            <th className="border border-gray-600  border-b-0">
                                <div className="mt-[35px] ml-[25px] w-[170px]">Nama</div>
                            </th>
                            <th className="border border-gray-600 " colSpan="4">Simpanan</th>
                            <th className="border border-gray-600 border-b-0 ">
                                <div className="mt-[35px] ml-[25px] w-[170px]">Action</div>
                            </th>
                        </tr>
                        <tr>
                            <th className=" border border-[#7D7D7D] border-t-0"></th>
                            <th className="border border-[#7D7D7D] px-[30px]">Pokok</th>
                            <th className=" border border-[#7D7D7D] px-[30px]">Wajib</th>
                            <th className=" border border-[#7D7D7D] px-[30px]">Sukarela</th>
                            <th className=" border border-[#7D7D7D] px-[30px]">Hari Raya</th>
                            <th className=" border border-[#7D7D7D] border-t-0"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Anggota.map((anggota, index) => (
                            <tr key={index}>
                                <td className=" p-[10px] border border-[#7D7D7D] bg-white">{anggota.nama}</td>
                                <td className="p-[10px] border border-[#7D7D7D] bg-white">{anggota.nominal}</td>
                                <td className="p-[10px] border border-[#7D7D7D] bg-white">{anggota.nominal}</td>
                                <td className="p-[10px] border border-[#7D7D7D] bg-white">{anggota.nominal}</td>
                                <td className="p-[10px] border border-[#7D7D7D] bg-white">{anggota.nominal}</td>
                                <td className="p-[10px] border border-[#7D7D7D] bg-white">
                                    <div className='flex'>
                                        <div className="bg-[#D9D9D9] mx-[65px] w-[40px] h-[40px] rounded-lg ">
                                            <FontAwesomeIcon icon={faTrashCan} size="xl" style={{ color: "#626262", }} className="px-[10px] pt-[8px]" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {/* Tambahkan baris-baris data lainnya di sini */}
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default DashboardAdmin