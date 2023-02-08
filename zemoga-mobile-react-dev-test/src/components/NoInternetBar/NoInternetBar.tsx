import React, { FC } from 'react';

import { View } from 'react-native';

import { InternetStatusContextType } from 'src/context/@types/internetStatusContext';
import { useInternetStatusContext } from 'src/context/InternetStatusContext';

import { noInternetBarStyles } from './Styles';
import Header from '../Header/Header';

const NoInternetBar: FC = () => {
  const { internetStatus } = useInternetStatusContext() as InternetStatusContextType;
  if (!internetStatus)
    return (
      <View style={noInternetBarStyles.container}>
        <Header variant="h3" bold={false} style={noInternetBarStyles.message}>
          No internet access. You're seeing old posts
        </Header>
      </View>
    );
  return <></>;
};

export default NoInternetBar;
