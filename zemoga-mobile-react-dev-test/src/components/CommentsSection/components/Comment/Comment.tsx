import React, { FC } from 'react';

import { View } from 'react-native';

import Paragraph from 'src/components/Paragraph/Paragraph';
import Small from 'src/components/Small/Small';

import { commentStyles } from './Styles';
import { IComment } from '../../@types/commentsSection';

const Comment: FC<IComment> = ({ name = '', email = '', body = '' }: IComment) => {
  return (
    <View style={commentStyles.container}>
      <Small>{name}</Small>
      <Small>{email}</Small>
      <Paragraph style={{ marginTop: 8 }}>{body}</Paragraph>
    </View>
  );
};

export default Comment;
