import { getToken } from "../../helpers/LocalStorage";
import axios from "axios"

// export const fetchInfoPinjaman = async () => {
//     const token = getToken();

//    return axios.get('https://apiksu.ndamelweb.com/pinjaman', {
//       headers: {
//         'Authorization': `Bearer` + token,
//       }
//     })
//     .then((response) => {
//       return response;
//     })
//     .catch((error)=>{
//       return error.response.data
//     });
//   };

export const fetchInfoPinjaman = async () => {
  const token= getToken();

  return axios.get('https://apiksu.ndamelweb.com/pinjaman',{
    headers:{
      'Authorization': 'Bearer ' + token,
    }
  })
  .then ((response) => {
    return response;
  })
  .catch((error) =>{
    return error.response.data
  })
};
