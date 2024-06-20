import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../Login';

const Stack = createStackNavigator();
function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
