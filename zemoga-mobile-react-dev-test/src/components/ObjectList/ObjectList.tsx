import React, { FC } from 'react';

import { Text, View } from 'react-native';

import { IObjectList } from './@types/objectList';
import { objectToList } from './util/objectToList';

const ObjectList: FC<IObjectList> = ({ objectData }: IObjectList) => {
  const objectList = objectToList(objectData);
  const printSpaces = (level = 0) => {
    let spaces = '';
    if (!level) return '';
    for (let i = 0; i < level; i++) {
      spaces += '  ';
    }
    return spaces;
  };
  return (
    <View>
      {objectList.map(({ key, value, level }: any) => (
        <Text key={key + value + level} style={{ marginTop: 4 }}>
          <Text style={{ fontWeight: 'bold' }}>
            {printSpaces(level)}
            {key.charAt(0).toUpperCase() + key.slice(1)}:{' '}
          </Text>
          {value}
        </Text>
      ))}
    </View>
  );
};

export default ObjectList;
