// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hajime-no-ippo-api.onrender.com/ts/api/v1/boxers',
});

export default api;
