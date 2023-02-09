import React, { FC } from 'react';

import { View } from 'react-native';

import { PostsListContextType } from 'src/components/PostsList/@types/postListContext';
import { usePostsListContext } from 'src/components/PostsList/context/PostsListContext';

import { postsScreenStyles } from './ScreenStyles';
import PostsList from '../components/PostsList/PostsList';

const PostsScreen: FC = () => {
  const { posts, isLoading } = usePostsListContext() as PostsListContextType;
  return (
    <View style={postsScreenStyles.postsScreenContainer}>
      <PostsList posts={posts} isLoading={isLoading} />
    </View>
  );
};

export default PostsScreen;
