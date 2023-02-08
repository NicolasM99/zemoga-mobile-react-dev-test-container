import React, { FC } from 'react';

import { View } from 'react-native';

import Paragraph from 'src/components/Paragraph/Paragraph';
import Small from 'src/components/Small/Small';
import { ICommentStore } from 'src/redux/@types/commentStore';

import { commentStyles } from './Styles';

const Comment: FC<ICommentStore> = ({ name = '', email = '', body = '' }: ICommentStore) => {
  return (
    <View style={commentStyles.container}>
      <Small>{name}</Small>
      <Small>{email}</Small>
      <Paragraph style={{ marginTop: 8 }}>{body}</Paragraph>
    </View>
  );
};

export default Comment;
