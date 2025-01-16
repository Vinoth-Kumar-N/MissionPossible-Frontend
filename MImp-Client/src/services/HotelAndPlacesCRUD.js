import axios from "axios"

const API = "https://missionpossible-backend-1.onrender.com";
// const API = "http://localhost:1111"

const getHotels = async (id) => {
    return axios.get(`${API}/api/v10/getHotels/${id}`);
}
const getPlaces= async (id) => {
    return axios.get(`${API}/api/v11/getPlaces/${id}`);
}

export {getHotels, getPlaces};

