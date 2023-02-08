import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/redux/store';

import AppNavigator from './src/navigation/AppNavigator';
const App: FC = () => {
  return (
    <ReduxProvider store={store}>
      <AppNavigator />
    </ReduxProvider>
  );
};

export default App;
