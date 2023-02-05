import React, { FC } from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity, View } from 'react-native';

import { routeHeaderStyles } from './Styles';

export interface IRouteHeaderAction {
  ActionBtn: FC;
  name: string;
}

interface RouteHeaderActionProps {
  actions: Array<IRouteHeaderAction> | [];
}

const RouteHeaderActions: FC<RouteHeaderActionProps> = ({
  actions = []
}: RouteHeaderActionProps) => (
  <View style={routeHeaderStyles.routeHeaderActionsContainer}>
    {actions.map(({ ActionBtn, name }) => (
      <ActionBtn key={name} />
    ))}
  </View>
);

export default RouteHeaderActions;
