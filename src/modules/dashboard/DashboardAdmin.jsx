/* eslint-disable react/prop-types */
import { faMagnifyingGlass, faTrashCan, faPenToSquare, faXmark, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useMembers } from './AdminContext';
import Swal from 'sweetalert2';
import { useAuth } from '../auth/Auth';

const DashboardAdmin = () => {
    const [showNomorHp, setShowNomorHp] = useState(false);
    const [showFormTambah, setShowFormTambah] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');  // State untuk pencarian
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);

    const { members, tambahAnggota, loadingAdd, handleDelete, fetchAnggota, updateMember, tampilkanSimpanans, tampilkanPinjaman } = useMembers();

    const [nama, setNama] = useState('');
    const [nomorHp, setNomorHp] = useState('');
    const [noBaru, setNoBaru] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { name } = useAuth()

    const handleTambahAnggota = async () => {
        if (!nama , !nomorHp , !username , !password) {
            alert("inputan tidak boleh ada yang kosong")
        } else {
            try {
                await tambahAnggota(nama, nomorHp, username, password);
                setNama('');
                setNomorHp('');
                setUsername('');
                setPassword('');
                setShowFormTambah(false);
                fetchAnggota()
                tampilkanSimpanans()
            } catch (error) {
                console.error('error', error)
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });

            }
        }



    }

    const deleteMember = async (id) => {
        const konfirm = confirm("Apakah Anda Yakin Ingin Menghapus Anggota Ini?")
        if (konfirm) {
            try {
                await handleDelete(id)
                alert("berhasil menghapus")
                fetchAnggota()
                tampilkanSimpanans()
                tampilkanPinjaman()
            } catch (error) {
                alert("Terjadi Kesalahan Saat Menghapus Anggota:" + error.message);

            }
        }
    }

    const handleUpdateNomorHp = async () => {
        if (!noBaru) {
            alert("inputan tidak boleh kosong")
        } else {
            try {
                await updateMember(currentId, noBaru);
                setNoBaru('');
                await fetchAnggota();
                setShowNomorHp(false);
                await fetchAnggota();
                alert("berhasil mengubah")
            } catch (error) {
                console.error('Error:', error);
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }
    };

    const handleClose = () => {
        setShowFormTambah(false);
        setShowNomorHp(false);
        setNama('');
        setNomorHp('')
        setUsername('');
        setPassword('');
    };

    const handleEditClick = (id, no_telp) => {
        setCurrentId(id)
        setNoBaru(no_telp)
        setShowNomorHp(true);
    };

    // Fungsi untuk memfilter nasabah berdasarkan kata kunci pencarian
    const filteredNasabah = members.filter(n =>
        n.nama.toLowerCase().includes(searchQuery.toLowerCase()));

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
        <div className="layer flex flex-col bg-[#F4F4F4] w-[100%]  md:pt-[80px] pt-[100px] p-[25px]">
            <div className="rounded-s-xl rounded-e-xl bg-gradient-to-r from-[#2C6975] to-[#52C5DB]">
                <div className="mx-[30px] md:py-[20px] py-[10px] ">
                    <h2 className="text-white font-normal text-2xl">Halo, {name}</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Konsumen KSU TEKNIKA MANDIRI</p>
                </div>
            </div>

            <div className="mt-[25px]">
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Daftar Anggota Koperasi</h2>

                {showNomorHp && (
                    <div className='fixed overlay bg-black bg-opacity-50 w-screen h-screen bottom-[1px] right-[1px]'>
                        <div className="absolute top-1/2 left-[55%] transform md:-translate-x-1/2 -translate-x-[165px] -translate-y-[35%] bg-white rounded-3xl border-[#2C6975] md:w-[700px] w-[300px] h-[200px] flex flex-col items-center shadow-2xl">
                            <div className="md:w-[600px]">
                                <button
                                    className="mt-[10px] mr-[240px] text-gray-500 hover:text-gray-700"
                                    onClick={handleClose}
                                >
                                    <FontAwesomeIcon icon={faXmark} size="lg" />
                                </button>
                            </div>

                            <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Ganti No. HP</h1>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#121212] font-bold">{nama}</h1>
                                <input
                                    type="string" placeholder="Masukkan Nomor Hp"
                                    className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[200px] h-[40px] px-[15px]"
                                    value={noBaru}
                                    onChange={(e) => setNoBaru(e.target.value)}
                                />
                                <button onClick={handleUpdateNomorHp} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white md:w-[600px] w-[200px] h-[40px] mb-[20px]">
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showFormTambah && (
                    <div className='fixed overlay bg-black bg-opacity-50 w-screen h-screen bottom-[1px] right-[1px]'>
                        <div className=" absolute top-1/2 left-[55%] transform md:-translate-x-1/2 -translate-x-[165px] -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] md:w-[700px] w-[300px] h-[350px] flex flex-col items-center shadow-2xl">
                            <div className="md:w-[600px]">
                                <button
                                    className="mt-[10px] mr-[240px] text-gray-500 hover:text-gray-700"
                                    onClick={handleClose}
                                >
                                    <FontAwesomeIcon icon={faXmark} size="lg" />
                                </button>
                            </div>

                            <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Tambah Anggota</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-2">
                                    <input
                                        className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[200px] h-[40px] px-[15px]"
                                        type="text" placeholder="Nama"
                                        value={nama}
                                        onChange={(e) => setNama(e.target.value)}
                                    />
                                    <input
                                        className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[200px] h-[40px] px-[15px]"
                                        type="tel" placeholder="No Hp"
                                        value={nomorHp}
                                        onChange={(e) => setNomorHp(e.target.value)}
                                    />
                                    <input
                                        className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[200px] h-[40px] px-[15px]"
                                        type="text" placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <input
                                        className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[200px] h-[40px] px-[15px]"
                                        type="password" placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button onClick={handleTambahAnggota} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white md:w-[600px] w-[200px] h-[40px] mb-[20px]"
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


                <div className='bg-white p-[20px] pb-[30px] pt-[10px] justify-center shadow-sm'>
                    <div className="md:flex md:gap-3 items-center">
                        <div className="">
                            <button
                                className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px] mt-[20px] flex justify-center items-center gap-2"
                                onClick={() => setShowFormTambah(true)}
                            >
                                <div>
                                    <FontAwesomeIcon icon={faPlusCircle} size='xl' />
                                </div>
                                <p>Tambah Anggota</p>

                            </button>
                        </div>


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
                                <th className="w-[50%] bg-[#2c6975eb] rounded rounded-r-none px-4 py-2">NAMA</th>
                                <th className="w-[30%] bg-[#2c6975eb] rounded-none px-4 py-2">NO. HP</th>
                                <th className="w-[20px] bg-[#2c6975eb] rounded rounded-l-none px-4 py-2 ">AKSI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((anggota, index) => (
                                <tr key={anggota.id_user} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="border-b border-solid text-center px-2 py-2">{anggota.nama}</td>
                                    <td className="border-b border-solid border-gray-300 text-center px-2 py-2">{anggota.no_telp}</td>
                                    <td className="border-b border-solid border-gray-300 text-center items-center py-1 ">
                                        <button
                                            className="text-[#707070]  p-2 rounded-sm mr-[10px] ml-[10px] hover:text-[#979696]"
                                            onClick={() => handleEditClick(anggota.id_user)}
                                        >
                                            <FontAwesomeIcon icon={faPenToSquare} size='xl' />
                                        </button>
                                        <button
                                            className="text-[#707070]  p-2 rounded-sm mr-[10px] ml-[10px] hover:text-[#979696]"
                                            onClick={() => deleteMember(anggota.id_user)}
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

        </div>
    );
};


export default DashboardAdmin;