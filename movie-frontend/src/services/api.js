import axios from "axios";

const API_URL = "http://localhost:3001/api";

// Movies API
export const getMovies = () => axios.get(`${API_URL}/movies`);
export const getMovieById = (movieId) => axios.get(`${API_URL}/movies/${movieId}`);

// My List API
export const getMyList = () => axios.get(`${API_URL}/my-list`);
export const addToMyList = async (movieId, title) => {
  try {
    const response = await axios.post(`${API_URL}/my-list`, { movieId, title });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return { message: 'Movie is already in My List' };
    }
    throw error; // Handle other errors as needed
  }
};

export const removeFromMyList = (movieId) => axios.delete(`${API_URL}/my-list/${movieId}`);
