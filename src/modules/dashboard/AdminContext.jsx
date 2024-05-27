/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { addAnggota, daftarAnggota, deleteMember, apiUpdateMember, fetchBayarHutang, fetchHapusPinjaman, hapusNasabah , fetchInfoPinjaman, fetchSimpanans, fetchTambahPinjamanLagi, tambahPinjaman, fetchTambahSimpanan, kurangiSukarela } from './apiAdmin';
import Swal from 'sweetalert2';

// Initial state for member data
const initialMembersState = {
  members: [],
  simpanans: [],
  tampilkanPinjaman: () => {},
  tampilkanBayarHutang: () => {},
  tampilkanTambahPinjamLagi: () => {},
  handleTambahSimpanan: () => {},
  kurangSukarela: () => {},
  infoPinjaman: [],
  users: [],
  curentMembers: null,
  loadingAdd: false,
  loadingAddPinjaman: false,
  loadingAnggota: false,
  addMember: () => { },
  // editMember: () => {},
  // handleDelete: () => {},
  // handleEditClick: () => {},
  fetchAnggota: () => { },
  // tambahAnggota: () => { },
  tampilkanSimpanans: () => {},
};

// Create context for cooperative members data
const MemberContext = createContext(initialMembersState);

// Custom hook to use cooperative members data context
const useMembers = () => useContext(MemberContext);

// Provider component to provide cooperative members data
const MemberProvider = ({ children }) => {
  // State to store cooperative members data
  const [members, setMembers] = useState([]);
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingAnggota, setLoadingAnggota] = useState(false);
  const [loadingPinjaman, setLoadingPinjaman] = useState(false);
  const [infoPinjaman, setInfoPinjaman] = useState([]);
  const [simpanans, setSimpanans] = useState([]);
  const [curentMembers, setcurentMembers] = useState(null);

  // Function to add a member
  const tambahAnggota = async (nama, nomorHp, username, password) => {
    // Check loading state
    if (loadingAdd) return;

    // Set loading to true
    setLoadingAdd(true);

    // Show loading using Swal
    Swal.fire({
      title: "Loading",
      text: "Mengirim data.."
    });
    Swal.showLoading();

    // Fetch API
    const apiResult = await addAnggota(nama, nomorHp, username, password);

    // Handle success or error
    const { status, message } = apiResult.data;
    if (status !== 'Success') {
      Swal.hideLoading();
      Swal.fire({
        title: `Gagal`,
        text: message,
        showConfirmButton: true
      });
    }

    // Set loading to false
    setLoadingAdd(false);

    // Hide loading
    Swal.hideLoading();
    Swal.fire({
      title: 'Sukses',
      text: 'Berhasil'
    });
  };

  // Function to handle adding a loan
  const handleTambahPinjaman = async (nama, jumlah_pinjaman) => {
    if (loadingPinjaman) return;

    // Set loading to true
    setLoadingPinjaman(true);

    // Show loading using Swal
    Swal.fire({
      title: "Loading",
      text: "Mengirim data.."
    });
    Swal.showLoading();

    // Fetch API
    const apiResult = await tambahPinjaman(nama, jumlah_pinjaman);

    // Handle success or error
    const { status, message } = apiResult.data;
    if (status !== 'Success') {
      Swal.hideLoading();
      Swal.fire({
        title: `Gagal`,
        text: message,
        showConfirmButton: true
      });
    }

    // Set loading to false
    setLoadingAdd(false);

    // Hide loading
    Swal.hideLoading();
    Swal.fire({
      title: 'Sukses',
      text: 'Berhasil'
    });
  };

  // Function to delete a member
  const handleDelete = async (id) => {
    await deleteMember(id);
    await hapusNasabah(id);
    console.log(id);
  };

  // Function to display loans
  const tampilkanPinjaman = async () => {
    if (loadingPinjaman) return;

    setLoadingPinjaman(true);

    const apiCall = await fetchInfoPinjaman();
    const { data } = apiCall.data;

    setInfoPinjaman(data.pinjamans);
    setLoadingPinjaman(false);
  };

  // Function to display savings
  const tampilkanSimpanans = async () => {
    if (loadingAnggota) return;

    setLoadingAnggota(true);
    const apiCall = await fetchSimpanans();
    const { data } = apiCall.data;
    setSimpanans(data.simpanans);
    setLoadingAnggota(false);
  };

  const handleTambahSimpanan = async ( id, simpanan_pokok, simpanan_wajib, simpanan_sukarela, simpanan_hariraya ) => {
    fetchTambahSimpanan( id, simpanan_pokok, simpanan_wajib, simpanan_sukarela, simpanan_hariraya );
  };

  const kurangSukarela = async (id, simpanan_sukarela, simpanan_hariraya) => {
    kurangiSukarela(id, simpanan_sukarela, simpanan_hariraya)
  }

  // Function to pay debts
  const tampilkanBayarHutang = async (id, bayar_hutang) => {
    fetchBayarHutang(id, bayar_hutang);
  };

  // Function to add another loan
  const tampilkanTambahPinjamLagi = async (id, hutang) => {
    fetchTambahPinjamanLagi(id, hutang);
  };

  // Function to delete a loan
  const handleDeletePinjaman = async(id) => {
    fetchHapusPinjaman(id);
  };

  // Function to fetch members
  const fetchAnggota = async () => {
    if (loadingAnggota) return;

    setLoadingAnggota(true);
    const apiCall = await daftarAnggota();
    const { data } = apiCall.data;

    setMembers(data.users);

    setLoadingAnggota(false);
  };

  // Function to update member information
  const updateMember = async (id, noBaru) =>{
    await apiUpdateMember(id, noBaru);
  };

  useEffect(() => {
    tampilkanSimpanans();
    fetchAnggota();
    tampilkanPinjaman();
    tampilkanSimpanans();
  }, []);

  // Log simpanans
  console.log(simpanans);

  return (
    <MemberContext.Provider value={{ members, simpanans, infoPinjaman, loadingAdd, updateMember, handleTambahPinjaman, handleTambahSimpanan, kurangSukarela, fetchAnggota, handleDelete, handleDeletePinjaman, tambahAnggota, tampilkanBayarHutang, tampilkanTambahPinjamLagi, tampilkanPinjaman, tampilkanSimpanans }}>
      {children}
    </MemberContext.Provider>
  );
};

export { MemberProvider, useMembers };