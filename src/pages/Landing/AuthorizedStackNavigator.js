import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../Home';

const Stack = createStackNavigator();

function AuthorizedStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FF9500',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'LockUp 🔐',
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthorizedStackNavigator;
