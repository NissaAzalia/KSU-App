import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const InfoDashboard = () => {

    const [showForm, setShowForm] = useState(false);
    const [showFormPinjaman, setShowFormPinjaman] = useState(false)

    const [pinjamanAnggota, setPinjamanAnggota] = useState([]);
    const [Anggota, setAnggota] = useState([]);

    const [nama, setNama] = useState('');
    const [nominal, setNominal] = useState('');
    const [sisaHutang, setSisaHutang] = useState('')

    const tambahPinjaman = () => {
        const newData = {
            nama: nama,
            nominal: nominal,
            sisaHutang: '',
        };
        setPinjamanAnggota([...pinjamanAnggota, newData]);
        setNama('');
        setNominal('');
        setShowForm(false)
        
    };

    const editPinjaman = () => {
        // Membuat salinan dari array Anggota
        const updatedAnggota = [...pinjamanAnggota];

        // Mencari indeks anggota yang akan diedit
        const index = updatedAnggota.findIndex(anggota => anggota.nama === nama);

        // Mengupdate data anggota
        if (index !== -1) {
            updatedAnggota[index] = {
                ...updatedAnggota[index],
                nominal,
                sisaHutang
            };

            // Menyimpan perubahan ke state
            setPinjamanAnggota(updatedAnggota);

            // Menutup form edit
            setShowFormPinjaman(false);
        } else {
            // Jika anggota tidak ditemukan, tampilkan pesan kesalahan atau lakukan penanganan yang sesuai
            console.error("Anggota tidak ditemukan!");
        }
    };
    

    return (
        <div className="bg-[#F4F4F4] w-screen h-[100vh] p-[50px] ">
            {/* <div className=" h-screen pt-[60px] bg-black"> */}

            <div className="rounded-s-xl mb-[50px] rounded-e-xl h-[80px] bg-gradient-to-r from-[#2C6975] to-[#52C5DB]   " >

                <div className="mx-[30px] py-[5px] mt-[25px]  ">
                    <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
                </div>
            </div>

            <div className="flex flex-col">
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Info Pinjaman Anggota</h2>

                {showForm && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px]">
                            <button
                                className=" top-1 left-1 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowForm(false)}
                            >
                                X
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Pinjaman Anggota</h1>
                        <div className="flex flex-col gap-6 ">
                            <input type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" />
                            <input type="number" placeholder="Nominal" value={nominal} onChange={(e) => setNominal(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]" />

                            <button onClick={tambahPinjaman} className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                )}

                {/* //form edit simpanan */}
                {showFormPinjaman && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px] ">
                            <button
                                className=" top-1 left-1 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowFormPinjaman(false)}
                            >
                                X
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Pinjaman</h1>
                        <div className="flex flex-col gap-6 ">
                            <input
                                type="text" placeholder="Nama"
                                className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"
                                value={nama}
                                id=""
                                onChange={(e) => setNama(e.target.value)} />
                            <p>Nominal</p>
                            <input
                                type="number" placeholder="Nominal"
                                className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"
                                value={nominal}
                                id=""
                                onChange={(e) => setNominal(e.target.value)}
                            />
                            <p>Sisa Hutang</p>
                            <input
                                type="number" placeholder="Nominal"
                                className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"
                                value={sisaHutang}
                                id=""
                                onChange={(e) => setSisaHutang(e.target.value)}
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
                            <button onClick={editPinjaman} className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                )}


                <div className=" mb-[30px]  ">
                    <button
                        className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px] mb-[20px]"
                        onClick={() => setShowForm(!showForm)}
                    >
                        {showForm ? 'Input Pinjaman' : 'Input Pinjaman'}
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full" cellPadding={10}>
                        <thead>
                            <tr>
                                <th className="border px-[50px] border-[#7D7D7D]">Nama</th>
                                <th className="border px-[50px] border-[#7D7D7D]">Pinjaman</th>

                                <th className="border px-[50px] border-[#7D7D7D]">Sisa Hutang</th>
                                <th className="border px-[50px] border-[#7D7D7D]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pinjamanAnggota.map((pinjaman, index) => (
                                <tr key={index}>
                                    <td className="py-[10px] border border-[#7D7D7D] bg-white">{pinjaman.nama}</td>
                                    <td className="py-[10px] border border-[#7D7D7D] bg-white">{pinjaman.nominal}</td>
                                    <td className="py-[10px] border border-[#7D7D7D] bg-white">{pinjaman.sisaHutang}</td>
                                    <td className="py-[10px] border border-[#7D7D7D] bg-white">
                                        <div className='flex'>
                                            <div className="bg-[#D9D9D9] mx-[40%] w-[40px] h-[40px] rounded-lg "
                                                onClick={()=>{
                                                    setShowFormPinjaman(!showFormPinjaman);
                                                    setNama(pinjaman.nama);
                                                    setNominal(pinjaman.nominal);
                                                    setSisaHutang(pinjaman.sisaHutang);
                                                    (id)
                                                    
                                                    
                                                }}
                                            >
                                                
                                                <FontAwesomeIcon icon={faPenToSquare} size="xl" style={{ color: "#626262", }} className="px-[10px] pt-[8px]" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                {/* <div className=" mb-[30px] mx-[10%]  ">
                <div className="   border-solid border-[1px] rounded-3xl w-[700px] py-[10px] h-[320px] flex flex-col items-center  shadow-2xl bg-white">
                        <h1 className=" text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Pinjaman Anggota</h1>
                        <div className="flex flex-col gap-6 ">
                            <input type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)}  className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"  />
                            <input type="number" placeholder="Nominal" value={nominal} onChange={(e) => setNominal(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]"  />
                            <div>
                                <select value={jenisPinjaman} onChange={(e)=> setJenisPinjaman(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]">
                                    <option disabled selected value="" >Jenis Pinjaman</option>
                                    <option value="Biasa">Biasa</option>
                                    <option value="Talangan">Talangan</option>
                                </select>
                            </div>
                            <button onClick={tambahPinjaman} className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                </div> */}

            </div>
            {/* </div> */}
        </div>
    )

}
export default InfoDashboard