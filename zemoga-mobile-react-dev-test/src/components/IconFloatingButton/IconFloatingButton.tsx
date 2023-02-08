import React, { FC } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';

import { IIconFloatingButton } from './@types/iconFloatingButton';
import { iconFloatingButtonStyles } from './Styles';

const IconFloatingButton: FC<IIconFloatingButton> = ({ icon, onPress }: IIconFloatingButton) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={iconFloatingButtonStyles.container}>
        <FontAwesome5 name={icon} size={32} color={'white'} />
      </View>
    </TouchableOpacity>
  );
};

export default IconFloatingButton;
