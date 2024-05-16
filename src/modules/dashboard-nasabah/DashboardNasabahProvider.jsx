import { createContext, useContext, useEffect, useState } from "react"
import { apiFetchSimpanan } from "./request"

const initDashboardNasabah = {
    simpanan: null,
    loadingSimpanan: false,
    loadingLayanan: false,
    fetchSimpanan: () => {},
    fetchLayanan: () => {}
}

const DashboardNasabahContext = createContext(initDashboardNasabah)

const useDashboardNasabah = () => {
    return useContext(DashboardNasabahContext)
}


const DasboardNasabahProvider = ({children}) => {
    const [simpanan, setSimpanan] = useState(null)
    const [loadingSimpanan, setLoadingSimpanan] = useState(false)
    const [loadingLayanan, setLoadingLayanan] = useState(false)

    const fetchSimpanan = async () => {
        if (loadingSimpanan == true) return

        setLoadingSimpanan(true)
        // call api
        const apiCall = await apiFetchSimpanan()
        const {data} = apiCall.data

        setSimpanan(data.simpanan)

        setLoadingSimpanan(false)
    }

    const fetchLayanan = async () => {
        if (loadingLayanan == true) return


        setLoadingLayanan(true)
        // call api
        const apiCall = await apiFetchLayanan()
        const {data} = apiCall.data

        setLoadingSimpanan(data.simpanan)

        setLoadingLayanan(false)
    }

    useEffect(() => {
        fetchSimpanan()
    }, [])

    useEffect(() => {
        fetchLayanan()
    }, [])

    return (
        <DashboardNasabahContext.Provider value={{simpanan, loadingSimpanan, loadingLayanan}}>
            {children}
        </DashboardNasabahContext.Provider>
    )
    
}

export {useDashboardNasabah, DasboardNasabahProvider}