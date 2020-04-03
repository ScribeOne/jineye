import axios from 'axios'

// define base url for all api calls with axios
const instance = axios.create({
    baseURL: 'http://localhost:8000/api'
})

export default instance