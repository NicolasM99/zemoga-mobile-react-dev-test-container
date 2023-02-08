import React, { FC } from 'react';

import { COLORS } from 'src/constants/theme/colors';

import PostActionBtn from './PostActionBtn';
import { PostsListContextType } from '../@types/postListContext';
import { usePostsListContext } from '../context/PostsListContext';

const PostsListDeleteBtn: FC = () => {
  const { setIsDeletingItems, isDeletingItems } = usePostsListContext() as PostsListContextType;
  const handleIsDelitingItems = () => {
    setIsDeletingItems(!isDeletingItems);
  };
  return (
    <PostActionBtn
      name={isDeletingItems ? 'times' : 'trash'}
      onPress={() => handleIsDelitingItems()}
      color={COLORS.primary}
    />
  );
};

export default PostsListDeleteBtn;
