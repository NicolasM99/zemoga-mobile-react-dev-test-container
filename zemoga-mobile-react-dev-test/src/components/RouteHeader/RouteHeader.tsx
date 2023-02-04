import React, { FC } from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

import { routeHeaderStyles } from './Styles';

export type RouteHeaderAction = {
  icon: keyof typeof FontAwesome.glyphMap; //!TODO: change
  onPress: () => void;
};

interface RouteHeaderProps {
  title: string;
  actions: Array<RouteHeaderAction> | [];
  showGoBackBtn?: boolean;
  showActions?: boolean;
}

const RouteHeader: FC<RouteHeaderProps> = ({
  title = '',
  actions = [],
  showGoBackBtn = false,
  showActions = false
}: RouteHeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={routeHeaderStyles.routeHeaderContainer}>
      {showGoBackBtn && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={routeHeaderStyles.routeHeaderGoBackBtnContainer}
        >
          <FontAwesome name="angle-left" size={24} />
        </TouchableOpacity>
      )}
      <Text style={routeHeaderStyles.routeHeaderTitle}>{title}</Text>
      {showActions && (
        <View style={routeHeaderStyles.routeHeaderActionsContainer}>
          {actions.map((action) => (
            <TouchableOpacity
              key={action.icon}
              style={routeHeaderStyles.routeHeaderAction}
              onPress={action.onPress}
            >
              <FontAwesome name={action.icon} size={24} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default RouteHeader;
