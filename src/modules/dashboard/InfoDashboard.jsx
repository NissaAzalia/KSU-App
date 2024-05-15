import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const InfoDashboard = () => {
    const [showForm, setShowForm] = useState(false);
    const [showFormPinjaman, setShowFormPinjaman] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    const [pinjamanAnggota, setPinjamanAnggota] = useState([
        { id: 1, nama: 'tes', nominal: 50000, sisaHutang: 20000 },
        { id: 2, nama: 'tesstt', nominal: 20000, sisaHutang: 6000 },
    ]);

    const [nama, setNama] = useState('');
    const [nominal, setNominal] = useState('');
    const [sisaHutang, setSisaHutang] = useState('');

    const tambahPinjaman = () => {
        const newData = {
            id: pinjamanAnggota.length + 1,
            nama: nama,
            nominal: parseFloat(nominal),
            sisaHutang: parseFloat(nominal),
        };
        setPinjamanAnggota([...pinjamanAnggota, newData]);
        setNama('');
        setNominal('');
        setShowForm(false);
    };

    const editPinjaman = () => {
        const updatedAnggota = pinjamanAnggota.map(anggota => {
            if (anggota.id === currentId) {
                const sisa = anggota.sisaHutang - parseFloat(sisaHutang);
                return {
                    ...anggota,
                    sisaHutang: sisa,
                };
            }
            return anggota;
        });

        setPinjamanAnggota(updatedAnggota);
        setNama('');
        setNominal('');
        setSisaHutang('');
        setShowFormPinjaman(false);
    };

    const hapusPinjaman = id => {
        const updatedAnggota = pinjamanAnggota.filter(anggota => anggota.id !== id);
        setPinjamanAnggota(updatedAnggota);
    };

    const handleClose = () => {
        setShowForm(false);
        setShowFormPinjaman(false);
        setNama('');
        setNominal('');
        setSisaHutang('');
    };

    const handleEditClick = id => {
        const anggota = pinjamanAnggota.find(anggota => anggota.id === id);
        setNama(anggota.nama);
        setNominal(anggota.nominal);
        setSisaHutang('');
        setCurrentId(id);
        setShowFormPinjaman(true);
    };

    return (
        <div className="bg-[#F4F4F4] w-screen h-[100vh] p-[50px]">
            <div className="rounded-s-xl mb-[50px] rounded-e-xl h-[80px] bg-gradient-to-r from-[#2C6975] to-[#52C5DB]">
                <div className="mx-[30px] py-[5px] mt-[25px]">
                    <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
                </div>
            </div>

            <div className="flex flex-col">
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Info Pinjaman Anggota</h2>

                {showForm && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px]">
                            <button className="top-1 left-1 text-gray-500 hover:text-gray-700" onClick={handleClose}>
                                X
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Pinjaman Anggota</h1>
                        <div className="flex flex-col gap-6">
                            <input
                                type="text"
                                placeholder="Nama"
                                value={nama}
                                onChange={e => setNama(e.target.value)}
                                className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                            />
                            <input
                                type="number"
                                placeholder="Masukkan Nominal Pinjaman"
                                value={nominal}
                                onChange={(e) => setNominal(e.target.value)}
                                className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                            />

                            <button
                                onClick={tambahPinjaman}
                                className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[600px] h-[40px] mb-[20px]"
                            >
                                Kirim
                            </button>
                        </div>
                    </div>
                )}

                {showFormPinjaman && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px]">
                            <button className="top-1 left-1 text-gray-500 hover:text-gray-700" onClick={handleClose}>
                                X
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Bayar hutang Anggota</h1>
                        <div className="flex flex-col gap-6">
                            <h1 className="text-2xl text-[#121212] font-bold">{nama}</h1>

                            <input
                                type="number"
                                placeholder="Masukkan Nominal Pembayaran"
                                value={sisaHutang}
                                className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                onChange={e => setSisaHutang(e.target.value)}
                            />

                            <button
                                onClick={editPinjaman}
                                className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[600px] h-[40px] mb-[20px]"
                            >
                                Kirim
                            </button>
                        </div>
                    </div>
                )}

                <div className="mb-[30px]">
                    <button
                        className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px] mb-[20px]"
                        onClick={() => setShowForm(true)}
                    >
                        Input Pinjaman
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full" cellPadding={10}>
                        <thead>
                            <tr>
                                <th className="border px-[50px] border-[#7D7D7D]">Nama</th>
                                <th className="border px-[50px] border-[#7D7D7D]">Pinjaman</th>
                                <th className="border px-[50px] border-[#7D7D7D]">Sisa Hutang</th>
                                <th className="border px-[50px] border-[#7D7D7D]">Status</th>
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
                                        {pinjaman.sisaHutang === 0 ? "Lunas" : ""}
                                    </td>
                                    <td className="py-[10px] border border-[#7D7D7D] bg-white">
                                        <div className='flex justify-center space-x-2'>
                                            <div className="bg-[#D9D9D9] w-[40px] h-[40px] rounded-lg flex items-center justify-center"
                                                onClick={() => handleEditClick(pinjaman.id)}
                                            >
                                                <FontAwesomeIcon icon={faPenToSquare} size="xl" style={{ color: "#626262" }} />
                                            </div>

                                            <div className="bg-[#D9D9D9] w-[40px] h-[40px] rounded-lg flex items-center justify-center"
                                                onClick={() => hapusPinjaman(pinjaman.id)}
                                            >
                                                <FontAwesomeIcon icon={faTrash} size="xl" style={{ color: "#626262" }} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default InfoDashboard;