import axios from "axios";

const api = axios.create({
    baseURL: 'https://10.199.10.76:3001'
});

export { api } 