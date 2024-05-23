/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react"
import { apiFetchBeliBarang, apiFetchPinjaman, apiFetchServis,apiFetchPinjamUang, apiFetchSimpanan } from "./request"
import Swal from "sweetalert2"


const initDashboardNasabah = {
    simpanan: null,
    pinjaman: null,
    servis:false,
    beliBarang:false,
    pinjamUang:false,
    loadingSimpanan: false,
    loadingPinjaman: false,
    loadingServis:false,
    loadingPinjamUang:false,
    loadingBeliBarang:false,
    fetchSimpanan: () => {},
    fetchPinjaman: () => {},
    fetchServis:() => {},
    fetchBeliBarang:() => {},
    fetchBeliBarang:() => {},

}

const DashboardNasabahContext = createContext(initDashboardNasabah)

const useDashboardNasabah = () => {
    return useContext(DashboardNasabahContext)
}


const DasboardNasabahProvider = ({children}) => {
    const [simpanan, setSimpanan] = useState(null)
    const [pinjaman, setPinjaman] = useState(null)
    const [servis, setServis] = useState(false)
    const [beliBarang, setBeliBarang] = useState(false)
    const [pinjamUang, setPinjamUang] = useState(false)
    const [loadingSimpanan, setLoadingSimpanan] = useState(false)
    const [loadingPinjaman, setLoadingPinjaman] = useState(false)
    const [loadingServis, setLoadingServis] = useState(false)
    const [loadingBeliBarang, setLoadingBeliBarang] = useState(false)
    const [loadingPinjamUang, setLoadingPinjamUang] = useState(false)

    const fetchSimpanan = async () => {
        if (loadingSimpanan == true) return

        setLoadingSimpanan(true)
        // call api
        const apiCall = await apiFetchSimpanan()
        const {data} = apiCall.data

        setSimpanan(data.simpanan)

        setLoadingSimpanan(false)
    }

    const fetchPinjaman = async () => {
        if (loadingPinjaman == true) return

        setLoadingPinjaman(true)
        // call api
        const apiCall = await apiFetchPinjaman()
        const {data} = apiCall.data

        setPinjaman(data.pinjaman)
        console.log(data.pinjaman)
        setLoadingPinjaman(false)
    }

    const doServis = async (jenisBarang, alamat, jenisKerusakan) => {
      // cek loading
      if (loadingServis) return

      // set loading true
      setLoadingServis(true)

      // tampilkan loading pake swal
      Swal.fire({
        title: "Loading",
        text: "Mengirim data.."
      })
      Swal.showLoading()

      // fetch api
      const apiResult = await apiFetchServis(jenisBarang, alamat, jenisKerusakan)
      const { status, message} = apiResult.data

      // cek sukses / error
      if (status != 'success') {
        Swal.hideLoading()
        Swal.fire({
          title: `Gagal mengirim service`,
          text: message,
          showConfirmButton: true
        })
      }

      // set loading false
      setLoadingServis(false)

      // hilangkan tampilan loading
      Swal.hideLoading()
      Swal.fire({
        title: 'Sukses',
        text: 'Berhasil mengirim data servis'
      })

      // selesai

    }

    const doBeliBarang = async (nama_barang, alamat, jumlah_barang) => {
      if (loadingBeliBarang) return
      setLoadingBeliBarang(true)

      Swal.fire({
        title: "Loading",
        text: "Mengirim data.."
      })
      Swal.showLoading()

      const apiResult = await apiFetchBeliBarang(nama_barang, alamat, jumlah_barang)
      const {status, message} = apiResult.data

      if (status != 'success') {
        Swal.hideLoading()
        Swal.fire({
          title: 'Gagal mengirim service',
          text: message,
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

const doPinjamUang = async (jumlah, tenor) => {
  // cek loading
  if (loadingPinjamUang) return

  // set loading truee
  setLoadingPinjamUang(true)

  // tampilkan loading pake swal
  Swal.fire({
    title: "Loading",
    text: "Mengirim data.."
  })
  Swal.showLoading()

  // fetch api
  const apiResult = await apiFetchPinjamUang(jumlah, tenor)
  const { status, message} = apiResult.data

  // cek sukses / error
  if (status != 'success') {
    Swal.hideLoading()
    Swal.fire({
      title: `Gagal mengirim data`,
      text: message,
      showConfirmButton: true
    })
  }

  // set loading false
  setLoadingPinjamUang(false)

  // hilangkan tampilan loading
  Swal.hideLoading()
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
        <DashboardNasabahContext.Provider value={{simpanan, pinjaman, servis, beliBarang,pinjamUang, setServis, doServis,doPinjamUang, setBeliBarang,setPinjamUang, doBeliBarang, loadingSimpanan, loadingPinjaman, loadingServis, loadingBeliBarang, loadingPinjamUang}}>
            {children}
        </DashboardNasabahContext.Provider>
    )
    
}

export {useDashboardNasabah, DasboardNasabahProvider}