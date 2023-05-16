import axios from 'axios';

const BASE_URL = 'https://6461a41f185dd9877e4045e7.mockapi.io';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
});

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error?.response?.data || 'Something went wrong!'),
);

export default axiosInstance;
