import {useCallback} from 'react';
import useRequest from '../../request/hooks/useRequest';
import {ToastAndroid} from 'react-native';
import {storeData} from '../../asyncStorage';
import {useDispatch} from 'react-redux';
import {setProfileState} from '../../store/reducers/profile';

function useLoginWithEmail() {
  const dispatch = useDispatch();

  const [{data, loading}, trigger] = useRequest({
    url: '/login',
    method: 'post',
  });

  const loginWithEmail = useCallback(
    async ({email = '', password = '', onSuccess = () => {}}) => {
      console.log('email:: ', email, password);
      try {
        const response = await trigger({
          data: {
            email,
            password,
          },
        });
        dispatch(setProfileState(response?.data));
        //   TODO - store user data in redux or any global state management tool
        ToastAndroid.show('Login successful!', ToastAndroid.SHORT);
      } catch (error) {
        ToastAndroid.show(error?.message, ToastAndroid.SHORT);
      }
    },
    [dispatch, trigger],
  );

  return {
    loginWithEmail,
    data,
    loading,
  };
}

export default useLoginWithEmail;
