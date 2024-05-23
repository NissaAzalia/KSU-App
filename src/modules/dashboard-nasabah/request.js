import axios from "axios"

import { http } from "../../config/url"
import { getToken } from "../../helpers/LocalStorage"


export const apiFetchSimpanan = async () => {
    const token = getToken();

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

export const apiFetchServis = async (jenisBarang, alamat, jenisKerusakan) => {
    const token = getToken();
    try {
        const response = await axios.post(http + "/pinjam-jasa", {
            jenisBarang: jenisBarang,
            alamat: alamat,
            jenisKerusakan: jenisKerusakan,
        }, {
            headers: {
                'Authorization ': ' Bearer ' + token
            }
        });
        return response;
    } catch (error) {
        return error.response.data;
    }
}
       
   

