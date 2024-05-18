/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react"
import { apiFetchPinjaman, apiFetchSimpanan, handleServis } from "./request"
import Swal from "sweetalert2"
import { saveToken } from "../../helpers/LocalStorage"

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

        setLoadingPinjaman(false)
    }

    const doServis = async (jenisBarang, alamat, tanggal) => {
        if (loadingServis) return

        setLoadingServis(true)

        // memanggil api dengan data email & password
        // console.log("akan melakukan login dengan: ", user,password)

        // memanggil api menggunakan axios
        const apiResult = await handleServis(jenisBarang, alamat, tanggal)
        setLoadingServis(false)
        const { status, data, message } = apiResult.data
        console.log(apiResult.data)

        if (status !=  'success') {
            // jika gagal tampilkan peringatan  
            // alert(`Login gagal: ${message}`)
            Swal.fire({
                title:`Gagal mengirim servis \n ${message}`,
                icon:'error',
                showConfirmButton:false,
                timer:2500
            })
            return;
        }

        saveToken(data.token)
        // jika berhasil maka setIsLoggedin -> true
        Swal.fire({
            title:`Login Berhasil \n ${message}`,
            icon:'success',
            showConfirmButton:false,
            timer:2000
        })
        setTimeout(() => {
            setServis(true)
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