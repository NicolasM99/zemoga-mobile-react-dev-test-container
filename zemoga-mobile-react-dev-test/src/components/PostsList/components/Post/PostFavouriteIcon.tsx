import React, { FC } from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';

export interface PostFavouriteIconProps {
  onSetFavourite?: (event: GestureResponderEvent) => void;
  isFavourite?: boolean;
}

const PostFavouriteIcon: FC<PostFavouriteIconProps> = ({
  onSetFavourite,
  isFavourite = false
}: PostFavouriteIconProps) => {
  return (
    <TouchableOpacity onPress={onSetFavourite}>
      <View style={{ flex: 1 }}>
        <FontAwesome color={!isFavourite ? 'rgba(0,0,0, 0.2)' : 'orange'} name="star" size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default PostFavouriteIcon;
