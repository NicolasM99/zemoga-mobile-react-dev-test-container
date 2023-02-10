import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { PostsListProvider } from 'src/components/PostsList/context/PostsListContext';
import { InternetStatusProvider } from 'src/context/InternetStatusContext';

interface MockedScreenProviderProps {
  children: React.ReactNode;
}

const MockedScreenProvider: React.FC<MockedScreenProviderProps> = ({
  children
}: MockedScreenProviderProps) => (
  <NavigationContainer>
    <InternetStatusProvider>
      <PostsListProvider>{children}</PostsListProvider>
    </InternetStatusProvider>
  </NavigationContainer>
);

export default MockedScreenProvider;
