import axios from 'axios'
import URL from '../../../consts'

const url = URL.API_URL + '/pessoa'

export const getList = () => {

    return axios.get(`${url}`) 
                 .then ( response => response.data )
                 .catch(err => err);

}