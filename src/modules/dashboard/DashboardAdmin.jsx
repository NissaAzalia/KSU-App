import { faMagnifyingGlass, faTrashCan, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

// Data users dan simpanans
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

const simpanans = [
    { "id_simpanan": 1, "simpanan_pokok": 750000, "simpanan_wajib": 100000, "simpanan_sukarela": 100000, "simpanan_hariraya": 100000, "user_id": 1 },
    { "id_simpanan": 2, "simpanan_pokok": 750000, "simpanan_wajib": 200000, "simpanan_sukarela": 200000, "simpanan_hariraya": 200000, "user_id": 2 },
    { "id_simpanan": 3, "simpanan_pokok": 750000, "simpanan_wajib": 300000, "simpanan_sukarela": 300000, "simpanan_hariraya": 300000, "user_id": 3 },
    { "id_simpanan": 5, "simpanan_pokok": 750000, "simpanan_wajib": 500000, "simpanan_sukarela": 500000, "simpanan_hariraya": 500000, "user_id": 5 },
    { "id_simpanan": 4, "simpanan_pokok": 750000, "simpanan_wajib": 400000, "simpanan_sukarela": 400000, "simpanan_hariraya": 400000, "user_id": 4 },
    { "id_simpanan": 6, "simpanan_pokok": 750000, "simpanan_wajib": 600000, "simpanan_sukarela": 600000, "simpanan_hariraya": 600000, "user_id": 6 },
    { "id_simpanan": 8, "simpanan_pokok": 750000, "simpanan_wajib": 800000, "simpanan_sukarela": 800000, "simpanan_hariraya": 800000, "user_id": 8 },
    { "id_simpanan": 7, "simpanan_pokok": 750000, "simpanan_wajib": 700000, "simpanan_sukarela": 700000, "simpanan_hariraya": 700000, "user_id": 7 },
];

const DashboardAdmin = () => {
    const [showFormSimpanan, setShowFormSimpanan] = useState(false);
    const [showFormTambah, setShowFormTambah] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');  // State untuk pencarian

    // Menggabungkan data users dan simpanans
    const initialNasabah = users.map(user => {
        const simpanan = simpanans.find(s => s.user_id === user.id_user) || {
            simpanan_pokok: 0,
            simpanan_wajib: 0,
            simpanan_sukarela: 0,
            simpanan_hariraya: 0
        };
        return {
            id: user.id_user,
            nama: user.user,
            password: user.password,
            simpananPokok: simpanan.simpanan_pokok,
            simpananWajib: simpanan.simpanan_wajib,
            simpananSukarela: simpanan.simpanan_sukarela,
            simpananHariRaya: simpanan.simpanan_hariraya
        };
    });

    const [nasabah, setNasabah] = useState(initialNasabah);
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const [simpananPokok, setSimpananPokok] = useState('');
    const [simpananWajib, setSimpananWajib] = useState('');
    const [simpananSukarela, setSimpananSukarela] = useState('');
    const [simpananHariRaya, setSimpananHariRaya] = useState('');

    const tambahNasabah = () => {
        const newData = {
            id: nasabah.length + 1,
            nama: nama,
            password: password,
            simpananPokok: 0,
            simpananWajib: 0,
            simpananSukarela: 0,
            simpananHariRaya: 0
        };

        setNasabah([...nasabah, newData]);
        setNama('');
        setPassword('');
        setShowFormTambah(false);
    };

    const editSimpanan = () => {
        const updatedNasabah = nasabah.map(nasabah => {
            if (nasabah.id === currentId) {
                return {
                    ...nasabah,
                    simpananPokok: simpananPokok,
                    simpananWajib: simpananWajib,
                    simpananSukarela: simpananSukarela,
                    simpananHariRaya: simpananHariRaya
                };
            }
            return nasabah;
        });

        setNasabah(updatedNasabah);
        setShowFormSimpanan(false);
    };

    const handleClose = () => {
        setShowFormTambah(false);
        setShowFormSimpanan(false);
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
        setSimpananPokok(selectedNasabah.simpananPokok);
        setSimpananWajib(selectedNasabah.simpananWajib);
        setSimpananSukarela(selectedNasabah.simpananSukarela);
        setSimpananHariRaya(selectedNasabah.simpananHariRaya);
        setCurrentId(id);
        setShowFormSimpanan(true);
    };

    // Fungsi untuk memfilter nasabah berdasarkan kata kunci pencarian
    const filteredNasabah = nasabah.filter(n => n.nama.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="bg-[#F4F4F4] w-[100%] h-[100%] p-[50px]">
            <div className="rounded-s-xl mb-[50px] rounded-e-xl h-[80px] bg-gradient-to-r from-[#2C6975] to-[#52C5DB]">
                <div className="mx-[30px] py-[5px] mt-[25px]">
                    <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
                    <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
                </div>
            </div>

            <div className="mt-[50px]">
                <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Daftar Anggota Koperasi</h2>

                <div className="flex pt-[10px] mb-[25px]">
                    <input
                        className="rounded-l w-[600px] h-[40px] border-solid border-[1px] shadow-lg pl-[30px]"
                        type="text"
                        placeholder="Cari nama nasabah..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="ml-[-30px] mt-[8px]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>

                {showFormSimpanan && (
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
                        <div className="flex flex-col gap-6">
                            <h1 className="text-2xl text-[#121212] font-bold">{nama}</h1>
                            <p>simpanan pokok</p>
                            <input
                                type="number" placeholder="Nominal"
                                className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                value={simpananPokok}
                                onChange={(e) => setSimpananPokok(e.target.value)}
                            />
                            <p>simpanan wajib</p>
                            <input
                                type="number" placeholder="Nominal"
                                className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                value={simpananWajib}
                                onChange={(e) => setSimpananWajib(e.target.value)}
                            />
                            <p>simpanan sukarela</p>
                            <input
                                type="number" placeholder="Nominal"
                                className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                value={simpananSukarela}
                                onChange={(e) => setSimpananSukarela(e.target.value)}
                            />
                            <p>simpanan hari raya</p>
                            <input
                                type="number" placeholder="Nominal"
                                className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
                                value={simpananHariRaya}
                                onChange={(e) => setSimpananHariRaya(e.target.value)}
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
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-6">
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

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="w-1/4 px-4 py-2">Nama</th>
                                <th className="w-1/4 px-4 py-2">Simpanan Pokok</th>
                                <th className="w-1/4 px-4 py-2">Simpanan Wajib</th>
                                <th className="w-1/4 px-4 py-2">Simpanan Sukarela</th>
                                <th className="w-1/4 px-4 py-2">Simpanan Hari Raya</th>
                                <th className="w-1/4 px-4 py-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredNasabah.map((nasabah, index) => (
                                <tr key={nasabah.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="border px-4 py-2">{nasabah.nama}</td>
                                    <td className="border px-4 py-2">{nasabah.simpananPokok}</td>
                                    <td className="border px-4 py-2">{nasabah.simpananWajib}</td>
                                    <td className="border px-4 py-2">{nasabah.simpananSukarela}</td>
                                    <td className="border px-4 py-2">{nasabah.simpananHariRaya}</td>
                                    <td className="border px-4 py-2 flex justify-around">
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
        </div>
    );
};

export default DashboardAdmin;








// import { faMagnifyingGlass, faTrashCan, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useState } from 'react';


// // Data users dan simpanans
// const users = [
//     { "id_user": 1, "user": "alfian", "password": "12345" },
//     { "id_user": 2, "user": "Rasya", "password": "admin" },
//     { "id_user": 3, "user": "Rasya", "password": "admin" },
//     { "id_user": 4, "user": "ARA", "password": "UWU" },
//     { "id_user": 5, "user": "AMAK", "password": "FAAFAF" },
//     { "id_user": 6, "user": "anas", "password": "user" },
//     { "id_user": 7, "user": "akaka", "password": "user" },
//     { "id_user": 8, "user": "UWU", "password": "amao" }
// ];

// const simpanans = [
//     { "id_simpanan": 1, "simpanan_pokok": 750000, "simpanan_wajib": 100000, "simpanan_sukarela": 100000, "simpanan_hariraya": 100000, "user_id": 1 },
//     { "id_simpanan": 2, "simpanan_pokok": 750000, "simpanan_wajib": 200000, "simpanan_sukarela": 200000, "simpanan_hariraya": 200000, "user_id": 2 },
//     { "id_simpanan": 3, "simpanan_pokok": 750000, "simpanan_wajib": 300000, "simpanan_sukarela": 300000, "simpanan_hariraya": 300000, "user_id": 3 },
//     { "id_simpanan": 5, "simpanan_pokok": 750000, "simpanan_wajib": 500000, "simpanan_sukarela": 500000, "simpanan_hariraya": 500000, "user_id": 5 },
//     { "id_simpanan": 4, "simpanan_pokok": 750000, "simpanan_wajib": 400000, "simpanan_sukarela": 400000, "simpanan_hariraya": 400000, "user_id": 4 },
   
//     { "id_simpanan": 6, "simpanan_pokok": 750000, "simpanan_wajib": 600000, "simpanan_sukarela": 600000, "simpanan_hariraya": 600000, "user_id": 6  },

//     { "id_simpanan": 8, "simpanan_pokok": 750000, "simpanan_wajib": 800000, "simpanan_sukarela": 800000, "simpanan_hariraya": 800000, "user_id": 8 },
//     { "id_simpanan": 7, "simpanan_pokok": 750000, "simpanan_wajib": 700000, "simpanan_sukarela": 700000, "simpanan_hariraya": 700000, "user_id": 7 },
// ];

// const DashboardAdmin = () => {
//     const [showFormSimpanan, setShowFormSimpanan] = useState(false);
//     const [showFormTambah, setShowFormTambah] = useState(false);
//     const [currentId, setCurrentId] = useState(null);

//     // Menggabungkan data users dan simpanans
//     const initialNasabah = users.map(user => {
//         const simpanan = simpanans.find(s => s.user_id === user.id_user) || {
//             simpanan_pokok: 0,
//             simpanan_wajib: 0,
//             simpanan_sukarela: 0,
//             simpanan_hariraya: 0
//         };
//         return {
//             id: user.id_user,
//             nama: user.user,
//             password: user.password,
//             simpananPokok: simpanan.simpanan_pokok,
//             simpananWajib: simpanan.simpanan_wajib,
//             simpananSukarela: simpanan.simpanan_sukarela,
//             simpananHariRaya: simpanan.simpanan_hariraya
//         };
//     });

//     const [nasabah, setNasabah] = useState(initialNasabah);
//     const [nama, setNama] = useState('');
//     const [password, setPassword] = useState('');
//     const [simpananPokok, setSimpananPokok] = useState('');
//     const [simpananWajib, setSimpananWajib] = useState('');
//     const [simpananSukarela, setSimpananSukarela] = useState('');
//     const [simpananHariRaya, setSimpananHariRaya] = useState('');

//     const tambahNasabah = () => {
//         const newData = {
//             id: nasabah.length + 1,
//             nama: nama,
//             password: password,
//             simpananPokok: 0,
//             simpananWajib: 0,
//             simpananSukarela: 0,
//             simpananHariRaya: 0
//         };

//         setNasabah([...nasabah, newData]);
//         setNama('');
//         setPassword('');
//         setShowFormTambah(false);
//     };

//     const editSimpanan = () => {
//         const updatedNasabah = nasabah.map(nasabah => {
//             if (nasabah.id === currentId) {
//                 return {
//                     ...nasabah,
//                     simpananPokok: simpananPokok,
//                     simpananWajib: simpananWajib,
//                     simpananSukarela: simpananSukarela,
//                     simpananHariRaya: simpananHariRaya
//                 };
//             }
//             return nasabah;
//         });

//         setNasabah(updatedNasabah);
//         setShowFormSimpanan(false);
//     };

//     const handleClose = () => {
//         setShowFormTambah(false);
//         setShowFormSimpanan(false);
//         setNama('');
//         setPassword('');
//     };

//     const hapusNasabah = id => {
//         const updatedNasabah = nasabah.filter(nasabah => nasabah.id !== id);
//         setNasabah(updatedNasabah);
//     };

//     const handleEditClick = id => {
//         const selectedNasabah = nasabah.find(n => n.id === id);
//         setNama(selectedNasabah.nama);
//         setSimpananPokok(selectedNasabah.simpananPokok);
//         setSimpananWajib(selectedNasabah.simpananWajib);
//         setSimpananSukarela(selectedNasabah.simpananSukarela);
//         setSimpananHariRaya(selectedNasabah.simpananHariRaya);
//         setCurrentId(id);
//         setShowFormSimpanan(true);
//     };

//     console.log(nasabah)
//     return (
//         <div className="bg-[#F4F4F4] w-[100%] h-[100%] p-[50px]">
//             <div className="rounded-s-xl mb-[50px] rounded-e-xl h-[80px] bg-gradient-to-r from-[#2C6975] to-[#52C5DB]">
//                 <div className="mx-[30px] py-[5px] mt-[25px]">
//                     <h2 className="text-white font-normal text-2xl pt-[5px]">Halo,</h2>
//                     <p className="text-white font-thin">Selamat Datang Di Koperasi Teknika Mandiri</p>
//                 </div>
//             </div>

//             <div className="mt-[50px]">
//                 <h2 className="text-2xl text-[#2C6975] mb-[20px] font-bold">Daftar Anggota Koperasi</h2>

//                 <div className="flex pt-[10px] mb-[25px]">
//                     <input className="rounded-l w-[600px] h-[40px] border-solid border-[1px] shadow-lg" type="text" placeholder="" />
//                     <div className="ml-[-30px] mt-[8px]">
//                         <FontAwesomeIcon icon={faMagnifyingGlass} />
//                     </div>
//                 </div>

//                 {showFormSimpanan && (
//                     <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-[35%] bg-white rounded-3xl border-[#2C6975] w-[700px] py-[3%] flex flex-col items-center shadow-2xl">
//                         <div className="w-[600px]">
//                             <button
//                                 className="top-1 left-1 text-gray-500 hover:text-gray-700"
//                                 onClick={handleClose}
//                             >
//                                 <FontAwesomeIcon icon={faXmark} size="lg" />
//                             </button>
//                         </div>

//                         <h1 className="text-center text-2xl font-bold text-[#2C6975]">Simpanan</h1>
//                         <div className="flex flex-col gap-6">
//                             <h1 className="text-2xl text-[#121212] font-bold">{nama}</h1>
//                             <p>simpanan pokok</p>
//                             <input
//                                 type="number" placeholder="Nominal"
//                                 className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
//                                 value={simpananPokok}
//                                 onChange={(e) => setSimpananPokok(e.target.value)}
//                             />
//                             <p>simpanan wajib</p>
//                             <input
//                                 type="number" placeholder="Nominal"
//                                 className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
//                                 value={simpananWajib}
//                                 onChange={(e) => setSimpananWajib(e.target.value)}
//                             />
//                             <p>simpanan sukarela</p>
//                             <input
//                                 type="number" placeholder="Nominal"
//                                 className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
//                                 value={simpananSukarela}
//                                 onChange={(e) => setSimpananSukarela(e.target.value)}
//                             />
//                             <p>simpanan hari raya</p>
//                             <input
//                                 type="number" placeholder="Nominal"
//                                 className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
//                                 value={simpananHariRaya}
//                                 onChange={(e) => setSimpananHariRaya(e.target.value)}
//                             />
//                             <button onClick={editSimpanan} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[600px] h-[40px]">
//                                 Kirim
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {showFormTambah && (
//                     <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl border-[#2C6975] w-[700px] py-[30px] flex flex-col items-center shadow-2xl">
//                         <div className="w-[600px]">
//                             <button
//                                 className="top-1 left-1 text-gray-500 hover:text-gray-700"
//                                 onClick={handleClose}
//                             >
//                                 <FontAwesomeIcon icon={faXmark} size="lg" />
//                             </button>
//                         </div>

//                         <h1 className="text-center text-2xl font-bold text-[#2C6975] mb-[20px]">Tambah Anggota</h1>
//                         <div className="flex flex-col gap-6">
//                             <div className="flex flex-col gap-6">
//                                 <input
//                                     className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
//                                     type="text" placeholder="Nama"
//                                     value={nama}
//                                     onChange={(e) => setNama(e.target.value)}
//                                 />
//                                 <input
//                                     className="border-solid border-[1px] border-[#2C6975] rounded w-[600px] h-[40px] px-[15px]"
//                                     type="password" placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                             </div>
//                             <button onClick={tambahNasabah} className="rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[600px] h-[40px] mb-[20px]">
//                                 Kirim
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 <button
//                     className="mb-[20px] rounded bg-[#2C6975] hover:bg-[#358595] text-white w-[200px] h-[40px]"
//                     onClick={() => setShowFormTambah(true)}
//                 >
//                     Tambah Anggota
//                 </button>

//                 <div className="overflow-x-auto">
//                     <table className="min-w-full bg-white">
//                         <thead>
//                             <tr>
//                                 <th className="w-1/4 px-4 py-2">Nama</th>
//                                 <th className="w-1/4 px-4 py-2">Simpanan Pokok</th>
//                                 <th className="w-1/4 px-4 py-2">Simpanan Wajib</th>
//                                 <th className="w-1/4 px-4 py-2">Simpanan Sukarela</th>
//                                 <th className="w-1/4 px-4 py-2">Simpanan Hari Raya</th>
//                                 <th className="w-1/4 px-4 py-2">Aksi</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {nasabah.map((nasabah, index) => (
//                                 <tr key={nasabah.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
//                                     <td className="border px-4 py-2">{nasabah.nama}</td>
//                                     <td className="border px-4 py-2">{nasabah.simpananPokok}</td>
//                                     <td className="border px-4 py-2">{nasabah.simpananWajib}</td>
//                                     <td className="border px-4 py-2">{nasabah.simpananSukarela}</td>
//                                     <td className="border px-4 py-2">{nasabah.simpananHariRaya}</td>
//                                     <td className="border px-4 py-2 flex justify-around">
//                                         <button
//                                             className="text-[#626262] hover:text-[#505050]"
//                                             onClick={() => handleEditClick(nasabah.id)}
//                                         >
//                                             <FontAwesomeIcon icon={faPenToSquare} />
//                                         </button>
//                                         <button
//                                             className="text-[#626262] hover:text-[#505050]"
//                                             onClick={() => hapusNasabah(nasabah.id)}
//                                         >
//                                             <FontAwesomeIcon icon={faTrashCan} />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashboardAdmin;

