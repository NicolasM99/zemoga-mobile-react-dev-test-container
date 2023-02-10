import React, { FC } from 'react';

import { ActivityIndicator, View, Text } from 'react-native';

import { COLORS } from 'src/constants/theme/colors';
import { InternetStatusContextType } from 'src/context/@types/internetStatusContext';
import { useInternetStatusContext } from 'src/context/InternetStatusContext';

import { PostsListContextType } from '../PostsList/@types/postListContext';
import { usePostsListContext } from '../PostsList/context/PostsListContext';

const LoadingScreen: FC = () => {
  const { isLoading } = usePostsListContext() as PostsListContextType;
  const { internetStatus } = useInternetStatusContext() as InternetStatusContextType;
  if (isLoading && internetStatus)
    return (
      <View
        style={{
          zIndex: 9999,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.9)',
          top: 0,
          left: 0
        }}
      >
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={{ marginTop: 16 }}> Loading, please wait...</Text>
      </View>
    );
  return <></>;
};

export default LoadingScreen;
