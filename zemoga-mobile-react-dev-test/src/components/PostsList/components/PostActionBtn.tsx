import React, { FC } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native';
import { routeHeaderStyles } from 'src/components/RouteHeaderActions/Styles';
import { IPostActionBtn } from './@types/postActionBtn';

const PostActionBtn: FC<IPostActionBtn> = ({ name, onPress, color = 'black' }: IPostActionBtn) => {
  return (
    <TouchableOpacity key={name} style={routeHeaderStyles.routeHeaderAction} onPress={onPress}>
      <FontAwesome color={color} name={name} size={24} />
    </TouchableOpacity>
  );
};

export default PostActionBtn;
