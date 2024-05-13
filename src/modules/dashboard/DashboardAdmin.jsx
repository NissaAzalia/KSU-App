import { faMagnifyingGlass, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';


const DashboardAdmin = () => {

    const [showFormSimpanan, setShowFormSimpanan] = useState(false);
    const [showFormTambah, setShowFormTambah] = useState(false);

    const [simpananAnggota, setSimpananAnggota] = useState([]);
    const [Anggota, setAnggota] = useState([
        { id: 1, nama: 'tes', simpananPokok: '1', simpananWajib: '2', simpananSukarela: '3', simpananHariRaya: '4' },
        { id: 2, nama: 'tesstt', simpananPokok: '5', simpananWajib: '6', simpananSukarela: '7', simpananHariRaya: '8' },

    ]);
    const [nama, setNama] = useState('')
    const [password, setPassword] = useState('')
    const [jenisSimpanan, setJenisSimpanan] = useState('')
    const [simpananPokok, setSimpananPokok] = useState('')
    const [simpananWajib, setSimpananWajib] = useState('')
    const [simpananSukarela, setSimpananSukarela] = useState('')
    const [simpananHariRaya, setSimpananHariRaya] = useState('')
    // const [nominal, setNominal] = useState('')

    const tambahAnggota = () => {
        const newData = {
            nama: nama,
            password: password,
            // simpanan:nominal
        };

        setAnggota([...Anggota, newData]);
        setNama('')
        setPassword('')
    };

    const editSimpanan = () => {
        // Membuat salinan dari array Anggota
        const updatedAnggota = [...Anggota];

        // Mencari indeks anggota yang akan diedit
        const index = updatedAnggota.findIndex(anggota => anggota.nama === nama);

        // Mengupdate data anggota
        if (index !== -1) {
            updatedAnggota[index] = {
                ...updatedAnggota[index],
                simpananPokok,
                simpananWajib,
                simpananSukarela,
                simpananHariRaya
            };

            // Menyimpan perubahan ke state
            setAnggota(updatedAnggota);

            // Menutup form edit
            setShowFormSimpanan(false);
        } else {
            // Jika anggota tidak ditemukan, tampilkan pesan kesalahan atau lakukan penanganan yang sesuai
            console.error("Anggota tidak ditemukan!");
        }
    };
    // const tambahSimpanan = () => {
    //     const newData = {
    //         nama:nama,
    //         nominal:nominal,
    //         jenis:jenisSimpanan,
    //     };
    //     setAnggota([...Anggota,newData])
    //     setNama('')
    //     setNominal('')
    // }
    const hapusAnggota = (id) => {
        const updatedAnggota = [...Anggota];
        updatedAnggota.splice(id, 1);
        setAnggota(updatedAnggota);
    };





    return (
        <div className="bg-[#F4F4F4] w-[100%] h-full p-[50px] ">
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

                {/* //form edit simpanan */}
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

                            <h1 className="text-2xl text-[#121212] font-bold">{nama}</h1>
                            <p>simpanan pokok</p>
                            <input
                                type="number" placeholder="Nominal"
                                className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"
                                value={simpananPokok}
                                id=""
                                onChange={(e) => setSimpananPokok(e.target.value)}
                            />
                            <p>simpanan wajib</p>
                            <input
                                type="number" placeholder="Nominal"
                                className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"
                                value={simpananWajib}
                                id=""
                                onChange={(e) => setSimpananWajib(e.target.value)}
                            />
                            <p>simpanan sukarela</p>
                            <input
                                type="number" placeholder="Nominal"
                                className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"
                                value={simpananSukarela}
                                id=""
                                onChange={(e) => setSimpananSukarela(e.target.value)}
                            />
                            <p>simpanan hari raya</p>
                            <input
                                type="number" placeholder="Nominal"
                                className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"
                                value={simpananHariRaya}
                                id=""
                                onChange={(e) => setSimpananHariRaya(e.target.value)}
                            />
                            {/* <div>
                                <select value={jenisSimpanan} onChange={(e) => setJenisSimpanan(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]">
                                    <option disabled selected value="">Pilih Simpanan</option>
                                    <option value="pokok">Simpanan Pokok</option>
                                    <option value="wajib">Simpanan Wajib</option>
                                    <option value="sukarela">Simpanan Sukarela</option>
                                    <option value="hari raya">Simpanan Hari Raya</option>
                                </select>
                            </div> */}
                            <button onClick={editSimpanan} className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                )}

                {/* //form tambah anggota */}
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
                                    id=""
                                    onChange={(e) => setNama(e.target.value)} />
                                <input
                                    className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"
                                    type="password" placeholder="Password"
                                    value={password}
                                    id=""
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button onClick={tambahAnggota} className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                )}

 {/* //button kirim tambah simpanan sudah pindah kebawah */}
                <div className="flex gap-5">
                    {/* <div className=" mb-[30px]  ">
                        <button
                            className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px] mb-[20px]"
                            onClick={() => setShowFormSimpanan(!showFormSimpanan)}
                        >
                            {showFormSimpanan ? 'Input Simpanan Anggota' : 'Input Simpanan Anggota'}
                        </button>
                    </div> */}

      {/* //button kirim tambah anggota */}
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
                                <div className="mt-[35px] ml-[25px] w-[50%]">Nama</div>
                            </th>
                            <th className="border border-gray-600 " colSpan="4">Simpanan</th>
                            <th className="border border-gray-600 border-b-0 ">
                                <div className="mt-[35px] ml-[25px] w-[50%]">Action</div>
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
                        {Anggota.map((anggota, id) => (
                            <tr key={id} >
                                <td className=" p-[10px] border border-[#7D7D7D] bg-white">{anggota.nama}</td>
                                <td className="p-[10px] border border-[#7D7D7D] bg-white">{anggota.simpananPokok}</td>
                                <td className="p-[10px] border border-[#7D7D7D] bg-white">{anggota.simpananWajib}</td>
                                <td className="p-[10px] border border-[#7D7D7D] bg-white">{anggota.simpananSukarela}</td>
                                <td className="p-[10px] border border-[#7D7D7D] bg-white">{anggota.simpananHariRaya}</td>
                                <td className="flex flex-col justify-center items-center  p-[10px] border border-[#7D7D7D] bg-white">
                                    <div div className='flex gap-[20%] px-[25%]'>

                                        <div onClick={()=>hapusAnggota(id)} className="bg-[#D9D9D9]  w-[40px] h-[40px] rounded-lg ">
                                            <FontAwesomeIcon icon={faTrashCan} size="xl" style={{ color: "#626262", }} className="px-[10px] pt-[8px]" />
                                        </div>
                                        <div className="bg-[#D9D9D9]  w-[40px] h-[40px] rounded-lg "

                                            onClick={() => {
                                                setShowFormSimpanan(!showFormSimpanan);
                                                setNama(anggota.nama);
                                                setSimpananPokok(anggota.simpananPokok);
                                                setSimpananWajib(anggota.simpananWajib);
                                                setSimpananSukarela(anggota.simpananSukarela);
                                                setSimpananHariRaya(anggota.simpananHariRaya);
                                                (id)
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faPenToSquare} size="xl" style={{ color: "#626262", }} className="px-[10px] pt-[8px]" />
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