/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { addAnggota, daftarAnggota, deleteMember, apiUpdateMember, fetchBayarHutang, fetchHapusPinjaman, hapusNasabah , fetchInfoPinjaman, fetchSimpanans, fetchTambahPinjamanLagi, fetchTambahPinjaman, fetchTambahSimpanan,kurangiSimpanan } from './apiAdmin';

import Swal from 'sweetalert2';
import { useAuth } from '../auth/Auth';

// Initial state for member data
const initialMembersState = {
  members: [],
  simpanans: [],
  infoPinjaman: [],
  users: [],
  curentMembers: null,
  isLoading: false,
  loadingAdd: false,
  loadingAddPinjaman: false,
  loadingAnggota: false,
  loadingSimpanan: false,
  tampilkanPinjaman: () => {},
  tampilkanBayarHutang: () => {},
  tampilkanTambahPinjamLagi: () => {},
  handleTambahSimpanan: () => {},
  kurangSukarela: () => {},
  kurangHariRaya:() => {},
  kurangSimpanan:()=>{},
  addMember: () => { },
  fetchAnggota: () => { },
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
  const [isLoading, setIsLoading] = useState(false)
  const [loadingSimpanan, setLoadingSimpanan] = useState(false)
  const [loadingPinjaman, setLoadingPinjaman] = useState(false);
  const [infoPinjaman, setInfoPinjaman] = useState([]);
  const [simpanans, setSimpanans] = useState([]);
  const [curentMembers, setcurentMembers] = useState(null);
  const {name} = useAuth()

    // Function to fetch members
    const fetchAnggota = async () => {
      if (loadingAnggota) return;
  
      setLoadingAnggota(true);
      const apiCall = await daftarAnggota();
      const { data } = apiCall.data;
  
      setMembers(data.users);
      setLoadingAnggota(false);
    };

  // Function to add a member
  const tambahAnggota = async (nama, nomorHp, username, password) => {
    // Check loading state
    if (loadingAdd) return;

    // Set loading to true
    setLoadingAdd(true);

    // Show loading using Swal
    Swal.showLoading();

    // Fetch API
    const apiResult = await addAnggota(nama, nomorHp, username, password);

  
    setLoadingAdd(false)
      Swal.hideLoading()
    // Handle success or error
    const { status } = apiResult.data;
    if (status === 'fail') {
      Swal.fire({
        title: `nama tidak terdaftar`,
       
      }); 
    } else {
    // Set loading to false
    setLoadingAdd(false);

    // Hide loading
      Swal.hideLoading();
      Swal.fire({
      title: 'Sukses',
      text: 'Berhasil'
    });

  }
  };

  // Function to handle adding a loan
  const handleTambahPinjaman = async (nama, jumlah_pinjaman) => {
     //loading di set
     if (loadingPinjaman) return

     setLoadingPinjaman(true)
     Swal.showLoading()
 
         // memanggil api menggunakan axios
    const apiResult = await fetchTambahPinjaman(nama, jumlah_pinjaman);

    Swal.hideLoading()
    setLoadingPinjaman(false)
    // Handle success or error
    const { status } = apiResult.data;
    if (status === 'fail') {
      Swal.fire({
        title: `nama tidak terdaftar`,
       
      }); 
    } else {
    // Set loading to false
    setLoadingAdd(false);

    // Hide loading
      Swal.hideLoading();
      Swal.fire({
      title: 'Sukses',
      text: 'Berhasil'
    });

  }
  };

  // Function to delete a member
  const handleDelete = async (id) => {
    if (isLoading) return;
    setIsLoading(true);

    Swal.showLoading();

   await  deleteMember(id);
   await hapusNasabah(id);

    setIsLoading(false);

    // Hide loading
      Swal.hideLoading();
      Swal.fire({
      title: 'Sukses',
      text: 'Berhasil menghapus'
    });
  }
  
  



  const tampilkanPinjaman = async () => {
    if (loadingPinjaman) return;

    setLoadingPinjaman(true);

    const apiCall = await fetchInfoPinjaman();
    const { data } = apiCall.data;

    setInfoPinjaman(data.pinjamans);
    setLoadingPinjaman(false);
  };




  const tampilkanSimpanans = async () => {
    if (loadingAnggota) return;

    setLoadingAnggota(true);
    const apiCall = await fetchSimpanans();
    const { data } = apiCall.data;
    setSimpanans(data.simpanans);
    setLoadingAnggota(false);
  };



  const handleTambahSimpanan = async ( id,jumlahSimpanan, nominal ) => {
    if (isLoading) return;
    setIsLoading(true);

    Swal.showLoading();

    const apiResult = await fetchTambahSimpanan(id, jumlahSimpanan, nominal);

    Swal.hideLoading()
    setIsLoading(false)
    // Handle success or error
    const { status } = apiResult.data;
    if (status === 'error') {
      Swal.fire({
        text: `inputan melebihi 750.000`,
       
      }); 
    } else {
    // Set loading to false
    setIsLoading(false);

    // Hide loading
      Swal.hideLoading();
      Swal.fire({
      title: 'Sukses',
      text: 'Berhasil'
    });

  }
  };

  const kurangSimpanan = async (id, type_simpanan, penarikan) => {
    if (isLoading) return;
    setIsLoading(true);

    Swal.showLoading();

    const apiResult = await kurangiSimpanan(id, type_simpanan, penarikan) 

    Swal.hideLoading()
    setIsLoading(false)
    // Handle success or error
    const { status } = apiResult.data;
    if (status === 'failed') {
      Swal.fire({
        text: `inputan tidak boleh melebihi simpanan`,
       
      }); 
    } else {
    // Set loading to false
    setIsLoading(false);

    // Hide loading
      Swal.hideLoading();
      Swal.fire({
      title: 'Sukses',
      text: 'Berhasil'
    });
  }
  };
  
  // Function to pay debts
  const tampilkanBayarHutang = async (id, bayar_hutang) => {
    if (isLoading) return;
    setIsLoading(true);

    Swal.showLoading();

    const apiResult = await  fetchBayarHutang(id, bayar_hutang);

    Swal.hideLoading()
    setIsLoading(false)
    // Handle success or error
    const { status } = apiResult.data;
    if (status === 'fail') {
      Swal.fire({
        text: `inputan tidak boleh melebihi jumlah hutang`,
       
      }); 
    } else {
    // Set loading to false
    setIsLoading(false);

    // Hide loading
      Swal.hideLoading();
      Swal.fire({
      title: 'Sukses',
      text: 'Berhasil'
    });
  }
  };

  // Function to add another loan
  const tampilkanTambahPinjamLagi = async (id, hutang) => {

    if (isLoading) return;
    setIsLoading(true);

    Swal.showLoading();

    const apiResult = await fetchTambahPinjamanLagi(id, hutang);

    Swal.hideLoading();
    Swal.fire({
      text: 'isi semua inputan terlebih dahulu'
    });
   setIsLoading(false);
   Swal.hideLoading()
    // Handle success or error
    const { status } = apiResult.data;
    if (status !== 'Success') {
      Swal.fire({
        text: `berhasil`,
        showConfirmButton: true
      });
    }
  };

  // Function to delete a loan
  const handleDeletePinjaman = async(id) => {
    if (isLoading) return;
    setIsLoading(true);

    Swal.showLoading();

   await fetchHapusPinjaman(id);

  
    // Set loading to false
    setIsLoading(false);

    // Hide loading
      Swal.hideLoading();
      Swal.fire({
      title: 'Sukses',
      text: 'Berhasil menghapus'
    });
  }
  

  
    
  

  // Function to update member information
  const updateMember = async (id, noBaru) =>{
    if (isLoading) return;
    setIsLoading(true);

    Swal.showLoading();

   await apiUpdateMember(id, noBaru);

    setIsLoading(false);

    // Hide loading
      Swal.hideLoading();
      Swal.fire({
      title: 'Sukses',
      text: 'Berhasil mengupdate'
    });
  }
  



  useEffect(() => {
    fetchAnggota();
    tampilkanPinjaman();
    tampilkanSimpanans();
  }, []);


  return (
    <MemberContext.Provider value={{ members, simpanans, infoPinjaman, loadingAdd, fetchTambahPinjaman, updateMember, handleTambahPinjaman, handleTambahSimpanan, kurangSimpanan,fetchAnggota, handleDelete, handleDeletePinjaman, tambahAnggota, tampilkanBayarHutang, tampilkanTambahPinjamLagi, tampilkanPinjaman, tampilkanSimpanans }}>
      {children}
    </MemberContext.Provider>
  );
};

export { MemberProvider, useMembers };