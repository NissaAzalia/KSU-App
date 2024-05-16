import { createContext, useContext, useEffect, useState } from "react"
import { handleLogin } from "../../config/api"

// nilai default
const initialAuthState = {
    isLoggedin: false,
    doLogin: () => { },
    doLogout: () => { }
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

    const doLogin = async (user,password) => {
        // memanggil api dengan data email & password
        console.log("akan melakukan login dengan: ", user,password)

        // memanggil api menggunakan axios
        const apiResult = await handleLogin(user,password)
        console.log(apiResult)

        // jika berhasil maka setIsLoggedin -> true
        
        setIsLoggedin(true)
        
        // jika gagal tampilkan peringatan  
    }

    const doLogout = () => {
        setIsLoggedin(false)
        
    }

    // return provider
    return(
        <AuthContext.Provider value={ {isLoggedin, setIsLoggedin, doLogin, doLogout} }>
            {children}
        </AuthContext.Provider>
    )
}

// export provider & hook
export {AuthProvider,useAuth}
