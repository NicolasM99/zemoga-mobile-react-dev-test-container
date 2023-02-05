import React, { FC } from 'react';
import { PostsListContextType } from '../@types/postListContext';
import { usePostsListContext } from '../context/PostsListContext';

import PostActionBtn from './PostActionBtn';

const PostsListDeleteBtn: FC = () => {
  const { setIsDeletingItems, isDeletingItems } = usePostsListContext() as PostsListContextType;
  const handleIsDelitingItems = () => {
    setIsDeletingItems(!isDeletingItems);
  };
  return (
    <PostActionBtn
      name={isDeletingItems ? 'close' : 'trash'}
      onPress={() => handleIsDelitingItems()}
      color="red"
    />
  );
};

export default PostsListDeleteBtn;
