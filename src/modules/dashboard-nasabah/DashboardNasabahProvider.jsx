/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react"
import { apiFetchPinjaman, apiFetchServis, apiFetchSimpanan } from "./request"
import Swal from "sweetalert2"
import { saveToken } from "../../helpers/LocalStorage"
let timerInterval

const initDashboardNasabah = {
    simpanan: null,
    pinjaman: null,
    servis:false,
    loadingSimpanan: false,
    loadingPinjaman: false,
    loadingServis:false,
    fetchSimpanan: () => {},
    fetchPinjaman: () => {},
    fetchServis:() => {},

}

const DashboardNasabahContext = createContext(initDashboardNasabah)

const useDashboardNasabah = () => {
    return useContext(DashboardNasabahContext)
}


const DasboardNasabahProvider = ({children}) => {
    const [simpanan, setSimpanan] = useState(null)
    const [pinjaman, setPinjaman] = useState(null)
    const [servis, setServis] = useState(false)
    const [loadingSimpanan, setLoadingSimpanan] = useState(false)
    const [loadingPinjaman, setLoadingPinjaman] = useState(false)
    const [loadingServis, setLoadingServis] = useState(false)

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
        saveToken(data.token)
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

    

    useEffect(() => {
        fetchPinjaman()
        fetchSimpanan()
        doServis()
    }, [])
    

    return (
        <DashboardNasabahContext.Provider value={{simpanan, pinjaman, servis, setServis, doServis, loadingSimpanan, loadingPinjaman, loadingServis}}>
            {children}
        </DashboardNasabahContext.Provider>
    )
    
}

export {useDashboardNasabah, DasboardNasabahProvider}