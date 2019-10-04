import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://api.openweathermap.org/'
});

export const setToken = token => {
  localStorage.setItem('token', token);
};

export const getToken = () => localStorage.getItem('token');
