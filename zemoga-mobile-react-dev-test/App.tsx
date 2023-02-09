import React, { FC, useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from './src/redux/store';

import AppNavigator from './src/navigation/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';
// !TODO async storage

const App: FC = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
