/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { addAnggota, daftarAnggota } from './apiAdmin';
import Swal from 'sweetalert2';

const initialMembersState = {
  members: [],
  users: [],
  curentMembers: null,
  loadingAdd:false,
  loadingAnggota: false,
  // handleFetchId: () => {},
  addMember: () => {},
  // editMember: () => {},
  // deleteMember: () => {},
  // handleEditClick: () => {},
  fetchAnggota: () => {},
  tambahAnggota: () => {}
  
}

// Buat konteks untuk data anggota koperasi
const MemberContext = createContext(initialMembersState);

// Custom hook untuk menggunakan konteks data anggota koperasi
const useMembers = () => useContext(MemberContext);



// Komponen provider untuk menyediakan data anggota koperasi
const MemberProvider = ({ children }) => {
  // State untuk menyimpan data anggota koperasi

  const [members, setMembers] = useState([]);
  const [users, setUsers] = useState([]);
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingAnggota, setLoadingAnggota] = useState(false)
  // const [curentMembers, setcurentMembers] = useState(null)


  // Fungsi untuk menambah anggota koperasi
  // const addMember = (member) => {
  //   setMembers([...members, member]);
  // };

  const tambahAnggota = async (nama, nomorHp, username, password) => {
    // cek loading
    if (loadingAdd) return

    // set loading true
    setLoadingAdd(true)

    // tampilkan loading pake swal
    Swal.fire({
      title: "Loading",
      text: "Mengirim data.."
    })
    Swal.showLoading()

    // fetch api
    const apiResult = await addAnggota(nama,nomorHp,username,password)
    const { status, data, message} = apiResult.data

    // cek sukses / error
    if (status != 'success'){
      Swal.hideLoading()
      Swal.fire({
        title: `Gagal mengirim service`,
          text: message,
          showConfirmButton: true
      })
    }
    setLoadingAdd(false)
     // hilangkan tampilan loading
     Swal.hideLoading()
     Swal.fire({
       title: 'Sukses',
       text: 'Berhasil mengirim data servis'
     })


  }

  // Fungsi edit nasabah
  const editMember = (id, updateData) => {
    const updatedMember = members.map((member) => member.id === id ? {...member, ...updateData }: member);
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

  // fungsi menampilkan anggota 
  const fetchAnggota = async () => {
    if (loadingAnggota) return

    setLoadingAnggota(true)


  const apiCall = await daftarAnggota()
  const { data } = apiCall.data

  setMembers(data.users)
  // console.log (data.users)
  console.log(members)

  setLoadingAnggota(false)
  };


  useEffect(() => {
    fetchAnggota()
  }, []);

   //Nilai konteks yang disediakan oleh provider
   const value = {
    members,
    // addMember,
    // editMember,
    // deleteMember,
    fetchAnggota,
    tambahAnggota,
  };


  return (
    <MemberContext.Provider value={{ value }}>
      {children}
    </MemberContext.Provider>
  );
};

export { MemberProvider, useMembers };
