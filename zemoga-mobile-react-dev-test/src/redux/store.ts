import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import generalReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, generalReducer);
const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };
