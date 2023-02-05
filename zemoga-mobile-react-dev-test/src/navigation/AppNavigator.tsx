import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackParamList, stacks } from './Stacks';
import { PostsListProvider } from 'src/components/PostsList/context/PostsListContext';

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator: FC = () => (
  <PostsListProvider>
    <NavigationContainer>
      <Stack.Navigator>
        {stacks.map((stack: any) => (
          <Stack.Screen key={stack.name} {...stack} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  </PostsListProvider>
);

export default AppNavigator;
