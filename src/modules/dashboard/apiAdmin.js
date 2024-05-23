import axios from "axios";
import { getToken } from "../../helpers/LocalStorage";
import { http } from "../../config/url";


// export const daftarAnggota = async () => {
//     const token = getToken();
//     const anggota = await axios
//     .get(http + "/nasabah", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((response) => {
//       return response;
//     })
//     .catch((error)=>{
//       return error.response;
//     });
//     return anggota;
//   };

  export const addAnggota = async (nama, notelp, username, password) => {
    const token = getToken();
    try {
      const response = await axios.post(http + "/add-user",{
        nama: nama,
        notelp: notelp,
        username: username,
        password: password,
      },{
        headers: {
          'Authorization': 'Bearer' + token
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