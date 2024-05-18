import axios from "axios"
import { getToken } from "../../config/api"
import { http } from "../../config/url"

export const apiFetchSimpanan = async () => {
    const token = getToken()

    return axios.get('https://apiksu.ndamelweb.com/simpananUser', {
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

export const apiFetchPinjaman = async () => {
    const token = getToken();

    return axios.get('https://apiksu.ndamelweb.com/pinjamanUser', {
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

export const handleServis = async (jenisBarang, alamat, tanggal) => {
    const apiServis = await axios
        .post(http + "/pinjam-jasa", {
            jenisBarang: jenisBarang,
            alamat: alamat,
            tanggal: tanggal,
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
    return apiServis;
};
