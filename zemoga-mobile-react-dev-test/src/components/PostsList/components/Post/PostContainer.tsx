import React, { FC } from 'react';

import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import { postStyles } from './Styles';

export interface PostContainerProps {
  onPressPost?: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
}

const PostContainer: FC<PostContainerProps> = ({ onPressPost, children }: PostContainerProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPressPost}>
      <View style={postStyles.postContainer}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default PostContainer;
