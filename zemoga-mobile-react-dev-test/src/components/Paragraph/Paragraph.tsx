import React, { FC } from 'react';

import { Text } from 'react-native';

import { IParagraph } from './@types/paragraph';

const Paragraph: FC<IParagraph> = ({ children, style = {} }: IParagraph) => {
  return <Text style={{ marginTop: 16, marginBottom: 16, ...style }}>{children}</Text>;
};

export default Paragraph;
