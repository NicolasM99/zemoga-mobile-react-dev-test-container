import React, { FC, useState, useRef } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, View } from 'react-native';

import { ModalRefType } from 'src/components/CommentsSection/@types/commentsSection';
import CommentsSection from 'src/components/CommentsSection/CommentsSection';
import Header from 'src/components/Header/Header';
import IconFloatingButton from 'src/components/IconFloatingButton/IconFloatingButton';
import ObjectList from 'src/components/ObjectList/ObjectList';
import Paragraph from 'src/components/Paragraph/Paragraph';
import Small from 'src/components/Small/Small';
import { StackParamList } from 'src/navigation/Stacks';

import { screenContainer } from './ScreenStyles';

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
  const modalRef = useRef<ModalRefType>(null); // !todo change to correct type

  const handleOpenComments = () => {
    modalRef.current?.openModal();
  };

  const PostInfo = () => (
    <View>
      <Header>{title}</Header>
      <Small>Posted by "{mockedUser.username}"</Small>
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
    <>
      <ScrollView style={screenContainer.container}>
        <PostInfo />
        <AuthorInfo />
      </ScrollView>
      <IconFloatingButton onPress={() => handleOpenComments()} icon="comment" />
      <CommentsSection comments={[]} modalRef={modalRef} />
    </>
  );
};

export default PostDetailsScreen;
