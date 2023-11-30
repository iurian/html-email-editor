import axios from 'axios';
import { API_BASE_URL } from '../constants/api';

if (process.env.NODE_ENV === 'development') {
  console.log('Running in development mode');
} else {
  console.log('Running in production mode');
}

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
});

export default axiosClient;
