import axios from 'axios';
import { getUserdata, removeUserdata } from '../services/storageServices';
const API = 'https://missionpossible-backend-6x8r.onrender.com';
// const API = 'http://localhost:1111';

const RegisUser = (data) => axios.post(`${API}/user/register`, data);
const LoginUser = (data) => axios.post(`${API}/user/login`, data);

const isAuthenticated = () => {
    return getUserdata() != null ? true : false;
}


const isTokenValid = (token) => {
    if (!token) {
        return false;
    }
    try {
        const decoded = jwt_decode(token);
        const currTime = Math.floor(Date.now() / 1000);
        return decoded.exp > currTime; 
    } catch (error) {
        return false;
    }
};

const logout = () => {
    removeUserdata();
}

export { RegisUser, LoginUser, isAuthenticated, isTokenValid, logout };
