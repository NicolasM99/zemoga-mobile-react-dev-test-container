import React, { FC } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import { StackParamList } from 'src/navigation/Stacks';

export type PostDetailScreenProps = NativeStackScreenProps<StackParamList, 'PostDetails'>;

const PostDetailsScreen: FC<PostDetailScreenProps> = ({ route }: PostDetailScreenProps) => {
  const { postId } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Text>{postId}</Text>
    </View>
  );
};

export default PostDetailsScreen;
