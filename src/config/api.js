import axios from "axios"
import { http } from "./url";

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


