import React, { FC } from 'react';

import { COLORS } from 'src/constants/theme/colors';

import PostActionBtn from './PostActionBtn';
import { PostsListContextType } from '../@types/postListContext';
import { usePostsListContext } from '../context/PostsListContext';

const PostsListRefreshBtn: FC = () => {
  const { isDeletingItems } = usePostsListContext() as PostsListContextType;
  if (!isDeletingItems)
    return <PostActionBtn color={COLORS.primary} name="sync" onPress={() => alert('clicked')} />;
  return <></>;
};

export default PostsListRefreshBtn;
