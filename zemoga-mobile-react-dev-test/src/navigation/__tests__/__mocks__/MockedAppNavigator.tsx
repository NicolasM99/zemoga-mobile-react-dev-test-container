import React, { FC } from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { PostsListProvider } from 'src/components/PostsList/context/PostsListContext';
import { InternetStatusProvider } from 'src/context/InternetStatusContext';
import { persistor, store } from 'src/redux/store';

interface MockedAppNavigatorProps {
  children: React.ReactNode;
}

export const MockedAppNavigator: FC<MockedAppNavigatorProps> = ({
  children
}: MockedAppNavigatorProps) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <InternetStatusProvider>
          <PostsListProvider>{children}</PostsListProvider>
        </InternetStatusProvider>
      </PersistGate>
    </ReduxProvider>
  );
};
