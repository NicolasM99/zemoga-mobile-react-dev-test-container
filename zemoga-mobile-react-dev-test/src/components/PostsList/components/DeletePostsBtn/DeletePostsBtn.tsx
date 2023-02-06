import React, { FC } from 'react';
import { View } from 'react-native';
import { IButton } from 'src/components/Button/@types/button';
import Button from 'src/components/Button/Button';
import { PostsListContextType } from '../../@types/postListContext';
import { usePostsListContext } from '../../context/PostsListContext';

const DeletePostsBtn: FC<IButton> = (props: IButton) => {
  const { postsToDelete } = usePostsListContext() as PostsListContextType;
  return (
    <Button
      variant="danger"
      rounded={false}
      title={`Delete ${postsToDelete.length} post${postsToDelete.length > 1 ? 's' : ''}`}
      {...props}
    />
  );
};

export default DeletePostsBtn;
