import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import AuthorizedStackNavigator from './AuthorizedStackNavigator';
import {useSelector} from 'react-redux';

function Landing() {
  const {session: {access_token = ''} = {}} = useSelector(
    ({profile}) => profile,
  );

  //   ** Important: Don't manually navigate when conditionally rendering screens

  return (
    <NavigationContainer>
      {!access_token ? <AuthStackNavigator /> : <AuthorizedStackNavigator />}
    </NavigationContainer>
  );
}

export default Landing;
