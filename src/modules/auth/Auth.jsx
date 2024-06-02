/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"
import { handleLogin, handleLoginAdmin } from "../../config/api"
import { getToken, removeToken, saveToken } from "../../helpers/LocalStorage"
import Swal from "sweetalert2"
// nilai default
const initialAuthState = {
  isLoggedin: false,
  authority: "",
  name: "",
  doLogin: () => { },
  doLoginAdmin: () => { },
  doLogout: () => { },
  changeAuthority: () => { },
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
  const [name, setName] = useState("");

  const doRole = (role) => {
    return localStorage.setItem('User_Role', role);
  }

  const getRole = () => {
    return localStorage.getItem('User_Role') ?? null;
  }

  const removeRole = () => {
    return localStorage.removeItem('User_Role');
  }

  const saveUserName = (name) => {
    return localStorage.setItem('User_Name', name);
  }

  const getUserName = () => {
    return localStorage.getItem('User_Name') ?? null;
  }

  const removeUserName = () => {
    return localStorage.removeItem('User_Name');
  }

  const doLogin = async (user, password) => {
    //loading di set
    if (isLoading) return

    setIsLoading(true)
    Swal.fire({
      title: "Loading",
    })
    Swal.showLoading()

    // memanggil api menggunakan axios
    const apiResult = await handleLogin(user, password)
    const { data, status, message } = apiResult.data

    //loading berhenti ketika error
    Swal.hideLoading()
    setIsLoading(false)
    if (status != 'success') {
      Swal.fire({
        title: ` ${message}`
      })
      return;
    }

    //lanjut loading jika tidak ada kesalahan
    Swal.showLoading()
    setIsLoading(true)
    //setData
    saveUserName(data.name);
    saveToken(data.token)
    //loading berhenti
    setIsLoading(false)
    //loading aktif
    setIsLoading(true)
    //muncul keterangan sukses
    Swal.fire({
      title: 'Sukses',
      text: 'Berhasil Login'
    })
    //check apakah dia nasabah
    doRole('Nasabah')
    //jika benar semua maka bisa masuk ke halaman dasboard
    setIsLoggedin(true)
    //mengeset nama
    setName(data.name);
  }

  const doLoginAdmin = async (user, password) => {
        //loading di set
        if (isLoading) return

        setIsLoading(true)
        Swal.fire({
          title: "Loading",
        })
        Swal.showLoading()
    
    // memanggil api menggunakan axios
    const apiResult = await handleLoginAdmin(user, password)
    const { status, data, message } = apiResult.data

    //loading berhenti ketika error
    Swal.hideLoading()
    setIsLoading(false)
    if (status != 'success') {
      Swal.fire({
        title: `${message}`
      })
      return;
    }

    //lanjut loading jika tidak ada kesalahan
    Swal.showLoading()
    setIsLoading(true)
    //setData
    saveUserName(data.name);
    saveToken(data.token)
    //loading berhenti
    setIsLoading(false)
    //loading aktif
    setIsLoading(true)
    //muncul keterangan sukses
    Swal.fire({
      title: 'Sukses',
      text: 'Berhasil Login'
    })
    //check apakah dia nasabah
    doRole('Admin')
    //jika benar semua maka bisa masuk ke halaman dasboard
    setIsLoggedin(true)
    //mengeset nama
    setName(data.name);
  }

  const doLogout = () => {
    getToken()
    setIsLoggedin(false)
    removeToken();
    removeRole();
    removeUserName()
    setName("");
    window.location.reload() 
  }

  const changeAuthority = (auth) => {
    setAuthority(auth)
  }

  useEffect(() => {
    const token = getToken();
    const Role = getRole();
    const Name = getUserName();
    if (token !== null && Role !== null || Name !== null) {
      setName(Name);
      setIsLoggedin(true);
      setAuthority(Role);
    }
  }, [name]);

  return (
    <AuthContext.Provider value={{ isLoggedin, isLoading, authority, name, setIsLoading, setIsLoggedin, doLogin, doLoginAdmin, doLogout, changeAuthority }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }
