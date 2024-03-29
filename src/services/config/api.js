import axios from 'axios';
const BASE_URL = 'https://6606fe26be53febb857efe71.mockapi.io/redux-toolkit/v1/';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
})

export default api;