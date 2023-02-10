import React, { FC } from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';

export interface PostFavouriteIconProps {
  onSetFavourite?: (event: GestureResponderEvent) => void;
  isFavourite?: boolean;
  isReadOnly?: boolean;
  disabled?: boolean;
}

const PostFavouriteIcon: FC<PostFavouriteIconProps> = ({
  onSetFavourite,
  isFavourite = false,
  isReadOnly = false,
  disabled = false
}: PostFavouriteIconProps) => {
  if (isReadOnly && !isFavourite) return <></>;
  return (
    <View
      style={{
        opacity: disabled ? 0.5 : 1,
        marginLeft: 8,
        position: 'absolute',
        right: 0,
        padding: 16
      }}
    >
      <TouchableOpacity
        testID="postFavouriteIcon"
        disabled={disabled}
        onPress={(e) => (isReadOnly ? null : onSetFavourite?.(e))}
      >
        <FontAwesome color={!isFavourite ? 'rgba(0,0,0, 0.2)' : 'orange'} name="star" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default PostFavouriteIcon;
