import React, { FC } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';

import { IIconFloatingButton } from './@types/iconFloatingButton';
import { iconFloatingButtonStyles } from './Styles';

const IconFloatingButton: FC<IIconFloatingButton> = ({
  icon,
  onPress,
  disabled = true
}: IIconFloatingButton) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View
        style={{
          ...iconFloatingButtonStyles.container,
          ...(disabled ? iconFloatingButtonStyles.disabled : {})
        }}
      >
        <FontAwesome5 name={icon} size={32} color={'white'} />
      </View>
    </TouchableOpacity>
  );
};

export default IconFloatingButton;
