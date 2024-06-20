import React, {useCallback} from 'react';
import {ActivityIndicator, Button, View} from 'react-native';
import {Text} from '../../common/components';
import useRequest from '../../request/hooks/useRequest';
import {useDispatch} from 'react-redux';
import {resetProfileState} from '../../store/reducers/profile';

function Home() {
  const dispatch = useDispatch();
  //   const [{data: musicDetails, loading}, trigger] = useMusicRequest({
  //     url: '/search',
  //     method: 'get',
  //   });
  //   const {data: musicList = []} = musicDetails || {};

  const [{data: users, loading}, trigger] = useRequest({
    url: '/list_users',
    method: 'get',
  });

  const getMusicList = useCallback(async () => {
    try {
      await trigger();
    } catch (error) {
      console.error('TRANSLATE:', error?.response?.data);
    }
  }, [trigger]);

  const logout = () => {
    dispatch(resetProfileState());
  };

  if (loading) {
    return <ActivityIndicator size={'large'} animating />;
  }

  return (
    <View>
      {(users || []).map((item, index) => (
        <Text key={index}>{item.name.slice(0, 5)}</Text>
      ))}
      <Button title="GET MUSIC" onPress={getMusicList} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

export default Home;
