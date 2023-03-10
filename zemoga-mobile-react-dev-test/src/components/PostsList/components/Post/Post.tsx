import React, { FC } from 'react';

import { PostProps } from './@types/post';
import PostContainer from './PostContainer';
import PostFavouriteIcon from './PostFavouriteIcon';
import PostSelectBtn from './PostSelectBtn';
import PostTitle from './PostTitle';

const Post: FC<PostProps> = ({
  onPressPost,
  onSetFavourite,
  isFavourite = false,
  title = '',
  isSelected = false,
  isDeletingItems = false,
  actionsDisabled = false
}) => {
  return (
    <PostContainer onPressPost={onPressPost}>
      {isDeletingItems && <PostSelectBtn isSelected={isSelected} />}
      <PostTitle>{title}</PostTitle>
      <PostFavouriteIcon
        disabled={actionsDisabled}
        isReadOnly={isDeletingItems}
        onSetFavourite={onSetFavourite}
        isFavourite={isFavourite}
      />
    </PostContainer>
  );
};

export default Post;
