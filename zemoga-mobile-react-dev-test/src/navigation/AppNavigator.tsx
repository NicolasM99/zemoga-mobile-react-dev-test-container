import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NoInternetBar from 'src/components/NoInternetBar/NoInternetBar';
import { PostsListProvider } from 'src/components/PostsList/context/PostsListContext';
import { InternetStatusProvider } from 'src/context/InternetStatusContext';

import { StackParamList, stacks } from './Stacks';

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator: FC = () => (
  <InternetStatusProvider>
    <PostsListProvider>
      <NoInternetBar />
      <NavigationContainer>
        <Stack.Navigator>
          {stacks.map((stack: any) => (
            <Stack.Screen key={stack.name} {...stack} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </PostsListProvider>
  </InternetStatusProvider>
);

export default AppNavigator;
