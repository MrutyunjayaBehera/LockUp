/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import Landing from './src/pages/Landing';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import store, {Provider, persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

const SplashScreen = () => {
  return <ActivityIndicator size={'large'} animating={true} />;
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Landing />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
