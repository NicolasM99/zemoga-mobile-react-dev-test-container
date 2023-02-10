import React, { FC } from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppNavigator from './src/navigation/AppNavigator';
import { store, persistor } from './src/redux/store';

const App: FC = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
