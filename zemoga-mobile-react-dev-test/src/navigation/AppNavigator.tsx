import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackParamList, stacks } from './Stacks';

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator: FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {stacks.map((stack: any) => (
        <Stack.Screen key={stack.name} {...stack} />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
