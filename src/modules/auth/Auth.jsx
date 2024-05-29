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
  const [name,setName] = useState("");

  const doRole = (role) => {
    return localStorage.setItem('User_Role',role);
  }

  const getRole = () => {
    return localStorage.getItem('User_Role') ?? null;
  }

  const removeRole = () => {
    return localStorage.removeItem('User_Role');
  }

  const saveUserName = (name) => {
    return localStorage.setItem('User_Name',name);
  }

  const getUserName = () => {
    return localStorage.getItem('User_Name') ?? null;
  }

  const removeUserName = () => {
    return localStorage.removeItem('User_Name');
  }

  const doLogin = async (user, password) => {
    if (isLoading) return

    setIsLoading(true)
    Swal.fire({
      title: "Loading",
      text: "Mengirim data.."
    })
    Swal.showLoading()

    // memanggil api menggunakan axios
    const apiResult = await handleLogin(user, password)
    const { status, data, message } = apiResult.data

    if (status != 'success') {
      // jika gagal tampilkan peringatan  
      Swal.hideLoading()
      Swal.fire({
        title: `Login Gagal`,
        text: message,
        icon: 'error',
        showConfirmButton: false,
      })
      return;
    }
    saveUserName(data.name);
    saveToken(data.token)
    setIsLoading(false)
    Swal.hideLoading()
    Swal.fire({
      title: 'Sukses',
      text: 'Berhasil Login'
    })
    doRole('Nasabah')
    setIsLoggedin(true)
    setName(data.name); 
  }

  const doLoginAdmin = async (user, password) => {
    if (isLoading) return

    setIsLoading(true)

    Swal.fire({
      title: "Loading",
      text: "Mengirim data.."
    })
    Swal.showLoading()
    // memanggil api menggunakan axios
    const apiResult = await handleLoginAdmin(user, password)
    const { status, data, message } = apiResult.data

    if (status != 'success') {
      // jika gagal tampilkan peringatan  
      // alert(`Login gagal: ${message}`)
      Swal.hideLoading()
      Swal.fire({
        title: `Login Gagal`,
        text: message,
        icon: 'error',
        showConfirmButton: false,
      })
      return;
    }

    saveUserName(data.name);
    saveToken(data.token)
    setIsLoading(false)
    Swal.hideLoading()
    // jika berhasil maka setIsLoggedin -> true
    Swal.fire({
      title: 'Sukses',
      text: 'Berhasil Login'
    })
    doRole('Admin')
    setIsLoggedin(true)
    setName(data.name); 
  }

  const doLogout = () => {
    getToken()
    setIsLoggedin(false)
    removeToken();
    removeRole();
    removeUserName()
    setName("");
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
    <AuthContext.Provider value={{ isLoggedin, authority, name, setIsLoggedin, doLogin, doLoginAdmin, doLogout, changeAuthority }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, useAuth }
