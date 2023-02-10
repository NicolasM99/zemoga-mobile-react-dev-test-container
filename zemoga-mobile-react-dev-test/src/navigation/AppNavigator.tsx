import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, View } from 'react-native';

import LoadingScreen from 'src/components/LoadingScreen/LoadingScreen';
import NoInternetBar from 'src/components/NoInternetBar/NoInternetBar';
import { PostsListProvider } from 'src/components/PostsList/context/PostsListContext';
import { InternetStatusProvider } from 'src/context/InternetStatusContext';

import { StackParamList, stacks } from './Stacks';

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator: FC = () => (
  <InternetStatusProvider>
    <PostsListProvider>
      <NoInternetBar />
      <View style={{ paddingBottom: Platform.OS === 'ios' ? 16 : 0, flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            {stacks.map((stack: any) => (
              <Stack.Screen key={stack.name} {...stack} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
      <LoadingScreen />
    </PostsListProvider>
  </InternetStatusProvider>
);

export default AppNavigator;
