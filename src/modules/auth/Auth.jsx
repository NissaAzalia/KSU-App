/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"
import { handleLogin, handleLoginAdmin } from "../../config/api"
import { saveToken } from "../../helpers/LocalStorage"
import Swal from "sweetalert2"

// nilai default
const initialAuthState = {
    isLoggedin: false,
    authority: "",
    doLogin: () => { },
    doLoginAdmin: () => {},
    doLogout: () => { },
    changeAuthority: () => {},
}

// buat context
const AuthContext = createContext(initialAuthState)

//buat costum hook
const useAuth = () => {
    return useContext(AuthContext)
}

// buat provider
const AuthProvider = ({ children }) => {
    // state
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [authority, setAuthority] = useState("")

    const doLogin = async (user,password) => {
        if (isLoading) return

        setIsLoading(true)

        // memanggil api dengan data email & password
        // console.log("akan melakukan login dengan: ", user,password)

        // memanggil api menggunakan axios
        const apiResult = await handleLogin(user,password)
        setIsLoading(false)
        const { status, data, message } = apiResult.data

        if (status !=  'success') {
            // jika gagal tampilkan peringatan  
            // alert(`Login gagal: ${message}`)
            Swal.fire({
                title:`Login Gagal \n ${message}`,
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
            setIsLoggedin(true)
        },2500)

    }

    const doLoginAdmin = async (user,password) => {
        if (isLoading) return

        setIsLoading(true)

        // memanggil api dengan data email & password
        // console.log("akan melakukan login dengan: ", user,password)

        // memanggil api menggunakan axios
        const apiResult = await handleLoginAdmin(user,password)
        setIsLoading(false)
        const { status, data, message } = apiResult.data

        if (status !=  'success') {
            // jika gagal tampilkan peringatan  
            alert(`Login gagal: ${message}`)
            return
        }

        saveToken(data.token)
        // jika berhasil maka setIsLoggedin -> true
        setIsLoggedin(true)

    }

    const doLogout = () => {
        setIsLoggedin(false)
        
    }

    const changeAuthority = (auth) => {
        setAuthority(auth)
    }

    // return provider
    return(
        <AuthContext.Provider value={ {isLoggedin, authority, setIsLoggedin, doLogin, doLoginAdmin, doLogout, changeAuthority} }>
            {children}
        </AuthContext.Provider>
    )
}

// export provider & hook
export {AuthProvider,useAuth}
