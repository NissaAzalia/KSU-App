import axios from "axios"
import { getToken } from "../../config/api"

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