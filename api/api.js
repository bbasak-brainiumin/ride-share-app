// api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://nodehost.mydevfactory.com:8032', // change to your backend URL
});

export const login = (formData) => {
    //console.log(formData);
  return API.post('/api/users/login', formData);
};
export const register = (data) => API.post('/api/users/register', data);

export default API;