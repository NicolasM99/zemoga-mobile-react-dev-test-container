import React, { FC } from 'react';
import { PostsListContextType } from '../@types/postListContext';
import { usePostsListContext } from '../context/PostsListContext';
import PostActionBtn from './PostActionBtn';

const PostsListRefreshBtn: FC = () => {
  const { setIsDeletingItems, isDeletingItems } = usePostsListContext() as PostsListContextType;
  if (!isDeletingItems)
    return <PostActionBtn color="blue" name="repeat" onPress={() => alert('clicked')} />;
  return <></>;
};

export default PostsListRefreshBtn;
