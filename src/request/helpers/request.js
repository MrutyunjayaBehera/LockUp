import Axios from 'axios';

const request = Axios.create({
  baseURL: 'https://backend-sigma-three-96.vercel.app',
});

request.interceptors.response.use(
  response => {
    return {
      data: response?.data,
      status: response?.status,
    };
  },
  error => {
    return Promise.reject({
      message: error?.response?.data?.error,
      status: error?.response?.data?.status,
    });
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
