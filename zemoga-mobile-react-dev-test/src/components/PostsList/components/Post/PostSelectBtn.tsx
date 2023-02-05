import React, { FC } from 'react';
import { View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { IPostSelectBtn } from './@types/postSelectBtn';

const PostSelectBtn: FC<IPostSelectBtn> = ({ isSelected = false }: IPostSelectBtn) => {
  return (
    <View style={{ marginRight: 16 }}>
      <FontAwesome
        color={!isSelected ? 'rgba(0,0,0, 0.2)' : 'red'}
        name={!isSelected ? 'circle' : 'check-circle'}
        size={20}
      />
    </View>
  );
};

export default PostSelectBtn;
