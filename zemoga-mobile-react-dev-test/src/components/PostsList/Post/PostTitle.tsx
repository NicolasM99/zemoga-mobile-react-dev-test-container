import React, { FC } from 'react';

import { Text, TouchableWithoutFeedback } from 'react-native';

import { postStyles } from './Styles';

export interface PostTitleProps {
  children: React.ReactNode;
}

const PostTitle: FC<PostTitleProps> = ({ children }: PostTitleProps) => (
  <TouchableWithoutFeedback>
    <Text style={postStyles.postTitle}>{children}</Text>
  </TouchableWithoutFeedback>
);

export default PostTitle;
