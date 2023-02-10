import React, { FC } from 'react';

import { COLORS } from 'src/constants/theme/colors';
import { InternetStatusContextType } from 'src/context/@types/internetStatusContext';
import { useInternetStatusContext } from 'src/context/InternetStatusContext';

import PostActionBtn from './PostActionBtn';
import { PostsListContextType } from '../@types/postListContext';
import { usePostsListContext } from '../context/PostsListContext';

const PostsListDeleteBtn: FC = () => {
  const { setIsDeletingItems, isDeletingItems } = usePostsListContext() as PostsListContextType;
  const { internetStatus } = useInternetStatusContext() as InternetStatusContextType;
  const handleIsDeletingItems = () => {
    setIsDeletingItems(!isDeletingItems);
  };
  return (
    <PostActionBtn
      disabled={!internetStatus}
      name={isDeletingItems ? 'times' : 'trash'}
      onPress={() => handleIsDeletingItems()}
      color={COLORS.primary}
    />
  );
};

export default PostsListDeleteBtn;
