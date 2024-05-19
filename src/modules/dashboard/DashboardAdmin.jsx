import { faMagnifyingGlass, faTrashCan, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

// Data users dan nomor
const users = [
    { "id_user": 1, "user": "alfian", "password": "12345" },
    { "id_user": 2, "user": "Rasya", "password": "admin" },
    { "id_user": 3, "user": "Rasya", "password": "admin" },
    { "id_user": 4, "user": "ARA", "password": "UWU" },
    { "id_user": 5, "user": "AMAK", "password": "FAAFAF" },
    { "id_user": 6, "user": "anas", "password": "user" },
    { "id_user": 7, "user": "akaka", "password": "user" },
    { "id_user": 8, "user": "UWU", "password": "amao" }
];

const nomor = [
    { "id_nomorHp": 1, "nomorhp": '062824245500', "user_id": 1 },
    { "id_nomorHp": 2, "nomorhp": '062834522000', "user_id": 2 },
    { "id_nomorHp": 3, "nomorhp": '062802245000', "user_id": 3 },
    { "id_nomorHp": 5, "nomorhp": '062800255250', "user_id": 5 },
    { "id_nomorHp": 4, "nomorhp": '062800255200', "user_id": 4 },
    { "id_nomorHp": 6, "nomorhp": '062800456400', "user_id": 6 },
    { "id_nomorHp": 8, "nomorhp": '062800464300', "user_id": 8 },
    { "id_nomorHp": 7, "nomorhp": '062800503460', "user_id": 7 },
];

const DashboardAdmin = () => {
    const [showNomorHp, setShowNomorHp] = useState(false);
    const [showFormTambah, setShowFormTambah] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');  // State untuk pencarian
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);
    

    // Menggabungkan data users dan nomor
    const initialNasabah = users.map(user => {
        const simpanan = nomor.find(s => s.user_id === user.id_user) || {
            nomorhp: 0
        };
        return {
            id: user.id_user,
            nama: user.user,
            password: user.password,
            nomorHp: simpanan.nomorhp
        };
    });

    const [nasabah, setNasabah] = useState(initialNasabah);
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const [nomorHp, setnomorHp] = useState('');


    const tambahNasabah = () => {
        const newData = {
            id: nasabah.length + 1,
            nama: nama,
            password: password,
            nomorHp: nomorHp,
        };

        setNasabah([...nasabah, newData]);
        setShowFormTambah(false);
        setNama('');
        setPassword('');
    };

    const editSimpanan = () => {
        const updatedNasabah = nasabah.map(nasabah => {
            if (nasabah.id === currentId) {
                return {
                    ...nasabah,
                    nomorHp: nomorHp
                };
            }
            return nasabah;
        });

        setNasabah(updatedNasabah);
        setShowNomorHp(false);
    };

    const handleClose = () => {
        setShowFormTambah(false);
        setShowNomorHp(false);
        setNama('');
        setPassword('');
    };

    const hapusNasabah = id => {
        const updatedNasabah = nasabah.filter(nasabah => nasabah.id !== id);
        setNasabah(updatedNasabah);
    };

    const handleEditClick = id => {
        const selectedNasabah = nasabah.find(n => n.id === id);
        setNama(selectedNasabah.nama);
        setnomorHp(selectedNasabah.nomorHp);
        setCurrentId(id);
        setShowNomorHp(true);
    };

    // Fungsi untuk memfilter nasabah berdasarkan kata kunci pencarian
    const filteredNasabah = nasabah.filter(n => n.nama.toLowerCase().includes(searchQuery.toLowerCase()));

    // Hitung index untuk pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredNasabah.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredNasabah.length / itemsPerPage); i++) {
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
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Daftar Anggota Koperasi</h2>

                {showNomorHp && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-[35%] bg-white rounded-3xl border-[#2C6975] w-[700px] py-[3%] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px]">
                            <button
                                className="top-1 left-1 text-gray-500 hover:text-gray-700"
                                onClick={handleClose}
                            >
                                <FontAwesomeIcon icon={faXmark} size="lg" />
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975]">Simpanan</h1>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl text-[#121212] font-bold">{nama}</h1>
                            <p>Nomor Hp</p>
                            <input
                                type="number" placeholder="Masukkan Nomor Hp"
                                className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                value={nomorHp}
                                onChange={(e) => setnomorHp(e.target.value)}
                            />
                            <button onClick={editSimpanan} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[600px] h-[40px]">
                                Kirim
                            </button>
                        </div>
                    </div>
                )}

                {showFormTambah && (
                    <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
                        <div className="w-[600px]">
                            <button
                                className="top-1 left-1 text-gray-500 hover:text-gray-700"
                                onClick={handleClose}
                            >
                                <FontAwesomeIcon icon={faXmark} size="lg" />
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Tambah Anggota</h1>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">
                                <input
                                    className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                    type="text" placeholder="Nama"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                                <input
                                    className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                    type="password" placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button onClick={tambahNasabah} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[600px] h-[40px] mb-[20px]">
                                Kirim
                            </button>
                        </div>
                    </div>
                )}

                <button
                    className="mb-[20px] rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px]"
                    onClick={() => setShowFormTambah(true)}
                >
                    Tambah Anggota
                </button>

                <div className="flex pt-[10px] mb-[25px]">
                    <input
                      className="rounded-full w-[50%] h-[40px] border-solid border-[1px] shadow-lg pl-[30px]"
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
                    <table className="min-w-full  bg-white" cellPadding={10}>
                        <thead>
                            <tr>
                                <th className="w-1/1 px-2 py-2">Nama</th>
                                <th className="w-1/1 px-2 py-2">Nomor Hp</th>
                                <th className="w-1/1 px-2 py-2 w-[50px]">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((nasabah, index) => (
                                <tr key={nasabah.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="border text-center px-2 py-2">{nasabah.nama}</td>
                                    <td className="border text-center px-2 py-2">{nasabah.nomorHp}</td>
                                    <td className="border text-center px-2 py-2 flex justify-around  w-[50px]">
                                        <button
                                            className="text-[#626262] hover:text-[#505050]"
                                            onClick={() => handleEditClick(nasabah.id)}
                                        >
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                        <button
                                            className="text-[#626262] hover:text-[#505050]"
                                            onClick={() => hapusNasabah(nasabah.id)}
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
};

export default DashboardAdmin;