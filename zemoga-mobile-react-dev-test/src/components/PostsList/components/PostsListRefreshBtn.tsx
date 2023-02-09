import React, { FC } from 'react';

import { COLORS } from 'src/constants/theme/colors';
import { generalAction } from 'src/redux/actions';
import { GET_POSTS } from 'src/redux/actionTypes';
import { useRedux } from 'src/redux/hooks/useRedux';
import { POSTS_API } from 'src/redux/paths';

import PostActionBtn from './PostActionBtn';
import { PostsListContextType } from '../@types/postListContext';
import { usePostsListContext } from '../context/PostsListContext';

const PostsListRefreshBtn: FC = () => {
  const { isDeletingItems, setIsLoading } = usePostsListContext() as PostsListContextType;
  const [dispatch] = useRedux();
  const handleRefresh = () => {
    setIsLoading(true);
    dispatch(generalAction({ actionType: GET_POSTS, api: POSTS_API }));
  };
  if (!isDeletingItems)
    return <PostActionBtn color={COLORS.primary} name="sync" onPress={() => handleRefresh()} />;
  return <></>;
};

export default PostsListRefreshBtn;
