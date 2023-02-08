import React, { FC, useState, useRef, useEffect, useMemo } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, View } from 'react-native';

import { ModalRefType } from 'src/components/CommentsSection/@types/commentsSection';
import CommentsSection from 'src/components/CommentsSection/CommentsSection';
import Header from 'src/components/Header/Header';
import IconFloatingButton from 'src/components/IconFloatingButton/IconFloatingButton';
import LoadingScreen from 'src/components/LoadingScreen/LoadingScreen';
import ObjectList from 'src/components/ObjectList/ObjectList';
import Paragraph from 'src/components/Paragraph/Paragraph';
import Small from 'src/components/Small/Small';
import { StackParamList } from 'src/navigation/Stacks';
import { ICommentStore } from 'src/redux/@types/commentStore';
import { IUserStore } from 'src/redux/@types/userStore';
import { generalAction, changeValues } from 'src/redux/actions';
import { GET_COMMENTS, GET_USER } from 'src/redux/actionTypes';
import { useRedux } from 'src/redux/hooks/useRedux';
import { COMMENTS_API, POSTS_API, USER_API } from 'src/redux/paths';

import { screenContainer } from './ScreenStyles';

export type PostDetailScreenProps = NativeStackScreenProps<StackParamList, 'PostDetails'>;

const PostDetailsScreen: FC<PostDetailScreenProps> = ({ route }: PostDetailScreenProps) => {
  const { postId, body, title, userId } = route.params;
  const [dispatch, { user, comments: commentsData }, status] = useRedux(['user', 'comments']);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const modalRef = useRef<ModalRefType>(null);

  const author = useMemo<IUserStore>(() => user || {}, [user]);
  const comments = useMemo<ICommentStore[]>(() => commentsData || [], [commentsData]);

  useEffect(() => {
    dispatch(generalAction({ actionType: GET_USER, api: `${USER_API}/${userId}` }));
    dispatch(
      generalAction({ actionType: GET_COMMENTS, api: `${POSTS_API}/${postId}${COMMENTS_API}` })
    );
    return () => {
      setIsLoading(true);
      dispatch(changeValues({ user: {}, comments: [] }));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (status) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
  }, [status]);

  if (isLoading || !comments.length) return <LoadingScreen />;

  const handleOpenComments = () => {
    modalRef.current?.openModal();
  };

  const PostInfo = () => (
    <View>
      <Header>{title}</Header>
      <Small>Posted by "{author.username}"</Small>
      <Paragraph>{body}</Paragraph>
    </View>
  );

  const AuthorInfo = () => (
    <View style={{ marginBottom: 120 }}>
      <Header variant="h3">About the author...</Header>
      <ObjectList objectData={author} />
    </View>
  );

  return (
    <>
      <ScrollView style={screenContainer.container}>
        <PostInfo />
        <AuthorInfo />
      </ScrollView>
      <IconFloatingButton onPress={() => handleOpenComments()} icon="comment" />
      <CommentsSection comments={comments} modalRef={modalRef} />
    </>
  );
};

export default PostDetailsScreen;
