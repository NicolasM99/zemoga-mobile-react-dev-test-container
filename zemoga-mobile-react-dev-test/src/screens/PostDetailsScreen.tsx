import React, { FC } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, Text, View } from 'react-native';

import { StackParamList } from 'src/navigation/Stacks';
import { screenContainer } from './ScreenStyles';
import Header from 'src/components/Header/Header';
import Small from 'src/components/Small/Small';
import Paragraph from 'src/components/Paragraph/Paragraph';
import ObjectList from 'src/components/ObjectList/ObjectList';

export type PostDetailScreenProps = NativeStackScreenProps<StackParamList, 'PostDetails'>;

const mockedUser = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496'
    }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
};

const PostDetailsScreen: FC<PostDetailScreenProps> = ({ route }: PostDetailScreenProps) => {
  const { postId, body, title, userId } = route.params;

  const PostInfo = () => (
    <View>
      <Header>{title}</Header>
      <Small>{mockedUser.username}</Small>
      <Paragraph>{body}</Paragraph>
    </View>
  );

  const AuthorInfo = () => (
    <View>
      <Header variant="h3">About the author...</Header>
      <ObjectList objectData={mockedUser} />
    </View>
  );
  return (
    <ScrollView style={screenContainer.container}>
      <PostInfo />
      <AuthorInfo />
    </ScrollView>
  );
};

export default PostDetailsScreen;
