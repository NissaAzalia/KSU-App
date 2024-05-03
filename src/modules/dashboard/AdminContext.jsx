import React, { createContext, useContext, useState } from 'react';

const initialMembersState = {
  members: [],
  curentMembers: null,
  handleFetchId: () => {},
  addMember: () => {},
  deleteMember: () => {}
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

  // Fungsi untuk menambah anggota koperasi
  const addMember = (member) => {
    setMembers([...members, member]);
  };

  // Fungsi untuk menghapus anggota koperasi
  const deleteMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  // Nilai konteks yang disediakan oleh provider
  const value = {
    members,
    addMember,
    deleteMember,
  };

  return (
    <MemberContext.Provider value={value}>
      {children}
    </MemberContext.Provider>
  );
};

export { MemberProvider, useMembers };
