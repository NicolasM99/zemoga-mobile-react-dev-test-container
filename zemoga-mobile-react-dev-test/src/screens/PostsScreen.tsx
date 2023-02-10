import React, { FC } from 'react';

import { View } from 'react-native';

import { postsScreenStyles } from './ScreenStyles';
import PostsList from '../components/PostsList/PostsList';

const PostsScreen: FC = () => {
  return (
    <View style={postsScreenStyles.postsScreenContainer}>
      <PostsList />
    </View>
  );
};

export default PostsScreen;
