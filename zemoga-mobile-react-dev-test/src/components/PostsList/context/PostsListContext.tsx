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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (postsStore) setPosts([...postsStore]);
  }, [postsStore]);

  useEffect(() => {
    if (status) setIsLoading(false);
  }, [status]);

  useEffect(() => {
    if (isLoading) setIsLoading(false);
  }, [isLoading]);

  useEffect(() => {
    dispatch(generalAction({ actionType: GET_POSTS, api: POSTS_API }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
