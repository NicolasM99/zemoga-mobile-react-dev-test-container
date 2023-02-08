import React, { FC, useState, createContext, useContext } from 'react';

import { PostsListProviderProps, PostsListContextType, IPost } from '../@types/postListContext';

const PostsListContext = createContext<PostsListContextType | null>(null);

export const mockedPosts: IPost[] = [
  { postId: '1', title: 'testing title 1', body: 'testing body 1', userId: '1' },
  { postId: '2', title: 'testing title 2', body: 'testing body 2', userId: '2' },
  { postId: '3', title: 'testing title 3', body: 'testing body 3', userId: '3' },
  { postId: '4', title: 'testing title 4', body: 'testing body 4', userId: '4' },
  { postId: '5', title: 'testing title 5', body: 'testing body 5', userId: '5' }
];

const PostsListProvider: FC<PostsListProviderProps> = ({ children }: PostsListProviderProps) => {
  const [posts, setPosts] = useState<IPost[] | []>([...mockedPosts]);
  const [postsToDelete, setPostsToDelete] = useState<IPost[] | []>([]);
  const [isDeletingItems, setIsDeletingItems] = useState(false);
  const valueObj = {
    posts,
    setPosts,
    isDeletingItems,
    setIsDeletingItems,
    postsToDelete,
    setPostsToDelete
  };
  return <PostsListContext.Provider value={valueObj}>{children}</PostsListContext.Provider>;
};

const usePostsListContext = () => useContext(PostsListContext);

export { PostsListContext, PostsListProvider, usePostsListContext };
