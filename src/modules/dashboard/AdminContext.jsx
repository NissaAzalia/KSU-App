/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchInfoPinjaman } from './apiAdmin';

const initialMembersState = {
  members: [],
  curentMembers: null,
  infoPinjaman: [],
  loadingPinjaman:false,
  handleFetchId: () => {},
  addMember: () => {},
  deleteMember: () => {},
  tampilkanPinjaman: () => {}
}

// Buat konteks untuk data anggota koperasi
const MemberContext = createContext(initialMembersState);

// Custom hook untuk menggunakan konteks data anggota koperasi
const useMembers = () => useContext(MemberContext);

// Komponen provider untuk menyediakan data anggota koperasi
const MemberProvider = ({ children }) => {
  // State untuk menyimpan data anggota koperasi
  const [members, setMembers] = useState([]);
  const [curentMembers, setcurentMembers] = useState(null)
  const [infoPinjaman, setInfoPinjaman] = useState(null)
  const [loadingPinjaman, setLoadingPinjaman] = useState(false)

  // Fungsi untuk menambah anggota koperasi
  const addMember = (member) => {
    setMembers([...members, member]);
  };

  // Fungsi untuk menghapus anggota koperasi
  const deleteMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  const tampilkanPinjaman = async () => {
    if (loadingPinjaman) return
    setLoadingPinjaman(true)
    const apiCall = await fetchInfoPinjaman();

    const {data} = apiCall.data;

    setInfoPinjaman(data.pinjamans)
    // console.log(data.pinjamans)
    setLoadingPinjaman(false)
  }

  // Nilai konteks yang disediakan oleh provider
  const value = {
    members,
    infoPinjaman,
    addMember,
    deleteMember,
    tampilkanPinjaman
  };

  useEffect(() => {
    tampilkanPinjaman()
   }, [])


  return (
    <MemberContext.Provider value={{value,curentMembers,infoPinjaman, loadingPinjaman}}>
      {children}
    </MemberContext.Provider>
  );
};

export { MemberProvider, useMembers };
