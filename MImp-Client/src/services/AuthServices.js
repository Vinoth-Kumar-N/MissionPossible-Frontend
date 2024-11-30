import axios from 'axios';
import {getUserdata, removeUserdata} from '../services/storageServices';
// const API = 'https://missionpossible-backend-ipd0.onrender.com';
const API = 'http://localhost:1111';

const RegisUser = (data) => axios.post(`${API}/user/register`, data);
const LoginUser = (data) => axios.post(`${API}/user/login`, data);

const isAuthenticated = () => {
    return getUserdata()  != null? true : false; 
}
 
const logout = () => {
    removeUserdata();
}

export { RegisUser, LoginUser, isAuthenticated, logout };
