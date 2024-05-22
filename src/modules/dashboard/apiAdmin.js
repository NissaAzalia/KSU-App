import { getToken } from "../../helpers/LocalStorage";


export const daftarAnggota = async () => {
    const token = getToken()
    const anggota = await axios
    .get(http + "/nasabah", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error)=>{
      return error.response;
    });
    return anggota;
  };