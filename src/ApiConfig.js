import Axios from 'axios'

const BASE_URL =  `http://localhost:3000`

export const api = Axios.create({
    baseURL: BASE_URL,
})