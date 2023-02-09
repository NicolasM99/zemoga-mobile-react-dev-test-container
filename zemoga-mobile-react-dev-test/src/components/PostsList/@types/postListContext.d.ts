import React from 'react';
export type PostsContextRefType = {
  getPosts: () => void;
};

export interface IPost {
  postId: number;
  title: string;
  body: string;
  isFavourite?: boolean;
  isSelected?: boolean;
  userId: number;
}

export type PostsListContextType = {
  posts: IPost[] | [];
  setPosts: (currentPosts: IPost[]) => IPost[] | void;
  isDeletingItems: boolean;
  setIsDeletingItems: (currentValue: boolean) => boolean | void;
  postsToDelete: IPost[] | [];
  setPostsToDelete: (currentPosts: IPost[]) => IPost[] | void;
  isLoading: boolean;
  setIsLoading: (currentValue: boolean) => boolean | void;
};

export interface PostsListProviderProps {
  children: React.ReactNode;
}
