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
        Swal.fire({
          title: "Loading",
          text: "Mengirim data.."
        })
        Swal.showLoading()

        // memanggil api menggunakan axios
        const apiResult = await handleLogin(user,password)
        const { status, data, message } = apiResult.data

        if (status !=  'success') {
            // jika gagal tampilkan peringatan  
            Swal.hideLoading()
            Swal.fire({
                title:`Login Gagal`,
                text: message,
                icon:'error',
                showConfirmButton:false,
            })
            return;
        }
        saveToken(data.token)
        setIsLoading(false)
        Swal.hideLoading()
        Swal.fire({
          title: 'Sukses',
          text: 'Berhasil Login'
        })
          setIsLoggedin(true)
    }

    const doLoginAdmin = async (user,password) => {
        if (isLoading) return

        setIsLoading(true)

        // memanggil api dengan data email & password
        // console.log("akan melakukan login dengan: ", user,password)

        Swal.fire({
          title: "Loading",
          text: "Mengirim data.."
        })
        Swal.showLoading()
        // memanggil api menggunakan axios
        const apiResult = await handleLoginAdmin(user,password)
        const { status, data, message } = apiResult.data

        if (status !=  'success') {
           // jika gagal tampilkan peringatan  
            // alert(`Login gagal: ${message}`)
            Swal.hideLoading()
            Swal.fire({
              title:`Login Gagal`,
              text: message,
              icon:'error',
              showConfirmButton:false,
            })
            return;
        }

        saveToken(data.token)
        setIsLoading(false)
        Swal.hideLoading()
        // jika berhasil maka setIsLoggedin -> true
        Swal.fire({
          title: 'Sukses',
          text: 'Berhasil Login'
        })
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
