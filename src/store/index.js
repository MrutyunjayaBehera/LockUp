import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import general from './reducers/general';
import profile from './reducers/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['profile'],
};

const reducers = combineReducers({
  general,
  profile,
});

const persistedReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducers,
});

export const persistor = persistStore(store);

export {
  Provider,
  connect,
  shallowEqual,
  useSelector,
  useDispatch,
  useStore,
} from 'react-redux';

export default store;
