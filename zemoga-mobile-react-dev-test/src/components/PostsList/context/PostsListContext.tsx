import React, { FC, useState, createContext, useContext } from 'react';
import { PostsListProviderProps, PostsListContextType, IPost } from '../@types/postListContext';

const PostsListContext = createContext<PostsListContextType | null>(null);

export const mockedPosts: IPost[] = [
  { postId: '1' },
  { postId: '2' },
  { postId: '3' },
  { postId: '4' },
  { postId: '5' }
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
