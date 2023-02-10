import React, { FC } from 'react';

import { COLORS } from 'src/constants/theme/colors';
import { InternetStatusContextType } from 'src/context/@types/internetStatusContext';
import { useInternetStatusContext } from 'src/context/InternetStatusContext';
import { clearValues, generalAction } from 'src/redux/actions';
import { GET_POSTS } from 'src/redux/actionTypes';
import { useRedux } from 'src/redux/hooks/useRedux';
import { POSTS_API } from 'src/redux/paths';
import { persistor } from 'src/redux/store';

import PostActionBtn from './PostActionBtn';
import { PostsListContextType } from '../@types/postListContext';
import { usePostsListContext } from '../context/PostsListContext';

const PostsListRefreshBtn: FC = () => {
  const { isDeletingItems, setIsLoading } = usePostsListContext() as PostsListContextType;
  const [dispatch] = useRedux();
  const { internetStatus } = useInternetStatusContext() as InternetStatusContextType;
  const handleRefresh = () => {
    setIsLoading(true);
    dispatch(clearValues());
    persistor.pause();
    persistor.flush().then(() => {
      return persistor.purge().then(() => {
        persistor.persist();
        dispatch(generalAction({ actionType: GET_POSTS, api: POSTS_API }));
      });
    });
  };
  if (!isDeletingItems)
    return (
      <PostActionBtn
        disabled={!internetStatus}
        color={COLORS.primary}
        name="sync"
        onPress={() => handleRefresh()}
      />
    );
  return <></>;
};

export default PostsListRefreshBtn;
