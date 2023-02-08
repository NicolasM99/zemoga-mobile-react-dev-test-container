import React, { FC, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView, View, Alert } from 'react-native';

import { POST_DETAILS } from 'src/navigation/routes';
import { StackParamList } from 'src/navigation/Stacks';

import { IPost, PostsListContextType } from './@types/postListContext';
import DeletePostsBtn from './components/DeletePostsBtn/DeletePostsBtn';
import DeleteUnfavouritePostsBtn from './components/DeleteUnfavouritePostsBtn/DeleteUnfavouritePostsBtn';
import Post from './components/Post/Post';
import { usePostsListContext } from './context/PostsListContext';
import { postsListStyles } from './Styles';
import { handleSelectPost, handleSetFavouritePost } from './util/postListHandlers';

const PostsList: FC = () => {
  const { isDeletingItems, posts, setPosts, postsToDelete, setPostsToDelete } =
    usePostsListContext() as PostsListContextType;
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>(); //!TODO: USE HANDLERS
  useEffect(() => {
    if (isDeletingItems) setPostsToDelete([...posts].filter((post) => post.isSelected));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);
  const handlePressPost = (post: IPost, index: number, isSelected: boolean) => {
    if (!isDeletingItems) {
      navigation.navigate(POST_DETAILS, post);
      return;
    }
    setPosts((currentPosts: IPost[]) => handleSelectPost([...currentPosts], index, isSelected));
  };
  const handleDeletePosts = () =>
    Alert.alert(
      'Delete posts',
      'Are you sure you want to delete N posts? THIS ACTION IS NOT REVERSIBLE',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        { text: 'OK', onPress: () => {} }
      ]
    );
  return (
    <>
      <ScrollView style={postsListStyles.postsListContainer}>
        {posts.map(({ postId, title, isFavourite, isSelected, ...rest }: any, index) => (
          <Post
            title={title}
            key={postId}
            onPressPost={() => handlePressPost({ postId, title, ...rest }, index, isSelected)}
            isFavourite={isFavourite}
            onSetFavourite={() =>
              setPosts((currentPosts: IPost[]) => handleSetFavouritePost([...currentPosts], index))
            }
            isSelected={isSelected}
            isDeletingItems={isDeletingItems}
          />
        ))}
      </ScrollView>
      {isDeletingItems && (
        <View style={{ width: '100%', bottom: 0, position: 'absolute' }}>
          {postsToDelete.length > 0 && <DeletePostsBtn onPress={handleDeletePosts} />}
          <DeleteUnfavouritePostsBtn onPress={handleDeletePosts} />
        </View>
      )}
    </>
  );
};

export default PostsList;
