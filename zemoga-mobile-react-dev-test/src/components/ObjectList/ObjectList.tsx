import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { IObjectList } from './@types/objectList';
import { objectToList } from './util/objectToList';

const ObjectList: FC<IObjectList> = ({ objectData }: IObjectList) => {
  const objectList = objectToList(objectData);
  const printSpaces = (level: number = 0) => {
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
        <Text style={{ marginTop: !value ? 10 : 4 }}>
          <Text style={{ fontWeight: 'bold' }}>
            {printSpaces(level)}
            {key}:{' '}
          </Text>
          {value}
        </Text>
      ))}
    </View>
  );
};

export default ObjectList;
