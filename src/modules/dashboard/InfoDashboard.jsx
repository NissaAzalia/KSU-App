import { faTrashCan, faPlusCircle, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useMembers } from './AdminContext';
import Swal from 'sweetalert2';


const InfoDashboard = () => {
    const [showForm, setShowForm] = useState(false);
    const [showFormPinjaman, setShowFormPinjaman] = useState(false);
    const [showFormTambahPinjamanLagi, setShowFormTambahPinjamanLagi] = useState(false)
    const [currentId, setCurrentId] = useState(null);
    const { infoPinjaman, handleDeletePinjaman, handleTambahPinjaman, tampilkanTambahPinjamLagi, tampilkanPinjaman, tampilkanBayarHutang } = useMembers();

    // const [pinjamanAnggota, setPinjamanAnggota] = useState([
    //     // { id: 1, nama: 'tes', nominal: 50000, sisaHutang: 50000 },
    //     // { id: 2, nama: 'tesstt', nominal: 20000, sisaHutang: 20000 },
    // ]);


    // const [nama, setNama] = useState('');
    // const [nominal, setNominal] = useState('');
    const [hutang, sethutang] = useState('')
    const [bayar_hutang, setBayar_hutang] = useState('')
    const [nama, setNama] = useState('');
    const [jumlah_pinjaman, setJumlah_pinjaman] = useState('')
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);
    const [errorMessage, setErrorMessage] = useState('');

    // const tambahPinjaman = () => {
    //     if (!nama || !nominal) {
    //         setErrorMessage('*Tidak bisa mengirim jika inputan kosong.');
    //         return;
    //     }

    //     const newData = {
    //         id: infoPinjaman.length + 1,
    //         nama: nama,
    //         nominal: parseFloat(nominal),
    //         sisaHutang: parseFloat(nominal),
    //     };
    //     setPinjamanAnggota([...infoPinjaman, newData]);
    //     setNama('');
    //     setNominal('');
    //     setShowForm(false);
    //     setErrorMessage('');
    // };


    const tambahPinjaman = async () => {
        try {
            // Cek apakah nama sudah ada di tabel
            const existingMember = infoPinjaman.find(member => member.nama.toLowerCase() === nama.toLowerCase());
            if (existingMember) {
                throw new Error('Nama sudah ada di tabel. Tidak dapat menambahkan pinjaman.');
            }

            // Jika nama belum ada, tambahkan pinjaman
            await handleTambahPinjaman(nama, jumlah_pinjaman);
            setNama('');
            setJumlah_pinjaman('');
            setShowForm(false);
            tampilkanPinjaman();
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
            setErrorMessage('*Tidak bisa mengirim jika inputan kosong.');
            tampilkanTambahPinjamLagi()
            return;
        }

        try {
            await tampilkanBayarHutang(currentId, bayar_hutang);
            setNama('')
            setBayar_hutang('');
            await tampilkanPinjaman();
            setShowFormPinjaman(false);
          
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

    const handleEditClick = (id, nama) => {
        setCurrentId(id)
        setNama(nama)
        setShowFormPinjaman(true);
    };

    const handleEditTambahPinjaman = async () => {
        if (!hutang) {
            setErrorMessage('*Tidak bisa mengirim jika inputan kosong.');
            
            return;
        }

        try {
            await tampilkanTambahPinjamLagi(currentId, hutang);
            sethutang('')
            await tampilkanPinjaman()
            setShowFormTambahPinjamanLagi(false)
            await tampilkanPinjaman()

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

    const handleEditClickTambahPinjaman = (id, nama) => {
        setCurrentId(id)
        setNama(nama)
        setShowFormTambahPinjamanLagi(true)
    }

    const filteredPinjaman = infoPinjaman.filter(pinjaman =>
        pinjaman.nama && pinjaman.nama.toLowerCase().includes(searchQuery.toLowerCase())
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
        <div className="flex flex-col bg-[#F4F4F4] w-[100%] md:h-screen  md:pt-[80px] pt-[100px] p-[25px]">
            <div className="rounded-s-xl rounded-e-xl bg-gradient-to-r from-[#2C6975] to-[#52C5DB]">
                <div className="mx-[30px] md:py-[20px] py-[10px]">
                    <h2 className="text-white font-normal text-2xl">Halo,</h2>
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
                                    placeholder="Masukkan Nominal Pinjaman"
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

                            <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Simpanan</h1>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#121212] font-bold">{nama}</h1>
                                <input
                                    type="number" placeholder="Masukkan Nominal Penarikan"
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
                        <div className="absolute top-1/2 left-[55%] transform md:-translate-x-1/2 -translate-x-[165px] -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] md:w-[700px] w-[300px] h-[250px] flex flex-col items-center shadow-2xl">
                            <div className="md:w-[600px]">
                                <button className="mt-[10px] mr-[240px] text-gray-500 hover:text-gray-700" onClick={handleClose}>
                                    <FontAwesomeIcon icon={faXmark} size="lg" />
                                </button>
                            </div>

                            <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[30px]">Bayar hutang Anggota</h1>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl text-[#121212] font-bold">{nama}</h1>
                                <p></p>
                                <input
                                    type="number"
                                    placeholder="Masukkan Nominal Pembayaran"
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

                <div className="md:flex pt-[10px] gap-3">
                    <div className="mb-[30px]">
                        <button
                            className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px] mb-[5px]"
                            onClick={() => setShowForm(true)}
                        >
                            Input Pinjaman
                        </button>

                    </div>
                    <input
                        className="rounded-full  md:w-[50%] h-[40px] border-solid border-[1px] shadow-lg pl-[30px]"
                        type="text"
                        placeholder="Cari nama nasabah"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="md:ml-[-50px] ml-[180px] md:mt-[8px] mt-[-32px] mb-[30px]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>

                </div>


                <div className="max-h-60 overflow-y-auto overflow-x-auto  shadow-lg">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="w-[25%] px-4 py-2">Nama</th>
                                <th className="w-[20px] px-4 py-2">Pinjaman</th>
                                <th className="w-10 px-4 py-2">Sisa Hutang</th>
                                <th className="w-1 px-4 py-2">Status</th>
                                <th className="w-[10px] px-2 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((pinjaman, index) => (
                                <tr key={pinjaman.id_user} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="border text-center px-4 py-2">{pinjaman.nama}</td>
                                    <td className="border text-center px-4 py-2">
                                        <div className='flex justify-evenly'>
                                            {pinjaman.jumlah_pinjaman.toLocaleString()}<button onClick={() => handleEditClickTambahPinjaman(pinjaman.id_pinjaman)}><span className='text-white'><FontAwesomeIcon icon={faPlusCircle} size='xl' style={{color: "#4aad7c",}} /></span></button></div></td>
                                    <td className="border text-center px-4 py-2">{pinjaman.sisa_hutang.toLocaleString()}</td>
                                    <td className="border text-center px-4 py-2">   {pinjaman.sisa_hutang === 0 ? (
                                        <div className="bg-[#4aad7c] text-white rounded px-2 inline-block">
                                            Lunas
                                        </div>
                                    ) : <div className="bg-[#ff7373] text-white rounded px-2 inline-block">
                                        hutang
                                    </div>}</td>
                                    <td className="pl-[25%] py-2 flex gap-[20px] items-center align-middle">
                                        <button
                                            className="text-[#626262] hover:text-[#505050]"
                                            onClick={() => handleEditClick(pinjaman.id_pinjaman, pinjaman.nama)}
                                        >
                                            <FontAwesomeIcon icon={faPlusCircle} size='xl' />
                                        </button>
                                        <button
                                            className="text-[#626262] hover:text-[#505050]"
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
