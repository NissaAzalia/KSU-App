import { faMagnifyingGlass, faPlusCircle, faTrashCan, faXmark, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useMembers } from './AdminContext';
import { useAuth } from '../auth/Auth';

const DaftarSimpanan = () => {
    const [showFormSimpananSkr, setShowFormSimpananSkr] = useState(false);
    const [showFormTambahAllSimpanan, setShowFormTambahAllSimpanan] = useState(false);
    const [showFormSimpananHr, setShowFormSimpananHr] = useState(false);
    const [currentNasabah, setCurrentNasabah] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);
    const [jenisSimpanan, setJenisSimpanan] = useState('');
    const [nominal, setNominal] = useState('');
    const [type_simpananan, setType_simpananan] = useState()
    const { simpanans, kurangSimpanan, handleTambahSimpanan, handleDelete, tampilkanSimpanans, fetchAnggota } = useMembers();
    const { name } = useAuth()
    const [nama, setNama] = useState('')
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
        tampilkanSimpanans()
    }

    const handleCloseFormTambah = () => {
        setShowFormTambahAllSimpanan(false);
        setCurrentNasabah(null);
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
            alert("inputan tidak boleh kosong")
            return;
        } else if (!jenisSimpanan) {
            alert("pilih jenis simpanan terlebih dahulu")
            return;
        } else {
            try {
                await handleTambahSimpanan(currentNasabah, jenisSimpanan, nominal);
                setNominal('')
                setJenisSimpanan('')
                setShowFormTambahAllSimpanan(false);
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



        handleCloseFormTambah();
        tampilkanSimpanans()
    };

    const handleClickTambahAllSimpanan = (id, nama) => {
        setNama(nama)
        setCurrentNasabah(id);
        setNominal('');
        setJenisSimpanan('')
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
            alert("inputan tidak boleh kosong")
            return;
        }
        try {
            await kurangSimpanan(currentNasabah, type_simpananan, simpananSukarela);
            setSimpananSukarela('')
            setType_simpananan("simpanan_sukarela")
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
            tampilkanSimpanans()
    }

    const handleKurangSimpananHr = async () => {
        if (!simpananHariRaya) {
            alert("inputan tidak boleh kosong")
            return;
        }
          Swal.showLoading()
        try {
            await kurangSimpanan(currentNasabah, type_simpananan, simpananHariRaya);
            setSimpananHariRaya('')
            setType_simpananan("simpanan_hariraya")
            tampilkanSimpanans()
            setShowFormSimpananHr(false)
            tampilkanSimpanans()
            Swal.showLoading()
        } catch (error) {
           return error
        }
        tampilkanSimpanans()
    };

    const filteredNasabah = simpanans.filter(n => n.nama.toLowerCase().includes(searchQuery.toLowerCase()));

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
                                <h1 className="text-lg text-[#5d5d5d] font-bold mt-[-10px]">{nama}</h1>

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


                                <button onClick={handleTambahAllSimpanan} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white md:w-[600px] w-[250px] h-[40px]">
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showFormSimpananSkr && (
                    <div className='fixed overlay bg-black bg-opacity-50 w-screen h-screen bottom-[1px] right-[1px]'>
                        <div className="absolute top-1/2 left-[55%] transform md:-translate-x-1/2 -translate-x-[165px] -translate-y-[35%] bg-white rounded-3xl border-[#2C6975] md:w-[700px] w-[300px] h-[200px] flex flex-col items-center shadow-2xl">
                            <div className="md:w-[600px]">
                                <button
                                    className="mt-[10px] mr-[240px] text-gray-500 hover:text-gray-700"
                                    onClick={handleCloseSkr}
                                >
                                    <FontAwesomeIcon icon={faXmark} size="lg" />
                                </button>
                            </div>

                            <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[10px]">Sukarela</h1>
                            <div className="flex flex-col gap-2">

                                <input
                                    type="number" placeholder="Nominal Pengambilan"
                                    className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[200px] h-[40px] px-[15px]"
                                    value={simpananSukarela}
                                    onChange={e => setSimpananSukarela(e.target.value)}
                                />
                                <button onClick={handleKurangSimpananSkr} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white md:w-[600px] w-[200px] h-[40px] mb-[20px]">
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showFormSimpananHr && (
                    <div className='fixed overlay bg-black bg-opacity-50 w-screen h-screen bottom-[1px] right-[1px]'>
                        <div className="absolute top-1/2 left-[55%] transform md:-translate-x-1/2 -translate-x-[165px] -translate-y-[35%] bg-white rounded-3xl border-[#2C6975] md:w-[700px] w-[300px] h-[200px] flex flex-col items-center shadow-2xl">
                            <div className="md:w-[600px]">
                                <button
                                    className="mt-[10px] mr-[240px] text-gray-500 hover:text-gray-700"
                                    onClick={handleCloseHr}
                                >
                                    <FontAwesomeIcon icon={faXmark} size="lg" />
                                </button>
                            </div>

                            <h1 className="text-center text-2xl font-bold text-[#2C6975]  mb-[10px]">Hari Raya</h1>
                            <div className="flex flex-col gap-2">

                                <input
                                    type="number" placeholder="Masukkan Nominal Penarikan"
                                    className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[200px] h-[40px] px-[15px]"
                                    onChange={e => setSimpananHariRaya(e.target.value)}
                                />
                                <button onClick={handleKurangSimpananHr} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white md:w-[600px] w-[200px] h-[40px] mb-[20px]">
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className='bg-white p-[20px] pb-[30px] pt-[10px] justify-center shadow-sm'>
                    <div className="md:flex md:gap-3 items-center">
                        <div className="flex mt-[20px] w-[100%]">
                            <input
                                className=" md:w-[100%]  h-[40px] border-solid border-[1px] shadow-sm pl-[30px]  rounded rounded-r-none "
                                type="text"
                                placeholder="Cari nama nasabah"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className=' border olid p-[5px] pl-[10px] pr-[10px]  items-center  rounded rounded-l-none '>
                                <FontAwesomeIcon className='' icon={faMagnifyingGlass} />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="max-h-[100h] mt-[25px] overflow-y-auto overflow-x-auto bg-white p-[20px] shadow-lg">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className='text-[#f4f4f4]'>
                                <th className=" bg-[#2c6975eb] rounded rounded-r-none px-4 py-2">Nama</th>
                                <th className=" bg-[#2c6975eb] rounded-none px-4 py-2">Simpanan Pokok</th>
                                <th className=" bg-[#2c6975eb] rounded-none px-4 py-2">Simpanan Wajib</th>
                                <th className=" bg-[#2c6975eb] rounded-none px-4 py-2">Simpanan Sukarela</th>
                                <th className=" bg-[#2c6975eb] rounded-none px-4 py-2">Simpanan Hari Raya</th>
                                <th className=" bg-[#2c6975eb] rounded rounded-l-none px-2 py-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((nasabah, index) => (
                                <tr key={nasabah.id_user} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="border-b border-solid text-center px-4 py-2">{nasabah.nama}</td>
                                    <td className="border-b border-solid text-center px-4 py-2">{nasabah.simpanan_pokok.toLocaleString()}</td>
                                    <td className="border-b border-solid text-center px-4 py-2">{nasabah.simpanan_wajib.toLocaleString()}</td>
                                    <td className="border-b border-solid text-center px-4 py-2 pr-500px pl-500px">
                                        <div className='flex justify-between'>
                                            <div>
                                                {nasabah.simpanan_sukarela.toLocaleString()}
                                            </div>

                                            <button onClick={() => handleKurangClickSkr(nasabah.id_simpanan)}>
                                                <span className='text-white'><FontAwesomeIcon icon={faCircleMinus} size='xl' style={{ color: "#ff7373", }} /></span>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="border-b border-solid text-center px-4 py-1 pr-50px pl-150px">
                                        <div className='flex justify-between  p-2 rounded-sm mr-[10px] ml-[10px] '>
                                            <div> {nasabah.simpanan_hariraya.toLocaleString()}</div>
                                            <button onClick={() => handleKurangClickHr(nasabah.id_simpanan)} >
                                                <FontAwesomeIcon icon={faCircleMinus} size='xl' style={{ color: "#ff7373", }} />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="border-b border-solid border-gray-300 text-center items-center py-1  ">
                                        <button
                                            className="text-[#707070]  p-2 rounded-sm mr-[10px] ml-[10px] hover:text-[#979696]"
                                            onClick={() => handleClickTambahAllSimpanan(nasabah.id_simpanan, nasabah.nama)}
                                        >
                                            <FontAwesomeIcon icon={faPlusCircle} size='xl' />
                                        </button>
                                        <button
                                            className="text-[#707070]  p-2 rounded-sm mr-[10px] ml-[10px] hover:text-[#979696]"
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