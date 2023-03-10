import React, { FC } from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View } from 'react-native';

import { COLORS } from 'src/constants/theme/colors';

import { IPostSelectBtn } from './@types/postSelectBtn';

const PostSelectBtn: FC<IPostSelectBtn> = ({ isSelected = false }: IPostSelectBtn) => {
  return (
    <View testID="postSelectIcon" style={{ marginRight: 16 }}>
      <FontAwesome
        color={!isSelected ? 'rgba(0,0,0, 0.2)' : COLORS.primary}
        name={!isSelected ? 'circle' : 'check-circle'}
        size={20}
      />
    </View>
  );
};

export default PostSelectBtn;
