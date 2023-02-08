import React, { FC } from 'react';

import { ActivityIndicator, View } from 'react-native';

import { COLORS } from 'src/constants/theme/colors';

const LoadingScreen: FC = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

export default LoadingScreen;
