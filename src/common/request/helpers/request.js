import Axios from 'axios';

const request = Axios.create({
  baseURL: process.env.REST_BASE_API_URL,
});

request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

request.interceptors.request.use(oldConfig => {
  const newConfig = {
    ...oldConfig,
  };

  const finalConfig = {
    ...newConfig,
    headers: {},
  };

  return finalConfig;
});

export {request};
