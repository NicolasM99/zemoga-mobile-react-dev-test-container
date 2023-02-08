import React, { FC } from 'react';
import { Text } from 'react-native';
import { IHeader } from './@types/header';
import { fontSizes, headerStyles } from './Styles';

const Header: FC<IHeader> = ({ children, bold = true, variant = 'h1' }: IHeader) => {
  return (
    <Text
      style={{
        fontSize: fontSizes[variant],
        fontWeight: bold ? 'bold' : 'normal',
        ...headerStyles.font
      }}
    >
      {children}
    </Text>
  );
};

export default Header;
