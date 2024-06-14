import {makeUseAxios} from 'axios-hooks';
import {musicRequest} from '../helpers/musicRequest';

const commonConfig = {
  cache: false,
  defaultOptions: {
    ssr: false,
    manual: true,
  },
};

const useMusicRequest = makeUseAxios({
  axios: musicRequest,
  ...commonConfig,
});

export default useMusicRequest;
