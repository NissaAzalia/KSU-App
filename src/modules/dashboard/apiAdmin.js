import axios from "axios";
import { getToken } from "../../helpers/LocalStorage";
import { http } from "../../config/url";
// import { get } from "react-model/src/helper";

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


export const deleteMember = async (id) => {
  const token = getToken();

  return axios.delete(`https://apiksu.ndamelweb.com/nasabah/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response.data;
    });
}

export const apiUpdateMember = async (id, noBaru) => {
  const token = getToken();


  return axios.put(`https://apiksu.ndamelweb.com/nasabah/${id}`, { nomor_baru: noBaru }, {

    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
    .then(response => {
      return response.data; // Mengembalikan data yang diterima dari backend
    })
    .catch(err => {
      throw err.response.data; // Melemparkan pesan error dari backend
    });
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

export const fetchBayarHutang = async (id, bayar_hutang) => {
  const token = getToken();

  return axios.put(`https://apiksu.ndamelweb.com/nasabah/updatepinjaman/` + id, {
    bayar_hutang: bayar_hutang
  },
    {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => {
      return response
    })
    .catch(err => {
      return err.response
    })
}


export const fetchTambahPinjamanLagi = async (id, hutang) => {
  const token = getToken();

  return axios.put(`https://apiksu.ndamelweb.com/nasabah/tambahhutang/` + id, {
    hutang: hutang
  },
    {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => {
      return response
    })
    .catch(err => {
      return err.response
    })
}

export const fetchHapusPinjaman = async (id) => {
  const token = getToken()
  return axios.delete(`https://apiksu.ndamelweb.com/pinjaman/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response.data;
    });
}
export const tambahPinjaman = async (nama, jumlah_pinjaman) => {
  const token = getToken();
  try {
    const response = await axios.post(http + "/add-pinjaman", {
      nama: nama,
      jumlah_pinjaman: jumlah_pinjaman,
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




export const fetchSimpanans = async () => {
  const token = getToken();

  return axios.get('https://apiksu.ndamelweb.com/simpanan', {
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


export const fetchTambahSimpanan = async (id, simpanan_pokok, simpanan_wajib, simpanan_sukarela, simpanan_hariraya) => {
  const token = getToken();

  return axios.put(`https://apiksu.ndamelweb.com/nasabah/updatesimpanan/` + id, {
    simpanan_pokok: simpanan_pokok,
    simpanan_wajib: simpanan_wajib,
    simpanan_sukarela: simpanan_sukarela,
    simpanan_hariraya: simpanan_hariraya
  },
    {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => {
      return response
    })
    .catch(err => {
      return err.response
    })
}

export const kurangiSukarela = async (id, simpananSukarela,simpananHariraya) => {
  const token = getToken();

  return axios.put(`https://apiksu.ndamelweb.com/nasabah/withdrawsimpanan/` + id, {
    simpanan_sukarela: simpananSukarela,
    simpanan_hariraya: simpananHariraya
  },
    {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => {
      return response
    })
    .catch(err => {
      return err.response
  })
}

export const kurangiHariRaya = async (id, simpananSukarela,simpananHariraya) => {
  const token = getToken();

  return axios.put(`https://apiksu.ndamelweb.com/nasabah/withdrawsimpanan/` + id, {
    simpanan_sukarela: simpananSukarela,
    simpanan_hariraya: simpananHariraya
  },
    {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => {
      return response
    })
    .catch(err => {
      return err.response
  })
}