/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { addAnggota, daftarAnggota, fetchInfoPinjaman } from './apiAdmin';
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
  // deleteMember: () => {},
  // handleEditClick: () => {},
  fetchAnggota: () => { },
  tambahAnggota: () => { },
  tampilkanPinjaman: () => {},

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
  // const [curentMembers, setcurentMembers] = useState(null)


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

    try {
      // fetch api
      const apiResult = await addAnggota(nama, nomorHp, username, password);
      const { status, message } = apiResult.data;

      if (status === 'success') {
        Swal.fire({
          title: 'Sukses',
          text: 'Berhasil mengirim data servis',
          icon: 'success'
        });
      } else {
        Swal.fire({
          title: 'Gagal',
          text: message || 'Gagal mengirim service',
          icon: 'error'
        });
      }
    } catch (error) {
      console.error('Error adding member:', error);
      Swal.fire({
        title: 'Gagal',
        text: 'Terjadi kesalahan saat menambahkan anggota',
        icon: 'error'
      });
    } finally {
      // hilangkan tampilan loading
      Swal.hideLoading();
      // set loading false
      setLoadingAdd(false);
    }
};


  // Fungsi edit nasabah
  const editMember = (id, updateData) => {
    const updatedMember = members.map((member) => member.id === id ? { ...member, ...updateData } : member);
    setMembers(updatedMember)
  }

  // Fungsi untuk menghapus anggota koperasi
  // const deleteMember = (id) => {
  //   setMembers(members.filter(member => member.id !== id));
  // };

  // const editClick = (id) => {
  //   const selectedMembers = members.find(n => n.id === id);
  //   setMembers(selectedMembers)
  // }

  // const filteredNasabah = members.filter(n => n.nama.toLowerCase().includes(searchQuery.toLowerCase()));

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

  console.log(`Nilai dari "members":`, ...members);
  console.log(`Nilai dari info pinjaman`, ...infoPinjaman);

  //Nilai konteks yang disediakan oleh provider
  const value = {
    members,
    // addMember,
    // editMember,
    // deleteMember,
    fetchAnggota,
    tambahAnggota,
    tampilkanPinjaman,
    infoPinjaman,
  };


  return (
    <MemberContext.Provider value={{ value }}>
      {children}
    </MemberContext.Provider>
  );
};

export { MemberProvider, useMembers };
