import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
import thunk from 'redux-thunk';

import generalReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: ExpoFileSystemStorage,
  whitelist: ['posts', 'comments', 'users'],
  blacklist: ['requestIndex', 'patchedPost']
};

const persistedReducer = persistReducer(persistConfig, generalReducer);
const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };
