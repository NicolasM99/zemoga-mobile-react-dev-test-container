import React, { FC } from 'react';
import { IButton } from 'src/components/Button/@types/button';
import Button from 'src/components/Button/Button';

const DeleteUnfavouritePostsBtn: FC<IButton> = (props: IButton) => {
  return (
    <Button
      variant="danger"
      outlined
      rounded={false}
      title={`Delete all unfavourite posts`}
      {...props}
    />
  );
};

export default DeleteUnfavouritePostsBtn;
