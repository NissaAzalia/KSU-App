import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const InfoDashboard = () => {
    const [pinjamanAnggota, setPinjamanAnggota] = useState([]);
    const [nama, setNama] = useState('');
    const [nominal, setNominal] = useState('');
    const [jenisPinjaman, setJenisPinjaman] = useState('');

    const [showForm, setShowForm] = useState(false);

    const tambahPinjaman = () => {
        // Buat objek baru untuk data pinjaman yang akan ditambahkan
        const newData = {
            nama: nama,
            pinjaman: nominal,
            jenisPinjaman: jenisPinjaman,
            sisaHutang: '', // Anda dapat mengisinya sesuai kebutuhan
        };

        // Tambahkan data baru ke dalam state
        setPinjamanAnggota([...pinjamanAnggota, newData]);

        // Reset nilai input setelah data ditambahkan
        setNama('');
        setNominal('');
        setJenisPinjaman('');
    };

    return (
        <div className="bg-[#F4F4F4] w-screen h-100% ">
            {/* <div className=" h-screen pt-[60px] bg-black"> */}

            <div className="rounded-s-xl rounded-e-xl h-[80px] ml-[50px] w-[850px] bg-gradient-to-r from-[#2C6975] to-[#52C5DB]   " >

                <div className="mx-[30px] py-[5px] mt-[25px]  ">
                    <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
                </div>
            </div>

            <div className="ml-[50px] mt-[50px] ">
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
                            <div>
                                <select value={jenisPinjaman} onChange={(e) => setJenisPinjaman(e.target.value)} className="border-solid border-[1px] border-[#2C6975] rounded  w-[600px] h-[40px] px-[15px]">
                                    <option disabled selected value="" >Jenis Pinjaman</option>
                                    <option value="Biasa">Biasa</option>
                                    <option value="Talangan">Talangan</option>
                                </select>
                            </div>
                            <button onClick={tambahPinjaman} className="rounded bg-[#2C6975]  hover:bg-[#358595] text-white  w-[600px] h-[40px] mb-[20px] ">Kirim</button>
                        </div>
                    </div>
                )}
                <div className=" mb-[30px]  ">
                    <button
                        className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px] mb-[20px]"
                        onClick={() => setShowForm(!showForm)}
                    >
                        {showForm ? '' : 'Input Pinjaman'}
                    </button>
                </div>

                <table cellPadding={10} className="">
                    <tr>
                        <th className="border px-[50px] border-[#7D7D7D]">Nama</th>
                        <th className="border px-[50px] border-[#7D7D7D]">Pinjaman</th>
                        <th className="border px-[50px] border-[#7D7D7D]">Jenis Pinjaman</th>
                        <th className="border px-[50px] border-[#7D7D7D]">Sisa Hutang</th>
                        <th className="border px-[50px] border-[#7D7D7D]">Action</th>
                    </tr>
                    {pinjamanAnggota.map((pinjaman, index) => (
                        <tr key={index}>
                            <td className="py-[10px]  border border-[#7D7D7D] bg-white">{pinjaman.nama}</td>
                            <td className="py-[10px] border border-[#7D7D7D] bg-white">{pinjaman.pinjaman}</td>
                            <td className="py-[10px] border border-[#7D7D7D] bg-white">{pinjaman.jenisPinjaman}</td>
                            <td className="py-[10px] border border-[#7D7D7D] bg-white">{pinjaman.sisaHutang}</td>
                            <td className="py-[10px] border border-[#7D7D7D] bg-white">
                                <div className='flex'>
                                    <div className="bg-[#D9D9D9] mx-[65px] w-[40px] h-[40px] rounded-lg ">
                                        <FontAwesomeIcon icon={faPenToSquare} size="xl" style={{ color: "#626262", }} className="px-[10px] pt-[8px]" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </table>

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