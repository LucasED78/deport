import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.thesportsdb.com/api/v1/json/4013017'
});

export default api;