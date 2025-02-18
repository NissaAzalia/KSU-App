/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react"
import { apiFetchSimpanan, apiFetchPinjaman, apiFetchServis, apiFetchBeliBarang, apiFetchPinjamMobil, apiFetchPinjamUang } from "./request"
import Swal from "sweetalert2"


const initDashboardNasabah = {
  simpanan: null,
  pinjaman: null,
  servis: false,
  beliBarang: false,
  pinjamMobil: false,
  pinjamUang: false,
  loadingSimpanan: false,
  loadingPinjaman: false,
  loadingServis: false,
  loadingBeliBarang: false,
  loadingPinjamMobil: false,
  loadingPinjamUang: false,

  fetchSimpanan: () => { },
  fetchPinjaman: () => { },
  fetchServis: () => { },
  fetchBeliBarang: () => { },
  fetchPinjamMobil: () => { },
  fetchPinjamUang: () => { },
}

const DashboardNasabahContext = createContext(initDashboardNasabah)

const useDashboardNasabah = () => {
  return useContext(DashboardNasabahContext)
}


const DasboardNasabahProvider = ({ children }) => {
  const [simpanan, setSimpanan] = useState(null)
  const [pinjaman, setPinjaman] = useState(null)
  const [servis, setServis] = useState(false)
  const [beliBarang, setBeliBarang] = useState(false)
  const [pinjamMobil, setPinjamMobil] = useState(false)
  const [pinjamUang, setPinjamUang] = useState(false)

  const [loadingSimpanan, setLoadingSimpanan] = useState(false)
  const [loadingPinjaman, setLoadingPinjaman] = useState(false)
  const [loadingServis, setLoadingServis] = useState(false)
  const [loadingBeliBarang, setLoadingBeliBarang] = useState(false)
  const [loadingPinjamMobil, setLoadingPinjamMobil] = useState(false)
  const [loadingPinjamUang, setLoadingPinjamUang] = useState(false)

  const fetchSimpanan = async () => {
    if (loadingSimpanan == true) return

    setLoadingSimpanan(true)

    const apiCall = await apiFetchSimpanan()
    const { data } = apiCall.data

    setSimpanan(data.simpanan)

    setLoadingSimpanan(false)
  }

  const fetchPinjaman = async () => {
    if (loadingPinjaman == true) return

    setLoadingPinjaman(true)

    const apiCall = await apiFetchPinjaman()
    const { data } = apiCall.data

    setPinjaman(data.pinjaman)
    setLoadingPinjaman(false)
  }



  const doServis = async (jenisBarang, alamat, jenisKerusakan) => {
    // cek loading
    //loading di set
    if (loadingServis) return

    setLoadingServis(true)
    Swal.fire({
      title: "Loading",
    })

    Swal.showLoading()

    // fetch api
    const apiResult = await apiFetchServis(jenisBarang, alamat, jenisKerusakan)
    Swal.hideLoading()
    setLoadingServis(false)
    const { status, message } = apiResult.data

    // cek sukses / error
    if (status != 'success') {
      Swal.fire({
        title: `${message}`
      })
      return;
    }

    Swal.showLoading()
    // set loading false
    setLoadingServis(false)

    // hilangkan tampilan loading

    // const {nama} = apiResult.data.data;

    // setNama(nama);
    Swal.fire({
      title: 'Sukses',
      text: 'Berhasil mengirim data servis'
    })

    // selesai
  }

  const doBeliBarang = async (nama_barang, alamat, jumlah_barang) => {
    if (loadingBeliBarang) return
    setLoadingBeliBarang(true)

    Swal.showLoading()

    const apiResult = await apiFetchBeliBarang(nama_barang, alamat, jumlah_barang)

    Swal.hideLoading()
    setLoadingBeliBarang(false)
    const { status, message } = apiResult.data

    if (status != 'success') {
      Swal.hideLoading()
      Swal.fire({
        showConfirmButton: true
      })
    }

    setLoadingBeliBarang(false)

    Swal.hideLoading()
    Swal.fire({
      title: 'Sukses',
      text: 'Berhasil mengirim data Beli Barang'
    })
  }


  const doPinjamMobil = async (tanggal, gunakanSopir) => {
    // cek loading
    if (loadingPinjamMobil) return

    // set loading true
    setLoadingPinjamMobil(true)

    // tampilkan loading pake swal
    Swal.showLoading()

    // fetch api
    const apiResult = await apiFetchPinjamMobil(tanggal, gunakanSopir)
    Swal.hideLoading()
    setLoadingPinjamUang(false)
    const { status, message } = apiResult.data

  
    // cek sukses / error
    if (status != 'success') {
      Swal.hideLoading()
      Swal.fire({
        title: `Gagal mengirim pinjaman mobil`,
        text: message,
        showConfirmButton: true
      })
    }

    // set loading false
    setLoadingPinjamMobil(false)

    // hilangkan tampilan loading
    Swal.hideLoading()
    Swal.fire({
      title: 'Sukses',
      text: 'Berhasil mengirim data pinjaman mobil'
    })

    // selesai

  }

  const doPinjamUang = async (jumlah, tenor, setNama) => {
    // cek loading
    if (loadingPinjamUang) return

    // set loading true
    setLoadingPinjamUang(true)

    // tampilkan loading pake swal
    Swal.showLoading()

    // fetch api
    const apiResult = await apiFetchPinjamUang(jumlah, tenor)
    Swal.hideLoading()
    setLoadingPinjamUang(false)
    const { status, message } = apiResult.data


    // cek sukses / error
    if (status != 'success') {
      Swal.hideLoading()
      Swal.fire({
        title: `Gagal mengirim data`,
        text: message,
        showConfirmButton: true
      })
    }

    Swal.showLoading()
    // set loading false
    setLoadingPinjamUang(false)
    Swal.fire({
      title: 'Sukses',
      text: 'Berhasil mengirim data pinjam uang'
    })

    // selesai

  }

  useEffect(() => {
    fetchPinjaman()
    fetchSimpanan()
  }, [])


  return (
    <DashboardNasabahContext.Provider value={{ simpanan, pinjaman, servis, beliBarang, pinjamMobil, pinjamUang, setServis, doServis, doPinjamUang, doPinjamMobil, setBeliBarang, setPinjamMobil, setPinjamUang, doBeliBarang, loadingSimpanan, loadingPinjaman, loadingServis, loadingBeliBarang, loadingPinjamMobil, loadingPinjamUang }}>
      {children}
    </DashboardNasabahContext.Provider>
  )

}

export { useDashboardNasabah, DasboardNasabahProvider }