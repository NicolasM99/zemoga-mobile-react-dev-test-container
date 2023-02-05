import React from 'react';
import { View } from 'react-native';
import Button from 'src/components/Button/Button';
import { PostsListContextType } from '../../@types/postListContext';
import { usePostsListContext } from '../../context/PostsListContext';

const DeletePostsBtn = () => {
  const { postsToDelete } = usePostsListContext() as PostsListContextType;
  return (
    <View style={{ width: '100%', bottom: 0, position: 'absolute' }}>
      <Button
        rounded={false}
        title={`Delete ${postsToDelete.length} post${postsToDelete.length > 1 ? 's' : ''}`}
      />
    </View>
  );
};

export default DeletePostsBtn;
