import { faMagnifyingGlass, faPlusCircle, faTrashCan, faXmark, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useMembers } from './AdminContext';

const DaftarSimpanan = () => {
    const [showFormSimpananSkr, setShowFormSimpananSkr] = useState(false);
    const [showFormTambahAllSimpanan, setShowFormTambahAllSimpanan] = useState(false);
    const [showFormSimpananHr, setShowFormSimpananHr] = useState(false);
    const [currentNasabah, setCurrentNasabah] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');  // State untuk pencarian
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);
    const [errorMessage, setErrorMessage] = useState('');
    const [jenisSimpanan, setJenisSimpanan] = useState('');
    const [nominal, setNominal] = useState('');
    const [type_simpananan, setType_simpananan] = useState()

    const { simpanans, kurangSimpanan, handleTambahSimpanan, handleDelete, tampilkanSimpanans, fetchAnggota } = useMembers();

    // console.log(simpanans)

    // const [nasabah, setNasabah] = useState(initialNasabah);
    const [nama, setNama] = useState('')
    // const [simpananPokok, setSimpananPokok] = useState('');
    // const [simpananWajib, setSimpananWajib] = useState('');
    const [simpananSukarela, setSimpananSukarela] = useState('');
    const [simpananHariRaya, setSimpananHariRaya] = useState('');

    const hapusNasabah = async (id) => {
        const konfirm = confirm("Apakah Anda Yakin Ingin Menghapus Anggota Ini?")
        if (konfirm) {
            try {
                await handleDelete(id)
                alert("berhasil menghapus")
                fetchAnggota()
            } catch (error) {
                alert("Terjadi Kesalahan Saat Menghapus Anggota:" + error.message);

            }
        } else {
            alert("Penghapusan Dibatalkan")
        }
        // tampilkanSimpanans()
        tampilkanSimpanans()
    }

    const handleCloseFormTambah = () => {
        setShowFormTambahAllSimpanan(false);
        setCurrentNasabah(null);
        // setSimpananPokok('');
        // setSimpananWajib('');
        setSimpananSukarela('');
        setSimpananHariRaya('');
        tampilkanSimpanans()
    };

    const handleCloseSkr = () => {
        setShowFormSimpananSkr(false);
        setCurrentNasabah(null);
        setSimpananSukarela('');
        tampilkanSimpanans()
    };

    const handleCloseHr = () => {
        setShowFormSimpananHr(false);
        setCurrentNasabah(null);
        setSimpananHariRaya('');
        tampilkanSimpanans()
    };

    const handleTambahAllSimpanan = async () => {
        if (!nominal) {
            setErrorMessage('*Tidak bisa mengirim jika inputan kosong semua.');
            return;
        }

        try {
            await handleTambahSimpanan(currentNasabah, jenisSimpanan, nominal);
            setNominal('')
            setJenisSimpanan('')

            // setSimpananPokok('');
            // setSimpananWajib('');
            // setSimpananSukarela('');
            // setSimpananHariRaya('');
            setShowFormTambahAllSimpanan(false);
            // tampilkanSimpanans();
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
        tampilkanSimpanans()
    };


    const handleClickTambahAllSimpanan = (id, nama) => {
        setNama(nama)
        setCurrentNasabah(id);
        setNominal('');
        setJenisSimpanan('')
        setErrorMessage(''); // Reset error message when opening the form
        setShowFormTambahAllSimpanan(true);
    };

    const handleKurangClickSkr = (id) => {
        setCurrentNasabah(id)
        setNama(nama)
        setType_simpananan("simpanan_sukarela")
        setSimpananSukarela(simpananSukarela)
        setShowFormSimpananSkr(true)
        tampilkanSimpanans()
    };


    const handleKurangClickHr = id => {
        setCurrentNasabah(id)
        setNama(nama)
        setType_simpananan("simpanan_hariraya")
        setSimpananHariRaya(simpananHariRaya)
        setShowFormSimpananHr(true);
    };

    const handleKurangSimpananSkr = async () => {
        if (!simpananSukarela) {
            setErrorMessage('*Tidak bisa mengirim jika inputan kosong.');
            return;
        }

        try {
            await kurangSimpanan(currentNasabah, type_simpananan, simpananSukarela);
            setSimpananSukarela('')
            setType_simpananan("simpanan_sukarela")
            setShowFormSimpananSkr(false)
        } catch (error) {
            console.log('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
        tampilkanSimpanans()

    }


    const handleKurangSimpananHr = async () => {
        if (!simpananHariRaya) {
            setErrorMessage('*Tidak bisa mengirim jika inputan kosong.');
            return;
        }

        try {
            await kurangSimpanan(currentNasabah, type_simpananan, simpananHariRaya);
            setSimpananHariRaya('')
            setType_simpananan("simpanan_hariraya")
            setShowFormSimpananHr(false)
        } catch (error) {
            console.log('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
        tampilkanSimpanans()
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
        <div className="flex flex-col bg-[#F4F4F4] w-[100%]  md:pt-[80px] pt-[100px] p-[25px]">
            <div className="rounded-s-xl rounded-e-xl bg-gradient-to-r from-[#2C6975] to-[#52C5DB]">
                <div className="mx-[30px] md:py-[20px] py-[10px]">
                    <h2 className="text-white font-normal text-2xl">Halo, {name}</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Konsumen KSU TEKNIKA MANDIRI</p>
                </div>
            </div>

            <div className="mt-[25px]">
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Daftar Simpanan Koperasi</h2>

                {showFormTambahAllSimpanan && (
                    <div className='fixed overlay bg-black bg-opacity-50 w-screen h-screen bottom-[1px] right-[1px]'>
                        <div className="absolute top-1/2 left-[55%] transform md:-translate-x-1/2 -translate-x-[165px]  -translate-y-[50%] bg-white rounded-3xl border-[#2C6975] md:w-[700px] w-[300px] h-[420px]  flex flex-col items-center shadow-2xl">
                            <div className="md:w-[600px]">
                                <button
                                    className="mt-[10px] mr-[260px]  text-gray-500 hover:text-gray-700"
                                    onClick={handleCloseFormTambah}
                                >
                                    <FontAwesomeIcon icon={faXmark} size="lg" />
                                </button>
                            </div>

                            <h1 className="text-center text-2xl font-bold text-[#2C6975]">Simpanan</h1>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#121212] font-bold">{nama}</h1>
                                <p>simpanan Pokok sebelumnya : {currentNasabah?.simpanan_pokok}</p>
                                <input
                                    type="number" placeholder="Masukkan nominal untuk ditambahkan"
                                    className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[250px] h-[40px] px-[15px] mb-[20px]"
                                    value={nominal}
                                    onChange={e => setNominal(e.target.value)}
                                />
                                <div className="flex flex-col gap-[10px] mb-[20px]">

                                    <label className="text-md font-medium text-[#2C6975]">Jenis Simpanan:</label>
                                    <div className="flex flex-col">
                                        <div>
                                            <input
                                                type="radio"
                                                id="simpanan_pokok"
                                                name="jenis_simpanan"
                                                value="simpanan_pokok"
                                                checked={jenisSimpanan === 'simpanan_pokok'}
                                                onChange={(e) => setJenisSimpanan(e.target.value)}
                                                className="mr-[10px]"
                                                required />
                                            <label htmlFor="simpanan_pokok" className="mr-[20px]">Simpanan Pokok</label>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                id="simpanan_wajib"
                                                name="jenis_simpanan"
                                                value="simpanan_wajib"
                                                checked={jenisSimpanan === 'simpanan_wajib'}
                                                onChange={(e) => setJenisSimpanan(e.target.value)}
                                                className="mr-[10px]" required />
                                            <label htmlFor="simpanan_wajib">Simpanan Wajib</label>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                id="simpanan_sukarela"
                                                name="jenis_simpanan"
                                                value="simpanan_sukarela"
                                                checked={jenisSimpanan === 'simpanan_sukarela'}
                                                onChange={(e) => setJenisSimpanan(e.target.value)}
                                                className="mr-[10px]" required />
                                            <label htmlFor="simpanan_sukarela" className="mr-[20px]">Simpanan Sukarela</label>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                id="simpanan_hariraya"
                                                name="jenis_simpanan"
                                                value="simpanan_hariraya"
                                                checked={jenisSimpanan === 'simpanan_hariraya'}
                                                onChange={(e) => setJenisSimpanan(e.target.value)}
                                                className="mr-[10px]" required />
                                            <label htmlFor="simpanan_hariraya" className="mr-[20px]">Simpanan Hari Raya</label>
                                        </div>
                                    </div>


                                </div>
                                {/* <p className='mt-[10px]'>simpanan Wajib sebelumnya : {currentNasabah?.simpananWajib}</p>
                                <input
                                    type="number" placeholder="Masukkan nominal untuk ditambahkan"
                                    className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[250px] h-[40px] px-[15px]"
                                    value={simpananWajib}
                                    onChange={e => setSimpananWajib(e.target.value)}
                                />
                                <p className='mt-[10px]'>simpanan Sukarela sebelumnya : {currentNasabah?.simpananSukarela}</p>
                                <input
                                    type="number" placeholder="Masukkan nominal untuk ditambahkan"
                                    className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[250px] h-[40px] px-[15px]"
                                    value={simpananSukarela}
                                    onChange={e => setSimpananSukarela(e.target.value)}
                                />
                                <p className='mt-[10px]'>simpanan Hari Raya sebelumnya : {currentNasabah?.simpananHariRaya}</p>
                                <input
                                    type="number" placeholder="Masukkan nominal untuk ditambahkan"
                                    className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[250px] h-[40px] px-[15px]"
                                    value={simpananHariRaya}
                                    onChange={e => setSimpananHariRaya(e.target.value)}
                                /> */}
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                <button onClick={handleTambahAllSimpanan} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white md:w-[600px] w-[250px] h-[40px]">
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
                        className="rounded-full md:w-[50%] h-[40px] border-solid border-[1px] shadow-lg pl-[30px]"
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
                                <th className=" px-4 py-2">Nama</th>
                                <th className=" px-4 py-2">Simpanan Pokok</th>
                                <th className=" px-4 py-2">Simpanan Wajib</th>
                                <th className=" px-4 py-2">Simpanan Sukarela</th>
                                <th className="px-4 py-2">Simpanan Hari Raya</th>
                                <th className=" px-2 py-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((nasabah, index) => (
                                <tr key={nasabah.id_user} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="border text-center px-4 py-2">{nasabah.nama}</td>
                                    <td className="border text-center px-4 py-2">{nasabah.simpanan_pokok.toLocaleString()}</td>
                                    <td className="border text-center px-4 py-2">{nasabah.simpanan_wajib.toLocaleString()}</td>
                                    <td className="border text-center px-4 py-2">
                                        <div className='flex justify-evenly'>{nasabah.simpanan_sukarela.toLocaleString()}
                                            <button onClick={() => handleKurangClickSkr(nasabah.id_simpanan)}>
                                                <span className='text-white'><FontAwesomeIcon icon={faCircleMinus} size='xl' style={{ color: "#ff7373", }} /></span>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="border text-center px-4 py-2">
                                        <div className='flex justify-evenly'>{nasabah.simpanan_hariraya.toLocaleString()}
                                            <button onClick={() => handleKurangClickHr(nasabah.id_simpanan)} >
                                                <span className='text-white'> <FontAwesomeIcon icon={faCircleMinus} size='xl' style={{ color: "#ff7373", }} /></span>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 flex gap-[20px] items-center align-middle">
                                        <button
                                            className="text-[#626262] hover:text-[#505050]"
                                            onClick={() => handleClickTambahAllSimpanan(nasabah.id_simpanan, nasabah.nama)}
                                        >
                                            <FontAwesomeIcon icon={faPlusCircle} size='xl' />
                                        </button>
                                        <button
                                            className="text-[#626262] hover:text-[#505050]"
                                            onClick={() => hapusNasabah(nasabah.id_user)}
                                        >
                                            <FontAwesomeIcon icon={faTrashCan} size='xl' />
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