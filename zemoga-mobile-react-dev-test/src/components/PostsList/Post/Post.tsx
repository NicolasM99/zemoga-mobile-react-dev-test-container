import React, { FC } from 'react';

import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

import { postStyles } from './Styles';

type PostProps = {
  onPressPost?: (event: GestureResponderEvent) => void;
};

const Post: FC<PostProps> = ({ onPressPost }) => {
  return (
    <TouchableOpacity onPress={onPressPost} style={postStyles.postContainer}>
      <Text>ICON</Text>
      <Text>qui est esse</Text>
    </TouchableOpacity>
  );
};

export default Post;
