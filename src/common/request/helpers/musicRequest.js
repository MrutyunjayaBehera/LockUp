import Axios from 'axios';

const musicRequest = Axios.create({
  //   baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
  //   headers: {
  //     'x-rapidapi-key': 'ae17a11a07msh3d8a58482a421eep17c4fdjsn9c9285df066c',
  //     'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
  //   },
  baseURL: 'https://backend-sigma-three-96.vercel.app',
});

musicRequest.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

musicRequest.interceptors.request.use(oldConfig => {
  const newConfig = {
    ...oldConfig,
  };

  const finalConfig = {
    ...newConfig,
  };

  console.log('finalConfig:: ', finalConfig);

  return finalConfig;
});

export {musicRequest};
