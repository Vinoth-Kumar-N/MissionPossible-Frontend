import axios from 'axios';
const API = 'http://localhost:1111';

const RegisUser = (data) => axios.post(`${API}/user/register`, data);
const LoginUser = (data) => axios.post(`${API}/user/login`, data);

export { RegisUser, LoginUser };