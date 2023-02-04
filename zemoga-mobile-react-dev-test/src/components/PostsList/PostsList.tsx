import React, { FC } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';

import { POST_DETAILS } from 'src/navigation/routes';
import { StackParamList } from 'src/navigation/Stacks';

import Post from './Post/Post';
import { postsListStyles } from './Styles';

const mockedPosts = [{ postId: '1' }, { postId: '2' }, { postId: '3' }];

const PostsList: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <View style={postsListStyles.postsListContainer}>
      <Post onPressPost={() => navigation.navigate(POST_DETAILS, { postId: '1' })} />
      <Post onPressPost={() => navigation.navigate(POST_DETAILS, { postId: '2' })} />
      <Post onPressPost={() => navigation.navigate(POST_DETAILS, { postId: '3' })} />
    </View>
  );
};

export default PostsList;
