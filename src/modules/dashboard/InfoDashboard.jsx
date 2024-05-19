import { faTrashCan, faPlusCircle, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const InfoDashboard = () => {
    const [showForm, setShowForm] = useState(false);
    const [showFormPinjaman, setShowFormPinjaman] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    const [pinjamanAnggota, setPinjamanAnggota] = useState([
        { id: 1, nama: 'tes', nominal: 50000, sisaHutang: 50000 },
        { id: 2, nama: 'tesstt', nominal: 20000, sisaHutang: 20000 },
    ]);

    const [nama, setNama] = useState('');
    const [nominal, setNominal] = useState('');
    const [sisaHutang, setSisaHutang] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [errorMessage, setErrorMessage] = useState('');

    const tambahPinjaman = () => {
        if (!nama || !nominal) {
            setErrorMessage('*Tidak bisa mengirim jika inputan kosong.');
            return;
        }

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
        setErrorMessage('');
    };

    const editPinjaman = () => {
        if (!sisaHutang) {
            setErrorMessage('*Tidak bisa mengirim jika inputan kosong.');
            return;
        }

        const anggota = pinjamanAnggota.find(anggota => anggota.id === currentId);
        const jumlahKurang = parseFloat(sisaHutang);

        if (jumlahKurang > anggota.sisaHutang) {
            setErrorMessage('*Jumlah pengurangan tidak boleh lebih dari jumlah yang dikurang.');
            return;
        }

        const updatedAnggota = pinjamanAnggota.map(anggota => {
            if (anggota.id === currentId) {
                const sisa = anggota.sisaHutang - jumlahKurang;
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
        setErrorMessage('');
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
        setErrorMessage('');
    };

    const handleEditClick = id => {
        const anggota = pinjamanAnggota.find(anggota => anggota.id === id);
        setNama(anggota.nama);
        setNominal(anggota.nominal);
        setSisaHutang('');
        setCurrentId(id);
        setShowFormPinjaman(true);
        setErrorMessage('');
    };

    const filteredPinjaman = pinjamanAnggota.filter(pinjaman =>
        pinjaman.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Hitung index untuk pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredPinjaman.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredPinjaman.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => (
        <li
            key={number}
            className={`px-3 py-1 ${currentPage === number ? 'bg-gray-300' : 'bg-white'} border border-gray-300 cursor-pointer`}
            onClick={() => setCurrentPage(number)}
        >
            {number}
        </li>
    ));

    return (
        <div className="flex flex-col justify-between bg-[#F4F4F4] w-[100%] h-screen p-[50px]">
            <div className="rounded-s-xl rounded-e-xl bg-gradient-to-r from-[#2C6975] to-[#52C5DB]">
                <div className="mx-[30px] py-[20px]">
                    <h2 className="text-white font-normal text-2xl">Halo,</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Konsumen KSU TEKNIKA MANDIRI</p>
                </div>
            </div>

            <div className="mt-[25px]">
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Info Pinjaman Anggota</h2>


                {showForm && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px]">
                            <button className="top-1 left-1 text-gray-500 hover:text-gray-700" onClick={handleClose}>
                                <FontAwesomeIcon icon={faXmark} size="lg" />
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Pinjaman Anggota</h1>
                        <div className="flex flex-col gap-2">
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
                                <FontAwesomeIcon icon={faXmark} size="lg" />
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Bayar hutang Anggota</h1>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl text-[#121212] font-bold">{nama}</h1>
                            <p></p>
                            <input
                                type="number"
                                placeholder="Masukkan Nominal Pembayaran"
                                value={sisaHutang}
                                className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                onChange={e => setSisaHutang(e.target.value)}
                            />
                            {errorMessage && (
                                <div className=" text-red-500 " role="alert">
                                    <span className="block sm:inline">{errorMessage}</span>
                                </div>
                            )}

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
                        className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px] mb-[5px]"
                        onClick={() => setShowForm(true)}
                    >
                        Input Pinjaman
                    </button>

                </div>

                <div className="flex pt-[10px] mb-[25px]">
                    <input
                        className="rounded-[10px] w-[50%] h-[40px] border-solid border-[1px] shadow-lg pl-[30px]"
                        type="text"
                        placeholder="Cari nama nasabah..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="ml-[-30px] mt-[8px]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="w-20 px-4 py-2">Nama</th>
                                <th className="w-20 px-4 py-2">Pinjaman</th>
                                <th className="w-10 px-4 py-2">Sisa Hutang</th>
                                <th className="w-1 px-4 py-2">Status</th>
                                <th className="w-1 px-2 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((pinjaman, index) => (
                                <tr key={pinjaman.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="border text-center px-4 py-2">{pinjaman.nama}</td>
                                    <td className="border text-center px-4 py-2">{pinjaman.nominal}</td>
                                    <td className="border text-center px-4 py-2">{pinjaman.sisaHutang}</td>
                                    <td className="border text-center px-4 py-2">   {pinjaman.sisaHutang === 0 ? (
                                        <div className="bg-[#4aad7c] text-white rounded px-2 inline-block">
                                            Lunas
                                        </div>
                                    ) : <div className="bg-[#ff7373] text-white rounded px-2 inline-block">
                                        hutang
                                    </div>}</td>
                                    <td className="px-4 py-2 flex justify-evenly items-center align-middle">
                                        <button
                                            className="text-[#626262] hover:text-[#505050]"
                                            onClick={() => handleEditClick(pinjaman.id)}
                                        >
                                            <FontAwesomeIcon icon={faPlusCircle} />
                                        </button>
                                        <button
                                            className="text-[#626262] hover:text-[#505050]"
                                            onClick={() => hapusPinjaman(pinjaman.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <ul className="flex justify-center mt-4">
                    {renderPageNumbers}
                </ul>
            </div>
        </div>
    );
}

export default InfoDashboard;
