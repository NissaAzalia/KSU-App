/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { addAnggota, daftarAnggota, deleteMember, fetchInfoPinjaman } from './apiAdmin';
import Swal from 'sweetalert2';

const initialMembersState = {
  members: [],
  users: [],
  curentMembers: null,
  loadingAdd: false,
  loadingAnggota: false,
  // handleFetchId: () => {},
  addMember: () => { },
  // editMember: () => {},
  // handleDelete: () => {},
  // handleEditClick: () => {},
  fetchAnggota: () => { },
  // tambahAnggota: () => { },
  // tampilkanPinjaman: () => {},

}

// Buat konteks untuk data anggota koperasi
const MemberContext = createContext(initialMembersState);

// Custom hook untuk menggunakan konteks data anggota koperasi
const useMembers = () => useContext(MemberContext);



// Komponen provider untuk menyediakan data anggota koperasi
const MemberProvider = ({ children }) => {
  // State untuk menyimpan data anggota koperasi

  const [members, setMembers] = useState([]);
  // const [users, setUsers] = useState([]);
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingAnggota, setLoadingAnggota] = useState(false);
  const [loadingPinjaman, setLoadingPinjaman] = useState(false);
  const [infoPinjaman, setInfoPinjaman] = useState([]);
  const [curentMembers, setcurentMembers] = useState(null)


  // Fungsi untuk menambah anggota koperasi
  // const addMember = (member) => {
  //   setMembers([...members, member]);
  // };

  const tambahAnggota = async (nama, nomorHp, username, password) => {
    // cek loading
    if (loadingAdd) return;

    // set loading true
    setLoadingAdd(true);

    // tampilkan loading pake swal
    Swal.fire({
      title: "Loading",
      text: "Mengirim data.."
    });
    Swal.showLoading();

    // fetch api 
    const apiResult = await addAnggota(nama, nomorHp, username, password)

    console.log('apiresult' ,apiResult)
    const { status, message } = apiResult.data 

    // cek sukses / error 
    if (status != 'Success') {
      Swal.hideLoading()
      Swal.fire({
        title: `Gagal mengirim service`,
        text: message,
        showConfirmButton: true
      })
    }

    // set loading false 
    setLoadingAdd(false)
  
    // hilangkan tampilan loading
    Swal.hideLoading()
    Swal.fire({
      title: 'Sukses',
      text: 'Berhasil mengirim data servis'
    }) 
};


  // Fungsi edit nasabah
  // const editMember = (id, updateData) => {
  //   const updatedMember = members.map((member) => member.id === id ? { ...member, ...updateData } : member);
  //   setMembers(updatedMember)
  // }

  // Fungsi untuk menghapus anggota koperasi
  const handleDelete = async (id) => {
    await deleteMember(id);

  };

  // const editClick = (id) => {
  //   const selectedMembers = members.find(n => n.id === id);
  //   setMembers(selectedMembers)
  // }

  const tampilkanPinjaman = async () => {
    if (loadingPinjaman) return
    setLoadingPinjaman(true)
    const apiCall = await fetchInfoPinjaman();

    const {data} = apiCall.data;
    setInfoPinjaman(data.pinjamans)
    setLoadingPinjaman(false)
  }


  // fungsi menampilkan anggota 
  const fetchAnggota = async () => {
    if (loadingAnggota) return

    setLoadingAnggota(true)
    const apiCall = await daftarAnggota()
    const { data } = apiCall.data

    setMembers(data.users)
    // console.log (members)
    
    setLoadingAnggota(false)
  };

  useEffect(() => {
    fetchAnggota();
    tampilkanPinjaman();
  }, []);

  // console.log(`Nilai dari "members":`, ...members);
  // console.log(`Nilai dari info pinjaman`, ...infoPinjaman);



  return (
    <MemberContext.Provider value={{ members, infoPinjaman, loadingAdd, fetchAnggota, tambahAnggota, tampilkanPinjaman, handleDelete  }}>
      {children}
    </MemberContext.Provider>
  );
};

export { MemberProvider, useMembers };
