import React, { FC } from 'react';

import { Text } from 'react-native';

import { ISmall } from './@types/small';

const Small: FC<ISmall> = ({ children, testID }: ISmall) => {
  return (
    <Text testID={testID} style={{ fontSize: 12 }}>
      {children}
    </Text>
  );
};

export default Small;
