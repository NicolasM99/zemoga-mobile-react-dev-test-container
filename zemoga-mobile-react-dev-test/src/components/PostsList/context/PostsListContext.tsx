import React, { FC, useState, createContext, useContext, useEffect } from 'react';

import { generalAction } from 'src/redux/actions';
import { GET_POSTS } from 'src/redux/actionTypes';
import { useRedux } from 'src/redux/hooks/useRedux';
import { POSTS_API } from 'src/redux/paths';

import { PostsListProviderProps, PostsListContextType, IPost } from '../@types/postListContext';

const PostsListContext = createContext<PostsListContextType | null>(null);

const PostsListProvider: FC<PostsListProviderProps> = ({ children }: PostsListProviderProps) => {
  const [posts, setPosts] = useState<IPost[] | []>([]);
  const [postsToDelete, setPostsToDelete] = useState<IPost[] | []>([]);
  const [isDeletingItems, setIsDeletingItems] = useState(false);
  const [dispatch, { posts: postsStore }, status] = useRedux(['posts']);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (postsStore) {
      setPosts(postsStore);
      return;
    }
    setPosts([]);
  }, [postsStore]);

  useEffect(() => {
    if (status) setIsLoading(false);
  }, [status]);

  useEffect(() => {
    if (!postsStore.length) dispatch(generalAction({ actionType: GET_POSTS, api: POSTS_API }));
  }, []);
  const valueObj = {
    posts,
    setPosts,
    isDeletingItems,
    setIsDeletingItems,
    postsToDelete,
    setPostsToDelete,
    isLoading,
    setIsLoading
  };
  return <PostsListContext.Provider value={valueObj}>{children}</PostsListContext.Provider>;
};

const usePostsListContext = () => useContext(PostsListContext);

export { PostsListContext, PostsListProvider, usePostsListContext };
