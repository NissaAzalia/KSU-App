import axios from "axios"
import { http } from "./url";
// import { http } from "./http"

export const handleLogin = async (user, password) => {
    const apiLogin = await axios
      .post(http + "/auth/login", {
        user: user,
        password: password,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    return apiLogin;
  };

  export const handleLoginAdmin = async (name, password) => {
    const apiLogin = await axios
      .post(http + "/auth/loginadmin", {
        name: name,
        password: password,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    return apiLogin;
  };

export const setTokens = (token) => {
    localStorage.setItem('token', token)
}

export const getToken = (token) => {
    return localStorage.getItem('token') ?? null;
}
 export const removeToken = () => {
  localStorage.removeItem('token')
 }

