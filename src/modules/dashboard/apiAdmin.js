import axios from "axios";
import { getToken } from "../../helpers/LocalStorage";
import { http } from "../../config/url";

export const addAnggota = async (nama, notelp, username, password) => {
  const token = getToken();
  try {
    const response = await axios.post(http + "/add-user", {
      nama: nama,
      notelp: notelp,
      username: username,
      password: password,
    }, {
      headers: {
        'Authorization ': 'Bearer ' + token
      }
    });
    return response;
  } catch (error) {
    return error.response.data;
  }
}

export const daftarAnggota = async () => {
  const token = getToken();

  return axios.get('https://apiksu.ndamelweb.com/nasabah', {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
    .then(response => {
      return response

    })
    .catch(err => {
      return err.response.data
    })
}

export const deleteMember = async () => {
  const token = getToken();

  return axios.get('https://apiksu.ndamelweb.com/nasabah/' + id, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
    .then(response => {
      return response
    })
    .catch(err => {
      return err.response.data
    })
}

export const updateMember = async () => {
  const token = getToken();

  return axios.put('https://apiksu.ndamelweb.com/nasabah/' + id, {}, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
    .then(response => {
      return response
    })
    .catch(err => {
      return err.response.data
    })
}



export const fetchInfoPinjaman = async () => {
  const token = getToken();

  return axios.get('https://apiksu.ndamelweb.com/pinjaman', {
    headers: {
      'Authorization': 'Bearer ' + token,
    }
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response.data
    })
};

