import React, { FC, useEffect, useState, useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Alert, FlatList } from 'react-native';

import { InternetStatusContextType } from 'src/context/@types/internetStatusContext';
import { useInternetStatusContext } from 'src/context/InternetStatusContext';
import { POST_DETAILS } from 'src/navigation/routes';
import { StackParamList } from 'src/navigation/Stacks';
import { IPostStore } from 'src/redux/@types/postStore';
import { changeValues, generalAction } from 'src/redux/actions';
import { DELETE_POST, PATCH_POST } from 'src/redux/actionTypes';
import { useRedux } from 'src/redux/hooks/useRedux';
import { POSTS_API } from 'src/redux/paths';

import { IPost, PostsListContextType } from './@types/postListContext';
import DeletePostsBtn from './components/DeletePostsBtn/DeletePostsBtn';
import DeleteUnfavouritePostsBtn from './components/DeleteUnfavouritePostsBtn/DeleteUnfavouritePostsBtn';
import Post from './components/Post/Post';
import { usePostsListContext } from './context/PostsListContext';
import { postsListStyles } from './Styles';
import {
  handleFilterDeletedPosts,
  handleSelectPost,
  handleSetFavouritePost
} from './util/postListHandlers';

const PostsList: FC = () => {
  const {
    isDeletingItems,
    setIsDeletingItems,
    posts,
    setPosts,
    postsToDelete,
    setPostsToDelete,
    setIsLoading
  } = usePostsListContext() as PostsListContextType;
  const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);
  const { internetStatus } = useInternetStatusContext() as InternetStatusContextType;
  const [dispatch, { patchedPost, requestIndex }, status] = useRedux([
    'patchedPost',
    'requestIndex'
  ]);
  const [deleteData, setDeleteData] = useState<IPost[] | []>([]);
  const [favouritePostIndex, setFavouritePostIndex] = useState<number | null>(null);

  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  useEffect(() => {
    if (isDeletingItems) setPostsToDelete([...posts].filter((post) => post.isSelected));
  }, [posts]);

  useEffect(() => {
    if (status === 200) {
      if ((favouritePostIndex || favouritePostIndex === 0) && patchedPost) {
        const newPosts = handleSetFavouritePost([...posts], favouritePostIndex);
        dispatch(changeValues({ posts: newPosts, patchedPost: null }));
        setPosts(newPosts);
        setFavouritePostIndex(null);
        setIsLoading(false);
      }
      if (requestIndex === deleteData?.length + 1) {
        const newPosts = handleFilterDeletedPosts(posts, deleteData);
        dispatch(changeValues({ posts: newPosts, requestIndex: null }));
        setPostsToDelete([]);
        setDeleteData([]);
        setPosts(newPosts);
        setIsLoadingDelete(false);
        setIsDeletingItems(false);
        alert('Posts deleted successfully!');
      }
    }
  }, [status, favouritePostIndex, patchedPost, requestIndex]);

  useEffect(() => {
    if (requestIndex && requestIndex < deleteData?.length + 1) {
      dispatch(changeValues({ status: null }));
      dispatch(
        generalAction({
          actionType: DELETE_POST,
          method: 'delete',
          api: `${POSTS_API}/${deleteData[requestIndex - 1].postId}`,
          requestIndex
        })
      );
    }
  }, [requestIndex]);

  useEffect(() => {
    if (deleteData.length) dispatch(changeValues({ requestIndex: 1 }));
  }, [deleteData]);

  useEffect(() => {
    setIsLoading(isLoadingDelete);
  }, [isLoadingDelete]);

  const handlePressPost = useCallback(
    (post: IPostStore, index: number, isSelected: boolean) => {
      if (!isDeletingItems) {
        navigation.navigate(POST_DETAILS, { ...post, postId: post.id });
        return;
      }
      const newPosts = handleSelectPost([...posts], index, isSelected);
      setPosts(newPosts);
    },
    [isDeletingItems, navigation, posts, setPosts]
  );

  const handleDeletePosts = (data: IPost[]) => {
    setIsLoadingDelete(true);
    setDeleteData(data);
  };

  const handleConfirmDeletePosts = (onlyUnfavouritePosts = false) => {
    const auxDeleteData: IPost[] = onlyUnfavouritePosts
      ? [...posts].filter(({ isFavourite }) => !isFavourite)
      : [...postsToDelete];

    Alert.alert(
      'Delete posts',
      `Are you sure you want to delete ${auxDeleteData.length} posts?\n\nThis action is NOT reversible and may take more time than excpected for a large amount of items.`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'destructive'
        },
        { text: 'OK', onPress: () => handleDeletePosts(auxDeleteData) }
      ]
    );
  };

  const handleOnSetFavourite = useCallback(
    (index: number, id: number) => {
      setFavouritePostIndex(index);
      setIsLoading(true);
      dispatch(
        generalAction({
          actionType: PATCH_POST,
          api: `${POSTS_API}/${id}`,
          method: 'patch',
          data: { isFavourite: true }
        })
      );
    },
    [dispatch, setIsLoading]
  );

  const renderPostItem = useCallback(
    ({ item: { id, title, isFavourite, isSelected, ...rest }, index }: any) => (
      <Post
        title={title}
        key={id}
        onPressPost={() => handlePressPost({ id, title, ...rest }, index, isSelected)}
        isFavourite={isFavourite}
        onSetFavourite={() => handleOnSetFavourite(index, id)}
        isSelected={isSelected}
        isDeletingItems={isDeletingItems}
        actionsDisabled={!internetStatus}
      />
    ),
    [isDeletingItems, handleOnSetFavourite, handlePressPost, internetStatus]
  );

  return (
    <>
      <FlatList
        style={postsListStyles.postsListContainer}
        data={posts}
        renderItem={renderPostItem}
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        removeClippedSubviews
        windowSize={5}
      />
      {isDeletingItems && (
        <View style={{ width: '100%', bottom: 0, position: 'absolute' }}>
          {postsToDelete.length > 0 && (
            <DeletePostsBtn onPress={() => handleConfirmDeletePosts()} />
          )}
          <DeleteUnfavouritePostsBtn onPress={() => handleConfirmDeletePosts(true)} />
        </View>
      )}
    </>
  );
};

export default PostsList;
