import axios from "axios";

const API_URL = "http://localhost:3001/api";

// Movies API
export const getMovies = () => axios.get(`${API_URL}/movies`);
export const getMovieById = (id) => axios.get(`${API_URL}/movies/${id}`);

// My List API
export const getMyList = () => axios.get(`${API_URL}/myList`);
export const addToMyList = (id) => axios.post(`${API_URL}/myList/${id}`);
export const removeFromMyList = (id) => axios.delete(`${API_URL}/myList/${id}`);
