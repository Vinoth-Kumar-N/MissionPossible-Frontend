import axios from 'axios';
const API = 'https://missionpossible-backend-ipd0.onrender.com';

const RegisUser = (data) => axios.post(`${API}/user/register`, data);
const LoginUser = (data) => axios.post(`${API}/user/login`, data);

export { RegisUser, LoginUser };