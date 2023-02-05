import React, { FC } from 'react';

import { Text, TouchableWithoutFeedback, View } from 'react-native';

import { postStyles } from './Styles';

export interface PostTitleProps {
  children: React.ReactNode;
}

const PostTitle: FC<PostTitleProps> = ({ children }: PostTitleProps) => (
  <View style={{ flex: 1 }}>
    <Text style={postStyles.postTitle}>{children}</Text>
  </View>
);

export default PostTitle;
