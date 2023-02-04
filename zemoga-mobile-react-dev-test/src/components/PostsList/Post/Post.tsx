import React, { FC } from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import PostFavouriteIcon, { PostFavouriteIconProps } from './PostFavouriteIcon';
import PostTitle, { PostTitleProps } from './PostTitle';
import { postStyles } from './Styles';

interface PostProps {
  onPressPost?: (event: GestureResponderEvent) => void;
  onSetFavourite?: PostFavouriteIconProps['onSetFavourite'];
  isFavourite?: PostFavouriteIconProps['isFavourite'];
}

const Post: FC<PostProps> = ({ onPressPost, onSetFavourite, isFavourite = false }) => {
  return (
    <TouchableWithoutFeedback onPress={onPressPost}>
      <View style={postStyles.postContainer}>
        <PostTitle>qui est esse</PostTitle>
        <PostFavouriteIcon onSetFavourite={onSetFavourite} isFavourite={isFavourite} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Post;
