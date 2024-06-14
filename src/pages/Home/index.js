import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator, Button, View} from 'react-native';
import {Text} from '../../common/components';
import useMusicRequest from '../../common/request/hooks/useMusicRequest';

function Home() {
  const [{data: musicDetails, loading}, trigger] = useMusicRequest({
    url: '/search',
    method: 'get',
  });

  const getMusicList = useCallback(async () => {
    try {
      await trigger({
        params: {
          q: 'eminem',
        },
      });
    } catch (error) {
      console.error('TRANSLATE:', error?.response?.data);
    }
  }, [trigger]);

  const {data: musicList = []} = musicDetails || {};

  if (loading) {
    return <ActivityIndicator size={'large'} animating />;
  }

  return (
    <View>
      {(musicList || []).map((item, index) => (
        <Text key={index}>{item.title}</Text>
      ))}
      <Button title="GET MUSIC" onPress={getMusicList} />
    </View>
  );
}

export default Home;
