import axios from 'axios';

export const axiosWeatherClient = axios.create({
  baseURL: 'https://api.openweathermap.org/'
});
//add token to header
export const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/'
});

export const setToken = token => {
  localStorage.setItem('token', token);
};

export const getToken = () => localStorage.getItem('token');
