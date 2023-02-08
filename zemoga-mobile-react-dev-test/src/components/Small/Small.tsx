import React, { FC } from 'react';
import { Text } from 'react-native';
import { ISmall } from './@types/small';

const Small: FC<ISmall> = ({ children }: ISmall) => {
  return <Text style={{ fontSize: 12 }}>Posted by "{children}"</Text>;
};

export default Small;
