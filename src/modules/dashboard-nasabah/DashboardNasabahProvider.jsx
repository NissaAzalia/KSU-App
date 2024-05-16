import { createContext, useContext, useEffect, useState } from "react"
import { apiFetchSimpanan } from "./request"

const initDashboardNasabah = {
    simpanan: null,
    loadingSimpanan: false,
    fetchSimpanan: () => {},
}

const DashboardNasabahContext = createContext(initDashboardNasabah)

const useDashboardNasabah = () => {
    return useContext(DashboardNasabahContext)
}


const DasboardNasabahProvider = ({children}) => {
    const [simpanan, setSimpanan] = useState(null)
    const [loadingSimpanan, setLoadingSimpanan] = useState(false)

    const fetchSimpanan = async () => {
        if (loadingSimpanan == true) return

        setLoadingSimpanan(true)
        // call api
        const apiCall = await apiFetchSimpanan()
        const {data} = apiCall.data

        setSimpanan(data.simpanan)

        setLoadingSimpanan(false)
    }

    useEffect(() => {
        fetchSimpanan()
    }, [])

    return (
        <DashboardNasabahContext.Provider value={{simpanan, loadingSimpanan}}>
            {children}
        </DashboardNasabahContext.Provider>
    )
    
}

export {useDashboardNasabah, DasboardNasabahProvider}