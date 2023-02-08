import React, { FC } from 'react';

import { Text } from 'react-native';

import { IHeader } from './@types/header';
import { fontSizes, headerStyles } from './Styles';

const Header: FC<IHeader> = ({ children, bold = true, variant = 'h1', style = {} }: IHeader) => {
  return (
    <Text
      style={{
        fontSize: fontSizes[variant],
        fontWeight: bold ? 'bold' : 'normal',
        ...headerStyles.font,
        ...style
      }}
    >
      {children}
    </Text>
  );
};

export default Header;
