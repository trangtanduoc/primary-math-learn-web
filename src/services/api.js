import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:5001/api', //  Change this to your backend
});

export default api;