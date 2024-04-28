import { createContext, useContext, useEffect, useState } from "react"

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

    const doLogin = async (username, password) => {
        

        // Lakukan verifikasi username dan password di sini
        if (username === "admin" && password === "admin") {
            setIsLoggedin(true); // Set isLoggedIn menjadi true jika login berhasil
        } else {
            setIsLoggedin(false); // Set isLoggedIn menjadi false jika login gagal
        }
    }

    const doLogout = () =>{
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
