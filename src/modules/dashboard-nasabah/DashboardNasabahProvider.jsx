/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react"
import { apiFetchPinjaman, apiFetchServis, apiFetchSimpanan, apiFetchPinjamMobil } from "./request"
import Swal from "sweetalert2"
import { saveToken } from "../../helpers/LocalStorage"
let timerInterval

const initDashboardNasabah = {
    simpanan: null,
    pinjaman: null,
    servis:false,
    pinjamMobil:false,
    loadingSimpanan: false,
    loadingPinjaman: false,
    loadingServis:false,
    loadingPinjamMobil:false,

    fetchSimpanan: () => {},
    fetchPinjaman: () => {},
    fetchServis:() => {},
    fetchPinjamMobil:() => {},

}

const DashboardNasabahContext = createContext(initDashboardNasabah)

const useDashboardNasabah = () => {
    return useContext(DashboardNasabahContext)
}


const DasboardNasabahProvider = ({children}) => {
    const [simpanan, setSimpanan] = useState(null)
    const [pinjaman, setPinjaman] = useState(null)
    const [servis, setServis] = useState(false)
    const [pinjamMobil, setPinjamMobil] = useState(false)
    const [loadingSimpanan, setLoadingSimpanan] = useState(false)
    const [loadingPinjaman, setLoadingPinjaman] = useState(false)
    const [loadingServis, setLoadingServis] = useState(false)
    const [loadingPinjamMobil, setLoadingPinjamMobil] = useState(false)

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
      const {data, status, message} = apiResult.data

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

    const doService = async (jenisBarang, alamat, jenisKerusakan) => {
        if (loadingServis == true) return

        setLoadingServis(true)
        const apiResult = await apiFetchServis(jenisBarang, alamat, jenisKerusakan)
        setLoadingServis(false)
        const { data, status, message } = apiResult.data
        console.log(apiResult)

        if (status !=  'success') {
            Swal.fire({
                title:`Gagal mengirim servis \n ${message}`,
                icon:'error',
                showConfirmButton:false,
                timer:2500
            })
            return;
        }
        
        Swal.fire({
            title: "Loading...",
            html: "<b></b>.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });

        setTimeout(() => {
          Swal.fire({
              title: "Pengajuan",
              text: "Berhasil dikirim",
              icon: "success"
            });

          doServis(true)
      },2500)



    }








    const doPinjamMobil = async (tanggal, gunakanSopir) => {
      // cek loading
      if (loadingPinjamMobil) return

      // set loading true
      setLoadingPinjamMobil(true)

      // tampilkan loading pake swal
      Swal.fire({
        title: "Loading",
        text: "Mengirim data.."
      })
      Swal.showLoading()

      // fetch api
      const apiResult = await apiFetchPinjamMobil(tanggal, gunakanSopir)
      const {data, status, message} = apiResult.data

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

    const doPinjamMobill = async (tanggal, gunakanSopir) => {
        if (loadingPinjamMobil == true) return

        setLoadingPinjamMobil(true)
        const apiResult = await apiFetchPinjamMobil(tanggal, gunakanSopir)
        setLoadingPinjamMobil(false)
        const { data, status, message } = apiResult.data
        console.log(apiResult)

        if (status !=  'success') {
            Swal.fire({
                title:`Gagal mengirim pinjam mobil \n ${message}`,
                icon:'error',
                showConfirmButton:false,
                timer:2500
            })
            return;
        }
        
        Swal.fire({
            title: "Loading...",
            html: "<b></b>.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });

        setTimeout(() => {
          Swal.fire({
              title: "Pengajuan",
              text: "Berhasil dikirim",
              icon: "success"
            });

          doPinjamMobil(true)
      },2500)



    }
  
    useEffect(() => {
        fetchPinjaman()
        fetchSimpanan()
    }, [])
    

    return (
        <DashboardNasabahContext.Provider value={{simpanan, pinjaman, servis, pinjamMobil, setServis, setPinjamMobil, doServis, doPinjamMobil, loadingSimpanan, loadingPinjaman, loadingServis, loadingPinjamMobil}}>
            {children}
        </DashboardNasabahContext.Provider>
    )
    
}

export {useDashboardNasabah, DasboardNasabahProvider}