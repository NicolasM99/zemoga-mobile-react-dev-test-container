import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IButton } from './@types/button';
import { buttonStyles } from './Styles';

const Button: FC<IButton> = ({
  title = '',
  variant = 'primary',
  style,
  outlined = false,
  rounded = true
}: IButton) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...buttonStyles.container,
          ...buttonStyles[variant],
          ...(rounded && buttonStyles.rounded),
          ...style
        }}
      >
        <Text style={{ ...buttonStyles.title }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
