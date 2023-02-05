import React from 'react';

export interface IPost {
  postId: string;
  title?: string;
  body?: string;
  isFavourite?: boolean;
  isSelected?: boolean;
}

export type PostsListContextType = {
  posts: IPost[] | [];
  setPosts: (currentPosts: IPost[]) => IPost[] | void;
  isDeletingItems: boolean;
  setIsDeletingItems: (currentValue: boolean) => boolean | void;
  postsToDelete: IPost[] | [];
  setPostsToDelete: (currentPosts: IPost[]) => IPost[] | void;
};

export interface PostsListProviderProps {
  children: React.ReactNode;
}
