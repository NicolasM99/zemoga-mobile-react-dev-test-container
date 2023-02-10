import React, { FC } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

import { routeHeaderStyles } from 'src/components/RouteHeaderActions/Styles';

import { IPostActionBtn } from './@types/postActionBtn';

const PostActionBtn: FC<IPostActionBtn> = ({
  name,
  onPress,
  color = 'black',
  disabled = false
}: IPostActionBtn) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View
        style={{
          ...routeHeaderStyles.routeHeaderAction,
          ...(disabled ? routeHeaderStyles.disabled : {})
        }}
      >
        <FontAwesome5 color={color} name={name} size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default PostActionBtn;
