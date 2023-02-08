import React, { FC } from 'react';

import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';

import { postStyles } from './Styles';

export interface PostContainerProps {
  onPressPost?: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
}

const PostContainer: FC<PostContainerProps> = ({ onPressPost, children }: PostContainerProps) => {
  return (
    <TouchableOpacity onPress={onPressPost}>
      <View style={postStyles.postContainer}>{children}</View>
    </TouchableOpacity>
  );
};

export default PostContainer;
