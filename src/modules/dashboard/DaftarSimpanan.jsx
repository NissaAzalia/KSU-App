import { faMagnifyingGlass, faPlusCircle, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useMembers } from './AdminContext';
import Swal from 'sweetalert2';
import { kurangiHariRaya } from './apiAdmin';

// Data users dan simpanans
const users = [
    { "id_user": 1, "user": "alfian", "password": "12345" },
    { "id_user": 2, "user": "Rasya", "password": "admin" },
    { "id_user": 3, "user": "Rasya", "password": "admin" },
    { "id_user": 4, "user": "ARA", "password": "UWU" },
    { "id_user": 5, "user": "AMAK", "password": "FAAFAF" },
    { "id_user": 6, "user": "anas", "password": "user" },
    { "id_user": 7, "user": "akaka", "password": "user" },
    { "id_user": 8, "user": "UWU", "password": "amao" },
    { "id_user": 9, "user": "alfian", "password": "12345" },
    { "id_user": 10, "user": "Rasya", "password": "admin" },
    { "id_user": 11, "user": "Rasya", "password": "admin" },
    { "id_user": 12, "user": "ARA", "password": "UWU" },
    { "id_user": 13, "user": "AMAK", "password": "FAAFAF" },
    { "id_user": 14, "user": "anas", "password": "user" },
    { "id_user": 15, "user": "akaka", "password": "user" },
    { "id_user": 16, "user": "UWU", "password": "amao" },
    { "id_user": 17, "user": "alfian", "password": "12345" },
    { "id_user": 18, "user": "Rasya", "password": "admin" },
    { "id_user": 19, "user": "Rasya", "password": "admin" },
    { "id_user": 20, "user": "ARA", "password": "UWU" },
    { "id_user": 21, "user": "AMAK", "password": "FAAFAF" },
    { "id_user": 22, "user": "anas", "password": "user" },
    { "id_user": 23, "user": "akaka", "password": "user" },
    { "id_user": 24, "user": "UWU", "password": "amao" },
    { "id_user": 25, "user": "alfian", "password": "12345" },
    { "id_user": 26, "user": "Rasya", "password": "admin" },
    { "id_user": 27, "user": "Rasya", "password": "admin" },
    { "id_user": 28, "user": "ARA", "password": "UWU" },
    { "id_user": 29, "user": "AMAK", "password": "FAAFAF" },
    { "id_user": 30, "user": "anas", "password": "user" },
    { "id_user": 31, "user": "akaka", "password": "user" },
    { "id_user": 33, "user": "UWU", "password": "amao" },
    { "id_user": 34, "user": "Rasya", "password": "admin" },
    { "id_user": 35, "user": "Rasya", "password": "admin" },
    { "id_user": 36, "user": "ARA", "password": "UWU" },
    { "id_user": 37, "user": "AMAK", "password": "FAAFAF" },
    { "id_user": 38, "user": "anas", "password": "user" },
    { "id_user": 39, "user": "akaka", "password": "user" },
    { "id_user": 40, "user": "UWU", "password": "amao" },
    { "id_user": 41, "user": "ARA", "password": "UWU" },
    { "id_user": 42, "user": "AMAK", "password": "FAAFAF" },
    { "id_user": 43, "user": "anas", "password": "user" },
    { "id_user": 44, "user": "akaka", "password": "user" },
    { "id_user": 45, "user": "UWU", "password": "amao" },
];

const simpanans = [
    { "id_simpanan": 1, "simpanan_pokok": 750000, "simpanan_wajib": 100000, "simpanan_sukarela": 100000, "simpanan_hariraya": 100000, "user_id": 1 },
    { "id_simpanan": 2, "simpanan_pokok": 750000, "simpanan_wajib": 200000, "simpanan_sukarela": 200000, "simpanan_hariraya": 200000, "user_id": 2 },
    { "id_simpanan": 3, "simpanan_pokok": 750000, "simpanan_wajib": 300000, "simpanan_sukarela": 300000, "simpanan_hariraya": 300000, "user_id": 3 },
    { "id_simpanan": 4, "simpanan_pokok": 750000, "simpanan_wajib": 500000, "simpanan_sukarela": 500000, "simpanan_hariraya": 500000, "user_id": 4 },
    { "id_simpanan": 5, "simpanan_pokok": 750000, "simpanan_wajib": 400000, "simpanan_sukarela": 400000, "simpanan_hariraya": 400000, "user_id": 5 },
    { "id_simpanan": 6, "simpanan_pokok": 750000, "simpanan_wajib": 600000, "simpanan_sukarela": 600000, "simpanan_hariraya": 600000, "user_id": 6 },
    { "id_simpanan": 7, "simpanan_pokok": 750000, "simpanan_wajib": 800000, "simpanan_sukarela": 800000, "simpanan_hariraya": 800000, "user_id": 7 },
    { "id_simpanan": 8, "simpanan_pokok": 750000, "simpanan_wajib": 700000, "simpanan_sukarela": 700000, "simpanan_hariraya": 700000, "user_id": 8 },
    { "id_simpanan": 9, "simpanan_pokok": 750000, "simpanan_wajib": 100000, "simpanan_sukarela": 100000, "simpanan_hariraya": 100000, "user_id": 9 },
    { "id_simpanan": 10, "simpanan_pokok": 750000, "simpanan_wajib": 200000, "simpanan_sukarela": 200000, "simpanan_hariraya": 200000, "user_id": 10 },
    { "id_simpanan": 11, "simpanan_pokok": 750000, "simpanan_wajib": 300000, "simpanan_sukarela": 300000, "simpanan_hariraya": 300000, "user_id": 11 },
    { "id_simpanan": 12, "simpanan_pokok": 750000, "simpanan_wajib": 500000, "simpanan_sukarela": 500000, "simpanan_hariraya": 500000, "user_id": 12 },
    { "id_simpanan": 13, "simpanan_pokok": 750000, "simpanan_wajib": 400000, "simpanan_sukarela": 400000, "simpanan_hariraya": 400000, "user_id": 13 },
    { "id_simpanan": 14, "simpanan_pokok": 750000, "simpanan_wajib": 600000, "simpanan_sukarela": 600000, "simpanan_hariraya": 600000, "user_id": 14 },
    { "id_simpanan": 15, "simpanan_pokok": 750000, "simpanan_wajib": 800000, "simpanan_sukarela": 800000, "simpanan_hariraya": 800000, "user_id": 15 },
    { "id_simpanan": 16, "simpanan_pokok": 750000, "simpanan_wajib": 700000, "simpanan_sukarela": 700000, "simpanan_hariraya": 700000, "user_id": 16 },
    { "id_simpanan": 17, "simpanan_pokok": 750000, "simpanan_wajib": 100000, "simpanan_sukarela": 100000, "simpanan_hariraya": 100000, "user_id": 17 },
    { "id_simpanan": 18, "simpanan_pokok": 750000, "simpanan_wajib": 200000, "simpanan_sukarela": 200000, "simpanan_hariraya": 200000, "user_id": 18 },
    { "id_simpanan": 19, "simpanan_pokok": 750000, "simpanan_wajib": 300000, "simpanan_sukarela": 300000, "simpanan_hariraya": 300000, "user_id": 19 },
    { "id_simpanan": 20, "simpanan_pokok": 750000, "simpanan_wajib": 500000, "simpanan_sukarela": 500000, "simpanan_hariraya": 500000, "user_id": 20 },
    { "id_simpanan": 21, "simpanan_pokok": 750000, "simpanan_wajib": 400000, "simpanan_sukarela": 400000, "simpanan_hariraya": 400000, "user_id": 21 },
    { "id_simpanan": 22, "simpanan_pokok": 750000, "simpanan_wajib": 600000, "simpanan_sukarela": 600000, "simpanan_hariraya": 600000, "user_id": 22 },
    { "id_simpanan": 23, "simpanan_pokok": 750000, "simpanan_wajib": 800000, "simpanan_sukarela": 800000, "simpanan_hariraya": 800000, "user_id": 23 },
    { "id_simpanan": 24, "simpanan_pokok": 750000, "simpanan_wajib": 700000, "simpanan_sukarela": 700000, "simpanan_hariraya": 700000, "user_id": 24 },
    { "id_simpanan": 25, "simpanan_pokok": 750000, "simpanan_wajib": 100000, "simpanan_sukarela": 100000, "simpanan_hariraya": 100000, "user_id": 25 },
    { "id_simpanan": 26, "simpanan_pokok": 750000, "simpanan_wajib": 200000, "simpanan_sukarela": 200000, "simpanan_hariraya": 200000, "user_id": 26 },
    { "id_simpanan": 27, "simpanan_pokok": 750000, "simpanan_wajib": 300000, "simpanan_sukarela": 300000, "simpanan_hariraya": 300000, "user_id": 27 },
    { "id_simpanan": 28, "simpanan_pokok": 750000, "simpanan_wajib": 500000, "simpanan_sukarela": 500000, "simpanan_hariraya": 500000, "user_id": 28 },
    { "id_simpanan": 29, "simpanan_pokok": 750000, "simpanan_wajib": 400000, "simpanan_sukarela": 400000, "simpanan_hariraya": 400000, "user_id": 29 },
    { "id_simpanan": 30, "simpanan_pokok": 750000, "simpanan_wajib": 600000, "simpanan_sukarela": 600000, "simpanan_hariraya": 600000, "user_id": 30 },
    { "id_simpanan": 31, "simpanan_pokok": 750000, "simpanan_wajib": 800000, "simpanan_sukarela": 800000, "simpanan_hariraya": 800000, "user_id": 31 },
    { "id_simpanan": 32, "simpanan_pokok": 750000, "simpanan_wajib": 700000, "simpanan_sukarela": 700000, "simpanan_hariraya": 700000, "user_id": 32 },
    { "id_simpanan": 33, "simpanan_pokok": 750000, "simpanan_wajib": 100000, "simpanan_sukarela": 100000, "simpanan_hariraya": 100000, "user_id": 33 },
    { "id_simpanan": 34, "simpanan_pokok": 750000, "simpanan_wajib": 200000, "simpanan_sukarela": 200000, "simpanan_hariraya": 200000, "user_id": 34 },
    { "id_simpanan": 35, "simpanan_pokok": 750000, "simpanan_wajib": 300000, "simpanan_sukarela": 300000, "simpanan_hariraya": 300000, "user_id": 35 },
    { "id_simpanan": 36, "simpanan_pokok": 750000, "simpanan_wajib": 500000, "simpanan_sukarela": 500000, "simpanan_hariraya": 500000, "user_id": 36 },
    { "id_simpanan": 37, "simpanan_pokok": 750000, "simpanan_wajib": 400000, "simpanan_sukarela": 400000, "simpanan_hariraya": 400000, "user_id": 37 },
    { "id_simpanan": 38, "simpanan_pokok": 750000, "simpanan_wajib": 600000, "simpanan_sukarela": 600000, "simpanan_hariraya": 600000, "user_id": 38 },
    { "id_simpanan": 39, "simpanan_pokok": 750000, "simpanan_wajib": 800000, "simpanan_sukarela": 800000, "simpanan_hariraya": 800000, "user_id": 39 },
    { "id_simpanan": 40, "simpanan_pokok": 750000, "simpanan_wajib": 700000, "simpanan_sukarela": 700000, "simpanan_hariraya": 700000, "user_id": 40 },
    { "id_simpanan": 41, "simpanan_pokok": 750000, "simpanan_wajib": 300000, "simpanan_sukarela": 300000, "simpanan_hariraya": 300000, "user_id": 41 },
    { "id_simpanan": 42, "simpanan_pokok": 750000, "simpanan_wajib": 500000, "simpanan_sukarela": 500000, "simpanan_hariraya": 500000, "user_id": 42 },
    { "id_simpanan": 43, "simpanan_pokok": 750000, "simpanan_wajib": 400000, "simpanan_sukarela": 400000, "simpanan_hariraya": 400000, "user_id": 43 },
    { "id_simpanan": 44, "simpanan_pokok": 750000, "simpanan_wajib": 600000, "simpanan_sukarela": 600000, "simpanan_hariraya": 600000, "user_id": 44 },
    { "id_simpanan": 45, "simpanan_pokok": 750000, "simpanan_wajib": 600000, "simpanan_sukarela": 600000, "simpanan_hariraya": 600000, "user_id": 45 },
];

const DaftarSimpanan = () => {
    const [showFormSimpananSkr, setShowFormSimpananSkr] = useState(false);
    const [showFormTambahAllSimpanan, setShowFormTambahAllSimpanan] = useState(false);
    const [showFormSimpananHr, setShowFormSimpananHr] = useState(false);
    const [currentNasabah, setCurrentNasabah] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');  // State untuk pencarian
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);
    const [errorMessage, setErrorMessage] = useState('');

    const { simpanans, handleTambahSimpanan, tampilkanSimpanans, kurangSukarela ,kurangHariRaya} = useMembers();

    console.log(simpanans)

    // const initialNasabah = users.map(user => {
    //     const simpanan = simpanans.find(s => s.user_id === user.id_user) || {
    //         simpanan_pokok: 0,
    //         simpanan_wajib: 0,
    //         simpanan_sukarela: 0,
    //         simpanan_hariraya: 0
    //     };
    //     return {
    //         id: user.id_user,
    //         nama: user.user,
    //         password: user.password,
    //         simpananPokok: simpanan.simpanan_pokok,
    //         simpananWajib: simpanan.simpanan_wajib,
    //         simpananSukarela: simpanan.simpanan_sukarela,
    //         simpananHariRaya: simpanan.simpanan_hariraya
    //     };
    // });

    // const [nasabah, setNasabah] = useState(initialNasabah);
    const [nama, setNama] = useState('')
    const [simpananPokok, setSimpananPokok] = useState('');
    const [simpananWajib, setSimpananWajib] = useState('');
    const [simpananSukarela, setSimpananSukarela] = useState('');
    const [simpananHariRaya, setSimpananHariRaya] = useState('');

    const hapusNasabah = id => {
        const updatedNasabah = nasabah.filter(nasabah => nasabah.id !== id);
        setNasabah(updatedNasabah);
    };

    const handleCloseFormTambah = () => {
        setShowFormTambahAllSimpanan(false);
        setCurrentNasabah(null);
        setSimpananPokok('');
        setSimpananWajib('');
        setSimpananSukarela('');
        setSimpananHariRaya('');
    };

    const handleCloseSkr = () => {
        setShowFormSimpananSkr(false);
        setCurrentNasabah(null);
        setSimpananSukarela('');
    };

    const handleCloseHr = () => {
        setShowFormSimpananHr(false);
        setCurrentNasabah(null);
        setSimpananHariRaya('');
    };

    const handleTambahAllSimpanan = async () => {
        if (!simpananPokok && !simpananWajib && !simpananSukarela && !simpananHariRaya) {
            setErrorMessage('*Tidak bisa mengirim jika inputan kosong semua.');
            return;
        }


        try {
            await handleTambahSimpanan(currentNasabah, simpananPokok, simpananWajib, simpananSukarela, simpananHariRaya);
            setSimpananPokok('');
            setSimpananWajib('');
            setSimpananSukarela('');
            setSimpananHariRaya('');
            await tampilkanSimpanans();
            setShowFormTambahAllSimpanan(false);
            await tampilkanSimpanans();
        } catch (error) {
            console.log('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }

        handleCloseFormTambah();
    };


    const handleClickTambahAllSimpanan = (id, nama) => {
        setNama(nama)
        setCurrentNasabah(id);
        setSimpananPokok('');
        setSimpananWajib('');
        setSimpananSukarela('');
        setSimpananHariRaya('');
        setErrorMessage(''); // Reset error message when opening the form
        setShowFormTambahAllSimpanan(true);
    };

    const handleKurangClickSkr = (id) => {
        setCurrentNasabah(id)
        setNama(nama)
        setSimpananSukarela(simpananSukarela)
        setShowFormSimpananSkr(true)
    };

    const handleKurangClickHr = id => {
        setCurrentNasabah(id)
        setNama(nama)
        setSimpananHariRaya(simpananHariRaya)
        setShowFormSimpananHr(true);
    };

    const handleKurangSimpananSkr =  async () => {
        if (!simpananSukarela) {
            setErrorMessage('*Tidak bisa mengirim jika inputan kosong.');
            return;
        }

        try {
            await kurangSukarela(currentNasabah, simpananSukarela, simpananHariRaya);
            setSimpananSukarela('')
            tampilkanSimpanans()
            setShowFormSimpananSkr(false)
            tampilkanSimpanans()
        } catch (error) {
            console.log('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

    const handleKurangSimpananHr = async () => {
        if (!simpananHariRaya) {
            setErrorMessage('*Tidak bisa mengirim jika inputan kosong.');
            return;
        }

        try {
            await kurangHariRaya(currentNasabah, simpananSukarela, simpananHariRaya);
            setSimpananHariRaya('')
            tampilkanSimpanans()
            setShowFormSimpananHr(false)
            tampilkanSimpanans()
        } catch (error) {
            console.log('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    const filteredNasabah = simpanans.filter(n => n.nama.toLowerCase().includes(searchQuery.toLowerCase()));


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

                {showFormTambahAllSimpanan && (
                    <div className='fixed overlay bg-black bg-opacity-50 w-screen h-screen bottom-[1px] right-[1px]'>
                        <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-[35%] bg-white rounded-3xl border-[#2C6975] w-[700px] py-[3%] flex flex-col items-center shadow-2xl">
                            <div className="w-[600px]">
                                <button
                                    className="top-1 left-1 text-gray-500 hover:text-gray-700"
                                    onClick={handleCloseFormTambah}
                                >
                                    <FontAwesomeIcon icon={faXmark} size="lg" />
                                </button>
                            </div>

                            <h1 className="text-center text-2xl font-bold text-[#2C6975]">Simpanan</h1>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#121212] font-bold">{nama}</h1>
                                <p>simpanan Pokok sebelumnya : {currentNasabah?.simpananPokok}</p>
                                <input
                                    type="number" placeholder="Masukkan nominal untuk ditambahkan"
                                    className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                    value={simpananPokok}
                                    onChange={e => setSimpananPokok(e.target.value)}
                                />
                                <p className='mt-[10px]'>simpanan Wajib sebelumnya : {currentNasabah?.simpananWajib}</p>
                                <input
                                    type="number" placeholder="Masukkan nominal untuk ditambahkan"
                                    className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                    value={simpananWajib}
                                    onChange={e => setSimpananWajib(e.target.value)}
                                />
                                <p className='mt-[10px]'>simpanan Sukarela sebelumnya : {currentNasabah?.simpananSukarela}</p>
                                <input
                                    type="number" placeholder="Masukkan nominal untuk ditambahkan"
                                    className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                    value={simpananSukarela}
                                    onChange={e => setSimpananSukarela(e.target.value)}
                                />
                                <p className='mt-[10px]'>simpanan Hari Raya sebelumnya : {currentNasabah?.simpananHariRaya}</p>
                                <input
                                    type="number" placeholder="Masukkan nominal untuk ditambahkan"
                                    className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                    value={simpananHariRaya}
                                    onChange={e => setSimpananHariRaya(e.target.value)}
                                />
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                <button onClick={handleTambahAllSimpanan} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[600px] h-[40px]">
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showFormSimpananSkr && (
                    <div className='fixed overlay bg-black bg-opacity-50 w-screen h-screen bottom-[1px] right-[1px]'>
                        <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-[35%] bg-white rounded-3xl border-[#2C6975] w-[700px] py-[3%] flex flex-col items-center shadow-2xl">
                            <div className="w-[600px]">
                                <button
                                    className="top-1 left-1 text-gray-500 hover:text-gray-700"
                                    onClick={handleCloseSkr}
                                >
                                    <FontAwesomeIcon icon={faXmark} size="lg" />
                                </button>
                            </div>

                            <h1 className="text-center text-2xl font-bold text-[#2C6975]">Simpanan</h1>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#121212] font-bold">{nama}</h1>
                                <p>simpanan sukarela sebelumnya : {currentNasabah?.simpananSukarela}</p>
                                <input
                                    type="number" placeholder="Masukkan Nominal Penarikan"
                                    className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                    value={simpananSukarela}
                                    onChange={e => setSimpananSukarela(e.target.value)}
                                />
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                <button onClick={handleKurangSimpananSkr} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[600px] h-[40px]">
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showFormSimpananHr && (
                    <div className='fixed overlay bg-black bg-opacity-50 w-screen h-screen bottom-[1px] right-[1px]'>
                        <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-[35%] bg-white rounded-3xl border-[#2C6975] w-[700px] py-[3%] flex flex-col items-center shadow-2xl">
                            <div className="w-[600px]">
                                <button
                                    className="top-1 left-1 text-gray-500 hover:text-gray-700"
                                    onClick={handleCloseHr}
                                >
                                    <FontAwesomeIcon icon={faXmark} size="lg" />
                                </button>
                            </div>

                            <h1 className="text-center text-2xl font-bold text-[#2C6975]">Simpanan</h1>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#121212] font-bold">{currentNasabah?.nama}</h1>
                                <p >simpanan hari raya sebelumnya : {currentNasabah?.simpananHariRaya}</p>
                                <input
                                    type="number" placeholder="Masukkan Nominal Penarikan"
                                    className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                    onChange={e => setSimpananHariRaya(e.target.value)}
                                />
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                <button onClick={handleKurangSimpananHr} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[600px] h-[40px]">
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </div>
                )}

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

                <div className="max-h-60 overflow-y-auto overflow-x-auto shadow-lg">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="w-20 px-4 py-2">Nama</th>
                                <th className="w-20 px-4 py-2">Simpanan Pokok</th>
                                <th className="w-20 px-4 py-2">Simpanan Wajib</th>
                                <th className="w-10 px-4 py-2">Simpanan Sukarela</th>
                                <th className="w-1 px-4 py-2">Simpanan Hari Raya</th>
                                <th className="w-1 px-2 py-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((nasabah, index) => (
                                <tr key={nasabah.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="border text-center px-4 py-2">{nasabah.nama}</td>
                                    <td className="border text-center px-4 py-2">{nasabah.simpanan_pokok.toLocaleString()}</td>
                                    <td className="border text-center px-4 py-2">{nasabah.simpanan_wajib.toLocaleString()}</td>
                                    <td className="border text-center px-4 py-2"><div className='flex justify-evenly'>{nasabah.simpanan_sukarela.toLocaleString()}
                                        <button onClick={() => handleKurangClickSkr(nasabah.id_simpanan)} className='bg-[#ff7373]  pr-[10px] pl-[10px] rounded-full '><span className='text-white'>-</span></button></div>
                                    </td>
                                    <td className="border text-center px-4 py-2"><div className='flex justify-evenly'>{nasabah.simpanan_hariraya.toLocaleString()}
                                        <button onClick={() => handleKurangClickHr(nasabah.id_simpanan)} className='bg-[#ff7373] pr-[10px] pl-[10px] rounded-full '><span className='text-white'>-</span></button></div>
                                    </td>
                                    <td className="px-4 py-2 flex justify-evenly items-center align-middle">
                                        <button
                                            className="text-[#626262] hover:text-[#505050]"
                                            onClick={() => handleClickTambahAllSimpanan(nasabah.id_simpanan, nasabah.nama)}
                                        >
                                            <FontAwesomeIcon icon={faPlusCircle} />
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
        </div >
    );
};

export default DaftarSimpanan;