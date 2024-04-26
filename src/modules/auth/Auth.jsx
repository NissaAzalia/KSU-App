import { createContext, useContext, useEffect, useState } from "react"

// nilai default
const initialAuthState = {
    isLoggedin: false,
    doLogin: ()=> {},
    doLogout: ()=> {}
}

// buat context
const AuthContext = createContext(initialAuthState)

//buat costum hook
const useAuth = ()=>{
    return useContext (AuthContext)
}

// buat provider
useEffect(() => {
    const token = getToken()
    if(token != null){
        setIsLoggedin (true)
    }
}, [])