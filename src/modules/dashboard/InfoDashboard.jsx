import { faTrashCan, faPlusCircle, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useMembers } from './AdminContext';
import Swal from 'sweetalert2';
import { useAuth } from '../auth/Auth';

const InfoDashboard = () => {
    const [showForm, setShowForm] = useState(false);
    const [showFormPinjaman, setShowFormPinjaman] = useState(false);
    const [showFormTambahPinjamanLagi, setShowFormTambahPinjamanLagi] = useState(false)
    const [currentId, setCurrentId] = useState(null);
    const { infoPinjaman, handleDeletePinjaman, handleTambahPinjaman, tampilkanTambahPinjamLagi, tampilkanPinjaman, tampilkanBayarHutang } = useMembers();
    const { name } = useAuth()
    const [hutang, sethutang] = useState('')
    const [bayar_hutang, setBayar_hutang] = useState('')
    const [nama, setNama] = useState('');
    const [jumlah_pinjaman, setJumlah_pinjaman] = useState('')
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);
    const [errorMessage, setErrorMessage] = useState('');

    const tambahPinjaman = async () => {
        if (!nama, !jumlah_pinjaman) {
            alert("inputan tidak boleh kosong")
        
        } else {
            try {
                const existingMember = infoPinjaman.find(member => member.nama.toLowerCase() === nama.toLowerCase());
                if (existingMember) {
                    throw new Error('Nama sudah ada di tabel.');
                }
                await handleTambahPinjaman(nama, jumlah_pinjaman);
                setNama('');
                setJumlah_pinjaman('');
                setShowForm(false);
                tampilkanPinjaman();
            } catch (error) {
                Swal.fire({
                    text:'inputan harus diisi semua',
                    confirmButtonText: 'OK'
                });
            }
        }
    }

    const hapusPinjaman = async (id) => {
        const confirm = window.confirm("Yakin untuk menghapus?");
        if (confirm) {
            await handleDeletePinjaman(id);
            tampilkanPinjaman();
        }
    };

    const handleClose = () => {
        setShowForm(false);
        setShowFormPinjaman(false);
        setShowFormTambahPinjamanLagi(false)
        setNama('');
        setJumlah_pinjaman('');
        setErrorMessage('');
    };

    const editPinjaman = async () => {
        if (!bayar_hutang) {
            alert('inputan tidak boleh kosong')
            return;
        } else {
            try {
                await tampilkanBayarHutang(currentId, bayar_hutang);
                setNama('')
                setBayar_hutang('');
                tampilkanPinjaman();
                setShowFormPinjaman(false);
                setBayar_hutang()
                tampilkanPinjaman();

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
    };

    const handleEditClick = (id, nama) => {
        setCurrentId(id)
        setNama(nama)
        setShowFormPinjaman(true);
    };

    const handleEditTambahPinjaman = async () => {
        if (!hutang) {
            alert('inputan tidak boleh kosong')
            return;
        } else {
            try {
                await tampilkanTambahPinjamLagi(currentId, hutang);
                sethutang('')
                tampilkanPinjaman()
                setShowFormTambahPinjamanLagi(false)
                sethutang()
                tampilkanPinjaman()
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
    }

    const handleEditClickTambahPinjaman = (id, nama) => {
        setCurrentId(id)
        setNama(nama)
        setShowFormTambahPinjamanLagi(true)
    }

    const filteredPinjaman = infoPinjaman.filter(pinjaman =>
        pinjaman.nama && pinjaman.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
        <div className="flex flex-col bg-[#F4F4F4] w-[100%] md:h-screen  md:pt-[80px] pt-[100px] p-[25px]">
            <div className="rounded-s-xl rounded-e-xl bg-gradient-to-r from-[#2C6975] to-[#52C5DB]">
                <div className="mx-[30px] md:py-[20px] py-[10px]">
                    <h2 className="text-white font-normal text-2xl">Halo, {name}</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Konsumen KSU TEKNIKA MANDIRI</p>
                </div>
            </div>

            <div className="mt-[25px]">
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Info Pinjaman Anggota</h2>


                {showForm && (
                    <div className='fixed overlay bg-black bg-opacity-50 w-screen h-screen bottom-[1px] right-[1px]'>
                        <div className="absolute top-1/2 left-[55%] transform md:-translate-x-1/2 -translate-x-[165px] -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] md:w-[700px] w-[300px] h-[270px] flex flex-col items-center shadow-2xl">
                            <div className="md:w-[600px]">
                                <button className="mt-[10px] mr-[240px] text-gray-500 hover:text-gray-700" onClick={handleClose}>
                                    <FontAwesomeIcon icon={faXmark} size="lg" />
                                </button>
                            </div>

                            <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[30px]">Pinjaman Anggota</h1>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    placeholder="Nama"
                                    value={nama}
                                    onChange={e => setNama(e.target.value)}
                                    className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[200px] h-[40px] px-[15px]"
                                />
                                <input
                                    type="number"
                                    placeholder="Masukkan Pinjaman"
                                    value={jumlah_pinjaman}
                                    onChange={(e) => setJumlah_pinjaman(e.target.value)}
                                    className="border-solid border-[1px] border-[#2C6975] rounded  md:w-[600px] w-[200px] h-[40px] px-[15px]"
                                />

                                <button
                                    onClick={tambahPinjaman}
                                    className="rounded bg-[#2C6975] hover:bg-[#358595] text-white  md:w-[600px] w-[200px] h-[40px] mb-[20px]"
                                >
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showFormTambahPinjamanLagi && (
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

                            <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Tambah Pinjaman</h1>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#121212] font-bold">{nama}</h1>
                                <input
                                    type="number" placeholder="Nominal penambahan"
                                    className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[200px] h-[40px] px-[15px]"
                                    value={hutang}
                                    onChange={e => sethutang(e.target.value)}
                                />
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                <button onClick={handleEditTambahPinjaman} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white md:w-[600px] w-[200px] h-[40px] mb-[20px]">
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </div>
                )}


                {showFormPinjaman && (
                    <div className='fixed overlay bg-black bg-opacity-50 w-screen h-screen bottom-[1px] right-[1px]'>
                        <div className="absolute top-1/2 left-[55%] transform md:-translate-x-1/2 -translate-x-[165px] -translate-y-1/2 bg-white rounded-2xl border-[#2C6975] md:w-[700px] w-[300px] h-[250px] flex flex-col items-center shadow-2xl">
                            <div className="md:w-[600px]">
                                <button className="mt-[10px] mr-[240px] text-gray-500 hover:text-gray-700" onClick={handleClose}>
                                    <FontAwesomeIcon icon={faXmark} size="lg" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-2">


                            <h1 className="text-center text-2xl md:textl-lg font-bold text-[#2C6975] mb-[20px]">Bayar hutang</h1>
                                <h1 className="text-lg text-[#5d5d5d] font-bold mt-[-10px]">{nama}</h1>
                                <input
                                    type="number"
                                    placeholder="Nominal Pembayaran"
                                    value={bayar_hutang}
                                    id='id_pinjaman'
                                    className="border-solid border-[1px] border-[#2C6975] rounded md:w-[600px] w-[200px] h-[40px] px-[15px]"
                                    onChange={e => setBayar_hutang(e.target.value)}
                                />
                                {errorMessage && (
                                    <div className=" text-red-500 " role="alert">
                                        <span className="block sm:inline">{errorMessage}</span>
                                    </div>
                                )}

                                <button
                                    onClick={editPinjaman}
                                    className="rounded bg-[#2C6975] hover:bg-[#358595] text-white md:w-[600px] w-[200px] h-[40px] mb-[20px]"
                                >
                                    Kirim
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className='bg-white p-[20px] pb-[30px] pt-[10px] justify-center shadow-sm'>
                    <div className="md:flex md:gap-3 items-center">
                        <div className="">
                            <button
                                className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px] mt-[20px]"
                                onClick={() => setShowForm(true)}
                            >
                                Input Pinjaman
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
                                <th className="bg-[#2c6975eb] rounded rounded-r-none px-4 py-2">Nama</th>
                                <th className="bg-[#2c6975eb] rounded-none px-4 py-2">Pinjaman</th>
                                <th className="bg-[#2c6975eb] rounded-none px-4 py-2">Sisa Hutang</th>
                                <th className="bg-[#2c6975eb] rounded-none px-4 py-2">Status</th>
                                <th className="bg-[#2c6975eb] rounded rounded-l-none px-2 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((pinjaman, index) => (
                                <tr key={pinjaman.id_user} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="border-b border-solid text-center px-4 py-2">{pinjaman.nama}</td>
                                    <td className="border-b border-solid text-center px-4 py-2">
                                        <div className='flex justify-between'>
                                            <div>
                                                {pinjaman.jumlah_pinjaman.toLocaleString()}
                                            </div>

                                            <button onClick={() => handleEditClickTambahPinjaman(pinjaman.id_pinjaman)}>
                                                <span className='text-white'><FontAwesomeIcon icon={faPlusCircle} size='xl' style={{ color: "#4aad7c", }} /></span>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="border-b border-solid text-center px-4 py-2">{pinjaman.sisa_hutang.toLocaleString()}</td>
                                    <td className="border-b border-solid text-center px-4 py-2">   {pinjaman.sisa_hutang === 0 ? (
                                        <div className="bg-[#4aad7c] text-white rounded px-2 inline-block">
                                            Lunas
                                        </div>
                                    ) : <div className="bg-[#ff7373] text-white rounded px-2 inline-block">
                                        hutang
                                    </div>}</td>
                                    <td className="border-b border-solid border-gray-300 text-center items-center py-1">
                                        <button
                                            className="text-[#707070]  p-2 rounded-sm mr-[10px] ml-[10px] hover:text-[#979696]"
                                            onClick={() => handleEditClick(pinjaman.id_pinjaman, pinjaman.nama)}
                                        >
                                            <FontAwesomeIcon icon={faPlusCircle} size='xl' />
                                        </button>
                                        <button
                                            className="text-[#707070]  p-2 rounded-sm mr-[10px] ml-[10px] hover:text-[#979696]"
                                            onClick={() => hapusPinjaman(pinjaman.id_user)}
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
}

export default InfoDashboard;
