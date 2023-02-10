import React, { FC } from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { IButton } from './@types/button';
import { buttonStyles } from './Styles';

const Button: FC<IButton> = ({
  title = '',
  variant = 'primary',
  style,
  outlined = false,
  rounded = true,
  onPress
}: IButton) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...buttonStyles.container,
          ...buttonStyles[variant],
          ...(rounded && buttonStyles.rounded),
          ...(outlined && buttonStyles[`outlined_${variant}`]),
          ...style
        }}
      >
        <Text
          style={{
            ...buttonStyles.title,
            ...(outlined && buttonStyles[`titleOutlined_${variant}`]),
            ...(outlined && buttonStyles.titleOutlined)
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
