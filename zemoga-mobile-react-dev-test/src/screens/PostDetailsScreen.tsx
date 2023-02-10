import React, { FC, useRef, useEffect, useMemo } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, View } from 'react-native';

import { ModalRefType } from 'src/components/CommentsSection/@types/commentsSection';
import CommentsSection from 'src/components/CommentsSection/CommentsSection';
import Header from 'src/components/Header/Header';
import IconFloatingButton from 'src/components/IconFloatingButton/IconFloatingButton';
import ObjectList from 'src/components/ObjectList/ObjectList';
import Paragraph from 'src/components/Paragraph/Paragraph';
import { PostsListContextType } from 'src/components/PostsList/@types/postListContext';
import { usePostsListContext } from 'src/components/PostsList/context/PostsListContext';
import Small from 'src/components/Small/Small';
import { InternetStatusContextType } from 'src/context/@types/internetStatusContext';
import { useInternetStatusContext } from 'src/context/InternetStatusContext';
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
  const [dispatch, { users, comments: commentsData }, status] = useRedux(['users', 'comments']);
  const { setIsLoading } = usePostsListContext() as PostsListContextType;
  const modalRef = useRef<ModalRefType>(null);

  const { internetStatus } = useInternetStatusContext() as InternetStatusContextType;

  const author: IUserStore = useMemo<IUserStore>(() => users[userId] || {}, [users, userId]);
  const comments: ICommentStore[] | [] = useMemo<ICommentStore[] | []>(
    () => commentsData[postId] || [],
    [commentsData, postId]
  );

  useEffect(() => {
    setIsLoading(true);
    dispatch(generalAction({ actionType: GET_USER, api: `${USER_API}/${userId}` }));
    dispatch(
      generalAction({ actionType: GET_COMMENTS, api: `${POSTS_API}/${postId}${COMMENTS_API}` })
    );
    return () => {
      dispatch(changeValues({ status: null }));
    };
  }, []);

  useEffect(() => {
    if (status) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
  }, [status]);

  const handleOpenComments = () => {
    modalRef.current?.openModal();
  };

  const PostInfo = () => (
    <View>
      <Header>{title}</Header>
      {author.id ? <Small>Posted by "{author.username}"</Small> : <></>}
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
        {author.id ? <AuthorInfo /> : <></>}
      </ScrollView>
      <IconFloatingButton
        disabled={!internetStatus && !comments.length}
        onPress={() => handleOpenComments()}
        icon="comment"
      />
      <CommentsSection comments={comments} modalRef={modalRef} />
    </>
  );
};

export default PostDetailsScreen;
