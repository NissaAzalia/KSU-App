import { faMagnifyingGlass, faTrashCan, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useMembers } from './AdminContext';
import Swal from 'sweetalert2';

const DashboardAdmin = () => {
    const [showNomorHp, setShowNomorHp] = useState(false);
    const [showFormTambah, setShowFormTambah] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');  // State untuk pencarian
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);


    const { members, fetchAnggota,tambahAnggota, loadingAdd, handleDelete } = useMembers();


    // Menggabungkan data users dan nomor
    // const initialNasabah = users.map(user => {
    //     const simpanan = nomor.find(s => s.user_id === user.id_user) || {
    //         nomorhp: 0
    //     };
    //     return {
    //         id: user.id_user,
    //         nama: user.user,
    //         password: user.password,
    //         nomorHp: simpanan.nomorhp
    //     };
    // });

    // const [nasabah, setNasabah] = useState(initialNasabah);
    const [nama, setNama] = useState('');
    const [nomorHp, setNomorHp] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleTambahAnggota = async () => {
        try {
            await tambahAnggota(nama, nomorHp, username, password);
            setNama('');
            setNomorHp('');
            setUsername('');
            setPassword('');
            setShowFormTambah(false);
            fetchAnggota()

        } catch (error) {
            console.log('error', error)
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

    const deleteMember = async (id) => {
        await handleDelete(id)
        alert("berhasil menghapus")
    }

    const editSimpanan = () => {
        const updatedNasabah = members.map(nasabah => {
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
        setNomorHp('')
        setUsername('');
        setPassword('');
    };

    // const hapusNasabah = id => {
    //     const updatedNasabah = members.filter(nasabah => nasabah.id !== id);
    //     setNasabah(updatedNasabah);
    // };

    const handleEditClick = id => {
        const selectedNasabah = members.find(n => n.id === id);
        setNama(selectedNasabah.nama);
        setNomorHp(selectedNasabah.nomorHp);
        setCurrentId(id);
        setShowNomorHp(true);
    };

    // Fungsi untuk memfilter nasabah berdasarkan kata kunci pencarian
    const filteredNasabah = members.filter(n => n.nama.toLowerCase().includes(searchQuery.toLowerCase()));

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
        <div className="flex flex-col bg-[#F4F4F4] w-[100%] h-screen pt-[80px] p-[25px]">
            <div className="rounded-s-xl rounded-e-xl bg-gradient-to-r from-[#2C6975] to-[#52C5DB]">
                <div className="mx-[30px] py-[20px]">
                    <h2 className="text-white font-normal text-2xl">Halo,</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Konsumen KSU TEKNIKA MANDIRI</p>
                </div>
            </div>

            <div className="mt-[25px]">
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Daftar Anggota Koperasi</h2>

                {showNomorHp && (
                    <div className='fixed overlay bg-black bg-opacity-50 w-screen h-screen bottom-[1px] right-[1px]'>
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
                                    onChange={(e) => setNomorHp(e.target.value)}
                                />
                                <button onClick={editSimpanan} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[600px] h-[40px]">
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showFormTambah && (
                    <div className='fixed overlay bg-black bg-opacity-50 w-screen h-screen bottom-[1px] right-[1px]'>
                        <div className=" absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
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
                                        type="tel" placeholder="No Hp"
                                        value={nomorHp}
                                        onChange={(e) => setNomorHp(e.target.value)}
                                    />
                                    <input
                                        className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                        type="text" placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <input
                                        className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                        type="password" placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button onClick={handleTambahAnggota} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[600px] h-[40px] mb-[20px]"
                                    disabled={loadingAdd}>
                                    {loadingAdd ? (
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
                )}



                <div className="flex pt-[10px] gap-3">
                    <div className="mb-[30px]">
                        <button
                            className="mb-[20px] rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px]"
                            onClick={() => setShowFormTambah(true)}
                        >
                            Tambah Anggota
                        </button>
                    </div>
                    <input
                        className="rounded-full w-[50%] h-[40px] border-solid border-[1px] shadow-lg pl-[30px]"
                        type="text"
                        placeholder="Cari nama nasabah..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="ml-[-50px] mt-[8px]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>

                </div>


                <div className="max-h-60 overflow-y-auto overflow-x-auto shadow-lg">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="w-1/1 px-2 py-2">Nama</th>
                                <th className="w-1/1 px-2 py-2">Nomor Hp</th>
                                <th className="w-1/1 px-2 py-2 w-[50px]">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((anggota, index) => (
                                <tr key={anggota.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="border text-center px-2 py-2">{anggota.nama}</td>
                                    <td className="border text-center px-2 py-2">{anggota.no_telp}</td>
                                    <td className="border text-center px-2 py-2 flex justify-around  w-[50px]">
                                        <button
                                            className="text-[#626262] hover:text-[#505050]"
                                            onClick={() => handleEditClick(anggota.id)}
                                        >
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                        <button
                                            className="text-[#626262] hover:text-[#505050]"
                                            onClick={() => deleteMember(anggota.id)}
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