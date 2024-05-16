/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react"
import { apiFetchPinjaman, apiFetchSimpanan } from "./request"

const initDashboardNasabah = {
    simpanan: null,
    pinjaman: null,
    loadingSimpanan: false,
    loadingPinjaman: false,
    fetchSimpanan: () => {},
    fetchPinjaman: () => {}
}

const DashboardNasabahContext = createContext(initDashboardNasabah)

const useDashboardNasabah = () => {
    return useContext(DashboardNasabahContext)
}


const DasboardNasabahProvider = ({children}) => {
    const [simpanan, setSimpanan] = useState(null)
    const [pinjaman, setPinjaman] = useState(null)
    const [loadingSimpanan, setLoadingSimpanan] = useState(false)
    const [loadingPinjaman, setLoadingPinjaman] = useState(false)

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

    useEffect(() => {
        fetchPinjaman()
        fetchSimpanan()
        // fetchSimpanan()
    }, [])
    

    return (
        <DashboardNasabahContext.Provider value={{simpanan, pinjaman, loadingSimpanan, loadingPinjaman}}>
            {children}
        </DashboardNasabahContext.Provider>
    )
    
}

export {useDashboardNasabah, DasboardNasabahProvider}