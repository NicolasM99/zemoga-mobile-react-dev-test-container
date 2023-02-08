import React, { FC } from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';

export interface PostFavouriteIconProps {
  onSetFavourite?: (event: GestureResponderEvent) => void;
  isFavourite?: boolean;
  isReadOnly?: boolean;
}

const PostFavouriteIcon: FC<PostFavouriteIconProps> = ({
  onSetFavourite,
  isFavourite = false,
  isReadOnly = false
}: PostFavouriteIconProps) => {
  if (isReadOnly && !isFavourite) return <></>;
  return (
    <TouchableOpacity onPress={(e) => (isReadOnly ? null : onSetFavourite?.(e))}>
      <View style={{ flex: 1, marginLeft: 8 }}>
        <FontAwesome color={!isFavourite ? 'rgba(0,0,0, 0.2)' : 'orange'} name="star" size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default PostFavouriteIcon;
