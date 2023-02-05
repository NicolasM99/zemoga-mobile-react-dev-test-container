import React, { FC, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';

import { POST_DETAILS } from 'src/navigation/routes';
import { StackParamList } from 'src/navigation/Stacks';

import { postsListStyles } from './Styles';
import { handleSelectPost, handleSetFavouritePost } from './util/postListHandlers';
import Post from './components/Post/Post';
import { PostsListProvider, usePostsListContext } from './context/PostsListContext';
import DeletePostsBtn from './components/DeletePostsBtn/DeletePostsBtn';
import { IPost, PostsListContextType } from './@types/postListContext';
import { useEffect } from 'react';

const PostsList: FC = () => {
  // const [posts, setPosts] = useState([...mockedPosts]);
  const { isDeletingItems, posts, setPosts, postsToDelete, setPostsToDelete } =
    usePostsListContext() as PostsListContextType;
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>(); //!TODO: USE HANDLERS
  useEffect(() => {
    if (isDeletingItems) setPostsToDelete([...posts].filter((post) => post.isSelected));
  }, [posts]);
  const handlePressPost = (postId: string, index: number, isSelected: boolean) => {
    if (!isDeletingItems) {
      navigation.navigate(POST_DETAILS, { postId });
      return;
    }
    setPosts((currentPosts: IPost[]) => handleSelectPost([...currentPosts], index, isSelected));
  };
  return (
    <>
      <ScrollView style={postsListStyles.postsListContainer}>
        {posts.map(({ postId, isFavourite, isSelected }: any, index) => (
          <Post
            title={postId}
            key={postId}
            onPressPost={() => handlePressPost(postId, index, isSelected)}
            isFavourite={isFavourite}
            onSetFavourite={() =>
              setPosts((currentPosts: IPost[]) => handleSetFavouritePost([...currentPosts], index))
            }
            isSelected={isSelected}
            isDeletingItems={isDeletingItems}
          />
        ))}
      </ScrollView>
      {isDeletingItems && postsToDelete.length > 0 && <DeletePostsBtn />}
    </>
  );
};

export default PostsList;
