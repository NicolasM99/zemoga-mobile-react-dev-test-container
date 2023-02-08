import React, { FC } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { routeHeaderStyles } from 'src/components/RouteHeaderActions/Styles';

import { IPostActionBtn } from './@types/postActionBtn';

const PostActionBtn: FC<IPostActionBtn> = ({ name, onPress, color = 'black' }: IPostActionBtn) => {
  return (
    <TouchableOpacity style={routeHeaderStyles.routeHeaderAction} onPress={onPress}>
      <FontAwesome5 color={color} name={name} size={24} />
    </TouchableOpacity>
  );
};

export default PostActionBtn;
