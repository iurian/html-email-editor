import axios from 'axios';

if (process.env.NODE_ENV === 'development') {
  console.log('Running in development mode');
} else {
  console.log('Running in production mode');
}

const baseURL =
  process.env.NODE_ENV === 'production' || true
    ? `https://sellyagentemailtemplates.azurewebsites.net/api`
    : 'http://localhost:7071/api';

const axiosClient = axios.create({
  baseURL: baseURL,
});

export default axiosClient;
