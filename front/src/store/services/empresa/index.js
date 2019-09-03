import axios from 'axios'
import URL from '../../../../src/consts'

const url = URL.API_URL + '/empresa'

export const getList = () => {

    return axios.get(`${url}`) 
                 .then ( response => response.data )
                 .catch(err => err);

}